webpackJsonp([70144966829960],{1171:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),f=r(s),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(t){return t+"="+encodeURIComponent(e[t])}).join("&")},p=function(e,t,n,r,i){var a=void 0;return r?(a="mailto:"+r,i&&(a+="?"+d(i))):e?a="tel:"+e:t?a="sms:"+t:n&&(a="facetime:"+n),a},h=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={humanInteraction:!1},n}return l(t,e),c(t,[{key:"render",value:function(){return this.props.obfuscate===!1?this.renderLink():this.renderObfuscatedLink()}},{key:"renderLink",value:function(){var e=this.props,t=e.tel,n=e.sms,r=e.facetime,a=e.email,o=(e.obfuscate,e.headers),l=e.children,c=i(e,["tel","sms","facetime","email","obfuscate","headers","children"]);return f.default.createElement("a",u({href:p(t,n,r,a,o)},c),l||t||n||r||a)}},{key:"reverse",value:function(e){return e.split("").reverse().join("")}},{key:"renderObfuscatedLink",value:function(){var e=this,t=this.props,n=t.tel,r=t.sms,a=t.facetime,o=t.email,l=(t.obfuscate,t.headers,t.children),c=t.style,s=t.linkText,d=i(t,["tel","sms","facetime","email","obfuscate","headers","children","style","linkText"]),p=this.state.humanInteraction===!0||l?u({},c||{},{unicodeBidi:"bidi-override",display:"inline-block",direction:"ltr"}):u({},c||{},{unicodeBidi:"bidi-override",display:"inline-block",direction:"rtl"}),h=function(t){return e.state.humanInteraction===!0?l||n||r||a||o:l||e.reverse(n||r||a||o).replace("(",")").replace(")","(")};return f.default.createElement("a",u({onClick:this.handleClick.bind(this),onFocus:this.handleCopiability.bind(this),onMouseOver:this.handleCopiability.bind(this),onContextMenu:this.handleCopiability.bind(this),href:s||"obfuscated"},d,{style:p}),h())}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,n=t.tel,r=t.sms,i=t.facetime,a=t.email,o=t.headers;window.location.href=p(n,r,i,a,o)}},{key:"handleCopiability",value:function(){this.setState(function(e){return u({},e,{humanInteraction:!0})})}}]),t}(s.Component);t.default=h},569:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(1),a=r(i),o=n(2),l=r(o),u=n(9),c=r(u),s=n(1171),f=r(s),d=n(148),p=r(d),h=n(147),b=r(h),m=n(217),y=r(m),v=n(216),k=r(v),O=n(55),_=r(O),j=function(e){return{}},w=function(){return a.default.createElement(p.default,null,a.default.createElement(b.default,null,a.default.createElement(y.default,{title:"Contact"}),a.default.createElement(k.default,null,"Feel free to contact me by email",a.default.createElement("div",null,a.default.createElement(f.default,{email:_.default.contactEmail})))))};w.propTypes={classes:l.default.object.isRequired},t.default=(0,c.default)(j)(w),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-contact-js-b587f0323a7f84b7e209.js.map