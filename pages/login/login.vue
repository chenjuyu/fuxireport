<template>
    <view class="content">
		
        <view style="display: flex; justify-content: center;align-content: center;"> 
		<image style="width: 80px; height: 80px; background-color: #eeeeee; border-radius: 40px; "  src="../../static/img/report.png"></image>
        </view>
		<view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <m-input class="m-input" type="text" clearable focus v-model="username" placeholder="请输入账号"></m-input>
            </view>
            <view class="input-row">
                <text class="title">密码：</text>
                <m-input type="password" displayable v-model="password" confirm-type="send" @confirm="bindLogin" placeholder="请输入密码"></m-input>
            </view>
        </view>
        <view class="btn" @click="bindLogin">
           <!-- <button type="primary"  @tap="bindLogin">登录</button> -->
		   <text style="font-size: 18px;color: #FFFFFF;">登录</text>
        </view>
     <!--   <view class="action-row" >
            <navigator url="../reg/reg">注册账号</navigator>
            <text>|</text>
            <navigator url="../pwd/pwd">忘记密码</navigator>
        </view>
		
		<view class="action-row" style="margin-top: 30px;" @click="scan">
		 <text>扫描</text>	
		</view>
		-->
		
		<view style="display:flex;justify-content:flex-end;margin-top: 30px;">
			<navigator url="ip"><text style="font-size: 30upx;">配置服务器地址</text></navigator>
		</view>
		
        <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
            <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
                <image :src="provider.image" @tap="oauth(provider.value)"></image>
            </view>
        </view>
    </view>
</template>

<script>
    import service from '../../service.js';
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import mInput from '../../components/m-input.vue'

    export default {
        components: {
            mInput
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                username: '',
                password: '',
                positionTop: 0,
				ip:''
            }
        },
        computed: mapState(['forcedLogin']),
		onLoad() {
			this.ip=uni.getStorageSync('ip')
		},
        methods: {
            ...mapMutations(['login']),
            initProvider() {
                const filters = ['weixin', 'qq', 'sinaweibo'];
                uni.getProvider({
                    service: 'oauth',
                    success: (res) => {
                        if (res.provider && res.provider.length) {
                            for (let i = 0; i < res.provider.length; i++) {
                                if (~filters.indexOf(res.provider[i])) {
                                    this.providerList.push({
                                        value: res.provider[i],
                                        image: '../../static/img/' + res.provider[i] + '.png'
                                    });
                                }
                            }
                            this.hasProvider = true;
                        }
                    },
                    fail: (err) => {
                        console.error('获取服务供应商失败：' + JSON.stringify(err));
                    }
                });
            },
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
			scan(){
				uni.scanCode({
					scanType: 'barCode',
					    success: function (res) {
					        console.log('条码类型：' + res.scanType);
					        console.log('条码内容：' + res.result);
							uni.showToast({
								position:'center',
								title:res.result,
								duration: 2000
							})
					    }
				})
			},
            bindLogin() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
              /*  if (this.account.length < 5) {
                    uni.showToast({
                        icon: 'none',
                        title: '账号最短为 5 个字符'
                    });
                    return;
                }
                if (this.password.length < 6) {
                    uni.showToast({
                        icon: 'none',
                        title: '密码最短为 6 个字符'
                    });
                    return;
                } */
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
				if(this.username.trim()==''){
					uni.showToast({
					    icon: 'none',
					    title: '用户名不能为空'
					});
					return
				}
				if(this.password.trim()==''){
					uni.showToast({
					    icon: 'none',
					    title: '密码不能为空'
					});
					return
				}
				
                const data = {
                    username: this.username,
                    password: this.password
                };
				console.log('data的值'+JSON.stringify(data))
				console.log('提交的ip'+JSON.stringify(data))
				uni.request({
				    url: this.ip+'/login.do?login', //仅为示例，并非真实接口地址。
					method:'POST',
				    data: data,
				    header: {
				        'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
				    },
				    success: (res) => {
						//console.log('返回的响应头:'+JSON.stringify(res.header))
						console.log(JSON.stringify(res))
						if(res && res.header && res.header['Set-Cookie'])
						console.log('Cookie为:'+res.header['Set-Cookie'])
						
						if(res.data.success){
						uni.setStorageSync(
							'token',
							res.data.obj.token
						)
					//	console.log("res.data.obj.token："+res.data.obj.token);
				      //  console.log("登录信息："+JSON.stringify(res));
					//	console.log('登录信息token:'+uni.getStorageSync('token'));
				        //this.text = 'request success'; 
			            //this.toMain(this.username); res.data.obj.UserName
						var userinfor =res.data.obj
						    userinfor.hostName ='appreport'+res.data.obj.UserID
						this.login(userinfor);
						uni.setStorageSync(
							'hostName',
							'appreport'+res.data.obj.UserID
						)
					//	this.$store.hostName='appreport'+res.data.obj.UserID
					//	console.log('hostNameXXX:'+this.$store.hostName)
						uni.reLaunch({
						   // url: '../main/main',
						   url:'../reportmenu/purchasemenu'
						});
				
					}else{
						uni.showToast({
							 icon: 'none',
							title:res.data.msg,
							duration: 2000
						})
					}
				    }
				});
				
				/*
                const validUser = service.getUsers().some(function (user) {
                    return data.account === user.account && data.password === user.password;
                }); 
                if (validUser) {
                    this.toMain(this.account);
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: '用户账号或密码不正确',
                    });
                }*/
            },
            oauth(value) {
                uni.login({
                    provider: value,
                    success: (res) => {
                        uni.getUserInfo({
                            provider: value,
                            success: (infoRes) => {
                                /**
                                 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                 */
                                this.toMain(infoRes.userInfo.nickName);
                            }
                        });
                    },
                    fail: (err) => {
                        console.error('授权登录失败：' + JSON.stringify(err));
                    }
                });
            },
            toMain(userName) {
                this.login(userName);
                /**
                 * 强制登录时使用reLaunch方式跳转过来
                 * 返回首页也使用reLaunch方式
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../main/main',
                    });
                } else {
                    uni.navigateBack();
                }

            }
        },
        onReady() {
            this.initPosition();
          //  this.initProvider();
		 // uni.hideKeyboard()
        }
    }
</script>

<style>

 .content{
	 padding-top: 40upx;
 }  
    .action-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .action-row navigator {
        color: #007aff;
        padding: 0 20upx;
    }

    .oauth-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .oauth-image {
        width: 100upx;
        height: 100upx;
        border: 1upx solid #dddddd;
        border-radius: 100upx;
        margin: 0 40upx;
        background-color: #ffffff;
    }

    .oauth-image image {
        width: 60upx;
        height: 60upx;
        margin: 20upx;
    }
.btn{
	display: flex;
	background-color: #108ee9;
	justify-content: center;
	align-items: center;
	border-radius: 10upx;
	margin-top: 30upx;
	height: 80upx;
}
</style>
