// scripts for the success stories section
const reviewsList = document.querySelector(".swiper-wrapper.success-stories-lists");
import 'css-star-rating/css/star-rating.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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


function createFeedbacks(feedbacks) {
  const markup = feedbacks.map(({ author, rate, description }) => {
    const whole = Math.floor(rate);
    const isHalf = rate % 1 === 0.5;
    const ratingClass = `rating value-${whole} ${isHalf ? 'half' : ''}`;

    const starSVG = `
      <svg class="icon star-empty"><use href="../images/sprite.svg#iicon-star-outline"></use></svg>
      <svg class="icon star-half"><use href="../images/sprite.svg#icon-star-half"></use></svg>
      <svg class="icon star-filled"><use href="../images/sprite.svg#icon-star-filled"></use></svg>
    `;

    const stars = Array.from({ length: 5 })
      .map(() => `<div class="star">${starSVG}</div>`)
      .join('');

    return `
      <div class="swiper-slide success-stories-list">
        <div class="${ratingClass} star-icon color-default">
          <div class="star-container">
            ${stars}
          </div>
        </div>
        <p class="success-stories-list-review">${description}</p>
        <p class="success-stories-list-author">${author}</p>
      </div>
    `;
  }).join('');

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

//rater-js
// function initRatings() {
//   const ratings = document.querySelectorAll('.rating');

//   ratings.forEach(el => {
//     const score = parseFloat(el.dataset.rate);

//     rater({
//       element: el,
//       max: 5,
//       readOnly: true,
//       rating: score,
//       starSize: 20,
//       step: 0.5,
//       showToolTip: false,
//       rateCallback: function() {}
//     });
//   });
// }


async function handleReviews() {
  try {
    const data = await getFeedbacks(); 
    const { feedbacks } = data;

    createFeedbacks(feedbacks);

    initSwiper();

// setTimeout(() => {
//   requestAnimationFrame(initRatings);
// }, 0);

  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: err.message,
      position: 'topRight',
    });
  }
}

handleReviews();

//Init Raty version 2 
// function initRatings() {
//   const ratings = document.querySelectorAll('[data-raty]');

//    ratings.forEach(el => {
//     if (el.dataset.ratyInit) return;
//     el.dataset.ratyInit = 'true';

//     const rate = Number(el.dataset.rate);

//     new Raty(el, {
//       score: rate,
//       number: 5,
//       half: true,
//       readOnly: true,
//       starOff: '<span class="star-placeholder" data-type="off"></span>',
//       starOn: '<span class="star-placeholder" data-type="on"></span>',
//       starHalf: '<span class="star-placeholder" data-type="half"></span>'
//     });

//     patchStars(el);
//   });
//   console.log(spriteUrl);
// console.log(`${spriteUrl}#icon-star-half`);
// }

//Init Raty old
// function initRatings() {
//   const ratings = document.querySelectorAll('[data-raty]');
// //   console.log('ratings found:', ratings.length);
  
//   ratings.forEach(el => {
//     if (el.dataset.ratyInit) return;
//     el.dataset.ratyInit = 'true';

//     new Raty(el, {
//       score: Number(el.dataset.rate),
//       number: 5,
//       half: true,
//       readOnly: true,
//       starOn: STAR_ON,
//       starOff: STAR_OFF,
//       starHalf: STAR_HALF
//     });
//   });
// }

//raty svg
// const STAR_ON = `
// <svg class="star star-on" width="20" height="20">
//     <use href="${spriteUrl}#icon-star-filled"></use>
// </svg>
// `;
// const STAR_OFF = `
// <svg class="star star-off" width="20" height="20">
//   <use href="${spriteUrl}#icon-star-outline"></use>
// </svg>
// `;
// const STAR_HALF = `
// <svg class="star star-half" width="20" height="20">
//   <use href="${spriteUrl}#icon-star-half"></use>
// </svg>
// `;
