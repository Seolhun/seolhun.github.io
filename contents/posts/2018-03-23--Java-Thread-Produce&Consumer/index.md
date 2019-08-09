---
author: Seolhun
banner: "./assets/covers/java.png"
category: "Java"
date: 2018-03-23
subTitle:  ""
tags: ['Java', 'Thread', 'Qeue', 'Producer', 'Consumer', 'Pattern', 'Concurrency']
title: "[Java/Thread/DataStructure] Java Thread와 Queue를 이용여 Producer & Consumer 패턴 구현하기: Part1"
---

안녕하세요, 설훈입니다.
이번에는 Java Thread와 Queue를 이용하여 Producer & Consumer Pattern에 대해서 작성해볼까 합니다.


## Intro
제가 생각하는 프로그래밍은 끊임없는 대화의 연속이라고 생각합니다. 하나의 코드들이 서로 끊임없이 소통해야지만 프로그램이 완성되는 것이죠.
즉, 프로그램에서 미리 정의된 작업(Task)을 만들어 작업들을 수행하는 끊임없는 소통의 과정이 진행되는 것입니다. 여기에 네트워크가 들어오면 더 환상적인 소통이 완성될 것입니다.

생산자와 소비자 패턴에서도 이 구조를 볼 수 있습니다. Thread 간의 Queue를 통한 통신이지만, 확실히 소통하는 것을 느낄 수 있습니다.
특히, Producer & Consumer Pattern의 경우 이러한 작업을 수행하는데 있어서 각 자원(데이터)에 대한 동시성과 병렬척인 처리에 대한 고려가 필요할 때 적용 가능한 페턴입니다.

- 생산자 소비자 패턴의 진정한 장점 2가지
    - 생산과 소비를 병렬로 처리할 수 있다.
    - 생산자와 여러 소비자를 동시에 사용할 수 있다.

---
- 패턴요소
    - 프로듀서(Producer) : 작업 또는 데이터를 생성하여 작업 큐로 전달하는 역할
    - 작업 큐 : 전달받은 작업 또는 데이터를 FIFO(Queue) 형태로 관리하는 역할, 동시성을 관여하는 클래스
    - 컨슈머(Consumer) : 작업 큐에 등록된 작업 또는 데이터를 전달 받아 소비하는 역할


## Contents
#### 1. 패턴의 작동을 확인하기 위한 Message 도메인을 정의하겠습니다.
- 간단히 properties는 id와 content만 만들겠습니다.

```java
public class Message {
    private int id;
    private String content;

    public Message(int id, String content) {
        this.id = id;
        this.content = content;
    }

    @Override
    public String toString() {
        return "message: {" +
            "id:" + id +
            ", content:'" + content + '\'' +
        '}';
    }
}
```

#### 2. 각 Message domain을 Queue에 담아 처리할 수 있게 간단하게 도메인을 정의하였습니다.

```java
import java.util.Queue;

public class Tasks<T> {
    private Queue<T> taskQueue;

    public Tasks(Queue<T> taskQueue) {
        this.taskQueue = taskQueue;
    }

    // 필요에 따라 Getter, Setter

    public void printTasks() {
        System.out.println(taskQueue.toArray()[5000]);
    }
}

```

#### 3. Messages들을 생성 할 Producer를 구현합니다.
 - 왜 BlockingQueue를 이용하는가?
    - 생산자와 소비자가 동일한 속도로 동작하지 않습니다(코드도 그렇게 구현했구요).
    - 만약 생산자가 소비자보다 빠르게 동작하면 큐의 크기는 지속해서 커지는 문제가 발생합니다. **이런 경우를 대비하여 BlockingQueue를 사용하면 너무 앞서나가는 것을 방지 할 수 있습니다.**

```java
import java.util.Queue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class Producer implements Runnable {
    private BlockingQueue<Tasks> tasksQueue;

    public Producer(BlockingQueue<Tasks> tasksQueue) {
        this.tasksQueue = tasksQueue;
    }

    public void run() {
        System.out.println("Producer Thread Run");
        int i = 0;
        while(true) {
            i++;
            Queue<Message> messageQueue = new LinkedBlockingQueue<>();
            for (int j = 0; j < 10000; j++) {
                messageQueue.add(new Message(j, i + " Hello Message "+j));
            }

            try {
                Tasks<Message> tasks = new Tasks<>(messageQueue);
                tasksQueue.put(tasks);

                System.out.println("================================");
                System.out.println("Tasks is put By Producer " + i);
                System.out.println("================================");
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
```

#### 4. Messages들을 소비할 Consumer를 구현합니다.
```java
import java.util.concurrent.BlockingQueue;

public class Consumer implements Runnable {
    private BlockingQueue<Tasks> queue;

    public Consumer(BlockingQueue<Tasks> queue) {
        this.queue = queue;
    }

    @Override
    public void run() {
        System.out.println("Consumer Thread Run");
        try {
            while(true) {
                Tasks tasks = queue.take();

                System.out.println("================================");
                tasks.printTasks();
                System.out.println("================================");
                Thread.sleep(2000);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

#### 5. Main Class를 실행해봅니다.
```java
import java.util.concurrent.ArrayBlockingQueue;

public class Main {
    public static void main(String args[])  {
        ArrayBlockingQueue<Tasks> queue = new ArrayBlockingQueue<>(1000);

        Thread consumer = new Thread(new Consumer(queue));
        Thread producer = new Thread(new Producer(queue));

        consumer.start();
        producer.start();
    }
}
```

## Outro
- Multi Thread를 이용하여 Producer와 Consumer를 구현하여 패턴을 완성하였습니다.
- Queue를 통해 Producer와 Consumer가 데이터를 공유할 수 있게되었습니다.
- Multi Thread를 이용하여 동시적으로 데이터를 다룰 수 있었습니다. 생산자와 소비자에서 병행성을 추가하여 작업도 가능합니다.

이번 생산자, 소비자 패턴 정리를 마무리하였습니다.
다음 Part2에서는 병행성을 향상시키기 위해 소비자를 더 추가하여 성능이 어떻게 개선되는지를 글로 써보겠습니다.

## References
- [7가지 동시성의 원리 - 폴 부처 지음](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788968482984&orderClick=LAG&Kc=)
- [나무위키 - 큐란 무엇인가?](https://namu.wiki/w/%ED%81%90(%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0))
- [두근두근 콩닥콩닥 블로그 - Thread란?](http://knightbw.tistory.com/34)
