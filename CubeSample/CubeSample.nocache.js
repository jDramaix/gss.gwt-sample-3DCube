function CubeSample(){var S='',Ab='" for "gwt:onLoadErrorFn"',yb='" for "gwt:onPropertyErrorFn"',lb='"><\/script>',ab='#',Kb='.cache.html',cb='/',ob='//',Ib='1D638C464FB8FCF33DCD9ED445BFD457',Jb=':',sb='::',Mb='<script defer="defer">CubeSample.onInjectionDone(\'CubeSample\')<\/script>',kb='<script id="',vb='=',bb='?',xb='Bad handler "',T='CubeSample',hb='CubeSample.nocache.js',rb='CubeSample::',Lb='DOMContentLoaded',mb='SCRIPT',jb='__gwt_marker_CubeSample',nb='base',fb='baseUrl',W='begin',V='bootstrap',eb='clear.cache.gif',ub='content',_='end',X='gwt.codesvr=',Y='gwt.hosted=',Z='gwt.hybrid',zb='gwt:onLoadErrorFn',wb='gwt:onPropertyErrorFn',tb='gwt:property',Gb='hosted.html?CubeSample',Bb='iframe',db='img',Cb="javascript:''",Fb='loadExternalRefs',pb='meta',Eb='moduleRequested',$='moduleStartup',qb='name',Db='position:absolute;width:0;height:0;border:none',gb='script',Hb='selectingPermutation',U='startup',ib='undefined';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s,t=S,u={},v=[],w=[],A=[],B=0,C,D;o&&o({moduleName:T,sessionId:p,subSystem:U,evtGroup:V,millis:(new Date).getTime(),type:W});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function F(){var b=false;try{var c=m.location.search;return (c.indexOf(X)!=-1||(c.indexOf(Y)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(Z)==-1}catch(a){}F=function(){return b};return b}
function G(){if(q&&r){var b=n.getElementById(T);var c=b.contentWindow;if(F()){c.__gwt_getProperty=function(a){return K(a)}}CubeSample=null;c.gwtOnLoad(C,T,t,B);o&&o({moduleName:T,sessionId:p,subSystem:U,evtGroup:$,millis:(new Date).getTime(),type:_})}}
function H(){function e(a){var b=a.lastIndexOf(ab);if(b==-1){b=a.length}var c=a.indexOf(bb);if(c==-1){c=a.length}var d=a.lastIndexOf(cb,Math.min(c,b));return d>=0?a.substring(0,d+1):S}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(db);b.src=a+eb;a=e(b.src)}return a}
function g(){var a=J(fb);if(a!=null){return a}return S}
function h(){var a=n.getElementsByTagName(gb);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(hb)!=-1){return e(a[b].src)}}return S}
function i(){var a;if(typeof isBodyLoaded==ib||!isBodyLoaded()){var b=jb;var c;n.write(kb+b+lb);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=mb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return S}
function j(){var a=n.getElementsByTagName(nb);if(a.length>0){return a[a.length-1].href}return S}
function k(){var a=n.location;return a.href==a.protocol+ob+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==S){l=h()}if(l==S){l=i()}if(l==S){l=j()}if(l==S&&k()){l=e(n.location.href)}l=f(l);t=l;return l}
function I(){var b=document.getElementsByTagName(pb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(qb),g;if(f){f=f.replace(rb,S);if(f.indexOf(sb)>=0){continue}if(f==tb){g=e.getAttribute(ub);if(g){var h,i=g.indexOf(vb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=S}u[f]=h}}else if(f==wb){g=e.getAttribute(ub);if(g){try{D=eval(g)}catch(a){alert(xb+g+yb)}}}else if(f==zb){g=e.getAttribute(ub);if(g){try{C=eval(g)}catch(a){alert(xb+g+Ab)}}}}}}
function J(a){var b=u[a];return b==null?null:b}
function K(a){var b=w[a](),c=v[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(D){D(a,d,b)}throw null}
var L;function M(){if(!L){L=true;var a=n.createElement(Bb);a.src=Cb;a.id=T;a.style.cssText=Db;a.tabIndex=-1;n.body.appendChild(a);o&&o({moduleName:T,sessionId:p,subSystem:U,evtGroup:$,millis:(new Date).getTime(),type:Eb});a.contentWindow.location.replace(t+O)}}
CubeSample.onScriptLoad=function(){if(L){r=true;G()}};CubeSample.onInjectionDone=function(){q=true;o&&o({moduleName:T,sessionId:p,subSystem:U,evtGroup:Fb,millis:(new Date).getTime(),type:_});G()};I();H();var N;var O;if(F()){if(m.external&&(m.external.initModule&&m.external.initModule(T))){m.location.reload();return}O=Gb;N=S}o&&o({moduleName:T,sessionId:p,subSystem:U,evtGroup:V,millis:(new Date).getTime(),type:Hb});if(!F()){try{N=Ib;var P=N.indexOf(Jb);if(P!=-1){B=Number(N.substring(P+1));N=N.substring(0,P)}O=N+Kb}catch(a){return}}var Q;function R(){if(!s){s=true;G();if(n.removeEventListener){n.removeEventListener(Lb,R,false)}if(Q){clearInterval(Q)}}}
if(n.addEventListener){n.addEventListener(Lb,function(){M();R()},false)}var Q=setInterval(function(){if(/loaded|complete/.test(n.readyState)){M();R()}},50);o&&o({moduleName:T,sessionId:p,subSystem:U,evtGroup:V,millis:(new Date).getTime(),type:_});o&&o({moduleName:T,sessionId:p,subSystem:U,evtGroup:Fb,millis:(new Date).getTime(),type:W});n.write(Mb)}
CubeSample();