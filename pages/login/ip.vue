<template>
	 <view class="content">
	 <view>	 
	 <input type="text" class="uni-input" v-model="ip"  />
	 </view>
	 
	 <view class="btn" @tap="submit">
		<text style="font-size: 18px;color: #FFFFFF;">保存</text>
	 </view>
	 
	 </view>
</template>

<script>
	
	export default{
		onLoad() {
		this.ip=uni.getStorageSync('ip')
		},
		data(){
			return{
				ip:''
			}
		},methods:{
			submit(){
				console.log('ip地址为:'+this.ip)
				uni.setStorageSync(
					'ip',
					this.ip
				)
				console.log('getip地址：'+uni.getStorageSync('ip'));
				uni.redirectTo({
				    url: 'login'
				});
			}
			
			 
		}	
	}
</script>

<style>
	.btn{
		margin-top: 20upx;
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center; 
		align-items: center;
		border-radius: 10upx;
		background-color: #108ee9;
		height: 80upx;
	}
</style>
