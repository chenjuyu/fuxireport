(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/chunLei-popups/chunLei-popups"],{"36dc":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})},6426:function(t,e,n){"use strict";var o=n("f0a3"),u=n.n(o);u.a},"86ae":function(t,e,n){"use strict";n.r(e);var o=n("bbc1"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=u.a},b091:function(t,e,n){"use strict";n.r(e);var o=n("36dc"),u=n("86ae");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n("6426");var p=n("2877"),r=Object(p["a"])(u["default"],o["a"],o["b"],!1,null,"27fa1cd9",null);e["default"]=r.exports},bbc1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,o,u,a,p){try{var r=t[a](p),c=r.value}catch(i){return void n(i)}r.done?e(c):Promise.resolve(c).then(o,u)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(o,u){var p=t.apply(e,n);function r(t){a(p,o,u,r,c,"next",t)}function c(t){a(p,o,u,r,c,"throw",t)}r(void 0)})}}var r={props:{placement:{type:String,default:"top-start"},direction:{type:String,default:"column"},x:{type:Number,default:0},y:{type:Number,default:0},value:{type:Boolean,default:!1},popData:{type:Array,default:function(){return[]}},theme:{type:String,default:"light"}},data:function(){return{popupsTop:"0px",popupsLeft:"0px"}},mounted:function(){this.popupsPosition()},methods:{tapMask:function(){this.$emit("input",!this.value)},tapItem:function(t){this.$emit("tapPopup",t),this.$emit("input",!this.value)},popupsPosition:function(){var e=p(o.default.mark(function e(){var n,u,a=this;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=new Promise(function(e,n){t.getSystemInfo({success:function(t){var n;n="android"==t.platform?t.statusBarHeight+50:t.statusBarHeight+45,e(n)}})}),e.next=3,n;case 3:e.sent,u=t.createSelectorQuery().in(this).select(".popups"),u.fields({size:!0},function(t){var e=t.width,n=t.height,o=a.transformRpx(a.y),u=a.transformRpx(a.x);switch(a.placement){case"top-start":a.popupsTop="".concat(o+9,"px"),a.popupsLeft="".concat(u-15,"px");break;case"top-end":a.popupsTop="".concat(o+9,"px"),a.popupsLeft="".concat(u+15-e,"px");break;case"bottom-start":a.popupsTop="".concat(o-18-n,"px"),a.popupsLeft="".concat(u-15,"px");break;case"bottom-end":a.popupsTop="".concat(o-9-n,"px"),a.popupsLeft="".concat(u+15-e,"px");break}}).exec();case 6:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),transformRpx:function(e){return e*t.getSystemInfoSync().screenWidth/375}}};e.default=r}).call(this,n("6e42")["default"])},f0a3:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/chunLei-popups/chunLei-popups-create-component',
    {
        'components/chunLei-popups/chunLei-popups-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("b091"))
        })
    },
    [['components/chunLei-popups/chunLei-popups-create-component']]
]);                