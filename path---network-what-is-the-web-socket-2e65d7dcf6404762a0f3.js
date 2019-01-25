webpackJsonp([0xf4b1fc7f93cf],{847:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-04-13--Network-WhatIsTheWebSocket/index.md absPath of file >>> MarkdownRemark",html:'<p>이번에는 <code class="language-text">WebSocket</code>에 대해서 간단히 정리해볼까 합니다.</p>\n<p>개인적으로는 Spring에서 Stomp와 SockJS를 이용해서 사용해본 경험이 있고, 최근에는 NodeJS에서 SocketIO를 이용하였습니다. 이용하여 성공적으로 개발하는 것도 중요하지만, 더 중요한 것은 기술에 대한 개념적인 이해라고 생각하여 이번에 정리하는 시간을 가져보았습니다.</p>\n<h2>Intro</h2>\n<p>먼저, 네이버 D2 블로그와 Wikipedia와 Mozilla 등의 사이트를 많이 참고하면서 내용을 정리했습니다. 좋은 정보에 감사의 말씀드립니다.</p>\n<p>개인적으로 WebSocket을 이용했던 부분은 웹사이트에서 일어나는 이벤트에 대해 관련 대상자에게 실시간으로 알림을 알려주는 서비스였습니다. 예를 들어, 게시판 댓글 등의 작업이 이루어지면 글 작성자에게 관련된 메세지를 실시간으로 알려주는 알림 서비스였습니다. 특히, 이 부분에서 어려웠던 것은 대상자를 찾아내어 해당 메세지 구독자에게 메세지를 보내는 것이었습니다. 처음 문서를 읽었을 때 정확히 이해하는 것이 힘들었지만, Spring에서 Security Session의 값을 이용하여 서버 내 Client를 추적할 수 있어서 이 부분을 어렵지 않게 해결할 수 있었습니다.</p>\n<p>하지만, 중요한 것은 개발 과정에서 WebSocket과 Stomp의 작동원리를 정확히 이해하여 Session 관련된 컨트롤이 요구될 때마다 많은 어려움이 있었습니다. 그 외에도 페이스북에서는 브라우저 호환성 때문에 Polling을 이용한다는 개발자의 글도 보면서 다양한 환경에 대한 안전장치가 잘 되어있는지를 체크하여 확인하는 것이 중요하다고 생각했습니다. 이러한 일련의 과정을 간단하게 정리하여 WebSocket을 정리해볼까 합니다.</p>\n<h4>- Content List</h4>\n<ol>\n<li>Websocket이란?</li>\n<li>WebSocket과 Polling 방식의 차이는 무엇인가?</li>\n<li>WebSocket의 브라우저 호환성</li>\n<li>SocketIO란?</li>\n</ol>\n<h2>1. WebSocket이란?</h2>\n<blockquote>\n<p>웹소켓(WebSocket)은 하나의 TCP 접속에 전이중 통신 채널을 제공하는 컴퓨터 통신 프로토콜입니다. 2008년 6월, 일련의 토론이 마이클 카터(Michael Carter)에 의해 주도되어 웹소켓으로 알려진 최초 버전의 프로토콜이 탄생하였습니다. 이후 TCP 기반 소켓 API를 대체할 목적으로 HTML5 사양에서 TCPConnection으로 처음 참조되었습니다. 웹소켓 프로토콜은 2011년 IETF에 의해 RFC 6455로 표준화되었으며 웹 IDL의 웹소켓 API는 W3C에 의해 현재 HTML5에 표준화되었습니다.</p>\n</blockquote>\n<p>사전적 정의처럼 WebSocket은 하나의 프로토콜로서 TCP를 이용하여 데이터를 실시간으로 양뱡향 통신을 할 수 있게 만든 기술입니다. 원래 Socket의 의미가 TCP/IP를 연결하여 기능을 제공하는 하나의 인터페이스라고 할 수 있는데, 이를 웹에서도 가능하게 만들어 준 것입니다. 원래 Web 환경은 필요한 정보를 HTTP 기반으로 Request/Response로 연결하여 데이터를 주고 받아 네트워크의 연결을 유지하지 않는 특징을 가지고 있습니다. 이러한 환경에서 웹의 환경이 더욱 성장하면서 Socket Programming처럼 실시간으로 데이터를 주고받기 위한 노력이 많이 이루어졌습니다.</p>\n<ul>\n<li>추가사항\nHTML과 HTTP를 찾아서 읽어보면 도움이 될 것 같습니다. - <a href="https://ko.wikipedia.org/wiki/HTTP">HTTP - WikiPedia</a></li>\n</ul>\n<blockquote>\n<p>팀 버너스 리와 그의 팀은 CERN에서 HTML뿐 아니라 웹 브라우저 및 텍스트 기반 웹 브라우저 관련 기술과 더불어 오리지널 HTTP을 발명하였다. 버너스 리는 최초로 “월드와이드웹” 프로젝트를 1989년에 제안하였으며, 이것이 현재의 월드 와이드 웹이다. 이 프로토콜의 최초 버전은 서버로부터 페이지를 요청하는 GET이라는 이름의 하나의 메소드만 있었다. 서버로부터의 응답은 무조건 HTML 문서였다.</p>\n</blockquote>\n<h2>2. WebSocket과 Polling 방식의 차이는 무엇인가?</h2>\n<p>위에서도 언급했듯이 Web에서 실시간으로 데이터를 받아야하는 노력이 많이 이루어졌습니다. 특히, 초기에는 XHR(ajax)와 같은 기술의 등장으로 이를 이용하여 이벤트를 지속적으로 발생/교환하여 실시간처럼 작동하는 Polling 방식이 대표적이었습니다. 하지만, 연결할 때마다 Header 값을 보내고 이를 컨트롤하는 로직들이 많이 발생되면서 비효율적인 문제들이 발생하였습니다.</p>\n<p>이를 해결하기 위해 등장한 것이 바로 WebSocket입니다. WebSocket은 한 번의 HandShake를 통해 필요한 정보를 확인한 후 Client와 Server간의 Socket을 연결합니다. 이후 Socket을 통해 필요한 정보를 쉽게 실시간으로 주고받아 효율적으로 데이터를 전송/수신 할 수 있습니다. 간단하게 그림을 통해 비교하면 더 이해하기 쉽습니다.</p>\n<h4>- Polling Flow</h4>\n<div class=\'text-center\'>\n  <img src=\'/images/contents/20180413/websocket/polling.png\' width=\'100%\'>\n</div>\n<h4>- WebSocket Flow</h4>\n<div class=\'text-center\'>\n  <img src=\'/images/contents/20180413/websocket/websocket.png\' width=\'50%\'>\n</div>\n<h4>- WebSocket의 HandShake 과정</h4>\n<p>WebSocket은 HandShake를 통해 Client와 Server 접속을 유지합니다. 아래 WebSocket 관련한 그림을 살펴보면 이해하기가 더 쉽습니다.</p>\n<p>Client에서 랜덤하게 생성된 키 값을 전송하고 Server는 이 키 값을 바탕으로 토큰을 생성하여 Client에게 Response 보내어 Client와 Server간의 HandShaking이 이루어집니다. 이러한 HandShaking 과정을 통해 연결을 유지하기 때문에 방화벽 등의 환경에서도 문제 없이 연결을 유지할 수 있습니다.</p>\n<h5>- 클라이언트 요청</h5>\n<p>HTTP 버전은 반드시 1.1. 혹은 그 이상이어하며, 반드시 GET 방식이어야합니다.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">GET /chat HTTP/1.1\nHost: example.com:8000\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ<span class="token operator">==</span>\nSec-WebSocket-Version: 13</code></pre>\n      </div>\n<h5>- 서버 응답</h5>\n<p>각각의 헤더 끝에는 \\r\\n을 그리고 가장 마지막에는 한번 더 \\r\\n을 넣어야 합니다.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo<span class="token operator">=</span></code></pre>\n      </div>\n<h2>3. WebSocket의 브라우저 호환성</h2>\n<p>이 장에서 중요한 것은 WebSocket의 브라우저 호환성 문제입니다. WebSocket의 브라우저 호환성 표를 보겠습니다.</p>\n<div class=\'text-center\'>\n  <img src=\'/images/contents/20180413/websocket/supported-browser.png\' width=\'100%\'>\n</div>\n<p>브라우저 호환성이 중요한 이유는 Client에서 WebSocket이 연결되는 것은 브라우저입니다. 즉, 브라우저에서 WebSocket을 지원하지 않으면 서버가 않으면 이용할 수 없습니다. 이러한 브라우저 호환성 문제로 인해 개발자 커뮤니티에서 페이스북 개발자가 직접 페이스북 서비스에서 Polling 방식으로 개발한 이유에 대한 글을 본적이 있습니다. 이처럼 WebSocket은 브라우저 호환성이라는 제약사항을 갖고 있어 모든 유저의 환경을 고려한 대중적인 서비스를 개발하기 위해서는 아직도 해결해야 할 많은 이슈들이 존재합니다.</p>\n<p>하지만, 이러한 문제를 해결할 수 있는 오픈소스가 존재합니다. 2가지 얘기해보면, 개인적으로 처음 사용했던 <a href="https://github.com/sockjs/sockjs-client">SockJS</a>라는 것이 있습니다. Spring 문서에서도 언급되며 브라우저의 호환성을 해결해줍니다. SockJS보다 많은 사람이 이용하는 것은 <a href="https://socket.io/">SocketIO</a>란 것입니다. NodeJS로 구축되었고, 다양한 언어로도 구현되어 쉽게 사용할 수 있습니다.</p>\n<h2>4. SocketIO란?</h2>\n<p>SocketIO는 Guillermo Rauch가 만들어 WebSocket, XHR-Polling, Flash-Socket, IFrame, JSONP Polling 등을 통합하여 브라우저에 맞게 사용할 수 있는 Framework((Realtime application framework)입니다. SocketIO는 웹 서버의 종류와 브라우저 버전을 파악하여 가장 적합한 기술을 사용하여 WebSocket을 이용할 수 있게 만들어줍니다. 예를 들어, IE9 버전에서 SocketIO로 구현된 서비스를 이용하면, 이는 XHR-Polling을 이용하여 이를 구현해줄 것입니다.</p>\n<p>간단히 SocketIO의 특징을 정리해보겠습니다.</p>\n<h5>1. Reliability</h5>\n<ul>\n<li>Proxy 및 Load Balancers 환경에서도 사용할 수 있습니다.</li>\n<li>Personal Firewall 및 Antivirus software 환경에서도 사용할 수 있습니다.</li>\n</ul>\n<h5>2. Auto-reconnection support</h5>\n<ul>\n<li>달리 지시되지 않는 한 연결이 끊어진 클라이언트는 서버를 다시 사용할 수있을 때까지 지속해서 다시 연결을 시도합니다.</li>\n</ul>\n<h5>3. Disconnection detection</h5>\n<ul>\n<li>heartbeat 메커니즘은 <a href="https://github.com/socketio/engine.io">Engine.IO</a> 수준에서 구현되므로 서버와 클라이언트가 더 이상 응답하지 않는 경우를 알 수 있습니다.</li>\n<li>이 기능은 서버와 클라이언트 모두에서 설정된 타이머를 사용하여 수행되며 시간 초과 값(pingInterval 및 pingTimeout 매개 변수)은 연결 핸드 셰이크 중에 공유됩니다. 이러한 타이머를 사용하면 후속 클라이언트 호출을 동일한 서버로 보내야하므로 배수 노드를 사용할 때 고정 세션 요구 사항이 필요합니다.</li>\n</ul>\n<h5>4. Binary support</h5>\n<p>아래 사항을 이용화여 Serializable 가능 데이터 구조가 생성 될 수 있습니다.</p>\n<ul>\n<li>브라우저의 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a> 및 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">Blob</a></li>\n<li>Node.js의 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a> 및 <a href="https://nodejs.org/api/buffer.html">Buffer</a></li>\n</ul>\n<h2>Outro</h2>\n<p>WebSocket은 한줄로 요약하면 <code class="language-text">Web이라는 요청과 응답이라는 제약적인 환경에 벗어나, Socket을 통한 지속적인 통신을 가능만드는 것</code>이라고 표현할 수 있습니다. HTTP를 이용하는 웹의 환경을 고려하여 WebSocket을 바라본다면 WebSocket에 대해 더 많은 사고를 할 수 있을 것이라고 생각합니다.</p>\n<p>WebSocket을 이용하는 간단한 서비스는 칸반 서비스를 지원하는 Trello입니다. Trello의 칸반이 변경된 것을 접속한 유저는 실시간으로 확인할 수 있습니다. 이러한 이벤트를 처리하기 위해 Trello는 SocketIO를 이용합니다. 즉, WebSocket을 지원하는 브라우저와는 WebSocket을 이용하여 이벤트를 처리한다는 것을 의미합니다. 이처럼 많은 프로덕트 서비스가 WebSocket을 이용하고 있습니다.</p>\n<p>WebSocket을 실무적으로 쓰기 위해서는 보안 및 여러가지 세션관련한 부분에 대한 이해가 필요합니다. 저 또한 Spring의 Security와 같이 이용하여 이부분을 큰 어려움 없이 해결할 수 있었지만, 그렇지 않은 환경에서는 이를 어떻게 다뤄야 할지에 대한 깊은 고민과 학습이 필요할 것으로 보입니다. <a href="https://docs.spring.io/spring/docs/5.0.0.BUILD-SNAPSHOT/spring-framework-reference/html/websocket.html">Spring Websocket</a>을 보면 여러가지 사항에 대해 스프링 개발자들이 고민한 정보를 확인할 수 있습니다. 이러한 간접적인 API를 확인하여 어떠한 것들이 필요한지를 더 확인하고 접근하면 좋을 것으로 판단합니다.</p>\n<p>이상 부족하지만, WebSocket 관련한 글을 마치겠습니다. 다음에는 WebSocket을 이용한 간단한 웹 서비스를 개발하여 코드와 함께 블로그를 작성해보겠습니다. 감사합니다.</p>\n<ul>\n<li>PS : <a href="https://socket.io/get-started/chat/">Simple Example using SocketIO</a>를 참고하시면 NodeJS Express와 SocketIO를 이용하여 간단한 WebSocket을 체험할 수 있습니다.</li>\n</ul>\n<h2>4. References</h2>\n<ul>\n<li><a href="http://d2.naver.com/helloworld/1336">Naver D2 - Websocket - SocketIO</a></li>\n<li><a href="https://developer.mozilla.org/ko/docs/WebSockets/Writing_WebSocket_servers">Mozilla - Websocket</a></li>\n<li><a href="https://socket.io/">SocketIO</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이번에는 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"WebSocket"}]},{type:"text",value:"에 대해서 간단히 정리해볼까 합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"개인적으로는 Spring에서 Stomp와 SockJS를 이용해서 사용해본 경험이 있고, 최근에는 NodeJS에서 SocketIO를 이용하였습니다. 이용하여 성공적으로 개발하는 것도 중요하지만, 더 중요한 것은 기술에 대한 개념적인 이해라고 생각하여 이번에 정리하는 시간을 가져보았습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Intro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"먼저, 네이버 D2 블로그와 Wikipedia와 Mozilla 등의 사이트를 많이 참고하면서 내용을 정리했습니다. 좋은 정보에 감사의 말씀드립니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"개인적으로 WebSocket을 이용했던 부분은 웹사이트에서 일어나는 이벤트에 대해 관련 대상자에게 실시간으로 알림을 알려주는 서비스였습니다. 예를 들어, 게시판 댓글 등의 작업이 이루어지면 글 작성자에게 관련된 메세지를 실시간으로 알려주는 알림 서비스였습니다. 특히, 이 부분에서 어려웠던 것은 대상자를 찾아내어 해당 메세지 구독자에게 메세지를 보내는 것이었습니다. 처음 문서를 읽었을 때 정확히 이해하는 것이 힘들었지만, Spring에서 Security Session의 값을 이용하여 서버 내 Client를 추적할 수 있어서 이 부분을 어렵지 않게 해결할 수 있었습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"하지만, 중요한 것은 개발 과정에서 WebSocket과 Stomp의 작동원리를 정확히 이해하여 Session 관련된 컨트롤이 요구될 때마다 많은 어려움이 있었습니다. 그 외에도 페이스북에서는 브라우저 호환성 때문에 Polling을 이용한다는 개발자의 글도 보면서 다양한 환경에 대한 안전장치가 잘 되어있는지를 체크하여 확인하는 것이 중요하다고 생각했습니다. 이러한 일련의 과정을 간단하게 정리하여 WebSocket을 정리해볼까 합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"- Content List"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Websocket이란?"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"WebSocket과 Polling 방식의 차이는 무엇인가?"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"WebSocket의 브라우저 호환성"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"SocketIO란?"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"1. WebSocket이란?"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"웹소켓(WebSocket)은 하나의 TCP 접속에 전이중 통신 채널을 제공하는 컴퓨터 통신 프로토콜입니다. 2008년 6월, 일련의 토론이 마이클 카터(Michael Carter)에 의해 주도되어 웹소켓으로 알려진 최초 버전의 프로토콜이 탄생하였습니다. 이후 TCP 기반 소켓 API를 대체할 목적으로 HTML5 사양에서 TCPConnection으로 처음 참조되었습니다. 웹소켓 프로토콜은 2011년 IETF에 의해 RFC 6455로 표준화되었으며 웹 IDL의 웹소켓 API는 W3C에 의해 현재 HTML5에 표준화되었습니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"사전적 정의처럼 WebSocket은 하나의 프로토콜로서 TCP를 이용하여 데이터를 실시간으로 양뱡향 통신을 할 수 있게 만든 기술입니다. 원래 Socket의 의미가 TCP/IP를 연결하여 기능을 제공하는 하나의 인터페이스라고 할 수 있는데, 이를 웹에서도 가능하게 만들어 준 것입니다. 원래 Web 환경은 필요한 정보를 HTTP 기반으로 Request/Response로 연결하여 데이터를 주고 받아 네트워크의 연결을 유지하지 않는 특징을 가지고 있습니다. 이러한 환경에서 웹의 환경이 더욱 성장하면서 Socket Programming처럼 실시간으로 데이터를 주고받기 위한 노력이 많이 이루어졌습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"추가사항\nHTML과 HTTP를 찾아서 읽어보면 도움이 될 것 같습니다. - "},{type:"element",tagName:"a",properties:{href:"https://ko.wikipedia.org/wiki/HTTP"},children:[{type:"text",value:"HTTP - WikiPedia"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"팀 버너스 리와 그의 팀은 CERN에서 HTML뿐 아니라 웹 브라우저 및 텍스트 기반 웹 브라우저 관련 기술과 더불어 오리지널 HTTP을 발명하였다. 버너스 리는 최초로 “월드와이드웹” 프로젝트를 1989년에 제안하였으며, 이것이 현재의 월드 와이드 웹이다. 이 프로토콜의 최초 버전은 서버로부터 페이지를 요청하는 GET이라는 이름의 하나의 메소드만 있었다. 서버로부터의 응답은 무조건 HTML 문서였다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"2. WebSocket과 Polling 방식의 차이는 무엇인가?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"위에서도 언급했듯이 Web에서 실시간으로 데이터를 받아야하는 노력이 많이 이루어졌습니다. 특히, 초기에는 XHR(ajax)와 같은 기술의 등장으로 이를 이용하여 이벤트를 지속적으로 발생/교환하여 실시간처럼 작동하는 Polling 방식이 대표적이었습니다. 하지만, 연결할 때마다 Header 값을 보내고 이를 컨트롤하는 로직들이 많이 발생되면서 비효율적인 문제들이 발생하였습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이를 해결하기 위해 등장한 것이 바로 WebSocket입니다. WebSocket은 한 번의 HandShake를 통해 필요한 정보를 확인한 후 Client와 Server간의 Socket을 연결합니다. 이후 Socket을 통해 필요한 정보를 쉽게 실시간으로 주고받아 효율적으로 데이터를 전송/수신 할 수 있습니다. 간단하게 그림을 통해 비교하면 더 이해하기 쉽습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"- Polling Flow"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["text-center"]},children:[{type:"text",value:"\n  "},{type:"element",tagName:"img",properties:{src:"/images/contents/20180413/websocket/polling.png",width:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"- WebSocket Flow"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["text-center"]},children:[{type:"text",value:"\n  "},{type:"element",tagName:"img",properties:{src:"/images/contents/20180413/websocket/websocket.png",width:"50%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"- WebSocket의 HandShake 과정"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"WebSocket은 HandShake를 통해 Client와 Server 접속을 유지합니다. 아래 WebSocket 관련한 그림을 살펴보면 이해하기가 더 쉽습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Client에서 랜덤하게 생성된 키 값을 전송하고 Server는 이 키 값을 바탕으로 토큰을 생성하여 Client에게 Response 보내어 Client와 Server간의 HandShaking이 이루어집니다. 이러한 HandShaking 과정을 통해 연결을 유지하기 때문에 방화벽 등의 환경에서도 문제 없이 연결을 유지할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"- 클라이언트 요청"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP 버전은 반드시 1.1. 혹은 그 이상이어하며, 반드시 GET 방식이어야합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"bash"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"GET /chat HTTP/1.1\nHost: example.com:8000\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"=="}]},{type:"text",value:"\nSec-WebSocket-Version: 13"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"- 서버 응답"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"각각의 헤더 끝에는 \\r\\n을 그리고 가장 마지막에는 한번 더 \\r\\n을 넣어야 합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"bash"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3. WebSocket의 브라우저 호환성"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이 장에서 중요한 것은 WebSocket의 브라우저 호환성 문제입니다. WebSocket의 브라우저 호환성 표를 보겠습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["text-center"]},children:[{type:"text",value:"\n  "},{type:"element",tagName:"img",properties:{src:"/images/contents/20180413/websocket/supported-browser.png",width:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"브라우저 호환성이 중요한 이유는 Client에서 WebSocket이 연결되는 것은 브라우저입니다. 즉, 브라우저에서 WebSocket을 지원하지 않으면 서버가 않으면 이용할 수 없습니다. 이러한 브라우저 호환성 문제로 인해 개발자 커뮤니티에서 페이스북 개발자가 직접 페이스북 서비스에서 Polling 방식으로 개발한 이유에 대한 글을 본적이 있습니다. 이처럼 WebSocket은 브라우저 호환성이라는 제약사항을 갖고 있어 모든 유저의 환경을 고려한 대중적인 서비스를 개발하기 위해서는 아직도 해결해야 할 많은 이슈들이 존재합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"하지만, 이러한 문제를 해결할 수 있는 오픈소스가 존재합니다. 2가지 얘기해보면, 개인적으로 처음 사용했던 "},{type:"element",tagName:"a",properties:{href:"https://github.com/sockjs/sockjs-client"},children:[{type:"text",value:"SockJS"}]},{type:"text",value:"라는 것이 있습니다. Spring 문서에서도 언급되며 브라우저의 호환성을 해결해줍니다. SockJS보다 많은 사람이 이용하는 것은 "},{type:"element",tagName:"a",properties:{href:"https://socket.io/"},children:[{type:"text",value:"SocketIO"}]},{type:"text",value:"란 것입니다. NodeJS로 구축되었고, 다양한 언어로도 구현되어 쉽게 사용할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"4. SocketIO란?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"SocketIO는 Guillermo Rauch가 만들어 WebSocket, XHR-Polling, Flash-Socket, IFrame, JSONP Polling 등을 통합하여 브라우저에 맞게 사용할 수 있는 Framework((Realtime application framework)입니다. SocketIO는 웹 서버의 종류와 브라우저 버전을 파악하여 가장 적합한 기술을 사용하여 WebSocket을 이용할 수 있게 만들어줍니다. 예를 들어, IE9 버전에서 SocketIO로 구현된 서비스를 이용하면, 이는 XHR-Polling을 이용하여 이를 구현해줄 것입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"간단히 SocketIO의 특징을 정리해보겠습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"1. Reliability"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Proxy 및 Load Balancers 환경에서도 사용할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Personal Firewall 및 Antivirus software 환경에서도 사용할 수 있습니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"2. Auto-reconnection support"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"달리 지시되지 않는 한 연결이 끊어진 클라이언트는 서버를 다시 사용할 수있을 때까지 지속해서 다시 연결을 시도합니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"3. Disconnection detection"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"heartbeat 메커니즘은 "},{type:"element",tagName:"a",properties:{href:"https://github.com/socketio/engine.io"},children:[{type:"text",value:"Engine.IO"}]},{type:"text",value:" 수준에서 구현되므로 서버와 클라이언트가 더 이상 응답하지 않는 경우를 알 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"이 기능은 서버와 클라이언트 모두에서 설정된 타이머를 사용하여 수행되며 시간 초과 값(pingInterval 및 pingTimeout 매개 변수)은 연결 핸드 셰이크 중에 공유됩니다. 이러한 타이머를 사용하면 후속 클라이언트 호출을 동일한 서버로 보내야하므로 배수 노드를 사용할 때 고정 세션 요구 사항이 필요합니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"4. Binary support"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"아래 사항을 이용화여 Serializable 가능 데이터 구조가 생성 될 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"브라우저의 "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},children:[{type:"text",value:"ArrayBuffer"}]},{type:"text",value:" 및 "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},children:[{type:"text",value:"Blob"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Node.js의 "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"},children:[{type:"text",value:"ArrayBuffer"}]},{type:"text",value:" 및 "},{type:"element",tagName:"a",properties:{href:"https://nodejs.org/api/buffer.html"},children:[{type:"text",value:"Buffer"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Outro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"WebSocket은 한줄로 요약하면 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Web이라는 요청과 응답이라는 제약적인 환경에 벗어나, Socket을 통한 지속적인 통신을 가능만드는 것"}]},{type:"text",value:"이라고 표현할 수 있습니다. HTTP를 이용하는 웹의 환경을 고려하여 WebSocket을 바라본다면 WebSocket에 대해 더 많은 사고를 할 수 있을 것이라고 생각합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"WebSocket을 이용하는 간단한 서비스는 칸반 서비스를 지원하는 Trello입니다. Trello의 칸반이 변경된 것을 접속한 유저는 실시간으로 확인할 수 있습니다. 이러한 이벤트를 처리하기 위해 Trello는 SocketIO를 이용합니다. 즉, WebSocket을 지원하는 브라우저와는 WebSocket을 이용하여 이벤트를 처리한다는 것을 의미합니다. 이처럼 많은 프로덕트 서비스가 WebSocket을 이용하고 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"WebSocket을 실무적으로 쓰기 위해서는 보안 및 여러가지 세션관련한 부분에 대한 이해가 필요합니다. 저 또한 Spring의 Security와 같이 이용하여 이부분을 큰 어려움 없이 해결할 수 있었지만, 그렇지 않은 환경에서는 이를 어떻게 다뤄야 할지에 대한 깊은 고민과 학습이 필요할 것으로 보입니다. "},{type:"element",tagName:"a",properties:{href:"https://docs.spring.io/spring/docs/5.0.0.BUILD-SNAPSHOT/spring-framework-reference/html/websocket.html"},children:[{type:"text",value:"Spring Websocket"}]},{type:"text",value:"을 보면 여러가지 사항에 대해 스프링 개발자들이 고민한 정보를 확인할 수 있습니다. 이러한 간접적인 API를 확인하여 어떠한 것들이 필요한지를 더 확인하고 접근하면 좋을 것으로 판단합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이상 부족하지만, WebSocket 관련한 글을 마치겠습니다. 다음에는 WebSocket을 이용한 간단한 웹 서비스를 개발하여 코드와 함께 블로그를 작성해보겠습니다. 감사합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"PS : "},{type:"element",tagName:"a",properties:{href:"https://socket.io/get-started/chat/"},children:[{type:"text",value:"Simple Example using SocketIO"}]},{type:"text",value:"를 참고하시면 NodeJS Express와 SocketIO를 이용하여 간단한 WebSocket을 체험할 수 있습니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"4. References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://d2.naver.com/helloworld/1336"},children:[{type:"text",value:"Naver D2 - Websocket - SocketIO"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/ko/docs/WebSockets/Writing_WebSocket_servers"},children:[{type:"text",value:"Mozilla - Websocket"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://socket.io/"},children:[{type:"text",value:"SocketIO"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/Network-WhatIsTheWebSocket/",prefix:"2018-04-13"},frontmatter:{author:"Seolhun",category:"WebSocket",cover:{childImageSharp:{resize:{src:"/static/websocket-2e855a643558fb365698aaeae5f61b61-160fa.png"}}},description:null,subTitle:null,tags:["Network","Socket","WebSocket","SocketIO"],title:"[Network/Socket] WebSocket이란 무엇인가? 어떻게 사용하는가?"}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다.</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/Network-WhatIsTheWebSocket/"}}}});
//# sourceMappingURL=path---network-what-is-the-web-socket-2e65d7dcf6404762a0f3.js.map