let currentSlide = 0
let firstSlide = 0
let lastSlide = 3

// Array: Carousel Photo Descriptions
let photoDescriptions = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus in hac habitasse platea dictumst quisque. Cursus in hac habitasse.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "2", "3"]

function changeCarouselSlide(direction){
    let imageCarousel = document.getElementById("imageCarousel")            // Reference - Object: imageCarousel
    let photoDescription = document.getElementById("photoDescription")      // Reference - Object: photoDescription
    let page = document.getElementById("title").innerHTML
    let folder = ""

    // Action: Check Location of Carousel, Go to correct directory.
    if (page == "about"){
        folder = "images/about/"
    }

    else if (page == "project"){
        folder = "images/projectCarousels/"
    }

    // Action: Change Carousel Slide - Image
    if (direction == "right"){                                              // If user clicks RIGHT, 
        if ((currentSlide + 1) <= lastSlide){                               // and we aren't beyond the last slide,
            currentSlide += 1                                               // increase the current slide indicator by 1.
            imageCarousel.src = folder + currentSlide + ".jpg"              // Change the image to be displayed. 
        }
    }

    else if (direction == "left"){                                          // If user clicks LEFT,
        if ((currentSlide - 1) >= firstSlide){                              // same process as above.
            currentSlide -= 1
            imageCarousel.src = folder + currentSlide + ".jpg"
        }
    }

    // Action: Change Carousel Slide - Description

    photoDescription.innerHTML = photoDescriptions[currentSlide]

    // Reference object, assign new description from array.          
}


