// Imports
import '../scss/style.scss';
import startSlider from './slider';
import changeTab from './tab';

// Hero
const heroBodies = document.querySelectorAll('.hero__body');

// Проходимся по каждому слайдеру в hero
heroBodies.forEach(body => {
    // Находим стрелки слайдера
    const [leftArrow, rightArrow] = body.querySelectorAll('[data-slider]');

    // Задаем при клике на стрелки функцию выполнения слайдера
    leftArrow.addEventListener('click', startSlider);
    rightArrow.addEventListener('click', startSlider);
})

const buttonTabs = document.querySelectorAll('.hero__tab');

// Создаем функцию выбора отдела для кнопок hero
buttonTabs.forEach(changeTab.bind([buttonTabs, heroBodies]))

// News

const newsTabs = document.querySelectorAll('.news__button');
const newsArticles = document.querySelectorAll('.news__article')

// Создаем функцию выбора отдела для кнопок news
newsTabs.forEach(changeTab.bind([newsTabs, newsArticles]))