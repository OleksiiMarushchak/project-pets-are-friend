import{a as h,i as y}from"./assets/vendor-CLTxG5yw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-menu]"),t=document.querySelector("[data-header-menu-open]"),s=document.querySelector("[data-header-menu-close]"),n=document.querySelectorAll("[data-menu-close]");t.addEventListener("click",()=>{e.classList.add("active"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{o()}),n.forEach(i=>{i.addEventListener("click",()=>{o()})}),e.addEventListener("click",i=>{i.target===e&&o()});function o(){e.classList.remove("active"),document.body.style.overflow=""}});const d=document.querySelector(".js-pet-list-categories"),a=document.querySelector(".js-pets-list-cards"),u=document.querySelector(".js-showmore-btn"),L=document.querySelector(".js-loader");let c=[],r=0,l=[];async function P(){var e,t;try{const n=(await h.get("https://paw-hut.b.goit.study/api/categories")).data;j(n)}catch(s){y.error({title:"Помилка",message:((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||"Неможливо завантажити дані"})}}async function S(){var e,t;try{c=(await h.get("https://paw-hut.b.goit.study/api/animals",{params:{page:1,limit:30}})).data.animals,l=c,v(c)}catch(s){y.error({title:"Помилка",message:((t=(e=s.response)==null?void 0:e.data)==null?void 0:t.message)||"Неможливо завантажити дані"})}}function j(e){const t=`<li class="pets-list-categories-item">
      <button class="category-btn active" type="button" data-name="all">Всі</button>
    </li>`,s=e.map(T).join("");d.innerHTML=t+s}function T(e){return`<li>
        <button class="category-btn" type="button" data-category="${e._id}" data-name="${e.name}">
          ${e.name}
        </button>
      </li>`}function b(){return window.innerWidth>=1440?9:8}function v(e){a.innerHTML="",r=0;const t=b(),s=e.slice(0,t);if(!s.length){a.innerHTML="<p>Нажаль наразі не має доступних хатніх тваринок 😞 </p>",m();return}const n=s.map(w).join("");a.insertAdjacentHTML("afterbegin",n),r=s.length,r>=e.length?m():f()}function w(e){return`<li class="petlist-pet-card" data-id="${e._id}">
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
    </li>`}function $(e){const t=b(),s=e.slice(r,r+t);if(s.length===0){m();return}const n=s.map(w).join("");a.insertAdjacentHTML("beforeend",n),r+=s.length,f()}document.addEventListener("DOMContentLoaded",async()=>{await Promise.all([S(),P()]),E()});d.addEventListener("click",async e=>{e.preventDefault();const t=e.target.closest("button.category-btn");if(!t||!d.contains(t))return;q(),a.innerHTML="",await new Promise(n=>setTimeout(n,300));const s=t.dataset.name;l=M(s),v(l),d.querySelectorAll(".category-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),E()});u.addEventListener("click",()=>{$(l)});a.addEventListener("click",e=>{const t=e.target.closest(".js-pet-more-btn");if(!t)return;const n=t.closest(".petlist-pet-card").dataset.id;console.log("Дізнатися більше",n)});function M(e){return e==="all"?c:c.filter(t=>{var s;return(s=t.categories)==null?void 0:s.some(n=>n&&n.name===e)})}function E(){L.classList.add("hidden"),f()}function q(){L.classList.remove("hidden"),m()}function f(){r<l.length?u.classList.remove("hidden"):u.classList.add("hidden")}function m(){u.classList.add("hidden")}const g=document.querySelector(".scroll-to-top");window.addEventListener("scroll",function(){window.scrollY>300?g.classList.add("visible"):g.classList.remove("visible")});g.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
