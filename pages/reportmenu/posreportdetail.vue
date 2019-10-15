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
	export default{
		data(){
			
			return{
				items:[
					{
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
				    }
				],
				totalQty:21,
				totalAmt:2009.00
			}
		},onLoad(p){
			
		},onReachBottom(){ //页面上拉
		
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
