"use strict";

// services

document.querySelector('.services_wrapper').innerHTML = generateServicesBox( servicesBox );

// contact

document.querySelector('#contact .form').innerHTML = 'FORM GENERATED';
document.querySelector('#contact .contact-info').innerHTML = generateContactInfo(contactInfo);

// footer

document.getElementById('hero_icons').innerHTML = generateIcons( heroIcons );