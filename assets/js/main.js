"use strict";
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};
// ------------------------------------------
// declaramos una variable para la barra de navegación y le agregamos las clases declaradas en el html
let navbar = document.querySelector(".header .navBar");
// declaramos una variable para el icono y su id
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};
// -------------------------------------------
const header = document.querySelector(".header");
// definimos una variable y le asignamos un evento y a este una clase
// const backTopBtn = document.querySelector("[data-back-top-btn]");
// se crea un nuevo método
window.addEventListener("scroll", function () {
  // se activa el evento scroll en la venta al momento de realizar el scroll
  if (window.scrollY > 100) {
    // llamamos la variable declarada y le asignamos una nueva clase
    header.classList.add("active");
    // backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    // backTopBtn.classList.remove("active");
  }
});
