webpackJsonp([0xfeeb0e3d5c3f],{815:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-04-05--JS-BinarySearch/index.md absPath of file >>> MarkdownRemark",html:'<p>이번에는 검색 시 자주 사용되는 이진검색에 대해서 알고리즘을 작성해볼까 합니다.\n이진검색은 배열 안에서 중간 값을 기준으로 계속 나누어 근사 값으로 찾아가는 알고리즘입니다.</p>\n<h2>1. Contents</h2>\n<p>이진 검색 알고리즘(binary search algorithm)은 오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘입니다.</p>\n<p>처음 중간의 값을 임의의 값으로 선택하여, 그 값과 찾고자 하는 값의 크고 작음을 비교하는 방식을 채택하고 있습니다.  <strong>처음 선택한 중앙값이 만약 찾는 값보다 크면 그 값은 새로운 최고값이 되며, 작으면 그 값은 새로운 최하값이 된다.</strong></p>\n<ul>\n<li>\n<p>주의사항</p>\n<ul>\n<li>검색 원리상 정렬된 리스트에만 사용이 가능하다,</li>\n</ul>\n</li>\n<li>\n<p>특징</p>\n<ul>\n<li>검색이 반복될 때마다 목표값을 찾을 확률은 두 배가 되므로 속도가 빠릅니다.</li>\n</ul>\n</li>\n<li>\n<p>시간 복잡도</p>\n<ul>\n<li>O(log n)</li>\n</ul>\n</li>\n</ul>\n<h2>2. Code</h2>\n<ol>\n<li>\n<p>While을 사용하여 이진탐색 만들어보기</p>\n<div class="gatsby-highlight" data-language="tsx">\n      <pre class="language-tsx"><code class="language-tsx"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span> <span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> binarySearch <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n<span class="token keyword">let</span> mid<span class="token punctuation">;</span>\n<span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></code></pre>\n      </div>\n</li>\n</ol>\n<p>  while (min &#x3C;= max) {\n// floor을 쓰는 이유는 배열의 index가 0으로 시작하여 내림으로 값을 구해준다.\nmid = Math.floor((min + max) / 2);\nlet result = arr[mid];\nif (result === value) {\nreturn mid;\n}\n// mid에 1을 더해주는 이유는 배열의 index는 0에서 시작하여 원래 길이의 값은 다시 1을 더해주어야 한다.\nif (result &#x3C; value) {\nmin = mid + 1;\n}\nif (result > value) {\nmax = mid - 1;\n}\n}\nreturn -1;\n});</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">## 3. Outro\n이진 탐색은 기본적으로 n의 개수를 줄여나감으로써 시간 복잡도를 개선해나가는 알고리즘입니다. 대부분의 탐색은 해당 값의 위치를 알고 있으면 이를 줄여나갈 수 있습니다. 하지만, 값을 알지 못할 때에는 확률적으로 이를 줄여나가는 방법밖에 없는데, 이진탐색이 이를 기본적으로 이용하는 알고리즘이라고 할 수 있습니다.\n\n다음에는 **이진 탐색 트리 알고리즘**을 알아보겠습니다.\n\n## 4. References\n- [Wiki - 이진탐색 알고리즘](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%EA%B2%80%EC%83%89_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)</code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이번에는 검색 시 자주 사용되는 이진검색에 대해서 알고리즘을 작성해볼까 합니다.\n이진검색은 배열 안에서 중간 값을 기준으로 계속 나누어 근사 값으로 찾아가는 알고리즘입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"1. Contents"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이진 검색 알고리즘(binary search algorithm)은 오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"처음 중간의 값을 임의의 값으로 선택하여, 그 값과 찾고자 하는 값의 크고 작음을 비교하는 방식을 채택하고 있습니다.  "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"처음 선택한 중앙값이 만약 찾는 값보다 크면 그 값은 새로운 최고값이 되며, 작으면 그 값은 새로운 최하값이 된다."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"주의사항"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"검색 원리상 정렬된 리스트에만 사용이 가능하다,"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"특징"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"검색이 반복될 때마다 목표값을 찾을 확률은 두 배가 되므로 속도가 빠릅니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"시간 복잡도"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"O(log n)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"2. Code"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"While을 사용하여 이진탐색 만들어보기"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"tsx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"code",properties:{className:["language-tsx"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" arr "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"2"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"3"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"4"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"5"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"6"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"7"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" binarySearch "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"arr"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" value"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"=>"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"let"}]},{type:"text",value:" mid"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"let"}]},{type:"text",value:" min "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"0"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"let"}]},{type:"text",value:" max "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" arr"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"length "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  while (min <= max) {\n// floor을 쓰는 이유는 배열의 index가 0으로 시작하여 내림으로 값을 구해준다.\nmid = Math.floor((min + max) / 2);\nlet result = arr[mid];\nif (result === value) {\nreturn mid;\n}\n// mid에 1을 더해주는 이유는 배열의 index는 0에서 시작하여 원래 길이의 값은 다시 1을 더해주어야 한다.\nif (result < value) {\nmin = mid + 1;\n}\nif (result > value) {\nmax = mid - 1;\n}\n}\nreturn -1;\n});"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"## 3. Outro\n이진 탐색은 기본적으로 n의 개수를 줄여나감으로써 시간 복잡도를 개선해나가는 알고리즘입니다. 대부분의 탐색은 해당 값의 위치를 알고 있으면 이를 줄여나갈 수 있습니다. 하지만, 값을 알지 못할 때에는 확률적으로 이를 줄여나가는 방법밖에 없는데, 이진탐색이 이를 기본적으로 이용하는 알고리즘이라고 할 수 있습니다.\n\n다음에는 **이진 탐색 트리 알고리즘**을 알아보겠습니다.\n\n## 4. References\n- [Wiki - 이진탐색 알고리즘](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%EA%B2%80%EC%83%89_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)"}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/JS-BinarySearch/",prefix:"2018-04-05"},frontmatter:{title:"[Algorithm/Javascript] Binary Search(이진탐색) Algorithm",subTitle:null,cover:{childImageSharp:{resize:{src:"/static/javascript-6d93ec51422bb2939dc8b1b76d7e42fc-ada8c.jpeg"}}}}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다.</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/JS-BinarySearch/"}}}});
//# sourceMappingURL=path---js-binary-search-705016f886d35adc39d7.js.map