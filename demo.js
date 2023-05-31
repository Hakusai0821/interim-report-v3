window.onload = function (){
//! 搜尋框淡入淡出
const element = document.getElementById("options");
const search = document.getElementById("search-outter");
element.addEventListener("click", clickToggle);
search.addEventListener("transitionend", animationEndHandler);
let time ;
function clickToggle(e) {
  console.log(search);
  if (search.style.display === 'none') {
    search.style.display = 'block';

    time = setTimeout(()=>{
      search.style.opacity = 1
      console.log(time);
   },0)
  }else{
  console.log("隱藏")
  search.style.opacity = '0';
  }
}

function animationEndHandler() {
  if(search.style.opacity == 1){
    clearTimeout(time);
  }

  if(search.style.opacity == 0){
    search.style.display = "none";
  }
}
// end of 搜尋框淡入淡出


//! head-content hover動畫
let collectionLi = document.querySelectorAll(".nav-li");
let lightBox = document.createElement("span");
let nav_ul = document.querySelector(".nav-ul");
let liTag;
let timer;
lightBox.style =
  "position:absolute; background-color:#632c28; transition:.2s; z-index:999; color:white; font-weight:700; border-radius:5px 20px 0 0; padding:0px 15px 0px 5px;cursor:pointer; ";

nav_ul.appendChild(lightBox);
initActive();

collectionLi.forEach((li) => {
  li.addEventListener("mouseenter", mouseEnterHandler, false);
});

window.addEventListener(
  "resize",
  function () {
    lightBox.style.transition = "none";
    setLightStyle(liTag);
  },
  false
);
lightBox.addEventListener(
  "transitionend",
  function () {
    lightBox.innerText = liTag.innerText;
  },
  false
);

function initActive() {
  liTag = collectionLi[0];
  setLightStyle(liTag);
}

function mouseEnterHandler(e) {
  lightBox.style.transition = ".2s";
  liTag = e.target;
  setLightStyle(liTag);
}

function setLightStyle(target) {
  let { top, left } = target.getBoundingClientRect();

  lightBox.innerText = liTag.innerText;
  lightBox.style.top = 25 + "px";
  lightBox.style.left = left + "px";
}

//! 固定導覽列
const navbar = document.querySelector('.nav-fixed');
window.addEventListener('scroll', () => {
  const top = window.scrollY;
  if (top >= navbar.offsetTop) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

}