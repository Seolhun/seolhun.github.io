---
author:  Seolhun
banner: "./assets/covers/spring.png"
category: "Spring"
date:  2018-04-25
subTitle:  ""
tags:  ['Spring', 'Java', 'Bean', 'Scope', 'Singleton', 'Prototype']
title: "[Spring/Java] Spring Bean Scope는 무엇인가?"
---
오늘 N사 면접을 보면서 개인적으로 몰랐었던 부분을 몇가지 정리하는 시간을 가져볼까 합니다. Spring을 최근에 이용하지 않은지가 반년이 넘어서 가물가물해서 더 어려웠던 면접이었는데요, 변명을 뒤로하고 몰랐던 부분은 알아가는 것이 더 중요한 것이니까, 이번 기회에 관련된 질문에 대해 정리하려합니다.

## Intro
잘 대답하지 못했던 부분이나 전혀 알지 못했던 3가지를 추려서 정리를 하려고합니다. 3가지는 아래와 같이 선정하였습니다.

- Spring, Bean Scope
- Java Garbage Collector
- Log Service Architecture & Module
  - Lambda Architecture
  - ...

먼저, 작성하고자 하는것은 Spring에서 Bean Scope라는 개념입니다. 개인적으로 Spring의 Bean은 Singleton으로만 알고/사용했었습니다. 필요에 따라 인스턴스가 다를 수 있겠다라는 생각도하여 잘 대답을 못했습니다. 그러나, Bean Scope에 대한 질문의 핵심은 IoC와 DI에 대한 응용질문이라고 생각합니다. Spring은 Container에 의해 Bean을 관리하고 인스턴스화하여 주입하는 것이 기본적인 핵심개념입니다. 여기서 더 나아가 생각하면 해당 Bean을 인스턴스화 할때마다 Singleton이 아닌 다른 방법으로 인스턴스화하는 것이 더 효율일 수 있다는 추론을 할 수 있습니다. (개인적으로 경험해보지는 못했지만, 각 경우에 따라 실행되어야 할 인스턴스가 있을 수 있습니다.) 이러한 상황에 사용되는것이 바로 Bean Scope입니다.

## Bean Scope란?
Spring의 Bean Scope는 Spring에서 Bean 생성의 범위를 설정할 수 있도록 만들어준 기능입니다.

Spring에서 Bean Scope의 기본 설정은 `singleton`으로, 해당 Container 안에서 DI가 일어날 때 scope의 범위를 확인하여 Container에서 인스턴스를 생성합니다. 만약, 해당 Bean에 대해서 Scope를 설정하지 않으면 1개의 인스턴스만 생성하여 사용됩니다. 그 외에 getBean() 메소드를 콜할 때, Request 요청 때, Session을 이용할 때 등 다양한 Scope가 존재합니다. 이와 관련된 Bean Scope 종류에 대해 간단히 알아보겠습니다.

## Bean Scope 종류
<table class="table table-dark">
  <tr>
    <th>
      Scope
    </th>
    <th>
      Description
    </th>
  </tr>
  <tr>
    <td>
      singleton
    </td>
    <td>
      단일 Bean 정의를 Spring IoC 컨테이너별로 하나의 객체 인스턴스로 범위 지정한다.
    </td>
  </tr>
  <tr>
    <td>
      prototype
    </td>
    <td>
      단일 Bean 정의를 원하는 수의 오브젝트 인스턴스로 확장합니다.
    </td>
  </tr>
  <tr>
    <td>
      request
    </td>
    <td>
      단일 Bean 정의를 단일 HTTP 요청의 라이프 사이클 범위로 범위 지정합니다. 즉, 각각의 모든 HTTP 요청은 단일 Bean 정의의 뒤쪽에서 생성 된 자체 Bean 인스턴스를 갖게됩니다. 웹 인식 Spring ApplicationContext의 컨텍스트에서만 유효합니다.
    </td>
  </tr>
  <tr>
    <td>
      session
    </td>
    <td>
      단일 Bean 정의를 HTTP 세션의 라이프 사이클 범위로 범위 지정합니다. 웹 인식 Spring ApplicationContext의 컨텍스트에서만 유효합니다.
    </td>
  </tr>
  <tr>
    <td>
      global session
    </td>
    <td>
      단일 Bean 정의를 전역 HTTP 세션의 라이프 사이클 범위로 확장합니다. 일반적으로 portlet context에서 사용되는 경우에만 유효합니다. 웹 인식 Spring ApplicationContext의 컨텍스트에서만 유효합니다.
    </td>
  </tr>
    <tr>
    <td>
      application
    </td>
    <td>
      단일 Bean 정의를 ServletContext의 라이프 사이클 범위로 범위 지정합니다. 웹 인식 Spring ApplicationContext의 컨텍스트에서만 유효합니다.
    </td>
  </tr>
  </tr>
    <tr>
    <td>
      websocket
    </td>
    <td>
      단일 bean 정의를 WebSocket의 라이프 사이클 범위로 범위 지정합니다. 웹 인식 Spring ApplicationContext의 컨텍스트에서만 유효합니다.
    </td>
  </tr>
</table>

##### - 주의사항
> request, session, global session, application, websocket의 Scope는 일반 Spring 어플리케이션이 아닌, Spring MVC Web Application에서만 사용되는 용도입니다. 이러한 범위를 벗어나 ClassPathXmlApplicationContext와 같은 일반적인 Spring IoC 컨테이너와 함께 사용하면 알 수 없는 Bean Scope에 대해 IllegalStateException이 발생합니다.

## Singleton
Bean의 하나의 인스턴스만 관리되고, 그 Bean 정의와 일치하는 id를 가진 모든 Bean 요청은 Spring 컨테이너에 의해 하나의 인스턴스만을 반환하게 됩니다. 즉, Bean 설정을 정의하고 Singleton으로 범위를 지정하면 Spring IoC 컨테이너는 해당 Bean 객체의 인스턴스 하나만 정확히 생성합니다. `이 단일 인스턴스는 이러한 Singleton Bean의 캐시에 저장되며 그 이후의 모든 요청 및 참조 된 해당 Bean에 대한 참조로 인해 캐시 된 객체가 반환됩니다.`

#### - 간단한 사용방법
- Annotation
```java
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service("singletonService")
@Scope("singletone")
public class SingletonService {
  // ...
}
```

- XML
```xml
<bean id="singletonService" class="com.foo.SingletonService"/>
<bean id="singletonService" class="com.foo.SingletonService" scope="singleton"/>
<bean id="singletonService" class="com.foo.SingletonService" singleton="true"/>
```

Annotation을 이용하여 해당 Bean을 등록할 때, 간단하게 스코프를 설정할 수 있습니다. 혹은, XML에 위와 같이 설정할 수 있습니다. 아무설정이 없어도 Default 값이 Singleton이기 때문에 Spring은 해당 Bean을 Singleton으로 생성합니다.

## Prototpye
Bean 구현의 non-singleton, Prototype 범위는 특정 Bean에 대한 요청이 만들어 질 때마다 즉, 다른 Bean에 주입되거나 프로그래밍 방식의 getBean() 메소드를 통해 요청 될 때마다 새로운 Bean 인스턴스를 컨테이너에 요청하여 생성합니다. 일반적으로 상태 기반 Bean에 대해서는 Prototype Bean을 사용하고 상태없는 Bean에는 Singleton Scope를 사용해야합니다. (개인적으로 이부분이 어려운데, 해당 Bean이 상태값을 가지고 있어 고유한 값이 필요할 경우 Prototype을 사용하는 것이 좋다는 것으로 해석됩니다.)

Prototype Scope는 다른 Scope와 달리 Spring Container에서 라이프 사이클을 관리하지 않습니다. 즉, 컨테이너는 Prototype 객체의 인스턴스화, 구성 및 어셈블 한 다음 Prototpye 인스턴스를 더 이상 기록하지 않고 클라이언트에 전달합니다. 즉, 클라이언트 코드는 Prototype Scope 객체를 정리하고 Prototype Bean이 보유하고있는 값 비싼 리소스를 제거해야합니다. Spring 컨테이너가 프로토 타입 범위의 빈에 의해 보유 된 리소스를 해제하려면 [Customizing beans using a BeanPostProcessor](https://docs.spring.io/spring/docs/4.3.9.RELEASE/spring-framework-reference/html/beans.html#beans-factory-extension-bpp)를 참조하시기 바랍니다.

#### - Prototype을 Singleton과 함께 사용 할 경우 주의사항
Prototype Bean에 종속성이 있는 Singleton Scope Bean을 사용하는 경우 인스턴스화시 종속성이 해결된다는 점에 유의하십시오. 따라서 Prototype 범위의 Bean을 Singleton 범위의 Bean에 종속성을 주입하면 새로운 Prototype Bean이 인스턴스화 된 Singleton Bean에 종속성이 주입됩니다. Prototype 인스턴스는 Singleton Scope의 빈에 제공되는 유일한 인스턴스입니다.

그러나, Single Scope의 Bean이 Prototype Scope의 Bean의 새로운 인스턴스를 런타임 마다 반복적으로 획득하기를 원할 때 문제가 발생합니다. 왜냐하면, Spring 컨테이너가 Singleton Bean을 인스턴스화하고 Prototype Scope의 Bean의 의존성을 해결하고 주입 할 때, Prototype의 Bean 인스턴스화는 한 번만 발생하기 때문입니다.

`즉, 런타임에 Prototype Bean의 새로운 인스턴스가 두 번 이상 필요할 경우, 해결책은 IoC를 수동적으로 통제하는 것입니다.` 예로, ApplicationContextAware 인터페이스를 구현하여 컨테이너가 이를 인식하게 만든 뒤, Singleton Bean(A)이 의존성이 주입된 Prototype Scope(B)의 Bean을 필요로 할 때마다 컨테이너에 대한 getBean('B') 호출로 Bean B 새로운 인스턴스를 요청할 수 있습니다.

이와 관련된 자세한 방법은 [Method injection](https://docs.spring.io/spring/docs/4.3.9.RELEASE/spring-framework-reference/html/beans.html#beans-factory-method-injection)을 참조하면 도움이 될 것으로 생각합니다.

## Request
`Spring 컨테이너는 각 HTTP 요청마다 request Bean으로 정의된 Bean을 새로운 인스턴스로 생성합니다.` 즉, 아래 예제를 이용하면 requestAction Bean의 범위는 HTTP 요청 레벨로 지정(한정)됩니다. 동일한 requestAction Bean 정의에서 작성된 다른 인스턴스는 상태에서 이러한 변경 사항을 볼 수 없기 때문에 원하는만큼 작성된 인스턴스의 내부 상태를 변경할 수 있습니다. 그것들은 개별 요청에 특정적입니다. `요청이 처리를 완료하면 요청에 적용되는 Bean은 삭제됩니다.`

Annotation 또는 Java Config를 사용하는 경우 `@RequestScope` Annotation을 사용하여 요청 범위에 구성 요소를 할당 할 수 있습니다.

#### - 간단한 사용방법
- Annotation
```java
@RequestScope
@Component
public class RequestAction {
    // ...
}
```

- XML
```xml
<bean id="requestAction" class="com.foo.RequestAction" scope="request"/>
```

## Session
`Spring 컨테이너는 단일 HTTP 세션의 유효 기간 동안 sessionAction Bean 정의를 사용하여 SessionAction bean의 새로운 인스턴스를 생성합니다.` 즉, sessionAction Bean은 HTTP Session 레벨에서 유효 범위가 지정됩니다. 요청 범위 Bean과 마찬가지로 원하는만큼 생성 된 인스턴스의 내부 상태를 변경할 수 있습니다. 하지만, 동일한 sessionAction Bean을 정의에서 생성 된 인스턴스들은 다른 HTTP Session 인스턴스가 이러한 변경 상태를 인식하지 못합니다. `이는 개별 HTTP 세션에 고유하기 때문입니다. 즉, HTTP 세션이 결국 만료(폐기)되면 해당 특정 HTTP 세션으로 범위가 지정된 Bean도 삭제됩니다.`

주석 기반 구성 요소 또는 Java Config를 사용하는 경우 @SessionScope 주석을 사용하여 세션 범위에 구성 요소를 할당 할 수 있습니다.

#### - 간단한 사용방법
- Annotation
```java
@SessionScope
@Component
public class SessionAction {
    // ...
}
```

- XML
```xml
<bean id="sessionAction" class="com.foo.SessionAction" scope="session"/>
```

## Outro
Bean Scope가 중요한 이유는, Spring의 IoC(Inversion of Control)라는 핵심 개념때문입니다. Spring을 이용하면 개발자가 어플리케이션에 필요한 메모리를 관리해야하는 부분이 거의 존재하지 않습니다. 하지만, 이러한 장점은 개발자에게 단점으로 작용할 수 있습니다. 간단한 예로, 해당 Bean을 특정한 경우에만 인스턴스화하고 싶을 경우입니다. 해당 Bean 인스턴스에 대한 상태 값 같은 것을 포함하여 해당 인스턴스에 대한 변화값을 추적해야 할 경우가 Bean Scope가 필요한 경우라고 말할 수 있습니다.

또한, 위에서도 언급했지만 Prototype Bean을 Singleton Bean의 주입하여 이용할 경우 IoC가 이를 알 수 없어 개발자가 직접 Context에 명시하여 해당 인스턴스를 관리해야 합니다. 이러한 경우 필요한 것이 BeanPostProcessor, ApplicationContextAware 등과 같은 인터페이스입니다. 여기서 중요한 것은 IoC의 개념과 장단점을 이해하여 왜 이러한 구현체(인터페이스)가 필요한지를 이해한다면 Spring을 더 잘 이용할 수 있다고 생각합니다.

결론적으로, 이번 정리를 통해 Bean Scope에 대해 답한다면 `Spring Bean Scope는, 해당 Bean이 필요에 따라 인스턴스화할 수 있게 만들어 효과적인 메모리를 관리를 가능하게 만드는 기능`이라고 말할 것 같습니다. 이상 부족한 글을 마치고자 합니다.

간단히 Spring Scope에 대해 정리해보려고 했지만, 간단한 키워드로는 용도를 추론해내는데 어려움이 스프링 문서를 기반으로 정독하면서 알아보았습니다. 또한, Bean이란 개념 자체가 Spring에 IoC, DI와 같은 핵심개념과 밀접한 개념이기 때문에 이와 관련한 내용에 대한 이해가 선행되어야 되기때문에 자세히 들어갈수록 많은 어려움이 있었습니다. 부족한 것은 차차 수정하면서 해결하겠습니다.

## References
- [Spring Reference 4.3.9 Release](https://docs.spring.io/spring/docs/4.3.9.RELEASE/spring-framework-reference/html/beans.html#beans-factory-scopes)
- [Java Slipp - Bean Scope](https://www.slipp.net/wiki/pages/viewpage.action?pageId=25528177)
