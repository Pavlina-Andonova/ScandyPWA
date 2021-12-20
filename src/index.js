/* eslint-disable @scandipwa/scandipwa-guidelines/only-one-class */
/* eslint-disable max-classes-per-file */
import PropTypes from 'prop-types';
import { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

/** @namespace ScandyPwaApp/Index */
export class Wrapper extends Component {
    state = {
        clickCount: 0
    };

    onUpdateWrapper = () => {
        const { clickCount } = this.state;
        this.setState({ clickCount: clickCount + 1 });
    };

    render() {
        const { clickCount } = this.state;

        return (
            <div>
                <Button wrapperCount={ clickCount } />
                <button onClick={ this.onUpdateWrapper }>Update Wrapper</button>
            </div>
        );
    }
}

/** @namespace ScandyPwaApp/Index */
export class Button extends PureComponent {
    static propTypes = {
        wrapperCount: PropTypes.number
    };

    static defaultProps = {
        wrapperCount: 0
    };

    // eslint-disable-next-line @scandipwa/scandipwa-guidelines/use-magic-construct
    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0,
            prevWrapperCount: 0
        };

        // we can make requests here... anything but DOM manipulation
        console.log('constructor', document.getElementById('main-el'));
    }

    // state = {
    //     clickCount: 0
    // };

    static getDerivedStateFromProps(props, state) {
        // no access to current values is present
        // no access to this

        const { wrapperCount } = props;
        const { prevWrapperCount } = state;
        // !Note: we need to keep prevValue in State

        if (wrapperCount !== prevWrapperCount) {
            return {
                clickCount: wrapperCount,
                prevWrapperCount: wrapperCount
            };
        }

        return null;
    }

    componentDidMount() {
        // Implement any DOM manipulation
        // It's triggered by state & props change
        console.log('mount', document.getElementById('main-el'));
    }

    // To prevent updating other components if we use Component instead PureComponent
    // shouldComponentUpdate(nextProps, nextState) {
    //     const { clickCount: nextClickCount } = nextState;
    //     const { clickCount } = this.state;

    //     if (clickCount !== nextClickCount) {
    //         return true;
    //     }

    //     return false;
    // }

    componentDidUpdate(prevProps) {
        const { wrapperCount } = this.props;
        const { wrapperCount: prevWrapperCount } = prevProps;

        if (wrapperCount !== prevWrapperCount) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ clickCount: wrapperCount });
            console.log('update Button');
        }
    }

    onBtnClick = () => {
        const { clickCount } = this.state;
        this.setState({ clickCount: clickCount + 1 });

        // this.setState(({ clickCount }) => ({ clickCount: clickCount + 1 }));
    };

    render() {
        const { clickCount } = this.state;
        return (
            <div id="main-el">
                <button onClick={ this.onBtnClick }>Click Me!</button>
                <p>
                    You clicked me:&nbsp;
                    <b>{ clickCount }</b>
                </p>
            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper />,
    document.getElementById('root')
);
