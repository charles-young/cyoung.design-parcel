// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/scrolltrigger-classes/ScrollTrigger.min.js":[function(require,module,exports) {
var define;
/* Written by Erik Terwan - MIT license - https://github.com/terwanerik */
!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.ScrollTrigger=e()}(this,function(){"use strict";return function(t,e,n){function i(){var t=h.bindElement.scrollTop?h.bindElement.scrollTop:document.documentElement.scrollTop,e=h.bindElement.scrollLeft?h.bindElement.scrollLeft:document.documentElement.scrollLeft;a.left==e&&a.top==t||h.scrollDidChange(),r.length>0||c.length>0?(u=!0,d(i)):u=!1}function l(t,e){var n=e.split("("),i=n[0];if(n.length>1?(n=n[1].split(")")[0],n=n.indexOf("', '")>-1?n.split("', '"):n.indexOf("','")>-1?n.split("','"):n.indexOf('", "')>-1?n.split('", "'):n.indexOf('","')>-1?n.split('","'):[n]):n=[],n=n.map(function(t){return s(t)}),"function"==typeof h.callScope[i])try{h.callScope[i].apply(t.element,n)}catch(l){try{h.callScope[i].apply(null,n)}catch(l){}}}function s(t){return t+="",'"'==t[0]&&(t=t.substr(1)),"'"==t[0]&&(t=t.substr(1)),'"'==t[t.length-1]&&(t=t.substr(0,t.length-1)),"'"==t[t.length-1]&&(t=t.substr(0,t.length-1)),t}var o=function(t,e){this.element=e,this.defaultOptions=t,this.showCallback=null,this.hideCallback=null,this.visibleClass="visible",this.hiddenClass="invisible",this.addWidth=!1,this.addHeight=!1,this.once=!1;var n=0,i=0;this.left=function(t){return function(){return t.element.getBoundingClientRect().left}}(this),this.top=function(t){return function(){return t.element.getBoundingClientRect().top}}(this),this.xOffset=function(t){return function(e){var i=n;return t.addWidth&&!e?i+=t.width():e&&!t.addWidth&&(i-=t.width()),i}}(this),this.yOffset=function(t){return function(e){var n=i;return t.addHeight&&!e?n+=t.height():e&&!t.addHeight&&(n-=t.height()),n}}(this),this.width=function(t){return function(){return t.element.offsetWidth}}(this),this.height=function(t){return function(){return t.element.offsetHeight}}(this),this.reset=function(t){return function(){t.removeClass(t.visibleClass),t.removeClass(t.hiddenClass)}}(this),this.addClass=function(t){var e=function(e,n){t.element.classList.contains(e)||(t.element.classList.add(e),"function"==typeof n&&n())},n=function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),l=t.element.className;i.test(l)||(t.element.className+=" "+e,"function"==typeof n&&n())};return t.element.classList?e:n}(this),this.removeClass=function(t){var e=function(e,n){t.element.classList.contains(e)&&(t.element.classList.remove(e),"function"==typeof n&&n())},n=function(e,n){e=e.trim();var i=new RegExp("(?:^|\\s)"+e+"(?:(\\s\\w)|$)","ig"),l=t.element.className;i.test(l)&&(t.element.className=l.replace(i,"$1").trim(),"function"==typeof n&&n())};return t.element.classList?e:n}(this),this.init=function(t){return function(){var e=t.defaultOptions,l=t.element.getAttribute("data-scroll");e&&(e.toggle&&e.toggle.visible&&(t.visibleClass=e.toggle.visible),e.toggle&&e.toggle.hidden&&(t.hiddenClass=e.toggle.hidden),e.showCallback&&(t.showCallback=e.showCallback),e.hideCallback&&(t.hideCallback=e.hideCallback),e.centerHorizontal===!0&&(n=t.element.offsetWidth/2),e.centerVertical===!0&&(i=t.element.offsetHeight/2),e.offset&&e.offset.x&&(n+=e.offset.x),e.offset&&e.offset.y&&(i+=e.offset.y),e.addWidth&&(t.addWidth=e.addWidth),e.addHeight&&(t.addHeight=e.addHeight),e.once&&(t.once=e.once));var s=l.indexOf("addWidth")>-1,o=l.indexOf("addHeight")>-1,r=l.indexOf("once")>-1;t.addWidth===!1&&s===!0&&(t.addWidth=s),t.addHeight===!1&&o===!0&&(t.addHeight=o),t.once===!1&&r===!0&&(t.once=r),t.showCallback=t.element.hasAttribute("data-scroll-showCallback")?t.element.getAttribute("data-scroll-showCallback"):t.showCallback,t.hideCallback=t.element.hasAttribute("data-scroll-hideCallback")?t.element.getAttribute("data-scroll-hideCallback"):t.hideCallback;var c=l.split("toggle(");if(c.length>1){var a=c[1].split(")")[0].split(",");String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),t.visibleClass=a[0].trim().replace(".",""),t.hiddenClass=a[1].trim().replace(".","")}l.indexOf("centerHorizontal")>-1&&(n=t.element.offsetWidth/2),l.indexOf("centerVertical")>-1&&(i=t.element.offsetHeight/2);var d=l.split("offset(");if(d.length>1){var u=d[1].split(")")[0].split(",");n+=parseInt(u[0].replace("px","")),i+=parseInt(u[1].replace("px",""))}return t}}(this)};this.scrollElement=window,this.bindElement=document.body,this.callScope=window;var r=[],c=[],a={left:-1,top:-1},d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},u=!1,f=function(t){return function(e,n,i){return void 0!=n&&null!=n?t.bindElement=n:t.bindElement=document.body,void 0!=i&&null!=i?t.scrollElement=i:t.scrollElement=window,t.bind(t.bindElement.querySelectorAll("[data-scroll]")),t}}(this);this.bind=function(e){return function(n){n instanceof HTMLElement&&(n=[n]);var l=[].slice.call(n);return l=l.map(function(e){var n=new o(t,e);return n.init()}),r=r.concat(l),r.length>0&&0==u?(u=!0,i()):u=!1,e}}(this),this.triggerFor=function(){return function(t){var e=null;return r.each(function(n){n.element==t&&(e=n)}),e}}(this),this.destroy=function(t){return function(e){return r.each(function(t,n){t.element==e&&r.splice(n,1)}),t}}(this),this.destroyAll=function(t){return function(){return r=[],t}}(this),this.reset=function(t){return function(e){var n=t.triggerFor(e);if(null!=n){n.reset();var i=r.indexOf(n);i>-1&&r.splice(i,1)}return t}}(this),this.resetAll=function(t){return function(){return r.each(function(t){t.reset()}),r=[],t}}(this),this.attach=function(t){return function(e){return c.push(e),u||(u=!0,i()),t}}(this),this.detach=function(t){return function(e){var n=c.indexOf(e);return n>-1&&c.splice(n,1),t}}(this);var h=this;return this.scrollDidChange=function(t){return function(){var e=t.scrollElement.innerWidth||t.scrollElement.offsetWidth,n=t.scrollElement.innerHeight||t.scrollElement.offsetHeight,i=t.bindElement.scrollTop?t.bindElement.scrollTop:document.documentElement.scrollTop,s=t.bindElement.scrollLeft?t.bindElement.scrollLeft:document.documentElement.scrollLeft,o=[];r.each(function(t){var r=t.left(),c=t.top();a.left>s?r-=t.xOffset(!0):a.left<s&&(r+=t.xOffset(!1)),a.top>i?c-=t.yOffset(!0):a.top<i&&(c+=t.yOffset(!1)),e>r&&r>=0&&n>c&&c>=0?(t.addClass(t.visibleClass,function(){t.showCallback&&l(t,t.showCallback)}),t.removeClass(t.hiddenClass),t.once&&o.push(t)):(t.addClass(t.hiddenClass),t.removeClass(t.visibleClass,function(){t.hideCallback&&l(t,t.hideCallback)}))}),c.each(function(l){l.call(t,s,i,e,n)}),o.each(function(t){var e=r.indexOf(t);e>-1&&r.splice(e,1)}),a.left=s,a.top=i}}(this),Array.prototype.each=function(t){for(var e=this.length,n=0;e>n;n++){var i=this[n];i&&t(i,n)}},f(t,e,n)}});

},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _ScrollTrigger = _interopRequireDefault(require("scrolltrigger-classes/ScrollTrigger.min"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var trigger = new _ScrollTrigger.default({
    toggle: {
      visible: 'reveal-text',
      hidden: 'invisible'
    },
    offset: {
      x: 0,
      y: 20
    },
    addHeight: true,
    once: true
  }, document.body, window);

  window.mobileAndTabletcheck = function () {
    var check = false;

    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
        check = true;
      }
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
  };

  if (!window.mobileAndTabletcheck()) {
    (function () {
      console.log("Using cursor.js");
      var cursor = document.querySelector('.custom-cursor');
      var links = document.querySelectorAll('a');
      var initCursor = false;

      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function () {
          cursor.classList.add('custom-cursor--big');
        });
        links[i].addEventListener('mouseout', function () {
          cursor.classList.remove('custom-cursor--big');
        });
        links[i].addEventListener('mousedown', function () {
          cursor.classList.add('custom-cursor--bigger');
        });
        links[i].addEventListener('mouseup', function () {
          cursor.classList.remove('custom-cursor--bigger');
        });
      }

      window.onmousemove = function (e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        if (!initCursor) {
          cursor.classList.add('custom-cursor--showing');
          initCursor = true;
        } else {
          cursor.style.cssText = 'top: ' + mouseY + 'px; left:' + mouseX + 'px;';
        }
      };

      window.onmouseout = function () {
        cursor.classList.remove('custom-cursor--showing');
        initCursor = false;
      };
    })();
  }
});
},{"scrolltrigger-classes/ScrollTrigger.min":"../node_modules/scrolltrigger-classes/ScrollTrigger.min.js"}],"../../../../.nvm/versions/node/v8.12.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63264" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../.nvm/versions/node/v8.12.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.map