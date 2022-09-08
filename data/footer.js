import { Facebook, Instagram, Tiktok, Twitter } from '@/public/assets/svgsIcons'

export const footerSocial = [
    {
        url: '',
        icon: <Facebook />
    },
    {
        url: 'https://twitter.com/nigerianfintc1a',
        icon: <Twitter />
    },
    {

        url: '',
        icon: <Instagram />
    },
    {
        url: '',
        icon: <Tiktok />,
    },
];



export const footerLink = [
    {
        id: 1,
        heading: 'Navigation',
        subHeadings: [
            {
                title: 'Home',
                url: "/",
                smoothScroll: false
            },
            {
                title: 'About',
                url: "/about",
                smoothScroll: false
            },
            {
                title: 'Blog',
                url: "/blog",
                smoothScroll: false
            },
            {
                title: 'Contact',
                url: "/contact",
                smoothScroll: false
            },

        ]
    },
    {
        id: 2,
        heading: 'Explore',
        subHeadings: [
            {
                title: 'Past Awards',
                url: "/past-awards",
                smoothScroll: false
            },
            {
                title: 'Categories',
                url: "/#categories",
                smoothScroll: true
            },
            {
                title: 'How To Enter',
                url: "/#how-to-enter",
                smoothScroll: true
            },
            {
                title: 'Meet The Jury',
                url: "/about#meet-the-jury",
                smoothScroll: true
            },

        ]
    },
    {
        id: 3,
        heading: 'Community',
        subHeadings: [
            {
                title: 'Awards Categories',
                url: "/awards-categories",
                smoothScroll: false
            },
            {
                title: 'Our Sponsors',
                url: "/sponsorship",
                smoothScroll: false
            },
            {
                title: 'Recent Activity',
                url: "/blog",
                smoothScroll: false
            },
            {
                title: 'Packages',
                url: "/#packages",
                smoothScroll: true
            },

        ]
    },
]

