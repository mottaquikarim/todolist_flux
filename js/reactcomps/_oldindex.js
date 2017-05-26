import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
class MyComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hello: 1,
		};
	}
	increment() {
		const {hello} = this.state;
		this.setState({
			hello: hello+1,
		});
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, nextState)
		if (nextState.hello % 2 === 0) {
			return false;
		}
		return true;
	}
	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps', nextProps)
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate', nextProps, nextState)
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate', prevProps, prevState)
	}
	render() {
		return <div>
			<h1>Hello, Wrold. State is {this.state.hello}</h1>
			{this.props.children}
			<p>
				<span onClick={(e) => this.increment()}>LOL</span>
				<a href="http://www.google.com" target="_blank">
					<strong>
						FOOBAR
					</strong>
				</a>
			</p>
		</div>;
	}
}

const randomNum = Math.floor(Math.random()*10);
const divsArr = Array.from(Array(randomNum).keys()).map((i) => <div>{i}</div>);

setTimeout(() => {
	console.log('changing');
	
	ReactDOM.render(<MyComponent>
		{divsArr}
	</MyComponent>, document.querySelector('#app'));
}, 5000);


console.log(divsArr)
ReactDOM.render(<MyComponent>
	{divsArr}
</MyComponent>, document.querySelector('#app'));









