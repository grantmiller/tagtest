window.lpTag=window.lpTag||{};if(typeof window.lpTag._tagCount==='undefined'){window.lpTag={site:'63960994',section:lpTag.section||'',autoStart:lpTag.autoStart||true,ovr:lpTag.ovr||{},_v:'1.4',_tagCount:1,protocol:location.protocol,events:{bind:function(app,ev,fn){lpTag.defer(function(){lpTag.events.bind(app,ev,fn)},0)},trigger:function(app,ev,json){lpTag.defer(function(){lpTag.events.trigger(app,ev,json)},1)}},defer:function(fn,fnType){if(fnType==0){this._defB=this._defB||[];this._defB.push(fn)}else if(fnType==1){this._defT=this._defT||[];this._defT.push(fn)}else{this._defL=this._defL||[];this._defL.push(fn)}},load:function(src,chr,id){var t=this;setTimeout(function(){t._load(src,chr,id)},0)},_load:function(src,chr,id){var url=src;if(!src){url=this.protocol+'//'+((this.ovr&&this.ovr.domain)?this.ovr.domain:'lptag.liveperson.net')+'/tag/tag.js?site='+this.site}var s=document.createElement('script');s.setAttribute('charset',chr?chr:'UTF-8');if(id){s.setAttribute('id',id)}s.setAttribute('src',url);document.getElementsByTagName('head').item(0).appendChild(s)},init:function(){this._timing=this._timing||{};this._timing.start=(new Date()).getTime();var that=this;if(window.attachEvent){window.attachEvent('onload',function(){that._domReady('domReady')})}else{window.addEventListener('DOMContentLoaded',function(){that._domReady('contReady')},false);window.addEventListener('load',function(){that._domReady('domReady')},false)}if(typeof(window._lptStop)=='undefined'){this.load()}},_domReady:function(n){if(!this.isDom){this.isDom=true;this.events.trigger('LPT','DOM_READY',{t:n})}this._timing[n]=(new Date()).getTime()}};lpTag.init()}else{window.lpTag._tagCount+=1}

