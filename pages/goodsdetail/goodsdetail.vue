<template>
	<view style="width: 100%;">
	<uni-nav-bar left-icon="back" left-text="返回" right-text="更多" @click-left="leftclick" @click-right="rightclick"  title="货品详情" shadow="false" background-color="#108ee9" color="#FFF" status-bar="false" ></uni-nav-bar>
	<!--:multi="true" 为多选 -->
	
	<view style="display: flex;justify-content: center;align-items: center;margin-top: 100upx; text-align: center;">
	<axb-check-box ref="radio3" :list="sartTime" @change="ChangeType"></axb-check-box>
	</view>
		
	</view>
</template>

<script>
	import {uniNavBar} from '@dcloudio/uni-ui'
	import axbCheckBox from '../../components/axb-checkbox/axb-checkbox.vue'
	export default {
		components: {uniNavBar,axbCheckBox},
		data() {
			return {
				 sartTime: [{ // 开始日期
				        name: '红色',
				        value: '3day',
				        checked: 1,
						Quantity:1
				    }, {
				        name: '蓝色',
				        value: '1week',
				        checked: 0,
						Quantity:1
				    }, {
				        name: '黄色',
				        value: '1month',
				        checked: 0,
						Quantity:1
				    }, {
				        name: '星月蓝黑色',
				        value: '6month',
				        checked: 0,
						Quantity:1
				    }, {
				        name: '星月蓝黑色我的我',
				        value: '1year',
				        checked: 0,
						Quantity:1
				    },{
				        name: '星月蓝黑色我的我q',
				        value: '2year',
				        checked: 0,
						Quantity:1
				    },{
				        name: '星月蓝黑色我',
				        value: '3year',
				        checked: 0,
						Quantity:1
				    },{
				        name: '星月蓝黑色红剑',
				        value: '4year',
				        checked: 0,
						Quantity:1
				    }]
			}
		},
		onLoad(){
			console.log(JSON.stringify(this.sartTime))
		},
		methods: {
			ChangeType(val){
				console.log('val:'+val) // 单选时 返回选中项的value, 反选返回null
			},leftclick(){
			uni.showToast({
				title:'左点击aaa',
				duration:2000
			})
			
		},rightclick(){
			uni.showToast({
				 icon: 'none',
				title:'右点击了子',
				duration:2000
			})
		}
		}
	}
</script>

<style>

</style>
