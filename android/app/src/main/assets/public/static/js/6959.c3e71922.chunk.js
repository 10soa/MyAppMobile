"use strict";(self.webpackChunkMyAppMobile2=self.webpackChunkMyAppMobile2||[]).push([[6959],{6959:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return i}});var r=n(9069),a=n(236),i=(n(1045),function(e,t,n,i,u){var o=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/o.innerWidth;i(t)},onEnd:function(e){var t=e.deltaX,n=o.innerWidth,a=t/n,i=e.velocityX,c=n/2,s=i>=0&&(i>.2||e.deltaX>c),l=(s?1-a:a)*n,f=0;if(l>5){var d=l/Math.abs(i);f=Math.min(d,540)}u(s,a<=0?.01:(0,r.k)(0,a,.9999),f)}})})}}]);
//# sourceMappingURL=6959.c3e71922.chunk.js.map