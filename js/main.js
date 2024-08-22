const images = document.querySelectorAll(".img");
const descLeft = document.querySelector(".desc-img-left");
const descMiddle = document.querySelector(".desc-img-middle");
const descRight = document.querySelector(".desc-text-right");

const title = document.querySelector(".intro-title");
const desc = document.querySelectorAll(".intro-desc");
const slide = document.querySelector(".slide");

let observer = new IntersectionObserver((e) => {
  e.forEach((item) => {
    if (item.isIntersecting) {
      item.target.style.opacity = 1;
      item.target.style.transform = "translateX(0)";
    } else {
      item.target.style.opacity = 0;
      item.target.style.transform = "translateX(-50px)";
    }
  });
});

images.forEach((img) => {
  observer.observe(img);
});

desc.forEach((img) => {
  observer.observe(img);
});

observer.observe(descLeft);
observer.observe(descMiddle);
observer.observe(descRight);
observer.observe(title);
