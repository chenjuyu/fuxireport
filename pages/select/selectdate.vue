<template>
	<view class="warp">
		<view class="uni-list">
	            <view class="uni-list-cell">
	                <view class="uni-list-cell-left">
	                    <text style="font-size: 30upx;">开始日期</text>
	                </view>
	                <view class="uni-list-cell-db" @click="show(1)"> 
	           
	                 <view class="uni-input"><text style="font-size: 30upx;">{{BeginDate}}</text></view>
	          
	                </view> 
				  </view>
				  
				   <view class="uni-list-cell">
					<view class="uni-list-cell-left">
					    <text style="font-size: 30upx;">结束日期</text>
					</view>
					<view class="uni-list-cell-db" @click="show(2)">
					<view class="uni-input"><text style="font-size: 30upx;">{{EndDate}}</text></view>
					</view>
					</view>
				        
	 </view>
	<w-picker
		mode="date" 
		startYear="1930" 
		endYear="2099"
		 :defaultVal="[2,1,3]"
		:current="true"  
		@confirm="onConfirm"
		:disabledAfter="false"
		ref="BeginDate" 
		themeColor="#108ee9"
	></w-picker>
	
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default{
		components:{
			wPicker
		 },
		  data: function () {
		    const currentDate = this.getDate({
		                format: true
		            })
		            return {
		                BeginDate: currentDate,
						EndDate: currentDate,
		                time: '12:01',
						defaultVal:[0,0,0,0,0,0,0],
						choseid:1//选择开始还是结束时间
		            }
		    }, computed: {
             startDate() {
             return this.getDate('start');
             },
            endDate() {
            return this.getDate('end');
            }
             },
			 onNavigationBarButtonTap(e) {
			 	/*	if(e.index==0){ //点击左按扭
					} */
				this.submit()//右菜单的点击事件	
			},
		    methods: {
		     bindPickerChange: function(e) {
		               console.log('picker发送选择改变，携带值为', e.target.value)
		               this.index = e.target.value
		           },
		           bindDateChange: function(e) {
		               this.date = e.target.value
		           },
		           bindTimeChange: function(e) {
		               this.time = e.target.value
		           },
		           getDate(type) {
		               const date = new Date();
		               let year = date.getFullYear();
		               let month = date.getMonth() + 1;
		               let day = date.getDate();
		   
		               if (type === 'start') {
		                   year = year - 60;
		               } else if (type === 'end') {
		                   year = year + 2;
		               }
		               month = month > 9 ? month : '0' + month;;
		               day = day > 9 ? day : '0' + day;
		               return `${year}-${month}-${day}`;
		           },onConfirm(val){
					   this.$refs.BeginDate.hide()
					   console.log(val);
					   if(this.choseid==1){
						  this.BeginDate =val.result
					   }else if(this.choseid==2){
						  this.EndDate = val.result
					   }
					   
				   },show(id){
					   this.choseid=id
					   this.$refs.BeginDate.show();
				   } ,submit(){
			  
			   let pages = getCurrentPages();  //获取所有页面栈实例列表
			   let nowPage = pages[ pages.length - 1];  //当前页页面实例
			   let prevPage = pages[ pages.length - 2 ];  //上一页页面实例  
			   prevPage.$vm.BeginDate = this.BeginDate;   //修改上一页data里面的searchVal参数值为1211
			   prevPage.$vm.EndDate =this.EndDate
			   uni.navigateBack({  //uni.navigateTo跳转的返回，默认1为返回上一级
			   	delta: 1
			   })
			  
		   }
		    }
	}
</script>

<style>
	.warp{
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.uni-list{
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
