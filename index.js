import{S as k,a as r,i as S,b as E,N as R,P as _}from"./assets/vendor-Dy3dqFjy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-header-menu-open]"),s=document.querySelector("[data-header-menu-close]"),o=document.querySelectorAll("[data-menu-close]");t.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{a()}),o.forEach(n=>{n.addEventListener("click",()=>{a()})}),e.addEventListener("click",n=>{n.target===e&&a()});function a(){e.classList.remove("active"),document.body.style.overflow=""}});const c={openSuccessAlert(e){this.successAllert(e),document.querySelector(".swal2-container").querySelector("button.swal2-confirm").focus()},successAllert(e){k.fire({title:"Відправка успішна!",icon:"success",text:e})},errorAlert(e){k.fire({icon:"error",title:"Oops...",text:e})}};r.defaults.baseURL="https://paw-hut.b.goit.study";async function V(e){var s,o;const t="/api/orders";try{return(await r.post(r.defaults.baseURL+t,e)).data}catch(a){c.errorAlert((o=(s=a.response)==null?void 0:s.data)==null?void 0:o.message)}}const x={animalId:null,getMarkup(){return`<form class="order-form js-order-form">
                <h2 class="order-title">Залишіть заявку на знайомство</h2>
                <label for="name">Ім’я*</label>
                <input type="text" id="name" name="name" placeholder="Андрій">
                <label for="phone">Телефон*</label>
                <input type="text" name="phone" id="phone" placeholder="+38 (095) 555 99 22">
                <label for="comment">Коментар</label>
                <textarea type="textarea"  name="comment" id="comment" placeholder="Напишіть ваш коментар"></textarea>
               <div class='order-controllers-container'> <button type="submit" class="dark">Надіслати</button></div>
            </form>`},listnerHandler(){const e=document.querySelector(".js-order-form");e.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(e),o={name:s.get("name").trim(),phone:s.get("phone").trim(),animalId:this.animalId};if(s.get("comment").trim()&&(o.comment=s.get("comment").trim()),!this.fieldsValidation(o))return;const n=await V(o);t.target.reset(),f.closeModal(),c.openSuccessAlert(`${o.name}, ${n.animalName} з нетерпінням чекає на зустріч.`)})},fieldsValidation(e){return e.name===""||e.phone===""?(c.errorAlert("Заповніть, будь ласка І'мя та Телефон."),!1):e.name.length>32?(c.errorAlert("Максимальна довжина І'мя не має перевищувати 32 символи."),!1):e.phone.match(/^[0-9]{12}$/)?e.comment&&e.comment.length>500?(c.errorAlert(`Максимальна довжина Коментаря не має перевищувати 500 символів. Зараз він ${e.comment.length} символів.`),!1):!0:(c.errorAlert("Телефон має складатися з 12 цифр."),!1)}},g={animalId:"",data:{},getMarkup(){return`<div class="animal-details-container js-animal-details-container">
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
    </div>`},listnerHandler(){document.querySelector(".js-go-to-order-btn").addEventListener("click",async t=>{x.animalId=this.animalId,f.openModal(x)})}},u={main:document.querySelector("main"),modalContainer:document.querySelector(".js-modal-backdrop"),modalContent:document.querySelector(".js-modal-content"),openModalBtn:document.querySelector(".open-modal-btn"),closeModalBtn:document.querySelector(".js-close-modal-btn")};let m=null;const f={modalNode:u.modalContainer,modalContent:u.modalContent,closeBtn:u.closeModalBtn,getFocusableNodes(){return this.modalNode.querySelectorAll("a, button, input, textarea")},openModal(e){var s;m=document.activeElement,this.modalContent.innerHTML=e.getMarkup(),e.listnerHandler&&e.listnerHandler(),this.modalNode.classList.remove("is-hidden"),requestAnimationFrame(()=>{this.modalNode.classList.add("is-open")}),document.body.classList.add("modal-open"),(s=this.getFocusableNodes()[0])==null||s.focus(),this.closeBtn.addEventListener("click",this.closeModal.bind(f)),this.modalNode.addEventListener("click",o=>{o.target===this.modalNode&&this.closeModal()}),document.addEventListener("keydown",o=>{this.disableNotModalActions(o)})},closeModal(){this.modalNode.classList.remove("is-open"),setTimeout(()=>{this.modalNode.classList.add("is-hidden")},250),document.body.classList.remove("modal-open"),u.main.getAttribute("aria-hidden"===!1)&&(m==null||m.focus())},disableNotModalActions(e){if(e.key==="Escape"&&this.modalNode.classList.contains("is-open")&&this.closeModal(),e.key==="Tab"&&this.modalNode.classList.contains("is-open")){const t=this.getFocusableNodes(),s=t[0],o=t[t.length-1];e.shiftKey&&document.activeElement===s&&(e.preventDefault(),o.focus()),!e.shiftKey&&document.activeElement===o&&(e.preventDefault(),s.focus())}}},v=document.querySelector(".js-pet-list-categories"),q=document.querySelector(".js-pets-list-cards"),M=document.querySelector(".js-showmore-btn"),I=document.querySelector(".js-loader");let d=[],p="all",h=1,i=0,$=0;const z=C();async function U(){try{const e=await r.get("https://paw-hut.b.goit.study/api/categories");K(e.data)}catch{S.error({title:"Помилка",message:"Неможливо завантажити категорії"})}}async function P({category:e="all",page:t=1}={}){try{const s={page:t,limit:z};return e!=="all"&&(s.categoryId=e),(await r.get("https://paw-hut.b.goit.study/api/animals",{params:s})).data}catch{return S.error({title:"Помилка",message:"Неможливо завантажити тварин"}),{animals:[],totalItems:0}}}function K(e){const t=`
    <li>
      <button class="category-btn active" data-category-id="all">
        Всі
      </button>
    </li>`;v.innerHTML=t+e.map(W).join("")}function W(e){return`
    <li>
      <button class="category-btn" data-category-id="${e._id}">
        ${e.name}
      </button>
    </li>`}function y(){const e=C(),t=d.slice(i,i+e);if(!t.length){b();return}q.insertAdjacentHTML("beforeend",t.map(G).join("")),i+=t.length,b()}function G(e){var t;return`<li class="petlist-pet-card" data-id="${e._id}">
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
    ${(t=e.categories)!=null&&t.length?e.categories.map(s=>`<li class="petlist-pet-category">${s.name}</li>`).join(""):'<li class="petlist-pet-category">No category</li>'}
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
    </li>`}async function B(){j(),h=1,i=0,q.innerHTML="";const e=await P({category:p,page:h});d=e.animals,$=e.totalItems,y(),T()}async function Y(){if(i<d.length){y();return}if(i>=$){D();return}j(),h+=1;const e=await P({category:p,page:h});d.push(...e.animals),y(),T()}document.addEventListener("DOMContentLoaded",async()=>{await B(),await U()});v.addEventListener("click",async e=>{const t=e.target.closest(".category-btn");if(!t)return;const s=t.dataset.categoryId;s!==p&&(p=s,v.querySelectorAll(".category-btn").forEach(o=>o.classList.remove("active")),t.classList.add("active"),await B())});M.addEventListener("click",Y);q.addEventListener("click",e=>{const t=e.target.closest(".js-pet-more-btn");if(!t)return;const s=t.closest(".petlist-pet-card"),o=d.find(a=>a._id===s.dataset.id);o&&(g.animalId=o._id,g.data=o,f.openModal(g))});function C(){return window.innerWidth>=1440?9:8}function b(){M.classList.toggle("hidden",i>=$)}function j(){I.classList.remove("hidden"),D()}function T(){I.classList.add("hidden"),b()}function D(){M.classList.add("hidden")}E.use([R,_]);const J=new E(".about-slider",{slidesPerView:1,allowTouchMove:!0,touchStartPreventDefault:!1,simulateTouch:!0,grabCursor:!0,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev"},pagination:{el:".about-pagination",clickable:!0,dynamicBullets:!1,renderBullet:function(e,t){return`<span class="${t}"></span>`}},on:{init:function(){L(this)},slideChange:function(){L(this)}}});function L(e){const t=e.pagination.bullets,s=e.activeIndex;if(!(window.innerWidth<=768)){t.forEach(a=>{a.style.width="8px",a.style.height="8px"});return}t.forEach((a,n)=>{a.style.width="4px",a.style.height="4px",n===s?(a.style.width="8px",a.style.height="8px"):(n===s-1||n===s+1)&&(a.style.width="6px",a.style.height="6px")})}window.addEventListener("resize",()=>L(J));const N=document.querySelectorAll(".faq-accordion-header");N.forEach(e=>{e.addEventListener("click",()=>{const t=e.querySelector(".faq-accordion-icon"),s=e.nextElementSibling;N.forEach(o=>{if(o!==e){const a=o.querySelector(".faq-accordion-icon"),n=o.nextElementSibling;a.classList.remove("faq-accordion-icon--rotated"),n.classList.remove("faq-accordion-content--visible")}}),t.classList.toggle("faq-accordion-icon--rotated"),s.classList.toggle("faq-accordion-content--visible")})});const A=document.querySelector(".swiper-wrapper.success-stories-lists");document.querySelector(".success-stories-button-next");document.querySelector(".success-stories-button-prev");document.querySelector(".success-stories-swiper-pagination");const Q="https://paw-hut.b.goit.study",X="/api/feedbacks";r.defaults.baseURL=Q;async function Z({page:e=1,limit:t=6}={}){try{return(await r.get(X,{params:{page:e,limit:t}})).data}catch(s){throw console.error("❌ Error receiving reviews:",s),s}}function ee(e){const t=e.map(({author:s,rate:o,description:a})=>{const n=Math.floor(o),l=o%1===.5,O=`rating value-${n} ${l?"half":""}`,F=`
      <svg class="icon star-empty"><use href="../images/sprite.svg#iicon-star-outline"></use></svg>
      <svg class="icon star-half"><use href="../images/sprite.svg#icon-star-half"></use></svg>
      <svg class="icon star-filled"><use href="../images/sprite.svg#icon-star-filled"></use></svg>
    `,H=Array.from({length:5}).map(()=>`<div class="star">${F}</div>`).join("");return`
      <li class="swiper-slide success-stories-list">
        <div class="${O} star-icon color-default">
          <div class="star-container">
            ${H}
          </div>
        </div>
        <p class="success-stories-list-review">${a}</p>
        <p class="success-stories-list-author">${s}</p>
      </li>
    `}).join("");A.innerHTML="",A.insertAdjacentHTML("beforeend",t)}function te(){new E(".success-stories-swiper",{slidesPerView:1,spaceBetween:32,navigation:{nextEl:".success-stories-button-next",prevEl:".success-stories-button-prev"},pagination:{el:".success-stories-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}async function se(){try{const e=await Z(),{feedbacks:t}=e;ee(t),te()}catch{S.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}}se();const w=document.querySelector(".scroll-to-top");window.addEventListener("scroll",function(){window.scrollY>300?w.classList.add("visible"):w.classList.remove("visible")});w.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
