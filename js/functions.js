"use strict";

// services

function generateServicesBox ( data ) {
    var HTML = '';

    for ( var i=0; i<data.length; i++) {
        HTML += `<div class="services_box">
                    <i class="fa fa-${data[i].icon}"></i>
                    <h5>${data[i].title}</h5>
                    <p>${data[i].description}</p>
                    </div>`;
    }

    return HTML;
}

// gallery

    function generateGalleryFilter ( data ) {
        var HTML = '';

        for ( var i=0; i<data.length; i++) {
            HTML += `<button class="filter">${data[i].filter}</button>`;
        }
        return HTML;
    }

    function generateGallery ( data ) {
        var HTML = '';
    
        for ( var i=0; i<data.length; i++) {
            HTML += `<div class="img_box" style="background-image: url(img/portfolio/${data[i].img});">
                        <div class="overlay">
                            <h6>${data[i].header}</h6>
                            <a class="fa fa-${data[i].linkIcon}" href="${data[i].link}"></a>
                            <span class="fa fa-${data[i].spanIcon}"></span>
                    </div>`;
        }
    
        return HTML;
    }

// footer

function generateIcons( data ) {
    var HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].link === '' ) {
            continue;
        }
        HTML += '<a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a>';
    }

    return HTML;
}