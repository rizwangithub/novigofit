(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"215n":function(e,t,n){"use strict";var o=n("P0qE");t.a={storeWeight:function(e){return Object(o.b)("/weight",e)},getMinutesGoalRecords:function(){return Object(o.a)("/time_record")},updateWeightRecord:function(e){return Object(o.c)("/weight_record",e)}}},"33te":function(e,t,n){},"3nIf":function(e,t,n){e.exports=n.p+"ac612e2d4712fe22841c86b8ab5c629b.png"},"3nmj":function(e,t,n){e.exports=n.p+"5d1a334493368c381463edf18b4656ca.mp4"},AOVe:function(e,t,n){e.exports=n.p+"ea9fa15a39bff38b68a3a31dbe384bf9.jpg"},GO9I:function(e,t,n){e.exports=n.p+"0d8d4d954db8d4c603870746904655dd.mp4"},ISMF:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),a=(n("33te"),n("215n")),c=n("IXp1"),i=n("GO9I"),s=n.n(i),u=n("3nmj"),l=n.n(u),p=n("fLk6"),m=n.n(p),d=n("kPeo"),f=n.n(d),h=n("W/G4"),g=n.n(h),b=n("U+7V"),y=n.n(b),v=n("3nIf"),E=n.n(v),w=n("kYy0"),N=n.n(w),k=n("RilC"),x=n.n(k),O=n("AOVe"),S=n.n(O),j=n("XGPw");function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=M(e);if(t){var r=M(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=null,L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(u,e);var t,n,o,i=I(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),_(C(t=i.call(this,e)),"getMinutesRecords",(function(){t.setState({isLoading:!0}),a.a.getMinutesGoalRecords().then((function(e){e&&e.record&&t.mounted&&t.setState({total:parseInt(e.record.goal_time/60,10),current:parseInt(e.record.current_time/60,10),unit:"minutes"}),t.mounted&&t.setState({isLoading:!1})})).catch((function(e){console.log(e),t.mounted&&t.setState({isLoading:!1})}))})),_(C(t),"getCaloriesRecords",(function(){t.setState({isLoading:!0}),c.a.getCaloriesGoalRecords().then((function(e){e&&e.record&&t.mounted&&t.setState({total:e.record.goal_calories,current:e.record.current_calories}),t.mounted&&t.setState({isLoading:!1})})).catch((function(e){console.log(e),t.mounted&&t.setState({isLoading:!1})}))})),_(C(t),"playVideo",(function(){console.log("working"),A.currentTime>0&&!A.paused&&!A.ended&&A.readyState>2||A.play()})),_(C(t),"resetVideo",(function(){A.pause(),A.currentTime=0})),_(C(t),"getVideoRef",(function(e){A=e})),_(C(t),"goToExercise",(function(e){t.props.history.push("/app/capturing/".concat(e))})),t.state={loggedInPerson:"Lily",total:"1000",current:"0",unit:"calories",isLoading:!1},t.isBlocked=!1,t.goalInfo=localStorage.getItem("goal-unit"),t.props.location.pathname="app/welcome",t.userInfo=JSON.parse(localStorage.getItem("userInfo")),t}return t=u,(n=[{key:"UNSAFE_componentWillMount",value:function(){this.mounted=!0}},{key:"componentDidMount",value:function(){"minutes"===this.goalInfo?this.getMinutesRecords():this.getCaloriesRecords(),this.setState({loggedInPerson:this.userInfo.identity})}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.recordingTimeout&&(this.stopRecordingAudio(),clearTimeout(this.recordingTimeout)),this.showVoiceTextTimeout&&clearTimeout(this.showVoiceTextTimeout),this.stream&&this.stream.getTracks().forEach((function(e){e.stop()}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"h-100 col-md-12 no-padding"},r.a.createElement("div",{className:"h-100 col-md-12 no-padding"},this.state.isLoading&&r.a.createElement(j.a,{loadingText:"Loading..."}),r.a.createElement("div",{className:"col-md-12 h-100 d-flex flex-column align-items-center padding-top-40"},r.a.createElement("span",{className:"hello-msg pb-3 text-center d-block"}," ","Hello ",this.state.loggedInPerson,", Welcome back. Let's begin!"),r.a.createElement("div",{className:"row hrb w-100"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"c-box w-goal pr3"},r.a.createElement("div",{className:"goal-text"},"Weekly Goal"),r.a.createElement("div",{className:"goal-count green mright"},this.state.total," ",this.state.unit))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"c-box"},r.a.createElement("div",{className:"goal-text"},"Current"),r.a.createElement("div",{className:"goal-count green mleft"},this.state.current," ",this.state.unit)))),r.a.createElement("div",{className:"select-fitness-heading w-100 text-center mt-3 mb-3 d-block"},r.a.createElement("span",{className:"goal-count"},"Please choose your exercise")),r.a.createElement("div",{className:"video-section h-auto w-100 justify-content-center align-items-center margin-bottom-40 text-center"},r.a.createElement("button",{type:"button",onClick:function(){return e.goToExercise(2)},className:"col-md-4 video-block"},r.a.createElement("video",{poster:E.a,width:"100%",height:"auto",ref:this.getVideoRef,onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},onFocus:this.playVideo,onBlur:this.resetVideo,loop:!0},r.a.createElement("source",{src:l.a,type:"video/mp4"})),r.a.createElement("div",{className:"description-content"},r.a.createElement("span",{className:"description mt-3"},"High Knees by The Active Health"),r.a.createElement("br",null),r.a.createElement("span",{className:"description mt-2"},"1 minute"))),r.a.createElement("button",{type:"button",onClick:function(){return e.goToExercise(3)},className:"col-md-4 video-block"},r.a.createElement("video",{poster:y.a,width:"100%",height:"auto",ref:this.getVideoRef,onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},onFocus:this.playVideo,onBlur:this.resetVideo,loop:!0},r.a.createElement("source",{src:m.a,type:"video/mp4"})),r.a.createElement("div",{className:"description-content"},r.a.createElement("span",{className:"description mt-3"},"Stretch and Flexibility Exercise - by HPB (Desktop)"),r.a.createElement("br",null),r.a.createElement("span",{className:"description mt-2"},"5 minutes"))),r.a.createElement("div",{className:"select-fitness-heading w-100 text-center mt-3 mb-3 d-block"},r.a.createElement("span",{className:"goal-count"},"Coming soon")),r.a.createElement("button",{type:"button",onClick:function(){return e.goToExercise(1)},className:"col-md-4 video-block cursor-disabled"},r.a.createElement("video",{poster:N.a,width:"100%",height:"auto",ref:this.getVideoRef,onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},onFocus:this.playVideo,onBlur:this.resetVideo,loop:!0},r.a.createElement("source",{src:s.a,type:"video/mp4"})),r.a.createElement("div",{className:"description-content"},r.a.createElement("span",{className:"description mt-3"},"Skipping by The Active Health"),r.a.createElement("br",null),r.a.createElement("span",{className:"description mt-2"},"1 minute 20 seconds"))),r.a.createElement("button",{type:"button",onClick:function(){return e.goToExercise(5)},className:"col-md-4 video-block cursor-disabled"},r.a.createElement("video",{poster:S.a,width:"100%",height:"auto",ref:this.getVideoRef,onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},onFocus:this.playVideo,onBlur:this.resetVideo,loop:!0},r.a.createElement("source",{src:f.a,type:"video/mp4"})),r.a.createElement("div",{className:"description-content"},r.a.createElement("span",{className:"description mt-3"},"Disco dance"),r.a.createElement("br",null),r.a.createElement("span",{className:"description mt-2"},"15 minutes"))),r.a.createElement("button",{type:"button",onClick:function(){return e.goToExercise(6)},className:"col-md-4 video-block cursor-disabled"},r.a.createElement("video",{poster:x.a,width:"100%",height:"auto",ref:this.getVideoRef,onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},onFocus:this.playVideo,onBlur:this.resetVideo,loop:!0},r.a.createElement("source",{src:g.a,type:"video/mp4"})),r.a.createElement("div",{className:"description-content"},r.a.createElement("span",{className:"description mt-3"},"Chair workout"),r.a.createElement("br",null),r.a.createElement("span",{className:"description mt-2"},"22 minutes")))))))}}])&&T(t.prototype,n),o&&T(t,o),u}(r.a.Component);L.propTypes={},L.defaultProps={},t.default=L},IXp1:function(e,t,n){"use strict";var o=n("P0qE");t.a={getCalories:function(e){return Object(o.b)("/calorie",e)},getCaloriesGoalRecords:function(){return Object(o.a)("/calorie_record")},putCalories:function(e){return Object(o.c)("/calorie_record",e)}}},P0qE:function(e,t,n){"use strict";function o(e,t,n,o,r,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function i(e){o(c,r,a,i,s,"next",e)}function s(e){o(c,r,a,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l}));var a="https://elitefitforyou.com:8086",c=function(e){return null==e?"":e},i=function(e,t){return t?"".concat(e,"?").concat(Object.keys(t).map((function(e){return Array.isArray(t[e])?t[e].map((function(t){return"".concat(e,"[]=").concat(c(t).toString().replace("+","%2B")).trim()})).join("&"):"".concat(e,"=").concat(c(t[e]).toString().replace("+","%2B")).trim()})).join("&")):e},s=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=localStorage.getItem("token"),r={method:"GET",headers:{Accept:"application/json"}},o&&(r.headers.Authorization="Bearer ".concat(o)),e.abrupt("return",fetch("".concat(a).concat(i(t,n)),r).then((function(e){return e.json()}),(function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=localStorage.getItem("token"),r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}},n&&(r.body=JSON.stringify(n)),o&&(r.headers.Authorization="Bearer ".concat(o)),e.abrupt("return",fetch("".concat(a).concat(t),r).then((function(e){return e.json()}),(function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=localStorage.getItem("token"),r={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"}},n&&(r.body=JSON.stringify(n)),o&&(r.headers.Authorization="Bearer ".concat(o)),e.abrupt("return",fetch("".concat(a).concat(t),r).then((function(e){return e.json()}),(function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},RilC:function(e,t,n){e.exports=n.p+"46aca0cf6a86c5b89805b1778f07c6ae.png"},"U+7V":function(e,t,n){e.exports=n.p+"b223f15675f12b5d932e364698192faf.jpg"},"W/G4":function(e,t,n){e.exports=n.p+"b1759fcc3228e44fc35b13108d496ef7.mp4"},fLk6:function(e,t,n){e.exports=n.p+"149a6c8f06378e3bc7b2c72b8bb021b3.mp4"},kPeo:function(e,t,n){e.exports=n.p+"1b5566bc76327bb33d082673855b61da.mp4"},kYy0:function(e,t,n){e.exports=n.p+"d056ada85e1f2065676888087cbe0b55.png"}}]);