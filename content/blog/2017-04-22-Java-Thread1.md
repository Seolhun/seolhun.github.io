---
title: [Java/Thread] Java Thread Pool을 이용한 Thread를 이해하기(Thread, Runnable)
author: Seolhun
authorURL: https://github.com/SeolHun
authorFBID: 100007393233015
date: 2017-04-22
weight: 1
categories: ['Java', 'Thread']
categories_weight: 10
tags: ['Thread', 'Java', 'Task', 'Runnable']
tags_weight: 10
---
안녕하세요, 설훈입니다.
이번에는 Java의 Thread, Runnable, Task 등에 대해서 알아보겠습니다.


## Intro
1. Thread로 간단한 게임 프로젝트 진행 중 Thread에 대한 관리가 명확하지 않아 Thread Pool을 통해 Thread에 관리 가능정도와 효율성 장단점을 이해하고 싶었다.
2. Multi Thread 간 자원공유가 이루어지는 방식에 대해 더 자세히 알아보고 싶었다.
3. Thread Life Cycle에 대한 이해의 부족으로 필요한 메소드를 사용하지 못했으며, 이를 해결하기 위해 Life Cycle에 따른 상태관리와 필요한 메소드에 알아보고자 한다.

## Goal
1. Java에서 제공하는 Executors를 통해 Thread Pool을 구현해보고 이에 대한 장단점을 이해한다.
2. MultiThread를 예제를 통해 Thread의 작업 순서와 자원공유 등에 대한 필요지식을 이해한다.
3. Thread에 Join, Wait, Notify, Yield 등의 API를 통해 Thread의 Life Cycle을 이해한다.

## Keywords
1. Thread
스레드(thread)는 어떠한 프로그램 내에서, 특히 프로세스 내에서 실행되는 흐름의 단위를 말한다. 일반적으로 한 프로그램은 하나의 스레드를 가지고 있지만, 프로그램 환경에 따라 둘 이상의 스레드를 동시에 실행할 수 있다. 이러한 실행 방식을 멀티스레드(multithread)라고 한다.

2. Process
프로세스(process)는 컴퓨터에서 연속적으로 실행되고 있는 컴퓨터 프로그램을 말한다. 종종 스케줄링의 대상이 되는 작업(task)이라는 용어와 거의 같은 의미로 쓰인다. 여러 개의 프로세서를 사용하는 것을 멀티프로세싱이라고 하며 같은 시간에 여러 개의 프로그램을 띄우는 시분할 방식을 멀티태스킹이라고 한다. 프로세스 관리는 운영 체제의 중요한 부분이 되었다.

3. Process Vs Thread
멀티프로세스와 멀티스레드는 양쪽 모두 여러 흐름이 동시에 진행된다는 공통점을 가지고 있다. 하지만 멀티프로세스에서 각 프로세스는 독립적으로 실행되며 각각 별개의 메모리를 차지하고 있는 것과 달리 멀티스레드는 프로세스 내의 메모리를 공유해 사용할 수 있다. 또한 프로세스 간의 전환 속도보다 스레드 간의 전환 속도가 빠르다.

멀티스레드의 다른 장점은 CPU가 여러 개일 경우에 각각의 CPU가 스레드 하나씩을 담당하는 방법으로 속도를 높일 수 있다는 것이다. 이러한 시스템에서는 여러 스레드가 실제 시간상으로 동시에 수행될 수 있기 때문이다.

멀티스레드의 단점에는 각각의 스레드 중 어떤 것이 먼저 실행될지 그 순서를 알 수 없다는 것이 있다.

4. Multi Tasking
전산학 분야에서 멀티태스킹(multitasking) 또는 다중작업(이하 멀티태스킹)은 다수의 작업(혹은 프로세스, 이하 태스크)이 중앙 처리 장치(이하 CPU)와 같은 공용자원을 나누어 사용하는 것을 말한다. 엄밀히 말해 한 개의 CPU를 가진 개인용 컴퓨터가 특정 순간에 수행할 수 있는 태스크의 개수는 하나뿐이다. 따라서 멀티태스킹은 스케줄링이라는 방식을 사용하여 컴퓨터 사용자에게 병렬 연산이 이루어지는 것과 같은 환경을 제공한다. 스케줄링 방식은 CPU 사용시간을 일정한 기준에 따라 나누어 각 태스크가 사용할 수 있도록 분배한다. 분배받은 시간동안 태스크가 CPU를 사용할 때 다른 태스크들은 자신의 차례가 오기를 기다린다. 분배받은 시간이 종료되어 태스크가 사용하던 CPU를 다른 태스크가 사용할 수 있도록 재배정하는 것을 문맥교환이라 하는데 스케줄링에서 이 문맥교환이 충분히 자주 발생하게 되면 컴퓨터 사용자는 병렬 연산이 이루어진 것처럼 느끼게 된다.

멀티태스킹은 다수의 CPU를 내장한 컴퓨터(즉, 멀티프로세서)에서도 유효한데, 멀티태스킹을 사용하게 되면 탑재한 CPU의 숫자보다 많은 수의 태스크를 동시에 수행할 수 있게 된다.

일반적으로 운영 체제는 아래 나열된 스케줄링 방식중 하나를 채택해서 사용한다.
멀티프로그래밍 시스템에서는 현재 실행되고 있는 태스크는 다른 외부 이벤트를 기다려야 하는 상황이 되거나, 컴퓨터의 스케줄러가 강제로 실행 중인 태스크를 중단시킬 때까지 계속 진행된다. 멀티 프로그램 시스템은 CPU 사용률을 극대화할 수 있도록 설계되었다.

- 시분할 시스템에서는 현재 실행되고 있는 태스크가 스스로 혹은 하드웨어 인터럽트 따위의 외부적인 이유로 중앙 처리 장치의 점유를 포기해야 한다. 시분할 시스템은 다수의 프로그램이 거의 동시에 수행될 수 있도록 해준다. '시간을 분할한다'라는 표현은 단말에 위치한 사용자가 함께 공유할 수 있는 IBM사의 TSO, CP/CMS와 같은 컴퓨터를 가리키기 위해 쓰였다.
- 실시간 시스템에서는 외부 이벤트가 발생하였을 때 몇 개의 대기 중인 태스크들이 CPU를 점유할 수 있도록 보장해 준다. 실시간 시스템은 시간 내에 처리하여야 하는 산업 로봇과 같은 기계적인 장치를 제어하기 위해 사용된다.

동일한 시스템을 여러 명이 공유해서 쓰는 것을 나타내던 시분할이라는 용어는 개인용 컴퓨터와 워크스테이션의 발전으로 인해 멀티태스킹이라는 용어로 대체되어 특수한 경우를 제외하고 현재는 거의 사용되지 않는다.

## Contents
#### 1) Thread와 Runnable을 통한 Thread 만들기 방식과 생성의 차이점 알아보기.
#### 차이점.
1. Thread는 Class로서 Extends(상속), Runnable은 Interfacle로서 Implements(구현)을 사용한다.
2. Thread 자체를 다시 만드는 것과 Thread에 작동되는 부분(run)을 Interface로 구현하는 것의 차이가 있다.

```java
package shooney.example.thread.extendsinterface;
public class ThreadExntedsExample extends Thread {
	/* Thread의 run method 재정의하기. */
	@Override
	public void run() {
		/* 작업내용 */
	}

	public static void main(String args[]){
		ThreadExntedsExample threadExntedsExample=new ThreadExntedsExample();
		threadExntedsExample.start();
	}
}
```

```java
package shooney.example.thread.extendsinterface;

public class RunnableInterface implements Runnable {
	/* Interface의 run method 구현하기. */
	@Override
	public void run(){
		/* 작업내용 */
	}

	public static void main(String args[]){
		/* Interface Instance */
		RunnableInterface runnableInterface=new RunnableInterface();
		/* Oracle 문서 : Runnable Interface는 Thread에 의해 실행될 class에 Implements 되어야 합니다. 이 클래스에는 인자가 없는 run() method를 재정의해아합니다.*/
		Thread thread=new Thread(runnableInterface);
		thread.setPriority(10);
		thread.start();
	}
}
{{< /highlight  >}}

#### run()과 start()의 차이
- run()메소드는 단순히 클래스에 오버라이딩 된 메소드를 호출해서 사용하는 것으로 생각하면 쉽다.
- start()메소드는 새로운 쓰레드가 작업을 실행하는데 필요한 호출스택(공간)을 생성한 다음 run()을 호출해서 그 안(스택)에 run()이 저장되는 것이다. 즉, 쓰레드를 사용하기 위해 start()를

실행시키는 순간 쓰레드만의 독립적인 작업 공간인 호출스택이 만들어지는 것이다. 그 후에 호출 스택안에 각 실행하고자 하는 예를 들면 run()과 같은 메소드들이 저장되는 것이다. 호출 스택에 있는 내용들이 모두 수행하고 나면 쓰레드는 호출스택 공간과 함께 메모리 상에서 소멸된다.

#### Thread의 우선순위(Proiority)
- Thread가 가질 수 있는 우선순위의 범위는 1 ~ 10 이며, 숫자가 높을수록 우선순위가 높다.
- 우선순위라는 속성(멤버변수)을 가지고 있는데, 이 우선순위의 값에 따라 Thread가 얻는 실행시간이 달라진다.
- 수행하는 작업의 중요도에 따라 Thread의 우선순위를 서로 다르게 지정하여 특정 Thread가 더 많은 작업시간을 갖도록 할 수 있다.
- Thread의 우선순위는 Thread를 생성한 Thread로부터 상속받는다.

### 2) Thread pool을 이용한 Thread 작동 방식 보기.
```java
public class ThreadPool1 implements Runnable{
	private String threadName;
	public ThreadPool1(String threadName){
		this.threadName=threadName;
	}

	@Override
	public void run(){
		System.out.println(Thread.currentThread().getName()+'의 '+threadName+'이 시작되었습니다.');
		sleepThread();
		System.out.println(Thread.currentThread().getName()+'가 종료되었습니다');
	}

	private void sleepThread(){
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Override
	public String toString() {
		return this.threadName;
	}
}
```

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class MainClass {
	public static void main(String[] args) {
		/* 5개의 Pool을 Fix한다. */
		ExecutorService executorService=Executors.newFixedThreadPool(5);
		for (int i = 1; i <= 10; i++) {
			Runnable doThread=new ThreadPool1('SleepThread'+i);
			executorService.execute(doThread);
		}

		/* ExecutorService의 모든 작업 이후 다른 thread 호출을 10초 동안 차단합니다.
		executorService.awaitTermination(10, TimeUnit.SECONDS);
		*/

		/* ExecutorService 종료 */
		executorService.shutdown();

		/* ExecutorService 종료되었는지 확인. */
		while(!executorService.isTerminated()) {

		}
		System.out.println('모든 Thread가 종료되었습니다.');
	}
}
```
<sub>
    <p>- Result</p>
    <img src='/images/contents/20170422/1.jpg' width='100%' height='100%'>
</sub>

### 3. ExcutorService Method 이해하기.
- shutdown()
	- 이 메소드는 Excuotrs의 작업을 기다리고 종료시킵니다. 다른 작업의 종료를 기다려줍니다.

- shutdownNow()
	- 이 메소드는 Excutors를 바로 종료시킵니다. 이 메소드는 다른 작업의 종료까지 기다려주지 않습니다. (위 에러에서 이 메소드를 선언 시 Sleep을 기다리지 않고 종료하기 때문에 InterruptedException에러를 발생시킵니다.)

- isTerminated()
	- Executor의 프로세스가 모두 종료되었으면 True를 반환합니다.

- isShutdown()
	- Executor의 shutdown () 메소드를 호출 한 경우 true를 반환합니다.

- awaitTermination(longtimeout, TimeUnitunit)
	- Ex) executorService.awaitTermination(10, TimeUnit.SECONDS);
	- 이 메소드는 실행 프로그램의 작업이 종료되거나 시간 초과가 발생할 때까지 호출 스레드를 차단합니다.

- Executors 클래스는 ThreadPoolExecutor를 사용하는 ExecutorService의 간단한 구현을 제공하지만, ThreadPoolExecutor는 이보다 훨씬 많은 기능을 제공합니다. 우리는 ThreadPoolExecutor 인스턴스를 만들 때 생존 할 스레드 수를 지정할 수 있으며 스레드 풀의 크기를 제한하고 자체 RejectedExecutionHandler 구현을 만들어 작업자 큐에 들어 가지 않는 작업을 처리 할 수 있습니다.
	- [Executors] (http://docs.oracle.com/javase/tutorial/essential/concurrency/executors.html)

### 4. Thread의 API를 통해 Thread Life cycle 이해하기.
- NEW
	- 쓰레드가 생성되고 아직 start()가 호출되지 않은 상태
- RUNNABLE
	- 실행 중 또는 실행 가능한 상태
- BLOCKED
	- 동기화블럭에 의해서 일시정지된 상태(LOCK이 풀릴 때 까지 기다리는 상태)
- WAITING, TIMED_WAITING
	- 쓰레드의 작업이 종료되지는 않았지만 실행가능하지 않은(unrunnable) 일시 정지상태, TIMED_WAITING은 일시정지시간이 지정된 경우를 의미
- TERMINATED
	- 쓰레드의 작업이 종료된 상태
<sub>
    <p>- Result</p>
    <img src='/images/contents/20170422/2.jpg' width='100%' height='100%'>
</sub>

#### Life Cycle이해를 위한 Method
- `void interrupt()`
	- sleep()이나 join()에 의해 일시정지상태인 쓰레드를 실행 대기 상태로 만든다.
	- 해당 쓰레드에서는 InterruptedException이 발생함으로써 일시정지상태를 벗어나게 된다.

- `void join()`
	- join() 메소드는 다른 Thread가 현재 진행중이라면 이 Thread의 완료를 기다리는 것이며, 진행중인 Thread가 완료되면 이후 실행된다. 현재 진행 중인 Thread 이후 join한다고 생각하면 쉽다.
		- `void join(long millis)`
		- `void join(long millis, int nanos)`
	- 지정된 시간이 지나거나 작업이 종료되면 join()을 호출한 쓰레드로 다시 돌아와 실행을 계속한다.

- `void resume()`
	- suspend()에 의해 일시정지상태에 있는 쓰레드를 실행대기 상태(Runnable)로 만든다.

- `static void sleep(long millis)`
	- 지정된 시간(천분의 일초 단위)동안 쓰레드를 일시정지시킨다.

- `static void sleep(long millis, int nanos)`
	- 지정한 시간이 지나고 나면, 자동적으로 다시 실행대기상태가 된다.

- `void wait()`
	- 객체 wait 메소드에는 3가지 변화가 있다.
	- 먼저, 다른 스레드가 현재 스레드를 깨우기 위해 notify 또는 notifyAll 메소드를 호출 할 때까지 무기한 대기하는 것
	- 나머지 하나는 현재 스레드가 깨어나기 전까지, 특정 시간(설정된)동안 기다립니다.

- `void stop()`
	- 쓰레드를 즉시 종료시킨다. 교착상태(dead-lock)에 빠지기 쉽기 때문에 deprecated 되었다.

- `void suspend()`
	- 쓰레드를 일시 정지시킨다. resume()을 호출하면 다시 쓰레드를 실행대기 상태(Runnable)로 만들 수 있다.

- `static void yield()`
	- 실행 중에 다른 쓰레드에게 양보(yield)하고 실행대기상태가 된다.

## Outro
- Thread와 Runnable의 차이는 Class와 Interface의 차이지만, 활용하는 방법에도 큰 차이가 있습니다. 특히, Thread Class를 통해 프로그래밍을 하다보면 동기화에 많은 Thread가 생성되어 Thread의 Syncronized, Debug 등 다양한 문제로 인해 Thread 관리에 어려움이 발생할 수 있습니다.
- 특히, 병렬 작업 처리가 많아지면 Thread의 개수가 증가되고 그에 따른 Thread 생성과 스케줄링으로 인해 CPU가 바빠져 메모리 사용량이 늘어납니다. 따라서 어플리케이션의 성능이 저하됩니다. 갑작스런 병렬작업의 극대화로 인한 스레드 증폭을 막으려면 Thread Pool을 사용해야 합니다.
- 이를 해결하기 위해 서는, Thread Pool은 작업 처리에 사용되는 Thread를 제한된 개수만큼 정해 놓고 작업 큐(Queue)에 들어오는 작업들을 하나씩 Thread가 맡아 처리합니다. 작업 처리가 끝난 스레드는 다시 작업 큐에서 새로운 작업을 가져와 처리해야 합니다.
- 이 부분은 Thread pool을 통해 제한된 Thread을 생성하고, 정해진 Thread를 통해 Runnable Interface에  method(run())을 구현해주어 해당 Thread에 해당내용이 수행될 수 있게 해주는 것이 훨씬 더 효율적입니다. 정해진 Thread에 실행내용만 바꿔주는 것입니다. 100개의 Thread를 통해 100개의 실행내용을 실행하는 것이 더 빠를 수 있겠지만, 불필요한 메모리를 할당하게 되는 문제가 생기게 되며, 자원을 공유 할때, 데이터 동기화 문제나, 교착상태에 빠지는 문제가 발생할 수 있는 문제가 커집니다. 그리고, 필요한 Thread를 최소한으로 선언하고 관리하여 효율적으로 프로그램을 운영하기 위함입니다.
- Java Thread pool은 Runnable 쓰레드를 관리하고 작업자 쓰레드는 Queue에서 Runnable을 실행합니다. 그리고, java.util.concurrent.Executors는 java.util.concurrent.Executor 인터페이스의 구현을 제공하여 java에 Thread pool을 구현합니다.

## References
 - [Wiki] (https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%A0%88%EB%93%9C)
 - [JournalDev] (http://www.journaldev.com/1069/threadpoolexecutor-java-thread-pool-example-executorservice)
 - [Thread-Runnable] (http://blog.daum.net/hughlee193/138)
 - [갱짱.study] (http://gangzzang.tistory.com/entry/Java-쓰레드Thread)
