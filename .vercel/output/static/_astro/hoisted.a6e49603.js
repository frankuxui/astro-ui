import"./hoisted.b87b2a6c.js";const l=document?.getElementById("alertTemplate"),i=(r,o,t)=>{const e=document.createElement("div");e.classList.add("astroui-alert-root"),e.innerHTML=[`<div class="astroui-alert astroui-alert-${o} astroui-alert-${t}" role="alert">`,`  <div>${r}</div>`,'  <button type="button" class="astroui-alert-close" data-dismiss="alert" aria-label="Close"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line> <line x1="6" y1="6" x2="18" y2="18"></line> </svg></button>',"</div>"].join(""),l?.append(e),(document?.querySelectorAll('[data-dismiss="alert"]')).forEach(c=>{c.addEventListener("click",()=>{e.remove()})})},n=document?.querySelector('[data-toggle="alert"]');n&&n.addEventListener("click",()=>{i("Nice, you triggered this alert message!","success","md")});const d=document?.querySelector(".toc-content");d?.querySelectorAll("a").forEach(r=>{r.addEventListener("click",o=>{o.preventDefault();const t=document.querySelector(`#${r.hash.slice(1)}`);t&&t.scrollIntoView({behavior:"smooth"}),document.querySelectorAll(".toc-content a").forEach(s=>{s.classList.remove("toc-active")}),r.classList.add("toc-active")})});const a=Array.from(document.querySelectorAll("h2[id], h3[id], h4[id], h5[id], h6[id]")).map(r=>{const o=r.id,t=r.textContent,e=r.tagName.toLowerCase();return r.classList.add("toc-heading"),{slug:o,text:t,tag:e}});window.addEventListener("DOMContentLoaded",()=>{a.forEach(o=>{const t=document.querySelector(`#${o.slug}`);if(t){const e=document.createElement("a");e.href=`#${o.slug}`,e.addEventListener("click",s=>{s.preventDefault();const c=document.querySelector(`#${o.slug}`);c&&c.scrollIntoView({behavior:"smooth"})}),e.classList.add("toc-heading-anchor"),e.textContent="#",e.ariaLabel="anchor",t.appendChild(e)}});const r=new IntersectionObserver(o=>{o.forEach(t=>{const e=t.target.getAttribute("id"),s=document.querySelector(`.toc-content a[href="#${e}"]`);t.isIntersecting?s?.classList.add("toc-active"):s?.classList.remove("toc-active")})},{rootMargin:"0px 0px -80% 0px"});a.forEach(o=>{const t=document.querySelector(`#${o.slug}`);t&&r.observe(t)})});
