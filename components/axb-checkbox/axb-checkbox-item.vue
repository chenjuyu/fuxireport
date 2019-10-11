<template>
	<view style="height: 70upx; position: relative; padding-top: 20upx;  margin-left: 10upx;margin-bottom: 10upx;">
	<view v-if="tipqty"   style="position: absolute;right: 0;top:0;display: flex;justify-content: center;align-items: center; width: 40upx;height: 40upx;border-radius: 20upx;background-color: red;">
		<text  style="font-size: 18upx;text-align: center; color: #FFF;">{{tipqty}}</text>
	</view>
	<view class="radio" :class="{'radio-width-default':widthDefault}"  :style="checked?activeStyle :itemStyle" @click="handleChange">
		{{name}}
	</view>

	</view>
</template>

<script>
	


	/**
 * 防抖
 * @param {*} fun 
 * @param {*} delay 
 * @param {*} immediate 
 */
const debounce = function (fun, delay, immediate) {
  var timer, lasttime, context, arg
  var later = function () {
    var now = new Date().getTime(),
      l = now - lasttime
    if (l < delay && l >= 0) {
      clearTimeout(timer)
      timer = setTimeout(later, delay - l)
    } else {
      clearTimeout(timer)
      timer = null
      if (!immediate) {
        fun.apply(context, arg)
        if (!timer) context = arg = null
      }
    }
  }
  return function () {
    context = this
    arg = arguments
    lasttime = new Date().getTime()
    var callNow = immediate && !timer
    if (!timer) timer=setTimeout(later, delay)
    if (callNow) {
      fun.apply(context, arg)
      context = arg = null
    }
  }
}
	//uni-app 获取屏幕宽高
				const { windowWidth, windowHeight } = uni.getSystemInfoSync();	
	import {uniBadge} from '@dcloudio/uni-ui'
	export default {
		components:{uniBadge},
		props: {
			name: {
				type: String,
				default: ''
			},
			value: {
				default: null,
			},
			checked: {
				type: [Boolean, Number],
				default: false
			},
			tipqty:{
				type:[String,Number],
				default:''
			}
		},
		computed: {
			widthDefault() {
				
				return (Number(windowWidth)-Number(80))/Number(4)//this.name.length <=3 //3
				
			}, 
			activeStyle() {
				return `background: #108ee9;color: #FFF;border-color: #3c7ef6; `
			},
			itemStyle() {
				return `background: #f7f7f7;color: #7d7d7d;`
			}
		},
		data() {
			return {
              
			};
		},
		methods: {
			handleChange: debounce(handleChange, 200,true)
		}
	}

	function handleChange() {
		this.$emit('change', this.value)
	}
</script>

<style>
	/*box-sizing: border-box; width: 150upx; display:inline-block;margin-right: 20upx;*/
	.radio {
		height: 70upx;
		line-height: 70upx; 
		border-radius: 10upx;
		font-size: 26upx;
		box-sizing: border-box;
		border: 1px solid #c3c3c3;
		
		text-align: center;
	
		overflow:hidden;	
	}
/* overflow:hidden;text-overflow: ellipsis;
	.radio:not(:last-child) {
		margin: 30upx 20upx 30upx 30upx;
	} 
*/

	.radio-width-default {
		width: 150upx;
		text-align: center;
		padding: 0;
		
	}  
</style>
