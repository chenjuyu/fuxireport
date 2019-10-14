<template>
	<view class="warp">
		<view class="header">
			<input class="uni-input" type="text" v-model="keyword" @input="input" confirm-type="search" placeholder="请输入内容查询" />
		</view>
		 <!--:checked="index === current" -->
		 
		        <view class="uni-list">
		            <radio-group @change="radioChange">
		                <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
		                    <view>
		                        <radio :value="item.id"   />
		                    </view>
		                    <view>{{item.Name}}</view>
		                </label>
		            </radio-group>	
		      </view> 
			  <view style=" display: flex; margin-top: 5upx;
			    flex-direction: column; width: 100%;height: 20upx;">
			  <uni-load-more :status="loadingType" :showIcon="true"   ></uni-load-more>
			  </view>
		
	<!--单选配置页面滚动 :color="color"
	<view class="footer">
		
	</view>	
		-->
	
	</view>
</template>

<script>
	import {uniLoadMore} from '@dcloudio/uni-ui'
	export default{
		components:{uniLoadMore},
		data(){
			return{
				keyword:'',
				loadingType:'more',//加载更多类型
				color:'#0FAEFF',
				items: [ 
					
					             
								
				            ],
				            current: 0
							
			}
		},onLoad(){
			for(var i=0;i<7;i++){
				var map={}
				map.id ='FRA'+i
				map.Name ='法国'+i
				this.items.push(map)
			} 
		},
		 onReachBottom(){
			 var changdu=this.items.length
			 console.log('长度:'+changdu)
			 if(changdu<=50){   
			
			setTimeout(()=>{
				this.loadingType ='loading'
				for(var i=changdu;i<changdu+15;i++){
					var map={}
					map.id ='FRA'+i
					map.Name ='法国'+i
					this.items.push(map)
				} 
			},2000)
		
		   this.loadingType ='more'
			}else{
				uni.showToast({
					icon:'none',
					title:'已以没有更多数据了',
					duration:2000
					
				})
		 this.loadingType ='noMore'
			}
		},
		methods: {
        radioChange: function(evt) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === evt.target.value) {
                    this.current = i;
					console.log('选中的值:'+evt.target.value)
                    break;
                }
            }
        },input(e){
			//console.log(JSON.stringify(e))
			console.log("关键字的值:"+this.keyword)
		}
    }
		
		
		
	}
</script>

<style>
	.warp{
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
	.header{
		z-index: 9999;
		width: 100%;
		position: fixed;
		top: 0upx;
	}
	.uni-list{
		display: flex;
		flex-direction: column;
		margin-top: 100upx;
	/*	margin-bottom: 160upx; 底部的高度*/
		width: 100%;
		
	}
	.uni-list-cell {
	    justify-content: flex-start;
	}
	.uni-input{
		border-bottom-style: solid;
		border-bottom-width: 1upx;
		border-bottom-color: #DDDDDD;
	}
	.footer{
		width: 100%;
		height: 160upx;
		background-color: #FFF;
		position: fixed;
		bottom: 0;
		z-index: 9999;
	}
</style>
