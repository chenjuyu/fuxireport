<template>
	<view class="mask" :class="!value?'':'mask-show'" @tap="tapMask">
		<view class="popups" :style="{top: popupsTop ,left: popupsLeft,flexDirection:direction}" :class="theme">
			<text :class="placement" :style="{width:'0px',height:'0px'}"></text>
			<view v-for="(item,index) in popData" :key="index" @tap.stop="tapItem(item)" class="itemChild" :class="direction=='row'?'solid-right':'solid-bottom'">
				<image :src="item.icon" v-if="item.icon"></image>{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			// maskBg:{
			// 	type:String,
			// 	default:'rgba(0,0,0,0.2)'
			// },
			placement:{
				type:String,
				default:'top-start' //top-start top-end bottom-start bottom-end 
			},
			direction:{
				type:String,
				default:'column' //column row
			},
			x:{
				type:Number,
				default:0
			},
			y:{
				type:Number,
				default:0
			},
			value:{
				type:Boolean,
				default:false
			},
			popData:{
				type:Array,
				default:()=>[]
			},
			theme:{
				type:String,
				default:'light' //light dark
			}
		},
		data(){
			return{
				popupsTop:'0px',
				popupsLeft:'0px'
			}
		},
		mounted() {
			this.popupsPosition()
		},
		methods:{
			tapMask(){
				
				this.$emit('input',!this.value)
			},
			tapItem(item){
				this.$emit('tapPopup',item)
				this.$emit('input',!this.value)
			},
			async popupsPosition(){
				let promise = new Promise((resolve,reject)=>{
					uni.getSystemInfo({
						success: function(e) {
							let customBar
							// #ifndef MP
							if (e.platform == 'android') {
								customBar = e.statusBarHeight + 50;
							} else {
								customBar = e.statusBarHeight + 45;
							};
							// #endif
							resolve(customBar)
						}
					})
				})
				let statusBar = await promise
				//statusBar = 0
				let popupsDom = uni.createSelectorQuery().in(this).select(".popups")
				popupsDom.fields({
				    size: true,  
				}, (data) => {
					let width = data.width
					let height = data.height
					let y = this.transformRpx(this.y)
					let x = this.transformRpx(this.x)
					// #ifdef H5
					y = this.transformRpx(this.y+statusBar)
					// #endif  
					switch(this.placement){
						case 'top-start':
							this.popupsTop = `${y+9}px`
							this.popupsLeft = `${x-15}px`
							break;
						case 'top-end':
							this.popupsTop = `${y+9}px`
							this.popupsLeft = `${x+15-width}px`
							break;
						case 'bottom-start':
							this.popupsTop = `${y-18-height}px`
							this.popupsLeft = `${x-15}px`
							break;
						case 'bottom-end':
							this.popupsTop = `${y-9-height}px`
							this.popupsLeft = `${x+15-width}px`
							break;
					}
				}).exec();
			},
			transformRpx(params){
				
				return params*uni.getSystemInfoSync().screenWidth/375
			}
		},
		// watch:{
		// 	immediate:true,
		// 	value:{
		// 		handler(newVal,oldVal){
		// 			console.log(this.x,this.y)
		// 			if(newVal) this.popupsPosition()
		// 		}
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>
	.mask{
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 9999;
		transition: background 0.3s ease-in-out;
		visibility: hidden;
		background:rgba(0,0,0,0);
		&.mask-show{
			background:rgba(0,0,0,0.6);
			visibility: visible;
		}
	}
	.popups{
		position: absolute;
		padding: 20rpx;
		border-radius: 5px;
		display:flex;
		view{
			padding: 10rpx;
		}
		image{
			display: inline-block;
			vertical-align: middle;
			width: 40rpx;
			height: 40rpx;
			margin-right: 20rpx;
		}
	}
	.dark{
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;
		.top-start:after {
			content: "";
			position: absolute;
			top: -18rpx;
			left: 10rpx;
			border-width: 0 20rpx 20rpx;
			border-style: solid;
			border-color: transparent transparent rgba(0, 0, 0, 0.8);
		}
		.top-end:after {
			content: "";
			position: absolute;
			top: -18rpx;
			right: 10rpx;
			border-width: 0 20rpx 20rpx;
			border-style: solid;
			border-color: transparent transparent rgba(0, 0, 0, 0.8);
		}
		.bottom-start:after {
			content: "";
			position: absolute;
			bottom: -18rpx;
			left: 10rpx;
			border-width: 20rpx 20rpx 0 ;
			border-style: solid;
			border-color: rgba(0, 0, 0, 0.8) transparent transparent ;
			
		}
		.bottom-end:after {
			content: "";
			position: absolute;
			bottom: -18rpx;
			right: 10rpx;
			border-width: 20rpx 20rpx 0 ;
			border-style: solid;
			border-color: rgba(0, 0, 0, 0.8) transparent transparent ;
		}
	}
	.light{
		background: #fff;
		.top-start:after {
			content: "";
			position: absolute;
			top: -18rpx;
			left: 10rpx;
			border-width: 0 20rpx 20rpx;
			border-style: solid;
			border-color: transparent transparent #fff;
		}
		.top-end:after {
			content: "";
			position: absolute;
			top: -18rpx;
			right: 10rpx;
			border-width: 0 20rpx 20rpx;
			border-style: solid;
			border-color: transparent transparent #fff;
		}
		.bottom-start:after {
			content: "";
			position: absolute;
			bottom: -18rpx;
			left: 10rpx;
			border-width: 20rpx 20rpx 0 ;
			border-style: solid;
			border-color: #fff transparent transparent ;
			
		}
		.bottom-end:after {
			content: "";
			position: absolute;
			bottom: -18rpx;
			right: 10rpx;
			border-width: 20rpx 20rpx 0 ;
			border-style: solid;
			border-color: #fff transparent transparent ;
		}
	}
	.solid-bottom{
		border-bottom: 1px solid #ccc;
	}
	.solid-right{
		
		border-right: 1px solid #ccc;
	}
	.popups .itemChild:last-child{
		border: none;
	}
	
</style>
