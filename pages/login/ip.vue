<template>
	 <view class="content">
	 <view>	 
	 <input type="text" v-model="ip"  />
	 </view>
	 <view class="btn-row">
	     <button type="primary" class="primary" @tap="submit">保存</button>
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
	.btn-row{
		display: flex;
	}
</style>
