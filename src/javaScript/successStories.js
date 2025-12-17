// scripts for the success stories section
const reviewsList = document.querySelector(".swiper-wrapper.success-stories-lists");
const reviewsNextButton = document.querySelector('.success-stories-button-next');
const reviewsPrevButton = document.querySelector('.success-stories-button-prev');
const reviewsPagination = document.querySelector(".success-stories-swiper-pagination");
import spriteUrl from '../images/sprite.svg';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Raty from 'raty-js';
import axios from 'axios'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//request
const BASE_URL = "https://paw-hut.b.goit.study";
const END_POINT = "/api/feedbacks";
axios.defaults.baseURL = BASE_URL;
async function getFeedbacks({ page = 1, limit = 6 } = {}) {
  try {
    const response = await axios.get(END_POINT, {
      params: { page, limit },
    });
    return response.data; 
  } catch (error) {
    console.error('❌ Error receiving reviews:', error);
    throw error;
  }
}

//raty svg
const STAR_ON = `
<svg width="20" height="20">
    <use href="${spriteUrl}#icon-star-filled"></use>
</svg>
`;
const STAR_OFF = `
<svg width="20" height="20">
  <use href="${spriteUrl}#icon-star-outline"></use>
</svg>
`;
const STAR_HALF = `
<svg width="20" height="20">
  <use href="${spriteUrl}#icon-star-half"></use>
</svg>
`;

//render feedbacks
function createFeedbacks(feedbacks) {
const markup = feedbacks.map(({ author, rate, description }) => `
    <div class="swiper-slide success-stories-list">
    <div
  class="rating"
  data-raty
  data-rate="${rate}">
</div>
      <p class="success-stories-list-review">${description}</p>
      <p class="success-stories-list-author">${author}</p>
    </div>
  `).join('');
reviewsList.innerHTML = '';
reviewsList.insertAdjacentHTML('beforeend', markup);
}

let swiper;

function initSwiper() {
  swiper = new Swiper('.success-stories-swiper', {
    slidesPerView: 2,
    spaceBetween: 32,

    navigation: {
      nextEl: '.success-stories-button-next',
      prevEl: '.success-stories-button-prev',
    },

    pagination: {
      el: '.success-stories-swiper-pagination',
      clickable: true,
 
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
}



function updateNavButtonsState() {
 reviewsPrevButton.disabled = params.page === 1;
reviewsNextButton.disabled = params.page === params.maxPage;

reviewsPrevButton.classList.toggle('is-disabled', params.page === 1);
reviewsNextButton.classList.toggle('is-disabled', params.page === params.maxPage);
}

async function handleReviews() {
  try {
    const data = await getFeedbacks(); 
    const { feedbacks } = data;

    createFeedbacks(feedbacks);

    initSwiper();

    requestAnimationFrame(initRatings);

  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: err.message,
      position: 'topRight',
    });
  }
}

handleReviews();

//Init Raty
function initRatings() {
  const ratings = document.querySelectorAll('[data-raty]');
//   console.log('ratings found:', ratings.length);
  
  ratings.forEach(el => {
    if (el.dataset.ratyInit) return;
    el.dataset.ratyInit = 'true';

    new Raty(el, {
      score: Number(el.dataset.rate),
      number: 5,
      half: true,
      readOnly: true,
      starOn: STAR_ON,
      starOff: STAR_OFF,
      starHalf: STAR_HALF
    });
  });
}
