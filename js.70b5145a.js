parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"ierA":[function(require,module,exports) {
var define;
var t;!function(e,n){"function"==typeof t&&t.amd?t([],n):"object"==typeof module&&module.exports?module.exports=n():e.ScrollTrigger=n()}(this,function(){"use strict";return function(t,e,n){function i(){var t=f.bindElement.scrollTop?f.bindElement.scrollTop:document.documentElement.scrollTop,e=f.bindElement.scrollLeft?f.bindElement.scrollLeft:document.documentElement.scrollLeft;c.left==e&&c.top==t||f.scrollDidChange(),o.length>0||r.length>0?(u=!0,a(i)):u=!1}function l(t,e){var n=e.split("("),i=n[0];if(n.length>1?n=(n=n[1].split(")")[0]).indexOf("', '")>-1?n.split("', '"):n.indexOf("','")>-1?n.split("','"):n.indexOf('", "')>-1?n.split('", "'):n.indexOf('","')>-1?n.split('","'):[n]:n=[],n=n.map(function(t){return function(t){return'"'==(t+="")[0]&&(t=t.substr(1)),"'"==t[0]&&(t=t.substr(1)),'"'==t[t.length-1]&&(t=t.substr(0,t.length-1)),"'"==t[t.length-1]&&(t=t.substr(0,t.length-1)),t}(t)}),"function"==typeof f.callScope[i])try{f.callScope[i].apply(t.element,n)}catch(l){try{f.callScope[i].apply(null,n)}catch(l){}}}var s=function(t,e){this.element=e,this.defaultOptions=t,this.showCallback=null,this.hideCallback=null,this.visibleClass="visible",this.hiddenClass="invisible",this.addWidth=!1,this.addHeight=!1,this.once=!1;var n=0,i=0;this.left=function(t){return function(){return t.element.getBoundingClientRect().left}}(this),this.top=function(t){return function(){return t.element.getBoundingClientRect().top}}(this),this.xOffset=function(t){return function(e){var i=n;return t.addWidth&&!e?i+=t.width():e&&!t.addWidth&&(i-=t.width()),i}}(this),this.yOffset=function(t){return function(e){var n=i;return t.addHeight&&!e?n+=t.height():e&&!t.addHeight&&(n-=t.height()),n}}(this),this.width=function(t){return function(){return t.element.offsetWidth}}(this),this.height=function(t){return function(){return t.element.offsetHeight}}(this),this.reset=function(t){return function(){t.removeClass(t.visibleClass),t.removeClass(t.hiddenClass)}}(this),this.addClass=function(t){return t.element.classList?function(e,n){t.element.classList.contains(e)||(t.element.classList.add(e),"function"==typeof n&&n())}:function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),l=t.element.className;i.test(l)||(t.element.className+=" "+e,"function"==typeof n&&n())}}(this),this.removeClass=function(t){return t.element.classList?function(e,n){t.element.classList.contains(e)&&(t.element.classList.remove(e),"function"==typeof n&&n())}:function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),l=t.element.className;i.test(l)&&(t.element.className=l.replace(i,"$1").trim(),"function"==typeof n&&n())}}(this),this.init=function(t){return function(){var e=t.defaultOptions,l=t.element.getAttribute("data-scroll");e&&(e.toggle&&e.toggle.visible&&(t.visibleClass=e.toggle.visible),e.toggle&&e.toggle.hidden&&(t.hiddenClass=e.toggle.hidden),e.showCallback&&(t.showCallback=e.showCallback),e.hideCallback&&(t.hideCallback=e.hideCallback),!0===e.centerHorizontal&&(n=t.element.offsetWidth/2),!0===e.centerVertical&&(i=t.element.offsetHeight/2),e.offset&&e.offset.x&&(n+=e.offset.x),e.offset&&e.offset.y&&(i+=e.offset.y),e.addWidth&&(t.addWidth=e.addWidth),e.addHeight&&(t.addHeight=e.addHeight),e.once&&(t.once=e.once));var s=l.indexOf("addWidth")>-1,o=l.indexOf("addHeight")>-1,r=l.indexOf("once")>-1;!1===t.addWidth&&!0===s&&(t.addWidth=s),!1===t.addHeight&&!0===o&&(t.addHeight=o),!1===t.once&&!0===r&&(t.once=r),t.showCallback=t.element.hasAttribute("data-scroll-showCallback")?t.element.getAttribute("data-scroll-showCallback"):t.showCallback,t.hideCallback=t.element.hasAttribute("data-scroll-hideCallback")?t.element.getAttribute("data-scroll-hideCallback"):t.hideCallback;var c=l.split("toggle(");if(c.length>1){var a=c[1].split(")")[0].split(",");String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),t.visibleClass=a[0].trim().replace(".",""),t.hiddenClass=a[1].trim().replace(".","")}l.indexOf("centerHorizontal")>-1&&(n=t.element.offsetWidth/2),l.indexOf("centerVertical")>-1&&(i=t.element.offsetHeight/2);var u=l.split("offset(");if(u.length>1){var d=u[1].split(")")[0].split(",");n+=parseInt(d[0].replace("px","")),i+=parseInt(d[1].replace("px",""))}return t}}(this)};this.scrollElement=window,this.bindElement=document.body,this.callScope=window;var o=[],r=[],c={left:-1,top:-1},a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},u=!1,d=function(t){return function(e,n,i){return t.bindElement=null!=n&&null!=n?n:document.body,t.scrollElement=null!=i&&null!=i?i:window,t.bind(t.bindElement.querySelectorAll("[data-scroll]")),t}}(this);this.bind=function(e){return function(n){n instanceof HTMLElement&&(n=[n]);var l=[].slice.call(n);return l=l.map(function(e){return new s(t,e).init()}),(o=o.concat(l)).length>0&&0==u?(u=!0,i()):u=!1,e}}(this),this.triggerFor=function(t){var e=null;return o.each(function(n){n.element==t&&(e=n)}),e},this.destroy=function(t){return function(e){return o.each(function(t,n){t.element==e&&o.splice(n,1)}),t}}(this),this.destroyAll=function(t){return function(){return o=[],t}}(this),this.reset=function(t){return function(e){var n=t.triggerFor(e);if(null!=n){n.reset();var i=o.indexOf(n);i>-1&&o.splice(i,1)}return t}}(this),this.resetAll=function(t){return function(){return o.each(function(t){t.reset()}),o=[],t}}(this),this.attach=function(t){return function(e){return r.push(e),u||(u=!0,i()),t}}(this),this.detach=function(t){return function(e){var n=r.indexOf(e);return n>-1&&r.splice(n,1),t}}(this);var f=this;return this.scrollDidChange=function(t){return function(){var e=t.scrollElement.innerWidth||t.scrollElement.offsetWidth,n=t.scrollElement.innerHeight||t.scrollElement.offsetHeight,i=t.bindElement.scrollTop?t.bindElement.scrollTop:document.documentElement.scrollTop,s=t.bindElement.scrollLeft?t.bindElement.scrollLeft:document.documentElement.scrollLeft,a=[];o.each(function(t){var o=t.left(),r=t.top();c.left>s?o-=t.xOffset(!0):c.left<s&&(o+=t.xOffset(!1)),c.top>i?r-=t.yOffset(!0):c.top<i&&(r+=t.yOffset(!1)),e>o&&o>=0&&n>r&&r>=0?(t.addClass(t.visibleClass,function(){t.showCallback&&l(t,t.showCallback)}),t.removeClass(t.hiddenClass),t.once&&a.push(t)):(t.addClass(t.hiddenClass),t.removeClass(t.visibleClass,function(){t.hideCallback&&l(t,t.hideCallback)}))}),r.each(function(l){l.call(t,s,i,e,n)}),a.each(function(t){var e=o.indexOf(t);e>-1&&o.splice(e,1)}),c.left=s,c.top=i}}(this),Array.prototype.each=function(t){for(var e=this.length,n=0;e>n;n++){var i=this[n];i&&t(i,n)}},d(t,e,n)}});
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=o(require("scrolltrigger-classes"));function o(e){return e&&e.__esModule?e:{default:e}}window.onload=function(){console.log("Loaded"),new e.default({toggle:{visible:"reveal-text",hidden:"invisible"},offset:{x:0,y:20},addHeight:!0,once:!0},document.body,window);for(var o=document.querySelectorAll(".name"),i=0;i<o.length;i++)o[i].classList.add("reveal-text"),o[i].classList.remove("invisible");for(var t=document.querySelectorAll(".fade-in"),n=0;n<t.length;n++)t[n].classList.add("loaded");window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)},window.mobileAndTabletcheck=function(){var e,o=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(o=!0),o},window.mobileAndTabletcheck()||function(){console.log("Using cursor.js");var e=document.createElement("DIV");e.setAttribute("class","custom-cursor"),document.body.appendChild(e);for(var o,i,t=document.querySelectorAll("a"),n=!1,a=0;a<t.length;a++)t[a].addEventListener("mouseover",function(){e.classList.add("custom-cursor--big")}),t[a].addEventListener("mouseout",function(){e.classList.remove("custom-cursor--big")});e.classList.add("custom-cursor--showing"),window.onmousemove=function(t){o=t.clientX,i=t.clientY,n||(e.classList.add("custom-cursor--showing"),n=!0),requestAnimationFrame(function(){e.style.cssText="left: "+o+"px; top: "+i+"px;"})},document.onmouseleave=function(){e.classList.remove("custom-cursor--showing"),n=!1,c=0,l=0}}();var a=[],r=document.getElementById("canvas"),s=r.getContext("2d"),d=Math.floor(window.innerHeight*window.innerWidth/2e3),c=-100,l=-100;function m(){s.clearRect(0,0,r.width,r.height);for(var e=0;e<d;e++){var o=a[e],i=c,t=l,n=o.x,u=o.y,h=Math.sqrt((n-i)*(n-i)+(u-t)*(u-t));if(h<150){var p=(i-n)/h,v=(t-u)/h,g=150/(h*h)/2;o.velX-=g*p,o.velY-=g*v}else o.velX*=.98,o.velY<=o.speed&&(o.velY+=.09*o.speed),o.velX+=Math.cos(o.step+=.05)*o.stepSize;s.fillStyle="rgba(255,255,255,"+o.opacity+")",o.y+=o.velY,o.x+=o.velX,(o.y>=r.height||o.y<=0)&&w(o),(o.x>=r.width||o.x<=0)&&w(o),s.beginPath(),s.arc(o.x,o.y,o.size,0,2*Math.PI),s.fill()}requestAnimationFrame(m)}function w(e){e.x=Math.floor(Math.random()*r.width),e.y=0,e.size=3*Math.random()+2,e.speed=Math.random()+.5,e.velY=e.speed,e.velX=0,e.opacity=.5*Math.random()+.3}console.log("Snow created with "+d+" flakes"),r.width=window.innerWidth,r.height=window.innerHeight,window.mobileAndTabletcheck()||document.addEventListener("mousemove",function(e){c=e.clientX,l=e.clientY}),window.addEventListener("resize",function(){r.width=window.innerWidth,r.height=window.innerHeight}),function(){for(var e=0;e<d;e++){var o=Math.floor(Math.random()*r.width),i=Math.floor(Math.random()*r.height),t=3*Math.random()+2,n=Math.random()+.5,s=.5*Math.random()+.3;a.push({speed:n,velY:n,velX:0,x:o,y:i,size:t,stepSize:Math.random()/30,step:0,opacity:s})}m()}()};
},{"scrolltrigger-classes":"ierA"}]},{},["QvaY"], null)
//# sourceMappingURL=js.70b5145a.map