"use strict";(self.webpackChunkMyAppMobile2=self.webpackChunkMyAppMobile2||[]).push([[9295],{9295:function(i,t,o){o.r(t),o.d(t,{ion_img:function(){return r}});var n=o(4039),e=o(323),r=function(){function i(i){var t=this;(0,n.r)(this,i),this.ionImgWillLoad=(0,n.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,n.e)(this,"ionImgDidLoad",7),this.ionError=(0,n.e)(this,"ionError",7),this.onLoad=function(){t.ionImgDidLoad.emit()},this.onError=function(){t.ionError.emit()}}return i.prototype.srcChanged=function(){this.addIO()},i.prototype.componentDidLoad=function(){this.addIO()},i.prototype.addIO=function(){var i=this;void 0!==this.src&&("undefined"!==typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver((function(t){t[t.length-1].isIntersecting&&(i.load(),i.removeIO())})),this.io.observe(this.el)):setTimeout((function(){return i.load()}),200))},i.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},i.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},i.prototype.render=function(){return(0,n.h)(n.H,{class:(0,e.b)(this)},(0,n.h)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))},Object.defineProperty(i.prototype,"el",{get:function(){return(0,n.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:!1,configurable:!0}),i}();r.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);
//# sourceMappingURL=9295.006582e5.chunk.js.map