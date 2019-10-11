<template>
	<view style="width: 100%;">
	<uni-nav-bar left-icon="back" left-text="返回" @click-left="leftclick" @click-right="rightclick"  title="零售分析" shadow="false" background-color="#108ee9" color="#FFF" status-bar="false" ></uni-nav-bar>

  <uniGrid :options="options" column-num="4">
  </uniGrid>
</view>
</template>

<script>
	import {uniNavBar} from '@dcloudio/uni-ui'
	import uniGrid from '../../components/gird.vue'
	export default {
	    components: {uniNavBar,uniGrid},
		data(){
			return{
				options:[{text:"零售分析",image:'../../static/img/pos.png',url:'reportmenu/pos05'}
			/*	{text:"采购明细表",image:'../../static/img/pos.png',url:'column/column'},
				{text:"应付汇总表",image:'../../static/img/pos.png',url:'column/column'},
				{text:"应付明细表",image:'../../static/img/pos.png',url:'column/column'} */
				]
			}
		},methods:{
		
		leftclick(){
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
		},clickgrid(e){
			uni.showToast({
				 icon: 'none',
				title: e.detail.index.toString(),
				duration:2000
			})
			
		}
			
			
			
		}
	}
</script>

<style>

</style>
