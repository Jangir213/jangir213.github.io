"use strict";function googleMap(){var e=document.querySelector(".contact__map"),t=new google.maps.LatLng(50.446987,30.45601),n={center:t,zoom:16,scrollwheel:!1},o=new google.maps.Map(e,n),i=new google.maps.Marker({position:t,animation:google.maps.Animation.BOUNCE});i.setMap(o)}!function(){function e(){function e(){var e=document.querySelector(".posts__left-col .posts__item img"),n=parseFloat(getComputedStyle(e).height),o=document.querySelector(".posts__left-col .posts__item"),i=parseFloat(getComputedStyle(o).paddingBottom),r=2*n+4*i;document.documentElement.clientWidth<=768?(t.classList.remove("posts__item--wide"),t.style.height=""):(t.classList.add("posts__item--wide"),t.style.height=r+"px")}var t=document.querySelector(".posts__right-col > .posts__item");window.addEventListener("resize",e),e()}function t(){function e(){for(var e=0;e<n.length;e++){var o=document.querySelector(".container--"+n[e]+" .container__price");o.innerHTML=~o.innerHTML.indexOf("$")?t[n[e]].eur:t[n[e]].usd}}var t={standard:{usd:"$19",eur:"€17"},professional:{usd:"$49",eur:"€43"},extend:{usd:"$99",eur:"€87"}},n=Object.keys(t),o=document.querySelector("#dol"),i=document.querySelector("#eur");o.addEventListener("change",e),i.addEventListener("change",e)}function n(){function e(e){e.classList.add("lbl--active")}function t(e,t){t.value||e.classList.remove("lbl--active")}for(var n=document.querySelectorAll(".lbl"),o=function(o){var i=n[o].nextElementSibling;i.addEventListener("focus",function(){e(n[o])}),i.addEventListener("blur",function(){t(n[o],i)})},i=0;i<n.length;i++)o(i)}function o(){function e(e){for(var t=0;t<o.length;t++)o[t].classList.remove("filter__btn--active");e.classList.add("filter__btn--active")}function t(e){var t=e.dataset.group;if("all"==t)return void n();for(var o=function(e){var n=i[e].dataset.groups;~n.indexOf(t)?(i[e].classList.remove("work--hidden"),setTimeout(function(){i[e].style.display=""},150)):(i[e].classList.add("work--hidden"),setTimeout(function(){i[e].style.display="none"},150))},r=0;r<i.length;r++)o(r)}function n(){for(var e=function(e){i[e].classList.remove("work--hidden"),setTimeout(function(){i[e].style.display=""},150)},t=0;t<i.length;t++)e(t)}for(var o=document.querySelectorAll(".filter__btn"),i=document.querySelectorAll(".work"),r=function(n){o[n].addEventListener("click",function(){e(o[n]),t(o[n])})},l=0;l<o.length;l++)r(l)}function i(){function e(e,t,n){e.appendChild(t);var o=Math.max(e.clientHeight,e.clientWidth),i=n.pageX-e.offsetLeft-o/2,r=n.pageY-e.offsetTop-o/2,l=e.querySelector(".link__inner");l.style.height=o+"px",l.style.width=o+"px",l.style.left=i+"px",l.style.top=r+"px",l.classList.add("link__inner--animate"),setTimeout(function(){e.contains(t)&&e.removeChild(t)},700)}var t=document.querySelectorAll(".link"),n=document.createElement("span");n.className="link__inner";for(var o=function(o){t[o].addEventListener("click",function(i){e(t[o],n,i)})},i=0;i<t.length;i++)o(i)}function r(){var e=document.querySelector(".nav__mobile-btn"),t=document.querySelector(".nav__mobile-close"),n=document.querySelector(".nav__mobile-items");e.addEventListener("click",function(){n.style.marginLeft="0px"}),t.addEventListener("click",function(){n.style.marginLeft=""})}function l(){var e=document.querySelector(".preloader");e.style.display="none"}window.addEventListener("load",function(){$(".scrollspy").scrollSpy({scrollOffset:64}),e(),t(),n(),o(),i(),r(),l()}),function(){function e(){o=window.innerHeight,i=n.clientHeight,t.style.height=o+"px"}var t=document.querySelector("#promo"),n=document.querySelector(".nav"),o=void 0,i=void 0;window.addEventListener("resize",e),e()}()}();