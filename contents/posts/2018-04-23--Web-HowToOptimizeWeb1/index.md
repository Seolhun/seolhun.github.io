---
author: Seolhun
banner: "/assets/covers/http.png"
category: 'Web'
date : 2018-04-23
subTitle:  ""
tags : ['Web', 'Optimization', 'Cache', 'HTTP', 'gzip', 'Priority']
title : "[Web] 웹사이트의 속도를 개선할 수 있는 방법 9가지 정리 - Part 1"
---

이번에는 웹사이트를 개선하기 위한 구글에서 추천하는 방법들에 간단히 정리해볼까 합니다. 서비스의 성공을 위해 이제는 프론트엔드의 중요성이 많이 커진 만큼 유저들이 불편하지 않도록 만들기 위한 웹 사이트 최적화 방법을 이해/숙지하면 큰 도움이 될 것이라 생각하였습니다.


## Intro
구글에서 잘 정리한 웹 사이트를 개선하기 위한 9가지 방법에 대해서 필요한 정보들을 모아서 정리해보는 시간을 가져볼까 합니다. 너무 잘 작성된 글이지만, 이를 한번 더 정독하면서 조금씩 정리하면 이해하고 숙지하는데 더 큰 도움이 되어 이런 시간을 가져볼까 합니다.

목차는 내용이 커질것으로 생각하여 아래와 같이 2개의 파트로 나눠서 적어볼까 합니다.
#### - [Part 1](/posts/web/20180423-web-howtooptimizeweb1/)
- 방문 페이지 리디렉션 사용 안함
- 압축 사용
- 서버 응답 시간 개선
- 브라우저 캐싱 활용

#### - [Part 2](/posts/web/20180423-web-howtooptimizeweb2/)
- 리소스 축소
- 이미지 최적화
- CSS 전송 최적화
- 표시되는 콘텐츠의 우선순위 지정
- 렌더링 차단 자바스크립트 삭제

## 1. 방문 페이지 리디렉션 방지
이 규칙은 지정된 URL에서 최종 방문 페이지로의 리디렉션이 둘 이상 있음이 PageSpeed Insights에서 감지되면 트리거됩니다.

#### - 개요
`리디렉션은 HTTP 요청과 응답 간 주기를 추가로 트리거하고 페이지 렌더링을 지연시킵니다.` 각 리디렉션이 단일 왕복(HTTP 요청과 응답 간)을 추가하면 가장 좋지만, 최악의 경우 DNS 조회, TCP 핸드셰이크, TLS 협상을 위한 여러 추가적인 왕복에 더해 HTTP 요청과 응답 간 주기가 추가로 발생합니다. 따라서 사이트 속도를 개선하려면 리디렉션의 사용을 최소화해야 합니다.

#### - 다음은 리디렉션 패턴의 예
1. example.com에서는 반응형 웹 디자인을 사용하여 리디렉션이 필요하지 않으며 빠르고 최적화된 상태입니다.
2. example.com → m.example.com/home - 모바일 사용자가 여러 번 왕복해야 하는 불편함이 있습니다.
3. example.com → www.example.com → m.example.com - 모바일 환경이 매우 느립니다.

#### - 해결책
- Responsive Design 적용하기
- ViewPort 적용하기
```html
    <meta name="viewport" content="width=device-width, initial-scale=1">
```
  - meta viewport 값 width=device-width를 사용하면 기기 독립적 픽셀에서 화면 너비에 맞게 페이지를 맞춥니다. 이렇게 하면 렌더링되는 화면이 작은 휴대폰이든 큰 데스크톱 모니터에든 상관없이, 다양한 화면 크기에 맞게 페이지의 콘텐츠를 재배치할 수 있습니다.
- CSS 미디어 쿼리 적용
```html
    <link rel="stylesheet" href="print.css" media="print">
```
```css
    @media print {
      /* print style sheets go here */
    }
    @import url(print.css) print;
```
- 미디어 중단점을 활용한 CSS 작성
```html
    <link rel="stylesheet" href="weather.css">
    <link rel="stylesheet" media="(max-width:600px)" href="weather-2-small.css">
    <link rel="stylesheet" media="(min-width:601px)" href="weather-2-large.css">
```

#### - 더 보기
위의 사항을 더 알고싶으신 분들은 여기를 정독하세요. [Google - Responsive-web-design](https://developers.google.com/web/fundamentals/design-and-ux/responsive/#responsive-web-design)

## 2. 압축 사용
이 규칙은 PageSpeed Insights에서 압축 가능한 리소스가 gzip으로 압축되지 않은 상태로 전송되었음이 감지되면 트리거됩니다.

#### - 개요
`모든 최신 브라우저는 모든 HTTP 요청에서 gzip 압축을 지원하고 자동으로 협상합니다.` gzip 압축을 사용하면 전송되는 응답의 크기를 최대 90%까지 줄일 수 있으며, 이를 통해 리소스 다운로드 시간을 크게 낮추고 클라이언트의 데이터 사용량을 줄이며 페이지의 첫 번째 렌더링 시간을 향상할 수 있습니다. 자세히 알아보려면 [GZIP을 사용한 텍스트 압축을 참조](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#text-compression-with-gzip)하세요.

#### - 권장사항
웹 서버에서 gzip 압축 지원을 사용 설정하고 테스트하세요. HTML5 Boilerplate 프로젝트에는 가장 많이 사용되는 모든 서버용 샘플 구성 파일과 각 구성 플래그 및 설정에 관한 자세한 설명이 포함되어 있습니다. 목록에서 원하는 서버를 찾고 gzip 섹션을 찾은 다음 사용하는 서버가 권장 설정과 같이 구성되어 있는지 확인하세요.

- 웹 서버에서 압축을 사용하는 방법은 아래 사이트에서 참조하세요.
  - Apache: [mod_deflate 사용](http://httpd.apache.org/docs/current/mod/mod_deflate.html)
  - Nginx: [ngx_http_gzip_module 사용](http://nginx.org/en/docs/http/ngx_http_gzip_module.html)
  - IIS: [HTTP 압축 구성](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc771003(v=ws.10))

## 3. 서버 응답 시간 개선
이 규칙은 PageSpeed Insights에서 서버 응답 시간이 200 ms 이상임이 감지되면 트리거됩니다.

#### - 개요
서버 응답 시간은 서버에서 페이지 렌더링을 시작하기 위해 필요한 HTML을 로드하는 데 걸리는 시간에서 Google과 서버 간 네트워크 지연 시간을 차감하여 측정합니다. 실행할 때마다 변동이 있을 수 있지만 차이는 별로 크지 않습니다. 실제로 변동이 심한 서버 응답 시간은 기반 성능에 문제가 있음을 나타낼 수 있습니다.

#### - 권장사항
`서버 응답 시간을 200 ms 아래로 줄여야 합니다.` 서버의 응답 속도를 저하시키는 요인으로는 느린 애플리케이션 로직, 느린 데이터베이스 쿼리, 느린 라우팅, 프레임워크, 라이브러리, 리소스 CPU 부족 현상 또는 메모리 부족 현상 등 수십 가지가 있습니다. 서버의 응답 시간을 개선하려면 이러한 모든 요인을 고려해야 합니다.

`서버 응답 시간이 높은 이유를 밝히기 위한 첫 단계는 측정입니다.` 그런 다음 데이터를 갖추고 문제 해결 방법에 관한 적절한 가이드를 참조하세요. 문제를 해결한 후에도 서버 응답 시간을 계속 측정하여 향후 성능 병목 현상을 해결해야 합니다.

1. 기존 성능과 데이터를 수집 및 검사합니다. 사용 가능한 성능과 데이터가 없으면 자동화된 웹 애플리케이션 모니터링 솔루션을 사용하여 평가하거나 맞춤 계측 도구를 추가하세요. 대부분의 플랫폼에서 사용할 수 있는 호스팅된 오픈소스 버전의 솔루션이 있습니다.
2. 상위 성능 병목 현상을 식별 및 해결합니다. 많이 사용되는 웹 프레임워크나 콘텐츠 관리 플랫폼을 사용하는 경우 성능 최적화 권장사항 도움말을 참조하세요.
3. 향후 있을 수 있는 성능 퇴행을 모니터링 및 경고합니다.

## 4. 브라우저 캐싱 활용
이 규칙은 PageSpeed Insights에서 서버의 응답에 캐싱 헤더가 포함되어 있지 않음을 감지하거나 리소스가 잠깐 동안만 캐시되도록 지정된 경우 트리거됩니다.

#### - 개요
네트워크를 통해 리소스를 가져오면 속도도 느리고 비용도 많이 듭니다. 즉, 다운로드하는 데 클라이언트와 서버 간에 왕복이 여러 번 발생할 수 있으며 이로 인해 처리가 지연되고 페이지 렌더링이 차단되며 방문자에게 데이터 비용이 부과될 수도 있습니다. `모든 서버 응답은 캐싱 정책을 지정해야 클라이언트에서 이전에 가져온 응답을 재사용할 수 있는지 여부와 시기를 판단하는 데 도움이 됩니다.`

#### - 권장사항
각 리소스는 이 리소스가 캐시될 수 있는지, 리소스를 누가 얼마 동안 캐시할 수 있는지, 가능한 경우 캐싱 정책이 만료되면 어떻게 효율적으로 재확인될 수 있는지와 같은 질문에 부합하는 명시적인 캐싱 정책을 지정해야 합니다. `서버에서 응답을 반환할 때 Cache-Control 및 ETag 헤더를 제공해야 합니다.`

1. Cache-Control 헤더는 브라우저 및 기타 중간 캐시에서 개별 응답을 캐시할 수 있는 방법과 기간을 정의합니다. 자세히 알아보려면 [Cache-Control로 캐싱](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#cache-control)을 참조하세요.
2. ETag 헤더에서는 리소스가 마지막으로 요청된 후 변경되었는지 확인하기 위해 브라우저에서 자동으로 보내는 재확인 토큰을 제공합니다. 자세히 알아보려면 [ETag로 캐시된 응답의 유효성 검사](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#validating-cached-responses-with-etags)를 참조하세요.

- 사이트에 가장 적합한 캐싱 정책을 확인하려면 다음 가이드를 참조하세요.
  1. 최적의 Cache-Control 정책 정의
  2. 캐시된 응답 무효화 및 업데이트
  3. 캐싱 검사 목록

`최소 캐시 시간은 1주일이 좋으며 정적 애셋 또는 드물게 변경되는 애셋의 경우 최대 1년이 좋습니다.` 리소스가 무효화되는 시기를 정확히 관리해야 하는 경우 URL 지문이나 버전 기술을 사용하는 것이 좋습니다. 위의 캐시된 응답 무효화 및 업데이트 링크를 참조하세요.

#### - 직접 확인해보기
참고하고 있는 사이트에서 Google Chrome Dev-Tools Network에 들어가서 Resources에 아래와 같은 Response(응답)을 확인할 수 있었습니다. 더 많은 정보가 있지만 관련된 정보만 가져왔고, 간단히 설명하기 위해 수정하였습니다.

```bash
cache-control: public, max-age=120
content-encoding: gzip
content-length: 25852
etag: "aInfpg"
status: 200
```

서버가 응답을 반환할 때는 응답의 콘텐츠 유형, 길이, 캐싱 지시문, 유효성 검사 토큰 등을 설명하는 HTTP 헤더 모음도 방출합니다.
예를 들어, 서버는 25852바이트의 응답을 반환하고, 클라이언트에 최대 120초 동안 이를 캐시하도록 지시하고, 응답이 만료된 후 리소스가 수정되었는지 확인하는 데 사용할 수 있는 유효성 검사 토큰('aInfpg')을 제공합니다.

만약, 캐시가 종료된 후에 다시 Resources를 요청할 때, 변경사항이 없다면, 'If-None-Match' HTTP 요청 헤더 내에서 ETag 토큰을 자동으로 제공합니다. `서버는 현재 리소스와 비교하여 이 토큰을 검사하여 토큰이 변경되지 않은 경우, 서버는 '304 Not Modified' 응답을 반환합니다.` 이 응답은 캐시에 저장된 응답이 변경되지 않았고 추가로 120초 동안 갱신될 수 있음을 브라우저에 알립니다. 참고로, 응답을 다시 다운로드할 필요가 없으므로 시간과 대역폭이 절약됩니다.

#### - 최적의 Cache-Control 정책 정의
<div class='text-center'>
  <img src="../../images/contents/20180423/optimization/http-cache-decision-tree.png" width="50%">
</div>

#### - 더 보기
위의 사항을 자세히 보고싶으신 분들은 여기를 정독해주세요. [Google - Cache Control](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#cache-control)

## Outro
구글에서 참 잘정리된 문서를 통해 많은 내용을 학습할 수 있었습니다. 그 중 가장 흥미로운 글은 Cache-Control이라고 할 수 있었습니다. 이는 HTTP-완정정복 관련한 책에서도 나오는 내용입니다. HTTP관련한 최적화에는 Cache-Control을 반드시 잘 사용하라라는 내용을 담고 있는데, 이와 관련하여 브라우저와 네트워크 내용을 잘 정리하여 알려주었다고 생각합니다. 다음 5가지 관련사항은 Part2에서 정리해보겠습니다.

## References
- [Google PageSpeed Insights](https://developers.google.com/speed/docs/insights/rules)
