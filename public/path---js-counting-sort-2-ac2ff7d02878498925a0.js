webpackJsonp([0xf0c3ceecb06d],{880:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun-blog/content/posts/2018-03-24--JS-CountingSort2/index.md absPath of file >>> MarkdownRemark",html:'<p>저번 시간에 Counting Sort Part 1을 풀어보았습니다.\n이번에는 Counting Sort Part 2를 풀어보겠습니다.</p>\n<p>이번 알고리즘은 개수에 상관없이 정렬하면 될것으로 보입니다.\n<a href="https://www.hackerrank.com/challenges/countingsort2/problem">HackerRank - Sort - CountingSort Part 2</a></p>\n<h2>1. Question</h2>\n<ul>\n<li>\n<p>Sample Input</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">100\n63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33</code></pre>\n      </div>\n</li>\n<li>\n<p>Sample Output</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">1 1 3 3 6 8 9 9 10 12 13 16 16 18 20 21 21 22 23 24 25 25 25 27 27 30 30 32 32 32 33 33 33 34 39 39 40 40 41 42 43 44 44 46 46 48 50 53 56 56 57 59 60 61 63 65 67 67 68 69 69 69 70 70 73 73 74 75 75 76 78 78 79 79 80 81 81 82 83 83 84 85 86 86 87 87 89 89 89 90 90 91 92 94 95 96 98 98 99 99</code></pre>\n      </div>\n</li>\n</ul>\n<h2>2. Process</h2>\n<ol>\n<li>오름차순으로 정렬한다.</li>\n</ol>\n<h2>3. Code</h2>\n<div class="gatsby-highlight" data-language="tsx">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">function</span> <span class="token function">countingSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">&lt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    arr <span class="token operator">=</span> <span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">countingSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"저번 시간에 Counting Sort Part 1을 풀어보았습니다.\n이번에는 Counting Sort Part 2를 풀어보겠습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이번 알고리즘은 개수에 상관없이 정렬하면 될것으로 보입니다.\n"},{type:"element",tagName:"a",properties:{href:"https://www.hackerrank.com/challenges/countingsort2/problem"},children:[{type:"text",value:"HackerRank - Sort - CountingSort Part 2"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"1. Question"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Sample Input"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"100\n63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Sample Output"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"1 1 3 3 6 8 9 9 10 12 13 16 16 18 20 21 21 22 23 24 25 25 25 27 27 30 30 32 32 32 33 33 33 34 39 39 40 40 41 42 43 44 44 46 46 48 50 53 56 56 57 59 60 61 63 65 67 67 68 69 69 69 70 70 73 73 74 75 75 76 78 78 79 79 80 81 81 82 83 83 84 85 86 86 87 87 89 89 89 90 90 91 92 94 95 96 98 98 99 99"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"2. Process"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"오름차순으로 정렬한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3. Code"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"tsx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"code",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"countingSort"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"arr"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" arr"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"sort"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"a"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" b"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"a "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:" b"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"a "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">"}]},{type:"text",value:" b"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"0"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"main"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" n "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"parseInt"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"readLine"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    arr "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"readLine"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"split"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"' '"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    arr "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" arr"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"map"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"Number"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" result "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"countingSort"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"arr"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","builtin"]},children:[{type:"text",value:"console"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"log"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"result"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"join"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"' '"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/JS-CountingSort2/",prefix:"2018-03-24"},frontmatter:{title:"[Algorithm/JavaScript] HackerRank - CountingSort Part 2",subTitle:null,cover:{childImageSharp:{resize:{src:"/static/javascript-6d93ec51422bb2939dc8b1b76d7e42fc-ada8c.jpeg"}}}}},author:{id:"/Users/hunseol/git/seolhun-blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다..</p>"},footnote:{id:"/Users/hunseol/git/seolhun-blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>this is a demo site of the <a href="https://github.com/greglobinski/gatsby-starter-personal-blog">gatsby-starter-personal-blog</a></li>\n<li>built by <a href="https://www.greglobinski.com">greg lobinski</a></li>\n<li>GatsbyJS, ReactJs, CSS in JS - <a href="https://dev.greglobinski.com">Front-end web development with Greg</a></li>\n<li>deliverd by <a href="https://www.netlify.com/">Netlify</a></li>\n<li>photos by <a href="https://unsplash.com">unsplash.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/JS-CountingSort2/"}}}});
//# sourceMappingURL=path---js-counting-sort-2-ac2ff7d02878498925a0.js.map