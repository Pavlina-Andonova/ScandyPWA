import {
    NEWSLETTER_COLUMN,
    RENDER_NEWSLETTER as SOURCE_RENDER_NEWSLETTER
} from 'SourceComponent/Footer/Footer.config';
import facebookIcon from 'Style/icons/logos/facebook.svg';
import linkedinIcon from 'Style/icons/logos/linkedIn.svg';
import twitterIcon from 'Style/icons/logos/twitter.svg';

export const COLUMN_MAP = [
    {
        title: __('Additional info'),
        items: [
            {
                href: '/privacy-policy-cookie-restriction-mode',
                title: __('Privacy Policy')
            },
            {
                href: '/terms-and-conditions',
                title: __('Terms of use')
            },
            {
                href: '/privacy-policy-cookie-restriction-mode',
                title: __('Use of Cookies')
            }
        ]
    },
    {
        title: __('Popular categories'),
        items: [
            {
                href: '/women',
                title: __('Women')
            },
            {
                href: '/men',
                title: __('Men')
            },
            {
                href: '/accessories',
                title: __('Accessories')
            }
        ]
    },
    {
        title: __('Follow'),
        isItemsHorizontal: true,
        items: [
            {
                href: 'https://www.linkedin.com/company/scandipwa',
                src: linkedinIcon,
                title: __('LinkedIn')
            },
            {
                href: 'https://www.facebook.com/ScandiPWA/',
                src: facebookIcon,
                title: __('Facebook')
            },
            {
                href: 'https://twitter.com/scandipwa',
                src: twitterIcon,
                title: __('Twitter')
            }
        ]
    },
    NEWSLETTER_COLUMN
];

export {
    NEWSLETTER_COLUMN
};

// TODO: implement RENDER_NEWSLETTER
export const RENDER_NEWSLETTER = SOURCE_RENDER_NEWSLETTER;
