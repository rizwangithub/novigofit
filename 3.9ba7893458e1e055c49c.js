(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1:function(e,t){},2:function(e,t){},3:function(e,t){},"3nIf":function(e,t,o){e.exports=o.p+"ac612e2d4712fe22841c86b8ab5c629b.png"},CS3j:function(e,t,o){e.exports=o.p+"a834dfb16760c42d73d087115d8ed7e6.mp4"},DbON:function(e,t,o){e.exports=o.p+"d432f528023431c5192306e54754c321.svg"},GNRD:function(e,t,o){e.exports=o.p+"f8908643a27036409f367887334bda2d.svg"},IXp1:function(e,t,o){"use strict";var n=o("P0qE");t.a={getCalories:function(e){return Object(n.b)("/calorie",e)},getCaloriesGoalRecords:function(){return Object(n.a)("/calorie_record")},putCalories:function(e){return Object(n.c)("/calorie_record",e)}}},KTCW:function(e,t,o){e.exports=o.p+"4333419cdf3d9e573799400bb6c4130c.svg"},P0qE:function(e,t,o){"use strict";function n(e,t,o,n,r,i,a){try{var s=e[i](a),c=s.value}catch(e){return void o(e)}s.done?t(c):Promise.resolve(c).then(n,r)}function r(e){return function(){var t=this,o=arguments;return new Promise((function(r,i){var a=e.apply(t,o);function s(e){n(a,r,i,s,c,"next",e)}function c(e){n(a,r,i,s,c,"throw",e)}s(void 0)}))}}o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return u}));var i="https://elitefitforyou.com:8086",a=function(e){return null==e?"":e},s=function(e,t){return t?"".concat(e,"?").concat(Object.keys(t).map((function(e){return Array.isArray(t[e])?t[e].map((function(t){return"".concat(e,"[]=").concat(a(t).toString().replace("+","%2B")).trim()})).join("&"):"".concat(e,"=").concat(a(t[e]).toString().replace("+","%2B")).trim()})).join("&")):e},c=function(){var e=r(regeneratorRuntime.mark((function e(t,o){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),r={method:"GET",headers:{Accept:"application/json"}},n&&(r.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",fetch("".concat(i).concat(s(t,o)),r).then((function(e){return e.json()}),(function(e){return e})));case 4:case"end":return e.stop()}}),e)})));return function(t,o){return e.apply(this,arguments)}}(),l=function(){var e=r(regeneratorRuntime.mark((function e(t,o){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}},o&&(r.body=JSON.stringify(o)),n&&(r.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",fetch("".concat(i).concat(t),r).then((function(e){return e.json()}),(function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t,o){return e.apply(this,arguments)}}(),u=function(){var e=r(regeneratorRuntime.mark((function e(t,o){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("token"),r={method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"}},o&&(r.body=JSON.stringify(o)),n&&(r.headers.Authorization="Bearer ".concat(n)),e.abrupt("return",fetch("".concat(i).concat(t),r).then((function(e){return e.json()}),(function(e){return e})));case 5:case"end":return e.stop()}}),e)})));return function(t,o){return e.apply(this,arguments)}}()},Qi5J:function(e,t,o){e.exports=o.p+"36f45f584f069249b0ae847c2a5557c6.mp4"},RXLg:function(e,t,o){e.exports=o.p+"2157ffdf3bb9cc032eec9850c6de8691.mp4"},SYFX:function(e,t,o){e.exports=o.p+"30a42b6ad03a072dc80ae94152a5018c.mp4"},"U+7V":function(e,t,o){e.exports=o.p+"b223f15675f12b5d932e364698192faf.jpg"},"U+Bj":function(e,t,o){e.exports=o.p+"f2f3d108cd9d9cd4693de31e6440cda3.svg"},"f4/J":function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),i=o("TSYQ"),a=o.n(i),s=o("IP2g"),c=o("hyZ5"),l=o("U+7V"),u=o.n(l),p=o("3nIf"),d=o.n(p),m=o("DbON"),f=o.n(m),h=o("KTCW"),v=o.n(h),g=o("GNRD"),y=o.n(g),w=o("oW94"),b=o.n(w),x=o("U+Bj"),E=o.n(x),P=o("y9Qt"),C=o.n(P),S=o("Qi5J"),k=o.n(S),T=o("SYFX"),N=o.n(T),R=o("RXLg"),A=o.n(R),I=o("CS3j"),D=o.n(I),j=o("IXp1"),O=o("P0qE"),M=function(e){return Object(O.b)("/userFrame",e)},V=function(e){return Object(O.b)("/collectInterval",e)},L=function(e){return Object(O.c)("/time_record",e)};o("kfww");function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function W(e){return[e.y,e.x]}function F(e,t,o,n,r){e.beginPath(),e.arc(o,t,n,0,2*Math.PI),e.fillStyle=r,e.fill()}function _(e,t,o,n,r){var i=U(e,2),a=i[0],s=i[1],c=U(t,2),l=c[0],u=c[1];r.beginPath(),r.moveTo(s*n,a*n),r.lineTo(u*n,l*n),r.lineWidth=5,r.strokeStyle=o,r.stroke()}function B(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=c.getAdjacentKeyPoints(e,t);r.forEach((function(e){var t="transparent";t=e[0].part.toLowerCase().includes("nose")||e[0].part.toLowerCase().includes("eye")||e[0].part.toLowerCase().includes("ear")?"transparent":"green"===e[0].color&&"green"===e[1].color?"green":"green"===e[0].color&&"red"===e[1].color||"red"===e[0].color&&"green"===e[1].color||"red"===e[0].color&&"red"===e[1].color?"red":e[0].color?e[0].color:"transparent",_(W(e[0].position),W(e[1].position),t,n,o)}))}function Y(e,t,o){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<e.length;r+=1){var i=e[r],a="transparent";if(i.score<t)a=i.part.toLowerCase().includes("nose")||i.part.toLowerCase().includes("eye")||i.part.toLowerCase().includes("ear")?"transparent":i.color?i.color:"transparent";else{var s=i.position,c=s.y,l=s.x;F(o,c*n,l*n,3,a)}}}function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return G(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return G(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function J(e,t,o,n,r,i,a){try{var s=e[i](a),c=s.value}catch(e){return void o(e)}s.done?t(c):Promise.resolve(c).then(n,r)}function X(e){return function(){var t=this,o=arguments;return new Promise((function(n,r){var i=e.apply(t,o);function a(e){J(i,n,r,a,s,"next",e)}function s(e){J(i,n,r,a,s,"throw",e)}a(void 0)}))}}function Q(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=te(e);if(t){var r=te(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Z(this,o)}}function Z(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?ee(e):t}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var ne=[],re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(l,e);var t,o,n,i=$(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),oe(ee(t=i.call(this,e)),"UNSAFE_componentWillMount",X(regeneratorRuntime.mark((function e(){var o,n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.getItem("stored points")&&localStorage.removeItem("stored points"),console.log("this.props",t.props),t.mounted=!0,e.next=5,t.setVideoDuration();case 5:return e.next=7,t.setDimensions();case 7:return o=null,n=null,r=c,i=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),t.model=i?t.initializeData("mobile"):t.initializeData("desktop"),"1"===t.props.match.params.id?t.setState({selectedURl:k.a,selectedPoster:d.a}):"2"===t.props.match.params.id?t.setState({selectedURl:N.a,selectedPoster:d.a}):"3"===t.props.match.params.id?t.setState({selectedURl:C.a,selectedPoster:u.a}):"4"===t.props.match.params.id?t.setState({selectedURl:D.a}):"5"===t.props.match.params.id?t.setState({selectedURl:C.a}):"6"===t.props.match.params.id&&t.setState({selectedURl:A.a}),e.prev=13,e.next=16,t.loadVideo();case 16:return o=e.sent,e.next=19,t.loadReferenceVideo();case 19:n=e.sent,e.next=25;break;case 22:e.prev=22,e.t0=e.catch(13),t.setState({webcamAvailable:!1});case 25:if(e.prev=25,!t.state.webcamAvailable){e.next=32;break}return e.next=29,r.load(t.model.input);case 29:t.posenetModel=e.sent,t.loadingTimeout=setTimeout((function(){t.setState({loading:!1})}),1e3),t.detectPoseInRealTime(o,n);case 32:return e.finish(25);case 33:case"end":return e.stop()}}),e,null,[[13,22,25,33]])})))),oe(ee(t),"getInstructorVideoCurrentTime",(function(){var e={exercise_id:t.props.match.params.id};V(e).then((function(e){e&&t.setState({instructorTimeInterval:e.interval})})).catch((function(e){console.log(e)}))})),oe(ee(t),"contentBrowserWise",(function(){return t.isChrome?r.a.createElement("div",{className:"browser-setting"},r.a.createElement("ul",null,r.a.createElement("li",null,"1. Open Google Chrome."),r.a.createElement("li",null,"2. At the top right, click More More and then Settings."),r.a.createElement("li",null,'3. Under "Privacy and security," click Site settings.'),r.a.createElement("li",null,"4. Click Camera or Microphone.",r.a.createElement("ul",null,r.a.createElement("li",null,"•   Turn Ask before accessing on or off.")))),r.a.createElement("div",{className:"h-auto w-100 d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"retry-now",onClick:t.retry},"Retry now"))):t.isFirefox?r.a.createElement("div",{className:"browser-setting"},r.a.createElement("ul",null,r.a.createElement("li",null,"1. Click the menu button and select Preferences."),r.a.createElement("li",null,"2. Click Privacy & Security from the left menu."),r.a.createElement("li",null,"3. Scroll down to the Permissions section."),r.a.createElement("li",null,"4. Click the Settings button for the Camera option."),r.a.createElement("li",null,"5. Enter the website URL in the Search field for the site that you want to access your camera."),r.a.createElement("li",null,"6. Click the Save Changes button.")),r.a.createElement("div",{className:"h-auto w-100 d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"retry-now",onClick:t.retry},"Retry now"))):t.isIE?r.a.createElement("div",{className:"browser-setting"},r.a.createElement("ul",null,r.a.createElement("li",null,"1. Open Internet Explore browser."),r.a.createElement("li",null,"2. From the Menu Bar, select Tools and then Internet Options."),r.a.createElement("li",null,"3. Click on the Security tab, select Internet, then click on the Custom Level button."),r.a.createElement("li",null,"4. Please check the settings of ActiveX controls and plug-ins and enable it.")),r.a.createElement("div",{className:"h-auto w-100 d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"retry-now",onClick:t.retry},"Retry now"))):r.a.createElement("div",{className:"browser-setting"},r.a.createElement("ul",null,r.a.createElement("li",null,"1. Open your browser."),r.a.createElement("li",null,"2. At the top right, click More More and then Settings."),r.a.createElement("li",null,'3. Under "Privacy and security," click Site settings.'),r.a.createElement("li",null,"4. Click Camera or Microphone.",r.a.createElement("ul",null,r.a.createElement("li",null,"•   Turn Ask before accessing on or off.")))),r.a.createElement("div",{className:"h-auto w-100 d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"retry-now",onClick:t.retry},"Retry now")))})),oe(ee(t),"initializeData",(function(e){return{algorithm:"single-pose",input:{architecture:"desktop"===e?"ResNet50":"MobileNetV1",outputStride:"desktop"===e?32:16,inputResolution:250,multiplier:"desktop"===e?1:.75,quantBytes:2},singlePoseDetection:{minPoseConfidence:.1,minPartConfidence:.5},multiPoseDetection:{maxPoseDetections:5,minPoseConfidence:.15,minPartConfidence:.1,nmsRadius:30},output:{showVideo:!0,showSkeleton:!0,showPoints:!0,showBoundingBox:!1}}})),oe(ee(t),"clearAllData",(function(){t.mounted=!1,t.stream&&t.stream.getTracks().forEach((function(e){e.stop()})),t.audioStream&&t.audioStream.getTracks().forEach((function(e){e.stop()})),t.clearTime(),t.clearCalories(),t.recordingTimeout&&(t.stopRecordingAudio(),clearTimeout(t.recordingTimeout)),t.playVideoTimeout&&clearTimeout(t.playVideoTimeout),t.loadingTimeout&&clearTimeout(t.loadingTimeout),t.videoRef&&(t.videoRef.pause(),t.videoRef.removeAttribute("src"),t.videoRef.load())})),oe(ee(t),"setupVideo",X(regeneratorRuntime.mark((function e(){var o,n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.videoRef,n=ee(t),r=n.videoWidth,i=n.videoHeight,o.width=r,o.height=i,e.abrupt("return",new Promise((function(e){e(o)})));case 5:case"end":return e.stop()}}),e)})))),oe(ee(t),"setupCamera",X(regeneratorRuntime.mark((function e(){var o,n,r,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){e.next=2;break}throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");case 2:return o=ee(t),n=o.videoWidth,r=o.videoHeight,i=ee(t),(a=i.video).width=n,a.height=r,e.next=8,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user",width:n,height:r}});case 8:return t.stream=e.sent,a.srcObject=t.stream,e.abrupt("return",new Promise((function(e){a.onloadedmetadata=function(){e(a)}})));case 11:case"end":return e.stop()}}),e)})))),oe(ee(t),"loadVideo",X(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setupCamera();case 2:return(o=e.sent).play(),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))),oe(ee(t),"loadReferenceVideo",X(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setupVideo();case 2:return o=e.sent,e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})))),oe(ee(t),"detectPoseInRealTime",(function(e){var o=ee(t),n=o.videoWidth,r=o.videoHeight,i=ee(t).canvas,a=i.getContext("2d");i.width=n,i.height=r;var s=function(){var o=X(regeneratorRuntime.mark((function o(){var i,c,l,u,p;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:l=[],u=[],o.t0=t.model.algorithm,o.next="single-pose"===o.t0?5:"multi-pose"===o.t0?11:5;break;case 5:return o.next=7,t.posenetModel.estimatePoses(e,{flipHorizontal:!0,decodingMethod:"single-person"});case 7:return l=o.sent,i=+t.model.singlePoseDetection.minPoseConfidence,c=+t.model.singlePoseDetection.minPartConfidence,o.abrupt("break",18);case 11:return o.next=13,t.posenetModel.estimatePoses(e,{flipHorizontal:!0,decodingMethod:"multi-person",maxDetections:t.model.multiPoseDetection.maxPoseDetections,scoreThreshold:t.model.multiPoseDetection.minPartConfidence,nmsRadius:t.model.multiPoseDetection.nmsRadius});case 13:return u=o.sent,l.push(u),i=+t.model.multiPoseDetection.minPoseConfidence,c=+t.model.multiPoseDetection.minPartConfidence,o.abrupt("break",18);case 18:"Play"!==t.state.actionText&&l.unshift(t.videoRef.currentTime),ne.push(l),a.clearRect(0,0,n,r),t.model.output.showVideo&&(a.save(),a.scale(-1,1),a.translate(-n,0),a.drawImage(e,0,0,n,r),a.restore()),p=[],t.started?"1"===t.props.match.params.id||"2"===t.props.match.params.id||"3"===t.props.match.params.id||"4"===t.props.match.params.id?t.showYellowLines?t.setColor(l,"yellow"):p=t.getPoses(l):"5"===t.props.match.params.id||"6"===t.props.match.params.id?"Play"!==t.state.actionText?t.setAquaColor(l,"aqua"):t.setColor(l,"aqua"):t.setColor(l,"yellow"):t.setColor(l,"yellow"),l[0].keypoints&&l[0].keypoints.forEach((function(e){t.setColor(e.part,"red"),p.forEach((function(t){e.part===t.part&&(e=t)}))})),l.forEach((function(e){var o=e.score,n=e.keypoints;o>=i&&(t.model.output.showPoints&&Y(n,c,a),t.model.output.showSkeleton&&B(n,c,a))})),t.started&&t.getPosesAfterTime&&t.checkUserNotMoving(l),t.getCaloriesNow&&t.setCalories(),t.mounted?window.requestAnimationFrame(s):window.cancelAnimationFrame(s);case 29:case"end":return o.stop()}}),o)})));return function(){return o.apply(this,arguments)}}();s()})),oe(ee(t),"setColor",(function(e,t){e[0].keypoints&&e[0].keypoints.forEach((function(e){e.color=t}))})),oe(ee(t),"setAquaColor",(function(e,t){e[1].keypoints&&e[1].keypoints.forEach((function(e){e.color=t}))})),oe(ee(t),"setVideoDuration",(function(){"3"===t.props.match.params.id?t.setState({videoDuration:5}):t.setState({videoDuration:1})})),oe(ee(t),"getVideoRef",(function(e){t.videoRef=e})),oe(ee(t),"getCanvas",(function(e){t.canvas=e})),oe(ee(t),"getVideo",(function(e){t.video=e})),oe(ee(t),"getVideoDimensions",(function(e){t.videoDimensions=e})),oe(ee(t),"getVideoParent",(function(e){t.videoParentDiv=e})),oe(ee(t),"setDimensions",(function(){var e=navigator.userAgent.match(/Tablet|iPad|iPod/i)&&window.innerWidth<=1280&&window.innerHeight>=768;if(console.log(e),/iPhone|iPod|Android/i.test(navigator.userAgent)){var o=document.documentElement.clientWidth,n=document.documentElement.clientWidth;t.videoWidth=o,t.videoHeight=n}else if(e){var r=document.body.clientWidth,i=document.body.clientHeight;t.videoWidth=r,t.videoHeight=i}else{var a=t.videoParentDiv.getBoundingClientRect(),s=a.width,c=a.height;t.videoWidth=s,t.videoHeight=c}})),oe(ee(t),"checkUserNotMoving",(function(e){var o=!1;e.forEach((function(e){e.score<t.model.singlePoseDetection.minPoseConfidence&&(o=!0)})),o&&t.playVideo("Pause"),t.getPosesAfterTime=!1})),oe(ee(t),"getPosesAfterFiveSeconds",(function(){t.timeIntervalPoses=setInterval((function(){t.getPosesAfterTime=!0}),t.timeToGetPoses)})),oe(ee(t),"getPoses",(function(e){var o=t.state,n=(o.videoWidth,o.videoHeight,e),r=[],i=[],a=t.props.match.params.id;if(t.videoRef.currentTime===t.videoRef.duration&&t.goNext(),n.length>0){n[1].keypoints.forEach((function(e){e.part.toLowerCase().includes("shoulder")||e.part.toLowerCase().includes("elbow")||e.part.toLowerCase().includes("wrist")||e.part.toLowerCase().includes("hip")||e.part.toLowerCase().includes("knee")||e.part.toLowerCase().includes("ankle")?r.push(e):i.push(e)}));var s=function(e,t,o,n,r){var i=[],a=[],s=[],c=[],l=[],u=[];if(e.forEach((function(e){e.part.toLowerCase().includes("shoulder")&&i.push(e),e.part.toLowerCase().includes("elbow")&&a.push(e),e.part.toLowerCase().includes("wrist")&&s.push(e),e.part.toLowerCase().includes("knee")&&l.push(e),e.part.toLowerCase().includes("hip")&&c.push(e),e.part.toLowerCase().includes("ankle")&&u.push(e)})),i[0].score>.5&&i[1].score>.5){"3"===t?(i[0].color="green",i[1].color="green"):(i[0].color="white",i[1].color="white");var p=i[1].position.x-i[0].position.x,d=i[0].position.y-2*p,m=i[0].position.y+6*p,f=i[0].position.x-1.2*p,h=i[1].position.x+1.2*p,v=i[0].position.x-1.1*p,g=i[1].position.x+1.1*p,y=i[0].position.x-.7*p,w=i[1].position.x+.7*p;"Step 1"===r&&"3"===t?(a[0].position.x>v&&a[0].position.x<g&&a[0].position.y>d&&a[0].position.y<m?a[0].color="green":a[0].color="red",a[1].position.x>v&&a[1].position.x<g&&a[1].position.y>d&&a[1].position.y<m?a[1].color="green":a[1].color="red",s[0].position.x>v&&s[0].position.x<g&&s[0].position.y>d&&s[0].position.y<m?s[0].color="green":s[0].color="red",s[1].position.x>v&&s[1].position.x<g&&s[1].position.y>d&&s[1].position.y<m?s[1].color="green":s[1].color="red",c[0].position.x>f&&c[0].position.x<h&&c[0].position.y>d&&c[0].position.y<m?c[0].color="green":c[0].color="red",c[1].position.x>f&&c[1].position.x<h&&c[1].position.y>d&&c[1].position.y<m?c[1].color="green":c[1].color="red",l[0].position.x>f&&l[0].position.x<h&&l[0].position.y>d&&l[0].position.y<m?l[0].color="green":l[0].color="red",l[1].position.x>f&&l[1].position.x<h&&l[1].position.y>d&&l[1].position.y<m?l[1].color="green":l[1].color="red",u[0].position.x>f&&u[0].position.x<h&&u[0].position.y>d&&u[0].position.y<m?u[0].color="green":u[0].color="red",u[1].position.x>f&&u[1].position.x<h&&u[1].position.y>d&&u[1].position.y<m?u[1].color="green":u[1].color="red"):"Step 100"===r&&"3"===t?(a[0].position.x>y&&a[0].position.x<w&&a[0].position.y>d&&a[0].position.y<m?a[0].color="green":a[0].color="red",a[1].position.x>y&&a[1].position.x<w&&a[1].position.y>d&&a[1].position.y<m?a[1].color="green":a[1].color="red",s[0].position.x>y&&s[0].position.x<w&&s[0].position.y>d&&s[0].position.y<m?s[0].color="green":s[0].color="red",s[1].position.x>y&&s[1].position.x<w&&s[1].position.y>d&&s[1].position.y<m?s[1].color="green":s[1].color="red",c[0].position.x>y&&c[0].position.x<w&&c[0].position.y>d&&c[0].position.y<m?c[0].color="green":c[0].color="red",c[1].position.x>y&&c[1].position.x<w&&c[1].position.y>d&&c[1].position.y<m?c[1].color="green":c[1].color="red",l[0].position.x>y&&l[0].position.x<w&&l[0].position.y>d&&l[0].position.y<m?l[0].color="green":l[0].color="red",l[1].position.x>y&&l[1].position.x<w&&l[1].position.y>d&&l[1].position.y<m?l[1].color="green":l[1].color="red",u[0].position.x>y&&u[0].position.x<w&&u[0].position.y>d&&u[0].position.y<m?u[0].color="green":u[0].color="red",u[1].position.x>y&&u[1].position.x<w&&u[1].position.y>d&&u[1].position.y<m?u[1].color="green":u[1].color="red"):(a[0].position.x>y&&a[0].position.x<w&&a[0].position.y>d&&a[0].position.y,a[0].color="white",a[1].position.x>y&&a[1].position.x<w&&a[1].position.y>d&&a[1].position.y,a[1].color="white",s[0].position.x>y&&s[0].position.x<w&&s[0].position.y>d&&s[0].position.y,s[0].color="white",s[1].position.x>y&&s[1].position.x<w&&s[1].position.y>d&&s[1].position.y,s[1].color="white",c[0].position.x>y&&c[0].position.x<w&&c[0].position.y>d&&c[0].position.y,c[0].color="white",c[1].position.x>y&&c[1].position.x<w&&c[1].position.y>d&&c[1].position.y,c[1].color="white",l[0].position.x>y&&l[0].position.x<w&&l[0].position.y>d&&l[0].position.y,l[0].color="white",l[1].position.x>y&&l[1].position.x<w&&l[1].position.y>d&&l[1].position.y,l[1].color="white",u[0].position.x>y&&u[0].position.x<w&&u[0].position.y>d&&u[0].position.y,u[0].color="white",u[1].position.x>y&&u[1].position.x<w&&u[1].position.y>d&&u[1].position.y,u[1].color="white")}else i[0].color="white",i[1].color="white";return[].concat(i,a,s,c,l,u)}(r,a,0,0,t.stepToShow);return s=[].concat(z(s),i)}return[]})),oe(ee(t),"updateStep",(function(e){t.stepToShow=e})),oe(ee(t),"playVideo",(function(e){if("Pause"===e)return t.setState({actionText:"Play"}),clearInterval(t.interMessage),clearInterval(t.intervalId),t.videoRef.pause(),t.clearTime(),t.clearCalories(),t.started=!1,t.getPosesAfterTime=!1,void(t.getCaloriesNow=!1);"Play"===e&&(t.setState({playClicked:!0}),t.videoRef.currentTime>1&&t.setState({countdown:3}),t.interMessage=setInterval((function(){t.state.countdown>1?t.setState((function(e){return{countdown:e.countdown-1}})):t.setState({playClicked:!1})}),2e3),setTimeout((function(){t.postCoOrdinatesData(e),console.log("video duration",t.videoRef.duration),t.userAwayPoses=[];var o=e,n={actionText:"Pause"===o?"Play":"Pause"};t.setState(n),"Play"===o&&("1"!==t.props.match.params.id&&"2"!==t.props.match.params.id&&"3"!==t.props.match.params.id&&"4"!==t.props.match.params.id?(t.showYellowLines=!1,t.started=!0):t.videoRef.currentTime=t.videoRef.currentTime?t.videoRef.currentTime:1,t.videoRef.play(),t.getPosesAfterFiveSeconds(),t.getCaloriesAfterTime()),t.trackVideo()}),6e3))})),oe(ee(t),"postCoOrdinatesData",(function(e){"Play"===e&&(t.intervalId=setInterval((function(){var e=[],o=[],n={};ne.forEach((function(t){e.push({currentTime:t[0],"co-ordinates":t[1]}),o.push(t[0])})),e.reverse(),e.length>0&&e[0]["co-ordinates"].score>.5&&e[0]["co-ordinates"].keypoints[7].score>.5&&e[0]["co-ordinates"].keypoints[8].score>.5&&e[0]["co-ordinates"].keypoints[15].score>.5&&e[0]["co-ordinates"].keypoints[16].score>.5&&(n={exercise_id:t.props.match.params.id,frame:e[0]},t.state.instructorTimeInterval.forEach((function(o){o===Math.floor(e[0].currentTime,10)&&Math.floor(e[0].currentTime,10)<t.videoRef.duration&&M(n).then((function(e){e&&console.log("Response User",e)})).catch((function(e){console.log(e)}))})))}),1e3))})),oe(ee(t),"setCalories",(function(){var e;t.getCalories((null===(e=t.videoRef)||void 0===e?void 0:e.currentTime)||0),t.getCaloriesNow=!1})),oe(ee(t),"getCaloriesAfterTime",(function(){t.caloriesInterval=setInterval((function(){t.getCaloriesNow=!0}),t.timeToGetCalories)})),oe(ee(t),"clearTime",(function(){t.timeIntervalPoses&&clearInterval(t.timeIntervalPoses)})),oe(ee(t),"clearCalories",(function(){t.caloriesInterval&&clearInterval(t.caloriesInterval)})),oe(ee(t),"setStepsAccordingToTime",(function(e){t.clearCalories();var o=function(e){var t={};return e>1&&e<900&&(t.mode="Start"),e>=900&&(t.mode="Stop"),e>=1&&e<88&&(t.step="Step 1"),e>=88&&e<114&&(t.step="Step 100"),e>=114&&e<143&&(t.step="Step 1"),e>=143&&e<246&&(t.step="Step 100"),e>=246&&e<308&&(t.step="Step 1"),e>=308&&e<900&&(t.step="Step 100"),t}(e);"Start"===o.mode&&(e.toFixed(0)%15==0?t.getCaloriesNow=!0:t.getCaloriesNow=!1,t.showYellowLines=!1,t.started=!0,t.updateStep(o.step)),"Stop"===o.mode&&(t.getCaloriesNow=!1,t.showYellowLines=!1,t.started=!1),"Idle"===o.mode&&(t.getCaloriesNow=!1,t.showYellowLines=!0,t.started=!0)})),oe(ee(t),"trackVideo",(function(){t.videoRef.ontimeupdate=function(){if(t.videoRef){"1"!==t.props.match.params.id&&"2"!==t.props.match.params.id&&"3"!==t.props.match.params.id&&"4"!==t.props.match.params.id||"Pause"!==t.state.actionText||t.setStepsAccordingToTime(t.videoRef.currentTime),t.videoRef.currentTime===t.videoRef.duration-1&&(t.videoRef.currentTime=0,t.playVideo("Pause"));var e=(t.videoRef.currentTime/t.videoRef.duration*100).toFixed(0);t.calculateProgress(e)}}})),oe(ee(t),"goNext",(function(){var e=t.props.match.params.id;"calories"===t.selectedUnit?t.putCalories():t.putTimeRecord(),t.props.history.push("/app/feedback/".concat(e))})),oe(ee(t),"calculateProgress",(function(e){e<0&&(e=0),e>100&&(e=100);var o=(100-e)/100*(80*Math.PI);t.setState({fillProgress:o})})),oe(ee(t),"removeDisclaimer",(function(){t.setState({showDisclaimer:!1})})),oe(ee(t),"reloadVideo",(function(){t.videoRef.currentTime=0,t.setState({countdown:3}),t.playVideo("Pause")})),oe(ee(t),"retry",(function(){window.location.reload()})),oe(ee(t),"getCalories",(function(e){var o=t.props.match.params.id,n={time:(null==e?void 0:e.toFixed(0))||0,exercise_id:o};j.a.getCalories(n).then((function(e){var o;e&&t.mounted&&t.setState({calories:(null==e||null===(o=e.calorie_burn)||void 0===o?void 0:o.toFixed(0))||0})})).catch((function(e){console.log(e)}))})),oe(ee(t),"putCalories",(function(){var e={exercise_id:t.props.match.params.id,current_calories:t.state.calories};j.a.putCalories(e).then((function(e){e&&console.log("calories updated successfully",e)})).catch((function(e){console.log(e)}))})),oe(ee(t),"putTimeRecord",(function(){var e,o,n={exercise_id:t.props.match.params.id,current_time:(null===(e=t.videoRef)||void 0===e||null===(o=e.currentTime)||void 0===o?void 0:o.toFixed(0))||0};L(n).then((function(e){e&&console.log("Time updated successfully")})).catch((function(e){console.log(e)}))})),oe(ee(t),"showHideHelpPopup",(function(e){t.setState({showHelpText:e})})),oe(ee(t),"reloadPage",(function(){window.location.reload()})),t.state={loading:!0,actionText:"Play",videoDuration:null,fillProgress:251.33,showDisclaimer:!0,calories:0,voiceResponse:"",blockToShowSelectedExercise:!1,webcamAvailable:!0,showHelpText:!1,selectedURl:"",selectedPoster:"",instructorTimeInterval:[],playClicked:!1,countdown:3},t.videoWidth=null,t.videoHeight=null,t.stepToShow=null,t.isBlocked=!1,t.isRecording=!1,t.timeToGetPoses=5e3,t.timeToGetCalories=15e3,t.getPosesAfterTime=!1,t.started=!1,t.userNotMovingPoses=[],t.showYellowLines=!1,t.getCaloriesNow=!1,t.isFirefox="undefined"!=typeof InstallTrigger,t.isIE=!!document.documentMode,t.isChrome=!(!window.chrome||!window.chrome.webstore&&!window.chrome.runtime),t.selectedUnit=localStorage.getItem("goal-unit"),t}return t=l,(o=[{key:"componentDidMount",value:function(){this.getInstructorVideoCurrentTime()}},{key:"componentWillUnmount",value:function(){this.clearAllData(),clearInterval(this.intervalId),clearInterval(this.interMessage)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"w-100 h-100 position-relative video-container"},r.a.createElement("div",{className:a()("h-100 w-100 position-absolute hide-show-container",{show:!this.state.showDisclaimer,hide:this.state.showDisclaimer})},r.a.createElement("div",{className:"container-fluid h-100 video-capture-container padding-20"},r.a.createElement("div",{className:"row m-no-pm vc-wrapper flex-lg-row"},r.a.createElement("div",{className:"col-12 col-xl-9 m-no-pm pos-relative d-flex flex-row justify-content-center align-items-center"},r.a.createElement("div",{className:"webcam-container"},r.a.createElement("div",{className:"w-100 h-100",ref:this.getVideoParent},r.a.createElement("video",{muted:!0,playsInline:!0,id:"videoNoShow",ref:this.getVideo}),r.a.createElement("canvas",{className:"webcam",ref:this.getCanvas})),this.state.loading&&!this.state.webcamAvailable&&r.a.createElement("div",{className:"w-100 h-100 position-absolute webcam-not-available d-flex flex-row justify-content-center align-items-center"},r.a.createElement("span",null,"Please allow access to your camera"),r.a.createElement("button",{type:"button",className:"transparent-button help-icon ml-2",onClick:function(){return e.showHideHelpPopup(!0)}},r.a.createElement(s.a,{icon:["fas","info-circle"],className:"fa-md",color:"#9e9e9e"}))),this.state.loading&&this.state.webcamAvailable&&r.a.createElement("div",{className:"w-100 h-100 position-absolute webcam-not-available d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"loader"}),r.a.createElement("span",{className:"mt-4 loading-text"},"Loading..."))),r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"timer-wrapper"},r.a.createElement("svg",{id:"svg",width:"100",height:"100",viewBox:"0 0 100 100"},r.a.createElement("circle",{r:"40",cx:"50",cy:"50",fill:"transparent",strokeDasharray:"251.33",strokeDashoffset:"0"}),r.a.createElement("circle",{id:"bar",r:"40",cx:"50",cy:"50",fill:"transparent",strokeDasharray:"251.33",style:{strokeDashoffset:this.state.fillProgress}}))),r.a.createElement("div",{className:"timer-count"},this.state.videoDuration)),r.a.createElement("div",{className:"stats d-flex"},r.a.createElement("div",{className:"stat"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("img",{src:f.a,alt:"Calories"}),this.state.calories),"Calories Burned")),r.a.createElement("div",{className:"poweredby"},"Powered by EliteFit"),this.state.playClicked&&r.a.createElement("div",{className:"message-before-play"},r.a.createElement("div",{className:"countdown-message"},"For a full body workout, make sure your full body is seen"),r.a.createElement("div",{className:"countdown"},this.state.countdown))),r.a.createElement("div",{className:"col-12 m-no-pm col-xl-3"},r.a.createElement("div",{className:"chatbot"},"For a full body workout, make sure your full body is seen"),r.a.createElement("div",{className:"reference-video-container"},r.a.createElement("video",{preload:"metadata",poster:this.state.selectedPoster,playsInline:!0,className:"reference-video",width:"560",height:"315",ref:this.getVideoRef},r.a.createElement("source",{src:this.state.selectedURl,type:"video/mp4"})),r.a.createElement("div",{className:"controls-container d-flex"},r.a.createElement("div",{className:a()("controls",{"show-icons":"Play"===this.state.actionText,"hide-icons":"Pause"===this.state.actionText})},r.a.createElement("button",{className:"transparent-button controls d-flex flex-column justify-content-center align-items-center",type:"button",disabled:!this.state.webcamAvailable||this.state.loading,onClick:function(){return e.playVideo("Play")}},r.a.createElement("span",null,r.a.createElement("img",{src:E.a,alt:"Play"})),"Play")),r.a.createElement("div",{className:a()("controls",{"show-icons":"Pause"===this.state.actionText,"hide-icons":"Play"===this.state.actionText})},r.a.createElement("button",{className:"transparent-button controls d-flex flex-column justify-content-center align-items-center",type:"button",disabled:!this.state.webcamAvailable||this.state.loading,onClick:function(){return e.playVideo("Pause")}},r.a.createElement("span",null,r.a.createElement("img",{src:y.a,alt:"Pause"})),"Pause")),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{className:"transparent-button controls d-flex flex-column justify-content-center align-items-center",type:"button",disabled:!this.state.webcamAvailable||this.state.loading,onClick:this.reloadVideo},r.a.createElement("span",null,r.a.createElement("img",{src:b.a,alt:"Reload"})),"Reload")),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{className:"transparent-button controls d-flex flex-column justify-content-center align-items-center",type:"button",onClick:this.goNext},r.a.createElement("span",null,r.a.createElement("img",{src:v.a,alt:"Close"})),"End Workout")))))))),r.a.createElement("div",{className:a()("h-100 w-100 hide-show-container disclaimer-wrapper",{show:this.state.showDisclaimer,hide:!this.state.showDisclaimer})},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h5",{className:"pb-4 pt-4 text-center"},"Your video is not being recorded and no images are being captured."),r.a.createElement("div",{className:"safety-msg-block text-left"},r.a.createElement("h5",null,"Safety message:"),r.a.createElement("p",null,"These are important points to remember before participating in any exercise programme:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Do not exercise if you are not feeling well."),r.a.createElement("li",null,"Stop if you feel dizzy, unwell or experience any pain or discomfort at any time during the exercise"),r.a.createElement("li",null,"If you have any medical condition(s), consult your doctor before doing these exercises"))),r.a.createElement("div",{className:"disclaimer-msg-block text-left"},r.a.createElement("h5",null,"Disclaimer:"),"The exercise fitness videos and information provided by EliteFit is intended for informational and personal use only. Nothing contained in this website should be considered as medical advice or diagnosis. Your use of the website is solely at your own risk.")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",className:"buttons mt-4 mb-4",onClick:this.removeDisclaimer},"Ok")))),this.state.blockToShowSelectedExercise&&r.a.createElement("div",{className:"blockToShowSelectedExercise"},r.a.createElement("div",{className:"blockToShowSelectedExerciseText"},this.state.voiceResponse)),r.a.createElement("div",{className:a()("position-absolute posture-image-parent",{"show-posture-parent":this.state.showHelpText,"hide-posture-parent":!this.state.showHelpText})},r.a.createElement("div",{className:"posture-image-parent-top w-100 d-flex flex-row justify-content-between align-items-center"},r.a.createElement("h5",{className:"exercise-name"},"Help"),r.a.createElement("button",{type:"button",className:"transparent-button posture-close-button",onClick:function(){return e.showHideHelpPopup(!1)}},r.a.createElement(s.a,{icon:["far","times-circle"],className:"fa-lg"}))),r.a.createElement("div",{className:"posture-image-parent-bottom w-100"},r.a.createElement("div",{className:"help-text"},this.contentBrowserWise()))),r.a.createElement("div",{className:a()("position-absolute posture-image-parent",{"show-posture-parent":this.state.showMediaSuportText,"hide-posture-parent":!this.state.showMediaSuportText})},r.a.createElement("div",{className:"posture-image-parent-top w-100 d-flex flex-row justify-content-between align-items-center"},r.a.createElement("h5",{className:"exercise-name"},"Help"),r.a.createElement("button",{type:"button",className:"transparent-button posture-close-button",onClick:function(){return e.showHideHelpPopup(!1)}},r.a.createElement(s.a,{icon:["far","times-circle"],className:"fa-lg"}))),r.a.createElement("div",{className:"posture-image-parent-bottom w-100"},r.a.createElement("div",{className:"help-text"},this.contentBrowserWise()))))}}])&&Q(t.prototype,o),n&&Q(t,n),l}(r.a.Component);re.propTypes={},re.defaultProps={};t.default=re},kfww:function(e,t,o){},oW94:function(e,t,o){e.exports=o.p+"f8467483bfe7535e7663db422f2b3afb.svg"},y9Qt:function(e,t,o){e.exports=o.p+"9663237af475a7dce3190cc20b84d699.mp4"}}]);