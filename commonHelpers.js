import{i,a as u,S as p}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d=document.querySelector("#form-search"),f=document.querySelector("#input-search"),c=document.querySelector(".gallery"),n=document.querySelector(".loader"),m="44257136-dfc34124ab45074cb7ae2d95f",y="https://pixabay.com/api";d.addEventListener("submit",g);async function g(a){a.preventDefault();const r=f.value.trim();if(r==""){i.error({position:"topRight",title:"Error",message:"Please fill out the search bar"});return}n.style.display="block",c.innerHTML="";try{const o=(await u.get(y,{params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;if(o.length===0)i.info({position:"topRight",title:"No Results",message:"Sorry... No results were found for your request"});else{const e=o.map(s=>`<li class="gallery-item">
          <a href="${s.largeImageURL}">
            <img src="${s.webformatURL}" alt="${s.tags}" />
            <ul class="descr-list">
              <li class="descr-item">
                <p class="category">Likes</p>
                <p class="value">${s.likes}</p>
              </li>
              <li class="descr-item">
                <p class="category">Views</p>
                <p class="value">${s.views}</p>
              </li>
              <li class="descr-item">
                <p class="category">Comments</p>
                <p class="value">${s.comments}</p>
              </li>
              <li class="descr-item">
                <p class="category">Downloads</p>
                <p class="value">${s.downloads}</p>
              </li>
            </ul>
          </a>
          </li>
        `).join("");c.innerHTML=e,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}}catch{i.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."})}finally{n.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
