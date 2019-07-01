"use strict";

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

/*  icon: 'user',
    icon: 'envelope',
    icon: 'comment'
*/

var contactInfo = [
    /* {
        title: 'Contact Me'
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi consectetur ipsam ad quasi dignissimos qui.'     
    },*/
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