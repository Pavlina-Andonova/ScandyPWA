import { connect } from 'react-redux';

import {
    mapDispatchToProps,
    mapStateToProps as sourceMapStateToProps
} from 'SourceComponent/Footer/Footer.container';

import Footer from './Footer.component';

export {
    mapDispatchToProps
};

/** @namespace ScandyPwaApp/Component/Footer/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    ...sourceMapStateToProps(state)
    // TODO extend mapStateToProps
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
