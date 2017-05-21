export default class ReactLite {
    constructor(props) {
        this.props = props;
    }
    setProps(props) {
        const nextProps = Object.assign({}, props);

        this.componentWillReceiveProps(nextProps);

        const shouldUpdate = this.shouldComponentUpdate(nextProps, this.state);
        if (!shouldUpdate) return;

        this.componentWillUpdate(nextProps, this.state);
        this.render();
        this.componentDidUpdate(this.props, this.state);

        this.props = nextProps;
    }
    setState(state) {
        const nextState = Object.assign({}, this.state, state);

        const shouldUpdate = this.shouldComponentUpdate(this.props, nextState);
        if (!shouldUpdate) return;

        this.componentWillUpdate(this.props, nextState);
        this.render();
        this.componentDidUpdate(this.props, this.state);

        this.state = nextState;
    }
    // stubs
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillReceiveProps(nextProps) {}
}
