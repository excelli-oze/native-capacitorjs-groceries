import{W as a}from"./utils.BTQTK8J1.js";import{I as i,N as r}from"./2.CaYHo9M0.js";class c extends a{constructor(){super(...arguments),this.selectionStarted=!1}async impact(t){const e=this.patternForImpact(t==null?void 0:t.style);this.vibrateWithPattern(e)}async notification(t){const e=this.patternForNotification(t==null?void 0:t.type);this.vibrateWithPattern(e)}async vibrate(t){const e=(t==null?void 0:t.duration)||300;this.vibrateWithPattern([e])}async selectionStart(){this.selectionStarted=!0}async selectionChanged(){this.selectionStarted&&this.vibrateWithPattern([70])}async selectionEnd(){this.selectionStarted=!1}patternForImpact(t=i.Heavy){return t===i.Medium?[43]:t===i.Light?[20]:[61]}patternForNotification(t=r.Success){return t===r.Warning?[30,40,30,50,60]:t===r.Error?[27,45,50]:[35,65,21]}vibrateWithPattern(t){if(navigator.vibrate)navigator.vibrate(t);else throw this.unavailable("Browser does not support the vibrate API")}}export{c as HapticsWeb};
