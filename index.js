let count = 0;
let cartArr = [];

// EVENT LISTENERS
document.querySelector(".counter__btn-add").addEventListener("click", () => {
   count += 1;

   updateLabel();
});

document.querySelector(".counter__btn-minus").addEventListener("click", () => {
   if (count > 0) {
      count -= 1;

      updateLabel();
   }
});

document.querySelector(".nav__btn").addEventListener("click", () => {
   const cart = document.querySelector(".cart");
   const cartDetails = document.querySelector(".cart__active");
   const cartEmpty = document.querySelector(".cart__empty");

   if (cart.style.visibility === "visible") {
      cart.style.visibility = "hidden";
      cart.style.opacity = "0";
      cartDetails.style.visibility = "hidden";
   } else {
      cartEmpty.style.visibility = "hidden";
      cart.style.visibility = "visible";
      cart.style.opacity = "1";

      if (cartArr.length > 0) {
         cartDetails.style.visibility = "visible";
      }
   }
});

document
   .querySelector(".main__text--cart-button")
   .addEventListener("click", () => {
      if (count > 0) {
         const notif = document.querySelector(".nav__btn-notif");
         notif.style.visibility = "visible";
         notif.textContent = count;
         notif.style.opacity = "1";
         cartArr.push(count);
      }

      count = 0;
      updateLabel();
   });

// FUNCTIONS
function updateLabel() {
   const label = document.querySelector(".counter__label");
   label.textContent = count;
}

function removeActive() {
   const active = document.querySelector(".active");
   const activeImg = document.querySelector(".active-img");
   active.classList.remove("active");
   activeImg.classList.remove("active-img");
}

function addActive(num) {
   const img = document.querySelector(`.main__pictures--thumb-${num}`);
   const imgThumb = document.querySelector(`.main__img--${num}`);
   img.classList.add("active");
   imgThumb.classList.add("active-img");
}

// RENDER FUNCTIONS
function imageEventListeners() {
   [1, 2, 3, 4].forEach((each) => {
      const img = document.querySelector(`.main__pictures--thumb-${each}`);

      img.addEventListener("click", () => {
         const value = img.getAttribute("value");

         const largeImg = document.querySelector(".main__img--large");
         largeImg.src = `images/image-product-${value}.jpg`;

         removeActive();
         addActive(value);
      });
   });
}

function initialRender() {
   imageEventListeners();
}

initialRender();
