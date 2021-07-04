// =================================== //
// Project: Nicole's Portfolio Website //
// Author: Max Ratajczak               //
// Date: March 2021                    //
// =================================== //

// Pre-loads temp image //
var imgCount = 0;
function preloadImage(url) {
    var image = new Image();
    image.src = url;
    var imgName = url.replace("/projects/", "");
    if (image.complete) {
        imgCount++;
        console.log(`Loaded image "${imgName}"`);
    }
    else {
        console.log(`Could not load image "${imgName}"`);
    }
    
}

// Displays landing page //
function showContent(){
    document.getElementById("loading-wheel").style.display = "none";
    document.getElementById("landing-content").style.display = "block";
    document.querySelector("footer").style.display = "block";
}

// Hides landing page //
function hideContent(){
    document.getElementById("landing-content").style.display = "none";
    document.querySelector("footer").style.display = "none";
}

// Image list to pre-load before landing page displays //
function loadAllImages(){
    preloadImage("/projects/hispanic-society/01_hispanic society.jpg");
    preloadImage("/assets/projects/community-center/community-center-landing.jpg");
    preloadImage("/assets/projects/water-flows/water-flows-landing.jpg");
    preloadImage("/assets/projects/work-from-home/work-from-home-landing.jpg");
    preloadImage("/assets/projects/wynford-gardens/wynford-gardens-landing.jpg");
}

function start(){
    //hideContent();
    loadAllImages();

    //setTimeout(showContent, 1000);
    console.log(`Finished loading ${imgCount} images`);
}