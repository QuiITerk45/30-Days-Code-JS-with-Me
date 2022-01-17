const getImgLink = document.querySelectorAll('.img-items')

const alterimg = document.querySelector('#imgAlt')
const getOverlay = document.querySelector('.overlay')

const btnExit = document.querySelector('.fa-times')
const btnPre = document.querySelector('.fa-chevron-left')
const btnNext = document.querySelector('.fa-chevron-right')

var currentIndex = 0;
getImgLink.forEach((item, index) => {
    item.onclick = () => {
        alterimg.src = item.src;
        getOverlay.style.display = 'flex'
        currentIndex = index;
    }
})


//Click exit button
btnExit.onclick = () => {
    getOverlay.style.display = 'none'
}

//Click Next Img
btnNext.onclick = () => {
    alterimg.classList.toggle('slideshow')
    currentIndex++;
    if (currentIndex >= getImgLink.length)
        currentIndex = 0
    alterimg.src = getImgLink[currentIndex].src;
}



//Click Pre Img
btnPre.onclick = () => {
    alterimg.classList.toggle('slideshow')
    currentIndex--;
    if (currentIndex <= 0)
        currentIndex = getImgLink.length - 1;
    alterimg.src = getImgLink[currentIndex].src;
}