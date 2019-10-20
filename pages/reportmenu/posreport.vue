<template>
	<view class="warp">
		
	<view class="header">
		<uni-segmented-control :current="current0" :values="items0" @clickItem="onClickItem0" style-type="button" active-color="#108ee9"></uni-segmented-control>
		
	<view style="display: flex;justify-content: center;align-items: center; z-index: 9999;">
	<text style="font-size: 28upx;color:red">{{BeginDate}} 至 {{EndDate}}</text>
	</view>
		   <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#108ee9"></uni-segmented-control>   
				<view class="headtitle">
					<view class="textbox"  :style="{width:ti==0?'100upx':widthstyle(ti)+'upx','margin-right':ti==0?'10upx':'0'}" :key="ti" v-for="(titem,ti) in headtitle">
						<text style="font-size: 35upx;">{{titem.title}}</text>
					</view>
				</view>
	</view> <!-- 头部结束 titem.title=='名次'?'':txtwidht+'upx'-->			
                
					  <!-- <view v-show="current === 0"> --> <!-- :style="{'height':height+'px'}"--> 
				<view class="content1">
		                            <view class="scrollitem" hover-class="hoverclass" @longpress="longpress(ls)"  v-for="(ls,index) in datalist " :key="index"  @click="sitemclick(ls)">
										<view class="textbox" :style="{width:'100upx','margin-right':ti==0?'10upx':'0'}">  <text style="font-size: 28upx;"> {{index+1}} </text> </view>
										<view class="textbox" :style="{width:'400upx'}">  <text style="font-size: 28upx;">{{ls.Name}}</text> </view>
										<view class="textbox" :style="{width:txtwidht+'upx'}">  <text style="font-size: 28upx;">{{ls.Quantity}}</text> </view>
										<view class="textbox" v-if="current !=5" :style="{width:txtwidht+'upx'}">  <text style="font-size: 28upx;">{{ls.FactAmount}}</text> </view>
								       <view class="textbox" v-if="current ==5" :style="{width:txtwidht+'upx'}">  <text style="font-size: 28upx;">{{ls.RetailSales}}</text> </view>
										<view class="textbox" v-if="current==1 || current==2 || current==3" :style="{width:txtwidht+'upx'}"> <text style="font-size: 28upx;">{{ls.Lv}}</text> </view>
									    <view class="textbox" v-if="current==5" :style="{width:txtwidht+'upx'}"> <text style="font-size: 28upx;">{{ls.AvgPrice}}</text> </view>
									 </view>
		                                  										   
		            
	         
		          
		          <!--   	
				  <view v-show="current === 1">
		                选项卡2的内容
		            </view>
		            <view v-show="current === 2">
		                选项卡3的内容
		            </view>
					<view v-show="current === 3">
					    选项卡4的内容
					</view>
					<view v-show="current === 4">
					    选项卡5的内容
					</view>
					<view v-show="current === 5">
					    选项卡6的内容
					</view>
					-->
		        </view> 
				  
				
	<view class="footer">
	<view class="footer1">
		<text style="font-size: 35upx;color: #696969;">合计:</text>
		<text style="font-size: 35upx;color: #696969;margin-left: 200upx;">{{totalQty}}</text>
		<text style="font-size: 35upx;color: #696969;margin-left: 80upx;">{{totalAmt}}</text>
	</view>	
	
	<view style="display: flex;flex-direction: row;">
		 
	<view @click="chose(2)" class="footer2">	
	<text style="font-size: 35upx;color: #696969;">排序</text>	
	</view>
	<view @click="chose(1)" style="display: flex;width: 375upx;justify-content: center;height: 60upx;padding-top: 19upx;">
		<text style="font-size: 35upx;color: #696969;">筛选</text> 
    </view>
	
	</view>	
		
	</view>	
			<!-- @input="inputPopup"-->
			<popups :popData="chosemenu" :x="x" :y="y" ref="vpop"  @tapPopup="Popup" @input="inputPopup"  :value="showflag" placement="bottom-end"></popups>
			
			<popups :popData="sortmenu" :x="x2" :y="y" ref="vsort"  @tapPopup="Popup2" @input="inputPopup"  :value="vsortshow" placement="bottom-start"></popups>
			
	</view>
</template>

<script>
	import {
	    mapState
	} from 'vuex'
	
	import {uniNavBar,uniLoadMore} from '@dcloudio/uni-ui'
	import uniSegmentedControl from '../../components/uni-segmented-control/uni-segmented-control.vue'
	import popups from '../../components/chunLei-popups/chunLei-popups.vue'
	import module1 from '../../jstools/mytool.js'
	const datestr = module1.formatDate(new Date(),'yyyy-MM-dd')
	const { screenWidth,screenHeight,windowWidth, windowHeight,navigationBarHeight } = uni.getSystemInfoSync(); //获取屏幕的高度与宽度
	var that,
	totallist=[]//总记录返回的都放在这里
	export default{
		computed: mapState(['forcedLogin', 'hasLogin', 'userName','userinfor']),
		components: {uniNavBar,uniSegmentedControl,popups,uniLoadMore},
		data(){
			return{
				items0:['今天','昨天','近7天','近30天','自定义'],
				current0: 0,
				items: ['店铺','品类','品牌','厂商','导购','销售排行'],
				current: 0,
				BeginDate:datestr,
				EndDate:datestr	,
				condition:[],//用于存储多选条件的在选择页用到 数组
				strcondition:'',//这个是查询条件了
				loggingtype:'more',//防止多次滑动标志，加载条数不正确
				scrollTop: 0,
				old: {
			    scrollTop: 0
				      },
				height:Number(windowHeight)-Number(160), // +Number(44),
				datalist:[//显示列表
					
				],
				currpage:1,//当前页
				totalQty:0,//数量金额合计
				totalAmt:0,
				isDoRefresh:true,//是否重新查询条件onshow方法的，因返回都会经过此方法
				headtitle:[{title:'名次'},{title:'店铺'},{title:'数量'},{title:'金额'}],
				txtwidht:150,
				chosemenu:[{title:'店铺类别'},{title:'店铺'}],
				sortmenu:[{title:'金额'},{title:'数量'}],
				screenHeight:screenHeight,
				showflag:false ,//气泡菜单参数
				vsortshow:false,
				descflag:true,//金额降序排序
				x:Number(screenWidth)-Number(screenWidth/5),
				x2:Number(screenWidth)/5,
				y:Number(screenHeight)-Number(80)
			}
		}
		,onLoad(p){
			that =this
			console.log('x宽度:'+this.x)
			console.log('y高度:'+this.y)
			console.log('可用宽度:'+windowWidth)
			console.log('可用高度:'+windowHeight)
			console.log('高度:'+this.height)
		  
		},onReady(){
		console.log('onReady')
		console.log('state中的userinfor:'+JSON.stringify(this.userinfor))
		},onBackPress(){
		console.log('onBackPress')	
		
		},onReachBottom(){ //页面上拉  that.currPage 默认为1 上拉加1
			//  console.log(e)
			that.currpage =Number(that.currpage)+Number(1)
			var len=this.datalist.length
			 if(len <= totallist.length){
					//this.loggingtype='loading'
					uni.showLoading({
						title:'正在加载...',
						mask:true
					})
					setTimeout(()=>{			
					if(that.currpage ==1){
					that.getData()	
					}else if(that.currpage>1){
					 //从列表取，不再网络请求
					var tmplist=that.pagination(that.currpage, 15, totallist)
					for(var i=0;i<tmplist.length;i++){
						that.datalist.push(tmplist[i])
					}
						 
					}	
					},2000) 
			       uni.hideLoading()
			this.loggingtype='more'
				}else{
			uni.showToast({
				icon:'none',
				title:'没有更多数据了',
				duration:2000
			})	
			return
				} 
		}
		,onShow(){
			console.log('condition:'+this.condition)
			console.log('this.isDoRefresh的值:'+this.isDoRefresh)
			if(this.isDoRefresh){
			that.currpage=1 //切换重新获取
			if(this.condition.length>0){
				//debugger
				var str1=''
				if(this.condition.length>1){
				
					for(var i=0;i<this.condition.length;i++){
						if(i==this.condition.length-1){
						str1 =str1+"'"+this.condition[i]+"'"
						}else{
						str1 =str1+"'"+this.condition[i]+"',"	
						}
						console.log('str1:'+str1)
					}
				     this.strcondition =str1
				  } else {
				this.strcondition ="'"+this.condition[0]+"'"	
				}
				console.log('改变后的this.strcondition:'+this.strcondition)
			}
			
			that.getData()
			}//isDoRefresh 结束
		},onNavigationBarButtonTap(e) {
		/*	if(e.index==0){ //点击左按扭
			this.leftclick()	
			}else if(e.index=1){
				
			}
			console.log(e) */		
			this.rightclick()
		}
		,methods:{
			widthstyle(id){ //定位标题的宽度
				if(id==1){ //店铺标题
					return 400
				}else if(id !=0 && id !=1){
					return 150
				}
			},
			inputPopup(e){
			/*	uni.showToast({
					icon:'none',
					title:JSON.stringify(e),
					duration:2000
				}) */
				this.showflag =e
				this.vsortshow =e
			},
			Popup(e){
			/*	uni.showToast({
					icon:'none',
					title:JSON.stringify(e),
					duration:2000
				}) */
			
			
			var send ='' //代表查询什么表
			if(e.title=='店铺'){
			  send='getWarehouse' 
			}else if(e.title=='品类'){
			  send ='getGoodsType'
			}else if(e.title=='品牌'){
			  send ='getBrand'
			}else if(e.title=='厂商'){
			  send ='getGoodsSupplier'	
			}else if(e.title=='导购'){
			  send='getEmployee' 	
			}else if(e.title=='货号'){
			  send='getPosSalesGoods'	
			}	
				uni.navigateTo({
					url:'../select/select?send='+send
					
				}) 
				this.showflag =false
				
			},Popup2(e){
				this.vsortshow =false
				if(e.title=='金额' && this.descflag){//默认是降序
				this.descflag =false 	
				this.datalist.sort(this.compare('FactAmount'))
                // console.log(arr.sort(compare('FactAmount')))
				}else if(e.title=='金额' && !this.descflag){
					this.descflag =true 
				this.datalist.sort(this.compare('FactAmount')).reverse()//	降序
				}else if(e.title=='数量' && this.descflag){
				this.descflag =false
				this.datalist.sort(this.compare('Quantity'))	
				}else if(e.title=='数量' && !this.descflag){
					this.descflag =true 
				this.datalist.sort(this.compare('Quantity')).reverse()//	降序	
				}
				
			},compare(property){ //这个是升序
            return function(a,b){
             var value1 = a[property];
             var value2 = b[property];
             return value1 - value2;
              }

			},sitemclick(ls){
			console.log(JSON.stringify(ls))
			console.log('hostName:'+this.userinfor.hostName)
			if(this.items[this.current] !='销售排行'){
			uni.navigateTo({
				url:'posreportdetail?id='+ls.keyid
			//	animationDuration:1000
				
			})
			}
			
			},longpress(ls){
			console.log('长按的操作:'+JSON.stringify(ls))	
			},
			chose(id){
			if(id==1){
			this.showflag =true	
			}else if(id==2){
			this.vsortshow =true	
			}
			},
			leftclick(){
				uni.navigateBack({
				    delta: 1
				});
			}
			,rightclick(){
			/*	uni.navigateTo({
				    url: '../select/select'
				}); */
			}
			, onClickItem(index) {
            if (this.current !== index) {
                this.current = index;
				
				if(this.current==0){
				this.headtitle =[{title:'名次'},{title:'店铺'},{title:'数量'},{title:'金额'}]
				//this.txtwidht =200
			   this.chosemenu =[{title:'店铺类别'},{title:'店铺'}]
			 this.$refs.vpop.popupsPosition() //调用调整位置
				}else if(this.current==1){
				//	console.log('this.current的值:'+this.current.toString())
					this.headtitle =[{title:'名次'},{title:'品类'},{title:'数量'},{title:'金额'},{title:'占比%'}]
					this.chosemenu =[{title:'品类'}]
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
					
					
					 for(var i=0;i<this.datalist.length;i++){
			        	//console.log('aaaa')
						Vue.set(this.datalist[i],'LvStr','100%')
						//console.log(this.datalist[i].LvStr)
					}  
				
				}else if(this.current==2){
					this.headtitle =[{title:'名次'},{title:'品牌'},{title:'数量'},{title:'金额'},{title:'占比%'}]
					this.chosemenu =[{title:'品牌'}]
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
				}else if(this.current==3){
					this.headtitle =[{title:'名次'},{title:'厂商'},{title:'数量'},{title:'金额'},{title:'占比%'}]
					this.chosemenu =[{title:'厂商'}] //选择查询条件
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
				}else if(this.current==4){
					this.headtitle =[{title:'名次'},{title:'导购'},{title:'数量'},{title:'金额'}],
					this.chosemenu =[{title:'导购'}]
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
				}else if(this.current==5){
					this.headtitle =[{title:'名次'},{title:'货号'},{title:'数量'},{title:'零售价'},{title:'平均售价'}]
					this.chosemenu =[{title:'货号'}]
				/*	for(var i=0;i<this.datalist.length;i++){
						//console.log('aaaa')
						Vue.set(this.datalist[i],'UnitPrice','15500.00')
						//console.log(this.datalist[i].LvStr)
					}  */
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
				}
				that.currpage=1 //切换重新获取
				this.strcondition=''
				that.getData()
            }
            }
			, onClickItem0(index) {
			if (this.current0 !== index) {
			    this.current0 = index;
			}
			if(index==0){
				this.BeginDate =datestr
				this.EndDate =datestr	
				 that.currpage=1 //切换重新获取
				that.getData()
			}else if(index==1){
				  var date =new Date()
				    module1.AddDays(date,-1) //使用了set 方法不会返回值
				  //this.log('昨天的数据：'+date)
				this.BeginDate=module1.formatDate(date,'yyyy-MM-dd')
				this.EndDate=module1.formatDate(date,'yyyy-MM-dd')
				 that.currpage=1 //切换重新获取
				that.getData()
			}else if(index==2){
				var date2 =new Date()
				 module1.AddDays(date2,-7) //使用了set 方法不会返回值
				this.BeginDate=module1.formatDate(date2,'yyyy-MM-dd')
				 this.EndDate=module1.formatDate(new Date(),'yyyy-MM-dd')
				  that.currpage=1 //切换重新获取
				 that.getData()
			}else if(index==3){
				var date2 =new Date()
				 module1.AddDays(date2,-30) //使用了set 方法不会返回值
			   this.BeginDate=module1.formatDate(date2,'yyyy-MM-dd')
				this.EndDate=module1.formatDate(new Date(),'yyyy-MM-dd')
				 that.currpage=1 //切换重新获取
				that.getData()
			}else if(index ==4){
				console.log('index==4:')
				uni.navigateTo({
					url:'../select/selectdate'
					
				}) 
			}
			
		 },getData(){ //获取数据并传参数 重新获取时 要重置
		 uni.showLoading({
		 	title:'正在加载',
			mask:true
		 })
		     that.datalist.splice(0,that.datalist.length)
			uni.request({
			 	url:uni.getStorageSync('ip')+'/salesTicket.do?report88',
			 	data:{hostName:uni.getStorageSync('hostName'),BeginDate:this.BeginDate,EndDate:this.EndDate,disType:this.items[this.current],Condition:this.strcondition},
			 	method:'POST',
			 	header:{
			 		'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
			 		'token':uni.getStorageSync('token')
			 	},success:(res)=>{
					totallist =res.data.obj || []
					if(totallist.length ==0){
						uni.showToast({
							icon:'none',
							title:'暂无数据返回'
						})
						return
					}else{
					
					var array=that.pagination(that.currpage,15,totallist)
					for(var i=0;i<array.length;i++){
						that.datalist.push(array[i])
					}
					that.total()			
					}
					uni.hideLoading()
				},
				fail:(res)=>{
					uni.showToast({
						icon:'none',
						title: '网络请求异常'
					})
					uni.hideLoading()
				},
			});
			uni.hideLoading() 
		 },pagination(pageNo, pageSize, array) { //分页
                var offset = (pageNo - 1) * pageSize;
                return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
          },total(){ //数量金额合计
		  var qty=0,amt=0
			  for(var i=0;i<totallist.length;i++){
				 qty =Number(qty)+Number(totallist[i].Quantity)
				 amt =Number(amt)+Number(totallist[i].FactAmount)
			  }
			  if(qty){
			   that.totalQty=qty
			   }
			   if(amt){
			   that.totalAmt =parseFloat(amt).toFixed(2)	   
			   }
		  }
		 
		}
	}
</script>

<style>
	.warp{
        display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
		
		
	}
	.header{
		z-index: 9999;
		position: fixed;
        top:0upx;
	    width: 100%;
		background-color: #FFFFFF;/*要设置背景色,不然能看到滚动的底层的*/
        padding-top: 10px;	 
		
	}
	.headtitle{
		width: 100%;
		display: flex;
		flex-direction: row;
		border-bottom-width: 1upx;
		border-bottom-style: solid;
		border-color: #808080;
	}
	.content1{
     	display: flex;
		flex-direction: column;
		margin-top: 270upx;
	/*	margin-bottom: 160upx; 底部的高度*/
		width: 100%;
		margin-bottom: 160upx;
	}
	.scroll-Y{
		/* background-color: red; */
	   display: flex;
	   flex-direction: column;
	}
	.scrollitem{
		display: flex;
		flex-direction: row;
		border-bottom-width: 1upx;
		border-bottom-style: solid;
		border-color: #D9D9D9;
		
	}
	.hoverclass{
		background-color: #8F8F94;
	}
	.textbox{
		display: flex;
		
		height: 70upx;
	/*	width: 200upx; 
		text-align: center;*/
		justify-content: flex-start;
		text-align: center;
		align-items: center;
	/*	line-height: 70upx;
		white-space: nowrap;
		overflow: hidden; */
		text-overflow: ellipsis;
		word-break: break-all;
	}
	.footer{
	 display: flex;	
	 flex-direction: column;
	 z-index: 9999;
	 position: fixed;
	 left: 0;
	 bottom: 0;
	 right: 0;
	 height: 160upx;
	 background-color:#FFF;/*#DCDCDC;*/
	 border-color:#D9D9D9;
	 border-top-width: 1upx;
	 border-top-style: solid;
	}
	.footer1{
		display: flex;
		flex-direction: row;
		height: 60upx;
		border-bottom-color: #808080;
		border-bottom-width: 1upx;
		border-bottom-style: solid;
		padding-top: 19upx;
		
	}
	.footer2{
		display: flex;
		flex-direction: row;
		height: 60upx;
		border-bottom-color: #808080;
		border-right-width: 1upx;
		border-right-style: solid;
		padding-top: 19upx;
		width: 375upx;
		justify-content: center;
	}
</style>