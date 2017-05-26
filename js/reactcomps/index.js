import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class CompA extends Component {
	render() {
		const {messageA} = this.props;
		return <div>{messageA}</div>;
	}
}

class CompB extends Component {
	render() {
		const {numB} = this.props;

		if (numB % 2 === 0) {
			return <div>EVEN {numB}</div>
		}

		return <div>ODD {numB}</div>;
	}
}

class CompC extends Component {
	render() {
		const {numC} = this.props;
		console.log(numC)
		if (numC % 10 === 0) {
			return <div>{numC}</div>
		}

		return <div>Not divisible by 10</div>
	}
}

export const makeUpdate = (oldStore) => {
	const {numB, messageA, numState} = oldStore;

	return Object.assign({}, oldStore, {
		numB: numB + 1,
		messageA: messageA + String.fromCharCode(Math.floor(Math.random() * 255)),
		numState: numState+15,
	});
};

const Store = {
	numB: 0,
	messageA: '',
	numState: 0,
};

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = Store;
	}

	onBtnClick() {
		this.setState(makeUpdate(this.state))
		// const {numB, messageA} = this.state;
		// this.setState({
		// 	numB: numB + 1,
		// 	messageA: messageA + String.fromCharCode(Math.floor(Math.random() * 255)),
		// })
	}

	render() {
		return <div className="foobar">
			<button 
				className="ui primary button" 
				onClick={(e) => this.onBtnClick(e)}>Foobar</button>
			<CompA messageA={this.state.messageA} />
			<CompB numB={this.state.numB} />
			<CompC numC={this.state.numState} />
		</div>
	}
}


ReactDOM.render(<Main />, document.querySelector('#app'))







