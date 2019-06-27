"use strict";

// services

document.querySelector('.services_wrapper').innerHTML = generateServicesBox( servicesBox );

// contact

document.querySelector('#contact .info').innerHTML = generateContactInfo(contactInfo);

// footer

document.getElementById('hero_icons').innerHTML = generateIcons( heroIcons );