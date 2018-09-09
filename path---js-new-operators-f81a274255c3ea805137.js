webpackJsonp([0xda1d63549933],{828:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-02-27--JS-new-operators/index.md absPath of file >>> MarkdownRemark",html:'<p>Singleton 디자인 패턴을 사용하면서 Javascript의 new에 대한 개념을 더 정확히 알아야된다고 생각하여 작성하게 되었습니다.</p>\n<h2>Goal</h2>\n<ul>\n<li><code class="language-text">new</code> 생성자의 작동원리와 활용법 이해</li>\n<li>TypeScript와 JavaScript의 코드 차이를 이해한다.</li>\n</ul>\n<h2>Overview</h2>\n<ul>\n<li>클래스에는 ‘constructor’라는 이름을 가진 특별한 메소드를 하나씩 가질 수 있습니다. 하나 이상의 생성자 메소드가 발견되면 SyntaxError 에러가 발생합니다.</li>\n<li>생성자 메서드는 class를 상속받아 구현하였을 시, ‘super’ 키워드를 사용하여 상위(상속) 클래스의 생성자 메소드를 호출할 수 있습니다.</li>\n<li>만약 생성자 메소드를 저장하지 않을 경우, 기본 생성자 메소드가 사용됩니다.</li>\n</ul>\n<h2>Content</h2>\n<ul>\n<li>\n<p>사용자 정의 객체를 생성에는 두 단계가 필요하다.</p>\n<ul>\n<li>함수를 작성하여 객체 타입을 정의한다.</li>\n<li>new 연산자로 객체의 인스턴스를 생성한다.</li>\n</ul>\n</li>\n<li>\n<p>객체의 타입을 정의하기 위해, 객체의 이름과 속성을 명세하는 함수를 만든다. 객체는 그 자체가 또 다른 객체인 속성를 가질 수 있다.</p>\n</li>\n<li>\n<p>코드 new Foo(…)가 실행될 때 다음과 같은 일이 발생한다.</p>\n<ol>\n<li><strong>Foo.prototype을 상속하는 새로운 객체가 하나 생성된다.</strong></li>\n<li>명시된 인자 그리고 새롭게 생성된 객체에 바인드된 this와 함께 생성자 함수 Foo 가 호출된다. new Foo는 new Foo()와 동일한다. 즉 인자가 명시되지 않은 경우, 인자 없이 Foo가 호출된다.</li>\n<li>생성자 함수에 의해 리턴된 객체는 전체 new호출 결과가 된다. 만약 생성자 함수가 명시적으로 객체를 리턴하지 않는 경우, 첫번째 단계에서 생성된 객체가 대신 사용된다.(일반적으로 생성자는 값을 리턴하지 않는다. 그러나, 일반적인 객체 생성을 재정의(override)하기 원한다면 그렇게 하도록 선택할 수 있다.)</li>\n</ol>\n</li>\n<li>\n<p>이전에 정의된 객체에 속성을 항상 추가할 수 있다. 예를 들면, car1.color = ‘black’ 구문은 color속성을 car1에 추가한다. 그리고 그 값을 ‘black’ 할당한다. 그러나, 이것 이 다른 객체들에게는 전혀 영향을 주지 않는다. 동일한 타입의 모든 객체들에게 새로운 속성을 추가하려면, Car객체 타입의 정의에 이 속성을 추가해야한다.</p>\n</li>\n<li>\n<p>Function.prototype 속성을 사용하여 이전에 정의된 객체 타입에 공유 속성을 추가할 수 있다. 이것은 객체 타입의 인스턴스 하나에만 적용되는 것이 아니라 이 함수로 생성하는 모든 객체와 공유하는 속성을 정의한다.</p>\n</li>\n<li>\n<p>다음의 코드는 car 타입의 모든 객체에 null값을 갖는 color 속성을 추가한다. 그리고 car1객체 인스턴스에서만 이 값을 문자열 ‘black’으로 덮어 쓴다. 더 많은 정보는 prototype을 본다.</p>\n</li>\n</ul>\n<h2>Examples</h2>\n<div class="gatsby-highlight" data-language="tsx">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">var</span> car1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car1<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// undefined</span>\nCar<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car1<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// null</span>\ncar1<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">\'black\'</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>car1<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// black</span></code></pre>\n      </div>\n<h2>Review</h2>\n<p>new에 대해서 공부를 하게 된 이유는, <code class="language-text">Singleton Pattern</code>을 학습하다가, new를 통해 반환된 instance가 기존 instance와 다른 결과를 가져오는 것을 확인해서이다.\n이것이 이질적으로 느껴진 점은 Java에서의 Singleton은 해당 Instance가 생성되면 Singleton의 의미처럼, 해당 객체를 생성해도 이미 생성되어진 Instance를 반환하기 때문이다. 그래서 해당 결과 값이 같은 주소 값은 물론이며 값이 달라지지 않음을 보장해준다. 고민 끝에 내린 결론은, Java가 컴파일 언어의 특징을 갖고있기 때문이라고 생각한다. static으로 생성된 Singleton은 Java에서 해당 값이 컴파일 시 Stack의 메모리를 고정적으로 할당해준다. 하지만, JavaScript는 Compile언어가 아니므로, static으로 선언해도 해당 instance를 static으로 정적메모리를 할당해주지만, 생성자를 통해 해당 function을 다시 호출하면 생성과 초기화가 이루어져 기존의 값을 다른 주소값으로 반환해준다.</p>\n<h2>References</h2>\n<ul>\n<li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Singleton 디자인 패턴을 사용하면서 Javascript의 new에 대한 개념을 더 정확히 알아야된다고 생각하여 작성하게 되었습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Goal"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"new"}]},{type:"text",value:" 생성자의 작동원리와 활용법 이해"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"TypeScript와 JavaScript의 코드 차이를 이해한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Overview"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"클래스에는 ‘constructor’라는 이름을 가진 특별한 메소드를 하나씩 가질 수 있습니다. 하나 이상의 생성자 메소드가 발견되면 SyntaxError 에러가 발생합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"생성자 메서드는 class를 상속받아 구현하였을 시, ‘super’ 키워드를 사용하여 상위(상속) 클래스의 생성자 메소드를 호출할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"만약 생성자 메소드를 저장하지 않을 경우, 기본 생성자 메소드가 사용됩니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Content"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"사용자 정의 객체를 생성에는 두 단계가 필요하다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"함수를 작성하여 객체 타입을 정의한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"new 연산자로 객체의 인스턴스를 생성한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"객체의 타입을 정의하기 위해, 객체의 이름과 속성을 명세하는 함수를 만든다. 객체는 그 자체가 또 다른 객체인 속성를 가질 수 있다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"코드 new Foo(…)가 실행될 때 다음과 같은 일이 발생한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Foo.prototype을 상속하는 새로운 객체가 하나 생성된다."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"명시된 인자 그리고 새롭게 생성된 객체에 바인드된 this와 함께 생성자 함수 Foo 가 호출된다. new Foo는 new Foo()와 동일한다. 즉 인자가 명시되지 않은 경우, 인자 없이 Foo가 호출된다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"생성자 함수에 의해 리턴된 객체는 전체 new호출 결과가 된다. 만약 생성자 함수가 명시적으로 객체를 리턴하지 않는 경우, 첫번째 단계에서 생성된 객체가 대신 사용된다.(일반적으로 생성자는 값을 리턴하지 않는다. 그러나, 일반적인 객체 생성을 재정의(override)하기 원한다면 그렇게 하도록 선택할 수 있다.)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이전에 정의된 객체에 속성을 항상 추가할 수 있다. 예를 들면, car1.color = ‘black’ 구문은 color속성을 car1에 추가한다. 그리고 그 값을 ‘black’ 할당한다. 그러나, 이것 이 다른 객체들에게는 전혀 영향을 주지 않는다. 동일한 타입의 모든 객체들에게 새로운 속성을 추가하려면, Car객체 타입의 정의에 이 속성을 추가해야한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Function.prototype 속성을 사용하여 이전에 정의된 객체 타입에 공유 속성을 추가할 수 있다. 이것은 객체 타입의 인스턴스 하나에만 적용되는 것이 아니라 이 함수로 생성하는 모든 객체와 공유하는 속성을 정의한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"다음의 코드는 car 타입의 모든 객체에 null값을 갖는 color 속성을 추가한다. 그리고 car1객체 인스턴스에서만 이 값을 문자열 ‘black’으로 덮어 쓴다. 더 많은 정보는 prototype을 본다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Examples"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"tsx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"code",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"Car"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" car1 "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"Car"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","builtin"]},children:[{type:"text",value:"console"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"log"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"car1"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"color"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// undefined"}]},{type:"text",value:"\nCar"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"prototype"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"color "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"null"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","builtin"]},children:[{type:"text",value:"console"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"log"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"car1"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"color"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// null"}]},{type:"text",value:"\ncar1"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"color "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'black'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","builtin"]},children:[{type:"text",value:"console"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"log"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"car1"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"color"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"   "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// black"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Review"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"new에 대해서 공부를 하게 된 이유는, "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Singleton Pattern"}]},{type:"text",value:"을 학습하다가, new를 통해 반환된 instance가 기존 instance와 다른 결과를 가져오는 것을 확인해서이다.\n이것이 이질적으로 느껴진 점은 Java에서의 Singleton은 해당 Instance가 생성되면 Singleton의 의미처럼, 해당 객체를 생성해도 이미 생성되어진 Instance를 반환하기 때문이다. 그래서 해당 결과 값이 같은 주소 값은 물론이며 값이 달라지지 않음을 보장해준다. 고민 끝에 내린 결론은, Java가 컴파일 언어의 특징을 갖고있기 때문이라고 생각한다. static으로 생성된 Singleton은 Java에서 해당 값이 컴파일 시 Stack의 메모리를 고정적으로 할당해준다. 하지만, JavaScript는 Compile언어가 아니므로, static으로 선언해도 해당 instance를 static으로 정적메모리를 할당해주지만, 생성자를 통해 해당 function을 다시 호출하면 생성과 초기화가 이루어져 기존의 값을 다른 주소값으로 반환해준다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new"},children:[{type:"text",value:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/JS-new-operators/",prefix:"2018-02-27"},frontmatter:{title:"[Javascript/Typescript] JavaScript new, constructor란?",subTitle:null,cover:{childImageSharp:{resize:{src:"/static/javascript-6d93ec51422bb2939dc8b1b76d7e42fc-ada8c.jpeg"}}}}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다..</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/JS-new-operators/"}}}});
//# sourceMappingURL=path---js-new-operators-f81a274255c3ea805137.js.map