webpackJsonp([27448177207889],{839:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-02-27--JS-singleton-pattern/index.md absPath of file >>> MarkdownRemark",html:'<p>디자인 패턴의 Singleton Pattern에 대해서 간단히 정리해보았습니다.</p>\n<h2>Singleton이란</h2>\n<ul>\n<li>싱글턴 패턴(Singleton pattern)을 따르는 클래스는, 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다. 이와 같은 디자인 유형을 싱글턴 패턴이라고 한다. 주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용된다.</li>\n<li>싱글톤 패턴은 가장 단순한 디자인 패턴 중 하나입니다. 이 유형의 디자인 패턴은 오브젝트를 생성하는 가장 좋은 방법 중 하나를 제공하므로이 패턴은 Creational Patterns에 속해 있습니다. <strong>이 패턴은 단일 객체 만 생성되도록하면서 객체를 만드는 단일 클래스를 포함합니다. 이 클래스는 클래스 객체를 인스턴스화하지 않고 직접 액세스 할 수있는 유일한 객체에 접근하는 방법을 제공합니다.</strong></li>\n</ul>\n<div class="gatsby-highlight" data-language="tsx">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> <span class="token keyword">static</span> instance<span class="token punctuation">:</span> Singleton<span class="token punctuation">;</span>\n\n  <span class="token keyword">private</span> <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">static</span> <span class="token keyword">get</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Singleton<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      Singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Singleton<span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>내용</h2>\n<ol>\n<li>\n<p>객체를 생성하지 않고 같은 객체로 메소드와 변수를 사용할 수 있다.</p>\n</li>\n<li>\n<p><code class="language-text">this</code>와 <code class="language-text">instance</code>는 <strong>같은 값을 갖고 있지만, 항상 같진 않다.</strong> (3번과 연관)</p>\n</li>\n<li>\n<p>생성자를 사용하면 결국 다른 주소값을 반환한다. 즉, 생성자를 사용하여 값을 비교하면 결코 같을 수 없다.</p>\n</li>\n<li>\n<p>즉, 1개의 주소값을 갖고 있기때문에, 생성된 값과 비교하면 항상 같은 값을 얻을 수 있다.</p>\n</li>\n<li>\n<p>static</p>\n<ul>\n<li>동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 키워드 <code class="language-text">this</code>를 사용할 수 있다</li>\n</ul>\n</li>\n</ol>\n<h2>Reference</h2>\n<ul>\n<li>\n<p><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static">Mozila - Static</a></p>\n<ul>\n<li>정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다.</li>\n</ul>\n</li>\n<li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness">Mozila - Equality<em>comparisons</em>and_sameness</a></li>\n<li><a href="https://hashnode.com/post/does-javascript-use-stack-or-heap-for-memory-allocation-or-both-cj5jl90xl01nh1twuv8ug0bjk">Does JavaScript use stack or heap for memory allocation or both?</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"디자인 패턴의 Singleton Pattern에 대해서 간단히 정리해보았습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Singleton이란"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"싱글턴 패턴(Singleton pattern)을 따르는 클래스는, 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴한다. 이와 같은 디자인 유형을 싱글턴 패턴이라고 한다. 주로 공통된 객체를 여러개 생성해서 사용하는 DBCP(DataBase Connection Pool)와 같은 상황에서 많이 사용된다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"싱글톤 패턴은 가장 단순한 디자인 패턴 중 하나입니다. 이 유형의 디자인 패턴은 오브젝트를 생성하는 가장 좋은 방법 중 하나를 제공하므로이 패턴은 Creational Patterns에 속해 있습니다. "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"이 패턴은 단일 객체 만 생성되도록하면서 객체를 만드는 단일 클래스를 포함합니다. 이 클래스는 클래스 객체를 인스턴스화하지 않고 직접 액세스 할 수있는 유일한 객체에 접근하는 방법을 제공합니다."}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"tsx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"code",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"class"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"Singleton"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"private"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" instance"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" Singleton"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n\n  "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"private"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"constructor"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    Singleton"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"instance "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"this"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n\n  "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"get"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"getInstance"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"!"}]},{type:"text",value:"Singleton"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"instance"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n      Singleton"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"instance "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"Singleton"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"this"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"instance"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"export"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"default"}]},{type:"text",value:" Singleton"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"내용"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"객체를 생성하지 않고 같은 객체로 메소드와 변수를 사용할 수 있다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"this"}]},{type:"text",value:"와 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"instance"}]},{type:"text",value:"는 "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"같은 값을 갖고 있지만, 항상 같진 않다."}]},{type:"text",value:" (3번과 연관)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"생성자를 사용하면 결국 다른 주소값을 반환한다. 즉, 생성자를 사용하여 값을 비교하면 결코 같을 수 없다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"즉, 1개의 주소값을 갖고 있기때문에, 생성된 값과 비교하면 항상 같은 값을 얻을 수 있다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"static"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"동일한 클래스 내의 다른 정적 메서드 내에서 정적 메서드를 호출하는 경우 키워드 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"this"}]},{type:"text",value:"를 사용할 수 있다"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static"},children:[{type:"text",value:"Mozila - Static"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"정적 메서드는 클래스의 인스턴스 없이 호출이 가능하며 클래스가 인스턴스화되면 호출할 수 없다. 정적 메서드는 종종 어플리케이션의 유틸리티 함수를 만드는데 사용된다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness"},children:[{type:"text",value:"Mozila - Equality"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"comparisons"}]},{type:"text",value:"and_sameness"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://hashnode.com/post/does-javascript-use-stack-or-heap-for-memory-allocation-or-both-cj5jl90xl01nh1twuv8ug0bjk"},children:[{type:"text",value:"Does JavaScript use stack or heap for memory allocation or both?"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/JS-singleton-pattern/",prefix:"2018-02-27"},frontmatter:{author:"Seolhun",category:"Javascript",cover:{childImageSharp:{resize:{src:"/static/javascript-6d93ec51422bb2939dc8b1b76d7e42fc-ada8c.jpeg"}}},description:null,subTitle:null,tags:["Typescript","Singleton","Static","Private"],title:"[Typescript] Singleton Pattern이란?"}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다.</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/JS-singleton-pattern/"}}}});
//# sourceMappingURL=path---js-singleton-pattern-f44908ced68bc2a4fcc9.js.map