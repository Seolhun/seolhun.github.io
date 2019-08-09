---
title: "[DB/MariaDB] 분실한 mysql root password 재설정하기"
subTitle: "MariaDB에 root password 초기화"
author: "Seolhun"
category: "Database"
tags: ['Database', 'Mariadb', 'Auth']
banner: "mariadb.png"
---

안녕하세요, 설훈입니다.
마리아 디비에 사용자 권한주는 방법에 대해서 알아보겠습니다.

# Intro
Mysql을 처음 설치할 때 database root 계정으로 사용할 password를 설정한다. 하지만 시간이 오래 지나서 그때 설정한 password를 기억할 수 없다면 다음의 방법으로 재설정할 수 있다.(CentOS 7 기준)

1. 실행중인 mysql service를 중지 시킨다.
    - `systemctl stop mysql`

2. Password를 검사하지 않도록 mysql 환경설정 파일을 수정한다.
    - `/etc/mysql/my.conf` file에 skip-grant-tables를 추가하면 password를 검사하지 않는다.

```bash
#
# Basic Settings
#
user         = mysql
pid-file     = /var/run/mysqld/mysqld.pid
socket       = /var/run/mysqld/mysqld.sock
port         = 3306
basedir      = /usr
datadir      = /var/lib/mysql
tmpdir       = /tmp
lc-messages-dir = /usr/share/mysql
skip-external-locking
skip-grant-tables
```

3. 새로운 설정 값으로 mysql service를 실행한다.
    - `sudo systemctl start mysql`

4. root 계정으로 mysql database를 연다.
    - `mysql -uroot -p****(password)`

5. root password를 재설정한다.
    - `UPDATE user SET password=PASSWORD('ROOT_비밀번호') WHERE user='root';`

6. 2번에서 설정했던 my.conf를 복원하고 mysql service를 재실행 시킨다.
    - `sudo systemctl restart mysql`

## 원본
- [PostIT](http://postitforhooney.tistory.com/entry/MySql-Mariadb-MYsql-사용자-권한주기-및-확인?category=652294)
