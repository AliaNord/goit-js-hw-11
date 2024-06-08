import{a as n,S as u,i}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="44257136-dfc34124ab45074cb7ae2d95f",d="https://pixabay.com/api";async function f(o){return(await n.get(d,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}function m(o){const s=document.querySelector(".gallery"),r=o.map(e=>`<li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <ul class="descr-list">
              <li class="descr-item">
                <p class="category">Likes</p>
                <p class="value">${e.likes}</p>
              </li>
              <li class="descr-item">
                <p class="category">Views</p>
                <p class="value">${e.views}</p>
              </li>
              <li class="descr-item">
                <p class="category">Comments</p>
                <p class="value">${e.comments}</p>
              </li>
              <li class="descr-item">
                <p class="category">Downloads</p>
                <p class="value">${e.downloads}</p>
              </li>
            </ul>
          </a>
          </li>
        `).join("");s.innerHTML=r,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const y=document.querySelector("#form-search"),g=document.querySelector("#input-search"),h=document.querySelector(".gallery"),c=document.querySelector(".loader");y.addEventListener("submit",b);async function b(o){o.preventDefault();const s=g.value.trim();if(s==""){i.error({position:"topRight",title:"Error",message:"Please fill out the search bar"});return}c.style.display="block",h.innerHTML="";try{const r=await f(s);r.length===0?i.info({position:"topRight",title:"No Results",message:"Sorry... No results were found for your request"}):m(r)}catch{i.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."})}finally{c.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
