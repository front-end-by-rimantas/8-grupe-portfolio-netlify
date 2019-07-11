"use strict";
// navigation
function burger() {
    var navMobile = document.getElementById('main-nav');
    var navBarToggle = document.getElementById('toggle');

    navBarToggle.addEventListener('click', function () {        
        navMobile.classList.toggle('active-burger');
    });    
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


// contact

function generateContactForm ( data ) {
    var HTML = '<contact-form>',
    field,
    attrHTML = '',
    attrInfo,
    classNames = '';
    HTML += `<h2><span>get</span> in touch</h2>`;

    for ( var i=0; i<data.fields.length; i++ ) {
        field = data.fields[i];
        attrHTML = '';
        classNames = '';
    
        for ( var a=0; a<field.attr.length; a++ ) {
            attrInfo = field.attr[a];
            attrHTML += `${attrInfo.name} = "${attrInfo.value}"`;
        }
        // console.log(field);

        classNames = field.className.join('');

        if (field.type === 'input') {
            HTML += `<div class="${classNames}">
                        <div>
                            <i class="fa fa-${contactForm.fields[i].icon}"></i>
                        </div>
                        <input ${attrHTML} maxlength="30">
                    </div>`;
        }
        if (field.type === 'textarea') {
            HTML += `<div class="${classNames}">
                        <i class="fa fa-${contactForm.fields[i].icon}"></i>
                        <textarea ${attrHTML} maxlength="300"></textarea>
                    </div>`;
        }
    }

    HTML += `<div class="actions">`;
        for ( var i=0; i<data.actions.length; i++ ) {
            HTML += `<div class="col-12">
                        <div class="btn btn-big btn-${data.actions[i].style}">${data.actions[i].text}</div>
                    </div>`;
        }
    HTML += `</div>`;
    HTML += `</contact-form>`;
    return HTML;
}

function generateContactInfo ( data ) {
    var HTML = '',
        infoListHTML = '',
        infoElement;
        HTML += `<h4>Contact Info.</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi consectetur ipsam ad quasi dignissimos qui.</p>`;

    for ( var i=0; i<data.length; i++ ) {
        infoListHTML = '';

        for ( var p=0; p<data[i].info.length; p++ ) {
            infoElement = data[i].info[p];

            if ( infoElement.type === 'text' ) {
                infoListHTML += `${infoElement.value}`;
            }

            if ( infoElement.type === 'link') {
                infoListHTML += `<a href= "mailto:${infoElement.value}">${infoElement.value}</a>`;
            }
        }
      
        HTML += `<div class="info-box"> 
                    <i class="fa fa-${data[i].icon}"></i>
                    <div>
                        <p>${infoListHTML}</p>
                    </div> 
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