window.addEventListener("DOMContentLoaded", () => {
  const menu_btn = document.querySelector(".menu_btn"),
    backdrop = document.querySelector(".backdrop-gradient"),
    mobile_menu = document.querySelector(".mobile-menu"),
    close_menu = document.querySelector(".close_menu");

  menu_btn.addEventListener("click", () => {
    backdrop.classList.add("active");
    mobile_menu.classList.add("active");
  });

  close_menu.addEventListener("click", () => {
    backdrop.classList.remove('active');
    mobile_menu.classList.remove('active');
  });

  backdrop.addEventListener('click', ()=>{
    backdrop.classList.remove('active');
    mobile_menu.classList.remove('active');
  })
});
