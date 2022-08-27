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


function resetSliderOrder(index, imagesList) {
    images[index].selected = true;
    currentIndex = index;
    imagesList[index].classList.remove('display-none');
    imagesList[index].classList.add('display-block');
}


function overlap() {
    const currentImages = document.querySelectorAll('.slider-image');

    for (let i = currentIndex; i < currentImages.length; i++) {
        if (images[i].selected === true) {
            images[i].selected = false;
            currentImages[i].classList.remove('display-block');
            currentImages[i].classList.add('display-none');
            if (i === currentImages.length - 1) {
                resetSliderOrder(0, currentImages);
            } else {
                resetSliderOrder(i + 1, currentImages);
            }
            break;
        }
    }
}

const automaticSlider = setInterval(overlap, 2700);


function changeSlide(rotation) {
    const currentImages = document.querySelectorAll('.slider-image');
    images[currentIndex].selected = false;
    currentImages[currentIndex].classList.remove('display-block');
    currentImages[currentIndex].classList.add('display-none');

    if (rotation === 'right') {
        clearInterval(automaticSlider);
        if (currentIndex === currentImages.length - 1) {
            resetSliderOrder(0, currentImages);
        } else {
            resetSliderOrder(currentIndex + 1, currentImages)
        }
    }
    if (rotation === 'left') {
        clearInterval(automaticSlider);
        if (currentIndex === 0) {
            resetSliderOrder(currentImages.length - 1, currentImages);
        } else {
            resetSliderOrder(currentIndex - 1, currentImages);
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


//NAVBAR
let clicked = true;
function showMenuList() {
    let topLine = document.getElementById('top-menu-line');
    let middleLine = document.getElementById('middle-menu-line');
    let bottomLine = document.getElementById('bottom-menu-line');
    let menuList = document.getElementById('menu-list');

    if (clicked===true) {
        middleLine.style.display = 'none';
        topLine.classList.add('top-move');
        bottomLine.classList.add('bottom-move');
        menuList.style.display = 'block';
        clicked = false;
    } else {
        middleLine.style.display = 'inline-block';
        topLine.classList.remove('top-move');
        bottomLine.classList.remove('bottom-move');
        menuList.style.display = 'none';
        clicked = true;
    }
}
let menu = document.getElementById('menu');
menu.addEventListener("click", showMenuList);

//dropdown submenus
//cosmetology
let cosmetologySubmenus = document.getElementById('cosmetology-submenus');
let cosmetology = document.getElementById('cosmetology');

function showDropdownCosmetology() {
    cosmetologySubmenus.style.display='flex';
}

function hideDropdownCosmetology() {
    cosmetologySubmenus.style.display='none';
}

cosmetology.addEventListener('mouseover', showDropdownCosmetology);
cosmetologySubmenus.addEventListener('mouseover', showDropdownCosmetology);
cosmetology.addEventListener('mouseout', hideDropdownCosmetology);
cosmetologySubmenus.addEventListener('mouseleave', hideDropdownCosmetology);

//cosmetics
let cosmeticsSubmenus = document.getElementById('cosmetics-submenus');
let cosmetics = document.getElementById('cosmetics');

function showDropdownCosmetics() {
    cosmeticsSubmenus.style.display='flex';
}

function hideDropdownCosmetics() {
    cosmeticsSubmenus.style.display='none';
}

cosmetics.addEventListener('mouseover', showDropdownCosmetics);
cosmeticsSubmenus.addEventListener('mouseover', showDropdownCosmetics);
cosmetics.addEventListener('mouseout', hideDropdownCosmetics);
cosmeticsSubmenus.addEventListener('mouseleave', hideDropdownCosmetics);

//more
let moreSubmenu = document.getElementById('more-dropdown');
let more = document.getElementById('more');

function showDropdownMore() {
    moreSubmenu.style.display='inline-block';
}

function hideDropdownMore() {
    moreSubmenu.style.display='none';
}

more.addEventListener('mouseover', showDropdownMore);
moreSubmenu.addEventListener('mouseover', showDropdownMore);
more.addEventListener('mouseout', hideDropdownMore);
moreSubmenu.addEventListener('mouseleave', hideDropdownMore);