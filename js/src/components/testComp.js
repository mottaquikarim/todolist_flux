import ReactLite from './ReactLiteLOL';

export class TestComp extends ReactLite {
    constructor(props) {
        super(props);

        this.state = {
            foo: 1
        };
    }
    updateState() {
        this.setState({
            foo: 2,
            bar: 1,
        });
    }
    componentWillUpdate(nP, nS) {
        console.log('---------- componetWillUpdate')
        console.log(nP, nS)
        console.log('---------- componetWillUpdate')
    }
    componentDidUpdate(pP, pS) {
        console.log('---------- componetDidUpdate')
        console.log(pP, pS)
        console.log('---------- componetDidUpdate')
    }
    componentWillReceiveProps(nP) {
        console.log('---------- componentWillReceiveProps')
        console.log(nP)
        console.log('---------- componentWillReceiveProps')
    }
    render() {
        console.log('rendering...');
    }
}

