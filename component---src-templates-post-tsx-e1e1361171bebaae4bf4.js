(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{325:function(t,e,n){"use strict";n.r(e),n.d(e,"postQuery",(function(){return v}));var i=n(5),o=n(120),r=n.n(o),s=n(1),c=n(20),d=n(0),u=n.n(d),a=n(148),l=n.n(a),f=n(10),p=n(11),m=n(329),h=n(149),g=n(147),w=n(6),b=(n(333),Object(i.a)("div",{target:"e17mkuq10"})((function(t){return{marginTop:"4rem",color:t.theme.fonts.COLOR.primaryColor}}))),v="1201125713";e.default=function(t){var e=t.data,n=t.pathContext,i=n.prev,o=n.next,d=e.markdownRemark,a=e.markdownRemark,v=a.timeToRead,y=a.fields,S=a.frontmatter,j=a.html,O=S.tags,I=S.title,_=S.date,q=S.category,C={url:""+(w.a.siteUrl+location?location.pathname:""),identifier:y.slug,title:I};return Object(s.c)(g.b,null,d&&Object(s.c)(u.a.Fragment,null,Object(s.c)(h.g,{postPath:y.slug,postNode:d,postSEO:!0}),Object(s.c)(l.a,{title:I+" | "+w.a.siteTitle}),Object(s.c)(f.c,null,Object(s.c)(f.d,null,Object(s.c)(f.b,{xs:24},Object(s.c)(h.e,null,Object(s.c)(p.d,{type:"h1",weight:800,isHighlight:!0},I),Object(s.c)(p.d,{type:"small",weight:500},_," — ",v," Min Read — In"," ",Object(s.c)(c.Link,{to:"/categories/"+r()(q)},q)),Object(s.c)(m.CommentCount,{config:C,placeholder:"..."})))),Object(s.c)(b,{dangerouslySetInnerHTML:{__html:j}}),O&&Object(s.c)(p.d,{type:"small"},"Tags:  ",O.map((function(t,e){return Object(s.c)(c.Link,{key:e,to:"/tags/"+r()(t)},Object(s.c)(p.d,{type:"small"},t)," ",e<O.length-1?", ":"")}))),Object(s.c)(f.d,null,Object(s.c)(f.b,{xs:24},Object(s.c)(h.f,{prev:i,next:o}))),Object(s.c)(f.d,null,Object(s.c)(f.b,{xs:24},Object(s.c)(m.Disqus,{config:C}))))))}},328:function(t,e,n){"use strict";e.__esModule=!0,e.insertScript=function(t,e,n){var i=window.document.createElement("script");return i.async=!0,i.src=t,i.id=e,n.appendChild(i),i},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var i;return function(){var o=this,r=arguments,s=function(){i=null,n||t.apply(o,r)},c=n&&!i;window.clearTimeout(i),i=setTimeout(s,e),c&&t.apply(o,r)}}},329:function(t,e,n){"use strict";var i=n(44);e.__esModule=!0,e.default=void 0;var o=i(n(330));e.Disqus=o.default;var r=i(n(332));e.CommentCount=r.default;var s=o.default;e.default=s},330:function(t,e,n){"use strict";var i=n(44);e.__esModule=!0,e.default=void 0;var o=i(n(119)),r=i(n(150)),s=i(n(80)),c=i(n(0)),d=i(n(81)),u=n(328);n(331);var a=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="disqus_SGUTY5FkU0",e.config?n.config=e.config:n.config={identifier:e.identifier,url:e.url,title:e.title},n}(0,s.default)(e,t);var n=e.prototype;return n.componentWillReceiveProps=function(t){this.setState(t)},n.componentWillMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance()},n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){if(this.shortname!==t.shortname)return!0;var e=this.config,n=t.config;return e.url!==n.url||e.identifier!==n.identifier},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var t=this.config;window.disqus_config=function(){this.page.identifier=t.identifier,this.page.title=t.title,this.page.url=t.url},(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,r.default)(t,["config"]));return c.default.createElement("div",(0,o.default)({id:"disqus_thread"},e,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86},__self:this}))},e}(c.default.Component);e.default=a,a.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),identifier:d.default.string,title:d.default.string,url:d.default.string}},332:function(t,e,n){"use strict";var i=n(44);e.__esModule=!0,e.default=void 0;var o=i(n(119)),r=i(n(150)),s=i(n(80)),c=i(n(0)),d=i(n(81)),u=n(328),a=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="disqus_SGUTY5FkU0",n}(0,s.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){var e=this.props.config,n=t.config;return e.url!==n.url||e.identifier!==n.identifier},n.componentWillReceiveProps=function(t){this.setState(t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?a():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,i=(0,r.default)(t,["config","placeholder"]);return c.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:55},__self:this}),n)},e}(c.default.Component);e.default=l,l.defaultProps={placeholder:"..."},l.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-e1e1361171bebaae4bf4.js.map