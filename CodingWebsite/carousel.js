var carousel_slide = document.querySelector('.carousel-slide');
let count = 1;
const img_height = "300px";
var images_String = new Array();
var images = new Array();

//should have use a linked list faster insertion time
const addImage = (carousel_slide) => {
    for (var i = 0; i < 3; i++) {
        images_String.push("picture" + (i + 1).toString() + ".jpg");
    }

    for (var i = 0; i < images_String.length; i++) {
        console.log(images_String[i]);
        var image = document.createElement('img');
        image.src = "pictures/" + images_String[i];
        image.id = "pic" + (i + 1).toString();
        images.push(image);
        carousel_slide.appendChild(image);
        image.style.width = "100%";
        image.style.height = img_height;
        image.style.animationDuration ="0.5s";
        console.log(image.parentElement);
        if (i == images_String.length - 1) {

        }

    }
    //append an img tag to the back of the carousel
    /*var imageClone1 = document.createElement('img');
    imageClone1.src = "pictures/" + images_String[0];
    images.push(imageClone1);
    carousel_slide.appendChild(imageClone1);
    imageClone1.style.width = "100%";
    imageClone1.style.height = img_height;
    imageClone1.id = "firstClone";

    //append an img tag to the front of the carousel
    var imageClone = document.createElement('img');
    imageClone.src = "pictures/" + images_String[images_String.length-1];
    images.unshift(imageClone);
    carousel_slide.appendChild(imageClone);
    imageClone.style.width = "100%";
    imageClone.style.height = img_height;
    imageClone.id = "lastClone";
*/
    //Check if image oder is correct
    images.forEach((image) => {
        console.log(image);
    });

}


function cycleImage() {
    for (var i = 0; i < images.length; i++) {
        if (i != count - 1) {
            images[i].style.display = "none";
        } else {
            images[i].style.display = "block";
        }
    }
}
function cycleRight() {
    count++;
    if(count > images.length-1){
        count = 1;
    } else {
        images[count].style.animationName = 'carouselSlideInRight 0.5s ease';
        images[count-1].style.animationName = 'carouselSlideOutRight 0.5s ease';
    }
    /*for (var i = 0; i < images.length; i++) {
        if (i != count - 1) {
            images[i].style.display = "none";
        } else {
            images[i].style.display = "block";
        }
    }*/
}
function cycleLeft() {
    for (var i = 0; i < images.length; i++) {
        if (i != count - 1) {
            images[i].style.display = "none";
        } else {
            images[i].style.display = "block";
        }
    }
}
const appCarousel = () => {
    addImage(carousel_slide);
    cycleImage();
}

//Run the carousel
var nextBtn = document.querySelector('#nextBtn');
var prevBtn = document.querySelector('#prevBtn');

nextBtn.addEventListener('click', () => {
    count++;
    if(count > images.length){
        count = 1;
    }
    cycleImage();
    console.log(count);
});

prevBtn.addEventListener('click', () => {
    count--;
    if(count < 1){
        count = images.length-1;
    }
    cycleImage();
    console.log(count);
});


appCarousel();
