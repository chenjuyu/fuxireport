<template>
	<view class="warp">
     <view class="uni-list">
	<view class="uni-list-cell" v-for="(item,index) in items" :key="index">
	<view class="ithead">
		<text style="font-weight: bold;font-size: 35upx;color: red;">{{item.Code}}</text>
		<text style="font-size: 35upx;margin-left: 35upx;">{{item.Name}}</text>
	</view>	
	
	<view class="detail">
		
    <text style="font-size: 26upx; display: flex; justify-content: center;align-items: center;">{{index+1}}</text>
	<image :src="item.img?item.img:'../../static/img/nopic.jpg'" style="width: 150upx;height: 150upx;border-radius: 10upx;"></image>	
	
	<view style="display: flex;flex-direction: column;justify-content: flex-start;margin-left: 20upx;padding-top: 10upx;">
	 <text style="font-size: 35upx;">数量:{{item.Quantity}}</text>
	 <text style="font-size: 35upx;">零售价:{{item.RetailSales}}</text>
	</view> 

	<view style="display: flex;flex-direction: column;justify-content: flex-start;padding-top: 10upx;position: absolute;right: 0;">
	 <text style="font-size: 35upx;">金额:{{item.FactAmount}}</text>
	  <text style="font-size: 35upx;">平均售价:{{item.AvgPrice}}</text>
	</view>

	</view>
	
	</view>
	
	</view> <!--list -->
	
	<view class="footer">
	<text style="font-size: 35upx;color: #808080;font-weight: bold;">合计</text>	
	<text style="font-size: 35upx;color: #808080;font-weight: bold; margin-left: 200upx;">{{totalQty}}</text>
	<text style="font-size: 35upx;color: #808080;font-weight: bold;margin-left: 100upx;">{{totalAmt}}</text>
	</view>
				
	</view>
</template>

<script>
	import {
	    mapState
	} from 'vuex'
	var that;
	export default{
		computed: mapState(['forcedLogin', 'hasLogin', 'userName','userinfor']),
		data(){
			
			return{
				totallist:[],
				id:'',
				totalQty:0,
				totalAmt:0,
				currPage:1,
				items:[
					/*{
					Code:'1996123456',
					Name:'测试商品工我的',
					img:'',
					Quantity:20,
					RetailSales:199.00,
					FactAmount:400.00,
					AvgPrice:150.00
				    },
					{
					Code:'1996123457',
					Name:'测试商品工我的7',
					img:'',
					Quantity:20,
					RetailSales:199.00,
					FactAmount:400.00,
					AvgPrice:150.00
					},
					{
					Code:'1996123458',
					Name:'测试商品工我的8',
					img:'',
					Quantity:20,
					RetailSales:199.00,
					FactAmount:400.00,
					AvgPrice:150.00
					},	{
					Code:'1996123459',
					Name:'测试商品工我的9',
					img:'',
					Quantity:20,
					RetailSales:199.00,
					FactAmount:400.00,
					AvgPrice:150.00
				    },{
					Code:'1996123458',
					Name:'测试商品工我的8',
					img:'',
					Quantity:20,
					RetailSales:199.00,
					FactAmount:400.00,
					AvgPrice:150.00
					},	{
					Code:'1996123459',
					Name:'测试商品工我的9',
					img:'',
					Quantity:20,
					RetailSales:199.00,
					FactAmount:400.00,
					AvgPrice:150.00
				    },{
					Code:'1996123458',
					Name:'测试商品工我的8',
					img:'',
					Quantity:20,
					RetailSales:199.00,
					FactAmount:400.00,
					AvgPrice:150.00
					},	{
					Code:'1996123459',
					Name:'测试商品工我的9',
					img:'',
					Quantity:20,
					RetailSales:199.00,
					FactAmount:400.00,
					AvgPrice:150.00
				    } */
				]
			}
		},onLoad(p){
			that=this
			//this.items.splice(0,this.items.length)
			this.id =p.id
			console.log('onLoad中的currPage:'+that.currPage)
			this.getdata()
		},onBackPress(){
		console.log('onBackPress')	
		let pages = getCurrentPages();  //获取所有页面栈实例列表
		let nowPage = pages[ pages.length - 1];  //当前页页面实例
		let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
		prevPage.$vm.isDoRefresh = false;   //不刷新上一页的列表数据，即不重新向数据库查询
		},
		onReachBottom(){ //页面上拉
		 console.log('进入页面时执行。。')
		
		that.currPage =Number(that.currPage)+Number(1)
		var len=this.items.length
		 if(len <= this.totallist.length){
				//this.loggingtype='loading'
				uni.showLoading({
					title:'正在加载...',
					mask:true
				})
				setTimeout(()=>{			
				if(that.currPage ==1){
				that.getData()	
				}else if(that.currPage>1){
				 //从列表取，不再网络请求
				var tmplist=that.pagination(that.currPage, 15, that.totallist)
				for(var i=0;i<tmplist.length;i++){
					that.items.push(tmplist[i])
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
		},
		methods:{
		getdata(){
			that.items.splice(0,that.items.length)
			uni.request({
			 	url:uni.getStorageSync('ip')+'/salesTicket.do?report88Detail',
			 	data:{hostName:uni.getStorageSync('hostName'),id:this.id},
			 	method:'POST',
			 	header:{
			 		'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
			 		'token':uni.getStorageSync('token')
			 	},success:(res)=>{
					console.log('detail中res'+JSON.stringify(res))
					that.totallist =res.data.obj || []
					console.log('detail中totallist:'+JSON.stringify(that.totallist))
					if(that.totallist.length ==0){
						uni.showToast({
							icon:'none',
							title:'暂无数据返回'
						})
						return
					}else{
					console.log('当前页数:'+that.currPage)
					var array=that.pagination(that.currPage,15,that.totallist)
					console.log('array:'+JSON.stringify(array))
					for(var i=0;i<array.length;i++){
						//array[i].img =''
						that.items.push(array[i])
					}
					console.log('that.items:'+JSON.stringify(that.items))
					that.total()			
					}
				},
				fail:(res)=>{
					uni.showToast({
						icon:'none',
						title: '网络请求异常'
					})
				},
			});
		},pagination(pageNo, pageSize, array) { //分页
                var offset = (pageNo - 1) * pageSize;
                return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
          },total(){ //数量金额合计
		  var qty=0,amt=0
			  for(var i=0;i<that.totallist.length;i++){
				 qty =Number(qty)+Number(that.totallist[i].Quantity)
				 amt =Number(amt)+Number(that.totallist[i].FactAmount)
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
		width: 100%;
		flex-direction: column;
		position: relative;
	}
	.uni-list{
		display: flex;
		flex-direction: column;
		margin-bottom: 80upx;
		width: 100%;
	}
	.uni-list-cell{
		display: flex;
		flex-direction: column;
		width: 100%;
		
	}
	.ithead{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		width: 100%;
	}
	.detail{
	display: flex;
	flex-direction: row;
	height: 150upx;
	width: 100%;
	position: relative;
	}
	.footer{
		width: 100%;
		display: flex;
		flex-direction: row;
		position: fixed;
		bottom: 0;
		border-top-width: 1upx;
		border-top-color: #dcdcdc;
		border-top-style: solid;
		z-index: 9999;
		background-color: #FFF;
		justify-content: flex-start;
		align-items: center;
		height: 80upx;
	}
</style>
