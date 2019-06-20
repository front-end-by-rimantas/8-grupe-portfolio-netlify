"use strict";

// services

document.querySelector('.services_wrapper').innerHTML = generateServicesBox( servicesBox );

// portfolio gallery

document.querySelector('.gallery_filter').innerHTML = generateGalleryFilter( galleryFilter );

document.querySelector('.gallery_container').innerHTML = generateGallery( gallery );

clickActive()

// footer

document.getElementById('hero_icons').innerHTML = generateIcons( heroIcons );