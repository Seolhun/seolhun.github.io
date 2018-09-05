---
title: [AWS] AWS Products에 대한 내용 간단히 정리하기
author: Seolhun
authorURL: https://github.com/SeolHun
authorFBID: 100007393233015
date: 2017-10-12
weight: 1
categories: ['AWS']
categories_weight: 10
tags: ['AWS', 'EC2', 'S3', 'Kinesis', 'Products']
tags_weight: 10
---
이번에는 AWS를 사용하기 전에 필요한  조사하면서 간단히 정리한 글입니다. EC2, S3 등 기본적인 서비스들은 알고 있었지만 개발을 위해 더 필요한 서비스들이 무엇이 있는지 궁금하여 간단히 정리하였습니다. AWS 공식 홈페이지에 이미 잘 정리되어있지만, 개인적으로 관심 있는 기술들을 정리하였습니다.


# Server
## 1. EC2(Elastic Compute Cloud)
- Amazon Elastic Compute Cloud(EC2)는 안전하고 크기 조정이 가능한 컴퓨팅 파워를 클라우드에서 제공하는 웹 서비스입니다. 개발자가 더 쉽게 웹 규모의 클라우드 컴퓨팅 작업을 할 수 있도록 설계되었습니다.

#### - 장점
1. 탄력적인 웹 규모 컴퓨팅
	- [Auto Scailing](https://aws.amazon.com/ko/autoscaling/?sc_channel=ba&sc_campaign=autoscalingonec2&sc_geo=mult&sc_country=global&sc_outcome=aware)을 통한 자동 확장 및 축소

2. 완전 제어
	- CLI 제공
	- 다양한 Command(API) 제공

3. 유연한 클라우드 호스팅 서비스
	- 다양한 OS 서버
	- 메모리, CPU, 스토리지, 부팅 파티션 선택

4. 통합
	- Storage, RDS, VCP 등과 통합 가능

5. 안정성

6. 보안
	- VPC와 함께 리소스 보안성 및 강력한 네트워킹 기능 제공

#### - Auto Scailing
- Auto Scaling을 사용하면 애플리케이션 가용성을 유지하는 데 도움이 되며, **사용자가 정의한 조건**에 따라 자동으로 Amazon EC2 용량을 급격하게 확장 또는 축소할 수 있습니다. 또한, **EC2 인스턴스의 동적 조장**을 위해 Auto Scaling을 사용하면 수요가 급증할 때는 Amazon EC2 인스턴스 수를 자동으로 늘려 성능을 유지하고 수요가 잠잠해지면 용량을 줄여 비용을 절감할 수 있습니다.

## 2. Lambda
- AWS Lambda를 사용하면 서버를 프로비저닝하거나 관리할 필요 없이 코드를 실행할 수 있습니다. 사용한 컴퓨팅 시간만큼만 비용을 지불하고, 코드가 실행되지 않을 때는 요금이 부과되지 않습니다. Lambda에서는 사실상 모든 유형의 애플리케이션이나 백엔드 서비스에 대한 코드를 별도의 관리 없이 실행할 수 있습니다. 코드를 업로드하기만 하면, Lambda에서 높은 가용성으로 코드를 실행 및 확장하는 데 필요한 모든 것을 처리합니다. 다른 AWS 서비스에서 코드를 자동으로 트리거하도록 설정하거나 웹 또는 모바일 앱에서 직접 코드를 호출할 수 있습니다.
- Run code without thinking about servers. Pay for only the compute time you consume.

#### - Lambda 장점
1. AWS 서비스와의 쉬운 확장가능성
	- S3, DynamoDB 등

2. Amazon API Gateway를 통한 Custom API 가능 (내외부 둘다 가능)

3. Amazon CloudWatch를 통한 모니터링 및 자체적인 로깅 등 다양한 서비스 제공(관리 포인트 축소)

4. Automatic Scaling

5. 새로운 러닝커브 없이 적용가능(대부분의 언어 지원)

6. 병렬로 실행되며, 각 트리거는 개별적으로 처리되어 높은 정확도 및 속도

7. Lambda Edge를 통한 사용자와 가까운 location의 서버에서 실행

## 3. VPC(Virtual Private Cloud)
- VPC를 사용하면 고객이 정의하는 가상 네트워크에서 AWS 리소스를 시작할 수 있도록 Amazon Web Services(AWS) 클라우드에 논리적으로 격리된 공간을 프로비저닝할 수 있습니다. IP 주소 범위 선택, 서브넷 생성, 라우팅 테이블 및 네트워크 게이트웨이 구성 등 가상 네트워킹 환경을 완벽하게 제어할 수 있습니다.  VPC에서 IPv4와 IPv6를 모두 사용하여 리소스와 애플리케이션에 안전하고 쉽게 액세스할 수 있습니다.

#### - VPC의 장점
1. 다중 연결 옵션
	- 공개/비공개 설정 가능
	- VCP들 간의 연결 가능
	- S3 및 다양한 VPC 엔드포인트를 통해 요청 및 사용자 제어 가능

2. 보안
	- In-Bound, Out-Bound 필터링 사용 가능


## Storage
#### 1. S3
- S3를 통해 비용 최적화, 액세스 제어 및 규정 준수 데이터를 유연하게 관리할 수 있습니다. S3는 쿼리 지원 기능을 가진 유일한 클라우드 스토리지 솔루션으로, S3에 있는 데이터에 대한 강력한 분석을 바로 실행할 수 있습니다

#### - 장점
1. 높은 안정성 및 확장성
	- 99.999999999%의 내구성
	- 데이터는 하나의 AWS 리전 내에서 지리적으로 10km 이상 떨어진 최소 3개의 물리적 시설을 거쳐 자동으로 배포
	- 다른 AWS 리전으로 데이터를 자동 복제할 수도 있습니다.

2. 보안 및 규정 준수기능
	- [AWS CloudTrail](https://aws.amazon.com/ko/cloudtrail/)과 정교하게 통합되어 감사를 위해 스토리지 API 호출 활동을 기록, 모니터링 및 유지
	- 기계 학습을 사용하여 AWS에 있는 민감한 데이터를 자동으로 검색, 분류 및 보호하는 [Amazon Macie](https://aws.amazon.com/ko/macie/)가 포함된 유일한 클라우드 스토리지

3. 유연한 관리
	- 스토리지 관리자는 데이터 사용 추세를 분류, 보고 및 시각화하여 비용을 줄이고 서비스 수준을 향상
	- **고유한 메타데이터 태그**를 지정할 수 있기 때문에 고객은 각 워크로드에 대한 스토리지 사용, 비용 및 보안을 개별적으로 확인하고 제어

4. 쿼리 지원
	- 데이터를 추출하고 이를 별도의 분석 시스템으로 이동할 필요 없이 데이터에 정교한 빅 데이터 분석을 실행 가능
	- SQL을 아는 모든 사람은 [Amazon Athena](https://aws.amazon.com/ko/athena/)를 사용하여 Amazon S3 온디맨드에서 방대한 규모의 비정형 데이터를 분석 가능
	- [Amazon Redshift Spectrum](https://aws.amazon.com/ko/redshift/spectrum/)을 사용하면 S3와 RedShift에 있는 엑사바이트 규모의 데이터에 대해 정교한 분석을 실행

5. 가장 큰 규모의 에코시스템

6. 간편하고 유연한 데이터 전송
	- 간단하고 안정적인 API를 사용하면 인터넷을 통해 손쉽게 데이터를 전송가능
	- [Amazon S3 Transfer Acceleration](https://aws.amazon.com/ko/s3/faqs/#s3ta)은 큰 객체를 지리적으로 먼 거리에 업로드해야 하는 경우에 적합
	- [AWS Direct Connect](https://aws.amazon.com/ko/directconnect/)는 전용 네트워크 연결을 사용하여 AWS로 대용량 데이터를 전송할 때 일관되게 높은 대역폭과 짧은 지연 시간을 제공
	- 페타바이트 규모의 데이터 전송에는 [AWS Snowball](https://aws.amazon.com/ko/snowball/) 및 [AWS Snowball Edge](https://aws.amazon.com/ko/snowball-edge/) 어플라이언스를 사용, 이보다 더 큰 데이터 세트에는 [AWS Snowmobile](https://aws.amazon.com/ko/snowmobile/)을 사용가능
	- [AWS Storage Gateway](https://aws.amazon.com/ko/storagegateway/)는 온프레미스에서 볼륨이나 파일을 AWS 클라우드로 손쉽게 이동할 수 있는 물리적 또는 가상 어플라이언스를 제공

## 2. EBS(Elastic Block Store)
- Amazon Elastic Block Store(EBS)는 AWS 클라우드의 Amazon EC2 인스턴스에 사용할 영구 블록 스토리지 볼륨을 제공합니다. 각 Amazon EBS 볼륨은 가용 영역 내에 자동으로 복제되어 구성요소 장애로부터 보호하고, 고가용성 및 내구성을 제공합니다. Amazon EBS 볼륨은 워크로드 실행에 필요한 지연 시간이 짧고 일관된 성능을 제공합니다.
- Amazon EBS는 성능, 비용 및 용량을 미세 조정하는 이점을 활용할 수 있는 애플리케이션 워크로드를 위해 설계되었습니다. 빅 데이터 분석 엔진(하둡/HDFS 에코시스템, Amazon EMR 클러스터 등), 관계형 및 NoSQL 데이터베이스(Microsoft SQL Server, MySQL, Cassandra, MongoDB 등), 스트림 및 로그 처리 애플리케이션(Kafka, Splunk 등), 데이터 웨어하우징 애플리케이션(Vertica, Teradata 등)을 일반적인 사용 사례로 들 수 있습니다.

#### - 스토리지 종류
	1. SSD
	데이터베이스 및 부트 볼륨과 같은 트랜잭션 워크로드를 위한 SSD 지원 스토리지(주로 IOPS가 성능을 좌우)
	2. HDD
	MapReduce 및 로그 처리와 같은 처리량 집약적 워크로드를 위한 HDD 지원 스토리지(주로 초당 MB가 성능을 좌우)

#### - 장점
1. 탄력적 볼륨
	- 운영 중단과 성능에 영향없이 동적으로 변경 및 튜닝가능
	- Amazon CloudWatch를 AWS Lambda와 함께 사용하면 변화하는 애플리케이션의 요구 사항에 맞춰 자동으로 볼륨을 변경가능
2. 스냅샷
	- S3에 전송되지 않아도 연결된 EC2 인스턴스를 통해 즉시 액세스 가능
	- 특정 시점의 데이터를 S3에 저장가능
	- 새로운 저장시 변경된 부분만 저장되어 변경된 부분에 따라 비용부과
	- 스냅샷 공유
	- 리전 전체에 복사
3. AWS Security를 통환 보안


# DataBase
## 1. RDS
- 내용
	- Amazon RDS는 관리형 관계형 데이터베이스 서비스로서, 고객이 선택할 수 있도록 Amazon Aurora, MySQL, MariaDB, Oracle, Microsoft SQL Server, PostgreSQL과 같은 6개의 익숙한 데이터베이스 엔진을 제공

#### - 기능
1. 사용 편의성
	- AWS Management Console, Amazon RDS 명령줄 인터페이스 또는 간단한 API 제공
	- Amazon RDS 데이터베이스 인스턴스는 선택한 엔진 및 클래스에 적합한 파라미터 및 설정 세트로 사전에 구성
	- 몇 분 이내에 데이터베이스 인스턴스를 시작하고 애플리케이션을 연결가능
	- DB 파라미터 그룹을 사용하면 데이터베이스를 세부적으로 제어하고 튜닝할 수 있습니다.

2. 소프트웨어 자동 패치
	- Amazon RDS는 최신 패치를 통해 배포를 지원하는 관계형 데이터베이스 소프트웨어가 최신 상태로 유지지원
	- 데이터베이스 인스턴스의 패치 여부와 시기를 선택적으로 제어가능

3. 성능
	- 범용(SSD) 스토리지
		- Amazon RDS 범용 스토리지는 프로비저닝된 GB당 IOPS 3회의 일관된 기본 성능과 IPOS 최대 3,000회의 순간 최대 성능을 제공
	- 프로비저닝된 IOPS(SSD) 스토리지
		- Amazon RDS의 프로비저닝된 IOPS 스토리지는 빠르고 예측 가능하며 일관성 있는 I/O 성능을 제공하기 위해 설계된 SSD 지원 스토리지 옵션
		- 데이터베이스 인스턴스 생성 시 IOPS 속도를 지정하면, Amazon RDS에서는 데이터베이스 인스턴스의 수명 주기에 해당 IOPS 속도를 프로비저닝합니다.
		- I/O 집약적인 트랜잭션(OLTP) 데이터베이스 워크로드에 최적화
		- IOPS는 데이터베이스 워크로드, 인스턴스 유형, 데이터베이스 엔진 유형에 따라 다를 수 있지만, 데이터베이스 인스턴스당 최대 30,000 IOPS까지 프로비저닝할 수 있습니다.
4. 확장성
	- 즉각적인 컴퓨팅 조정
		- 배포에 사용할 컴퓨팅 및 메모리 리소스를 vCPU 32개와 RAM 244GiB 범위 내에서 확장하거나 축소할 수 있습니다. 컴퓨팅 조정 작업은 일반적으로 몇 분이면 완료됩니다.

	- 간편한 스토리지 조정
		- Amazon Aurora 엔진은 데이터베이스 스토리지 요구가 증가함에 따라 데이터베이스 볼륨을 최대 6TB 또는 정의한 최대 크기까지 자동으로 확장.
		- MySQL, MariaDB, Oracle 및 PostgreSQL 엔진을 사용하면 가동중단 없이 최대 6TB의 스토리지를 바로 프로비저닝할 수 있습니다.

5. 가용성 및 내구성
	- 백업 자동화
		- Amazon RDS의 자동 백업 기능은 기본적으로 활성화되어 있으며, 이를 통해 데이터베이스 인스턴스를 특정 시점으로 복구가능
		- Amazon RDS는 데이터베이스와 트랜잭션 로그를 백업하고 이 둘을 모두 사용자가 지정한 보존 기간 동안 저장
		- 이를 통해 데이터베이스를 보존 기간 중 어느 시점(초 단위)으로나 복원가능(최근 5분 전까지 가능)
		- 자동 백업 보존 기간은 최대 35일로 구성가능

6. 데이터베이스 스냅샷
	- 데이터베이스 스냅샷은 Amazon S3에 저장된 인스턴스에 대해 사용자가 시작하는 백업으로서 명시적으로 삭제할 때까지 보관됩니다.
	- 원하는 경우 언제든 데이터베이스 스냅샷으로 새 인스턴스를 생성할 수 있습니다.
	- 데이터베이스 스냅샷이 운영상에 전체 백업으로 사용되지만, 증분식 스토리지 사용에 대해서만 비용을 지불합니다.

7. 다중 AZ 배포
	- Amazon RDS 다중 AZ 배포는 데이터베이스 인스턴스의 가용성 및 내구성을 높여주므로 프로덕션 데이터베이스 워크로드에 적합
	- 다중 AZ 데이터베이스 인스턴스를 프로비저닝하는 경우 Amazon RDS에서 다른 가용 영역(AZ)에 있는 예비 인스턴스에 데이터를 동기식으로 복제

8. 자동 호스트 교체
	- Amazon RDS는 하드웨어에 장애가 발생할 경우, 배포를 지원하는 컴퓨팅 인스턴스를 자동으로 교체

9. 보안
	- 보관 중인 데이터와 전송 중인 데이터 암호화
		- Amazon RDS를 사용하면 사용자가 AWS Key Management Service(KMS)를 통해 관리하는 키를 사용해 데이터베이스를 암호화
		- Amazon RDS 암호화를 실행 중인 데이터베이스 인스턴스에서는 자동화된 백업, 읽기 전용 복제본 및 스냅샷과 마찬가지로 기본 스토리지에 저장된 데이터가 암호화

10. 네트워크 격리
	- AWS는 자체 가상 네트워크에서 데이터베이스를 격리하고 산업 표준 암호화 IPsec VPN을 사용하여 온프레미스 IT 인프라에 연결할 수 있도록 Amazon VPC에서 데이터베이스 인스턴스를 실행할 것을 권장
	- 방화벽 설정을 구성하고 데이터베이스 인스턴스에 대한 네트워크 액세스를 제어가능

11. 리소스 수준 권한
	- Amazon RDS는 AWS Identity and Access Management(IAM)와 통합되어 AWS IAM 사용자 및 그룹이 특정 Amazon RDS 리소스(데이터베이스 인스턴스, 스냅샷, 파라미터 그룹 및 옵션 그룹)에서 수행할 수 있는 작업을 제어하는 기능을 제공
	- 또한, Amazon RDS 리소스를 태그 지정하고, IAM 사용자 및 그룹이 태그가 동일하고 연관된 태그 값을 가진 리소스 그룹에서 수행할 수 있는 작업을 제어가능
	- 예를 들어, 개발자는 "개발" 데이터베이스 인스턴스를 수정할 수 있지만 "프로덕션" 데이터베이스 인스턴스는 데이터베이스 관리자만 수정할 수 있도록 IAM 규칙을 구성가능

12. 관리의 용이성
	- 모니터링 및 지표
		- Amazon RDS는 추가 비용 없이 데이터베이스 인스턴스에 대한 Amazon CloudWatch 지표를 제공
		- AWS Management Console을 사용하면 컴퓨팅/메모리/스토리지 용량 사용률, I/O 작업, 인스턴스 연결 등 주요 작업 지표를 볼 수 있습니다.
		- Amazon RDS는 향상된 모니터링을 제공하므로 50개가 넘는 CPU, 메모리, 파일 시스템 및 디스크 I/O 지표에 액세스가능

13. 이벤트 알림
	- Amazon RDS for Aurora는 Amazon SNS를 통해 데이터베이스 이벤트에 대해 이메일이나 SMS 텍스트 메시지로 알릴 수 있습니다.
	- AWS Management Console 또는 Amazon RDS API를 사용하여 데이터베이스 인스턴스와 관련된 40개 이상의 다양한 데이터베이스 이벤트를 구독할 수 있습니다.

14. 구성 거버넌스
	- Amazon RDS는 AWS Config와 통합되므로 파라미터 그룹, 서브넷 그룹, 스냅샷, 보안 그룹 및 이벤트 구독을 비롯하여 DB 인스턴스의 구성에 대한 변경을 기록하고 감사함으로써 규정 준수를 지원하고 보안을 강화

15. 예약 인스턴스
	- Amazon RDS 예약 인스턴스는 1년 또는 3년 약정 기간 동안 DB 인스턴스를 예약할 수 있는 옵션을 제공하므로 온디맨드 인스턴스 요금보다 DB 인스턴스의 시간당 요금을 대폭 할인받을 수 있습니다.

16. 중지 및 시작
	- Amazon RDS를 활용하면 한 번에 최대 7일까지 데이터베이스 인스턴스를 쉽게 중지 및 시작할 수 있습니다.

## 2. DynamoDB
- Amazon DynamoDB는 규모와 관계없이 10밀리초 미만의 지연 시간이 일관되게 요구되는 모든 애플리케이션을 위한 빠르고 유연한 NoSQL 데이터베이스 서비스입니다. 또한, 완전 관리형 클라우드 데이터베이스로서 문서 모델과 키 값 스토어 모델을 모두 지원합니다.

#### - 기능
1. DynamoDB Accelerator(DAX)
	- Amazon DynamoDB Accelerator(DAX)는 DynamoDB를 위한 가용성이 뛰어난 완전관리형 인 메모리 캐시로서, 초당 수백만 개의 요청에서도 밀리초에서 마이크로초로 최대 10배 개선된 성능을 제공
	- 개발자가 캐시 무효화, 클러스터 관리 또는 데이터 집단을 관리할 필요 없이 DAX가 DynamoDB 테이블에 인 메모리 가속화를 추가하는 데 필요한 모든 작업을 수행가능
	- DAX가 기존 DynamoDB API 호출과 호환되므로 애플리케이션 로직을 변경할 필요가 없습니다.
	- AWS Management Console에서 클릭 몇 번 또는 AWS SDK를 사용하여 DAX를 활성화가능.

	- DAX를 시작하는 방법은 아주 간단합니다. DAX 클러스터를 시작하고, 보안 정책을 구성한 후, 애플리케이션이 DAX를 가리키도록 합니다. 몇 분 내에 인 메모리 가속화 기능이 생성되어 마이크로초의 응답 시간을 제공하고 초당 수백만 개의 요청을 손쉽게 처리할 수 있습니다.

2. 문서 데이터 모델 지원
	- DynamoDB는 문서의 저장, 쿼리 및 업데이트를 지원
	- AWS SDK를 사용하면 JSON 문서를 Amazon DynamoDB 테이블에 바로 저장
	- JSON 문서를 삽입, 업데이트 및 검색가능

3. 키-값(Key-Value) 데이터 모델 지원
	- NoSQL(No Schema)
		- Amazon DynamoDB는 유연한 데이터베이스 스키마가 특징입니다. 테이블의 데이터 항목에 있는 속성이나 속성 수가 동일하지 않아도 됩니다. 여러 데이터 유형(문자열, 숫자, 바이너리 데이터 및 세트)은 풍부한 데이터 모델을 제공
	- 기본 키와 글로벌 보조 인덱스 및 로컬 보조 인덱스를 지원

4. 원활한 확장
	- Amazon DynamoDB에서는 API 및 AWS Management Console을 통해 처리량과 스토리지를 원활하게 자동으로 확장가능
	- 한 번에 확장할 수 있는 처리량 또는 스토리지의 용량에는 사실상 제한이 없음.

5. 고가용성
	- Amazon DynamoDB는 한 리전의 3개 시설에 데이터를 동시에 자동 복제할 수 있기 때문에 높은 가용성을 유지
	- 개별 시스템에 대해서나 시설 차원의 장애가 발생한 상황에서도 데이터를 손쉽게 보호할 수 있습니다.

6. 보조 인덱스
	- Amazon DynamoDB에서는 보조 인덱스를 사용하여 모든 속성(열)을 대상으로 효율적으로 쿼리할 수 있는 유연성을 제공합니다. 언제든 테이블에 대한 보조 인덱스를 생성하고 삭제할 수 있습니다.

7. 스트림
	- Amazon DynamoDB 스트림은 모든 DynamoDB 테이블에 항목 수준 변경 사항을 시간 순으로 표시
	- DynamoDB 스트림을 사용하면 최신 항목 수준 변경 사항을 추적하거나 지난 24시간 모든 항목 수준 업데이트를 얻을 수 있으며, 해당 데이터를 사용하여 복제, 구체화된 보기, 백업 및 다른 서비스와의 통합을 위한 창의적인 애플리케이션을 구축가능

8. 교차 리전 복제
	- Amazon DynamoDB는 AWS 리전 간 자동으로 DynamoDB 테이블을 복제하는 교차 리전 복제를 지원합니다.
	- 교차 리전 복제를 사용하여 짧은 지연 시간의 데이터 액세스, 보다 나은 트래픽 관리, 손쉬운 재해 복구 및 데이터 마이그레이션으로 전역적으로 배포된 애플리케이션을 구축

9. 트리거
	- Amazon DynamoDB는 AWS Lambda와 통합되어 트리거를 제공
	- 트리거를 사용하면 DynamoDB 테이블에서 항목 수준 변경 사항이 감지되었을 때 커스텀 함수를 자동으로 실행가능

10. 무료 텍스트 검색
	- DynamoDB는 [Amazon DynamoDB Logstash 플러그인](https://github.com/awslabs/logstash-input-dynamodb)을 이용해 [Elasticsearch](https://www.elastic.co/kr/)와 통합됩
	- 이 통합을 기반으로 메시지, 위치, 태그, 키워드 등 DynamoDB 콘텐츠를 쉽게 검색가능

11. DynamoDB Titan 그래프 데이터베이스 통합
	- DynamoDB는 Titan과 통합되어 작고 큰 크기의 그래프 모두를 최대 수천억 개의 정점과 간선까지 저장 및 트래버스 가능.
	- 그래프 데이터베이스는 소셜 네트워크, 고객 관계 관리(CRM), 인벤토리, 물류 관리, 패턴 일치, 추천 엔진 등 각종 관계를 빠르게 순회하도록 최적화

12. 탁월한 일관성, Atomic Counter
	- 대다수 비관계형 데이터베이스와 달리, Amazon DynamoDB에서는 데이터 읽기에 탁월한 일관성을 유지하므로 항상 최신 값을 확인
	- Atomic Counter를 기본으로 지원하여 단일 API 호출만으로도 자동으로 숫자 속성값을 증감할 수 있습니다.

13. 모니터링 통합
	- Amazon DynamoDB는 AWS Management Console에 테이블에 대한 중요 운영 측정치를 표시
	- Amazon CloudWatch와 통합되어 있어 각 Amazon DynamoDB 테이블에 대한 요청 처리량과 지연 시간을 볼 수 있으며 리소스 소비량을 쉽게 추적가능

14. 보안
	- Amazon DynamoDB는 입증된 암호화 방식을 사용하여 사용자를 인증하고 데이터에 불법으로 액세스하는 것을 차단합니다. 또한 AWS Identity and Access Management(IAM)와 통합되어 있어 조직 내 사용자의 액세스를 세부적으로 제어가능

15. Elastic MapReduce 통합
	- 기업에서는 Amazon Elastic MapReduce(Amazon EMR)를 통해 AWS에서 호스팅한 하둡 프레임워크를 사용하여 복잡한 대규모 데이터 세트를 분석가능
	- 고객들은 Amazon EMR을 사용하여 DynamoDB 내에 저장된 데이터 세트를 쉽게 분석하고, Amazon Simple Storage Service(Amazon S3)에 결과를 쉽게 보관 또한, DynamoDB에 원래의 데이터 세트를 보존.

16. Redshift 통합
	- Amazon Redshift는 고급 비즈니스 인텔리전스 기능과 강력한 SQL 기반 인터페이스로 Amazon DynamoDB를 보완
	- DynamoDB 테이블에서 Amazon Redshift로 데이터를 복사할 때, Amazon Redshift 클러스터에 있는 다른 테이블과 조인을 비롯하여 해당 데이터에 대한 복잡한 데이터 분석 쿼리를 수행가능

17. Data Pipeline 통합
	- AWS Data Pipeline을 사용해 Amazon DynamoDB와의 사이에서 데이터 이동 및 변환을 자동화
	- AWS Data Pipeline에 내장된 일정 기능을 이용하면 직접 복잡한 데이터 전송 또는 변환 로직을 쓸 필요 없이 반복 작업을 예약하고 실행가능.

## 3. RedShift
- Amazon Redshift는 속도가 빠른 완전관리형 데이터 웨어하우스로, 모든 데이터를 표준 SQL 및 기존 BI(비즈니스 인텔리전스) 도구를 사용하여 간편하고 비용 효율적으로 분석할 수 있게 해줍니다. Amazon Redshift를 사용하면 정교한 쿼리 최적화, 고성능 로컬 디스크의 컬럼 방식 스토리지, 대량 병렬 쿼리 실행 기능을 사용하여 페타바이트 규모의 정형 데이터에 복잡한 분석 쿼리를 실행할 수 있습니다. 대부분 결과가 몇 초 내에 반환됩니다. Amazon Redshift에서는 약정 없이 시간당 0.25 USD의 작은 규모로 시작하여 기존 솔루션 대비 10%도 안 되는 연간 테라바이트당 1,000 USD의 비용에 페타바이트 규모로 확장할 수 있습니다.
- Amazon Redshift에는 Redshift Spectrum이 포함되어 있어 Amazon S3에 있는 엑사바이트 규모의 비정형 데이터에 대해 SQL 쿼리를 직접 실행할 수 있습니다. 로드하거나 변환할 필요 없으며, Avro, CSV, Grok, ORC, Parquet, RCFile, RegexSerDe, SequenceFile, TextFile 및 TSV를 비롯한 오픈 데이터 형식을 사용할 수 있습니다. Redshift Spectrum은 검색하는 데이터에 따라 쿼리 컴퓨팅 파워를 자동으로 확장하므로, 데이터 세트의 규모와 관계없이 Amazon S3에 대한 쿼리가 빠르게 실행됩니다

#### - 기능
1. 데이터 웨어하우징에 최적화
	- 다양한 혁신을 통해 100기가바이트부터 엑사바이트에 이르는 규모의 데이터 세트에 대해 매우 뛰어난 쿼리 성능을 제공
	- 대량 병렬 처리(MPP) 데이터 웨어하우스 아키텍처를 사용하므로 SQL 작업을 병렬 처리하고 분산하여 사용 가능한 리소스를 모두 활용가능
	- CPU와 드라이브 간 처리량을 극대화하기 위해 로컬 연결 스토리지를 사용하고, 노드 간 처리량을 극대화하기 위해 10GigE 메시 네트워크를 사용
	- Amazon S3에 있는 엑사바이트 규모의 데이터의 경우, Amazon Redshift에서는 쿼리 실행을 자동으로 확장하여 Redshift Spectrum 인스턴스 풀에 위임하며 스캔된 데이터 양을 최소화하는 최적화된 쿼리 플랜을 생성하므로, 데이터 크기와 관계없이 쿼리가 신속하게 실행

2. 패타바이트 규모
	- 콘솔에서 클릭 몇 번이나 간단한 API 호출로 손쉽게 데이터 웨어하우스의 노드 수 또는 유형을 변경하고 압축된 사용자 데이터를 페타바이트 규모로 확장
	- 고밀도 스토리지(DS) 노드를 사용하면 매우 저렴한 가격에 하드 디스크 드라이브(HDD)를 사용하는 매우 큰 규모의 데이터 웨어하우스를 생성가능
	- 고밀도 컴퓨팅(DC) 노드를 사용하면 고속 CPU, 대량의 RAM 및 솔리드 스테이트 디스크(SSD)를 사용하는 매우 높은 성능의 데이터 웨어하우스를 생성가능

3. Amazon S3 "데이터 레이크"를 쿼리
	- Redshift Spectrum을 사용하면 로딩이나 ETIL 필요 없이 Amazon S3에 있는 엑사바이트 규모의 비정형 데이터에 대해 쿼리를 실행가능
	- 쿼리를 발행하면, Amazon Redshift SQL 엔드포인트로 전달되고 여기에서 쿼리 플랜을 생성하고 최적화
	- Amazon Redshift는 로컬에 있는 데이터와 Amazon S3에 있는 데이터가 무엇인지 파악하고, 읽어와야 하는 Amazon S3 데이터 양을 최소화하기 위한 플랜을 생성하고, 공유 리소스 풀의 Amazon Redshift Spectrum 작업자에 Amazon S3에서 데이터를 읽고 처리하도록 요청한 후, 결과를 Amazon Redshift 클러스터로 가져와서 나머지 작업을 처리

4. 내결함성
	- 클러스터의 노드에 쓰이는 모든 데이터는 해당 클러스터 내의 다른 노드에 자동 복제되며 모든 데이터는 Amazon S3에 계속 백업
	- 클러스터 상태를 계속해서 모니터링하고, 실패한 드라이브의 데이터를 자동으로 다시 복제하며, 필요에 따라 노드를 교체합니다.

5. 자동백업
	- 새로운 데이터를 Amazon S3로 계속해서 자동 백업하고, 1일에서 최대 35일까지 사용자가 정의한 기간 동안 스냅샷을 저장
	- 사용자는 언제든 자체 스냅샷을 생성할 수 있고 생성된 스냅샷은 명시적으로 이를 삭제할 때까지 보관됩니다.
	- Amazon Redshift는 재해 복구를 위해 스냅샷을 다른 리전의 S3에 비동기적으로 복제
	- 클러스터를 삭제하면 시스템 스냅샷은 삭제되지만, 사용자 스냅샷은 이를 명시적으로 삭제할 때까지는 사용할 수 있습니다.

6. 빠른 복원
	- AWS Management Console 또는 Amazon Redshift API를 사용하여 원하는 시스템 또는 사용자 스냅샷으로 클러스터를 복원 가능
	- 시스템 메타데이터가 복원되는 대로 사용이 가능하며 사용자 데이터가 백그라운드에서 스풀링되는 동안 쿼리 실행을 시작가능

7. 암호화
	- 몇몇 매개 변수 설정만으로 전송 중인 데이터를 보호하기 위해 SSL을 사용하고 저장된 데이터를 보호하기 위해 하드웨어 가속 AES-256 암호화를 사용하도록 Amazon Redshift를 설정

8. 네트워크 격리
	- Amazon Redshift를 사용하면 방화벽 규칙을 구성하여 데이터 웨어하우스 클러스터에 대한 네트워크 액세스를 제어가능
	- Amazon VPC 내에서 Amazon Redshift를 실행하여 자체 가상 네트워크에 있는 데이터 웨어하우스 클러스터를 격리하고 업계 표준의 암호화된 IPSec VPN을 사용하여 기존 IT 인프라에 연결가능

9. 감사 및 규정 준수
	- Amazon Redshift는 AWS CloudTrail과 통합되어 모든 Redshift API 호출을 감사
	- 데이터베이스에 대한 연결 시도, 쿼리 및 변경을 비롯한 모든 SQL 작업을 로그에 기록
	- 사용자는 시스템 테이블에 대한 SQL 쿼리를 사용하여 이러한 로그에 액세스하거나 로그를 Amazon S3의 안전한 위치로 다운로드하도록 선택가능
	- Amazon Redshift는 SOC1, SOC2, SOC3 및 PCI DSS Level 1 요구 사항을 준수


## 4. AuroraDB
- Amazon Aurora는 고성능 상용 데이터베이스의 속도와 가용성에 오픈 소스 데이터베이스의 간편성과 비용 효율성을 결합한 MySQL 및 PostgreSQL 호환 관계형 데이터베이스 엔진입니다. **Amazon Aurora는 MySQL보다 5배 뛰어난 성능과 상용 데이터베이스의 보안성, 가용성 및 안정성을 1/10의 비용으로 제공**.
- Amazon Aurora는 데이터를 안전하게 보호하는 완전 분산형 자가 복구 스토리지 시스템상에 구축된 관리형 데이터베이스 서비스입니다. 데이터베이스 모니터링, 데이터베이스 복제, 교차 리전 복사 및 복제, AWS Identity and Access Management, 통합 등과 같은 엔터프라이즈급 기능을 제공합니다. AWS Database Migration Service를 사용하여 기존 데이터베이스를 Amazon Aurora로 손쉽게 마이그레이션 또는 복제할 수 있습니다.

#### - 기능
1. 성능 및 확장성
	- 높은 처리량과 낮은 지터
		- Amazon Aurora는 다양한 소프트웨어와 하드웨어 기술을 사용하여 데이터베이스 엔진이 가용한 컴퓨팅과 메모리, 네트워킹을 충분히 활용할 수 있도록 보장
		- I/O 작업에 Quorum과 같은 분산 시스템 기술을 사용하여 성능 일관성을 향상
		- SysBench 등의 표준 벤치마크 테스트 결과 유사한 하드웨어 사용 시 Stock MySQL 5.6에 비해 처리 성능이 5배 높은 것으로 나타났습니다.

	- 즉각적인 컴퓨팅 조정
		- Amazon RDS API를 사용하거나 AWS Management Console에서 몇 번 클릭하여 vCPU 32개와 RAM 244GiB 범위 내에서 배포에 사용할 컴퓨팅과 메모리 리소스를 확장하거나 축소가능

	- 스토리지 Auto-scaling
		- Amazon Aurora는 데이터베이스 스토리지 용량을 늘려야 하는 경우 데이터베이스 볼륨의 크기를 자동증가
		- 볼륨은 10GB 단위로 증가하고 최대값은 64TB입니다. 볼륨 증가를 처리하기 위해 데이터베이스에 추가 스토리지를 프로비저닝할 필요가 없습니다.

	- 지연 시간이 짧은 Amazon Aurora 읽기 전용 복제본
		- Amazon Aurora Replicas를 만들어 여러 인스턴스에서 들어오는 대용량 애플리케이션 읽기 트래픽을 처리함으로써 전체 읽기 처리량을 향상
		- Amazon Aurora Replicas는 소스 인스턴스와 동일한 기본 스토리지를 공유하여 비용을 낮추며 복제본 노드에서 쓰기를 수행할 필요가 없습니다. 이에 따라 남는 처리 용량을 읽기 요청에 사용하고 복제본 지연 시간을 대개 10밀리초 이하로 낮춥니다.
	- Amazon Aurora 데이터베이스당 최대 15개의 Amazon Aurora Replicas를 만들 수 있습니다.

2. 안정성
	- 인스턴스 모니터링 및 복구
		- Amazon RDS는 Amazon Aurora 데이터베이스와 기본 EC2 인스턴스의 상태를 지속적으로 모니터링합니다. 데이터베이스 장애 시 Amazon RDS는 데이터베이스 및 관련 프로세스를 자동으로 다시 시작합니다. Amazon Aurora는 데이터베이스 재실행 로그로 장애 복구를 리플레이할 필요가 없으므로 재시작 시간이 대폭 줄어듭니다. 또한, Amazon Aurora는 데이터베이스 프로세스에서 데이터베이스 버퍼 캐시를 격리하여 캐시에서 데이터베이스를 다시 시작할 수 있게 합니다.

	- Aurora Replicas를 통한 다중 AZ 배포
		- 인스턴스 장애 시 Amazon Aurora는 RDS 다중 AZ 기술을 사용하여 3개의 가용 영역에서 생성한 최대 15개의 Amazon Aurora Replicas 중 하나로 장애 조치를 자동화
		- Amazon Aurora Replicas가 프로비저닝되지 않은 경우 장애가 발생하면 Amazon RDS에서 자동으로 새로운 Amazon Aurora DB 인스턴스 생성을 시도

	- 내결함성 및 자가 치유 스토리지
		- 데이터베이스 볼륨에서 각 10GB 청크가 세 개의 가용 영역에 6가지 방법으로 복제
		- 됩니다. Amazon Aurora 스토리지는 뛰어난 내결함성으로, 데이터베이스 쓰기 가용성에 영향을 주지 않고 최대 2개의 데이터 사본 손실을 처리하고 읽기 가용성에 영향을 주지 않고 최대 3개의 데이터 사본 손실을 투명하게 처리
		- Amazon Aurora 스토리지에는 자가 치유 기능이 있습니다. 데이터 블록과 디스크에 오류가 있는지 계속 스캔하고 오류가 있는 경우 자동으로 교체

	- 지속적인 자동 증분 백업 및 특정 시점으로 복원
		- Amazon Aurora의 백업 기능을 사용하여 인스턴스를 특정 시점으로 복구가능.
		- 이를 통해 데이터베이스를 보존 기간 중 어느 시점(초 단위)으로나 복원할 수 있습니다(최근 5분 전까지 가능). 자동 백업 보존 기간은 최대 35일로 구성
		- 자동화된 백업은 99.999999999% 내구성으로 설계된 Amazon S3에 저장
		- Amazon Aurora 백업은 지속적인 자동 증분 백업이며 데이터베이스 성능에 영향을 미치지 않습니다.

	- 데이터베이스 스냅샷
		- DB 스냅샷은 Amazon S3에 저장된 인스턴스에 대해 사용자가 시작하는 백업으로서 명시적으로 삭제할 때까지 보관
		- DB 스냅샷은 자동화된 증분 스냅샷을 활용하여 필요한 시간과 스토리지를 절감합니다. 원하는 경우 언제나 DB 스냅샷으로 인스턴스를 생성할 수 있습니다.

3. 보안
	- 네트워크 격리
		- Amazon VPC내에서 실행되는 Amazon Aurora는 자체 가상 네트워크 내에 데이터베이스를 격리하고 산업 표준 암호화 IPsec VPN을 사용하여 온프레미스 IT 인프라에 연결
		- VPC의 Amazon RDS에 대한 자세한 내용은 Amazon RDS 사용 설명서를 참조
		- Amazon RDS를 사용해 방화벽 설정을 구성하고 DB 인스턴스에 대한 네트워크 액세스를 제어가능

	- 리소스 수준 권한
		- Amazon Aurora는 AWS Identity and Access Management(IAM)와 통합되어 AWS IAM 사용자 및 그룹이 특정 Amazon Aurora 리소스(예: DB 인스턴스, DB 스냅샷, DB 파라미터 그룹, DB 이벤트 구독 및 DB 옵션 그룹)에서 수행할 수 있는 작업을 제어하는 기능을 제공
		- Amazon Aurora 리소스를 태그 지정하고, 태그 및 태그 값이 동일한 리소스 그룹에서 IAM 사용자 및 그룹이 수행할 수 있는 작업을 제어
		- 예를 들어, 개발자는 '개발' DB 인스턴스를 수정할 수 있지만 '운영' DB 인스턴스는 데이터베이스 관리자만 수정하고 삭제할 수 있도록 IAM 규칙을 구성가능

	- 암호화
		- Amazon Aurora를 사용하면 사용자가 AWS Key Management Service(KMS)를 통해 생성하고 관리하는 키를 사용해 데이터베이스를 암호화
		- Amazon Aurora 암호화를 실행 중인 데이터베이스 인스턴스에서는 같은 클러스터에 있는 자동 백업, 복제본 및 스냅샷과 마찬가지로 기본 스토리지에 저장된 데이터가 암호화
		- Amazon Aurora는 SSL(AES-256)을 사용하여 전송 중인 데이터를 보호

4. 관리의 용이성
	- 사용 편의성
		- 간편하게 Amazon Aurora를 시작할 수 있습니다. AWS Management Console이나 단일 API 호출을 사용하여 새로운 Amazon Aurora DB 인스턴스를 시작하면 됩니다.
		- Amazon Aurora DB 인스턴스는 선택한 DB 인스턴스 클래스에 적합한 파라미터 및 설정 세트로 미리 구성가능
		- DB 인스턴스를 시작하고 애플리케이션을 연결하기만 하면 됩니다. 이 작업은 몇 분밖에 걸리지 않으며 추가 구성가능
		- DB 파라미터 그룹을 사용하면 데이터베이스를 세부적으로 제어하고 튜닝가능

	- 간편한 마이그레이션
		- Amazon Aurora에서 표준 MySQL 가져오기 및 내보내기 도구를 사용가능
		- MySQL DB 스냅샷용 Amazon RDS에서 새로운 Amazon Aurora 데이터베이스를 손쉽게 만들 수 있습니다.
		- DB 스냅샷 기반의 마이그레이션 작업은 대개 한 시간 이내에 완료되지만 마이그레이션되는 데이터의 양과 형식에 따라 다릅니다.

	- 모니터링 및 지표
		- Amazon Aurora는 추가 비용 없이 DB 인스턴스에 대한 Amazon CloudWatch 지표를 제공
		- AWS Management Console을 사용하여 컴퓨팅, 메모리, 스토리지, 쿼리 처리량, 캐시 적중률 및 활성 연결을 비롯하여 데이터베이스 인스턴스와 관련된 20개 이상의 주요 운영 지표를 볼 수 있습니다.

	- 소프트웨어 자동 패치
		- Amazon Aurora는 최신 패치를 적용하여 데이터베이스를 최신 상태로 유지
		- DB Engine Version Management를 통해 인스턴스의 패치 여부와 시기를 선택적으로 제어가능

	- DB 이벤트 알림
		- Amazon Aurora는 자동화된 장애 조치 같은 중요한 데이터베이스 이벤트를 이메일이나 SMS를 통해 알릴 수 있습니다.
		- AWS Management Console 또는 Amazon RDS API를 사용하여 Amazon Aurora 데이터베이스와 관련된 40개 이상의 다양한 DB 이벤트를 구독가능

# Management
## 1. Cloud Watch
- 내용
	- Amazon CloudWatch는 AWS 클라우드 리소스와 AWS에서 실행되는 애플리케이션을 위한 모니터링 서비스입니다. Amazon CloudWatch를 사용하여 지표를 수집 및 추적하고, 로그 파일을 수집 및 모니터링하며, 경보를 설정하고, AWS 리소스 변경에 자동으로 대응할 수 있습니다.

	- Amazon CloudWatch는 Amazon EC2 인스턴스, Amazon DynamoDB 테이블, Amazon RDS DB 인스턴스 같은 AWS 리소스뿐만 아니라 애플리케이션과 서비스에서 생성된 사용자 정의 지표 및 애플리케이션에서 생성된 모든 로그 파일을 모니터링할 수 있습니다. Amazon CloudWatch를 사용하여 시스템 전반의 리소스 사용률, 애플리케이션 성능, 운영 상태를 파악할 수 있습니다. 이러한 통찰력을 사용하여 문제에 적절히 대응하고 애플리케이션 실행을 원활하게 유지할 수 있습니다.

#### - 기능
1. Amazon EC2 모니터링
	- 추가 비용 없이 Amazon EC2 인스턴스의 CPU 사용률, 데이터 전송, 디스크 사용 활동(기본 모니터링)에 대한 지표를 확인가능
	- 추가 비용을 지불하는 경우 CloudWatch는 더 높은 해상도와 지표 집계를 통해 EC2 인스턴스에 대한 세부 모니터링을 제공

2. 다른 AWS 리소스 모니터링
	- Amazon DynamoDB 테이블, Amazon EBS 볼륨, Amazon RDS DB 인스턴스, Amazon Elastic MapReduce 작업 흐름, Elastic Load Balancer, Amazon SQS 대기열, Amazon SNS 주제 등에 대한 지표를 모니터링.

3. 사용자 지정 지표 모니터링
	- 사용자 애플리케이션에서 생성된 사용자 지정 지표를 간편한 API 요청을 통해 제출하여 Amazon CloudWatch에서 모니터링
	- 애플리케이션의 운영 성능에 중요한 지표를 전송 및 저장하여 문제를 해결하고 추세파악 가능

4. 로그 모니터링 및 저장
	- CloudWatch 로그를 사용하여 기존 시스템, 애플리케이션, 사용자 지정 로그 파일을 사용하는 시스템과 애플리케이션을 모니터링하고 문제를 해결가능
	- 기존 시스템, 애플리케이션, 사용자 지정 로그 파일을 CloudWatch 로그로 전송하여 거의 실시간으로 이러한 로그를 모니터링가능.
	- 시스템 및 애플리케이션을 더 잘 파악하여 운영할 수 있으며, 나중에 액세스할 수 있게 안정성이 뛰어나고 비용이 저렴한 스토리지에 로그를 저장할 수 있습니다.

5. 경보 설정
	- 알림을 수신하거나 다른 자동 조치를 수행하도록 원하는 지표에 경보를 설정
	- **예를 들어 특정 Amazon EC2 지표가 경보 임계값을 초과하면 Auto Scaling을 사용하여 동적으로 EC2 인스턴스를 추가 또는 제거하거나 알림을 수신할 수 있습니다.**

6. 그래프 및 통계 보기
	- Amazon CloudWatch 대시보드를 사용하면 AWS 리소스 및 사용자 지정 지표에 대한 재사용 가능한 그래프를 생성하여 운영 상태를 신속하게 모니터링하고 한눈에 문제파악 가능
	- 지표 데이터는 15개월 동안 보관되므로 최신 데이터 및 기록 데이터를 확인할 수 있습니다.
	- Amazon CloudWatch에서는 AWS Management Console을 통해 계정의 검색, 그래프 처리 및 경보에 대한 모든 지표를 로드가능
	- AWS 리소스 지표와 사용자가 제공한 애플리케이션 지표가 모두 포함됩니다.

---
# Analysis
## 1. Kinesis
- 실시간 스트리밍 데이터를 손쉽게 수집, 처리 및 분석
- Example Usage Architecture
<img src="/images/contents/20171012/aws/kinesisExample.png" width="100%">

#### - Kinesis 장점
1. 실시간
  - 실시간으로 데이터를 수집, 버퍼링 및 처리하여 짧은 시간안에 결과도출
2. 완전 관리형
  - 인프라를 따로 관리할 필요 없음.
3. 확장 가능
  - 모든 규모의 스트리밍 데이터를 유연하게 처리가능

## - Kinesis 메인 기능
#### 1. Amazon Kinesis Firehose
- Firehose는 스트리밍 데이터를 AWS로 로드하는 가장 쉬운 방법입니다. 스트리밍 데이터를 캡처하고 변환하여 Amazon Kinesis Analytics, Amazon S3, Amazon Redshift 및 Amazon Elasticsearch Service로 로드하여, 기존 비즈니스 인텔리전스 도구 및 이미 사용하고 있는 대시보드를 통해 거의 실시간으로 분석할 수 있습니다.

- How to Use
<img src="/images/contents/20171012/aws/firehoseExample.png" width="100%">

#### - Firehose 장점
1. 사용 편의성
  - Management Console(GUI)을 통한 손쉬운 캡처 및 로드 기능
2. AWS 데이터 스토어와 통합
  - S3, RedShift, ElasticSearch와 통합하여 운용가능
3. 서버 없는 데이터 변환
  - 데이터 스토어의 로드되기 전에 데이터 스토어에서 요구하는 형식으로 변환 가능.
4. 거의 실시간
  - 60초 간격으로 데이터 캡처/로드
5. 지속적인 관리 불필요

#### 2. Amazon Kinesis Analytics
- Amazon Kinesis Analytics는 새로운 프로그래밍 언어 또는 처리 프레임워크를 배울 필요 없이 표준 SQL을 통해 실시간으로 스트리밍 데이터를 처리할 수 있는 가장 쉬운 방법입니다.

- How to Use
<img src="/images/contents/20171012/aws/analyticsExample.png" width="100%">

#### - Amazon Kinesis Analytics 장점
1. 강력한 실시간 처리
  - 1초 미만의 처리 지연시간으로 실시간 분석
2. 완전 관리형
3. 자동 탄력성
4. 사용 편의성
  - 표준 SQL
  - Schema 편집기
  - SQL 편집기
  - SQL 템플릿 제공

#### 3. Amazon Kinesis Streams
- Amazon Kinesis Streams를 사용하면 특수 요구에 맞춰 스트리밍 데이터를 처리 또는 분석하는 사용자 지정 애플리케이션을 구축할 수 있습니다. Kinesis Streams는 웹사이트 클릭스트림, 금융 거래, 소셜 미디어 피드, IT 로그 및 위치 추적 이벤트와 같은 수십만 개의 소스에서 시간당 테라바이트 규모의 데이터를 지속적으로 캡처 및 저장할 수 있습니다.

- How to Use
<img src="/images/contents/20171012/aws/steamExample.png" width="100%">

#### - Amazon Kinesis Streams 장점
1. 실시간
2. 보안
  - 데이터 암호화를 통한 규제 및 규정 준수 요구사항 충족
    - 서버 측 암호화
    - [AWS KMS 마스터 키](https://aws.amazon.com/ko/kinesis/streams/faqs/#kinesis-encryption)
3. 사용 편의성
  - KPL(Kinesis Producer Library)
    - Get Data Stream From Server(data ingestion)
  - KCL(Kinesis Client Library)
    - Post Data Stream to Client(Java, NodeJS, .NET, Python, Ruby)
4. 병렬 처리
  - 병렬처리로 진행되어 분석/전송을 나누어 가능
5. 탄력성
6. 안전성

# Reference
- [AWS](https://aws.amazon.com/ko/?nc2=h_lg)
- [AWS Official Commands](https://docs.aws.amazon.com/cli/latest/index.html)
- [AWS Command Line Interface에서 상위 수준 s3 명령 사용](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/using-s3-commands.html)
