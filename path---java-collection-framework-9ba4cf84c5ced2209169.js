webpackJsonp([43403468993740],{792:function(e,t){e.exports={data:{post:{id:"/Users/hunseol/git/seolhun.github.io/content/posts/2017-05-03--Java-collection-framework/index.md absPath of file >>> MarkdownRemark",html:"<p>안녕하세요, 설훈입니다.\n이번에는 Java의 Collection Framework에 대해서 알아보겠습니다.</p>\n<h2>Intro</h2>\n<p>자바를 이용하여 프로그래밍을 하다보면 자료구조에 대한 필요성을 느끼게 된다. 특히, 이번 설문지 프로젝트를 통해 설문지를 구성하면서 자료를 담아내는 List와 Set, Map 등 기본지식의 부족을 느끼게 되었다. 이를 이해하기 위해서는, Java에 기본적으로 제공되는 Collection Framework를 이해할 필요가 있다고 생각했다.</p>\n<p>Collection Framework는 어떻게보면 자료구조의 기본 중에 기본이다. 이를 알지 못하고 프로그래밍을 하다보면, 한계에 봉착할 수 있다. 비전공자로서 실무부터 배우는 프로그래밍은 향 후 한계에 봉착된다. 현 나의 시점이 그러하며, 무엇인가 해결하기 위해 고민하던 끝에, 정보처리기사의 기본적인 내용 또는 전공자들이 4년 동안 배우는 기본 지식이 내게는 부족하구나라는 결론에 이르렀다. 이는 자료구조, 알고리즘, 운영체제 등의 기본지식의 중요성이다. 기본지식 없이 쌓아올리는 탑은 무너지기 마련이다. 그래서, 이를 먼저 해결하기 위해, Java의 Collection Framework를 이해해보고자 한다.</p>\n<h2>Goal</h2>\n<ul>\n<li>Collection Framework는 List와 Set의 Interface로 구성되어있다. 추가적으로 Map의 Interface로 구성된 다양한 Map들이 존재하지만, 이는 Collection Framework에 포함되지 않는다. 먼저, Collection Framework(List, Set)을 이해하고, 추가적으로 Map을 이해하여 올바른 자료구조를 사용하고자 한다.</li>\n<li>3개의 차이점과 장단점을 이해하고, 예제를 통해 여러가지 테스트를 하여 경험을 나누고자 한다.</li>\n</ul>\n<h2>Contents</h2>\n<h4>1) Java Collection Framework 구조</h4>\n<sub>\n    <p>- Collection Framework1</p>\n    <img src='/images/contents/20170503/1.jpg' width='100%' height='100%'>\n</sub>\n<sub>\n    <p>- Collection Framework2</p>\n    <img src='/images/contents/20170503/2.jpg' width='100%' height='100%'>\n</sub>\n<h2>3-1. List에 대해서</h2>\n<ol>\n<li>객체를 인덱스로 관리하기 때문에 객체를 저장하면 자동 인덱스가 부여되고 인덱스로 객체를 검색, 삭제할 수 있는 기능을 제공합니다.</li>\n<li>\n<p>List는 객체 자체를 저장하는 것이 아니라, 해당하는 인덱스에 객체의 주소를 참조하여 저장합니다.\n<sub></p>\n<p>- About List</p>\n<img src='/images/contents/20170503/3.jpg' width='100%' height='100%'>\n</sub>\n</li>\n</ol>\n<h4>3-1-1. ArrayList</h4>\n<ol>\n<li>ArratList는 저장 용량을 초과한 객체들이 들어오면 자동적으로 저장용량이 늘어난다. (index 자동 증가, 초기 10)</li>\n<li>ArrayList 초기값은 인덱스 0에 삽입된다.</li>\n<li>특정 인덱스에 객체를 삽입하면 해당 인덱스 뒤에 인덱스가 차례대로 1씩 증가./감소한다. 즉, 객체의 삽입/삭제가 자주 있을 때에 ArrayList는 비효율적이다. => LinkedList가 효율적</li>\n</ol>\n<h4>3-1-2. LinkedList</h4>\n<ol>\n<li>LinkedList는 인접 참조를 링크해서 체인처럼 관리한다.</li>\n<li>LinkedList는 특정 인덱스의 객체를 제거하면, 앞뒤 링크만 변경되고 나머지 링크는 변경되지 않는다. 즉, 위에 ArrayList에서 얘기했던 것처럼 삽입/삭제가 빈번히 있을 때 LinkedList를 쓰는것이 효율적이다.</li>\n</ol>\n<sub>\n    <p>- LinkedList</p>\n    <img src='/images/contents/20170503/4.jpg' width='100%' height='100%'>\n</sub>\n<sub>\n    <p>- LinkedList vs ArrayList</p>\n    <img src='/images/contents/20170503/5.jpg' width='100%' height='100%'>\n</sub>\n<h4>3-1-3. Vector</h4>\n<ol>\n<li>Vector는 ArrayList와 같은 구조를 갖고있다.</li>\n<li>차이점은 Vector는 동기화(Syncronized)된 메소드로 구성되어있기 때문에 Multi Thread가 동시에 이 메소드를 실행할 수 없다. 그러므로, 하나의 스레드가 실행을 완료해야만 다른 스레드가 실행할 수 있다. (Thread safe)</li>\n</ol>\n<h2>3-2. Set에 대해서</h2>\n<ol>\n<li>Set Collection은 List처럼 Index로 저장 순서를 유지하지 않습니다.</li>\n<li>객체를 중복 저장할 수 없으며, 하나의 Null만 존재합니다.</li>\n</ol>\n<sub>\n    <p>- Set</p>\n    <img src='/images/contents/20170503/6.jpg' width='100%' height='100%'>\n</sub>\n<h4>3-2-1. HashSet</h4>\n<ol>\n<li>순서 없이 저장하고, 동일한 객체는 중복 저장하지 않는다.</li>\n<li>동일한 객체란, 객체를 저장하기 전에 hashcode() 메소드를 호출해서 해시코드를 얻어내며, 이미 저장되어 있는 객체들의 해시코드와 비교한다. 만약, 동일한 hashcode가 있다면 다시 equals() 메소드로 객체를 비교해서 ture가 나오면 동일한 객체로 판단하고 중복저장을 하지 않는다.</li>\n</ol>\n<h4>3-2-2. TreeSet</h4>\n<sub>\n    <p>- TreeSet</p>\n    <img src='/images/contents/20170503/7.jpg' width='100%' height='100%'>\n</sub>\n1. TreeSet은 이진트리(binary tree)를 기반으로한 Set Collection이다.\n2. TreeSet은 2개의 자식 노드를 참조하기 위한 2개의 변수로 구성된다.\n3. 또한, 객체를 저장하면 자동으로 정렬되는데 부모값과 비교해서 낮은 것은 왼쪽 자식 노드에, 높은 것은 오른쪽 자식 노드에 저장한다.\n4. Set 인터페이스 타입 변수에 대입해도 되지만 TreeSet 클래스 타입으로 대입한 이유는 객체를 찾거나 범위 검색과 관련된 메소드를 사요하기 위해서이다.\n<sub>\n    <p>- TreeSet의 검색 메소드</p>\n    <img src='/images/contents/20170503/8.jpg' width='100%' height='100%'>\n</sub>\n<h2>3-3. Map에 대해서</h2>\n<ul>\n<li>\n<p>Key와 Value를 저장하며, Key는 중복될 수 없다. 키와 값은 모두 객체이다. 만약, 기존에 저장된 키와 동일한 키로 값을 저장하면 기존 값은 없어지고 새로운 값으로 대체 된다.\n<sub></p>\n<p>- Map</p>\n<img src='/images/contents/20170503/9.jpg' width='100%' height='100%'>\n</sub>\n</li>\n</ul>\n<h4>3-3-1. HashMap</h4>\n<ol>\n<li>HashMap의 키로 사용할 객체는 hashCode()와 equlas() 메소드를 재정의해서 동등 객체가 될 조건을 정해야 한다.</li>\n<li>키 값은 주로 String을 사용하지만, Object는 모든 키가 될 수 있다.</li>\n</ol>\n<h4>3-3-2. HashTable</h4>\n<ol>\n<li>HashMap과 동일 구조를 갖고 있어, hashCode()와 equals() 메소드를 재정의해서 동등 객체가 될 조건을 정해야 한다.</li>\n<li>HashMap과의 차이점은 동기화된(Syncronized) 메소드로 구성되어 있어, Multi Thread 환경에서 안전하게 객체를 추가/삭제 등이 가능하다.(Thread safe), (ArrayList와 Vector의 관계와 유사)</li>\n</ol>\n<h4>3-3-3. Properties</h4>\n<p>HashTable의 하위 클래스이기 때문에 HashTable의 모든 특징을 그대로 가지고 있다.\n차이점은, HashTable은 키와 값을 다양한 타입으로 지정이 가능하지만, Properties는 키와 값을 String 타입으로 제한한 Collection 이다.\n주로, 옵션 정보, 다국어 정보 등을 저장한다.</p>\n<h4>3-3-4. TreeMap</h4>\n<sub>\n    <p>- TreeMap</p>\n    <img src='/images/contents/20170503/10.jpg' width='100%' height='100%'>\n</sub>\n1. TreeMap은 이진트리(binary tree)를 기반으로 한 Map Collection이다.\n2. TreeSet과 같은 구조를 같고 있지만, TreeSet과의 차이점은 키와 값이 저장된 Map.Entry를 저장하는 것.\n3. TreeSet과 동일하게 낮은 값이 왼쪽에 높은 값이 오른쪽 노드에 위치한다.\n<sub>\n    <p>- TreeMap의 검색 메소드</p>\n    <img src='/images/contents/20170503/11.jpg' width='100%' height='100%'>\n</sub>\n<h2>Ontro</h2>\n<p>각각의 자료구조가 어떻게 구현 되었는지를 아는 것은 중요하다. 하지만 최소한 어떻게 구현되었는지까지 모른다면, 각각의 구조가 언제 어떻게 사용되는지를 아는 것이 프로그래머로서 기본이라고 생각된다. 알아야 효율적으로 데이터를 관리/사용 할 수 있기 때문이다.</p>\n<p>이번 Collection Framework를 통해 List, Set, Map 등에 대해서 알아보았으며, 각각의 클래스와 메소드를 잘 이해하고 사용하는 기회가 될 것으로 판단된다. 특히, Multi Thread 환경과 검색을 위한 자료구조의 변화가 가장 큰 특이점으로 보여졌다.</p>\n<p>Syncronized Method를 구현해주어 문제없이 thread safe 환경에서 구축할 수 있는 Vector와 HashTable이 있다. 검색을 향상시키기 위한 index, 이진트리(binary tree), 앞뒤 참조 등 다양한 방법으로 차이점이 발생되었다.</p>\n<h2>5. Origin Contents</h2>\n<p><a href=\"http://postitforhooney.tistory.com/entry/JavaCollection-Java-Collection-Framework%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4%EB%A5%BC-%ED%86%B5%ED%95%B4-Data-Structure-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0?category=695112\">Tistory - Seolhun Blog - Collection Framework</a></p>",htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"안녕하세요, 설훈입니다.\n이번에는 Java의 Collection Framework에 대해서 알아보겠습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Intro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"자바를 이용하여 프로그래밍을 하다보면 자료구조에 대한 필요성을 느끼게 된다. 특히, 이번 설문지 프로젝트를 통해 설문지를 구성하면서 자료를 담아내는 List와 Set, Map 등 기본지식의 부족을 느끼게 되었다. 이를 이해하기 위해서는, Java에 기본적으로 제공되는 Collection Framework를 이해할 필요가 있다고 생각했다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Collection Framework는 어떻게보면 자료구조의 기본 중에 기본이다. 이를 알지 못하고 프로그래밍을 하다보면, 한계에 봉착할 수 있다. 비전공자로서 실무부터 배우는 프로그래밍은 향 후 한계에 봉착된다. 현 나의 시점이 그러하며, 무엇인가 해결하기 위해 고민하던 끝에, 정보처리기사의 기본적인 내용 또는 전공자들이 4년 동안 배우는 기본 지식이 내게는 부족하구나라는 결론에 이르렀다. 이는 자료구조, 알고리즘, 운영체제 등의 기본지식의 중요성이다. 기본지식 없이 쌓아올리는 탑은 무너지기 마련이다. 그래서, 이를 먼저 해결하기 위해, Java의 Collection Framework를 이해해보고자 한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Goal"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Collection Framework는 List와 Set의 Interface로 구성되어있다. 추가적으로 Map의 Interface로 구성된 다양한 Map들이 존재하지만, 이는 Collection Framework에 포함되지 않는다. 먼저, Collection Framework(List, Set)을 이해하고, 추가적으로 Map을 이해하여 올바른 자료구조를 사용하고자 한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"3개의 차이점과 장단점을 이해하고, 예제를 통해 여러가지 테스트를 하여 경험을 나누고자 한다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Contents"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"1) Java Collection Framework 구조"}]},{type:"text",value:"\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- Collection Framework1"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/1.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- Collection Framework2"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/2.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3-1. List에 대해서"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"객체를 인덱스로 관리하기 때문에 객체를 저장하면 자동 인덱스가 부여되고 인덱스로 객체를 검색, 삭제할 수 있는 기능을 제공합니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"List는 객체 자체를 저장하는 것이 아니라, 해당하는 인덱스에 객체의 주소를 참조하여 저장합니다.\n"},{type:"element",tagName:"sub",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- About List"}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/3.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-1-1. ArrayList"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ArratList는 저장 용량을 초과한 객체들이 들어오면 자동적으로 저장용량이 늘어난다. (index 자동 증가, 초기 10)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ArrayList 초기값은 인덱스 0에 삽입된다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"특정 인덱스에 객체를 삽입하면 해당 인덱스 뒤에 인덱스가 차례대로 1씩 증가./감소한다. 즉, 객체의 삽입/삭제가 자주 있을 때에 ArrayList는 비효율적이다. => LinkedList가 효율적"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-1-2. LinkedList"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"LinkedList는 인접 참조를 링크해서 체인처럼 관리한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"LinkedList는 특정 인덱스의 객체를 제거하면, 앞뒤 링크만 변경되고 나머지 링크는 변경되지 않는다. 즉, 위에 ArrayList에서 얘기했던 것처럼 삽입/삭제가 빈번히 있을 때 LinkedList를 쓰는것이 효율적이다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- LinkedList"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/4.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- LinkedList vs ArrayList"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/5.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-1-3. Vector"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Vector는 ArrayList와 같은 구조를 갖고있다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"차이점은 Vector는 동기화(Syncronized)된 메소드로 구성되어있기 때문에 Multi Thread가 동시에 이 메소드를 실행할 수 없다. 그러므로, 하나의 스레드가 실행을 완료해야만 다른 스레드가 실행할 수 있다. (Thread safe)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3-2. Set에 대해서"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Set Collection은 List처럼 Index로 저장 순서를 유지하지 않습니다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"객체를 중복 저장할 수 없으며, 하나의 Null만 존재합니다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- Set"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/6.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-2-1. HashSet"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"순서 없이 저장하고, 동일한 객체는 중복 저장하지 않는다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"동일한 객체란, 객체를 저장하기 전에 hashcode() 메소드를 호출해서 해시코드를 얻어내며, 이미 저장되어 있는 객체들의 해시코드와 비교한다. 만약, 동일한 hashcode가 있다면 다시 equals() 메소드로 객체를 비교해서 ture가 나오면 동일한 객체로 판단하고 중복저장을 하지 않는다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-2-2. TreeSet"}]},{type:"text",value:"\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- TreeSet"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/7.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n1. TreeSet은 이진트리(binary tree)를 기반으로한 Set Collection이다.\n2. TreeSet은 2개의 자식 노드를 참조하기 위한 2개의 변수로 구성된다.\n3. 또한, 객체를 저장하면 자동으로 정렬되는데 부모값과 비교해서 낮은 것은 왼쪽 자식 노드에, 높은 것은 오른쪽 자식 노드에 저장한다.\n4. Set 인터페이스 타입 변수에 대입해도 되지만 TreeSet 클래스 타입으로 대입한 이유는 객체를 찾거나 범위 검색과 관련된 메소드를 사요하기 위해서이다.\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- TreeSet의 검색 메소드"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/8.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"3-3. Map에 대해서"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Key와 Value를 저장하며, Key는 중복될 수 없다. 키와 값은 모두 객체이다. 만약, 기존에 저장된 키와 동일한 키로 값을 저장하면 기존 값은 없어지고 새로운 값으로 대체 된다.\n"},{type:"element",tagName:"sub",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- Map"}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/9.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-3-1. HashMap"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"HashMap의 키로 사용할 객체는 hashCode()와 equlas() 메소드를 재정의해서 동등 객체가 될 조건을 정해야 한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"키 값은 주로 String을 사용하지만, Object는 모든 키가 될 수 있다."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-3-2. HashTable"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"HashMap과 동일 구조를 갖고 있어, hashCode()와 equals() 메소드를 재정의해서 동등 객체가 될 조건을 정해야 한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"HashMap과의 차이점은 동기화된(Syncronized) 메소드로 구성되어 있어, Multi Thread 환경에서 안전하게 객체를 추가/삭제 등이 가능하다.(Thread safe), (ArrayList와 Vector의 관계와 유사)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-3-3. Properties"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"HashTable의 하위 클래스이기 때문에 HashTable의 모든 특징을 그대로 가지고 있다.\n차이점은, HashTable은 키와 값을 다양한 타입으로 지정이 가능하지만, Properties는 키와 값을 String 타입으로 제한한 Collection 이다.\n주로, 옵션 정보, 다국어 정보 등을 저장한다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3-3-4. TreeMap"}]},{type:"text",value:"\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- TreeMap"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/10.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n1. TreeMap은 이진트리(binary tree)를 기반으로 한 Map Collection이다.\n2. TreeSet과 같은 구조를 같고 있지만, TreeSet과의 차이점은 키와 값이 저장된 Map.Entry를 저장하는 것.\n3. TreeSet과 동일하게 낮은 값이 왼쪽에 높은 값이 오른쪽 노드에 위치한다.\n"},{type:"element",tagName:"sub",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"- TreeMap의 검색 메소드"}]},{type:"text",value:"\n    "},{type:"element",tagName:"img",properties:{src:"/images/contents/20170503/11.jpg",width:"100%",height:"100%"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Ontro"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"각각의 자료구조가 어떻게 구현 되었는지를 아는 것은 중요하다. 하지만 최소한 어떻게 구현되었는지까지 모른다면, 각각의 구조가 언제 어떻게 사용되는지를 아는 것이 프로그래머로서 기본이라고 생각된다. 알아야 효율적으로 데이터를 관리/사용 할 수 있기 때문이다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"이번 Collection Framework를 통해 List, Set, Map 등에 대해서 알아보았으며, 각각의 클래스와 메소드를 잘 이해하고 사용하는 기회가 될 것으로 판단된다. 특히, Multi Thread 환경과 검색을 위한 자료구조의 변화가 가장 큰 특이점으로 보여졌다."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Syncronized Method를 구현해주어 문제없이 thread safe 환경에서 구축할 수 있는 Vector와 HashTable이 있다. 검색을 향상시키기 위한 index, 이진트리(binary tree), 앞뒤 참조 등 다양한 방법으로 차이점이 발생되었다."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"5. Origin Contents"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://postitforhooney.tistory.com/entry/JavaCollection-Java-Collection-Framework%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4%EB%A5%BC-%ED%86%B5%ED%95%B4-Data-Structure-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0?category=695112"},children:[{type:"text",value:"Tistory - Seolhun Blog - Collection Framework"}]}]}],data:{quirksMode:!1}},fields:{slug:"/Java-collection-framework/",prefix:"2017-05-03"},frontmatter:{title:"[Java/Collection] Java Collection Framework에 대한 이해를 통해 Data Structure 이해하기",subTitle:null,cover:{childImageSharp:{resize:{src:"/static/java-e40afea28f2d844d0a74a97ba029f357-ada8c.jpg"}}}}},author:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>코드로 세상에 기여하고 싶은 개발자 설훈입니다. JavaScript와 TypeScript, React, Vue를 좋아하며 재사용할 수 있는 코드에 지대한 관심을 가지고 있습니다. 현재 TypeScript를 기반으로 React-Component를 만들고 있으며, Github 기반의 개발자 커뮤니티를 구축하고 있습니다..</p>"},footnote:{id:"/Users/hunseol/git/seolhun.github.io/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<ul>\n<li>This is Seolhun Tech blog : <a href="https://seolhun.github.io/">Seolhun - Tech Blog</a></li>\n<li>Built by <a href="https://github.com/Seolhun">Seolhun</a></li>\n<li>contact : <a href="mailto:shun10116@gmail.com">shun10116@gmail.com</a></li>\n</ul>'},site:{siteMetadata:{facebook:{appId:"543531359431658"}}}},pathContext:{slug:"/Java-collection-framework/"}}}});
//# sourceMappingURL=path---java-collection-framework-9ba4cf84c5ced2209169.js.map