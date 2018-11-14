webpackJsonp([0xc2d76d1506e0],{784:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2017-01-19--DB-mariadb-reset-auth/index.md absPath of file >>> MarkdownRemark",html:'<p>안녕하세요, 설훈입니다.\n마리아 디비에 사용자 권한주는 방법에 대해서 알아보겠습니다.</p>\n<h1>Intro</h1>\n<p>Mysql을 처음 설치할 때 database root 계정으로 사용할 password를 설정한다. 하지만 시간이 오래 지나서 그때 설정한 password를 기억할 수 없다면 다음의 방법으로 재설정할 수 있다.(CentOS 7 기준)</p>\n<ol>\n<li>\n<p>실행중인 mysql service를 중지 시킨다.</p>\n<ul>\n<li><code class="language-text">systemctl stop mysql</code></li>\n</ul>\n</li>\n<li>\n<p>Password를 검사하지 않도록 mysql 환경설정 파일을 수정한다.</p>\n<ul>\n<li><code class="language-text">/etc/mysql/my.conf</code> file에 skip-grant-tables를 추가하면 password를 검사하지 않는다.</li>\n</ul>\n</li>\n</ol>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment">#</span>\n<span class="token comment"># Basic Settings</span>\n<span class="token comment">#</span>\nuser         <span class="token operator">=</span> mysql\npid-file     <span class="token operator">=</span> /var/run/mysqld/mysqld.pid\nsocket       <span class="token operator">=</span> /var/run/mysqld/mysqld.sock\nport         <span class="token operator">=</span> 3306\nbasedir      <span class="token operator">=</span> /usr\ndatadir      <span class="token operator">=</span> /var/lib/mysql\ntmpdir       <span class="token operator">=</span> /tmp\nlc-messages-dir <span class="token operator">=</span> /usr/share/mysql\nskip-external-locking\nskip-grant-tables</code></pre>\n      </div>\n<ol start="3">\n<li>\n<p>새로운 설정 값으로 mysql service를 실행한다.</p>\n<ul>\n<li><code class="language-text">sudo systemctl start mysql</code></li>\n</ul>\n</li>\n<li>\n<p>root 계정으로 mysql database를 연다.</p>\n<ul>\n<li><code class="language-text">mysql -uroot -p****(password)</code></li>\n</ul>\n</li>\n<li>\n<p>root password를 재설정한다.</p>\n<ul>\n<li><code class="language-text">UPDATE user SET password=PASSWORD(&#39;ROOT_비밀번호&#39;) WHERE user=&#39;root&#39;;</code></li>\n</ul>\n</li>\n<li>\n<p>2번에서 설정했던 my.conf를 복원하고 mysql service를 재실행 시킨다.</p>\n<ul>\n<li><code class="language-text">sudo systemctl restart mysql</code></li>\n</ul>\n</li>\n</ol>\n<h2>원본</h2>\n<ul>\n<li><a href="http://postitforhooney.tistory.com/entry/MySql-Mariadb-MYsql-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B6%8C%ED%95%9C%EC%A3%BC%EA%B8%B0-%EB%B0%8F-%ED%99%95%EC%9D%B8?category=652294">PostIT</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"안녕하세요, 설훈입니다.\n마리아 디비에 사용자 권한주는 방법에 대해서 알아보겠습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"Intro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Mysql을 처음 설치할 때 database root 계정으로 사용할 password를 설정한다. 하지만 시간이 오래 지나서 그때 설정한 password를 기억할 수 없다면 다음의 방법으로 재설정할 수 있다.(CentOS 7 기준)"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"실행중인 mysql service를 중지 시킨다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"systemctl stop mysql"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Password를 검사하지 않도록 mysql 환경설정 파일을 수정한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"/etc/mysql/my.conf"}]},{type:"text",value:" file에 skip-grant-tables를 추가하면 password를 검사하지 않는다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"bash"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"#"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"# Basic Settings"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"#"}]},{type:"text",value:"\nuser         "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" mysql\npid-file     "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" /var/run/mysqld/mysqld.pid\nsocket       "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" /var/run/mysqld/mysqld.sock\nport         "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" 3306\nbasedir      "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" /usr\ndatadir      "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" /var/lib/mysql\ntmpdir       "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" /tmp\nlc-messages-dir "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" /usr/share/mysql\nskip-external-locking\nskip-grant-tables"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:3},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"새로운 설정 값으로 mysql service를 실행한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"sudo systemctl start mysql"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"root 계정으로 mysql database를 연다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"mysql -uroot -p****(password)"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"root password를 재설정한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"UPDATE user SET password=PASSWORD('ROOT_비밀번호') WHERE user='root';"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"2번에서 설정했던 my.conf를 복원하고 mysql service를 재실행 시킨다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"sudo systemctl restart mysql"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"원본"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://postitforhooney.tistory.com/entry/MySql-Mariadb-MYsql-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B6%8C%ED%95%9C%EC%A3%BC%EA%B8%B0-%EB%B0%8F-%ED%99%95%EC%9D%B8?category=652294"},children:[{type:"text",value:"PostIT"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/DB-mariadb-reset-auth/",prefix:"2017-01-19"},frontmatter:{title:"[DB/MariaDB] 분실한 mysql root password 재설정하기",subTitle:"MariaDB에 root password 초기화",cover:{childImageSharp:{resize:{src:"/static/mariadb-e0207835a7170f2829a5837f8ddc8210-160fa.png"}}}}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다.</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/DB-mariadb-reset-auth/"}}}});
//# sourceMappingURL=path---db-mariadb-reset-auth-d532231c7d76cb386994.js.map