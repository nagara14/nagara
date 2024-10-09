// slider section
const images = [
    "images/galeri1.jpg",
    "images/galeri2.jpg",
    "images/galeri3.jpg"
];

let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1)
    % images.length;
    document.getElementById("slideshow-img").
    src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1)
    % images.length;
    document.getElementById("slideshow-img").
    src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length)
    % images.length;
    document.getElementById("slideshow-img").
    src = images[currentImageIndex];
}


// untuk mengubah tiap 3 detik
setInterval(changeImage, 3000);

