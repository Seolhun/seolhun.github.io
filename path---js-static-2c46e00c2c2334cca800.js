webpackJsonp([0xfaf7e37aa0c2],{895:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-02-27--JS-static/index.md absPath of file >>> MarkdownRemark",html:'<p>Singleton Pattern을 구현하면서 static이 Javascript에서는 어떻게 작동되는지 궁금하여 간단히 알아보았습니다.</p>\n<h2>Goal</h2>\n<ul>\n<li><code class="language-text">static</code>의 작동원리와 활용법 이해</li>\n<li>TypeScript와 JavaScript의 코드 차이를 이해한다.</li>\n</ul>\n<h2>Overview</h2>\n<p>정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.</p>\n<h2>Content</h2>\n<ol>\n<li>\n<p>클래스 생성자 및 다른 메서드에서의 호출</p>\n<ul>\n<li>정적 메서드가 비정적 메서드에서 키워드 <code class="language-text">this</code>를 써서는 직접적인 접근을 할 수 없다. 바른 호출 방법은 클래스 명칭을 쓰거나, 직접 CLASSNAME.STATIC<em>METHOD</em>NAME()을 이용하거나 혹은 그 메서드를 생성자의 한 속성으로 부르는 것으로, 즉 constructor : this.constructor.STATIC<em>METHOD</em>NAME()를 이용한다.</li>\n</ul>\n</li>\n</ol>\n<h2>Examples</h2>\n<div class="gatsby-highlight" data-language="tsx">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">var</span> Helpers <span class="token operator">=</span> <span class="token comment">/** @class */</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">Helpers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n    Helpers<span class="token punctuation">.</span><span class="token function-variable function">calcCircumference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>diameter<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> diameter<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    Helpers<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> Helpers<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> Helpers<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6.28</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Helpers<span class="token punctuation">.</span><span class="token function">calcCircumference</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 25.12</span></code></pre>\n      </div>\n<h2>Review</h2>\n<ul>\n<li>JavaScript에서 static은 결국, 해당 instance를 class 혹은 function 안에 객체를 선언하여 해당 값을 담아놓는 것이다.</li>\n<li>\n<p>TypeScript와 JavaScript 코드를 같이 보면 이것이 더 명확해진다.</p>\n<div class="gatsby-highlight" data-language="tsx">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">class</span> <span class="token class-name">StaticClass</span> <span class="token punctuation">{</span>\n<span class="token keyword">private</span> <span class="token keyword">static</span> size<span class="token punctuation">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\n<span class="token keyword">static</span> <span class="token function">getStaticClassSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="tsx">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">var</span> StaticClass <span class="token operator">=</span> <span class="token comment">/** @class */</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\nSingleton<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>\nStaticClass<span class="token punctuation">.</span><span class="token function-variable function">getStaticClassSize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">return</span> StaticClass\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n</ul>\n<h2>References</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Singleton Pattern을 구현하면서 static이 Javascript에서는 어떻게 작동되는지 궁금하여 간단히 알아보았습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Goal"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"static"}]},{type:"text",value:"의 작동원리와 활용법 이해"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"TypeScript와 JavaScript의 코드 차이를 이해한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Overview"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Content"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"클래스 생성자 및 다른 메서드에서의 호출"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"정적 메서드가 비정적 메서드에서 키워드 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"this"}]},{type:"text",value:"를 써서는 직접적인 접근을 할 수 없다. 바른 호출 방법은 클래스 명칭을 쓰거나, 직접 CLASSNAME.STATIC"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"METHOD"}]},{type:"text",value:"NAME()을 이용하거나 혹은 그 메서드를 생성자의 한 속성으로 부르는 것으로, 즉 constructor : this.constructor.STATIC"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"METHOD"}]},{type:"text",value:"NAME()를 이용한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"tsx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"code",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" Helpers "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"/** @class */"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"Helpers"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n    Helpers"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function-variable","function"]},children:[{type:"text",value:"calcCircumference"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"diameter"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"this"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","constant"]},children:[{type:"text",value:"PI"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"*"}]},{type:"text",value:" diameter"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    Helpers"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","constant"]},children:[{type:"text",value:"PI"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"3.14"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" Helpers"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","builtin"]},children:[{type:"text",value:"console"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"log"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"2"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"*"}]},{type:"text",value:" Helpers"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","constant"]},children:[{type:"text",value:"PI"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// 6.28"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","builtin"]},children:[{type:"text",value:"console"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"log"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"Helpers"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"calcCircumference"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"8"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// 25.12"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Review"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"JavaScript에서 static은 결국, 해당 instance를 class 혹은 function 안에 객체를 선언하여 해당 값을 담아놓는 것이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"TypeScript와 JavaScript 코드를 같이 보면 이것이 더 명확해진다."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"tsx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"code",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"class"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"StaticClass"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"private"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" size"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","builtin"]},children:[{type:"text",value:"number"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"getStaticClassSize"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"this"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"size "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"*"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"2"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"tsx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"code",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" StaticClass "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"/** @class */"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\nSingleton"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"size "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\nStaticClass"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function-variable","function"]},children:[{type:"text",value:"getStaticClassSize"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"this"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"size "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"*"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"2"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" StaticClass\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static"},children:[{type:"text",value:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/JS-static/",prefix:"2018-02-27"},frontmatter:{title:"[Javascript/Typescript] Static이란?",subTitle:null,cover:{childImageSharp:{resize:{src:"/static/javascript-6d93ec51422bb2939dc8b1b76d7e42fc-ada8c.jpeg"}}}}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다..</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this is a demo site of the <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">gatsby-starter-personal-blog</a></li>\n<li>built by <a href="https://www.greglobinski.com">greg lobinski</a></li>\n<li>GatsbyJS, ReactJs, CSS in JS - <a href="https://dev.greglobinski.com">Front-end web development with Greg</a></li>\n<li>deliverd by <a href="https://www.netlify.com/">Netlify</a></li>\n<li>photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/JS-static/"}}}});
//# sourceMappingURL=path---js-static-2c46e00c2c2334cca800.js.map