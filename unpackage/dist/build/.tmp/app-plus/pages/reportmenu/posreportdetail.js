(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reportmenu/posreportdetail"],{5217:function(t,e,o){"use strict";var a=o("9c11"),n=o.n(a);n.a},"5b55":function(t,e,o){"use strict";(function(t){o("42c6"),o("921b");a(o("66fd"));var e=a(o("9746"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},9746:function(t,e,o){"use strict";o.r(e);var a=o("a829"),n=o("981b");for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);o("5217");var i=o("2877"),s=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"981b":function(t,e,o){"use strict";o.r(e);var a=o("ba30"),n=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},"9c11":function(t,e,o){},a829:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},ba30:function(t,e,o){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r=o("2f62"),i={computed:(0,r.mapState)(["forcedLogin","hasLogin","userName","userinfor"]),data:function(){return{totallist:[],id:"",totalQty:0,totalAmt:0,currPage:1,items:[]}},onLoad:function(e){n=this,this.id=e.id,console.log(t("onLoad中的currPage:"+n.currPage," at pages\\reportmenu\\posreportdetail.vue:129")),this.getdata()},onBackPress:function(){console.log(t("onBackPress"," at pages\\reportmenu\\posreportdetail.vue:132"));var e=getCurrentPages(),o=(e[e.length-1],e[e.length-2]);o.$vm.isDoRefresh=!1},onReachBottom:function(){console.log(t("进入页面时执行。。"," at pages\\reportmenu\\posreportdetail.vue:139")),n.currPage=Number(n.currPage)+Number(1);var e=this.items.length;e<=this.totallist.length?(a.showLoading({title:"正在加载...",mask:!0}),setTimeout(function(){if(1==n.currPage)n.getData();else if(n.currPage>1)for(var t=n.pagination(n.currPage,15,n.totallist),e=0;e<t.length;e++)n.items.push(t[e])},2e3),a.hideLoading(),this.loggingtype="more"):a.showToast({icon:"none",title:"没有更多数据了",duration:2e3})},methods:{getdata:function(){n.items.splice(0,n.items.length),a.request({url:a.getStorageSync("ip")+"/salesTicket.do?report88Detail",data:{hostName:a.getStorageSync("hostName"),id:this.id},method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded",token:a.getStorageSync("token")},success:function(e){if(console.log(t("detail中res"+JSON.stringify(e)," at pages\\reportmenu\\posreportdetail.vue:183")),n.totallist=e.data.obj||[],console.log(t("detail中totallist:"+JSON.stringify(n.totallist)," at pages\\reportmenu\\posreportdetail.vue:185")),0!=n.totallist.length){console.log(t("当前页数:"+n.currPage," at pages\\reportmenu\\posreportdetail.vue:193"));var o=n.pagination(n.currPage,15,n.totallist);console.log(t("array:"+JSON.stringify(o)," at pages\\reportmenu\\posreportdetail.vue:195"));for(var r=0;r<o.length;r++)n.items.push(o[r]);console.log(t("that.items:"+JSON.stringify(n.items)," at pages\\reportmenu\\posreportdetail.vue:200")),n.total()}else a.showToast({icon:"none",title:"暂无数据返回"})},fail:function(t){a.showToast({icon:"none",title:"网络请求异常"})}})},pagination:function(t,e,o){var a=(t-1)*e;return a+e>=o.length?o.slice(a,o.length):o.slice(a,a+e)},total:function(){for(var t=0,e=0,o=0;o<n.totallist.length;o++)t=Number(t)+Number(n.totallist[o].Quantity),e=Number(e)+Number(n.totallist[o].FactAmount);t&&(n.totalQty=t),e&&(n.totalAmt=parseFloat(e).toFixed(2))}}};e.default=i}).call(this,o("0de9")["default"],o("6e42")["default"])}},[["5b55","common/runtime","common/vendor"]]]);