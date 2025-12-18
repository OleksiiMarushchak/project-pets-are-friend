import{S as M,a as r,i as S,b as E,N as B,P as C}from"./assets/vendor-CCecL_Az.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-header-menu-open]"),s=document.querySelector("[data-header-menu-close]"),n=document.querySelectorAll("[data-menu-close]");t.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{o()}),n.forEach(a=>{a.addEventListener("click",()=>{o()})}),e.addEventListener("click",a=>{a.target===e&&o()});function o(){e.classList.remove("active"),document.body.style.overflow=""}});const c={openSuccessAlert(e){this.successAllert(e),document.querySelector(".swal2-container").querySelector("button.swal2-confirm").focus()},successAllert(e){M.fire({title:"Відправка успішна!",icon:"success",text:e})},errorAlert(e){M.fire({icon:"error",title:"Oops...",text:e})}};r.defaults.baseURL="https://paw-hut.b.goit.study";async function H(e){var s,n;const t="/api/orders";try{return(await r.post(r.defaults.baseURL+t,e)).data}catch(o){c.errorAlert((n=(s=o.response)==null?void 0:s.data)==null?void 0:n.message)}}const k={animalId:null,getMarkup(){return`<form class="order-form js-order-form">
                <h2 class="order-title">Залишіть заявку на знайомство</h2>
                <label for="name">Ім’я*</label>
                <input type="text" id="name" name="name" placeholder="Андрій">
                <label for="phone">Телефон*</label>
                <input type="text" name="phone" id="phone" placeholder="+38 (095) 555 99 22">
                <label for="comment">Коментар</label>
                <textarea type="textarea"  name="comment" id="comment" placeholder="Напишіть ваш коментар"></textarea>
               <div class='order-controllers-container'> <button type="submit" class="dark">Надіслати</button></div>
            </form>`},listnerHandler(){const e=document.querySelector(".js-order-form");e.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(e),n={name:s.get("name").trim(),phone:s.get("phone").trim(),animalId:this.animalId};if(s.get("comment").trim()&&(n.comment=s.get("comment").trim()),!this.fieldsValidation(n))return;const a=await H(n);t.target.reset(),b.closeModal(),c.openSuccessAlert(`${n.name}, ${a.animalName} з нетерпінням чекає на зустріч.`)})},fieldsValidation(e){return e.name===""||e.phone===""?(c.errorAlert("Заповніть, будь ласка І'мя та Телефон."),!1):e.name.length>32?(c.errorAlert("Максимальна довжина І'мя не має перевищувати 32 символи."),!1):e.phone.match(/^[0-9]{12}$/)?e.comment&&e.comment.length>500?(c.errorAlert(`Максимальна довжина Коментаря не має перевищувати 500 символів. Зараз він ${e.comment.length} символів.`),!1):!0:(c.errorAlert("Телефон має складатися з 12 цифр."),!1)}},y={animalId:"",data:{},getMarkup(){return`<div class="animal-details-container js-animal-details-container">
    <div class="animal-details-img-container">
    <img src=${this.data.image}></div>
    <div class="animal-details-content-container">
    <div class="grid-header">   <p class="animal-details-species">${this.data.species}</p>
    <h3 class="animal-details-name">${this.data.name}</h3>
    <ul class="animal-details-age-and-gender-list">
    <li class="animal-details-age">${this.data.age}</li>
    <li class="animal-details-gender">${this.data.gender}</li> </ul></div>
   <div class="grid-description"><h4>Опис:</h4>
    <p class="animal-details-description">${this.data.description}</p>
    <h4>Здоров’я:</h4>
    <p class="animal-details-healthStatus">${this.data.healthStatus}</p>
    <h4>Поведінка:</h4>
    <p class="animal-details-behavior">${this.data.behavior}</p></div>
    <div class='animal-details-controllers-container grid-button'> 
    <button type="button" class="dark js-go-to-order-btn">Взяти додому</button>
    </div>
    </div>
    </div>`},listnerHandler(){document.querySelector(".js-go-to-order-btn").addEventListener("click",async t=>{k.animalId=this.animalId,b.openModal(k)})}},p={main:document.querySelector("main"),modalContainer:document.querySelector(".js-modal-backdrop"),modalContent:document.querySelector(".js-modal-content"),openModalBtn:document.querySelector(".open-modal-btn"),closeModalBtn:document.querySelector(".js-close-modal-btn")};let f=null;const b={modalNode:p.modalContainer,modalContent:p.modalContent,closeBtn:p.closeModalBtn,getFocusableNodes(){return this.modalNode.querySelectorAll("a, button, input, textarea")},openModal(e){var s;f=document.activeElement,this.modalContent.innerHTML=e.getMarkup(),e.listnerHandler&&e.listnerHandler(),this.modalNode.classList.remove("is-hidden"),requestAnimationFrame(()=>{this.modalNode.classList.add("is-open")}),document.body.classList.add("modal-open"),(s=this.getFocusableNodes()[0])==null||s.focus(),this.closeBtn.addEventListener("click",this.closeModal.bind(b)),this.modalNode.addEventListener("click",n=>{n.target===this.modalNode&&this.closeModal()}),document.addEventListener("keydown",n=>{this.disableNotModalActions(n)})},closeModal(){this.modalNode.classList.remove("is-open"),setTimeout(()=>{this.modalNode.classList.add("is-hidden")},250),document.body.classList.remove("modal-open"),p.main.getAttribute("aria-hidden"===!1)&&(f==null||f.focus())},disableNotModalActions(e){if(e.key==="Escape"&&this.modalNode.classList.contains("is-open")&&this.closeModal(),e.key==="Tab"&&this.modalNode.classList.contains("is-open")){const t=this.getFocusableNodes(),s=t[0],n=t[t.length-1];e.shiftKey&&document.activeElement===s&&(e.preventDefault(),n.focus()),!e.shiftKey&&document.activeElement===n&&(e.preventDefault(),s.focus())}}},h=document.querySelector(".js-pet-list-categories"),l=document.querySelector(".js-pets-list-cards"),g=document.querySelector(".js-showmore-btn"),x=document.querySelector(".js-loader");let m=[],i=0,d=[];async function D(){var e,t;try{const n=(await r.get("https://paw-hut.b.goit.study/api/categories")).data;F(n)}catch(s){S.error({title:"Помилка",message:((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||"Неможливо завантажити дані"})}}async function I(){var e,t;try{m=(await r.get("https://paw-hut.b.goit.study/api/animals",{params:{page:1,limit:30}})).data.animals,d=m,N(m)}catch(s){S.error({title:"Помилка",message:((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||"Неможливо завантажити дані"})}}function F(e){const t=`<li class="pets-list-categories-item">
      <button class="category-btn active" type="button" data-name="all">Всі</button>
    </li>`,s=e.map(O).join("");h.innerHTML=t+s}function O(e){return`<li>
        <button class="category-btn" type="button" data-category="${e._id}" data-name="${e.name}">
          ${e.name}
        </button>
      </li>`}function T(){return window.innerWidth>=1440?9:8}function N(e){l.innerHTML="",i=0;const t=T(),s=e.slice(0,t);if(!s.length){l.innerHTML="<p>Нажаль наразі не має доступних хатніх тваринок 😞 </p>",v();return}const n=s.map(P).join("");l.insertAdjacentHTML("afterbegin",n),i=s.length,i>=e.length?v():q()}function P(e){return`<li class="petlist-pet-card" data-id="${e._id}">
      <img
        class="pet-image"
        src="${e.image||"images/placeholder.jpg"}"
        alt="${e.name}"
        loading="lazy"
      >

      <div class="petlist-pet-content">
        <div class="petlist-pet-content-about">
        <p class="petlist-pet-breed">${e.species}</p>
            
            <h3 class="petlist-card-tag">${e.name}</h3>

            <ul class="petlist-pet-categories">
    ${e.categories&&e.categories.length?e.categories.map(t=>`<li class="petlist-pet-category">${t.name}</li>`).join(""):'<li class="petlist-pet-category">No category</li>'}
  </ul>
            </div>
    
            <ul class="petlist-pet-meta">
              <li class="petlist-pet-meta-item">${e.gender}</li>
              <li class="petlist-pet-meta-item">${e.age}</li>
            </ul>
        </div>

        <p class="petlist-pet-description">
          ${e.shortDescription}
        </p>

        <button class="pet-more-btn js-pet-more-btn" type="button">Дізнатися більше</button>
      </div>
    </li>`}function R(e){const t=T(),s=e.slice(i,i+t);if(s.length===0){v();return}const n=s.map(P).join("");l.insertAdjacentHTML("beforeend",n),i+=s.length,q()}document.addEventListener("DOMContentLoaded",async()=>{await Promise.all([I(),D()]),j()});h.addEventListener("click",async e=>{e.preventDefault();const t=e.target.closest("button.category-btn");if(!t||!h.contains(t))return;U(),l.innerHTML="",await new Promise(n=>setTimeout(n,300));const s=t.dataset.name;d=_(s),N(d),h.querySelectorAll(".category-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),j()});g.addEventListener("click",()=>{R(d)});l.addEventListener("click",e=>{const t=e.target.closest(".js-pet-more-btn");if(!t)return;const n=t.closest(".petlist-pet-card").dataset.id;y.animalId=n,y.data=V(n),b.openModal(y)});function _(e){return e==="all"?m:m.filter(t=>{var s;return(s=t.categories)==null?void 0:s.some(n=>n&&n.name===e)})}function j(){x.classList.add("hidden"),q()}function U(){x.classList.remove("hidden"),v()}function q(){i<d.length?g.classList.remove("hidden"):g.classList.add("hidden")}function v(){g.classList.add("hidden")}function V(e){for(const t of d)if(t._id===e)return t}E.use([B,C]);const z=new E(".about-slider",{slidesPerView:1,allowTouchMove:!0,touchStartPreventDefault:!1,simulateTouch:!0,grabCursor:!0,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev"},pagination:{el:".about-pagination",clickable:!0,dynamicBullets:!1,renderBullet:function(e,t){return`<span class="${t}"></span>`}},on:{init:function(){L(this)},slideChange:function(){L(this)}}});function L(e){const t=e.pagination.bullets,s=e.activeIndex;if(!(window.innerWidth<=768)){t.forEach(o=>{o.style.width="8px",o.style.height="8px"});return}t.forEach((o,a)=>{o.style.width="4px",o.style.height="4px",a===s?(o.style.width="8px",o.style.height="8px"):(a===s-1||a===s+1)&&(o.style.width="6px",o.style.height="6px")})}window.addEventListener("resize",()=>L(z));const $=document.querySelectorAll(".faq-accordion-header");$.forEach(e=>{e.addEventListener("click",()=>{const t=e.querySelector(".faq-accordion-icon"),s=e.nextElementSibling;$.forEach(n=>{if(n!==e){const o=n.querySelector(".faq-accordion-icon"),a=n.nextElementSibling;o.classList.remove("faq-accordion-icon--rotated"),a.classList.remove("faq-accordion-content--visible")}}),t.classList.toggle("faq-accordion-icon--rotated"),s.classList.toggle("faq-accordion-content--visible")})});const K="/project-pets-are-friend/assets/sprite-DLjr_EAH.svg",A=document.querySelector(".swiper-wrapper.success-stories-lists");document.querySelector(".success-stories-button-next");document.querySelector(".success-stories-button-prev");document.querySelector(".success-stories-swiper-pagination");const W="https://paw-hut.b.goit.study",Y="/api/feedbacks";r.defaults.baseURL=W;async function G({page:e=1,limit:t=6}={}){try{return(await r.get(Y,{params:{page:e,limit:t}})).data}catch(s){throw console.error("❌ Error receiving reviews:",s),s}}function J(e){const t=e.map(({author:s,rate:n,description:o})=>`
    <div class="swiper-slide success-stories-list">
      <div class="rating" data-rate="${n}"></div>
      <p class="success-stories-list-review">${o}</p>
      <p class="success-stories-list-author">${s}</p>
    </div>
  `).join("");A.innerHTML="",A.insertAdjacentHTML("beforeend",t)}function Q(){new E(".success-stories-swiper",{slidesPerView:1,spaceBetween:32,navigation:{nextEl:".success-stories-button-next",prevEl:".success-stories-button-prev"},pagination:{el:".success-stories-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}function X(){document.querySelectorAll(".rating").forEach(e=>{e.innerHTML="";const t=parseFloat(e.dataset.rate||0),s=Math.floor(t),n=t%1>=.5;for(let o=0;o<5;o++){let a;o<s?a="icon-star-filled":o===s&&n?a="icon-star-half":a="icon-star-outline";const u=`
        <svg width="20" height="20" class="star">
          <use href="${K}#${a}"></use>
        </svg>
      `;e.insertAdjacentHTML("beforeend",u)}})}async function Z(){try{const e=await G(),{feedbacks:t}=e;J(t),Q(),requestAnimationFrame(()=>{X()})}catch{S.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}}Z();const w=document.querySelector(".scroll-to-top");window.addEventListener("scroll",function(){window.scrollY>300?w.classList.add("visible"):w.classList.remove("visible")});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
