(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c5074e0"],{"162c":function(t,e,n){},"1c3b":function(t,e,n){"use strict";var a=n("162c"),r=n.n(a);r.a},2423:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"c",(function(){return f}));var a=n("b775");function r(t){return Object(a["a"])({method:"GET",url:"/app/v1_1/articles",params:t})}function i(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})}function c(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})}function s(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}function o(t,e){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t,"/articles"),params:e})}function l(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})}function u(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})}function d(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})}function f(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})}},2909:function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return a(t)||r(t)||i()}n.d(e,"a",(function(){return c}))},"435a":function(t,e,n){},"4df4":function(t,e,n){"use strict";var a=n("f8c2"),r=n("7b0b"),i=n("9bdd"),c=n("e95a"),s=n("50c4"),o=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,d,f,h=r(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,b=void 0!==m,_=0,g=l(h);if(b&&(m=a(m,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&c(g))for(e=s(h.length),n=new p(e);e>_;_++)o(n,_,b?m(h[_],_):h[_]);else for(d=g.call(h),f=d.next,n=new p;!(u=f.call(d)).done;_++)o(n,_,b?i(d,m,[u.value,_],!0):u.value);return n.length=_,n}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),i="["+r+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"63b3":function(t,e,n){},7156:function(t,e,n){var a=n("861d"),r=n("d2bb");t.exports=function(t,e,n){var i,c;return r&&"function"==typeof(i=e.constructor)&&i!==n&&a(c=i.prototype)&&c!==n.prototype&&r(t,c),t}},"7abe":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home page-container"},[n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"logo"}),n("van-button",{staticClass:"search-btn",attrs:{round:"",type:"info",size:"small",icon:"search"},on:{click:function(e){return t.$router.push("/search")}}},[t._v("搜索")])],1),n("van-tabs",{staticClass:"fixed-tabs",attrs:{swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.channels,(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name}},[n("article-list",{attrs:{channel:t}})],1)})),n("div",{staticClass:"wap-nav",attrs:{slot:"nav-right"},on:{click:function(e){t.isChannelEditShow=!0}},slot:"nav-right"},[n("van-icon",{attrs:{name:"wap-nav"}})],1)],2),n("van-popup",{style:{height:"95%"},attrs:{position:"bottom",round:""},model:{value:t.isChannelEditShow,callback:function(e){t.isChannelEditShow=e},expression:"isChannelEditShow"}},[n("van-nav-bar",{attrs:{title:"编辑频道"}},[n("van-icon",{attrs:{slot:"left",name:"cross",size:"20"},on:{click:function(e){t.isChannelEditShow=!1}},slot:"left"})],1),n("channel-edit",{attrs:{"user-channels":t.channels},on:{close:function(e){t.isChannelEditShow=!1}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1)],1)},r=[],i=(n("96cf"),n("1da1")),c=n("c24f"),s=n("5d2d"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshLoading,callback:function(e){t.refreshLoading=e},expression:"refreshLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return n("article-item",{key:e,attrs:{article:t}})})),1)],1)},l=[],u=n("2909"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0===t.article.cover.type?n("div",{staticClass:"article-item article-item-0",on:{click:t.onItemClick}},[n("div",{staticClass:"title"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]):3===t.article.cover.type?n("div",{staticClass:"article-item article-item-3",on:{click:t.onItemClick}},[n("div",{staticClass:"title van-multi-ellipsis--l2"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"cover"},t._l(t.article.cover.images,(function(t,e){return n("van-image",{key:e,staticClass:"cover-item",attrs:{fit:"cover",src:t,"lazy-load":""}})})),1),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]):n("div",{staticClass:"article-item article-item-1",on:{click:t.onItemClick}},[n("div",{staticClass:"title-label"},[n("div",{staticClass:"title van-multi-ellipsis--l3"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]),n("van-image",{staticClass:"cover",attrs:{fit:"cover",src:t.article.cover.images[0],"lazy-load":""}})],1)},f=[],h=(n("d3b7"),n("25f0"),{name:"ArticleInfo",components:{},props:{article:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onItemClick:function(){this.$router.push({name:"article",params:{articleId:this.article.art_id.toString()}})}}}),p=h,v=(n("dab3"),n("2877")),m=Object(v["a"])(p,d,f,!1,null,"ad8de02a",null),b=m.exports,_=n("2423"),g={name:"",components:{ArticleItem:b},props:{channel:{type:Object,required:!0}},data:function(){return{loading:!1,refreshLoading:!1,list:[],finished:!1,timestamp:null}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onLoad:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["f"])({channel_id:this.channel.id,timestamp:this.timestamp||Date.now(),with_top:1});case 2:n=t.sent,a=n.data,r=a.data.results,(e=this.list).push.apply(e,Object(u["a"])(r)),this.loading=!1,r.length?this.timestamp=a.data.pre_timestamp:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onRefresh:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["f"])({channel_id:this.channel.id,timestamp:Date.now(),with_top:1});case 2:n=t.sent,a=n.data,r=a.data.results,(e=this.list).unshift.apply(e,Object(u["a"])(r)),this.refreshLoading=!1,i=r.length?"更新了".concat(r.length,"条数据"):"暂无数据更新",this.$toast(i);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},C=g,E=Object(v["a"])(C,o,l,!1,null,"5b0a4995",null),w=E.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"channel-container"},[n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"title-wrap",attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"title"},[t._v("我的频道")]),n("span",{staticClass:"tip"},[t._v("点击进入频道")])]),n("van-button",{attrs:{type:"danger",size:"mini",round:"",color:"#e5615b"},on:{click:function(e){t.isEdit=!t.isEdit}}},[t._v(t._s(t.isEdit?"完成":"编辑"))])],1),n("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.userChannels,(function(e,a){return n("van-grid-item",{key:e.id,staticClass:"channel-item",on:{click:function(n){return t.onChannelActiveOrDelete(e,a)}}},[n("span",{staticClass:"text",class:{active:t.value===a}},[t._v(t._s(e.name))]),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isEdit&&"推荐"!==e.name,expression:"isEdit && channel.name !== '推荐'"}],staticClass:"close-icon",attrs:{name:"close"}})],1)})),1),n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"title-wrap",attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"title"},[t._v("推荐频道")]),n("span",{staticClass:"tip"},[t._v("点击添加频道")])])]),n("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.recommendChannels,(function(e){return n("van-grid-item",{key:e.id,staticClass:"channel-item",on:{click:function(n){return t.onChannelAdd(e)}}},[n("span",{staticClass:"text"},[t._v(t._s(e.name))])])})),1)],1)},y=[],j=(n("7db0"),n("a434"),n("b0c0"),n("a9e3"),n("159b"),n("b775"));function k(){return Object(j["a"])({method:"GET",url:"/app/v1_0/channels"})}var A={name:"ChannelEdit",components:{},props:{userChannels:{type:Array,required:!0},value:{type:Number,default:0}},data:function(){return{isEdit:!1,allChannels:[]}},computed:{recommendChannels:function(){var t=this,e=[];return this.allChannels.forEach((function(n){var a=t.userChannels.find((function(t){return t.id===n.id}));a||e.push(n)})),e}},watch:{userChannels:function(){Object(s["b"])("channels",this.userChannels)}},created:function(){this.loadAllChannels()},mounted:function(){},methods:{onChannelActiveOrDelete:function(t,e){this.isEdit&&"推荐"!==t.name?this.userChannels.splice(e,1):(this.$emit("input",e),this.$emit("close"))},onChannelAdd:function(t){this.userChannels.push(t)},loadAllChannels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:e=t.sent,n=e.data,this.allChannels=n.data.channels;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},x=A,T=(n("e9fc"),Object(v["a"])(x,O,y,!1,null,"754f5d1e",null)),I=T.exports,S={name:"HomePage",components:{ArticleList:w,ChannelEdit:I},props:{},data:function(){return{active:0,isChannelEditShow:!1,channels:[]}},computed:{},watch:{},created:function(){this.loadUserChannels()},methods:{loadUserChannels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=[],n=Object(s["a"])("channels"),!n){t.next=6;break}e=n,t.next=11;break;case 6:return t.next=8,Object(c["f"])();case 8:a=t.sent,r=a.data,e=r.data.channels;case 11:this.channels=e;case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},N=S,G=(n("1c3b"),Object(v["a"])(N,a,r,!1,null,"4a803c38",null));e["default"]=G.exports},"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,i=n("44d2"),c="find",s=!0;c in[]&&Array(1)[c]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},a630:function(t,e,n){var a=n("23e7"),r=n("4df4"),i=n("1c7e"),c=!i((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:c},{from:r})},a9e3:function(t,e,n){"use strict";var a=n("83ab"),r=n("da84"),i=n("94ca"),c=n("6eeb"),s=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),f=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,b="Number",_=r[b],g=_.prototype,C=o(f(g))==b,E=function(t){var e,n,a,r,i,c,s,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=l.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>r)return NaN;return parseInt(i,a)}return+l};if(i(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var w,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(C?d((function(){g.valueOf.call(n)})):o(n)!=b)?l(new _(E(e)),n,O):E(e)},y=a?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;y.length>j;j++)s(_,w=y[j])&&!s(O,w)&&v(O,w,p(_,w));O.prototype=g,g.constructor=O,c(r,b,O)}},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,c=i.toString,s=/^\s*function ([^ (]*)/,o="name";!a||o in i||r(i,o,{configurable:!0,get:function(){try{return c.call(this).match(s)[1]}catch(t){return""}}})},c24f:function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"i",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"j",(function(){return u})),n.d(e,"k",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return p}));n("d3b7"),n("25f0");var a=n("b775");function r(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})}function i(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/channels"})}function c(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})}function s(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})}function o(){return Object(a["a"])({method:"GET",url:"/app/v1_0/user"})}function l(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/profile"})}function u(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}function d(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})}function f(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})}function h(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t)})}function p(t,e){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/followers",params:e,data:{target:t.toString()}})}},dab3:function(t,e,n){"use strict";var a=n("435a"),r=n.n(a);r.a},e9fc:function(t,e,n){"use strict";var a=n("63b3"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-8c5074e0.82a85fc0.js.map