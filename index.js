import{S as P,a as c,i as S,b as M,N as R,P as _}from"./assets/vendor-Dy3dqFjy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-header-menu-open]"),s=document.querySelector("[data-header-menu-close]"),a=document.querySelectorAll("[data-menu-close]");t.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{n()}),a.forEach(o=>{o.addEventListener("click",()=>{n()})}),e.addEventListener("click",o=>{o.target===e&&n()});function n(){e.classList.remove("active"),document.body.style.overflow=""}});const m={main:document.querySelector("main"),modalContainer:document.querySelector(".js-modal-backdrop"),modalContent:document.querySelector(".js-modal-content"),openModalBtn:document.querySelector(".open-modal-btn"),closeModalBtn:document.querySelector(".js-close-modal-btn")};let u=null;const g={modalNode:m.modalContainer,modalContent:m.modalContent,closeBtn:m.closeModalBtn,getFocusableNodes(){return this.modalNode.querySelectorAll("a, button, input, textarea")},openModal(e){u=document.activeElement,this.modalContent.innerHTML=e.getMarkup(),e.listnerHandler&&e.listnerHandler(),this.modalNode.classList.remove("is-hidden"),requestAnimationFrame(()=>{this.modalNode.classList.add("is-open")}),document.body.classList.add("modal-open");const t=this.getFocusableNodes();let s=null;for(const a of t){if(a.tagName==="INPUT"){s=a;break}s=t[1]}s==null||s.focus(),this.closeBtn.addEventListener("click",this.closeModal.bind(g)),this.modalNode.addEventListener("click",a=>{a.target===this.modalNode&&this.closeModal()}),document.addEventListener("keydown",a=>{this.disableNotModalActions(a)})},closeModal(){this.modalNode.classList.remove("is-open"),setTimeout(()=>{this.modalNode.classList.add("is-hidden")},250),document.body.classList.remove("modal-open"),m.main.getAttribute("aria-hidden"===!1)&&(u==null||u.focus())},disableNotModalActions(e){if(e.key==="Escape"&&this.modalNode.classList.contains("is-open")&&this.closeModal(),e.key==="Tab"&&this.modalNode.classList.contains("is-open")){const t=this.getFocusableNodes(),s=t[0],a=t[t.length-1];e.shiftKey&&document.activeElement===s&&(e.preventDefault(),a.focus()),!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),s.focus())}}},y={openSuccessAlert(e){this.successAllert(e),document.querySelector(".swal2-container").querySelector("button.swal2-confirm").focus()},successAllert(e){P.fire({title:"Ми отримали вашого листа!",icon:"success",text:e})},errorAlert(e){P.fire({icon:"error",title:"Oops...",html:e})}};c.defaults.baseURL="https://paw-hut.b.goit.study";async function U(e){var s,a;const t="/api/orders";try{return(await c.post(c.defaults.baseURL+t,e)).data}catch(n){y.errorAlert((a=(s=n.response)==null?void 0:s.data)==null?void 0:a.message)}}const I={animalId:null,getMarkup(){return`<form class="order-form js-order-form">
                <h2 class="order-title">Залишіть заявку на знайомство</h2>
                <div class='order-form-name-block'>
                <label for="name">Ім’я*</label>
                <input type="text" id="name" name="name" placeholder="Андрій">
                <span class="validation js-name-validation">Максимальна довжина ${this.validation.lengthLimits.name} символи</span></div>
                 <div class='order-form-phone-block'>
                <label for="phone">Телефон*</label>
                <input type="text" name="phone" id="phone" placeholder="38 (095) 555 99 22">
                 <span class="validation js-phone-validation">Очікується ${this.validation.lengthLimits.phone} цифр</span></div>
                 <div class='order-form-comment-block'><label for="comment">Коментар</label>
                <textarea type="textarea" name="comment" id="comment" placeholder="Напишіть ваш коментар"></textarea>
                 <span class="validation js-comment-validation">Максимальна довжина ${this.validation.lengthLimits.comment} символів</span></div>
               <div class='order-controllers-container'> <button type="submit" class="dark">Надіслати</button></div>
            </form>`},getFormEle(){return document.querySelector(".js-order-form")},listnerHandler(){this.formSubmitHandler(),this.formInputHandler(),this.formFocusInHandler(),this.formFocusOutHandler()},formSubmitHandler(){const e=this.getFormEle();e.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(e),a={name:s.get("name").trim(),phone:s.get("phone").trim().replace(/\D+/g,""),animalId:this.animalId};if(s.get("comment").trim()&&(a.comment=s.get("comment").trim()),!this.validation.formValidation(a)){if(this.validation.message.notEmpty.name){const i=e.querySelector(".js-name-validation");e.elements.name.classList.add("input-error"),i.classList.add("error")}if(this.validation.message.notEmpty.phone){const i=e.querySelector(".js-phone-validation");e.elements.phone.classList.add("input-error"),i.classList.add("error")}return}const o=await U(a);t.target.reset(),g.closeModal(),y.openSuccessAlert(`${a.name}, ${o.animalName} з нетерпінням чекає на зустріч.`)})},formInputHandler(){const e=this.getFormEle();e.addEventListener("input",t=>{let s,a,n;switch(t.target){case e.elements.name:n="name",a=this.validation.lengthLimits.name,s=()=>this.validation.checkMaxLength("name",t.target.value);break;case e.elements.phone:n="phone",a=this.validation.lengthLimits.phone,s=()=>this.validation.checkPhone(t.target.value);break;case e.elements.comment:n="comment",a=this.validation.lengthLimits.comment,s=()=>this.validation.checkMaxLength("comment",t.target.value);break}t.target.classList.remove("input-error");const o=e.querySelector(`.js-${n}-validation`);let i=t.target.value;n==="phone"&&(i=this.validation.cleanPhoneValue(t.target.value),t.target.value=this.validation.formatPhone(i)),o.innerHTML=`${Math.min(i.length,this.validation.lengthLimits.phone)} з ${a}`,s()?(t.target.classList.remove("input-error"),o.classList.remove("error")):(t.target.classList.add("input-error"),o.classList.add("error"))})},formFocusInHandler(){const e=this.getFormEle();e.addEventListener("focusin",async t=>{(t.target===e.elements.name||t.target===e.elements.phone||t.target===e.elements.comment)&&t.target.classList.remove("input-error")})},formFocusOutHandler(){const e=this.getFormEle();e.addEventListener("focusout",async t=>{switch(t.target){case e.elements.phone:this.validation.checkPhone(t.target.value)||t.target.classList.add("input-error");break}})},validation:{lengthLimits:{name:32,phone:12,comment:500},message:{notEmpty:{name:"",phone:""},maxLength:{name:"",comment:""},content:{phone:""}},cleanPhoneValue(e){return e.trim().replace(/\D+/g,"")},checkIsNotEmpty(e,t){let s="";if(t===""){switch(e){case"name":s="І'мя";break;case"phone":s="Телефон";break}return this.message.notEmpty[e]=`Заповніть, будь ласка, ${s}.`,!1}return this.message.notEmpty[e]="",!0},checkMaxLength(e,t){let s="",a="";switch(e){case"name":s=this.lengthLimits.name,a="І'мя";break;case"comment":s=this.lengthLimits.comment,a="Коментаря";break}return t.length>s?(this.message.maxLength[e]=`Максимальна довжина ${a} не має перевищувати ${s} символів.`,!1):(this.message.maxLength[e]="",!0)},checkPhone(e){return this.cleanPhoneValue(e).match(/^[0-9]{12}$/)?(this.message.content.phone="",!0):(this.message.content.phone=`Телефон повинен містити ${this.lengthLimits.phone} цифр.`,!1)},formValidation(e){const t=this.checkIsNotEmpty("name",e.name)&&this.checkMaxLength("name",e.name),s=this.checkIsNotEmpty("phone",e.phone)&&this.checkPhone(e.phone),a=e.comment?this.checkMaxLength("comment",e.comment):!0,n=t&&s&&a;if(!n){const o=this.message.notEmpty.name||this.message.maxLength.name,i=this.message.notEmpty.phone||this.message.content.phone,d=this.message.maxLength.comment,f=`${o?o+"<br>":""}
          ${i?i+"<br>":""}
         ${d?d+"<br>":""}`;y.errorAlert(f)}return n},formatPhone(e){let t="";return e.length>0&&(t+=e.slice(0,2)),e.length>2&&(t+=" ("+e.slice(2,5)),e.length>5&&(t+=") "+e.slice(5,8)),e.length>8&&(t+=" "+e.slice(8,10)),e.length>10&&(t+=" "+e.slice(10,12)),t}}},v={animalId:"",data:{},getMarkup(){return`<div class="animal-details-container js-animal-details-container">
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
    </div>`},listnerHandler(){document.querySelector(".js-go-to-order-btn").addEventListener("click",async t=>{I.animalId=this.animalId,g.openModal(I)})}},b=document.querySelector(".js-pet-list-categories"),$=document.querySelector(".js-pets-list-cards"),q=document.querySelector(".js-showmore-btn"),C=document.querySelector(".js-loader");let l=[],h="all",p=1,r=0,x=0;const z=B();async function K(){try{const e=await c.get("https://paw-hut.b.goit.study/api/categories");V(e.data)}catch{S.error({title:"Помилка",message:"Неможливо завантажити категорії"})}}async function F({category:e="all",page:t=1}={}){try{const s={page:t,limit:z};return e!=="all"&&(s.categoryId=e),(await c.get("https://paw-hut.b.goit.study/api/animals",{params:s})).data}catch{return S.error({title:"Помилка",message:"Неможливо завантажити тварин"}),{animals:[],totalItems:0}}}function V(e){const t=`
    <li>
      <button class="category-btn active" data-category-id="all">
        Всі
      </button>
    </li>`;b.innerHTML=t+e.map(W).join("")}function W(e){return`
    <li>
      <button class="category-btn" data-category-id="${e._id}">
        ${e.name}
      </button>
    </li>`}function L(){const e=B(),t=l.slice(r,r+e);if(!t.length){w();return}$.insertAdjacentHTML("beforeend",t.map(G).join("")),r+=t.length,w()}function G(e){var t;return`<li class="petlist-pet-card" data-id="${e._id}">
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
    </li>`}async function A(){T(),p=1,r=0,$.innerHTML="";const e=await F({category:h,page:p});l=e.animals,x=e.totalItems,L(),H()}async function Y(){if(r<l.length){L();return}if(r>=x){D();return}T(),p+=1;const e=await F({category:h,page:p});l.push(...e.animals),L(),H()}document.addEventListener("DOMContentLoaded",async()=>{await A(),await K()});b.addEventListener("click",async e=>{const t=e.target.closest(".category-btn");if(!t)return;const s=t.dataset.categoryId;s!==h&&(h=s,b.querySelectorAll(".category-btn").forEach(a=>a.classList.remove("active")),t.classList.add("active"),await A())});q.addEventListener("click",Y);$.addEventListener("click",e=>{const t=e.target.closest(".js-pet-more-btn");if(!t)return;const s=t.closest(".petlist-pet-card"),a=l.find(n=>n._id===s.dataset.id);a&&(v.animalId=a._id,v.data=a,g.openModal(v))});function B(){return window.innerWidth>=1440?9:8}function w(){q.classList.toggle("hidden",r>=x)}function T(){C.classList.remove("hidden"),D()}function H(){C.classList.add("hidden"),w()}function D(){q.classList.add("hidden")}M.use([R,_]);const J=new M(".about-slider",{slidesPerView:1,allowTouchMove:!0,touchStartPreventDefault:!1,simulateTouch:!0,grabCursor:!0,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev"},pagination:{el:".about-pagination",clickable:!0,dynamicBullets:!1,renderBullet:function(e,t){return`<span class="${t}"></span>`}},on:{init:function(){E(this)},slideChange:function(){E(this)}}});function E(e){const t=e.pagination.bullets,s=e.activeIndex;if(!(window.innerWidth<=768)){t.forEach(n=>{n.style.width="8px",n.style.height="8px"});return}t.forEach((n,o)=>{n.style.width="4px",n.style.height="4px",o===s?(n.style.width="8px",n.style.height="8px"):(o===s-1||o===s+1)&&(n.style.width="6px",n.style.height="6px")})}window.addEventListener("resize",()=>E(J));const N=document.querySelectorAll(".faq-accordion-header");N.forEach(e=>{e.addEventListener("click",()=>{const t=e.querySelector(".faq-accordion-icon"),s=e.nextElementSibling;N.forEach(a=>{if(a!==e){const n=a.querySelector(".faq-accordion-icon"),o=a.nextElementSibling;n.classList.remove("faq-accordion-icon--rotated"),o.classList.remove("faq-accordion-content--visible")}}),t.classList.toggle("faq-accordion-icon--rotated"),s.classList.toggle("faq-accordion-content--visible")})});const j=document.querySelector(".swiper-wrapper.success-stories-lists");document.querySelector(".success-stories-button-next");document.querySelector(".success-stories-button-prev");document.querySelector(".success-stories-swiper-pagination");const Q="https://paw-hut.b.goit.study",X="/api/feedbacks";c.defaults.baseURL=Q;async function Z({page:e=1,limit:t=6}={}){try{return(await c.get(X,{params:{page:e,limit:t}})).data}catch(s){throw console.error("❌ Error receiving reviews:",s),s}}function ee(e){const t=e.map(({author:s,rate:a,description:n})=>{const o=Math.floor(a),i=a%1===.5,d=`rating value-${o} ${i?"half":""}`,f=`
      <svg class="icon star-empty"><use href="./sprite.svg#icon-star-outline"></use></svg>
      <svg class="icon star-half"><use href="./sprite.svg#icon-star-half"></use></svg>
      <svg class="icon star-filled"><use href="./sprite.svg#icon-star-filled"></use></svg>
    `,O=Array.from({length:5}).map(()=>`<div class="star">${f}</div>`).join("");return`
      <li class="swiper-slide success-stories-list">
        <div class="${d} star-icon color-default">
          <div class="star-container">
            ${O}
          </div>
        </div>
        <p class="success-stories-list-review">${n}</p>
        <p class="success-stories-list-author">${s}</p>
      </li>
    `}).join("");j.innerHTML="",j.insertAdjacentHTML("beforeend",t)}function te(){new M(".success-stories-swiper",{slidesPerView:1,spaceBetween:32,navigation:{nextEl:".success-stories-button-next",prevEl:".success-stories-button-prev"},pagination:{el:".success-stories-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2}}})}async function se(){try{const e=await Z(),{feedbacks:t}=e;ee(t),te()}catch{S.error({title:"Error",message:"Failed to load reviews",position:"topRight"})}}se();const k=document.querySelector(".scroll-to-top");window.addEventListener("scroll",function(){window.scrollY>300?k.classList.add("visible"):k.classList.remove("visible")});k.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
