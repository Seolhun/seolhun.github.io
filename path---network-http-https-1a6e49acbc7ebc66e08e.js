webpackJsonp([0xc303d2eb065],{834:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-04-20--Network-Http-Https/index.md absPath of file >>> MarkdownRemark",html:'<p>이번에는 Http와 Https에 대한 정의와 간단한 차이점에 대해서 정리해보고자 합니다.</p>\n<h2>Intro</h2>\n<p><a href="https://letsencrypt.org/">Let’s Encrypt</a>를 사용하여 개인 Domain에 Https를 적용한 적이 있습니다. 3개월 동안 무료로 사용할 수 있으며 이후에 수동으로 다시 갱신해야 합니다. 간단한 로직과 함게 크론을 사용하면 갱신도 자동적으로 하여 사용할 수 있습니다. 무료로서 개인 도메인으로 사용하기에는 적합하지만, 엔터프라이즈에서 사용하기에는 보안수준이 낮아 비용을 지불해서라도 더 좋은 서비스를 이용해야 할 것입니다.</p>\n<p>이와 더불어 함게 사용되는 툴이 <a href="https://www.wireshark.org/download.html">Wireshark</a>입니다. 해당 도메인에서 발생되는 패킷을 확인할 수 있으며, 필터링을 통해 원하는 것만을 필터링 할수도 있습니다.</p>\n<p>이렇게 2가지를 언급하는 이유는 https는 즉, 네트워크에서 전송되는 패킷을 암호화하여 이를 쉽게 해독할 수 없도록 만들어줍니다. http에서 해당 패킷을 확인해보고, https 적용 후 패킷을 다시 확인해보면 그 차이를 크게 확인 할 수 있습니다.</p>\n<img src="/images/contents/20180420/http/http.png" width="100%">\n<h2>HTTP(HyperText Transfer Protocol)</h2>\n<p><code class="language-text">HTTP(HyperText Transfer Protocol)</code>는 WWW 상에서 정보를 주고받을 수 있는 프로토콜입니다. 주로 HTML 문서를 주고받는 데에 쓰입니다. TCP와 UDP를 사용하며, 기본 TCP/IP 포트는 80 포트를 사용합니다. 1996년에 첫 상용화버전인 HTTP/1.0가 발표되었고, 1999년에 HTTP/1.1, 그리고 2015년 HTTP/2를 공식으로 발표하였습니다.</p>\n<p>HTTP에 대해 더 간단히 설명하자면, HTTP는 요청(Request)와 응답(Response)로 구성되어 있고, 클라이언트가 요청을 하면 서버가 응답을 하는 구조로 되어 있습니다. <code class="language-text">HTTP는 FTP나 텔넷과는 다르게 비연결식입니다.</code> FTP나 Telnet은 클라이언트가 서버에 정보를 요청해도 서버가 클라이언트와 연결을 끊지 않지만, <code class="language-text">HTTP는 클라이언트가 서버에 정보를 요청하면 응답 코드와 내용을 전송하고 클라이언트와 연결을 종료합니다.</code> 즉, 요청과 응답이 하나의 연결로 이어지지 않고 요청에 따른 응답에으로 2가지 작업으로 진행됩니다.</p>\n<p>이러한 HTTP 특징으로 HTTPS를 들어가기 전에 알 필요가 있는 <code class="language-text">Packet</code>에 대해서 알아보겠습니다.</p>\n<h2>Packet</h2>\n<p>Packet이란?, Package(화물)와 Bucket(덩어리)의 합성어입니다. 즉, WWW Web에서는 전송될 때, 서로 교환되는 실제의 내용물로 분할된 파일 데이터에 주소와 에러 데이터 등이 기록됩니다. ‘분할’의 특성 때문에 자연스럽게 시분할(Time-slice) 방식으로 처리가 가능한 특징을 가지고 있어, 선이 끊기면 연결성이 끊어지는 서킷 방식과는 다르게 양측 단말의 길만 정해지면 언제든지 우회가 가능하다는 장점이 있습니다. 또한, 중간에 분실한 패킷에 대해서는 그 부분만 다시 보내면 문제되지 않기 때문에 인터넷은 물론 허브 역시 패킷 방식을 사용합니다. 다만, 이러한 작업을 위해 패킷에 고유의 번호를 매겨야 하고, 이 순서를 양측이 동일하게 사용해야 한다는 단점이 있습니다.</p>\n<p>이러한 문제를 해결하기 위해 제약사항 등을 포함한 통신 규칙, 즉 프로토콜이 등장한 것입니다. TCP/IP 등 신뢰성 기반의 프로토콜(HTTP 등)은 대부분 이러한 기능을 지니고 있습니다. <strong>간단히 말해, ‘택배에 송장 번호를 매긴다’ 생각하면 편하게 이해할 수 있습니다.</strong></p>\n<h2>HTTPS(HyperText Transfer Protocol Security - over TLS, SSL, HTTP Secure)</h2>\n<p><code class="language-text">HTTPS(Hypertext Transfer Protocol over Secure Socket Layer)</code>는 월드 와이드 웹 통신 프로토콜인 HTTP의 보안이 강화된 버전입니다. HTTPS는 통신의 인증과 암호화를 위해 넷스케이프 커뮤니케이션즈 코퍼레이션이 개발했습니다. HTTPS는 소켓 통신에서 일반 텍스트를 이용하는 대신에, SSL이나 TLS 프로토콜을 통해 세션 데이터를 암호화합니다. 따라서 데이터의 적절한 보호를 보장합니다. HTTPS의 기본 TCP/IP 포트는 443을 이용합니다. HTTPS의 보안수준은 웹 브라우저에서의 구현 정확도와 서버 소프트웨어, 지원하는 암호화 알고리즘에 달려다고 할 수 있습니다.</p>\n<p>위에서 간단히 언급했듯이, HTTPS는 패킷이 암호화되어 있기 때문에 패킷캡쳐(WireShark와 같은) 프로그램으로 사용해서 패킷의 내용을 보더라도 암호화된 내용만 보이게 됩니다. 암호화는 TLS라고 하여 OSI7계층에서 L4의 전송계층(Transport)에서 이루어지게 됩니다. 이러한 암호화 과정을 거치기 때문에 HTTPS는 HTTP보다 느리지만, 현재 인터넷 속도에서 이는 큰 의미가 없습니다. 그리고 HTTPS는 개인정보가 거래되는 웹 상에서는 의무화되어있습니다.</p>\n<h2>SSL(Secure Sockets Layer)</h2>\n<p>SSL은 Secure Sockets Layer를 의미하며 이는 웹 브라우저와 엡 서버 사이에 암호화된 통신을 구현하는 글로벌 표준 보안 기술입니다. 요약하자면, <code class="language-text">SSL은 두 의도된 당사자들만의 사적인 &quot;대화&quot;를 가능하게 해 줍니다.</code> 이 보안 연결을 설정하기 위해, SSL 인증서(디지털 인증서라 하기도 함)가 웹 서버에 설치되어 다음 두 가지 기능을 수행합니다.</p>\n<ol>\n<li>웹사이트의 신원을 인증(방문자에게 해당 사이트가 위조 사이트가 아님을 보장)</li>\n<li>전송되는 데이터를 암호화</li>\n</ol>\n<h2>TLS(Transport Layer Security)</h2>\n<p>인터넷을 사용한 통신에서 보안을 확보하려면 두 통신 당사자가 서로가 신뢰할 수 있는 자임을 확인할 수 있어야 하며, 서로간의 통신 내용이 제3자에 의해 도청되는 것을 방지해야 합니다. 따라서 <code class="language-text">서로 자신을 신뢰할 수 있음을 알리기 위해 전자 서명이 포함된 인증서를 사용하며, 도청을 방지하기 위해 통신 내용을 암호화</code>합니다. 이러한 통신 규약을 묶어 정리한 것이 바로 TLS이며, 주요 웹브라우저 주소창에 자물쇠 아이콘이 뜨는 것으로 TLS의 적용 여부를 확인할 수 있습니다.</p>\n<p>간단한 예를 들어, 인터넷 뱅킹을 하기 위해 은행의 사이트에 방문했을 때, 고객은 그 사이트가 정말 은행의 사이트가 맞는지 아니면 해커가 만든 가짜 피싱 사이트인지 확인할 수 있어야 하며, 은행 역시 자신의 서비스에 접속한자가 해당 고객이 맞는지 아니면 고객의 컴퓨터와 서버 사이에서 내용을 가로채고자 하는 해커인지 확인할 수 있어야 합니다. 그리고 은행과 고객 간의 통신 내용이 다른 해커에게 도청되지 않도록 내용을 숨겨야 합니다. 이럴 때 바로 은행과 고객 간에 TLS를 사용한 연결을 맺어 안전하게 통신을 할 수 있습니다.</p>\n<h2>TLS HandShaking</h2>\n<ol>\n<li>먼저, 클라이언트에서 서버에 ClientHello 메시지를 보낸다. 여기에는 클라이언트에서 가능한 TLS 버전, 세션 식별자, 암호 설정 등의 정보가 포함된다.</li>\n<li>클라이언트의 메시지를 받은 서버는 ServerHello 메시지를 클라이언트에게 보낸다. 여기에는 ClientHello 메시지의 정보 중 서버에서 사용하기로 선택한 TLS 버전, 세션 식별자, 암호 설정 등의 정보가 포함된다.</li>\n<li>서버가 클라이언트에 Certificate 메시지를 보낸다. 여기에는 서버의 인증서가 들어간다. 이 인증서는 별도의 인증 기관에서 발급받은 것이며, 서버가 신뢰할 수 있는 자임을 인증한다. 전송이 끝나면 ServerHelloDone 메시지를 보내 끝났음을 알린다.</li>\n<li>클라이언트는 서버에서 받은 인증서를 검증한다. 인증서의 유효 기간이 만료되지 않았는지, 그 인증서가 해당 서버에게 발급된 인증서가 맞는지 등을 확인한다. 인증서를 신뢰할 수 있다고 판단하였다면 다음 단계로 넘어간다.</li>\n<li>클라이언트는 임의의 pre-master secret을 생성한 뒤, 서버가 보낸 인증서에 포함된 공개 키를 사용해 암호화한다. 이렇게 암호화된 pre-master secret을 ClientKeyExchange 메시지에 포함시켜 서버에 전송한다.</li>\n<li>서버는 전송받은 정보를 복호화하여 pre-master secret을 알아낸 뒤, 이 정보를 사용해 master secret을 생성한다. 그 뒤 master secret에서 세션 키를 생성해내며, 이 세션 키는 앞으로 서버와 클라이언트 간의 통신을 암호화하는데 사용할 것이다. 물론 클라이언트 역시 자신이 만들어낸 pre-master secret을 알고 있으므로, 같은 과정을 거쳐 세션 키를 스스로 만들 수 있다.</li>\n<li>이제 서버와 클라이언트는 각자 동일한 세션 키를 가지고 있으며, 이를 사용해 대칭 키 암호를 사용하는 통신을 할 수 있다. 따라서 우선 서로에게 ChangeCipherSpec 메시지를 보내 앞으로의 모든 통신 내용은 세션 키를 사용해 암호화해 보낼 것을 알려준 뒤, Finished 메시지를 보내 각자의 핸드셰이킹 과정이 끝났음을 알린다.</li>\n<li>이제 서버와 클라이언트 간에 보안 통신이 구성된다.</li>\n</ol>\n<p>쉽게 요약해서, 먼저 서로가 어떤 TLS 버전을 사용 가능한지를 확인하고, 인증서를 사용해 서로를 믿을 수 있는지 확인한 뒤, 서로간의 통신에 쓸 암호를 교환하는 것입니다.</p>\n<h2>Outro</h2>\n<p>HTTP의 특징처럼 전송/응답의 환경에서 Packet을 통해 해당 데이터를 전송받고 응답할 수 있습니다. 즉, HTTPS는 이러한 HTTP 환경에 전송/응답되는 데이터를 암호화하는 처리를 추가적으로 해주는 것입니다. 이 외에도 신뢰성 있는 3자를 통해 클라이언트와 서버 간의 신뢰성을 확보할 수 있도록 도와주는 인증과정을 확인할 수 있습니다. 이 외에도 HTTP를 통해 전송되는 Packet과 암호화 과정의 방법인 TLS, SSL 등에 대해서 알아볼 수 있었습니다. 부족한 내용도 많지만, 간단하게 알아봄으로써 그 둘의 차이를 알 수 있었다고 생각합니다.</p>\n<p>제가 생각하는 HTTP와 HTTPS의 가장 큰 차이는 즉, <code class="language-text">HTTP의 전송/응답 데이터를 암호화 하는 것</code>이라고 생각합니다. TLS는 OSI 7계층 중 L4 Transport 게층에서, SSL은 응용계층과 전송계층 사이에 독립적인 프로토콜 계층을 만들어서 동작합니다. HTTPS에는 이 외에도 많은 기능이 있겠지만, OSI 7계층과 함께 이해한다면 좋은 내용이 될 것이라고 판단합니다. 다음에는 OSI 7계층에 대해서도 간단히 정리해봐야 할 것 같습니다. 감사합니다.</p>\n<h2>References</h2>\n<ul>\n<li><a href="https://ko.wikipedia.org/wiki/HTTP">WIKI - HTTP</a></li>\n<li><a href="https://ko.wikipedia.org/wiki/HTTPS">WIKI - HTTPS</a></li>\n<li><a href="https://namu.wiki/w/TLS">WIKI - TLS</a></li>\n<li><a href="https://www.verisign.com/ko_KR/website-presence/website-optimization/ssl-certificates/index.xhtml">Versign - SSL</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이번에는 Http와 Https에 대한 정의와 간단한 차이점에 대해서 정리해보고자 합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Intro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://letsencrypt.org/"},children:[{type:"text",value:"Let’s Encrypt"}]},{type:"text",value:"를 사용하여 개인 Domain에 Https를 적용한 적이 있습니다. 3개월 동안 무료로 사용할 수 있으며 이후에 수동으로 다시 갱신해야 합니다. 간단한 로직과 함게 크론을 사용하면 갱신도 자동적으로 하여 사용할 수 있습니다. 무료로서 개인 도메인으로 사용하기에는 적합하지만, 엔터프라이즈에서 사용하기에는 보안수준이 낮아 비용을 지불해서라도 더 좋은 서비스를 이용해야 할 것입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이와 더불어 함게 사용되는 툴이 "},{type:"element",tagName:"a",properties:{href:"https://www.wireshark.org/download.html"},children:[{type:"text",value:"Wireshark"}]},{type:"text",value:"입니다. 해당 도메인에서 발생되는 패킷을 확인할 수 있으며, 필터링을 통해 원하는 것만을 필터링 할수도 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이렇게 2가지를 언급하는 이유는 https는 즉, 네트워크에서 전송되는 패킷을 암호화하여 이를 쉽게 해독할 수 없도록 만들어줍니다. http에서 해당 패킷을 확인해보고, https 적용 후 패킷을 다시 확인해보면 그 차이를 크게 확인 할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"/images/contents/20180420/http/http.png",width:"100%"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"HTTP(HyperText Transfer Protocol)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"HTTP(HyperText Transfer Protocol)"}]},{type:"text",value:"는 WWW 상에서 정보를 주고받을 수 있는 프로토콜입니다. 주로 HTML 문서를 주고받는 데에 쓰입니다. TCP와 UDP를 사용하며, 기본 TCP/IP 포트는 80 포트를 사용합니다. 1996년에 첫 상용화버전인 HTTP/1.0가 발표되었고, 1999년에 HTTP/1.1, 그리고 2015년 HTTP/2를 공식으로 발표하였습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP에 대해 더 간단히 설명하자면, HTTP는 요청(Request)와 응답(Response)로 구성되어 있고, 클라이언트가 요청을 하면 서버가 응답을 하는 구조로 되어 있습니다. "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"HTTP는 FTP나 텔넷과는 다르게 비연결식입니다."}]},{type:"text",value:" FTP나 Telnet은 클라이언트가 서버에 정보를 요청해도 서버가 클라이언트와 연결을 끊지 않지만, "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"HTTP는 클라이언트가 서버에 정보를 요청하면 응답 코드와 내용을 전송하고 클라이언트와 연결을 종료합니다."}]},{type:"text",value:" 즉, 요청과 응답이 하나의 연결로 이어지지 않고 요청에 따른 응답에으로 2가지 작업으로 진행됩니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이러한 HTTP 특징으로 HTTPS를 들어가기 전에 알 필요가 있는 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Packet"}]},{type:"text",value:"에 대해서 알아보겠습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Packet"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Packet이란?, Package(화물)와 Bucket(덩어리)의 합성어입니다. 즉, WWW Web에서는 전송될 때, 서로 교환되는 실제의 내용물로 분할된 파일 데이터에 주소와 에러 데이터 등이 기록됩니다. ‘분할’의 특성 때문에 자연스럽게 시분할(Time-slice) 방식으로 처리가 가능한 특징을 가지고 있어, 선이 끊기면 연결성이 끊어지는 서킷 방식과는 다르게 양측 단말의 길만 정해지면 언제든지 우회가 가능하다는 장점이 있습니다. 또한, 중간에 분실한 패킷에 대해서는 그 부분만 다시 보내면 문제되지 않기 때문에 인터넷은 물론 허브 역시 패킷 방식을 사용합니다. 다만, 이러한 작업을 위해 패킷에 고유의 번호를 매겨야 하고, 이 순서를 양측이 동일하게 사용해야 한다는 단점이 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이러한 문제를 해결하기 위해 제약사항 등을 포함한 통신 규칙, 즉 프로토콜이 등장한 것입니다. TCP/IP 등 신뢰성 기반의 프로토콜(HTTP 등)은 대부분 이러한 기능을 지니고 있습니다. "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"간단히 말해, ‘택배에 송장 번호를 매긴다’ 생각하면 편하게 이해할 수 있습니다."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"HTTPS(HyperText Transfer Protocol Security - over TLS, SSL, HTTP Secure)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"HTTPS(Hypertext Transfer Protocol over Secure Socket Layer)"}]},{type:"text",value:"는 월드 와이드 웹 통신 프로토콜인 HTTP의 보안이 강화된 버전입니다. HTTPS는 통신의 인증과 암호화를 위해 넷스케이프 커뮤니케이션즈 코퍼레이션이 개발했습니다. HTTPS는 소켓 통신에서 일반 텍스트를 이용하는 대신에, SSL이나 TLS 프로토콜을 통해 세션 데이터를 암호화합니다. 따라서 데이터의 적절한 보호를 보장합니다. HTTPS의 기본 TCP/IP 포트는 443을 이용합니다. HTTPS의 보안수준은 웹 브라우저에서의 구현 정확도와 서버 소프트웨어, 지원하는 암호화 알고리즘에 달려다고 할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"위에서 간단히 언급했듯이, HTTPS는 패킷이 암호화되어 있기 때문에 패킷캡쳐(WireShark와 같은) 프로그램으로 사용해서 패킷의 내용을 보더라도 암호화된 내용만 보이게 됩니다. 암호화는 TLS라고 하여 OSI7계층에서 L4의 전송계층(Transport)에서 이루어지게 됩니다. 이러한 암호화 과정을 거치기 때문에 HTTPS는 HTTP보다 느리지만, 현재 인터넷 속도에서 이는 큰 의미가 없습니다. 그리고 HTTPS는 개인정보가 거래되는 웹 상에서는 의무화되어있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"SSL(Secure Sockets Layer)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"SSL은 Secure Sockets Layer를 의미하며 이는 웹 브라우저와 엡 서버 사이에 암호화된 통신을 구현하는 글로벌 표준 보안 기술입니다. 요약하자면, "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'SSL은 두 의도된 당사자들만의 사적인 "대화"를 가능하게 해 줍니다.'}]},{type:"text",value:" 이 보안 연결을 설정하기 위해, SSL 인증서(디지털 인증서라 하기도 함)가 웹 서버에 설치되어 다음 두 가지 기능을 수행합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"웹사이트의 신원을 인증(방문자에게 해당 사이트가 위조 사이트가 아님을 보장)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"전송되는 데이터를 암호화"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"TLS(Transport Layer Security)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"인터넷을 사용한 통신에서 보안을 확보하려면 두 통신 당사자가 서로가 신뢰할 수 있는 자임을 확인할 수 있어야 하며, 서로간의 통신 내용이 제3자에 의해 도청되는 것을 방지해야 합니다. 따라서 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"서로 자신을 신뢰할 수 있음을 알리기 위해 전자 서명이 포함된 인증서를 사용하며, 도청을 방지하기 위해 통신 내용을 암호화"}]},{type:"text",value:"합니다. 이러한 통신 규약을 묶어 정리한 것이 바로 TLS이며, 주요 웹브라우저 주소창에 자물쇠 아이콘이 뜨는 것으로 TLS의 적용 여부를 확인할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"간단한 예를 들어, 인터넷 뱅킹을 하기 위해 은행의 사이트에 방문했을 때, 고객은 그 사이트가 정말 은행의 사이트가 맞는지 아니면 해커가 만든 가짜 피싱 사이트인지 확인할 수 있어야 하며, 은행 역시 자신의 서비스에 접속한자가 해당 고객이 맞는지 아니면 고객의 컴퓨터와 서버 사이에서 내용을 가로채고자 하는 해커인지 확인할 수 있어야 합니다. 그리고 은행과 고객 간의 통신 내용이 다른 해커에게 도청되지 않도록 내용을 숨겨야 합니다. 이럴 때 바로 은행과 고객 간에 TLS를 사용한 연결을 맺어 안전하게 통신을 할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"TLS HandShaking"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"먼저, 클라이언트에서 서버에 ClientHello 메시지를 보낸다. 여기에는 클라이언트에서 가능한 TLS 버전, 세션 식별자, 암호 설정 등의 정보가 포함된다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"클라이언트의 메시지를 받은 서버는 ServerHello 메시지를 클라이언트에게 보낸다. 여기에는 ClientHello 메시지의 정보 중 서버에서 사용하기로 선택한 TLS 버전, 세션 식별자, 암호 설정 등의 정보가 포함된다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"서버가 클라이언트에 Certificate 메시지를 보낸다. 여기에는 서버의 인증서가 들어간다. 이 인증서는 별도의 인증 기관에서 발급받은 것이며, 서버가 신뢰할 수 있는 자임을 인증한다. 전송이 끝나면 ServerHelloDone 메시지를 보내 끝났음을 알린다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"클라이언트는 서버에서 받은 인증서를 검증한다. 인증서의 유효 기간이 만료되지 않았는지, 그 인증서가 해당 서버에게 발급된 인증서가 맞는지 등을 확인한다. 인증서를 신뢰할 수 있다고 판단하였다면 다음 단계로 넘어간다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"클라이언트는 임의의 pre-master secret을 생성한 뒤, 서버가 보낸 인증서에 포함된 공개 키를 사용해 암호화한다. 이렇게 암호화된 pre-master secret을 ClientKeyExchange 메시지에 포함시켜 서버에 전송한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"서버는 전송받은 정보를 복호화하여 pre-master secret을 알아낸 뒤, 이 정보를 사용해 master secret을 생성한다. 그 뒤 master secret에서 세션 키를 생성해내며, 이 세션 키는 앞으로 서버와 클라이언트 간의 통신을 암호화하는데 사용할 것이다. 물론 클라이언트 역시 자신이 만들어낸 pre-master secret을 알고 있으므로, 같은 과정을 거쳐 세션 키를 스스로 만들 수 있다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"이제 서버와 클라이언트는 각자 동일한 세션 키를 가지고 있으며, 이를 사용해 대칭 키 암호를 사용하는 통신을 할 수 있다. 따라서 우선 서로에게 ChangeCipherSpec 메시지를 보내 앞으로의 모든 통신 내용은 세션 키를 사용해 암호화해 보낼 것을 알려준 뒤, Finished 메시지를 보내 각자의 핸드셰이킹 과정이 끝났음을 알린다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"이제 서버와 클라이언트 간에 보안 통신이 구성된다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"쉽게 요약해서, 먼저 서로가 어떤 TLS 버전을 사용 가능한지를 확인하고, 인증서를 사용해 서로를 믿을 수 있는지 확인한 뒤, 서로간의 통신에 쓸 암호를 교환하는 것입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Outro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP의 특징처럼 전송/응답의 환경에서 Packet을 통해 해당 데이터를 전송받고 응답할 수 있습니다. 즉, HTTPS는 이러한 HTTP 환경에 전송/응답되는 데이터를 암호화하는 처리를 추가적으로 해주는 것입니다. 이 외에도 신뢰성 있는 3자를 통해 클라이언트와 서버 간의 신뢰성을 확보할 수 있도록 도와주는 인증과정을 확인할 수 있습니다. 이 외에도 HTTP를 통해 전송되는 Packet과 암호화 과정의 방법인 TLS, SSL 등에 대해서 알아볼 수 있었습니다. 부족한 내용도 많지만, 간단하게 알아봄으로써 그 둘의 차이를 알 수 있었다고 생각합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"제가 생각하는 HTTP와 HTTPS의 가장 큰 차이는 즉, "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"HTTP의 전송/응답 데이터를 암호화 하는 것"}]},{type:"text",value:"이라고 생각합니다. TLS는 OSI 7계층 중 L4 Transport 게층에서, SSL은 응용계층과 전송계층 사이에 독립적인 프로토콜 계층을 만들어서 동작합니다. HTTPS에는 이 외에도 많은 기능이 있겠지만, OSI 7계층과 함께 이해한다면 좋은 내용이 될 것이라고 판단합니다. 다음에는 OSI 7계층에 대해서도 간단히 정리해봐야 할 것 같습니다. 감사합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://ko.wikipedia.org/wiki/HTTP"},children:[{type:"text",value:"WIKI - HTTP"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://ko.wikipedia.org/wiki/HTTPS"},children:[{type:"text",value:"WIKI - HTTPS"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://namu.wiki/w/TLS"},children:[{type:"text",value:"WIKI - TLS"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.verisign.com/ko_KR/website-presence/website-optimization/ssl-certificates/index.xhtml"},children:[{type:"text",value:"Versign - SSL"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/Network-Http-Https/",prefix:"2018-04-20"},frontmatter:{title:"[Network/Http] Http vs Https의 차이? 그리고 Packet과 TSL, SSL",subTitle:null,cover:{childImageSharp:{resize:{src:"/static/http-a7afd9c1f5a12d76222bd02edee88bac-160fa.png"}}}}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다..</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/Network-Http-Https/"}}}});
//# sourceMappingURL=path---network-http-https-1a6e49acbc7ebc66e08e.js.map