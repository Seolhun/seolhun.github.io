---
author: "Seolhun"
banner: "/assets/covers/mariadb.png"
category: "Database"
date: 2016-12-02
subTitle: "MariaDB에 사용자 권한주기"
tags: ['Database', 'Mariadb', 'Auth']
title: "[DB/MariaDB] MariaDB에 사용자 권한주기"
---

안녕하세요, 설훈입니다.
마리아 디비에 사용자 권한주는 방법에 대해서 알아보겠습니다.

## 순서
1. MariaDB 접속
   - `mysql -u root -p`
   - Enter password: 패스워드 입력

2. Database 리스트 확인
   - `show databases;`
3. - 없으면 생성
   - `create database DB명;`

4. 기본으로 생성되어 있는 mysql 데이터베이스를 사용한다
   - `use mysql;`

5. mysql 의 user 테이블에서 이미 생성된 계정 확인
   - `select host, user from user;`

6. mysql 은 보안상 Default 옵션으로 외부접속을 허용 X
   - 계정을 생성할때 특정 IP 혹은 127.0.0.1(localhost) 를 지정하거나 %를 지정하여 외부접속을 허용할 수 있다.

7. user 계정 생성
   - `create user '계정아이디'@'접속위치' identified by '패스워드';`
   - ex. create user 'user'@'127.0.0.1' identified by 'myPassword';

8. user 권한 주기
   `- grant all privileges on DB이름.테이블 to '계정아이디'@'접속위치';`
   - ex1. grant all privileges on TableName.\* to 'user'@'127.0.0.1'; //127.0.0.1(localhost)는 내부에서만 접속가능
   - ex2. grant select on testDB.\* to 'user'@'%';

9. 권한 적용
   - `flush privileges;`

10. 권한 확인
    - `show grants for 'user'@'접속위치';`

11. 계정 삭제
    - `drop user '계정아이디'@'접속위치';`
    - ex. drop user 'user1'@'%';

12. 권한 삭제
    - `revoke all on DB이름.테이블 FROM '계정아이디'@'접속위치';`

## 원본
- [PostIT](http://postitforhooney.tistory.com/entry/MySql-Mariadb-MYsql-사용자-권한주기-및-확인?category=652294)
