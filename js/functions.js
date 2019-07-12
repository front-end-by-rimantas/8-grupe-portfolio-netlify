"use strict";

// navigation
function burger() {
    var navMobile = document.getElementById('main-nav');
    var navBarToggle = document.getElementById('toggle');

    navBarToggle.addEventListener('click', function () {        
        navMobile.classList.toggle('active-burger');
    });    
}


// header

function elementHeight( path ) {
    var height = parseFloat(window.getComputedStyle( document.querySelector( path ) ).height);
    return height;
}

function headerScrollDetector() {
    var sections = [],
        scroll = window.scrollY + elementHeight('header'),
        links = document.querySelectorAll('header .nav-right > a'),
        headerLinkCount = links.length,
        top = document.getElementById('portfolio').offsetTop,
        sectionID = '',
        activeSectionIndex = 0,
        clname = '';

    // searching for section index user is looking at
    for ( var i=0; i<headerLinkCount; i++ ) {
        sectionID = links[i].getAttribute('href');
        if ( sectionID === '#' ) {
            sections.push(0);
            continue;
        }
        top = document.querySelector(sectionID).offsetTop;
        sections.push(top);
        if ( top <= scroll ) {
            activeSectionIndex = i;
        } else {
            break;
        }
    }

    // remove class "active" from all links
    for ( var i=0; i<links.length; i++ ) {
        clname = ' ' + links[i].className + ' ';
        clname = clname.replace(" active ", " ");
        links[i].className = clname;
    }
    // add class "active" to particular link
    links[activeSectionIndex].className += ' active';
    
}

function headerStyle() {
    var scroll = window.scrollY,
        limit =80,
        element = document.getElementById('header'),
        clname = '';
    if ( scroll > limit ) {
        clname = ' ' + element.className + ' ';
        clname = clname.replace(" transparent ", " ");
        element.className = clname;
    } else {
        element.className += ' transparent';
    }
}

// hero
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

//skills

function generateProgressBar(data) {
    var HTML = '';

    for ( var i=0; i<data.length; i++) {
        HTML += `<div class="progressBarleft">
                    <div class="title">${data[i].barTitle}</div>
                    <div class="bar">
                        <div class="bar-value" style="${data[i].barWidth}">
                            <div class="loading">
                                <div class="value-number">${data[i].valueNumber}</div>
                            </div>
                        </div>
                    </div>
                </div>`;
        
    }
    
    return HTML;
}

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
                    <a href="${data[i].link}" class="btnBlog">${data[i].btnBlog}</a></div>
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
<<<<<<< Updated upstream
// <a href="${data[i].link}" class="btn">Read more</a>
// footer
=======


>>>>>>> Stashed changes

// gallery


    function generateGalleryFilter ( data ) {
        var HTML = '';

        for ( var i=0; i<data.length; i++) {
            HTML += `<div id="filter_button" class="filter">${data[i].filter}</div>`;
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
function getDate(){
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById("currentDate").innerHTML = year;
  }
  
  getDate();