"use strict";
// navigation 
burger();

// general
window.addEventListener("scroll", function(){
    headerScrollDetector();
    headerStyle();
});

// hero
document.getElementById('hero_icons').innerHTML = generateIcons( heroIcons );

// skills

document.getElementById('blogleft').innerHTML = generateProgressBar(progressBarleft);
document.getElementById('blogright').innerHTML = generateProgressBar(progressBarright);

// services

document.querySelector('.services_wrapper').innerHTML = generateServicesBox( servicesBox );

// blog

document.getElementById('blog_list').innerHTML = generateBlog( blog );

// contact

document.querySelector('#contact .contact-form').innerHTML = generateContactForm( contactForm );
document.querySelector('#contact .contact-info').innerHTML = generateContactInfo( contactInfo );
// footer

// portfolio gallery


document.querySelector('.gallery_filter').innerHTML = generateGalleryFilter( galleryFilter );

// footer
getDate();