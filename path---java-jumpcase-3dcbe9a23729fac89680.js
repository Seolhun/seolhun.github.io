webpackJsonp([0xff4d03e8a79],{806:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-03-19--Java-Jumpcase/index.md absPath of file >>> MarkdownRemark",html:'<p>이번에는 Java로 Programmers의 31번 문제 멀리뛰기를 구현해보도록 하겠습니다.\n<a href="https://programmers.co.kr/learn/challenge_codes/31#">Programmers 멀리뛰기 - Java</a></p>\n<h2>1. Question</h2>\n<p>[멀리뛰기]\n효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는\n(1칸, 1칸, 1칸, 1칸)\n(1칸, 2칸, 1칸)\n(1칸, 1칸, 2칸)\n(2칸, 1칸, 1칸)\n(2칸, 2칸)\n의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 출력하는 jumpCase 함수를 완성하세요. 예를 들어 4가 입력된다면, 5를 반환해 주면 됩니다.</p>\n<h2>2. Process</h2>\n<ol>\n<li>num이 1가 2일 경우는 바로 정답처리한다.</li>\n<li>아닌 경우는 이전전 값과 전 값을 구하는 함수로 재귀호출하여 정답을 구한다.</li>\n</ol>\n<h2>3. Code</h2>\n<div class="gatsby-highlight" data-language="java">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">class</span> <span class="token class-name">JumpCase</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">jumpCase</span><span class="token punctuation">(</span><span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token function">jumpCase</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">jumpCase</span><span class="token punctuation">(</span>num<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        JumpCase c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JumpCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> testCase <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>\n        <span class="token comment">//아래는 테스트로 출력해 보기 위한 코드입니다.</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">jumpCase</span><span class="token punctuation">(</span>testCase<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>4. Outro</h2>\n<p>처음 보았을 때 익숙하다 싶었는데, 등비수열 함정에 빠져서 시간을 좀 낭비했었습니다. 근데 패턴을 나열해서 보면 피보나치 수열임을 확인하실 수 있습니다.\n1 - 1 - 2 - 3 - 5 - 8 - 13 즉, 전전 값과 전 값을 더하면 다음의 값을 유추해 낼 수 있습니다. 3번째부터 전전 값의 존재하므로 이전의 길이를 요구하는 답은 바로 정답을 리턴시키는 로직으로 만들었습니다.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이번에는 Java로 Programmers의 31번 문제 멀리뛰기를 구현해보도록 하겠습니다.\n"},{type:"element",tagName:"a",properties:{href:"https://programmers.co.kr/learn/challenge_codes/31#"},children:[{type:"text",value:"Programmers 멀리뛰기 - Java"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"1. Question"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"[멀리뛰기]\n효진이는 멀리 뛰기를 연습하고 있습니다. 효진이는 한번에 1칸, 또는 2칸을 뛸 수 있습니다. 칸이 총 4개 있을 때, 효진이는\n(1칸, 1칸, 1칸, 1칸)\n(1칸, 2칸, 1칸)\n(1칸, 1칸, 2칸)\n(2칸, 1칸, 1칸)\n(2칸, 2칸)\n의 5가지 방법으로 맨 끝 칸에 도달할 수 있습니다. 멀리뛰기에 사용될 칸의 수 n이 주어질 때, 효진이가 끝에 도달하는 방법이 몇 가지인지 출력하는 jumpCase 함수를 완성하세요. 예를 들어 4가 입력된다면, 5를 반환해 주면 됩니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"2. Process"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"num이 1가 2일 경우는 바로 정답처리한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"아닌 경우는 이전전 값과 전 값을 구하는 함수로 재귀호출하여 정답을 구한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3. Code"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"java"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-java"]},children:[{type:"element",tagName:"code",properties:{className:["language-java"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"class"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"JumpCase"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"public"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"int"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"jumpCase"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"int"}]},{type:"text",value:" num"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"num "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"=="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"else"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"num "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"=="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"2"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"2"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"jumpCase"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"num"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"+"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"jumpCase"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"num"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"2"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"public"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"void"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"main"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"String"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:" args"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        JumpCase c "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"JumpCase"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"int"}]},{type:"text",value:" testCase "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"4"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"//아래는 테스트로 출력해 보기 위한 코드입니다."}]},{type:"text",value:"\n        System"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"out"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"println"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"c"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"jumpCase"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"testCase"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"4. Outro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"처음 보았을 때 익숙하다 싶었는데, 등비수열 함정에 빠져서 시간을 좀 낭비했었습니다. 근데 패턴을 나열해서 보면 피보나치 수열임을 확인하실 수 있습니다.\n1 - 1 - 2 - 3 - 5 - 8 - 13 즉, 전전 값과 전 값을 더하면 다음의 값을 유추해 낼 수 있습니다. 3번째부터 전전 값의 존재하므로 이전의 길이를 요구하는 답은 바로 정답을 리턴시키는 로직으로 만들었습니다."}]}],data:{quirksMode:!1}},fields:{slug:"/Java-Jumpcase/",prefix:"2018-03-19"},frontmatter:{author:"Seolhun",category:"Algorithm",cover:{childImageSharp:{resize:{src:"/static/java-e40afea28f2d844d0a74a97ba029f357-ada8c.jpg"}}},description:null,subTitle:null,tags:["Java","Algorithm","Programmers","야근지수"],title:"[Algorithm/Java] Programmers - 멀리뛰기"}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다.</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/Java-Jumpcase/"}}}});
//# sourceMappingURL=path---java-jumpcase-3dcbe9a23729fac89680.js.map