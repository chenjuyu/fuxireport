<template>
	<view class="warp">
		<uni-nav-bar left-icon="back" left-text="返回"  @click-left="leftclick" right-text="确定" @click-right="submit" fixed="true" :title="title" shadow="false" background-color="#108ee9" color="#FFF" status-bar="false" ></uni-nav-bar>
		<view style="position: fixed;
			z-index: 998;"><input type="text" style="height: 100upx;border-width: 1px;width: 200upx;" v-model="keyword" placeholder="输入关键字查询"/></view>
		<view style="margin-top: 10upx;">
		<uni-list>
			  <checkbox-group @change="checkboxChange">
			                <label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
			                    <view>
			                        <checkbox :value="item.value" :checked="item.checked" />
			                    </view>
			                    <view>{{item.name}}</view>
			                </label>
			  </checkbox-group>
			 		<text class="loading-text">
			 		{{loadingType === 0 ? contentText.contentdown : (loadingType === 1 ? contentText.contentrefresh : contentText.contentnomore)}}</text>
		</uni-list>
	</view>
		
	</view>
</template>

<script>
	import {uniList,uniLoadMore,uniNavBar} from "@dcloudio/uni-ui"
	export default {
		 components: {uniList,uniLoadMore,uniNavBar},
		data() {
			return {
				keyword:'',
				title: '资料选择列表',
				loadingType: 0,
								contentText: {
									contentdown: "上拉显示更多",
									contentrefresh: "正在加载...",
									contentnomore: "没有更多数据了"
								},
				                items: [{
				                        value: 'USA',
				                        name: '美国'
				                    },
				                    {
				                        value: 'CHN',
				                        name: '中国',
				                        //checked: 'true'
				                    },
				                    {
				                        value: 'BRA',
				                        name: '巴西'
				                    },
				                    {
				                        value: 'JPN',
				                        name: '日本'
				                    },
				                    {
				                        value: 'ENG',
				                        name: '英国'
				                    },
				                    {
				                        value: 'FRA',
				                        name: '法国'
				                    }
				                ],
								condition:''//字符串
			}
		},
		onLoad(){
			for(var i=1;i<=15 ;i++){
				var map={}
				map.value='USA'+i
				map.name= '美国'+i
				this.items.push(map)
			}
		},
		// 下拉刷新
				onPullDownRefresh() {
				//	this.getNewsList();
				},
		// 上拉加载
				onReachBottom: function() {
					var ilen=this.items.length
					setTimeout(()=>{
						this.loadingType=1
					for(var i=ilen;i<=ilen+15 ;i++){
						var map={}
						map.value='USA'+i
						map.name= '美国'+i
						                    
						this.items.push(map)
					}
					}
					,2000)
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
		   }
		   ,submit(){
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
	}
	.uni-list{
		display: flex;
		flex:1;
		flex-direction: column;
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
