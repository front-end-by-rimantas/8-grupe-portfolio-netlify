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
                infoListHTML += `<p>${infoElement.value}</p>`;
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