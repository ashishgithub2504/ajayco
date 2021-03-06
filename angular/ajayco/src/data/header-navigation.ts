import { NavigationLink } from '../app/shared/interfaces/navigation-link';
let flag = false;
let enabled = true;
if(localStorage.hasOwnProperty('USERINFO')) {
    flag  = true;
}
export const navigation: NavigationLink[] = [
    {label: 'Home', url: '/', menu: {
        type: 'menu', 
        items: [
            {label: 'Home', url: '/', enabled:enabled},
            // {label: 'Home 2', url: '/home-two'}
        ]
    }},
    // {label: 'Megamenu', url: '/shop/catalog', menu: {
    //     type: 'megamenu',
    //     size: 'nl',
    //     columns: [
    //         {size: 6, items: [
    //             {label: 'Power Tools', url: '/shop/catalog', items: [
    //                 {label: 'Engravers', url: '/shop/catalog'},
    //                 {label: 'Wrenches', url: '/shop/catalog'},
    //                 {label: 'Wall Chaser', url: '/shop/catalog'},
    //                 {label: 'Pneumatic Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Machine Tools', url: '/shop/catalog', items: [
    //                 {label: 'Thread Cutting', url: '/shop/catalog'},
    //                 {label: 'Chip Blowers', url: '/shop/catalog'},
    //                 {label: 'Sharpening Machines', url: '/shop/catalog'},
    //                 {label: 'Pipe Cutters', url: '/shop/catalog'},
    //                 {label: 'Slotting machines', url: '/shop/catalog'},
    //                 {label: 'Lathes', url: '/shop/catalog'}
    //             ]}
    //         ]},
    //         {size: 6, items: [
    //             {label: 'Hand Tools', url: '/shop/catalog', items: [
    //                 {label: 'Screwdrivers', url: '/shop/catalog'},
    //                 {label: 'Handsaws', url: '/shop/catalog'},
    //                 {label: 'Knives', url: '/shop/catalog'},
    //                 {label: 'Axes', url: '/shop/catalog'},
    //                 {label: 'Multitools', url: '/shop/catalog'},
    //                 {label: 'Paint Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Garden Equipment', url: '/shop/catalog', items: [
    //                 {label: 'Motor Pumps', url: '/shop/catalog'},
    //                 {label: 'Chainsaws', url: '/shop/catalog'},
    //                 {label: 'Electric Saws', url: '/shop/catalog'},
    //                 {label: 'Brush Cutters', url: '/shop/catalog'}
    //             ]}
    //         ]}
    //     ]
    // }},
    // {label: 'Megamenu', url: '/shop/catalog', menu: {
    //     type: 'megamenu',
    //     size: 'nl',
    //     columns: [
    //         {size: 6, items: [
    //             {label: 'Power Tools', url: '/shop/catalog', items: [
    //                 {label: 'Engravers', url: '/shop/catalog'},
    //                 {label: 'Wrenches', url: '/shop/catalog'},
    //                 {label: 'Wall Chaser', url: '/shop/catalog'},
    //                 {label: 'Pneumatic Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Machine Tools', url: '/shop/catalog', items: [
    //                 {label: 'Thread Cutting', url: '/shop/catalog'},
    //                 {label: 'Chip Blowers', url: '/shop/catalog'},
    //                 {label: 'Sharpening Machines', url: '/shop/catalog'},
    //                 {label: 'Pipe Cutters', url: '/shop/catalog'},
    //                 {label: 'Slotting machines', url: '/shop/catalog'},
    //                 {label: 'Lathes', url: '/shop/catalog'}
    //             ]}
    //         ]},
    //         {size: 6, items: [
    //             {label: 'Hand Tools', url: '/shop/catalog', items: [
    //                 {label: 'Screwdrivers', url: '/shop/catalog'},
    //                 {label: 'Handsaws', url: '/shop/catalog'},
    //                 {label: 'Knives', url: '/shop/catalog'},
    //                 {label: 'Axes', url: '/shop/catalog'},
    //                 {label: 'Multitools', url: '/shop/catalog'},
    //                 {label: 'Paint Tools', url: '/shop/catalog'}
    //             ]},
    //             {label: 'Garden Equipment', url: '/shop/catalog', items: [
    //                 {label: 'Motor Pumps', url: '/shop/catalog'},
    //                 {label: 'Chainsaws', url: '/shop/catalog'},
    //                 {label: 'Electric Saws', url: '/shop/catalog'},
    //                 {label: 'Brush Cutters', url: '/shop/catalog'}
    //             ]}
    //         ]}
    //     ]
    // }},
    {label: 'Shop', url: '/shop/catalog/power-tools', menu: {
        type: 'menu',
        items: [
            // {label: 'Shop Grid', url: '/shop/catalog/power-tools', items: [
            //     {label: '3 Columns Sidebar', url: '/shop/catalog/power-tools'},
            //     {label: '4 Columns Full',    url: '/shop/category-grid-4-columns-full'},
            //     {label: '5 Columns Full',    url: '/shop/category-grid-5-columns-full'}
            // ]},
            // {label: 'Shop List', url: '/shop/category-list'},
            // {label: 'Shop Right Sidebar', url: '/shop/category-right-sidebar'},
            // {label: 'Product', url: '/shop/product-standard', items: [
            //     {label: 'Product', url: '/shop/product-standard'},
            //     {label: 'Product Alt', url: '/shop/product-columnar'},
            //     {label: 'Product Sidebar', url: '/shop/product-sidebar'}
            // ]},
            {label: 'Cart', url: '/shop/cart', enabled:enabled},
            {label: 'Checkout', url: '/shop/cart/checkout', enabled:enabled},
            {label: 'Wishlist', url: '/shop/wishlist', enabled:enabled},
            // {label: 'Compare', url: '/shop/compare'},
            {label: 'Track Order', url: '/shop/track-order', enabled:enabled},
        ]
    }},
    {label: 'Account', url: '/account', menu: {
        type: 'menu',
        items: [
            {label: 'Dashboard',       url: '/account/dashboard', enabled:enabled},
            {label: 'Edit Profile',    url: '/account/profile', enabled:enabled},
            {label: 'Order History',   url: '/account/orders', enabled:enabled},
            {label: 'Address Book',    url: '/account/addresses', enabled:enabled},
            {label: 'Change Password', url: '/account/password', enabled:enabled},
            {label: 'Logout',           url: '/account/logout', enabled:enabled}
        ]
    }},
    // {label: 'Blog', url: '/blog', menu: {
    //     type: 'menu',
    //     items: [
    //         {label: 'Blog Classic',         url: '/blog/category-classic'},
    //         {label: 'Blog Grid',            url: '/blog/category-grid'},
    //         {label: 'Blog List',            url: '/blog/category-list'},
    //         {label: 'Blog Left Sidebar',    url: '/blog/category-left-sidebar'},
    //         {label: 'Post Page',            url: '/blog/post-classic'},
    //         {label: 'Post Without Sidebar', url: '/blog/post-full'}
    //     ]
    // }},
    {label: 'Pages', url: '/site', menu: {
        type: 'menu',
        items: [
            {label: 'About Us',             url: '/site/about-us', enabled:enabled},
            {label: 'Contact Us',           url: '/site/contact-us', enabled:enabled},
            // {label: 'Contact Us Alt',       url: '/site/contact-us-alt'},
            // {label: '404',                  url: '/site/not-found'},
            {label: 'Terms And Conditions', url: '/site/terms', enabled:enabled},
            // {label: 'FAQ',                  url: '/site/faq'},
            // {label: 'Components',           url: '/site/components'},
            // {label: 'Typography',           url: '/site/typography'}
        ]
    }},
    // {label: 'Buy Theme', url: 'https://themeforest.net/item/stroyka-tools-store-angular-7-template/23523630', external: true}
];
