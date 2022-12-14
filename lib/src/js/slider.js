const tabs = document.querySelectorAll('[data-tab]');
const slidersPos = {};

tabs.forEach(tab => {
    slidersPos[tab.dataset.tab] = 0;
})

export default function startSlider(e) {
    const slider = document.querySelector('.hero__body.open #slider-js');
    const tab = slider.closest('.hero__body').dataset.tab;
    const dataset = e.target.closest('.button[data-slider]').dataset;

    const imgs = slider.querySelectorAll('img');
    let imageWidth = imgs[0].offsetWidth;
    let imageMaxWidth = -((imgs.length - 1) * imageWidth);

    if (dataset.slider === 'right' && slidersPos[tab] > imageMaxWidth) {
        slidersPos[tab] -= imageWidth
    } 
    if (dataset.slider === 'left' && slidersPos[tab] < 0) {
        slidersPos[tab] = slidersPos[tab] + imageWidth
    }

    slider.style.marginLeft = slidersPos[tab] + 'px'
}