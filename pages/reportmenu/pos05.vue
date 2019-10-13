<template>
	<view class="warp">
	<view style="margin-top: 20upx;">
		<uni-segmented-control :current="current0" :values="items0" @clickItem="onClickItem0" style-type="button" active-color="#108ee9"></uni-segmented-control>
	</view>
		<view style="display: flex;justify-content: center;align-items: center;">
			<text style="font-size: 28upx;color:red">{{BeginDate}} 至 {{EndDate}}</text>
			</view>
		   <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#108ee9"></uni-segmented-control>				
		          
				<view class="headtitle">
					<view class="textbox" :style="{width:txtwidht+'upx'}" :key="ti" v-for="(titem,ti) in headtitle">
						<text style="font-size: 35upx;">{{titem.title}}</text>
					</view>
				</view>
                 <view class="content">
					  <!-- <view v-show="current === 0"> --> <!-- :style="{'height':height+'px'}"--> 
					   <scroll-view :scroll-top="scrollTop" scroll-y="true" :style="{'height':height+'px'}"  class="scroll-Y" @scrolltoupper.stop.prevent="upper" @scrolltolower.stop.prevent="lower"
		                               @scroll.stop.prevent="scroll">
		                            <view class="scrollitem" hover-class="hoverclass" @longpress="longpress(ls)"  v-for="(ls,index) in datalist " :key="index"  @click="sitemclick(ls)">
										<view class="textbox" :style="{width:txtwidht+'upx'}">  <text style="font-size: 28upx;"> {{index+1}} </text> </view>
										<view class="textbox" :style="{width:txtwidht+'upx'}">  <text style="font-size: 28upx;">{{ls.Name}}</text> </view>
										<view class="textbox" :style="{width:txtwidht+'upx'}">  <text style="font-size: 28upx;">{{ls.Quantity}}</text> </view>
										<view class="textbox" :style="{width:txtwidht+'upx'}">  <text style="font-size: 28upx;">{{ls.Amount}}</text> </view>
								        <view class="textbox" v-if="current==1 || current==2 || current==3" :style="{width:txtwidht+'upx'}"> <text style="font-size: 28upx;">{{ls.LvStr}}</text> </view>
									    <view class="textbox" v-if="current==5" :style="{width:txtwidht+'upx'}"> <text style="font-size: 28upx;">{{ls.UnitPrice}}</text> </view>
									 </view>
		                                  										   
		              </scroll-view>
	              	<uni-load-more :status="loggingtype"></uni-load-more> 
		           <!-- </view> -->
		          <!--  <view v-show="current === 1">
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
					</view> -->
		        </view>
				
	<view class="footer">
	<view class="footer1">
		<text style="font-size: 35upx;color: #696969;">合计:</text>
		<text style="font-size: 35upx;color: #696969;margin-left: 200upx;">255</text>
		<text style="font-size: 35upx;color: #696969;margin-left: 80upx;">30000.00</text>
	</view>	
	
	<view style="display: flex;flex-direction: row;">
		 
	<view class="footer2">	
	<text style="font-size: 35upx;color: #696969;">排序</text>	
	</view>
	<view @click="chose" style="display: flex;width: 375upx;justify-content: center;height: 60upx;padding-top: 19upx;">
		<text style="font-size: 35upx;color: #696969;">筛选</text> 
    </view>
	
	</view>	
		
	</view>	
			<!-- @input="inputPopup"-->
			<popups :popData="chosemenu" :x="x" :y="y" ref="vpop"  @tapPopup="Popup" @input="inputPopup"  :value="showflag" placement="bottom-end"></popups>
			
	</view>
</template>

<script>
	import {uniNavBar,uniLoadMore} from '@dcloudio/uni-ui'
	import uniSegmentedControl from '../../components/uni-segmented-control/uni-segmented-control.vue'
	import popups from '../../components/chunLei-popups/chunLei-popups.vue'
	import module1 from '../../jstools/mytool.js'
	const datestr = module1.formatDate(new Date(),'yyyy-MM-dd')
	const { screenWidth,screenHeight,windowWidth, windowHeight,navigationBarHeight } = uni.getSystemInfoSync(); //获取屏幕的高度与宽度
	export default{
		components: {uniNavBar,uniSegmentedControl,popups,uniLoadMore},
		data(){
			return{
				items0:['今天','昨天','近7天','近30天','自定义'],
				current0: 0,
				items: ['店铺','品类','品牌','厂商','导购','销售排行'],
				current: 0,
				BeginDate:datestr,
				EndDate:datestr	,
				condition:'',//用于存储多选条件的在选择页用到 数组
				loggingtype:'more',//防止多次滑动标志，加载条数不正确
				scrollTop: 0,
				old: {
			    scrollTop: 0
				      },
				height:Number(windowHeight)-Number(160), // +Number(44),
				datalist:[
					
				],
				headtitle:[{title:'名次'},{title:'店铺'},{title:'数量'},{title:'金额'}],
				txtwidht:200,
				chosemenu:[{title:'店铺类别'},{title:'店铺'}],
				screenHeight:screenHeight,
				showflag:false ,//气泡菜单参数
				x:Number(screenWidth)-Number(screenWidth/5),
				y:Number(screenHeight)-Number(80)
			}
		}
		,onLoad(p){
			console.log('x宽度:'+this.x)
			console.log('y高度:'+this.y)
			console.log('可用宽度:'+windowWidth)
			console.log('可用高度:'+windowHeight)
			console.log('高度:'+this.height)
		
			uni.showLoading({
				title:'正在加载数据',
				mask:true
			})	
			for(var i=1;i<=15;i++){
					var map={}
					map.Name='文山'+i
					map.Quantity=i
					map.Amount=10+i
					this.datalist.push(map)
				}
			uni.hideLoading()
		/*	setTimeout(()=>{
				
			},3000) */
		  
		},onReady(){
		console.log('onReady')
		},onBackPress(){
		console.log('onBackPress')	
		
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
			inputPopup(e){
			/*	uni.showToast({
					icon:'none',
					title:JSON.stringify(e),
					duration:2000
				}) */
				this.showflag =e
			},
			Popup(e){
				uni.showToast({
					icon:'none',
					title:JSON.stringify(e),
					duration:2000
				})
				this.showflag =false
			},sitemclick(ls){
			console.log(JSON.stringify(ls))	
			},longpress(ls){
			console.log('长按的操作:'+JSON.stringify(ls))	
			},
			chose(){
			this.showflag =true	
			},
			        upper: function(e) {
			           // console.log(e)
			        },
			        lower: function(e) {
			          //  console.log(e)
						var len=this.datalist.length
						console.log('长度:'+len)
						if(len <=50){
							this.loggingtype='loading'
							setTimeout(()=>{
								
									for(var i=len;i<=len+15;i++){
										var map={}
										map.Name='文山'+i
										map.Quantity=i
										map.Amount=10+i
										this.datalist.push(map)
									} 
									
									
								
							},2000) 
					uni.hideLoading()
					this.loggingtype='more'
						}else{
					uni.showToast({
						icon:'none',
						title:'没有更多数据了',
						duration:2000
					})	
					return
						}
			        },
			        scroll: function(e) {
			           // console.log(e)
			            this.old.scrollTop = e.detail.scrollTop
			        },
			        goTop: function(e) {
			            this.scrollTop = this.old.scrollTop
			            this.$nextTick(function() {
			                this.scrollTop = 0
			            });
			            uni.showToast({
			                icon:"none",
			                title:"纵向滚动 scrollTop 值已被修改为 0"
			            })
			        },
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
				
				if(this.current==0){
				this.headtitle =[{title:'名次'},{title:'店铺'},{title:'数量'},{title:'金额'}]
				//this.txtwidht =200
			   this.chosemenu =[{title:'店铺类别'},{title:'店铺'}]
			 this.$refs.vpop.popupsPosition() //调用调整位置
				}else if(this.current==1){
				//	console.log('this.current的值:'+this.current.toString())
					this.headtitle =[{title:'名次'},{title:'品类'},{title:'数量'},{title:'金额'},{title:'占比%'}]
					this.chosemenu =[{title:'品类'}]
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
					
					
					 for(var i=0;i<this.datalist.length;i++){
			        	//console.log('aaaa')
						Vue.set(this.datalist[i],'LvStr','100%')
						//console.log(this.datalist[i].LvStr)
					}  
				
				}else if(this.current==2){
					this.headtitle =[{title:'名次'},{title:'品牌'},{title:'数量'},{title:'金额'},{title:'占比%'}]
					this.chosemenu =[{title:'品牌'}]
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
				}else if(this.current==3){
					this.headtitle =[{title:'名次'},{title:'厂商'},{title:'数量'},{title:'金额'},{title:'占比%'}]
					this.chosemenu =[{title:'厂商'}] //选择查询条件
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
				}else if(this.current==4){
					this.headtitle =[{title:'名次'},{title:'导购'},{title:'数量'},{title:'金额'}],
					this.chosemenu =[{title:'导购'}]
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
				}else if(this.current==5){
					this.headtitle =[{title:'名次'},{title:'货号'},{title:'数量'},{title:'零售价'},{title:'平均售价'}]
					this.chosemenu =[{title:'货号'}]
					for(var i=0;i<this.datalist.length;i++){
						//console.log('aaaa')
						Vue.set(this.datalist[i],'UnitPrice','15500.00')
						//console.log(this.datalist[i].LvStr)
					} 
					this.$refs.vpop.popupsPosition() //调用资料选择菜单的位置
				}
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
			
		 },getData(){ //获取数据并传参数
			 
			 
		 }
		 
		}
	}
</script>

<style>
	.warp{
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		
		
	}
	.headtitle{
		width: 100%;
		display: flex;
		flex-direction: row;
		border-bottom-width: 1upx;
		border-bottom-style: solid;
		border-color: #808080;
	}
	.scroll-Y{
		/* background-color: red; */
	   display: flex;
	   flex-direction: column;
	}
	.scrollitem{
		display: flex;
		flex-direction: row;
		border-bottom-width: 1upx;
		border-bottom-style: solid;
		border-color: #D9D9D9;
		
	}
	.hoverclass{
		background-color: #8F8F94;
	}
	.textbox{
		margin-right: 10upx;
		height: 70upx;
	/*	width: 200upx; */
		text-align: center;
		line-height: 70upx;
	}
	.footer{
	 display: flex;	
	 flex-direction: column;
	 position: fixed;
	 left: 0;
	 bottom: 0;
	 right: 0;
	 height: 160upx;
	 background-color:#FFF;/*#DCDCDC;*/
	 border-color:#D9D9D9;
	 border-top-width: 1upx;
	 border-top-style: solid;
	}
	.footer1{
		display: flex;
		flex-direction: row;
		height: 60upx;
		border-bottom-color: #808080;
		border-bottom-width: 1upx;
		border-bottom-style: solid;
		padding-top: 19upx;
		
	}
	.footer2{
		display: flex;
		flex-direction: row;
		height: 60upx;
		border-bottom-color: #808080;
		border-right-width: 1upx;
		border-right-style: solid;
		padding-top: 19upx;
		width: 375upx;
		justify-content: center;
	}

</style>
