let currentIndex = 0;
const images = [
    {
        imageUrl: 'assets/images/home-slider-1.jpg',
        alt: "Beauty face",
        selected: true
    },
    {
        imageUrl: 'assets/images/home-slider-2.jpg',
        alt: "Love me green",
        selected: false
    }
];


function createSlider() {
    const imagesContainer = document.getElementById('slider-images');
    for (let i = 0; i < images.length; i++) {
        const img = document.createElement("img");
        img.src = images[i].imageUrl;
        img.id = 'slider-img' + (i + 1);
        img.classList.add('slider-image');
        if (i === 0)
            img.classList.add('display-block');
        else
            img.classList.add('display-none');
        img.alt = images[i].alt;
        imagesContainer.appendChild(img)
    }
}
createSlider();


function overlap() {
    const currentImages = document.querySelectorAll('.slider-image');

    for (let i = currentIndex; i < currentImages.length; i++) {
        if (images[i].selected === true) {
            images[i].selected = false;
            currentImages[i].classList.remove('display-block');
            currentImages[i].classList.add('display-none');
            if (i === currentImages.length - 1) {
                images[0].selected = true;
                currentIndex = 0;
                currentImages[0].classList.remove('display-none');
                currentImages[0].classList.add('display-block');
            } else {
                images[i + 1].selected = true;
                currentIndex = i + 1;
                currentImages[i + 1].classList.remove('display-none');
                currentImages[i + 1].classList.add('display-block');
            }
            break;
        }
    }
}
const automaticSlider = setInterval(overlap, 2700);


function changeSlide(rotation) {
    const currentImages = document.querySelectorAll('.slider-image');
    currentImages[currentIndex].classList.remove('display-block');
    currentImages[currentIndex].classList.add('display-none');

    if (rotation === 'right') {
        clearInterval(automaticSlider);
        if (currentIndex === currentImages.length - 1) {
            currentIndex = 0;
            currentImages[0].classList.remove('display-none');
            currentImages[0].classList.add('display-block');
        } else {
            currentImages[currentIndex + 1].classList.remove('display-none');
            currentImages[currentIndex + 1].classList.add('display-block');
            currentIndex += 1;
        }
    }
    if (rotation === 'left') {
        clearInterval(automaticSlider);
        if (currentIndex === 0) {
            currentIndex = currentImages.length - 1;
            currentImages[currentImages.length - 1].classList.remove('display-none');
            currentImages[currentImages.length - 1].classList.add('display-block');
        } else {
            currentImages[currentIndex - 1].classList.remove('display-none');
            currentImages[currentIndex - 1].classList.add('display-block');
            currentIndex -= 1;
        }
    }
}
let left = document.getElementById('left-slider-btn');
let right = document.getElementById('right-slider-btn');
left.addEventListener('click', () => {
    changeSlide('left')
});
right.addEventListener('click', () => {
    changeSlide('right')
});


function overlap() {
    const currentImages = document.querySelectorAll('.slider-image');

    for (let i = currentIndex; i < currentImages.length; i++) {
        if (images[i].selected === true) {
            images[i].selected = false;
            currentImages[i].classList.remove('display-block');
            currentImages[i].classList.add('display-none');
            if (i === currentImages.length - 1) {
                images[0].selected = true;
                currentIndex = 0;
                currentImages[0].classList.remove('display-none');
                currentImages[0].classList.add('display-block');
            } else {
                images[i + 1].selected = true;
                currentIndex = i + 1;
                currentImages[i + 1].classList.remove('display-none');
                currentImages[i + 1].classList.add('display-block');
            }
            break;
        }
    }
}