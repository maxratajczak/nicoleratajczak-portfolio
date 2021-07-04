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
    preloadImage("/projects/hispanic-society/hispanic-society-landing.jpg");
    preloadImage("/projects/not-forever/not-forever-landing.jpg");
    preloadImage("/projects/industrial-facades/industrial-facades-landing.jpg");
    preloadImage("/projects/community/community-landing.jpg");
    preloadImage("/projects/public-pier/public-pier-landing.jpg");
    preloadImage("/projects/plan-unplanned/plan-unplanned-landing.jpg");
    preloadImage("/projects/water-flows/water-flows-landing.jpg");
    preloadImage("/projects/work-from-home/work-from-home-landing.jpg");
    preloadImage("/projects/rome-sketchbook/rome-sketchbook-landing.jpg");
    preloadImage("/projects/dance-of-ascent/dance-of-ascent-landing.jpg");
    preloadImage("/projects/large-urban-building/large-urban-building-landing.jpg");
    preloadImage("/projects/species-spaces-territories/species-spaces-territories-landing.jpg");
    preloadImage("/projects/cambridge-commons/cambridge-commons-landing.jpg");
    preloadImage("/projects/urban-rowhouse/urban-rowhouse-landing.jpeg");

}

function start(){
    //hideContent();
    loadAllImages();

    //setTimeout(showContent, 1000);
    console.log(`Finished loading ${imgCount} images`);
}