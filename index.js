import{S as P,a as l,i as S,b as $,N as V,P as R}from"./assets/vendor-Dy3dqFjy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-header-menu-open]"),s=document.querySelector("[data-header-menu-close]"),n=document.querySelectorAll("[data-menu-close]");t.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{a()}),n.forEach(o=>{o.addEventListener("click",()=>{a()})}),e.addEventListener("click",o=>{o.target===e&&a()});function a(){e.classList.remove("active"),document.body.style.overflow=""}});const m={main:document.querySelector("main"),modalContainer:document.querySelector(".js-modal-backdrop"),modalContent:document.querySelector(".js-modal-content"),openModalBtn:document.querySelector(".open-modal-btn"),closeModalBtn:document.querySelector(".js-close-modal-btn")};let u=null;const f={modalNode:m.modalContainer,modalContent:m.modalContent,closeBtn:m.closeModalBtn,getFocusableNodes(){return this.modalNode.querySelectorAll("a, button, input, textarea")},openModal(e){var s;u=document.activeElement,this.modalContent.innerHTML=e.getMarkup(),e.listnerHandler&&e.listnerHandler(),this.modalNode.classList.remove("is-hidden"),requestAnimationFrame(()=>{this.modalNode.classList.add("is-open")}),document.body.classList.add("modal-open"),(s=this.getFocusableNodes()[0])==null||s.focus(),this.closeBtn.addEventListener("click",this.closeModal.bind(f)),this.modalNode.addEventListener("click",n=>{n.target===this.modalNode&&this.closeModal()}),document.addEventListener("keydown",n=>{this.disableNotModalActions(n)})},closeModal(){this.modalNode.classList.remove("is-open"),setTimeout(()=>{this.modalNode.classList.add("is-hidden")},250),document.body.classList.remove("modal-open"),m.main.getAttribute("aria-hidden"===!1)&&(u==null||u.focus())},disableNotModalActions(e){if(e.key==="Escape"&&this.modalNode.classList.contains("is-open")&&this.closeModal(),e.key==="Tab"&&this.modalNode.classList.contains("is-open")){const t=this.getFocusableNodes(),s=t[0],n=t[t.length-1];e.shiftKey&&document.activeElement===s&&(e.preventDefault(),n.focus()),!e.shiftKey&&document.activeElement===n&&(e.preventDefault(),s.focus())}}},h={openSuccessAlert(e){this.successAllert(e),document.querySelector(".swal2-container").querySelector("button.swal2-confirm").focus()},successAllert(e){P.fire({title:"Відправка успішна!",icon:"success",text:e})},errorAlert(e){P.fire({icon:"error",title:"Oops...",html:e})}};l.defaults.baseURL="https://paw-hut.b.goit.study";async function _(e){var s,n;const t="/api/orders";try{return(await l.post(l.defaults.baseURL+t,e)).data}catch(a){h.errorAlert((n=(s=a.response)==null?void 0:s.data)==null?void 0:n.message)}}const I={animalId:null,getMarkup(){return`<form class="order-form js-order-form">
                <h2 class="order-title">Залишіть заявку на знайомство</h2>
                <div class='order-form-name-block'>
                <label for="name">Ім’я*</label>
                <input type="text" id="name" name="name" placeholder="Андрій">
                <span class="validation js-name-validation">Максимальна довжина ${this.validation.lengthLimits.name} символи</span></div>
                 <div class='order-form-phone-block'>
                <label for="phone">Телефон*</label>
                <input type="text" name="phone" id="phone" placeholder="+38 (095) 555 99 22">
                 <span class="validation js-phone-validation">Очікується ${this.validation.lengthLimits.phone} цифр</span></div>
                 <div class='order-form-comment-block'><label for="comment">Коментар</label>
                <textarea type="textarea" name="comment" id="comment" placeholder="Напишіть ваш коментар"></textarea>
                 <span class="validation js-comment-validation">Максимальна довжина ${this.validation.lengthLimits.comment} символів</span></div>
               <div class='order-controllers-container'> <button type="submit" class="dark">Надіслати</button></div>
            </form>`},getFormEle(){return document.querySelector(".js-order-form")},listnerHandler(){this.formSubmitHandler(),this.formInputHandler(),this.formFocusInHandler(),this.formFocusOutHandler()},formSubmitHandler(){const e=this.getFormEle();e.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(e),n={name:s.get("name").trim(),phone:s.get("phone").trim().replace(/\D+/g,""),animalId:this.animalId};if(s.get("comment").trim()&&(n.comment=s.get("comment").trim()),!this.validation.formValidation(n))return;h.openSuccessAlert(`${n.name}, Ваш запит відправлено.`);const o=await _(n);t.target.reset(),f.closeModal(),h.openSuccessAlert(`${n.name}, ${o.animalName} з нетерпінням чекає на зустріч.`)})},formInputHandler(){let e;const t=this.getFormEle();t.addEventListener("input",async s=>{let n,a,o;switch(s.target){case t.elements.name:o="name",a=this.validation.lengthLimits.name,n=()=>this.validation.checkMaxLength("name",s.target.value);break;case t.elements.phone:o="phone",a=this.validation.lengthLimits.phone,n=()=>this.validation.checkPhone(s.target.value);break;case t.elements.comment:o="comment",a=this.validation.lengthLimits.comment,n=()=>this.validation.checkMaxLength("comment",s.target.value);break}s.target.classList.remove("input-error"),clearTimeout(e),e=setTimeout(()=>{const i=t.querySelector(`.js-${o}-validation`);let r=s.target.value;o==="phone"&&(r=this.validation.cleanPhoneValue(s.target.value)),i.innerHTML=`${r.length} з ${a}`,n()?(s.target.classList.remove("input-error"),i.classList.remove("error")):(s.target.classList.add("input-error"),i.classList.add("error"))},500)})},formFocusInHandler(){const e=this.getFormEle();e.addEventListener("focusin",async t=>{(t.target===e.elements.name||t.target===e.elements.phone||t.target===e.elements.comment)&&t.target.classList.remove("input-error")})},formFocusOutHandler(){const e=this.getFormEle();e.addEventListener("focusout",async t=>{switch(t.target){case e.elements.phone:this.validation.checkPhone(t.target.value)||t.target.classList.add("input-error");break}})},validation:{lengthLimits:{name:32,phone:12,comment:500},message:{notEmpty:{name:"",phone:""},maxLength:{name:"",comment:""},content:{phone:""}},cleanPhoneValue(e){return e.trim().replace(/\D+/g,"")},checkIsNotEmpty(e,t){let s="";if(t===""){switch(e){case"name":s="І'мя";break;case"phone":s="Телефон";break}return this.message.notEmpty[e]=`Заповніть, будь ласка, ${s}.`,!1}return this.message.notEmpty[e]="",!0},checkMaxLength(e,t){let s="",n="";switch(e){case"name":s=this.lengthLimits.name,n="І'мя";break;case"comment":s=this.lengthLimits.comment,n="Коментаря";break}return t.length>s?(this.message.maxLength[e]=`Максимальна довжина ${n} не має перевищувати ${s} символів.`,!1):(this.message.maxLength[e]="",!0)},checkPhone(e){return this.cleanPhoneValue(e).match(/^[0-9]{12}$/)?(this.message.content.phone="",!0):(this.message.content.phone=`Телефон повинен містити ${this.lengthLimits.phone} цифр.`,!1)},formValidation(e){const t=this.checkIsNotEmpty("name",e.name)&&this.checkMaxLength("name",e.name),s=this.checkIsNotEmpty("phone",e.phone)&&this.checkPhone(e.phone),n=e.comment?this.checkMaxLength("comment",e.comment):!0,a=t&&s&&n;if(!a){const o=this.message.notEmpty.name||this.message.maxLength.name,i=this.message.notEmpty.phone||this.message.content.phone,r=this.message.maxLength.comment,v=`${o?o+"<br>":""}
          ${i?i+"<br>":""}
         ${r?r+"<br>":""}`;h.errorAlert(v)}return a}}},y={animalId:"",data:{},getMarkup(){return`<div class="animal-details-container js-animal-details-container">
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
    </div>`},listnerHandler(){document.querySelector(".js-go-to-order-btn").addEventListener("click",async t=>{I.animalId=this.animalId,f.openModal(I)})}},b=document.querySelector(".js-pet-list-categories"),M=document.querySelector(".js-pets-list-cards"),x=document.querySelector(".js-showmore-btn"),A=document.querySelector(".js-loader");let d=[],p="all",g=1,c=0,q=0;const z=B();async function U(){try{const e=await l.get("https://paw-hut.b.goit.study/api/categories");K(e.data)}catch{S.error({title:"Помилка",message:"Неможливо завантажити категорії"})}}async function C({category:e="all",page:t=1}={}){try{const s={page:t,limit:z};return e!=="all"&&(s.categoryId=e),(await l.get("https://paw-hut.b.goit.study/api/animals",{params:s})).data}catch{return S.error({title:"Помилка",message:"Неможливо завантажити тварин"}),{animals:[],totalItems:0}}}function K(e){const t=`
    <li>
      <button class="category-btn active" data-category-id="all">
        Всі
      </button>
    </li>`;b.innerHTML=t+e.map(W).join("")}function W(e){return`
    <li>
      <button class="category-btn" data-category-id="${e._id}">
        ${e.name}
      </button>
    </li>`}function L(){const e=B(),t=d.slice(c,c+e);if(!t.length){w();return}M.insertAdjacentHTML("beforeend",t.map(G).join("")),c+=t.length,w()}function G(e){var t;return`<li class="petlist-pet-card" data-id="${e._id}">
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
    </li>`}async function F(){T(),g=1,c=0,M.innerHTML="";const e=await C({category:p,page:g});d=e.animals,q=e.totalItems,L(),H()}async function Y(){if(c<d.length){L();return}if(c>=q){D();return}T(),g+=1;const e=await C({category:p,page:g});d.push(...e.animals),L(),H()}document.addEventListener("DOMContentLoaded",async()=>{await F(),await U()});b.addEventListener("click",async e=>{const t=e.target.closest(".category-btn");if(!t)return;const s=t.dataset.categoryId;s!==p&&(p=s,b.querySelectorAll(".category-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),await F())});x.addEventListener("click",Y);M.addEventListener("click",e=>{const t=e.target.closest(".js-pet-more-btn");if(!t)return;const s=t.closest(".petlist-pet-card"),n=d.find(a=>a._id===s.dataset.id);n&&(y.animalId=n._id,y.data=n,f.openModal(y))});function B(){return window.innerWidth>=1440?9:8}function w(){x.classList.toggle("hidden",c>=q)}function T(){A.classList.remove("hidden"),D()}function H(){A.classList.add("hidden"),w()}function D(){x.classList.add("hidden")}$.use([V,R]);const J=new $(".about-slider",{slidesPerView:1,allowTouchMove:!0,touchStartPreventDefault:!1,simulateTouch:!0,grabCursor:!0,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev"},pagination:{el:".about-pagination",clickable:!0,dynamicBullets:!1,renderBullet:function(e,t){return`<span class="${t}"></span>`}},on:{init:function(){E(this)},slideChange:function(){E(this)}}});function E(e){const t=e.pagination.bullets,s=e.activeIndex;if(!(window.innerWidth<=768)){t.forEach(a=>{a.style.width="8px",a.style.height="8px"});return}t.forEach((a,o)=>{a.style.width="4px",a.style.height="4px",o===s?(a.style.width="8px",a.style.height="8px"):(o===s-1||o===s+1)&&(a.style.width="6px",a.style.height="6px")})}window.addEventListener("resize",()=>E(J));const N=document.querySelectorAll(".faq-accordion-header");N.forEach(e=>{e.addEventListener("click",()=>{const t=e.querySelector(".faq-accordion-icon"),s=e.nextElementSibling;N.forEach(n=>{if(n!==e){const a=n.querySelector(".faq-accordion-icon"),o=n.nextElementSibling;a.classList.remove("faq-accordion-icon--rotated"),o.classList.remove("faq-accordion-content--visible")}}),t.classList.toggle("faq-accordion-icon--rotated"),s.classList.toggle("faq-accordion-content--visible")})});const j=document.querySelector(".swiper-wrapper.success-stories-lists");document.querySelector(".success-stories-button-next");document.querySelector(".success-stories-button-prev");document.querySelector(".success-stories-swiper-pagination");const Q="https://paw-hut.b.goit.study",X="/api/feedbacks";l.defaults.baseURL=Q;async function Z({page:e=1,limit:t=6}={}){try{return(await l.get(X,{params:{page:e,limit:t}})).data}catch(s){throw console.error("❌ Error receiving reviews:",s),s}}function ee(e){const t=e.map(({author:s,rate:n,description:a})=>{const o=Math.floor(n),i=n%1===.5,r=`rating value-${o} ${i?"half":""}`,v=`
      <svg class="icon star-empty"><use href="./sprite.svg#icon-star-outline"></use></svg>
      <svg class="icon star-half"><use href="./sprite.svg#icon-star-half"></use></svg>
      <svg class="icon star-filled"><use href="./sprite.svg#icon-star-filled"></use></svg>
    `,O=Array.from({length:5}).map(()=>`<div class="star">${v}</div>`).join("");return`
      <li class="swiper-slide success-stories-list">
        <div class="${r} star-icon color-default">
          <div class="star-container">
            ${O}
          </div>
        </div>
        <p class="success-stories-list-review">${a}</p>
        <p class="success-stories-list-author">${s}</p>
      </li>
    `}).join("");j.innerHTML="",j.insertAdjacentHTML("beforeend",t)}function te(){new $(".success-stories-swiper",{slidesPerView:1,spaceBetween:32,navigation:{nextEl:".success-stories-button-next",prevEl:".success-stories-button-prev"},pagination:{el:".success-stories-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}async function se(){try{const e=await Z(),{feedbacks:t}=e;ee(t),te()}catch{S.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}}se();const k=document.querySelector(".scroll-to-top");window.addEventListener("scroll",function(){window.scrollY>300?k.classList.add("visible"):k.classList.remove("visible")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
