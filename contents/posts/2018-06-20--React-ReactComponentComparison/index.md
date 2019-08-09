---
title: "[React/Component] React Component 종류와 차이점"
author: Seolhun
date: 2018-06-20
category: "React"
tags: ['JavaScript', 'React', 'Component']
banner: "./assets/covers/react.png"
---

안녕하세요. 설훈입니다. 정말 오랜만(?)에 블로그 글을 적어보려고 합니다. 이번 내용은 간단하게 알아보는 React Coponent 종류와 차이점에 대해서 정리하고 예제를 만들어보고자 함입니다.
한번 정리해보겠습니다.


## Intro
React에는 3개 종류의 Component가 있습니다. 각각의 용도가 다르기 때문에 각각의 특징을 이해하여 사용하면 좋을것 같습니다. 이를 조사하기에 앞서 React의 렌더링 시점에 대해서 간단히 짚고 넘어가겠습니다.

## React Component 종류?
1. (Class)Component
  - 상태와 라이프사이클을 가지고 있는 기본적인 Component
2. PureComponent
  - 기본적인 Component와 비슷하나, `shouldComponentUpdate()` 메소드가 shallow comparison 로직으로 구현되어있는 Component.
3. Functional Component(함수형 컴포넌트)
  - 상태와 라이프사이클 필요없이 하나의 함수로 props를 이용한 DOM만 그려주는 Component

## 1. React.Component
React.Component는 기본적으로 props와 state, LifeCycle API를 함께 사용해야할 때 사용되는 Component입니다. 기본적으로 이러한 구조를 비교하기 위해서는 Functional Component가 많이 언급됩니다. Functional Component는 간단한 하나의 함수로서 props를 인자로 받는 것이기 때문입니다. 즉, 내부에는 State나, LifeCycle API를 가지고 있지 않습니다. 더 정확히 표현하면, React 관련 Component를 상속받지 않기 때문에 하나의 함수라고만 보는 것이 더 편합니다.

React.Component를 확장(extends)해서 Component를 만들 때, `shouldComponentUpdate()` 메소드를 별도로 선언하지 않았다면 Component는 `shouldComponentUpdate()`를 항상 true를 리턴하여 props, state 값이 변경되면 항상 리렌더링(re-render)됩니다.

> `shouldComponentUpdate()`를 직접 작성하고 싶다면 this.props와 nextProps를 비교하고 this.state와 nextState를 비교하여 true/false를 반환하면 됩니다. true를 반환하면 재랜더링이 되고, false를 반환하면 상태가 변경되도 하위 구성 요소가 다시 렌더링되지 않습니다. shouldComponentUpdate()에서 shallow comparison 검사를 수행하거나 JSON.stringify()를 사용하지 않는 것이 좋습니다. 이 방법은 매우 비효율적이며 좋은 성능을 내는데 문제가 됩니다.

```jsx
import React from 'react';

class BasicContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
			renderCounter: 0,
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.renderCounter !== nextState.renderCounter) {
			return true;
		}
		if (this.state.counter !== nextState.counter) {
			return false;
		}
		return true;
	}

	increaseCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		})
	}

	decreaseCounter = () => {
		this.setState({
			counter: this.state.counter - 1,
		})
	}

	rerenderIncreaseCounter = () => {
		this.setState({
			renderCounter: this.state.renderCounter + 1,
		})
	}

	rerenderDecreaseCounter = () => {
		this.setState({
			renderCounter: this.state.renderCounter - 1,
		})
	}

	render() {
		return (
			<section>
				<h2>BasicComponent</h2>
				<div className='row'>
					<div className='col-sm-12'>
						<div className='btn-group' role='group' aria-label='Basic example'>
							<button type='button' className='btn btn-secondary btn-success' onClick={this.increaseCounter}>Increment</button>
							<button type='button' className='btn btn-secondary btn-warning' onClick={this.decreaseCounter}>Decrement</button>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-12'>
						<div className='btn-group' role='group' aria-label='Basic example'>
							<button type='button' className='btn btn-secondary btn-success' onClick={this.rerenderIncreaseCounter}>Re-Render Increment</button>
							<button type='button' className='btn btn-secondary btn-warning' onClick={this.rerenderDecreaseCounter}>Re-Render Decrement</button>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-12'>
						{
							`counter : ${this.state.counter}`
						}
					</div>
					<div className='col-sm-12'>
						{
							`renderCounter : ${this.state.renderCounter}`
						}
					</div>
				</div>
			</section>
		);
	}
}

export default BasicContainer;

```

## 2. PureComponent
React.PureComponent는 React.Component와 다른 점이 있다면, `shouldComponentUpdate()`를 구현여부입니다. PureComponent의 경우는 얕은 비교를 통해 props와 state가 바뀌면 재렌더링 하는 로직(shallow comparisom)이 구현되어 있습니다. 구현된 shallow comparison의 한계로는, 중첩된 오브젝트같은 경우를 파악할 수 없기 때문에 PureComponent 사용시 이를 유의하여 사용하면 좋을 것입니다. 또한, 재랜더링이 많은 경우 계속된 비교 연산을 통해 랜더링이 느려질 수 있으므로 유의해야 합니다. 이럴 때는 `forceUpdate()` 메소드를 선언하는 것이 더 편리할 수 있습니다.

```jsx
import React from 'react';

class PureComponent extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
		}
	}

	increaseCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		})
	}

	decreaseCounter = () => {
		this.setState({
			counter: this.state.counter - 1,
		})
	}

	render() {
		return (
			<section>
				<h2>PureComponent</h2>
				<div className='row'>
					<div className='col-sm-12'>
						<div className='btn-group' role='group' aria-label='Basic example'>
							<button type='button' className='btn btn-secondary btn-success' onClick={this.increaseCounter}>Increment</button>
							<button type='button' className='btn btn-secondary btn-warning' onClick={this.decreaseCounter}>Decrement</button>
						</div>
					</div>
					<div className='col-sm-12'>
						{
							`counter : ${this.state.counter}`
						}
					</div>
				</div>
			</section>
		);
	}
}

export default PureComponent;
```

## 3. Functional Component
함수형 Component는 클래스 기반의 Component와 달리, state, 라이프 사이클 메소드(componetDidMount, shouldComponentUpdate 등등..)와 ref 콜백을 사용 할 수 없다는데 있습니다. 함수형 컴포넌트는

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const FunctionalComponent = (props) => {
	return (
		<section>
			<h2>FunctionalComponent</h2>
			<div className='row'>
				<div className='col-sm-12'>
					<div className='btn-group' role='group' aria-label='Basic example'>
						<button type='button' className='btn btn-secondary btn-success' onClick={props.increaseCounter}>Increment</button>
						<button type='button' className='btn btn-secondary btn-warning' onClick={props.decreaseCounter}>Decrement</button>
					</div>
				</div>
				<div className='col-sm-12'>
						{
							`counter : ${props.counter}`
						}
					</div>
					<div className='col-sm-12'>
						{
							`renderCounter : ${props.renderCounter}`
						}
					</div>
			</div>
		</section>
	);
}

FunctionalComponent.propTypes = {
	increaseCounter: PropTypes.func.isRequired,
	decreaseCounter: PropTypes.func.isRequired,
	counter: PropTypes.number.isRequired,
	renderCounter: PropTypes.number.isRequired,
}

class WarpperFunctionalContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
			renderCounter: 0,
		}
	}

	increaseCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		})
	}

	decreaseCounter = () => {
		this.setState({
			counter: this.state.counter - 1,
		})
	}

	render() {
		return (
			<section>
				<FunctionalComponent
					increaseCounter={this.increaseCounter}
					decreaseCounter={this.decreaseCounter}
					counter={this.state.counter}
					renderCounter={this.state.renderCounter}
				/>
			</section>
		);
	}
}

export default WarpperFunctionalContainer;
```

## Outro
React의 Component를 간단히 조사하면서 많은 것을 읽고 배울 수 있었습니다. 특히, 기존의 작성하던 Component들의 종류에 따라 PureComponent로 변경하면 더 좋을것으로 판단되는 것들을 알 수 있었고, Functional로 변경하여 Component를 더 직관적으로 표현할 수 있을 것이라는 확신을 얻었습니다.

더 알아보아야 할 것은, `shallow comparison`에 대한 방법과 정말 어디까지 비교를 시행하는지, 그리고 얼마만큼의 속도를 나타내는지를 알아볼 필요가 생겼습니다. 추가적으로, ReactDOM의 VirtualDOM의 랜더링 트리 방식에 대한 학습을 좀 더 지켜봐야 할 것 같습니다. 현재, 저희 개발팀에서 팀원 중 한분이 트리 구조의 불필요한 depth가 많아지므로 인한 속도문제가 있다라는 얘기를 많이 하였습니다. 이와 같은 언급의 배경은, VirtualDOM의 알고리즘은, 결국 O(n)의 복잡도를 가지게 되고 트리의 깊이에 따라 해당 비교로직이 무겁게 작동될 가능성이 있기 때문입니다.

이러한 인사이트로 이번 글을 통해 앞으로 해야할것은 Component의 사용에 대한 기준과 코드리뷰시 이를 좀 더 같이 토론하고 의견을 나눠보는 것이 좋을 것으로 판단합니다. 추기적으로, VirtualDOM과 트리비교 알고리즘에 대한 간단한 학습을 할 수 있다면, 성능에 대한 개선점을 더 쉽게 찾아내지 않을까 싶습니다. 최근, 저희 대쉬보드에 [React-Virtualized](https://github.com/bvaughn/react-virtualized)를 도입하고 있습니다. 위 사항들을 더 학습하고 이해한다면 성능개선 및 React의 핵심이 되는 코드들을 더 쉽게 이해하지 않을까 싶습니다.

앞으로 더 React와 관련된 코드와 글을 올리도록 노력하겠습니다. 감사합니다.

## References
- [React Components, Elements, and Instances](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca)
- [react-component-api](https://reactjs.org/docs/react-api.html)
- [TOAST - React 렌더링과 성능 알아보기](http://meetup.toast.com/posts/110)
- [shouldcomponentupdate-in-action](https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action)
