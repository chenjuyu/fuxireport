<template>
	<view class="warp">
	<!--	<uni-nav-bar left-icon="back" left-text="返回" fixed="true" right-icon="search" @click-left="leftclick" @click-right="rightclick"  title="零售分析" shadow="false" background-color="#108ee9" color="#FFF" status-bar="false" ></uni-nav-bar>
	-->
		<uni-segmented-control :current="current0" :values="items0" @clickItem="onClickItem0" style-type="button" active-color="#108ee9"></uni-segmented-control>
		<view style="display: flex;justify-content: center;align-items: center;"><text style="font-size: 30upx;">{{BeginDate}}至{{EndDate}}</text></view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#108ee9"></uni-segmented-control>
		        <view class="content">
		            <view v-show="current === 0">
		                选项卡1的内容
		            </view>
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
		        </view>
	</view>
</template>

<script>
	import {uniNavBar} from '@dcloudio/uni-ui'
	import uniSegmentedControl from '../../components/uni-segmented-control/uni-segmented-control.vue'
	import module1 from '../../jstools/mytool.js'
	const datestr = module1.formatDate(new Date(),'yyyy-MM-dd')
	export default{
		components: {uniNavBar,uniSegmentedControl},
		data(){
			return{
				items0:['今天','昨天','近7天','近30天','自定义'],
				current0: 0,
				items: ['店铺','品类','品牌','厂商','导购','销售排行'],
				current: 0,
				BeginDate:datestr,
				EndDate:datestr	,
				condition:''//用于存储多选条件的在选择页用到 数组
			}
		}
		,onShow(){
			console.log('condition:'+this.condition)
		},onNavigationBarButtonTap(e) {
			if(e.index==0){ //点击左按扭
			this.leftclick()	
			}else if(e.index=1){
			this.rightclick()	
			}
			console.log(e)		
			
		}
		,methods:{
			leftclick(){
				uni.navigateBack({
				    delta: 1
				});
			}
			,rightclick(){
				uni.navigateTo({
				    url: '../select/select'
				});
			}
			, onClickItem(index) {
            if (this.current !== index) {
                this.current = index;
            }
            }
			, onClickItem0(index) {
			if (this.current0 !== index) {
			    this.current0 = index;
			}
			if(index==0){
				this.BeginDate =datestr
				this.EndDate =datestr	
			}else if(index==1){
				  var date =new Date()
				    module1.AddDays(date,-1) //使用了set 方法不会返回值
				  //this.log('昨天的数据：'+date)
				this.BeginDate=module1.formatDate(date,'yyyy-MM-dd')
				this.EndDate=module1.formatDate(date,'yyyy-MM-dd')
			}else if(index==2){
				var date2 =new Date()
				 module1.AddDays(date2,-7) //使用了set 方法不会返回值
				this.BeginDate=module1.formatDate(date2,'yyyy-MM-dd')
				 this.EndDate=module1.formatDate(new Date(),'yyyy-MM-dd')
			}else if(index==3){
				var date2 =new Date()
				 module1.AddDays(date2,-30) //使用了set 方法不会返回值
			   this.BeginDate=module1.formatDate(date2,'yyyy-MM-dd')
				this.EndDate=module1.formatDate(new Date(),'yyyy-MM-dd')
			}else if(index ==4){
				console.log('index==4:')
				uni.navigateTo({
					url:'../select/select'
					
				}) 
			}
			
			}
			
			
			
			
		}
		
		
	}
</script>

<style>
	.warp{
		width: 100%;
	}
</style>
