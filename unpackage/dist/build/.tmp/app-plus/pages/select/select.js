(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/select/select"],{"024f":function(e,t,n){"use strict";n.r(t);var o=n("5661"),s=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=s.a},"0464":function(e,t,n){"use strict";n.r(t);var o=n("caa2"),s=n("024f");for(var i in s)"default"!==i&&function(e){n.d(t,e,function(){return s[e]})}(i);n("39e1");var a=n("2877"),c=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},"39e1":function(e,t,n){"use strict";var o=n("862a"),s=n.n(o);s.a},5661:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,i=function(){return n.e("node-modules/@dcloudio/uni-ui/lib/uni-nav-bar/uni-nav-bar").then(n.bind(null,"4d03"))},a=function(){return n.e("node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more").then(n.bind(null,"1218"))},c=function(){return n.e("node-modules/@dcloudio/uni-ui/lib/uni-list/uni-list").then(n.bind(null,"0ccf"))},l={components:{uniList:c,uniLoadMore:a,uniNavBar:i},data:function(){return{keyword:"",title:"资料选择列表",currPage:1,send:"",loadingType:"more",items:[],condition:""}},onNavigationBarButtonTap:function(t){0==t.index?this.submit():(t.index=1)&&this.submit(),console.log(e(t," at pages\\select\\select.vue:52"))},onNavigationBarSearchInputChanged:function(t){console.log(e(t," at pages\\select\\select.vue:56"))},onLoad:function(t){s=this,console.log(e(JSON.stringify(t)," at pages\\select\\select.vue:60")),s.items.splice(0,s.items.length),console.log(e(o.getStorageSync("ip")+"/select.do?"+t.send," at pages\\select\\select.vue:62")),s.send=t.send,s.getdata(t)},onBackPress:function(){console.log(e("onBackPress"," at pages\\select\\select.vue:66"))},onPullDownRefresh:function(){},onReachBottom:function(){var e={};s.currPage=Number(s.currPage)+Number(1),e.condition=s.keyword,e.send=s.send,s.getdata(e)},methods:{leftclick:function(){o.navigateBack({delta:1})},checkboxChange:function(t){var n=this.items,o=t.detail.value;this.condition=o,console.log(e("values:"+o," at pages\\select\\select.vue:91"));for(var s=0,i=n.length;s<i;++s){var a=n[s];o.includes(a.value)?this.$set(a,"checked",!0):this.$set(a,"checked",!1)}},input:function(t){var n=this,o={};o.send=s.send,s.items.splice(0,s.items.length),setTimeout(function(){console.log(e("关键字的值:"+n.keyword," at pages\\select\\select.vue:107")),s.currPage=1,o.condition=n.keyword,s.getdata(o)},0)},submit:function(){console.log(e("获取到的内容:"+this.condition," at pages\\select\\select.vue:116"));var t=getCurrentPages(),n=(t[t.length-1],t[t.length-2]);n.$vm.condition=this.condition,n.$vm.isDoRefresh=!0,console.log(e("上一个页面的prevPage值："+n.toString()," at pages\\select\\select.vue:123")),o.navigateBack({delta:1})},getdata:function(t){var n=this;if(console.log(e("getdata方法中的"+JSON.stringify(t)," at pages\\select\\select.vue:129")),void 0!=t&&null!=t){var i=t.hasOwnProperty("condition")?t.condition:"",a=t.hasOwnProperty("Type")?t.Type:"",c=t.hasOwnProperty("customerid")?t.customerid:"";console.log(e(this.currPage," at pages\\select\\select.vue:136")),console.log(e("conditionddd:"+i," at pages\\select\\select.vue:137")),console.log(e("Type:"+a," at pages\\select\\select.vue:138")),console.log(e("customerid:"+c," at pages\\select\\select.vue:139")),o.request({url:o.getStorageSync("ip")+"/select.do?"+t.send,data:{currPage:this.currPage,param:i,Type:a,customerid:c},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",token:o.getStorageSync("token")},success:function(i){console.log(e("getdata中的res:"+JSON.stringify(i)," at pages\\select\\select.vue:150"));var a=i.data.obj||[];if(0==a.length)return o.showToast({icon:"none",title:"没有更多数据了"}),void(s.loadingType="noMore");n.loadingType="loading";for(var c=0;c<a.length;c++){var l={};if("getEmployee"==t.send)l.id=a[c].EmployeeID,l.Name=a[c].Name,s.items.push(l);else if("getVip"==t.send)for(c=0;c<a.length;c++)l.id=a[c].VIPID,l.Name=a[c].Name,l.Code=a[c].Code,l.DiscountRate=a[c].DiscountRate,l.PointRate=a[c].PointRate,l.UsablePoint=a[c].UsablePoint,s.items.push(l);else"getPosSalesGoods"===t.send||"getSalesGoods"===t.send?(l.id=a[c].GoodsID,l.Name=a[c].Name,l.Code=a[c].Code,l.RetailSales=a[c].RetailSales,l.UnitPrice=a[c].UnitPrice,l.Discount=a[c].Discount,l.DiscountFlag=a[c].DiscountFlag,l.sizIndex=a[c].sizIndex,s.items.push(l)):"getColorByGoodsCode"===t.send?(l.id=a[c].ColorID,l.Name=a[c].Name,s.items.push(l)):"getSizeByGoodsCode"===t.send?(l.id=a[c].SizeID,l.Name=a[c].Name,l.Code=a[c].SizeCode,l.x=a[c].x,s.items.push(l)):"getCustomer"===t.send?(l.id=a[c].CustomerID,l.Name=a[c].Name,l.DiscountRate=a[c].DiscountRate,l.DistrictID=a[c].DistrictID,l.OrderDiscount=a[c].OrderDiscount,l.AllotDiscount=a[c].AllotDiscount,l.ReplenishDiscount=a[c].ReplenishDiscount,s.items.push(l)):"getWarehouse"===t.send?(l.id=a[c].DepartmentID,l.Name=a[c].Name,l.SettleCustID=a[c].SettleCustID,l.MustExistsGoodsFlag=a[c].MustExistsGoodsFlag,s.items.push(l)):"getBrand"===t.send?(l.id=a[c].BrandID,l.Name=a[c].Name,s.items.push(l)):"getPaymentType"==t.send?(l.id=a[c].PaymentTypeID,l.Name=a[c].Name,s.list.push(l)):"getGoodsType"==t.send?(l.id=a[c].GoodsTypeID,l.Name=a[c].Name,s.items.push(l)):"getGoodsSupplier"==t.send&&(l.id=a[c].SupplierID,l.Name=a[c].Name,l.DiscountRate=a[c].DiscountRate,s.items.push(l))}n.loadingType="more"},fail:function(e){o.showToast({icon:"none",title:"网络请求异常"})}})}}}};t.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])},5994:function(e,t,n){"use strict";(function(e){n("42c6"),n("921b");o(n("66fd"));var t=o(n("0464"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"862a":function(e,t,n){},caa2:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s})}},[["5994","common/runtime","common/vendor"]]]);