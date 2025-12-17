import{S as M,a as m,i as E}from"./assets/vendor-fWeRe5wa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const b of o.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&n(b)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-header-menu-open]"),s=document.querySelector("[data-header-menu-close]"),n=document.querySelectorAll("[data-menu-close]");t.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{a()}),n.forEach(o=>{o.addEventListener("click",()=>{a()})}),e.addEventListener("click",o=>{o.target===e&&a()});function a(){e.classList.remove("active"),document.body.style.overflow=""}});const r={openSuccessAlert(e){this.successAllert(e),document.querySelector(".swal2-container").querySelector("button.swal2-confirm").focus()},successAllert(e){M.fire({title:"Відправка успішна!",icon:"success",text:e})},errorAlert(e){M.fire({icon:"error",title:"Oops...",text:e})}};m.defaults.baseURL="https://paw-hut.b.goit.study";async function j(e){var s,n;const t="/api/orders";try{return(await m.post(m.defaults.baseURL+t,e)).data}catch(a){r.errorAlert((n=(s=a.response)==null?void 0:s.data)==null?void 0:n.message)}}const S={animalId:null,getMarkup(){return`<form class="order-form js-order-form">
                <h2 class="order-title">Залишіть заявку на знайомство</h2>
                <label for="name">Ім’я*</label>
                <input type="text" id="name" name="name" placeholder="Андрій">
                <label for="phone">Телефон*</label>
                <input type="text" name="phone" id="phone" placeholder="+38 (095) 555 99 22">
                <label for="comment">Коментар</label>
                <textarea type="textarea" name="comment" id="comment" placeholder="Напишіть ваш коментар"></textarea>
               <div class='order-controllers-container'> <button type="submit" class="dark">Надіслати</button></div>
            </form>`},listnerHandler(){const e=document.querySelector(".js-order-form");e.addEventListener("submit",async t=>{t.preventDefault();const s=new FormData(e),n={name:s.get("name").trim(),phone:s.get("phone").trim(),animalId:this.animalId};if(s.get("comment").trim()&&(n.comment=s.get("comment").trim()),!this.fieldsValidation(n))return;const o=await j(n);t.target.reset(),y.closeModal(),r.openSuccessAlert(`${n.name}, ${o.animalName} з нетерпінням чекає на зустріч.`)})},fieldsValidation(e){return e.name===""||e.phone===""?(r.errorAlert("Заповніть, будь ласка І'мя та Телефон."),!1):e.name.length>32?(r.errorAlert("Максимальна довжина І'мя не має перевищувати 32 символи."),!1):e.phone.match(/^[0-9]{12}$/)?e.comment&&e.comment.length>500?(r.errorAlert(`Максимальна довжина Коментаря не має перевищувати 500 символів. Зараз він ${e.comment.length} символів.`),!1):!0:(r.errorAlert("Телефон має складатися з 12 цифр."),!1)}},v={animalId:"",data:{},getMarkup(){return`<div class="animal-details-container js-animal-details-container">
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
    </div>`},listnerHandler(){document.querySelector(".js-go-to-order-btn").addEventListener("click",async t=>{S.animalId=this.animalId,y.openModal(S)})}},u={main:document.querySelector("main"),modalContainer:document.querySelector(".js-modal-backdrop"),modalContent:document.querySelector(".js-modal-content"),openModalBtn:document.querySelector(".open-modal-btn"),closeModalBtn:document.querySelector(".js-close-modal-btn")};let p=null;const y={modalNode:u.modalContainer,modalContent:u.modalContent,closeBtn:u.closeModalBtn,getFocusableNodes(){return this.modalNode.querySelectorAll("a, button, input, textarea")},openModal(e){var s;p=document.activeElement,this.modalContent.innerHTML=e.getMarkup(),e.listnerHandler&&e.listnerHandler(),this.modalNode.classList.remove("is-hidden"),requestAnimationFrame(()=>{this.modalNode.classList.add("is-open")}),document.body.classList.add("modal-open"),(s=this.getFocusableNodes()[0])==null||s.focus(),this.closeBtn.addEventListener("click",this.closeModal.bind(y)),this.modalNode.addEventListener("click",n=>{n.target===this.modalNode&&this.closeModal()}),document.addEventListener("keydown",n=>{this.disableNotModalActions(n)})},closeModal(){this.modalNode.classList.remove("is-open"),setTimeout(()=>{this.modalNode.classList.add("is-hidden")},250),document.body.classList.remove("modal-open"),u.main.getAttribute("aria-hidden"===!1)&&(p==null||p.focus())},disableNotModalActions(e){if(e.key==="Escape"&&this.modalNode.classList.contains("is-open")&&this.closeModal(),e.key==="Tab"&&this.modalNode.classList.contains("is-open")){const t=this.getFocusableNodes(),s=t[0],n=t[t.length-1];e.shiftKey&&document.activeElement===s&&(e.preventDefault(),n.focus()),!e.shiftKey&&document.activeElement===n&&(e.preventDefault(),s.focus())}}},h=document.querySelector(".js-pet-list-categories"),l=document.querySelector(".js-pets-list-cards"),f=document.querySelector(".js-showmore-btn"),$=document.querySelector(".js-loader");let d=[],i=0,c=[];async function C(){var e,t;try{const n=(await m.get("https://paw-hut.b.goit.study/api/categories")).data;T(n)}catch(s){E.error({title:"Помилка",message:((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||"Неможливо завантажити дані"})}}async function P(){var e,t;try{d=(await m.get("https://paw-hut.b.goit.study/api/animals",{params:{page:1,limit:30}})).data.animals,c=d,q(d)}catch(s){E.error({title:"Помилка",message:((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||"Неможливо завантажити дані"})}}function T(e){const t=`<li class="pets-list-categories-item">
      <button class="category-btn active" type="button" data-name="all">Всі</button>
    </li>`,s=e.map(B).join("");h.innerHTML=t+s}function B(e){return`<li>
        <button class="category-btn" type="button" data-category="${e._id}" data-name="${e.name}">
          ${e.name}
        </button>
      </li>`}function k(){return window.innerWidth>=1440?9:8}function q(e){l.innerHTML="",i=0;const t=k(),s=e.slice(0,t);if(!s.length){l.innerHTML="<p>Нажаль наразі не має доступних хатніх тваринок 😞 </p>",g();return}const n=s.map(A).join("");l.insertAdjacentHTML("afterbegin",n),i=s.length,i>=e.length?g():w()}function A(e){return`<li class="petlist-pet-card" data-id="${e._id}">
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
    </li>`}function H(e){const t=k(),s=e.slice(i,i+t);if(s.length===0){g();return}const n=s.map(A).join("");l.insertAdjacentHTML("beforeend",n),i+=s.length,w()}document.addEventListener("DOMContentLoaded",async()=>{await Promise.all([P(),C()]),N()});h.addEventListener("click",async e=>{e.preventDefault();const t=e.target.closest("button.category-btn");if(!t||!h.contains(t))return;I(),l.innerHTML="",await new Promise(n=>setTimeout(n,300));const s=t.dataset.name;c=x(s),q(c),h.querySelectorAll(".category-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),N()});f.addEventListener("click",()=>{H(c)});l.addEventListener("click",e=>{const t=e.target.closest(".js-pet-more-btn");if(!t)return;const n=t.closest(".petlist-pet-card").dataset.id;v.animalId=n,v.data=O(n),y.openModal(v)});function x(e){return e==="all"?d:d.filter(t=>{var s;return(s=t.categories)==null?void 0:s.some(n=>n&&n.name===e)})}function N(){$.classList.add("hidden"),w()}function I(){$.classList.remove("hidden"),g()}function w(){i<c.length?f.classList.remove("hidden"):f.classList.add("hidden")}function g(){f.classList.add("hidden")}function O(e){for(const t of c)if(t._id===e)return t}const L=document.querySelector(".scroll-to-top");window.addEventListener("scroll",function(){window.scrollY>300?L.classList.add("visible"):L.classList.remove("visible")});L.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
