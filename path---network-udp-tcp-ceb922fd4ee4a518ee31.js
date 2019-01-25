webpackJsonp([47516194523176],{846:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2018-06-02--Network-udp-tcp/index.md absPath of file >>> MarkdownRemark",html:'<p>HTTP의 관심을 갖고 책을 읽으면서 학습을 하고 있지만, Network에 더 근본적인 IP와 UDP, TCP에 대해서 이해해야 할 필요가 있다고 생각하여 적게되었습니다. 관련 사항에 간단하게 읽어본적은 있지만 읽어보는 것과 이를 숙지하기 위해 반복적으로 학습하는 것은 큰차이가 있기에 이번 시간을 계기로 이와 관련한 내용을 숙지하고자 합니다.</p>\n<h2>IP란?</h2>\n<p>IP에서 인터넷(the Internet) 이름자체가 ‘inter-’ 라는 접두사와 ‘네트워크’를 의미하는 ‘net’이 합쳐진 말로, 인터넷은 네트워크들을 연동하는 것이라고 말할 수 있습니다. 즉, IP(Internet Protocol)라는 이름은 <code class="language-text">네트워크를 연동하는 프로토콜</code>이라는 뜻으로 해석하면 쉬울 것 같습니다. IP는 OSI의 3 Layer(Network Layer)와 Internet Protocol Suite의 3 Layer(Internet Layer)에 위치하고 있습니다.</p>\n<p>IP라는 이름처럼 어디에서든 간단하게 IP만 올릴 수 있으면 어떤 네트워크든 연결할 수 있습니다. 그래서, IP는 아래 그림처럼 모래 시계의 허리에 비유하여 설명할 수 있습니다. 그림처럼 IP 아래로는 네트워크를 만들 수 있는 다양한 하드웨어 기술 (Ethernet, WiFi 등…) 이 존재하고 있고, IP 위로는 다양한 응용 서비스(HTTP, FTP 등…)들이 동작할 수 있습니다. 간단한 예로 컴퓨터에 연결하는 랜선은 Ethernet, 모바일로 무선 네트워크를 이용하는 것은 WiFI, 개발 간 API를 호출할 때는 HTTP를 이영할 수 있는 것입니다. 이처럼 IP를 기반으로하면 어떠한 디바이스와 서버, 혹은 사용자가 사용해도 TCP/UDP와 관련된 네트워크 기능들을 큰 어려움없이 사용할 수 있습니다.</p>\n<div class=\'text-center\'>\n  <img src="/images/contents/20180426/network/ip.jpg" width="100%">\n</div>\n<p>IP의 특징은 연결을 보장하기 위한 노력은 하지만 100% 보장해주지 않습니다. 이를 <code class="language-text">Best-effort</code>라고 표현하는데, IP 가 best-effort가 될 수 밖에 없는 이유는 서로 다른 특성의 여러 네트워크를 연동해야 되기 때문입니다.</p>\n<h2>UDP란?</h2>\n<p>UDP(User Datagram Protocol)는 컴퓨터가 다른 컴퓨터와 데이터 통신을 하기 위한 프로토콜의 일종입니다. UDP는 세계 통신표준으로 개발된 OSI 모형에서 4번째 계층인 전송 계층(Transport Layer)에서 사용하는 프로토콜입니다. 동일 계층(OSI 4계층)에서 사용하는 또다른 프로토콜로 TCP가 존재합니다.</p>\n<p>UDP에 설명하기 앞서 같은 계층에 있는 TCP를 설명하면 좋을 것 같습니다. UDP와 같은 계층에 있는 TCP는 데이터 신뢰성을 보장하기 위한 방식이기 때문에 누락된 데이터를 모두 받기위한 메커니즘이 정의되어 있습니다. 그러므로, 이메일이나 파일전송과 같은 100% 데이터의 보장이 필요한 분야에서 필수요소로 사용되고 있습니다. 하지만, 실시간 스트리밍 서비스에서 TCP는 걸림돌로 작용됩니다. TCP는 전체 영상에서 점 하나 못받은 것 때문에 버퍼링으로 재생이 중지되며, 혼잡제어를 위해 보내는 양도 조절하기 때문에 영상 데이터의 퀄리티가 오락가락하는 문제를 발생시킵니다. 결국 이를 해결하기 위하여 제시된 것이 UDP를 사용하는 방법입니다.</p>\n<p><code class="language-text">UDP의 특징은 간단하게 TCP의 모든 신뢰성 매커니즘이 기능이 없다고 보면됩니다.</code> 그냥 상대와 접속했고, 전송속도를 48Kbps로 설정했으면 무조건 48Kbps로 데이터를 일방적으로 전송하기만 합니다. 받는 쪽에서 데이터를 제대로 받고 있는지는 신경을 쓰지 않습니다. 그렇기 때문에 UDP로 데이터를 제공할 경우 32Kbps, 48Kbps, 64Kbps와 같은 일방적인 속도를 선택할 수 있는 옵션만을 제공합니다.</p>\n<p>하지만, 신뢰성이 보장되지 않기 때문에 UDP로 데이터를 보내면 손실되는 데이터가 발생합니다. 그렇기에 동영상의 경우 데이터가 많이 소실되었다면 이상한 화면이 나올 수도 있지만, 데이터 몇 개 소실로는 전체 화면에서 점 몇 개가 제대로 안나오는 수준에 불과하게 됩니다. 그렇기에 사람들이 크게 불평하지 않을 수준의 영상만 제공할 필요가 있다면 TCP를 쓸 이유가 없습니다. 그렇기에 실시간 스트리밍을 하는 곳에서 주로 사용합니다.</p>\n<p>이로 인해 UDP Header를 확인해보면 목적지 주소, 데이터 순서, checksum과 실데이터만 포함되고, 확인응답 같은 것이 없습니다. 그래서, TCP보다 용량이 가볍고 송신속도가 빠르게 작동됩니다. 하지만 확인응답을 하지 못하기때문에 신뢰도가 TCP보다 떨어지게 됩니다. 따라서 <code class="language-text">UDP는 비연결형이라 부르며 TCP는 연결형이라 구분합니다.</code></p>\n<div class=\'text-center\'>\n  <img src="/images/contents/20180426/network/udp-header.png" width="100%">\n</div>\n<h2>TCP란?</h2>\n<p>TCP(Transmission Control Protocol)의 축약어로 컴퓨터가 다른 컴퓨터와 데이터 통신을 하기 위한 프로토콜의 일종입니다. TCP는 세계 통신표준으로 개발된 OSI 모형에서 4번째 계층인 전송계층(Transport Layer)에서 사용하는 프로토콜로, 보통 하위 계층(Network Layer)에서 사용되는 IP와 엮어서 TCP/IP로 표현합니다.</p>\n<p>TCP가 개발된 배경은 군사적인 목적으로 어느 환경에서도 정상적으로 동작되는 네트워크 개발하기 위함이었습니다. 이를 위해 사용된 것이 패킷교환(Packet Switching) 방식으로 목적지가 정해져있지만 해당 목적지까지의 경로는 정해져 있지 않습니다. 따라서 서로 연결이 가능한 회선 하나만 남아있어도 통신이 끊어지지 않고 계속될 수 있는 통신환경을 구축하였습니다. 다만 이 방식은 어떻게든 통신을 유지하는 것이 목적이므로 네트워크 환경의 안정성은 떨어질 수 밖에 없습니다. 이로 인해 중간에 데이터가 유실되거나 너무 늦게 전달되는 등 신뢰성이 떨어지는 문제가 있었는데, 이러한 문제점들을 해결하고자 신뢰성을 보장할 수 있는 통신 프로토콜을 연구하게 됐고, 이에 따라 나온 것이 TCP입니다.</p>\n<h2>TCP, 신뢰성 보장과 흐름 제어(Flow Control)</h2>\n<p>신뢰성 보장을 알아보기 위해서는 TCP의 Header 정보를 보면 도움이 될것 같습니다. TCP header에는 목적지 주소, 확인응답, 오류 검출 및 복원, 실제 데이터 등이 포함됩니다. 그 중 UDP와 구분되는 부분이 바로 <code class="language-text">확인응답(Acknowledge)</code>입니다. 즉, TCP는 신뢰성을 보장하기 위해 ACK을 기반으로 재전송과 타임아웃 방법을 이용하고 있습니다.</p>\n<div class=\'text-center\'>\n  <img src="/images/contents/20180426/network/tcp-header.png" width="100%">\n</div>\n<p>TCP의 데이터는 물줄기처럼 흐른다고 해서 stream이라는 표현을 사용하는데, 이는 결국 패킷(Packet)을 의미합니다. TCP의 패킷이 전송되어 이에 응답할 때마다 ACK이라는 별도의 패킷을 생성하여 다음 필요한 패킷에 대해 알려주며 응답합니다. 만약, ACK 이 일정 시간 동안 오지 않으면 전송자는 패킷을 다시 보냅니다. 다시 보내는 경우는 크게 2가지 입니다.</p>\n<ol>\n<li>전송되는 패킷이 목적지까지 제대로 전송되지 않은 경우</li>\n<li>ACK가 전송자에게 제대로 전송되지 않은 경우</li>\n</ol>\n<p>하지만, 위 두 상황을 확실히 구분하는 것이 어렵기 때문에 일정기간 동안 응답을 받지 못하면 무조건 패킷을 다시 전송합니다.</p>\n<div class=\'text-center\'>\n  <img src="/images/contents/20180426/network/tcp.jpg" width="100%">\n</div>\n<p>만약, 다시 보냈음에도 불구하고 일정시간을 초과하여 응답받지 못하면 이를 전송자에게 알려주고 종료합니다(타임아웃).</p>\n<h2>TCP, 신뢰성을 위한 ACK 2가지 방법</h2>\n<p>물론 TCP가 이렇게 패킷을 하나씩만 전송하지는 않습니다. <code class="language-text">Sliding window</code>라는 개념(창문을 조금 열고 많이 열고 하는 것처럼 양을 조절한다는 뜻에서 Sliding window입니다.)을 이용해서 보낼 수 있는 만큼을 연속으로 계속 전송합니다. 하지만 이처럼 ACK을 받지 않고 연속으로 전송하는 것은 제한이 있습니다. 그리고, ACK을 못 받는 순간이오면 TCP는 더는 아무것도 전송하지 않고 재전송이 결정될 때까지 대기합니다.</p>\n<p>그런데, 한 번에 하나씩 전송하고 응답받는 것이 아니라 여러 개를 연속으로 전송한다면, 가운데 패킷이 유실된 경우는 어떻게 될까요? TCP의 기본 동작은 뭔가 유실되면 그 뒤에 아무리 정상적으로 전송되었어도 전부 버리고 유실된 것부터 재전송합니다. 하지만, 이건 상당히 비효율적입니다. 이 문제를 해결하기 위해 등장하게 되는 방법이 바로 <code class="language-text">cumulative ACK</code>와 <code class="language-text">selective ACK</code>입니다.</p>\n<p>Cumulative ACK은 한 번에 여러 개 패킷을 전송하더라도 문제가 되는 ACK 하나만 기억하면 됩니다. 반면 selective ACK은 여러개 패킷에 대해서 어떤 ACK를 응답받았는지에 대해 모두 기억해야 합니다. 다시 말해 cumulative ACK은 기억해야 되는 것이 적고 구현도 간단한 반면, selective ACK은 기억해야되는 것이 많고 구현도 복잡합니다. 이는 효율성과 복잡성에 대한 전형적인 트레이드 오프라고 할 수 있습니다.</p>\n<p>초기의 TCP 는 cumulative ACK 을 기반으로 했으나, 응답받지 못한 것을 기준으로 전송된 뒤에 것을 전부 버리다보니 비효율적입니다. 그 때문에 나중에는 selective ACK 을 TCP의 옵션으로 채택했습니다.</p>\n<h2>TCP, 혼잡 제어(Congestion Control)</h2>\n<p>사실 초기 TCP는 혼잡제어라는 요소가 없었습니다. 위에서 언급했듯이 초기 TCP는 cumulactive ACK와 selective ACK를 사용하면서 한정된 네트워크 대역폭에서 소수의 사람들이 쓸 때는 문제가 없었습니다. 하지만, 1986년 사용자가 점점 늘어나면서 네트워크 회선이 부하를 감당하지 못하는 문제가 발생하였습니다. 이를 해결하기 위해 등장하게 된 요소가 바로 혼잡 제어입니다.</p>\n<p>단순한 예로 통신을 시작할 때 일단 보내는 쪽에서 30 ~ 35쪽까지 자료를 보내서 상대가 잘 받았으면 이후 보내는 양을 조금씩 늘려보는 방식을 취합니다. 그러다가, 상대가 데이터를 제대로 받지 못한 것이 확인되면 그 즉시 보내는 양을 확 줄입니다. 그리고 다시 조금씩 보내는 양을 늘렸다가 또 못 받으면 줄여버리는 형태로 보내는 양을 조절합니다. 보내는 양을 늘리고 줄이는 방법은 AIMD(Addictive Increase/Multicative Decrease)를 채택하고 있으나 더 자세한 내용은 <a href="https://ko.wikipedia.org/wiki/TCP_%ED%98%BC%EC%9E%A1_%EB%B0%A9%EC%A7%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98">TCP 혼잡 방지 알고리즘</a>을 확인하면 큰 도움이 될 것입니다.</p>\n<p>그리고 이때부터 패킷이 유실되면 TCP를 전송하는 쪽에서 얼른 양을 줄이는 혼잡 제어 요소가 추가되었습니다.</p>\n<h2>TCP/UDP의 포트 목록</h2>\n<p>일반적으로 포트 번호는 다음과 같이 세 가지로 나눌 수 있습니다.</p>\n<ul>\n<li>\n<p>0번 ~ 1023번: 잘 알려진 포트 (well-known port)</p>\n<ul>\n<li>잘 알려진 포트(well-known port)는 특정한 쓰임새를 위해서 IANA에서 할당한 TCP 및 UDP 포트 번호의 일부입니다.</li>\n</ul>\n</li>\n<li>1024번 ~ 49151번: 등록된 포트 (registered port)</li>\n<li>49152번 ~ 65535번: 동적 포트 (dynamic port)</li>\n</ul>\n<p><code class="language-text">대부분의 유닉스 계열 운영 체제의 경우, 잘 알려진 포트를 열려면 루트 권한이 있어야 한다.</code> 이 번호는 강제적으로 지정된 것은 아니며, IANA의 권고안입니다. 가끔 각 포트 번호를 그대로 사용하지 않고 다른 용도로 사용하기도 합니다.</p>\n<p>자세한 Port 정보를 확인하시고 싶으시면 <a href="https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D">TCP/UDP의<em>포트</em>목록</a>를 참조해주세요.</p>\n<h2>개인적으로 추천하는 체크사항</h2>\n<ul>\n<li>Youtube는 TCP인가 UDP인가?</li>\n<li>WebRTC는 TCP인가 UDP인가?</li>\n</ul>\n<h2>Outro</h2>\n<p>HTTP를 이용하면서 기반이되는 IP와 TCP, UDP에 대해 알아보는 유익한 시간을 가졌습니다. 먼저, <a href="http://www.inven.co.kr/webzine/news/?news=165870">문대경 - 아이펀팩토리 대표: 인벤 - TCP/UDP 차이</a>라는 글에 대해 너무 감사하다는 말씀드리고 싶습니다. 해당 글과 WiKi를 중점으로 개념을 학습하고 하나하나 읽고 수정하면서 네트워크 기본 개념에 대해 숙지할 수 있는 좋은 기회가 되었습니다.</p>\n<p>어떻게 보면 이미 좋은 글들인데, 이러한 노력이 필요한가라고 생각할 수 있습니다. 하지만, 개인적으로 이렇게 몇 시간 동안 내용을 읽고 수정하면 간단하게 검색한 글을 읽는것 보다 훨씬 내용에 대한 이해와 숙지가 빨라진다고 생각합니다. 특히, 이번 TCP 관련 역사와 UDP와의 차이, TCP Header, Acknowledge 등에 대한 개념을 인지할 수 있었습니다. 관련 내용을 기반으로 HTTP에 대한 시각과 HTTP의 한계점 그리고, 관련된 정보를 더욱 더 알아볼 수 있는 기회를 가지게 되었습니다. 다음에는 TCP/IP/HTTP 등과 연관된 내용도 정리해보겠습니다.</p>\n<p>이상 부족한 글을 마치겠습니다. 감사합니다.</p>\n<h2>References</h2>\n<ul>\n<li><a href="https://namu.wiki/w/IP">Namu WiKi - IP란</a></li>\n<li><a href="https://namu.wiki/w/UDP">Namu WiKi - UDP란</a></li>\n<li><a href="http://www.inven.co.kr/webzine/news/?news=165870">TCP, 그리고 UDP 쉽게 알아보는 두 개념과 차이점</a></li>\n<li><a href="https://www.lifewire.com/tcp-headers-and-udp-headers-explained-817970">TCP Headers and UDP Headers Explained</a></li>\n<li><a href="https://ciscoskills.net/2011/03/28/understanding-udp/">Understanding UDP</a></li>\n<li><a href="https://ko.wikipedia.org/wiki/TCP_%ED%98%BC%EC%9E%A1_%EB%B0%A9%EC%A7%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98">WiKi - TCP 혼잡방지 알고리즘</a></li>\n<li><a href="https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D">TCP/UDP의<em>포트</em>목록</a></li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP의 관심을 갖고 책을 읽으면서 학습을 하고 있지만, Network에 더 근본적인 IP와 UDP, TCP에 대해서 이해해야 할 필요가 있다고 생각하여 적게되었습니다. 관련 사항에 간단하게 읽어본적은 있지만 읽어보는 것과 이를 숙지하기 위해 반복적으로 학습하는 것은 큰차이가 있기에 이번 시간을 계기로 이와 관련한 내용을 숙지하고자 합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"IP란?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"IP에서 인터넷(the Internet) 이름자체가 ‘inter-’ 라는 접두사와 ‘네트워크’를 의미하는 ‘net’이 합쳐진 말로, 인터넷은 네트워크들을 연동하는 것이라고 말할 수 있습니다. 즉, IP(Internet Protocol)라는 이름은 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"네트워크를 연동하는 프로토콜"}]},{type:"text",value:"이라는 뜻으로 해석하면 쉬울 것 같습니다. IP는 OSI의 3 Layer(Network Layer)와 Internet Protocol Suite의 3 Layer(Internet Layer)에 위치하고 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"IP라는 이름처럼 어디에서든 간단하게 IP만 올릴 수 있으면 어떤 네트워크든 연결할 수 있습니다. 그래서, IP는 아래 그림처럼 모래 시계의 허리에 비유하여 설명할 수 있습니다. 그림처럼 IP 아래로는 네트워크를 만들 수 있는 다양한 하드웨어 기술 (Ethernet, WiFi 등…) 이 존재하고 있고, IP 위로는 다양한 응용 서비스(HTTP, FTP 등…)들이 동작할 수 있습니다. 간단한 예로 컴퓨터에 연결하는 랜선은 Ethernet, 모바일로 무선 네트워크를 이용하는 것은 WiFI, 개발 간 API를 호출할 때는 HTTP를 이영할 수 있는 것입니다. 이처럼 IP를 기반으로하면 어떠한 디바이스와 서버, 혹은 사용자가 사용해도 TCP/UDP와 관련된 네트워크 기능들을 큰 어려움없이 사용할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["text-center"]},children:[{type:"text",value:"\n  "},{type:"element",tagName:"img",properties:{src:"/images/contents/20180426/network/ip.jpg",width:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"IP의 특징은 연결을 보장하기 위한 노력은 하지만 100% 보장해주지 않습니다. 이를 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Best-effort"}]},{type:"text",value:"라고 표현하는데, IP 가 best-effort가 될 수 밖에 없는 이유는 서로 다른 특성의 여러 네트워크를 연동해야 되기 때문입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"UDP란?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"UDP(User Datagram Protocol)는 컴퓨터가 다른 컴퓨터와 데이터 통신을 하기 위한 프로토콜의 일종입니다. UDP는 세계 통신표준으로 개발된 OSI 모형에서 4번째 계층인 전송 계층(Transport Layer)에서 사용하는 프로토콜입니다. 동일 계층(OSI 4계층)에서 사용하는 또다른 프로토콜로 TCP가 존재합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"UDP에 설명하기 앞서 같은 계층에 있는 TCP를 설명하면 좋을 것 같습니다. UDP와 같은 계층에 있는 TCP는 데이터 신뢰성을 보장하기 위한 방식이기 때문에 누락된 데이터를 모두 받기위한 메커니즘이 정의되어 있습니다. 그러므로, 이메일이나 파일전송과 같은 100% 데이터의 보장이 필요한 분야에서 필수요소로 사용되고 있습니다. 하지만, 실시간 스트리밍 서비스에서 TCP는 걸림돌로 작용됩니다. TCP는 전체 영상에서 점 하나 못받은 것 때문에 버퍼링으로 재생이 중지되며, 혼잡제어를 위해 보내는 양도 조절하기 때문에 영상 데이터의 퀄리티가 오락가락하는 문제를 발생시킵니다. 결국 이를 해결하기 위하여 제시된 것이 UDP를 사용하는 방법입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"UDP의 특징은 간단하게 TCP의 모든 신뢰성 매커니즘이 기능이 없다고 보면됩니다."}]},{type:"text",value:" 그냥 상대와 접속했고, 전송속도를 48Kbps로 설정했으면 무조건 48Kbps로 데이터를 일방적으로 전송하기만 합니다. 받는 쪽에서 데이터를 제대로 받고 있는지는 신경을 쓰지 않습니다. 그렇기 때문에 UDP로 데이터를 제공할 경우 32Kbps, 48Kbps, 64Kbps와 같은 일방적인 속도를 선택할 수 있는 옵션만을 제공합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"하지만, 신뢰성이 보장되지 않기 때문에 UDP로 데이터를 보내면 손실되는 데이터가 발생합니다. 그렇기에 동영상의 경우 데이터가 많이 소실되었다면 이상한 화면이 나올 수도 있지만, 데이터 몇 개 소실로는 전체 화면에서 점 몇 개가 제대로 안나오는 수준에 불과하게 됩니다. 그렇기에 사람들이 크게 불평하지 않을 수준의 영상만 제공할 필요가 있다면 TCP를 쓸 이유가 없습니다. 그렇기에 실시간 스트리밍을 하는 곳에서 주로 사용합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이로 인해 UDP Header를 확인해보면 목적지 주소, 데이터 순서, checksum과 실데이터만 포함되고, 확인응답 같은 것이 없습니다. 그래서, TCP보다 용량이 가볍고 송신속도가 빠르게 작동됩니다. 하지만 확인응답을 하지 못하기때문에 신뢰도가 TCP보다 떨어지게 됩니다. 따라서 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"UDP는 비연결형이라 부르며 TCP는 연결형이라 구분합니다."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["text-center"]},children:[{type:"text",value:"\n  "},{type:"element",tagName:"img",properties:{src:"/images/contents/20180426/network/udp-header.png",width:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"TCP란?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"TCP(Transmission Control Protocol)의 축약어로 컴퓨터가 다른 컴퓨터와 데이터 통신을 하기 위한 프로토콜의 일종입니다. TCP는 세계 통신표준으로 개발된 OSI 모형에서 4번째 계층인 전송계층(Transport Layer)에서 사용하는 프로토콜로, 보통 하위 계층(Network Layer)에서 사용되는 IP와 엮어서 TCP/IP로 표현합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"TCP가 개발된 배경은 군사적인 목적으로 어느 환경에서도 정상적으로 동작되는 네트워크 개발하기 위함이었습니다. 이를 위해 사용된 것이 패킷교환(Packet Switching) 방식으로 목적지가 정해져있지만 해당 목적지까지의 경로는 정해져 있지 않습니다. 따라서 서로 연결이 가능한 회선 하나만 남아있어도 통신이 끊어지지 않고 계속될 수 있는 통신환경을 구축하였습니다. 다만 이 방식은 어떻게든 통신을 유지하는 것이 목적이므로 네트워크 환경의 안정성은 떨어질 수 밖에 없습니다. 이로 인해 중간에 데이터가 유실되거나 너무 늦게 전달되는 등 신뢰성이 떨어지는 문제가 있었는데, 이러한 문제점들을 해결하고자 신뢰성을 보장할 수 있는 통신 프로토콜을 연구하게 됐고, 이에 따라 나온 것이 TCP입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"TCP, 신뢰성 보장과 흐름 제어(Flow Control)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"신뢰성 보장을 알아보기 위해서는 TCP의 Header 정보를 보면 도움이 될것 같습니다. TCP header에는 목적지 주소, 확인응답, 오류 검출 및 복원, 실제 데이터 등이 포함됩니다. 그 중 UDP와 구분되는 부분이 바로 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"확인응답(Acknowledge)"}]},{type:"text",value:"입니다. 즉, TCP는 신뢰성을 보장하기 위해 ACK을 기반으로 재전송과 타임아웃 방법을 이용하고 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["text-center"]},children:[{type:"text",value:"\n  "},{type:"element",tagName:"img",properties:{src:"/images/contents/20180426/network/tcp-header.png",width:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"TCP의 데이터는 물줄기처럼 흐른다고 해서 stream이라는 표현을 사용하는데, 이는 결국 패킷(Packet)을 의미합니다. TCP의 패킷이 전송되어 이에 응답할 때마다 ACK이라는 별도의 패킷을 생성하여 다음 필요한 패킷에 대해 알려주며 응답합니다. 만약, ACK 이 일정 시간 동안 오지 않으면 전송자는 패킷을 다시 보냅니다. 다시 보내는 경우는 크게 2가지 입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"전송되는 패킷이 목적지까지 제대로 전송되지 않은 경우"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ACK가 전송자에게 제대로 전송되지 않은 경우"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"하지만, 위 두 상황을 확실히 구분하는 것이 어렵기 때문에 일정기간 동안 응답을 받지 못하면 무조건 패킷을 다시 전송합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["text-center"]},children:[{type:"text",value:"\n  "},{type:"element",tagName:"img",properties:{src:"/images/contents/20180426/network/tcp.jpg",width:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"만약, 다시 보냈음에도 불구하고 일정시간을 초과하여 응답받지 못하면 이를 전송자에게 알려주고 종료합니다(타임아웃)."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"TCP, 신뢰성을 위한 ACK 2가지 방법"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"물론 TCP가 이렇게 패킷을 하나씩만 전송하지는 않습니다. "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Sliding window"}]},{type:"text",value:"라는 개념(창문을 조금 열고 많이 열고 하는 것처럼 양을 조절한다는 뜻에서 Sliding window입니다.)을 이용해서 보낼 수 있는 만큼을 연속으로 계속 전송합니다. 하지만 이처럼 ACK을 받지 않고 연속으로 전송하는 것은 제한이 있습니다. 그리고, ACK을 못 받는 순간이오면 TCP는 더는 아무것도 전송하지 않고 재전송이 결정될 때까지 대기합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"그런데, 한 번에 하나씩 전송하고 응답받는 것이 아니라 여러 개를 연속으로 전송한다면, 가운데 패킷이 유실된 경우는 어떻게 될까요? TCP의 기본 동작은 뭔가 유실되면 그 뒤에 아무리 정상적으로 전송되었어도 전부 버리고 유실된 것부터 재전송합니다. 하지만, 이건 상당히 비효율적입니다. 이 문제를 해결하기 위해 등장하게 되는 방법이 바로 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"cumulative ACK"}]},{type:"text",value:"와 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"selective ACK"}]},{type:"text",value:"입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Cumulative ACK은 한 번에 여러 개 패킷을 전송하더라도 문제가 되는 ACK 하나만 기억하면 됩니다. 반면 selective ACK은 여러개 패킷에 대해서 어떤 ACK를 응답받았는지에 대해 모두 기억해야 합니다. 다시 말해 cumulative ACK은 기억해야 되는 것이 적고 구현도 간단한 반면, selective ACK은 기억해야되는 것이 많고 구현도 복잡합니다. 이는 효율성과 복잡성에 대한 전형적인 트레이드 오프라고 할 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"초기의 TCP 는 cumulative ACK 을 기반으로 했으나, 응답받지 못한 것을 기준으로 전송된 뒤에 것을 전부 버리다보니 비효율적입니다. 그 때문에 나중에는 selective ACK 을 TCP의 옵션으로 채택했습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"TCP, 혼잡 제어(Congestion Control)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"사실 초기 TCP는 혼잡제어라는 요소가 없었습니다. 위에서 언급했듯이 초기 TCP는 cumulactive ACK와 selective ACK를 사용하면서 한정된 네트워크 대역폭에서 소수의 사람들이 쓸 때는 문제가 없었습니다. 하지만, 1986년 사용자가 점점 늘어나면서 네트워크 회선이 부하를 감당하지 못하는 문제가 발생하였습니다. 이를 해결하기 위해 등장하게 된 요소가 바로 혼잡 제어입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"단순한 예로 통신을 시작할 때 일단 보내는 쪽에서 30 ~ 35쪽까지 자료를 보내서 상대가 잘 받았으면 이후 보내는 양을 조금씩 늘려보는 방식을 취합니다. 그러다가, 상대가 데이터를 제대로 받지 못한 것이 확인되면 그 즉시 보내는 양을 확 줄입니다. 그리고 다시 조금씩 보내는 양을 늘렸다가 또 못 받으면 줄여버리는 형태로 보내는 양을 조절합니다. 보내는 양을 늘리고 줄이는 방법은 AIMD(Addictive Increase/Multicative Decrease)를 채택하고 있으나 더 자세한 내용은 "},{type:"element",tagName:"a",properties:{href:"https://ko.wikipedia.org/wiki/TCP_%ED%98%BC%EC%9E%A1_%EB%B0%A9%EC%A7%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"},children:[{type:"text",value:"TCP 혼잡 방지 알고리즘"}]},{type:"text",value:"을 확인하면 큰 도움이 될 것입니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"그리고 이때부터 패킷이 유실되면 TCP를 전송하는 쪽에서 얼른 양을 줄이는 혼잡 제어 요소가 추가되었습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"TCP/UDP의 포트 목록"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"일반적으로 포트 번호는 다음과 같이 세 가지로 나눌 수 있습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"0번 ~ 1023번: 잘 알려진 포트 (well-known port)"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"잘 알려진 포트(well-known port)는 특정한 쓰임새를 위해서 IANA에서 할당한 TCP 및 UDP 포트 번호의 일부입니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"1024번 ~ 49151번: 등록된 포트 (registered port)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"49152번 ~ 65535번: 동적 포트 (dynamic port)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"대부분의 유닉스 계열 운영 체제의 경우, 잘 알려진 포트를 열려면 루트 권한이 있어야 한다."}]},{type:"text",value:" 이 번호는 강제적으로 지정된 것은 아니며, IANA의 권고안입니다. 가끔 각 포트 번호를 그대로 사용하지 않고 다른 용도로 사용하기도 합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"자세한 Port 정보를 확인하시고 싶으시면 "},{type:"element",tagName:"a",properties:{href:"https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D"},children:[{type:"text",value:"TCP/UDP의"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"포트"}]},{type:"text",value:"목록"}]},{type:"text",value:"를 참조해주세요."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"개인적으로 추천하는 체크사항"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Youtube는 TCP인가 UDP인가?"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"WebRTC는 TCP인가 UDP인가?"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Outro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HTTP를 이용하면서 기반이되는 IP와 TCP, UDP에 대해 알아보는 유익한 시간을 가졌습니다. 먼저, "},{type:"element",tagName:"a",properties:{href:"http://www.inven.co.kr/webzine/news/?news=165870"},children:[{type:"text",value:"문대경 - 아이펀팩토리 대표: 인벤 - TCP/UDP 차이"}]},{type:"text",value:"라는 글에 대해 너무 감사하다는 말씀드리고 싶습니다. 해당 글과 WiKi를 중점으로 개념을 학습하고 하나하나 읽고 수정하면서 네트워크 기본 개념에 대해 숙지할 수 있는 좋은 기회가 되었습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"어떻게 보면 이미 좋은 글들인데, 이러한 노력이 필요한가라고 생각할 수 있습니다. 하지만, 개인적으로 이렇게 몇 시간 동안 내용을 읽고 수정하면 간단하게 검색한 글을 읽는것 보다 훨씬 내용에 대한 이해와 숙지가 빨라진다고 생각합니다. 특히, 이번 TCP 관련 역사와 UDP와의 차이, TCP Header, Acknowledge 등에 대한 개념을 인지할 수 있었습니다. 관련 내용을 기반으로 HTTP에 대한 시각과 HTTP의 한계점 그리고, 관련된 정보를 더욱 더 알아볼 수 있는 기회를 가지게 되었습니다. 다음에는 TCP/IP/HTTP 등과 연관된 내용도 정리해보겠습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이상 부족한 글을 마치겠습니다. 감사합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://namu.wiki/w/IP"},children:[{type:"text",value:"Namu WiKi - IP란"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://namu.wiki/w/UDP"},children:[{type:"text",value:"Namu WiKi - UDP란"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.inven.co.kr/webzine/news/?news=165870"},children:[{type:"text",value:"TCP, 그리고 UDP 쉽게 알아보는 두 개념과 차이점"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://www.lifewire.com/tcp-headers-and-udp-headers-explained-817970"},children:[{type:"text",value:"TCP Headers and UDP Headers Explained"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://ciscoskills.net/2011/03/28/understanding-udp/"},children:[{type:"text",value:"Understanding UDP"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://ko.wikipedia.org/wiki/TCP_%ED%98%BC%EC%9E%A1_%EB%B0%A9%EC%A7%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98"},children:[{type:"text",value:"WiKi - TCP 혼잡방지 알고리즘"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://ko.wikipedia.org/wiki/TCP/UDP%EC%9D%98_%ED%8F%AC%ED%8A%B8_%EB%AA%A9%EB%A1%9D"},children:[{type:"text",value:"TCP/UDP의"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"포트"}]},{type:"text",value:"목록"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/Network-udp-tcp/",prefix:"2018-06-02"},frontmatter:{author:"Seolhun",category:"Network",cover:{childImageSharp:{resize:{src:"/static/network-73a6b5a61f5d4dbe4e79a7c871100614-160fa.png"}}},description:null,subTitle:"HTTP 이해를 위한 기본 네트워크 지식, IP, UDP, TCP",tags:null,title:"[Network] IP, UDP, TCP란 무엇인가?"}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다.</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/Network-udp-tcp/"}}}});
//# sourceMappingURL=path---network-udp-tcp-ceb922fd4ee4a518ee31.js.map