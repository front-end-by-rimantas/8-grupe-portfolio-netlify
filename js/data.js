"use strict";

// skills

var progressBarleft = [
    {
        barTitle: 'PHOTOGRAPHY',
        barWidth: 'width: 75%;',
        valueNumber: '75%'
    },
    {
        barTitle: 'BRANDING',
        barWidth: 'width: 95%;',
        valueNumber: '95%'
    },
    {
        barTitle: 'GRAPHIC DESIGN',
        barWidth: 'width: 70%;',
        valueNumber: '70%'
    },
    {
        barTitle: 'DEVELOPMENT',
        barWidth: 'width: 80%;',
        valueNumber: '80%'
    }
];
  
var progressBarright = [

{
        barTitle: 'HTML/CSS',
        barWidth: 'width: 95%;',
        valueNumber: '95%'
    },
    {
        barTitle: 'JS/JQUERY',
        barWidth: 'width: 80%;',
        valueNumber: '80%'
    },
    {
        barTitle: 'PHP/WORDPRESS',
        barWidth: 'width: 75%;',
        valueNumber: '75%'
    },
    {
        barTitle: 'PHOTO SHOP',
        barWidth: 'width: 94%;',
        valueNumber: '94%'
    },
   
]

// gallery

var galleryFilter = [
    {
        filter: 'all',
    },
    {
        filter: 'brand',
    },
    {
        filter: 'design',
    },
    {
        filter: 'photo',
    },
    {
        filter: 'video',
    },
]

// services

var servicesBox = [
    {
        icon: 'sun-o',
        title: 'branding',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae pariatur voluptatum magnam aliquid corrupti.'
    },
    {
        icon: 'laptop',
        title: 'web design',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae pariatur voluptatum magnam aliquid corrupti.'
    },
    {
        icon: 'shopping-basket',
        title: 'marketing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae pariatur voluptatum magnam aliquid corrupti.'
    },
    {
        icon: 'code',
        title: 'clean code',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae pariatur voluptatum magnam aliquid corrupti.'
    },
    {
        icon: 'mobile',
        title: 'friendly all screan',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae pariatur voluptatum magnam aliquid corrupti.'
    },
    {
        icon: 'compass',
        title: 'unlimited support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae pariatur voluptatum magnam aliquid corrupti.'
    }
];

// contact

var contactForm = {

    fields: [
        {
            type: 'input',
            icon: 'user',
            attr: [
                {
                    name: 'type',
                    value: 'text'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Your Full Name Here'
                }
            ],
            className: ['col-6'],
            required: true, 
        },
        {
            type: 'input',
            icon: 'envelope',
            attr: [
                {
                    name: 'type',
                    value: 'email'
                },
                {
                    name: 'value',
                    value: ''
                },
                {
                    name: 'placeholder',
                    value: 'Your Email Here'
                }
            ],
            className: ['col-6'],
            required: true,
            multiple: true
        },
        {
            type: 'textarea',
            icon: 'comment',
            attr: [
                {
                    name: 'placeholder',
                    value: 'Message For Me'
                }
            ],
            value: '',
            className: ['col-12'],
            required: true
        }
    ],
    actions: [
        {
            style: 'violet',
            text: 'SEND MESSAGE'
        }
    ]
};

var contactInfo = [
    
    {
        icon: 'headphones',
        info: [
            {
                type: 'text',
                value: '+00123456789'
            }
        ] 
    },
    {
        icon: 'paper-plane',
        info: [
            {
                type: 'link',
                value: 'DEMO@GMAIL.COM'
            }
        ]
    },
    {
        icon: 'map-marker',
        info: [
            {
                type: 'text',
                value: '3481 MELROZE PLACE, LOS ANGELES'
            }
        ] 
    }
];

//blog

var blog = [
    {
        photo: 'blog3.png',
        link: '#',
        btnBlog: 'UX/UI',
        titles: 'light trails on highway',
        miniphoto: 'blog6.png',
        author: 'jack daniel',
        date: '25 april 2017',
        description: 'Quisque dui at erat auctor pulvinar nisl felis, gravida et aliquam vitae, aliquet quis nibh.',
    },
    {
        photo: 'blog2.png',
        link: '#',
        btnBlog: 'Web Design',
        titles: 'riomaggiore coast scene',
        miniphoto: 'blog4.png',
        author: 'rim belou',
        date: '25 june 2017',
        description: 'Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been dummy',
    },
    {
        photo: 'blog1.png',
        link: '#',
        btnBlog: 'development',
        titles: '10 secrets tips for web design',
        miniphoto: 'blog5.png',
        author: 'ken andrew',
        date: '25 july 2017',
        description: 'Lorem ipsum dolor sit amet, conse ctetur adipi sicing elit, incid idunt ut labore et. Citius, altius, fortius',
         }
];

// footer
var heroIcons = [
    {
        icon: 'facebook',
        link: '#'
    },
    {
        icon: 'twitter',
        link: '#'
    },
    {
        icon: 'behance',
        link: '#'
    },
    {
        icon: 'linkedin',
        link: '#'
    },
    {
        icon: 'dribbble',
        link: '#'
    }
];