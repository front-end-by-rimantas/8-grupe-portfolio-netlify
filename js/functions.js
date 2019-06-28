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

// contact

function generateContactInfo ( data ) {
    var HTML = '',
        infoListHTML = '',
        infoElement;

    for ( var i=0; i<data.length; i++ ) {
        infoListHTML = '';

        for ( var p=0; p<data[i].info.length; p++ ) {
            infoElement = data[i].info[p];

            if ( infoElement.type === 'text' ) {
                infoListHTML += `<p>${infoElement.value}</p>`;
            }

            if ( infoElement.type === 'link') {
                infoListHTML += `<a href= "mailto:${infoElement.value}">${infoElement.value}</a>`;
            }
        }

        HTML += /*
                <h4>${data[i].title}</4>
                <p>${data[i].info}</p>
                */
                `<div class="info-box">
                    <i class="fa fa-${data[i].icon}"></i>
                    <div>
                        <p>${infoListHTML}</p>
                    </div>
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