
var experiences = document.getElementsByClassName('experience')           // Object Collection: Individual Experiences
var organizations = document.getElementsByClassName('organization')

// Action: Add event listeners to class.
function addEventListenersToClass(classCollection){

    for (object = 0; object < classCollection.length; object++){          // For every individual experience,
        var button = classCollection[object]                              // reference it as a variable and
        button.addEventListener('click', accordion)                       // add a 'click' event listener to it.
    
        // The event listener will perform what the 'openAccordion' function designates.
    }

}

addEventListenersToClass(experiences)
addEventListenersToClass(organizations)

function accordion(){

    event.stopPropagation();

    // Action: Obtain necessary objects and styles.
    var accordionOverview, accordionDetails, accordionDetailsStyle

    if (this.className == 'organization'){
        accordionOverview = this.querySelector('.organizationName')
        accordionDetails = this.querySelector('.experiences')
        accordionDetailsStyle = getComputedStyle(accordionDetails)
    }

    else if (this.classList.contains('experience')){
        accordionOverview = this.querySelector('.experienceOverviewContainer') 
        accordionDetails = this.querySelector('.experienceDetailsContainer') 
        accordionDetailsStyle = getComputedStyle(accordionDetails)
    }

    // Action: Open or close the accordion.
    if (accordionDetailsStyle.display == "none"){                                     // If accordion is CLOSED,
        accordionDetails.style.display = "block"                                      // open the accordion via display: 'block'.

        if (this.className == 'experience'){
            accordionOverview.style.backgroundColor = "#515151"
        }  

    }

    else if (accordionDetailsStyle.display == "block"){                               // If accordion is OPEN, 
        accordionDetails.style.display = "none"                                       // close the accordion via display: 'none'.

        if (this.className == 'experience'){
            accordionOverview.style.backgroundColor = ""
        }

    }
}