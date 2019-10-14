<template>
	<view class="warp">
		<view class="header">
			<input class="uni-input" type="text" v-model="keyword" @input="input" confirm-type="search" placeholder="请输入内容查询" />
		</view>
		  <view class="uni-list">
			  <checkbox-group @change="checkboxChange">
			                <label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
			                    <view>
			                        <checkbox :value="item.id" :checked="item.checked" />
			                    </view>
			                    <view>{{item.Name}}</view>
			                </label>
			  </checkbox-group>
		</view>	  
			 		<view style=" display: flex; margin-top: 5upx;
			 		  flex-direction: column; width: 100%;height: 20upx;">
			 		<uni-load-more :status="loadingType" :showIcon="true"   ></uni-load-more>
			 		</view>
		
		
	</view>
</template>

<script>
	import {uniList,uniLoadMore,uniNavBar} from "@dcloudio/uni-ui"
	var self=this
	export default {
		 components: {uniList,uniLoadMore,uniNavBar},
		data() {
			return {
				keyword:'',
				title: '资料选择列表',
				loadingType:'more',
				                items: [
				                       // value: 'USA',
				                       // name: '美国'
				                    
				                ],
								condition:''//字符串
			} 
		},
			onNavigationBarButtonTap(e) {
					if(e.index==0){ //点击左按扭
					//this.leftclick()	
					this.submit()	
					}else if(e.index=1){
					this.submit()	
					}
					console.log(e)		
					
				},
		onNavigationBarSearchInputChanged(e){
			console.log(e)	
		},
		onLoad(p){
			
			 self.items.splice(0,self.items.length)
			 
			if(p !=undefined && p!=null){
			 var condition =p.hasOwnProperty('condition')?p.condition:''
			 var Type =p.hasOwnProperty('Type')?p.Type:''
			 var customerid=p.hasOwnProperty('customerid')?p.customerid:''
			uni.request({
				url:uni.getStorageSync('ip')+'/select.do?'+p.send,
				data:{currPage:'1',param:condition,Type:Type,customerid:customerid},
				method:'POST',
				header:{
					'token':uni.getStorageSync('token')
				},
				success:(res)=>{
					var array =res.data.obj
				for (var i=0;i<array.length;i++) {
					var map={}
					if(p.send=='getEmployee'){
							map.id   = array[i].EmployeeID;
							map.Name = array[i].Name;
							self.items.push(map)
						  
					}else if(p.send=='getVip'){
						for (var i=0;i<array.length;i++) {
						   map.id=array[i].VIPID;
						   map.Name = array[i].Name;
						   map.Code=array[i].Code
						   map.DiscountRate=array[i].DiscountRate
						   map.PointRate=array[i].PointRate
						   map.UsablePoint=array[i].UsablePoint
						   self.items.push(map)
						 }
					}else if(p.send==='getPosSalesGoods' || p.send==='getSalesGoods'){
                            map.id=array[i].GoodsID;
                            map.Name = array[i].Name;
                            map.Code=array[i].Code
                            map.RetailSales=array[i].RetailSales
                            map.UnitPrice=array[i].UnitPrice
                            map.Discount=array[i].Discount
                            map.DiscountFlag=array[i].DiscountFlag
                            map.sizIndex=array[i].sizIndex
                            self.items.push(map);
                        }else if (p.send==='getColorByGoodsCode'){
                            map.id=array[i].ColorID;
                            map.Name = array[i].Name;
                            self.items.push(map);
                        }
                        else if (p.send==='getSizeByGoodsCode'){
                            map.id=array[i].SizeID;
                            map.Name = array[i].Name;
                            map.Code=array[i].SizeCode
                            map.x=array[i].x
                            self.items.push(map);
                        } else if (p.send==='getCustomer'){
                            map.id=array[i].CustomerID
                            map.Name =array[i].Name
                            map.DiscountRate=array[i].DiscountRate
                            map.DistrictID=array[i].DistrictID
                            map.OrderDiscount=array[i].OrderDiscount
                            map.AllotDiscount=array[i].AllotDiscount
                            map.ReplenishDiscount=array[i].ReplenishDiscount
                            self.items.push(map);
                        } else if(p.send==='getWarehouse'){
                            map.id=array[i].DepartmentID
                            map.Name=array[i].Name
                            map.SettleCustID=array[i].SettleCustID
                            map.MustExistsGoodsFlag=array[i].MustExistsGoodsFlag
                            self.items.push(map);
                        } else if (p.send==='getBrand'){
                            map.id=array[i].BrandID
                            map.Name=array[i].Name
                            self.items.push(map);
                        }else if(p.send =='getPaymentType'){
                            map.id=array[i].PaymentTypeID
                            map.Name=array[i].Name
                            self.list.push(map);
                        }else if(p.send=='getGoodsType'){
                            map.id=array[i].GoodsTypeID
                            map.Name=array[i].Name
                            self.items.push(map);
                        }else if(p.send=='getGoodsSupplier'){
                            map.id=array[i].SupplierID
                            map.Name=array[i].Name
                            map.DiscountRate=array[i].DiscountRate
                            self.items.push(map);
                        }
				}
				},
				fail:(res)=>{
					uni.showToast({
						icon:'none',
						title: '网络请求异常'
					})
				}
			})
				
				 
			}
		/*	for(var i=1;i<=15 ;i++){
				var map={}
				map.id='USA'+i
				map.Name= '美国'+i
				this.items.push(map)
			} */
		},
		// 下拉刷新
				onPullDownRefresh() {
				//	this.getNewsList();
				},
		// 上拉加载
				onReachBottom: function() {
					var ilen=this.items.length
				if(ilen<=50){
					setTimeout(()=>{
						this.loadingType ='loading'
					for(var i=ilen;i<=ilen+15 ;i++){
						var map={}
						map.id='USA'+i
						map.Name= '美国'+i
						                    
						this.items.push(map)
					}
					}
					,2000)
					 this.loadingType ='more'
			    }else{
					uni.showToast({
										icon:'none',
										title:'已以没有更多数据了',
										duration:2000
										
									})
					this.loadingType ='noMore'
				}
				/*	console.log(_self.newsList.length);
					if (_self.loadingType != 0) {//loadingType!=0;直接返回
						return false;
					}
					_self.loadingType = 1;
					uni.showNavigationBarLoading();//显示加载动画
					uni.request({
						url:'../../static/data/news.json?page='+page,
						success: function(res) {
							if (_self.newsList.length==res.data.pages_count) {//没有数据
								_self.loadingType = 2;
								uni.hideNavigationBarLoading();//关闭加载动画
								return false;
							}
							page++;//每触底一次 page +1
							// console.log(page);
							for(var i=_self.newsList.length;i<res.data.pages_count;i++){
								_self.newsList = _self.newsList.concat(res.data.data[i]);//将数据拼接在一起
							}
							_self.loadingType = 0;//将loadingType归0重置
							uni.hideNavigationBarLoading();//关闭加载动画
							
						}
					}); */
				},
		methods: {
			leftclick(){
				uni.navigateBack({
				    delta: 1
				});
			}
			,checkboxChange: function (e) {
			                var items = this.items,
			                    values = e.detail.value;
								this.condition =values
								console.log('values:'+values)
			                for (var i = 0, lenI = items.length; i < lenI; ++i) {
			                    const item = items[i]
			                    if(values.includes(item.value)){
			                        this.$set(item,'checked',true)
			                    }else{
			                        this.$set(item,'checked',false)
							       
			                    }
			                }
		   },input(e){
			//console.log(JSON.stringify(e))
			setTimeout(()=>{
				console.log("关键字的值:"+this.keyword)
			},2000)
			
		}
		   ,submit(){
			   console.log('获取到的内容:'+this.condition) 
			   let pages = getCurrentPages();  //获取所有页面栈实例列表
			   let nowPage = pages[ pages.length - 1];  //当前页页面实例
			   let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
			   prevPage.$vm.condition = this.condition;   //修改上一页data里面的searchVal参数值为1211
			   uni.navigateBack({  //uni.navigateTo跳转的返回，默认1为返回上一级
			   	delta: 1
			   })
			  
		   }
		}
	}
</script>

<style>
	.warp{
		width:100%;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	.header{
		z-index: 9999;
		width: 100%;
		position: fixed;
		top: 0upx;
	}
	.uni-input{
		border-bottom-style: solid;
		border-bottom-width: 1upx;
		border-bottom-color: #DDDDDD;
	}
	.uni-list{
	display: flex;
	flex-direction: column;
	margin-top: 100upx;
	width: 100%;
	}
.uni-list-cell {
    justify-content: flex-start;
}
.btn{
	display: flex;
	background-color: #108ee9;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	position: fixed;
	height: 80upx;
	width: 100%;
	left: 0;
	bottom: 0;
}
.loading-text{
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>
