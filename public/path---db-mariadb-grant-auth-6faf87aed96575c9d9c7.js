webpackJsonp([74936217677617],{784:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2016-12-02--DB-mariadb-grant-auth/index.md absPath of file >>> MarkdownRemark",html:'<p>안녕하세요, 설훈입니다.\n마리아 디비에 사용자 권한주는 방법에 대해서 알아보겠습니다.</p>\n<h2>순서</h2>\n<ol>\n<li>\n<p>MariaDB 접속</p>\n<ul>\n<li><code class="language-text">mysql -u root -p</code></li>\n<li>Enter password: 패스워드 입력</li>\n</ul>\n</li>\n<li>\n<p>Database 리스트 확인</p>\n<ul>\n<li><code class="language-text">show databases;</code></li>\n</ul>\n</li>\n<li>\n<ul>\n<li>없으면 생성</li>\n<li><code class="language-text">create database DB명;</code></li>\n</ul>\n</li>\n<li>\n<p>기본으로 생성되어 있는 mysql 데이터베이스를 사용한다</p>\n<ul>\n<li><code class="language-text">use mysql;</code></li>\n</ul>\n</li>\n<li>\n<p>mysql 의 user 테이블에서 이미 생성된 계정 확인</p>\n<ul>\n<li><code class="language-text">select host, user from user;</code></li>\n</ul>\n</li>\n<li>\n<p>mysql 은 보안상 Default 옵션으로 외부접속을 허용 X</p>\n<ul>\n<li>계정을 생성할때 특정 IP 혹은 127.0.0.1(localhost) 를 지정하거나 %를 지정하여 외부접속을 허용할 수 있다.</li>\n</ul>\n</li>\n<li>\n<p>user 계정 생성</p>\n<ul>\n<li><code class="language-text">create user &#39;계정아이디&#39;@&#39;접속위치&#39; identified by &#39;패스워드&#39;;</code></li>\n<li>ex. create user ‘user’@‘127.0.0.1’ identified by ‘myPassword’;</li>\n</ul>\n</li>\n<li>\n<p>user 권한 주기\n<code class="language-text">- grant all privileges on DB이름.테이블 to &#39;계정아이디&#39;@&#39;접속위치&#39;;</code></p>\n<ul>\n<li>ex1. grant all privileges on TableName.* to ‘user’@‘127.0.0.1’; //127.0.0.1(localhost)는 내부에서만 접속가능</li>\n<li>ex2. grant select on testDB.* to ‘user’@’%‘;</li>\n</ul>\n</li>\n<li>\n<p>권한 적용</p>\n<ul>\n<li><code class="language-text">flush privileges;</code></li>\n</ul>\n</li>\n<li>\n<p>권한 확인</p>\n<ul>\n<li><code class="language-text">show grants for &#39;user&#39;@&#39;접속위치&#39;;</code></li>\n</ul>\n</li>\n<li>\n<p>계정 삭제</p>\n<ul>\n<li><code class="language-text">drop user &#39;계정아이디&#39;@&#39;접속위치&#39;;</code></li>\n<li>ex. drop user ‘user1’@’%‘;</li>\n</ul>\n</li>\n<li>\n<p>권한 삭제</p>\n<ul>\n<li><code class="language-text">revoke all on DB이름.테이블 FROM &#39;계정아이디&#39;@&#39;접속위치&#39;;</code></li>\n</ul>\n</li>\n</ol>\n<h2>원본</h2>\n<ul>\n<li><a href="http://postitforhooney.tistory.com/entry/MySql-Mariadb-MYsql-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B6%8C%ED%95%9C%EC%A3%BC%EA%B8%B0-%EB%B0%8F-%ED%99%95%EC%9D%B8?category=652294">PostIT</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"안녕하세요, 설훈입니다.\n마리아 디비에 사용자 권한주는 방법에 대해서 알아보겠습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"순서"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"MariaDB 접속"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"mysql -u root -p"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter password: 패스워드 입력"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Database 리스트 확인"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"show databases;"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"없으면 생성"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"create database DB명;"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"기본으로 생성되어 있는 mysql 데이터베이스를 사용한다"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"use mysql;"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"mysql 의 user 테이블에서 이미 생성된 계정 확인"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"select host, user from user;"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"mysql 은 보안상 Default 옵션으로 외부접속을 허용 X"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"계정을 생성할때 특정 IP 혹은 127.0.0.1(localhost) 를 지정하거나 %를 지정하여 외부접속을 허용할 수 있다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"user 계정 생성"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"create user '계정아이디'@'접속위치' identified by '패스워드';"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ex. create user ‘user’@‘127.0.0.1’ identified by ‘myPassword’;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"user 권한 주기\n"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"- grant all privileges on DB이름.테이블 to '계정아이디'@'접속위치';"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ex1. grant all privileges on TableName.* to ‘user’@‘127.0.0.1’; //127.0.0.1(localhost)는 내부에서만 접속가능"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ex2. grant select on testDB.* to ‘user’@’%‘;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"권한 적용"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"flush privileges;"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"권한 확인"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"show grants for 'user'@'접속위치';"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"계정 삭제"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"drop user '계정아이디'@'접속위치';"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ex. drop user ‘user1’@’%‘;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"권한 삭제"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"revoke all on DB이름.테이블 FROM '계정아이디'@'접속위치';"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"원본"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://postitforhooney.tistory.com/entry/MySql-Mariadb-MYsql-%EC%82%AC%EC%9A%A9%EC%9E%90-%EA%B6%8C%ED%95%9C%EC%A3%BC%EA%B8%B0-%EB%B0%8F-%ED%99%95%EC%9D%B8?category=652294"},children:[{type:"text",value:"PostIT"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/DB-mariadb-grant-auth/",prefix:"2016-12-02"},frontmatter:{title:"[DB/MariaDB] MariaDB에 사용자 권한주기",subTitle:"MariaDB에 사용자 권한주기",cover:{childImageSharp:{resize:{src:"/static/mariadb-e0207835a7170f2829a5837f8ddc8210-160fa.png"}}}}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다..</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/DB-mariadb-grant-auth/"}}}});
//# sourceMappingURL=path---db-mariadb-grant-auth-6faf87aed96575c9d9c7.js.map