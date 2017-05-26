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

export const makeUpdate = (oldStore) => {
	const {numB, messageA} = oldStore;

	return Object.assign({}, oldStore, {
		numB: numB + 1,
		messageA: messageA + String.fromCharCode(Math.floor(Math.random() * 255)),
	});
};

const Store = {
	numB: 0,
	messageA: '',
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
		</div>
	}
}


ReactDOM.render(<Main />, document.querySelector('#app'))







