import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { CATEGORY_TYPE, CMS_PAGE_TYPE, PRODUCT_TYPE } from './UrlResolver.config';

import './UrlResolver.style';

/** @namespace ScandyPwaApp/Component/UrlResolver/Component */
export class UrlResolverComponent extends PureComponent {
    static propTypes = {
        type: PropTypes.string.isRequired
    };

    renderMap = {
        [CATEGORY_TYPE]: this.renderCategory.bind(this),
        [PRODUCT_TYPE]: this.renderProduct.bind(this),
        [CMS_PAGE_TYPE]: this.renderCmsPage.bind(this)
    };

    renderProduct() {
        return 'product';
    }

    renderCategory() {
        return 'category';
    }

    renderCmsPage() {
        return 'CMS_PAGE';
    }

    render404() {
        return '404';
    }

    renderType() {
        const { type = '404' } = this.props;
        const renderFunction = this.renderMap[type] || this.render404.bind(this);

        return (
            <article block="UrlResolver" elem="Type" mods={ { type } }>
                { renderFunction() }
            </article>
        );
    }

    render() {
        return (
           <main block="UrlResolver">
               { this.renderType() }
           </main>
        );
    }
}

export default UrlResolverComponent;
