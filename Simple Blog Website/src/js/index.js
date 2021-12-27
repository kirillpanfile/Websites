"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("MADE BY PANFILE KIRILL");
  console.log("Abstract Framework");
  console.log("v 1.0.0");
  document.getElementById("burger").addEventListener("click", toggleMenu);
  document.getElementById("overlay").addEventListener("click", toggleMenu);
  function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
    document.getElementById("burger").classList.toggle("ab-burger-active");
  }
  document.getElementById("navbar").addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      e.preventDefault();
      const menuItemHasChildren = e.target.parentElement;
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        if (
          document
            .getElementById("navbar")
            .querySelector(".menu-item-child.active")
        ) {
          collapseSubMenu();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".ab-sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  function collapseSubMenu() {
    document
      .getElementById("navbar")
      .querySelector(".ab-menu-item-child.active .ab-sub-menu")
      .removeAttribute("style");
    document
      .getElementById("navbar")
      .querySelector(".ab-menu-item-child.active")
      .classList.remove("active");
  }
  window.addEventListener("resize", () => {
    if (this.innerWidth > 992) {
      if (document.getElementById("navbar").classList.contains("active")) {
        toggleMenu();
      }

      if (
        document
          .getElementById("navbar")
          .querySelector(".ab-menu-item-child.active")
      ) {
        collapseSubMenu();
      }
    }
  });
  document.querySelectorAll(".ab-carousel").forEach((carousel) => {
    insertNumbers(carousel);
    carousel.querySelector(".prev").addEventListener("click", (e) => {
      minusItem(carousel);
    });
    carousel.querySelector(".next").addEventListener("click", (e) => {
      plusItem(carousel);
    });
    showItems(carousel, 0);
  });
});
