"use strict";
// hero
document.getElementById('hero_icons').innerHTML = generateIcons( heroIcons );

// skills

document.getElementById('blogleft').innerHTML = generateProgressBar(progressBarleft);
document.getElementById('blogright').innerHTML = generateProgressBar(progressBarright);

// services

document.querySelector('.services_wrapper').innerHTML = generateServicesBox( servicesBox );


// blog

document.getElementById('blog_list').innerHTML = generateBlog( blog );

// footer

// portfolio gallery


document.querySelector('.gallery_filter').innerHTML = generateGalleryFilter( galleryFilter );

clickActive()

// footer
