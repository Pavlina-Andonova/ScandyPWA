// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import UrlResolver from './UrlResolver.component';
import { CATEGORY_TYPE, CMS_PAGE_TYPE, PRODUCT_TYPE } from './UrlResolver.config';

/** @namespace ScandyPwaApp/Component/UrlResolver/Container */
export class UrlResolverContainer extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    containerFunctions = {
        // getData: this.getData.bind(this)
    };

    typeList = [
        {
            type: CATEGORY_TYPE,
            regex: /category/
        },
        {
            type: PRODUCT_TYPE,
            regex: /product/
        },
        {
            type: CMS_PAGE_TYPE,
            regex: /page/
        }
    ];

    containerProps = () => ({
        type: this._getTypeFromURL()
    });

    _getTypeFromURL() {
        // eslint-disable-next-line fp/no-let
        // for (let i = 0; i < this.typeList.length; i++) {
        //     const { type, regex } = this.typeList[i];

        //     if (regex.test(window.location.pathname)) {
        //         return type;
        //     }
        // }

        const { type } = this.typeList.find(
            ({ regex }) => regex.test(window.location.pathname)
        ) || {};

        return type;
    }

    render() {
        return (
            <UrlResolver
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default UrlResolverContainer;
