// Imports
import '../scss/style.scss';
import startSlider from './slider';
import changeTab from './tab';

// Header
const headersBody = document.querySelectorAll('.header__body');

// Проходимся по каждому слайдеру в header
headersBody.forEach(body => {
    // Находим стрелки слайдера
    const [leftArrow, rightArrow] = body.querySelectorAll('[data-slider]');

    // Задаем при клике на стрелки функцию выполнения слайдера
    leftArrow.addEventListener('click', startSlider);
    rightArrow.addEventListener('click', startSlider);
})

const buttonTabs = document.querySelectorAll('.header__tab');
const headerBodies = document.querySelectorAll('.header__body');

// Создаем функцию выбора отдела для кнопок header
buttonTabs.forEach(changeTab.bind([buttonTabs, headerBodies]))

// News

const newsTabs = document.querySelectorAll('.news__button');
const newsArticles = document.querySelectorAll('.news__article')

// Создаем функцию выбора отдела для кнопок news
newsTabs.forEach(changeTab.bind([newsTabs, newsArticles]))