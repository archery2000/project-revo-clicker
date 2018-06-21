'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var SoundType=function(){function SoundType(id,array){_classCallCheck(this,SoundType);this.id=id;this.volume=1;this.gs=array;soundTypeArr.push(this)}_createClass(SoundType,[{key:'getSoundRegistered',value:function getSoundRegistered(){return this.gs}},{key:'registerSounds',value:function registerSounds(){for(var i=0;i<this.gs.length;i++){this.gs[i].register()}}},{key:'getVolume',value:function getVolume(){return this.volume}},{key:'applyNewVolume',value:function applyNewVolume(){for(var i=0;i<this.gs.length;i++){this.gs[i].applyVolume()}}},{key:'setVolume',value:function setVolume(newVol){var v=Math.min(Math.max(0,newVol),1);this.volume=newVol;this.applyNewVolume()}},{key:'changeVolume',value:function changeVolume(relative){var v=this.volume+relative;v=Math.min(Math.max(0,v),1);this.volume=v;this.applyNewVolume()}}]);return SoundType}();