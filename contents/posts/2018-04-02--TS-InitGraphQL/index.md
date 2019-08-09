---
author: Seolhun
banner: "./assets/covers/js.png"
category: "GraphQL"
date: 2018-04-03
subTitle:  ""
tags: ['Javascript', 'Typescript', 'NodeJS', 'GraphQL']
title: "[JS/TS/GraphQL] GraphQL 시작해보기 - Part 1"
---

이번에 간단히 NodeJS와 GraphQL로 회사에 직원들과 책을 관리할 수 있는 프로젝트를 만들어보았습니다.
이와 관련하여 간단히 정리해보자 합니다.

- [Example-GraphQL Repositroy](https://github.com/Seolhun/example-graphql)


## Intro
GraphQL로 프로젝트를 진행하면서 개인적으로 `GraphQL은 객체지향`의 가치를 갖고 있다고 얘기하고 싶습니다. 이유는, 각각의 타입을 정의하여 재사용 할 수 있으며, 그 안에서 유혀성 검사 및 다양한 기능들을 쉽게 이용할 수 있기 때문입니다.

공식 홈페이지는 아래와 같이 설명하고 있습니다.

> GraphQL is a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

1. A query language for your API
    - API 호출을 쿼리처럼 질의하여 가져옵니다.
2. Executing queries by using a type system you define for your data
    - 데이터를 정의한 타입을 이용하여 쿼리를 실행합니다.
3. GraphQL isn't tied to any specific database or storage engine
    - GraphQL은 데이터베이스나 스토리지 엔진에 묶여있지 않습니다.


위의 3가지 사항은 앞으로 간단히 코드를 짜면서 확인할 수 있습니다. GraphQL을 사용하므로써 REST로 JSON을 주고받는 일반적인 형식에서 벗어날 수 있는 추가사항이 생길 수 있습니다.
일반적인 REST처럼 GraphQL은 자원에 주소값을 부여하지 않고, Query로 이를 접근할 수 있는 HTTP Interface입니다. 즉, GraphQL은 HTTP 통신을 위한 interface 역할을 수행합니다. HTTP Request 형식을 Query로 요청하며, 해당 서버가 이를 이해할 수 있게 변환시켜 사용할 수 있는 것입니다. 그래서, Server에서 설정시에도 GraphQL-HTTP 등 다양한 Interface와 MiddleWare를 설정하여 서버가 이해할 수 있는 방법으로 바뀌는 것입니다.

가장 중요한 것은 GraphQL도 모든 것을 정의해주어야 합니다. 뭐 개발자로서 당연한 얘기겠지요. 공식 홈페이지의 2번 내용에 해당하는 것입니다. 해당 Type을 다 정의하여 GraphQL이 해당 객체를 인식하고 있어야 합니다. 기존의 'REST도 해당 언어에서 Domain(Model)을 구현하면 같은거 아니야?'라고 생각할 수 있습니다. 하지만, HTTP 계층에서 데이터를 세세하게 요청할 수는 없었습니다(Request Layer에서 인식하지 못한다는 것입니다). 그냥 해당 Domain을 JSON 형식으로 전송해준 것 뿐이죠.

간단한 예를 들어, Github API를 이용해보시면 알 수 있습니다. Github에서 REST로 구성된 API.V3를 호출하면, 필요없는 데이터가 모두 Response로 나옵니다. 이에 반해 GraphQL API.V4은 필요한 데이터만 요청하여 가져올 수 있습니다.

이제 간단히 GraphQL을 사용해보겠습니다.

##### 1. 내용순서
    1. Express 서버 설정하기
    2. GraphQL 시작하기
    3. Schema와 Type이란?
    4. Query와 Mutation이란?
    5. Test

##### 2. Dev Environments
- Language
    - NodeJS 8.9.4
    - Typescript 2.7.1
- IDE
    - Visual Studio Code

이번 설명은 NodeJS와 Typescript를 사용하였습니다. 개인적으로 JS는 거의 Typescript로 사용하고 있습니다. 객체의 타입을 정의하는 것에 강한 집념을 가지고 있습니다.
그래서 Java도 좋아하지만, Script 언어의 매력도 있고 Java보다 훨씬 자유롭고 편리해서 JS를 좋아합니다.

## Contents
##### 1. Express 서버 설정하기
기본 패키지를 설치하겠습니다. Express Framework를 사용할 예정입니다. 그리고, 타입스크립트를 사용하므로써 타입이 정의된 Package도 같이 설치하여줍니다.
1. npm install -g typescript
2. npm init -y
3. tsc --init
  - strict는 제거해줍니다.
4. npm install --save express express-graphql graphql typescript ts-node json-server axios
5. npm install --save-dev @types/express @types/express-graphql @types/graphql

마지막으로 index.ts 파일을 만들어주고 package.json에 있는 main 부분을 `"main": "app/index.ts"`로 바꾸어주고, scripts부분에 `"dev": "ts-node app/index.ts"`를 작성하여 줍니다.
이렇게하여 GraphQL에 필요한 서버 패키지 설정이 끝났습니다.

##### 2. GraphQL 시작하기
1. 간단하게 서버를 실행시킬 코드를 작성하여 줍니다. root에 `app/index.ts` 파일을 만들어줍니다.
2. Express와 GraphQL 설정을 같이 작성하였습니다.
    - GraphQL를 사용하기 위해서는 `API를 쿼리로 호출했을 때, 무엇을 전송해줄 것인가? 즉, schema를 정의해야합니다.`
    - 아래 코드에서 해당 schema 안에 앞으로 GraphQL 설정에 필요한 내용들이 들어갑니다.

```tsx
import express from 'express';
import graphqlHTTP from 'express-graphql';

import { schema } from './routes/graphql/schema';

const app = express();
// GraphQL
app.use('/graphql', graphqlHTTP(async (request) => {
  return {
    schema,
    graphiql: true, // GraphQL 쿼리를 테스트할 수 있는 Dev Tool입니다.
  };
}));

// Run Server
app.listen(7000, () => {
  console.log('=========================app.ts===========================');
  console.log('Listening the server 7000');
  console.log('====================================================');
}).on('error', (err) => {
  console.error(err);
});
```

현재 에러가 나있는 부분을 3,4번의 과정을 통해 해결해나가겠습니다.

##### 3. Schema와 Type이란?
GraphQL에 Schema는 간단하게 `GraphQL이 인식할 수 있는 구조`를 말합니다. GraphQL은 강타입 구조를 가지고 있어 해당 구조 안에 다양한 Type들을 정의하여야만 사용할 수 있습니다.
GraphQL Query 내에서 타입체크 및 유효성 검사 기능도 있어 해당 구조 안에 정의에 맞게 사용하여야 합니다. 기본적으로 사용되는 Type은 Query와 Muation Type입니다.

- 간단하게 schema 코드를 작성해보겠습니다. 경로는 `/app/routes/graphql/schema/index.ts` 입니다.

```tsx
import { GraphQLSchema, printSchema } from 'graphql';
import { mutation } from '../mutation';
import { query } from '../query';

export function getSchemaString() {
  return printSchema(schema);
}

const schema = new GraphQLSchema({
  query,
  mutation,
});

export { schema };
```

---
Query와 Mutation에는 기본적으로 Domain과 같은 객체 Type을 지정해주어야합니다.

- 간단하게 객체 type 코드를 작성해보겠습니다. 해당 파일의 경로는 `/app/routes/graphql/type/index.ts` 입니다.

```tsx
import { GraphQLList, GraphQLObjectType } from 'graphql';
import { GraphQLInt, GraphQLString } from 'graphql/type/scalars';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    birth: { type: GraphQLString },
  },
});

export { UserType };
```

schema 안에는 기본적으로 사용되는 query와 mutation이 들어갑니다. 다음에는 query와 mutation을 정의하겠습니다.

##### 4. Query와 Mutation이란?
query와 mutation은 헷갈릴 수 있지만, 둘다 Query입니다. 하지만, 둘의 명확한 차이점이 있습니다.

둘의 가장 근본적인 차이는 `Query 필드는 병렬로 실행되지만, Mutation 필드는 순차적으로 실행됩니다.` 즉, 해당 Query 안에서 여러개의 요청이 주어지면 Mutation은 순차적으로 프로세스를 완료시킵니다. 그렇기 때문에 query를 사용하여 데이터를 변이시키는 작업은 적합하지 않습니다. 병렬로 실행되어 원하는 프로세스로 작동되지 않기 때문입니다.

이제 간단하게 query와 mutation 코드를 작성해볼 예정입니다. 들어가기에 앞서 제한사항을 말씀드리겠습니다. GraphQL은 database나 storage에 묶여있지 않습니다. 반대로, 해당 데이터가 쿼리되는 과정을 보기위해서는 데이터베이스나 스토리지와 묶여있는 코드를 작성해야합니다. 그렇게되면 설명할게 늘어나므로, `json-server`를 간단하게 사용하여 `axios`로 해당 json-server의 있는 데이터를 호출해서 사용하도록 하겠습니다.

1. root 경로에 `db.json` 파일을 만들어 줍니다.
2. package.json에 `"json-server": "json-server --watch db.json"`를 넣어줍니다.
```json
{
  "users": [
    { "id": 1, "birth": "1990-01-26", "email": "seolhun@seolhun.com", "name": "Seolhun" },
    { "id": 2, "birth": "1980-11-11", "email": "mark@seolhun.com", "name": "Mark" },
    { "id": 3, "birth": "1977-03-15", "email": "john@seolhun.com", "name": "John" },
    { "id": 4, "birth": "1987-07-17", "email": "gabriel@seolhun.com", "name": "Gabriel" },
    { "id": 5, "birth": "1983-05-16", "email": "chris@seolhun.com", "name": "Chris" },
    { "id": 6, "birth": "1990-01-26", "email": "chan@seolhun.com", "name": "Chan" },
    { "id": 7, "birth": "1994-02-28", "email": "solomon@seolhun.com", "name": "Solomon" },
    { "id": 8, "birth": "1992-04-05", "email": "ruby@seolhun.com", "name": "Ruby" },
    { "id": 9, "birth": "1983-10-10", "email": "python@seolhun.com", "name": "Python" },
    { "id": 10, "birth": "1985-05-25", "email": "james@seolhun.com", "name": "James"}
  ]
}
```

- 간단하게 `query` 코드를 작성해보겠습니다.
```tsx
import { GraphQLFieldConfigMap, GraphQLList } from 'graphql';
import { GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { UserType } from '../type/index';

import { User } from '../../../types';

import axios from 'axios';

const UserQuery: GraphQLFieldConfigMap<any, any> = {
  user: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
    },
    async resolve(parent, { id, email, name }: User, context, info) {
      const result = await axios.get(`http://localhost:3000/users/${name}`);
      return result.data;
    },
  },
  users: {
    type: new GraphQLList(UserType),
    async resolve(parent, args, context, info) {
      const result = await axios.get('http://localhost:3000/users');
      return result.data;
    },
  },
};

export { UserQuery };
```

---
- 간단하게 `mutation` 코드를 작성해보겠습니다.
```tsx
import { GraphQLFieldConfigMap, GraphQLNonNull } from 'graphql';
import { GraphQLInt, GraphQLString } from 'graphql/type/scalars';
import { UserType } from '../type/index';

import { User } from '../../../types';

import axios from 'axios';

const UserMutation: GraphQLFieldConfigMap<any, any> = {
  // Basic
  addUser: {
    type: UserType,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      birth: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(parent, { email, name, birth }: User, context, info) {
      const result = await axios.post('http://localhost:3000/users', {
        email,
        name,
        birth,
      } as User);
      return result.data;
    },
  },
  editUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
      name: { type: GraphQLString },
      birth: { type: GraphQLString },
    },
    async resolve(parent, { id, email, name, birth }: User, context, info) {
      const result = await axios.patch(`http://localhost:3000/users/${id}`, {
        email,
        name,
        birth,
      } as User);
      return result.data;
    },
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: GraphQLInt },
      email: { type: GraphQLString },
    },
    async resolve(parent, { id, email }: User, context, info) {
      const result = await axios.delete(`http://localhost:3000/${id}`);
      return result.data;
    },
  },
};

export { UserMutation };
```

---
- Type을 미리 정의해두면 여러 곳에서 객체 안의 값을 제한하여 개발속도 향상에 좋은 효과를 거둘 수 있습니다.
코드에서 `types`에 들어가있는 코드 내용입니다.
```tsx
interface User {
  id?: number;
  email?: string;
  name?: string;
  birth?: string;
}

export { User };
```

##### 5. Test
이렇게 작성되었으면 처음 설정하였던 `graphiql`를 이용하여 테스트해보겠습니다. [http://localhost:7000/graphql](http://localhost:7000/graphql)

1. Query 사용해보기 - 1
```gql
query {
  users {
    id
    birth
    email
    name
  }
}
```

1. Query 사용해보기 - 2
```gql
query {
  users {
    id
    birth
    email
    name
  }

  employees: users {
    id
    birth
    email
    name
  }
}
```

---
2. Mutation 사용해보기 - 1
```gql
mutation {
  addUser(name:"Ronaldo", email:"ronaldo@seolhun.com", birth:"1990-07-21"){
    id
    name
    email
    birth
  }
}

```

2. Mutation 사용해보기 - 2
```gql
mutation {
  addUser(name:"Ronaldo", email:"ronaldo@seolhun.com", birth:"1990-07-21"){
    id
    name
    email
    birth
  }

  editUser(id: 11, name:"Messi"){
    id
    name
    email
    birth
  }
}
```

4. 기타 Fragment 사용해보기.
```gql
query {
  users {
    ...onlyUK
  }
}

fragment onlyUK on User {
  id
  email
}
```

## Outro
이렇게하여 간단하게 GraphQL을 체험해보았습니다. schema 구성부터 query, mutation 등등 기본적인 것을 코드로 작성해보면서 GraphQL이란 것을 간단히 알 수 있었을 것이라고 생각합니다. Query의 장점은 `서로가 원하는 것을 약속한 데로 이행한다.`라고 생각합니다. 기존의 모든 데이터를 받는 것보다 Query 내에서 해당 객체들을 조정할 수 있는 부분이 참 긍정적으로 보여집니다. 또한, 해당 Query들을 잘 구성하면 재사용이 쉽게 가능할 수 있습니다.

문제점으로는 해당 객체들을 변경하는 부분들이 연속적으로 일어나 변경되는 부분에서의 큰 어려움이 있을 것이라고 생각합니다. 또한 Resolver를 통해 통신되기 때문에 속도가 생각보다 느려집니다. 속도 개선 오픈소스는 페이스북에서 [dataloader](https://github.com/facebook/dataloader)이란 것이 있습니다.

추가적으로, 페이스북에서는 GraphQL의 속도문제를 해결하기 위해, 대부분의 데이터를 Cache Storage에 적재시켜 Cache에서 바로 꺼내쓸 수 있게 만든다는 얘기도 들었습니다. DB에서 계속 호출하여 네트워크와 서버비용을 감당하는 것보다, Cache를 통해 서버 비용만을 감당하는 것이 더 합리적일 수도 있다라는 이야기로 보입니다.

이 외에도 GraphQL을 실무적으로 더 접근하면 권한문제를 해결해야 합니다. 요청하는 데이터의 Depth 제한, 권한에 따른 Field 값 제한 등 다양한 부분을 해결해주어야 합니다. 이 또한 오픈소스를 통해 개발들이 일어나고 있으니 블로그나 오픈소스를 찾아보시면 도움이 될 것이라고 생각합니다.

부족하지만, 간단하게 GraphQL에 대해서 알아보는 시간은 여기까지하겠습니다. 이상한 부분이나 부족한 부분은 글로 써주시면 감사합니다.
`다음 블로그는 GraphQL을 수치적으로 접근하여 어떠한 성능이 나오는지와 개선이 일어나는지를 알아보겠습니다.`

## References
- [GraphQL.org](http://graphql.org/)
- [Express-GraphQL](https://github.com/graphql/express-graphql)
