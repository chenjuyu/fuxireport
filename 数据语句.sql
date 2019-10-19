go
alter proc  [dbo].[ExecDayDataSourceForGoods]
as 
set nocount on
declare @sql varchar(6000),@BeginDate DateTime,@EndDate DateTime,@ID varchar(40),@Count int
--减轻同步压力 只删除前两个月的数据，除另加字段 到货号明细 到时以货品汇总
--if exists(select name from [sysobjects] where name='MobileDayDataSource')
--truncate table MobileDayDataSource
select @BeginDate=Convert(varchar(10),DATEADD(MM,-2,GETDATE()),121),@EndDate=Convert(varchar(10),GETDATE(),121)+' 00:00:00.000'
if exists(select name from [sysobjects] where name='MobileDayDataSourceForGoods')
begin
delete from MobileDayDataSourceForGoods  where Date >=@BeginDate and Date<=@EndDate
end

if not exists(select name from [sysobjects] where name='MobileDayDataSourceForGoods')
set @sql='Create table MobileDayDataSourceForGoods(ID bigint not null identity(1,1)  primary key,Date DateTime,VipID varchar(20),Vip varchar(50),DepartmentID varchar(20),
Department varchar(100),GoodsTypeID varchar(20),GoodsType varchar(50),
EmployeeID varchar(20),Name varchar(50),BrandID varchar(20),Brand varchar(50),
SupplierID varchar(20),Supplier varchar(50),GoodsID varchar(30),Qty int,Amt money,RetailAmount money
)'
print @sql
exec(@sql)


if not exists(select name from [sysobjects] where name='MobileDayDataSourceLog')
Exec('Create Table MobileDayDataSourceLog (ID varchar(40) not null   primary key,ProcName nvarchar(40),BeginTime DateTime ,EndTime DateTime,userSecond int)')

set @ID=newid()

Insert into MobileDayDataSourceLog(ID,ProcName,BeginTime)    
select @ID,'ExecDayDataSourceForGoods',GETDATE()

select @Count=COUNT(1) from MobileDayDataSourceForGoods
--不包含当天的数据
 if @Count>=1
 begin
   Insert into MobileDayDataSourceForGoods(Date,VipID,DepartmentID,GoodsTypeID,EmployeeID,BrandID,SupplierID,GoodsID,Qty,Amt,RetailAmount)
   select Convert(varchar(10),a.Date,121),(case when isnull(a.vipid,'')='' then '空' else a.VIPID end) ,
              a.DepartmentID,g.GoodsTypeID,(Case  when ISNULL(a.EmployeeID,'')='' then '空' else a.EmployeeID end),
              (Case when isnull(g.BrandID,'')='' then '空' else g.BrandID end),
              (Case when isnull(g.SupplierID,'')='' then '空' else g.SupplierID end),
              b.GoodsID,
              Sum(b.Quantity),Sum(b.FactAmount),Sum(b.Quantity*g.RetailSales) 
              from POSSales a join POSSalesDetail b on a.Possalesid=b.Possalesid  
              Join Goods g on b.GoodsID=g.GoodsID where a.Date >=@BeginDate and a.Date< @EndDate and a.Type='销售单' and  a.AuditFlag=1
              Group by Convert(varchar(10),a.Date,121),(case when isnull(a.vipid,'')='' then '空' else a.VIPID end) ,
              a.DepartmentID,g.GoodsTypeID,(Case  when ISNULL(a.EmployeeID,'')='' then '空' else a.EmployeeID end),
              (Case when isnull(g.BrandID,'')='' then '空' else g.BrandID end),
              (Case when isnull(g.SupplierID,'')='' then '空' else g.SupplierID end),b.GoodsID
   
 end else 
 begin
 Insert into MobileDayDataSourceForGoods(Date,VipID,DepartmentID,GoodsTypeID,EmployeeID,BrandID,SupplierID,GoodsID,Qty,Amt,RetailAmount)
 select Convert(varchar(10),a.Date,121),(case when isnull(a.vipid,'')='' then '空' else a.VIPID end) ,
              a.DepartmentID,g.GoodsTypeID,(Case  when ISNULL(a.EmployeeID,'')='' then '空' else a.EmployeeID end),
              (Case when isnull(g.BrandID,'')='' then '空' else g.BrandID end),
              (Case when isnull(g.SupplierID,'')='' then '空' else g.SupplierID end),
              b.GoodsID,
              Sum(b.Quantity),Sum(b.FactAmount),Sum(b.Quantity*g.RetailSales) 
              from POSSales a join POSSalesDetail b on a.Possalesid=b.Possalesid  
              Join Goods g on b.GoodsID=g.GoodsID where a.Date<@EndDate and  a.Type='销售单' and  a.AuditFlag=1 
              Group by Convert(varchar(10),a.Date,121),(case when isnull(a.vipid,'')='' then '空' else a.VIPID end) ,
              a.DepartmentID,g.GoodsTypeID,(Case  when ISNULL(a.EmployeeID,'')='' then '空' else a.EmployeeID end),
              (Case when isnull(g.BrandID,'')='' then '空' else g.BrandID end),
              (Case when isnull(g.SupplierID,'')='' then '空' else g.SupplierID end),b.GoodsID
 
 end  
 /*
   set @sql='Update a set a.Department=b.Department  from MobileDayDataSource a,Department b where a.DepartmentID=b.DepartmentID and isnull(a.Department,'''')='''' '+CHAR(13)+
            'Update a set a.GoodsType=b.GoodsType  from MobileDayDataSource a,GoodsType b where a.GoodsTypeID=b.GoodsTypeID and isnull(a.GoodsType,'''')='''' '+CHAR(13)+
            'Update a set a.Name=b.Name  from MobileDayDataSource a,Employee b where a.EmployeeID=b.EmployeeID and isnull(a.Name,'''')='''' '+CHAR(13)+
            'Update a set a.Brand=b.Brand  from MobileDayDataSource a,Brand b where a.BrandID=b.BrandID and isnull(a.Brand,'''')='''' '+CHAR(13)+
            'Update a set a.Supplier=b.Supplier  from MobileDayDataSource a,Supplier b where a.SupplierID=b.SupplierID and isnull(a.Supplier,'''')='''' '+CHAR(13)+
            'Update a set a.VIP=b.VIP  from MobileDayDataSource a,vip b where a.VIPID=b.VIPID and isnull(a.VIP,'''')='''' '

  print @sql
  exec(@sql)
  */
  
--用于当天实施，没有任何数据的情况，解决查询不到数据
  if not exists(select Top 1 Date from MobileDayDataSourceForGoods)
  insert into MobileDayDataSourceForGoods(Date) select Convert(varchar(10),DateAdd(dd,-1,GetDate()),121)
  

--执行完后的时间  用时单位 秒
Update MobileDayDataSourceLog set EndTime=GETDATE() where id=@id
Update MobileDayDataSourceLog set userSecond=DATEDIFF(ss,BeginTime,EndTime) where id=@id
set nocount off

---------------------------------------------------------------------------------------------

go
ALTER Proc [dbo].[z_report88] @hostName varchar(50)='',@BeginDate varchar(10)='2019-10-16',
                       @EndDate varchar(10)='2019-10-16',@disType varchar(20)='店铺',
                       @Condition varchar(1000)='',@userID varchar(30)='1',
                       @debugFlag bit =0
 as
 /*
 Exec z_report88 'AC1','2019-01-01','2019-10-16','销售排行','','1',1
 */
 set nocount on 

 declare @sql varchar(6000),@DateStr varchar(1000),@DeptRightStr varchar(300),@C13 char(2),@GoodsStr varchar(6000),
          @groupfield varchar(100),@MaxDate varchar(10),@TTNameT varchar(200),@TableName varchar(30),@joinStr varchar(30),@Field varchar(50)
 
    select 	@DeptRightStr='and exists(select DepartmentID from DepartmentRight r ' + 
          'where a.DepartmentID=r.DepartmentID and r.RightFlag=1 and r.UserID='''+ @UserID+''') ' 
          ,@C13=CHAR(13),@GoodsStr='',@groupfield='',@TTNameT='tempdb..[ReportMasterTemp_'+@UserID+']',
          @TableName='',@joinStr='',@Field=''
 
 if not exists(select Name from sysobjects where name='ReportMaster')
 begin 

 set @sql ='Create table ReportMaster(id int not null identity(1,1) primary key,hostName varchar(50),keyid varchar(30),Name varchar(50),Quantity int,FactAmount money,Lv money,LvStr varchar(20),RetailSales money,AvgPrice money) '+@C13+
           'Create table ReportMasterDetail(id int not null identity(1,1) primary key,hostName varchar(50),keyid varchar(30),GoodsID varchar(30),Code varchar(30),Name varchar(50),Quantity int ,FactAmount money,RetailSales money,AvgPrice money,Flag int default(0))'
 
 end else begin
 
 set @sql ='delete from ReportMaster where hostName ='''+@hostName+''' '+@C13+
           'delete from ReportMasterDetail where hostName ='''+@hostName+''' '
 end

  if @debugFlag =1 select @sql 
  exec(@sql)
 
  if @BeginDate>@EndDate return
   set  @DateStr ='where a.Date >='''+@BeginDate+''' and a.Date <='''+@EndDate+' 23:59:59.997'' '
 

 
  if exists(select Name from tempdb..sysobjects where name='ReportMasterTemp_'+@UserID)
  exec('drop table '+@TTNameT)     
          
          
 if @disType<>'' 
 begin 
  if @disType ='店铺' 
  begin
  if @Condition<>''
  select @GoodsStr =@GoodsStr +' and a.DepartmentID in('+@Condition+') ' 
  
  select @groupfield ='a.DepartmentID',@TableName =',Department b ',@joinStr=' a.keyID=b.DepartmentID ',@Field='b.Department'
  end
  if @disType ='品类' 
  begin
  if @Condition<>''
  select  @GoodsStr =@GoodsStr +' and g.GoodsTypeID in('+@Condition+') '
  select @groupfield ='g.GoodsTypeID',@TableName =',GoodsType b',@joinStr=' a.keyID=b.GoodsTypeID ',@Field='b.GoodsType'
  end
  if @disType ='品牌'
  begin
  if @Condition<>''
  select  @GoodsStr =@GoodsStr +' and g.BrandID in('+@Condition+') '
  select @groupfield ='g.BrandID',@TableName=',Brand b',@joinStr=' a.keyID=b.BrandID ',@Field='b.Brand'
  end
  if @disType ='厂商' 
  begin
  if @Condition<>''
  select  @GoodsStr =@GoodsStr +' and g.supplierID in('+@Condition+') '
  
  select @groupfield ='g.supplierID',@TableName =',Supplier b',@joinStr=' a.keyID=b.SupplierID ',@Field='b.Supplier'
  
  end
   
  if @disType ='导购' 
  begin
   if @Condition<>''
  select @GoodsStr =@GoodsStr +' and a.EmployeeID in('+@Condition+') '
  select @groupfield ='a.EmployeeID',@TableName =',Employee b',@joinStr=' a.keyID=b.EmployeeID ',@Field='b.Name'
  end
  if @disType ='销售排行' 
  begin
  if @Condition<>''
  select @GoodsStr =@GoodsStr +' and b.GoodsID in('+@Condition+') ' 
   select @groupfield ='b.GoodsID',@TableName =',Goods b ',@joinStr=' a.keyID=b.GoodsID ',@Field='b.Code'
  end 
 end
 
 --MobileDayDataSource 不包含货号 把所有的都换成a.
 
-- select @MaxDate= Convert(varchar(10),MAX(Date),121) from  MobileDayDataSourceForGoods
 
 set  @sql ='select '+Replace(Replace(@groupfield,'g.','a.'),'b.','a.')+',Sum(Qty) Qty,Sum(Amt) Amt,Flag=0 into '+@TTNameT+'  from MobileDayDataSourceForGoods a '+@DateStr+Replace(Replace(@GoodsStr,'g.','a.'),'b.','a.')+@DeptRightStr+' group by '+Replace(Replace(@groupfield,'g.','a.'),'b.','a.')
 if @debugFlag =1 select @sql 
 exec(@sql)
 
  if @disType in('店铺','品类','品牌','厂商','导购')
  begin
   set @sql ='insert into ReportMasterDetail(hostName,keyID,GoodsID,Quantity,FactAmount)'+@C13+
             'select '''+@hostName+''','+Replace(Replace(@groupfield,'g.','a.'),'b.','a.')+',a.GoodsID,Sum(Qty),Sum(Amt) from MobileDayDataSourceForGoods a '+@DateStr+Replace(Replace(@GoodsStr,'g.','a.'),'b.','a.')+@DeptRightStr+' group by '+Replace(Replace(@groupfield,'g.','a.'),'b.','a.')+',a.GoodsID'
 
  if @debugFlag =1 select @sql 
   exec(@sql)
 
  end
 
 --MobileDayDataSourceForGoods 日期没有的
 
 set  @DateStr =@DateStr+' and not exists(select Date from MobileDayDataSourceForGoods c where Convert(varchar(10),a.Date,121)=Convert(varchar(10),c.Date,121) ) AND a.AuditFlag=1 and a.Type=''销售单'' '
 --Case when isnull(g.BrandID,'')='' then '空' else g.BrandID end
 set @sql ='insert into '+@TTNameT+'('+Replace(Replace(Replace(@groupfield,'g.',''),'b.',''),'a.','')+',Qty,Amt,Flag)'+@C13+
           'select Case when isnull('+@groupfield+','''')='''' then ''空'' else '+@groupfield+' end,Sum(b.Quantity),Sum(b.FactAmount),0 from POSSales a with(nolock) join POSSalesDetail b with(nolock)  on a.POSSalesID=b.POSSalesID join goods g on b.GoodsID=g.GoodsID '+@C13+
           @DateStr+@GoodsStr+@DeptRightStr+' group by '+@groupfield
 
  if @debugFlag =1 select @sql 
  exec(@sql)

 if @disType in('店铺','品类','品牌','厂商','导购')
  begin
   set @sql ='insert into ReportMasterDetail(hostName,keyID,GoodsID,Quantity,FactAmount)'+@C13+
             'select '''+@hostName+''',Case when isnull('+@groupfield+','''')='''' then ''空'' else '+@groupfield+' end,b.GoodsID,Sum(b.Quantity),Sum(b.FactAmount) from POSSales a with(nolock) join POSSalesDetail b with(nolock)  on a.POSSalesID=b.POSSalesID join goods g on b.GoodsID=g.GoodsID '+@DateStr+@GoodsStr+@DeptRightStr+' group by Case when isnull('+@groupfield+','''')='''' then ''空'' else '+@groupfield+' end, b.GoodsID'
 
  if @debugFlag =1 select @sql 
   exec(@sql)
 
  set @sql ='insert into ReportMasterDetail(hostName,keyID,GoodsID,Quantity,FactAmount,Flag)'+@C13+
           'select '''+@hostName+''',keyID,GoodsID,Sum(Quantity),Sum(FactAmount),1 from ReportMasterDetail where hostName='''+@hostName+''' and Flag=0 group by keyID,GoodsID'
  if @debugFlag =1 select @sql 
   exec(@sql)
  exec('delete from ReportMasterDetail where hostName='''+@hostName+''' and Flag=0 ') 
  
  Update ReportMasterDetail set AvgPrice=round(FactAmount/Quantity,2) where hostName=@hostName and  ISNULL(Quantity,0)<>0
  
  Update a set a.RetailSales =g.RetailSales ,a.Code=g.Code,a.Name=g.Name  from ReportMasterDetail a,Goods g where a.HostName=@hostName and a.GoodsID=g.GoodsID 
  
  end





set @sql ='insert into '+@TTNameT+'('+Replace(Replace(Replace(@groupfield,'g.',''),'b.',''),'a.','')+',Qty,Amt,Flag)'+@C13+
          'select '+Replace(Replace(Replace(@groupfield,'g.',''),'b.',''),'a.','')+',Sum(Qty),Sum(Amt), 1 from '+@TTNameT+' where Flag =0 group by '+Replace(Replace(Replace(@groupfield,'g.',''),'b.',''),'a.','')
 
 if @debugFlag =1 select @sql 
  exec(@sql)
Exec('delete from '+@TTNameT+' where Flag=0')   
 
 if @disType in('品类','品牌','厂商')
 begin 
 Exec('alter table '+@TTNameT+' add Lv money ,LvStr varchar(20),totalAmt money ')
 Exec('Update a set a.totalAmt =(select Sum(Amt) from '+@TTNameT+') from '+@TTNameT+' a') 
 Exec('update '+@TTNameT+' set Lv=100* convert(float,Amt/totalAmt) where isnull(totalAmt,0)<>0')
 Exec('Update '+@TTNameT+' set LvStr =cast(Lv as varchar(10))+''%'' where isnull(Lv,0)<>0') 
  set @sql ='insert into ReportMaster(hostName,keyid,Quantity,FactAmount,Lv,LvStr)'+@C13+
           'select '''+@hostName+''','+Replace(Replace(Replace(@groupfield,'g.',''),'b.',''),'a.','')+',Qty,Amt,Lv,LvStr from '+@TTNameT
 end else begin
 
 set @sql ='insert into ReportMaster(hostName,keyid,Quantity,FactAmount)'+@C13+
           'select '''+@hostName+''','+Replace(Replace(Replace(@groupfield,'g.',''),'b.',''),'a.','')+',Qty,Amt from '+@TTNameT 
 end

           
  if @debugFlag =1 select @sql 
  exec(@sql)
  
  
  set @sql ='Update a set a.Name ='+@Field+' from ReportMaster a '+@TableName+' where '+@joinStr+' and a.hostName='''+@hostName+''' '
  
  if @debugFlag =1 select @sql 
  exec(@sql)
  
  if @disType ='销售排行' 
  begin --FactAmount 货号时 改为零售价显示
  Exec('Update ReportMaster set AvgPrice=FactAmount/Quantity where hostName='''+@hostName+''' and isnull(Quantity,0)<>0')
   Exec('Update a set a.RetailSales=g.RetailSales from ReportMaster a ,goods g  where hostName='''+@hostName+''' and a.keyid=g.goodsid ')
 
  end
  
  Exec('drop table '+@TTNameT)
 
 
 
 
 set nocount off                 


