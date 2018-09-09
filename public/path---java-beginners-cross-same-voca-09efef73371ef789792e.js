webpackJsonp([0xfe1fe791e603],{854:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-04-10--Java-BeginnersCrossSameVoca/index.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li><a href="https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PyTLqAf4DFAUq&#x26;categoryId=AV5PyTLqAf4DFAUq&#x26;categoryType=CODE">SWexpertAcademy 초심자의 회문검사</a></li>\n<li>난이도 : 2</li>\n<li>정답률 : 81%</li>\n</ul>\n<h2>1. Question</h2>\n<p>level” 과 같이 거꾸로 읽어도 제대로 읽은 것과 같은 문장이나 낱말을 회문(回文, palindrome)이라 한다. 단어를 입력 받아 회문이면 1을 출력하고, 아니라면 0을 출력하는 프로그램을 작성하라.</p>\n<ul>\n<li>\n<p>[제약 사항]</p>\n<ul>\n<li>각 단어의 길이는 3 이상 10 이하이다.</li>\n</ul>\n</li>\n<li>\n<p>[입력]</p>\n<ul>\n<li>가장 첫 줄에는 테스트 케이스의 개수 T가 주어지고, 그 아래로 각 테스트 케이스가 주어진다. 각 테스트 케이스의 첫 번째 줄에 하나의 단어가 주어진다.</li>\n</ul>\n</li>\n<li>\n<p>[출력]</p>\n<ul>\n<li>출력의 각 줄은 ‘#t’로 시작하고, 공백을 한 칸 둔 다음 정답을 출력한다. (t는 테스트 케이스의 번호를 의미하며 1부터 시작한다.)</li>\n</ul>\n</li>\n</ul>\n<h2>2. Process</h2>\n<ol>\n<li>T라는 테스트케이스 만큼 루프문을 만듭니다.</li>\n<li>문제를 미리 배열에 담아둡니다.</li>\n<li>뒤집어도 같음을 의미하기때문에 StringBuilder를 이용해서 reverse() 해줍니다.</li>\n<li>같으면 1, 다르면 0으로 출력합니다.</li>\n</ol>\n<h2>3. Code</h2>\n<div class="gatsby-highlight" data-language="java">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Scanner<span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String arg<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        Scanner sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span>System<span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">int</span> T <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        StringBuilder sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> T<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            String voca <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token function">printResult</span><span class="token punctuation">(</span>sb<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">getResult</span><span class="token punctuation">(</span>voca<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">getResult</span><span class="token punctuation">(</span>String voca<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>voca<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>voca<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printResult</span><span class="token punctuation">(</span>StringBuilder sb<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        sb<span class="token punctuation">.</span><span class="token function">setLength</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"#"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>4. Outro</h2>\n<p>printResult나 getResult로 만들어서 푸는 이유는 Samsung SWexpersAcademy 결과 값 포맷이 고정적으로 정해져있어서 이를 효율적으로 분리하여 만들기 위함입니다. getResult로 받는 것은 문제 값을 받는 부분과 풀이가 분리되어야 한다고 생각하기 때문입니다. 특히, 재귀가 필요할 시 해당 메소드만 재귀해야 되기때문에 확장성을 고려하여 이렇게 정의하였습니다.</p>\n<p>다음에는 난이도를 3으로 올려보겠습니다.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PyTLqAf4DFAUq&categoryId=AV5PyTLqAf4DFAUq&categoryType=CODE"},children:[{type:"text",value:"SWexpertAcademy 초심자의 회문검사"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"난이도 : 2"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"정답률 : 81%"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"1. Question"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"level” 과 같이 거꾸로 읽어도 제대로 읽은 것과 같은 문장이나 낱말을 회문(回文, palindrome)이라 한다. 단어를 입력 받아 회문이면 1을 출력하고, 아니라면 0을 출력하는 프로그램을 작성하라."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"[제약 사항]"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"각 단어의 길이는 3 이상 10 이하이다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"[입력]"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"가장 첫 줄에는 테스트 케이스의 개수 T가 주어지고, 그 아래로 각 테스트 케이스가 주어진다. 각 테스트 케이스의 첫 번째 줄에 하나의 단어가 주어진다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"[출력]"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"출력의 각 줄은 ‘#t’로 시작하고, 공백을 한 칸 둔 다음 정답을 출력한다. (t는 테스트 케이스의 번호를 의미하며 1부터 시작한다.)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"2. Process"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"T라는 테스트케이스 만큼 루프문을 만듭니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"문제를 미리 배열에 담아둡니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"뒤집어도 같음을 의미하기때문에 StringBuilder를 이용해서 reverse() 해줍니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"같으면 1, 다르면 0으로 출력합니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3. Code"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"java"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-java"]},children:[{type:"element",tagName:"code",properties:{className:["language-java"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"import"}]},{type:"text",value:" java"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"util"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"Scanner"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"public"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"class"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"Solution"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"public"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"void"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"main"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"String arg"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"solution"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"void"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"solution"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        Scanner sc "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"Scanner"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"System"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"in"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"int"}]},{type:"text",value:" T "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" sc"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"nextInt"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        StringBuilder sb "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"StringBuilder"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"for"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"int"}]},{type:"text",value:" i "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"0"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:" i "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:" T"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:" i"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"++"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            String voca "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" sc"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"next"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"printResult"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"sb"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" i "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"+"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"getResult"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"voca"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"int"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"getResult"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"String voca"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"voca"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"equals"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"StringBuilder"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"voca"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"reverse"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"toString"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"0"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"static"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"void"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"printResult"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"StringBuilder sb"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"int"}]},{type:"text",value:" index"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"int"}]},{type:"text",value:" result"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        sb"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"setLength"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"0"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        sb"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"append"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"#"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        sb"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"append"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"index"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        sb"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"append"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'" "'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        sb"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"append"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"result"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        System"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"out"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."
}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"println"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"sb"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"toString"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"4. Outro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"printResult나 getResult로 만들어서 푸는 이유는 Samsung SWexpersAcademy 결과 값 포맷이 고정적으로 정해져있어서 이를 효율적으로 분리하여 만들기 위함입니다. getResult로 받는 것은 문제 값을 받는 부분과 풀이가 분리되어야 한다고 생각하기 때문입니다. 특히, 재귀가 필요할 시 해당 메소드만 재귀해야 되기때문에 확장성을 고려하여 이렇게 정의하였습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"다음에는 난이도를 3으로 올려보겠습니다."}]}],data:{quirksMode:!1}},fields:{slug:"/Java-BeginnersCrossSameVoca/",prefix:"2018-04-10"},frontmatter:{title:"[Algorithm/Java] SWexpertAcademy BeginnersCrossSameVoca",subTitle:null,cover:{childImageSharp:{resize:{src:"/static/java-e40afea28f2d844d0a74a97ba029f357-ada8c.jpg"}}}}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다..</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this is a demo site of the <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">gatsby-starter-personal-blog</a></li>\n<li>built by <a href="https://www.greglobinski.com">greg lobinski</a></li>\n<li>GatsbyJS, ReactJs, CSS in JS - <a href="https://dev.greglobinski.com">Front-end web development with Greg</a></li>\n<li>deliverd by <a href="https://www.netlify.com/">Netlify</a></li>\n<li>photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/Java-BeginnersCrossSameVoca/"}}}});
//# sourceMappingURL=path---java-beginners-cross-same-voca-09efef73371ef789792e.js.map