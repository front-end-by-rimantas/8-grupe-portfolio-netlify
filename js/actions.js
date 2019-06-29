"use strict";

// services

document.querySelector('.services_wrapper').innerHTML = generateServicesBox( servicesBox );

// contact

document.querySelector('#contact .contact-form').innerHTML = generateContactForm( contactForm );
document.querySelector('#contact .contact-info').innerHTML = generateContactInfo( contactInfo );

// footer

document.getElementById('hero_icons').innerHTML = generateIcons( heroIcons );