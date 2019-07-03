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

//blog

function generateBlog( data ) {
    var HTML = '';

    for ( var i=0; i<data.length; i++ ) {
        HTML += `<div class="blog">
                    <div class="img" style="background-image: url(img/blog/${data[i].photo});">
                    <a href="${data[i].link}" class="btnBlog">${data[i].btn}</a></div>
                    <div class="blogContent">
                        <a href="${data[i].link}" class="titles">${data[i].titles}</a>
                        <p>${data[i].description} ...</p>                   
                        <div class="info">
                            <img src="img/blog/${data[i].miniphoto}" class="minimg" alt="#">
                            <div class="infoText">
                                <p><span>BY : </span>${data[i].author}</p>
                                <h4>${data[i].date}</h4>
                            </div>
                        </div>
                    </div>                               
                </div>`;
    }

    return HTML;
}
// <a href="${data[i].link}" class="btn">Read more</a>
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