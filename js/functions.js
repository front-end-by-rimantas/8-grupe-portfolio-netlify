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
            HTML += `<div id="filter_button" class="filter">${data[i].filter}</div>`;
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

    // active class for gallery filters
    function clickActive() {
        var filterHead = document.getElementById("gallery_head");
        var filter_active = filterHead.getElementsByClassName("filter");
        for (var i = 0; i < filter_active.length; i++) {
        filter_active[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) { 
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        });
        }
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