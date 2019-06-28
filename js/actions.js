"use strict";
// hero
document.getElementById('hero_icons').innerHTML = generateIcons( heroIcons );

// services

document.querySelector('.services_wrapper').innerHTML = generateServicesBox( servicesBox );

// portfolio gallery

document.querySelector('.gallery_filter').innerHTML = generateGalleryFilter( galleryFilter );

clickActive()

// footer