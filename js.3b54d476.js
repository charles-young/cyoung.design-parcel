parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QvaY":[function(require,module,exports) {
window.onload=function(){function e(){initAnalytics()}console.log("Loaded"),window.addEventListener?window.addEventListener("load",e,!1):window.attachEvent?window.attachEvent("onload",e):window.onload=e;for(var o=document.querySelectorAll(".name"),t=0;t<o.length;t++)o[t].classList.add("reveal-text"),o[t].classList.remove("invisible");for(var i=document.querySelectorAll(".fade-in"),n=0;n<i.length;n++)i[n].classList.add("loaded");window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)},window.mobileAndTabletcheck=function(){var e,o=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(o=!0),o},window.mobileAndTabletcheck()||function(){console.log("Using cursor.js");var e=document.createElement("DIV");e.setAttribute("class","custom-cursor"),document.body.appendChild(e);for(var o,t,i=document.querySelectorAll("a"),n=!1,a=0;a<i.length;a++)i[a].addEventListener("mouseover",function(){e.classList.add("custom-cursor--big")}),i[a].addEventListener("mouseout",function(){e.classList.remove("custom-cursor--big")});e.classList.add("custom-cursor--showing"),window.onmousemove=function(i){o=i.clientX,t=i.clientY,n||(e.classList.add("custom-cursor--showing"),n=!0),requestAnimationFrame(function(){e.style.cssText="left: "+o+"px; top: "+t+"px;"})},document.onmouseleave=function(){e.classList.remove("custom-cursor--showing"),n=!1}}(),console.log("Snow Created");var a=[],s=document.getElementById("canvas"),r=s.getContext("2d"),d=400,c=-100,m=-100;function l(){r.clearRect(0,0,s.width,s.height);for(var e=0;e<d;e++){var o=a[e],t=c,i=m,n=o.x,u=o.y,h=Math.sqrt((n-t)*(n-t)+(u-i)*(u-i));if(h<150){var p=(t-n)/h,v=(i-u)/h,g=150/(h*h)/2;o.velX-=g*p,o.velY-=g*v}else o.velX*=.98,o.velY<=o.speed&&(o.velY=o.speed),o.velX+=Math.cos(o.step+=.05)*o.stepSize;r.fillStyle="rgba(255,255,255,"+o.opacity+")",o.y+=o.velY,o.x+=o.velX,(o.y>=s.height||o.y<=0)&&w(o),(o.x>=s.width||o.x<=0)&&w(o),r.beginPath(),r.arc(o.x,o.y,o.size,0,2*Math.PI),r.fill()}requestAnimationFrame(l)}function w(e){e.x=Math.floor(Math.random()*s.width),e.y=0,e.size=3*Math.random()+2,e.speed=Math.random()+.5,e.velY=e.speed,e.velX=0,e.opacity=.5*Math.random()+.3}s.width=window.innerWidth,s.height=window.innerHeight,window.mobileAndTabletcheck()||document.addEventListener("mousemove",function(e){c=e.clientX,m=e.clientY}),window.addEventListener("resize",function(){s.width=window.innerWidth,s.height=window.innerHeight}),function(){for(var e=0;e<d;e++){var o=Math.floor(Math.random()*s.width),t=Math.floor(Math.random()*s.height),i=3*Math.random()+2,n=Math.random()+.5,r=.5*Math.random()+.3;a.push({speed:n,velY:n,velX:0,x:o,y:t,size:i,stepSize:Math.random()/30,step:0,opacity:r})}l()}()};
},{}]},{},["QvaY"], null)
//# sourceMappingURL=js.3b54d476.map