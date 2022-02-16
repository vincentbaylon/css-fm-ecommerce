let count = 0;
let cartArr = [];
let product = {
   name: "Fall Limited Edition Sneakers",
   price: 125,
};

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
   const cartDesc = document.querySelector(".cart__desc");
   const cartPrice = document.querySelector(".cart__price");
   const cartTotal = document.querySelector(".cart__total");
   const backdrop = document.querySelector(".close-backdrop");

   if (cart.style.visibility === "visible") {
      cart.style.visibility = "hidden";
      cart.style.opacity = "0";
      cartDetails.style.visibility = "hidden";
      backdrop.style.visibility = "hidden";
   } else {
      cart.style.visibility = "visible";
      cart.style.opacity = "1";
      backdrop.style.visibility = "visible";

      if (cartArr.length > 0) {
         cartEmpty.style.visibility = "hidden";
         cartDetails.style.visibility = "visible";

         cartArr.forEach((each) => {
            cartDesc.textContent = each.name;
            cartPrice.textContent = `$${each.price}.00 x ${each.quantity}`;
            cartTotal.textContent = `$${each.price * each.quantity}.00`;
         });
      }
   }
});

document
   .querySelector(".main__text--cart-button")
   .addEventListener("click", () => {
      if (cartArr.length > 0) {
         const notif = document.querySelector(".nav__btn-notif");
         let newCount = parseInt(notif.textContent) + count;
         notif.style.visibility = "visible";
         notif.textContent = newCount;
         notif.style.opacity = "1";

         let order = {
            name: product.name,
            price: product.price,
            quantity: newCount,
         };
         cartArr.pop();
         cartArr.push(order);
      } else {
         if (count > 0) {
            const notif = document.querySelector(".nav__btn-notif");
            notif.style.visibility = "visible";
            notif.textContent = count;
            notif.style.opacity = "1";

            let order = {
               name: product.name,
               price: product.price,
               quantity: count,
            };
            cartArr.push(order);
         }
      }

      count = 0;
      updateLabel();
   });

document.querySelector(".cart__trash").addEventListener("click", () => {
   const cart = document.querySelector(".cart");
   const cartDetails = document.querySelector(".cart__active");
   const cartEmpty = document.querySelector(".cart__empty");
   const notif = document.querySelector(".nav__btn-notif");

   notif.style.visibility = "hidden";
   notif.textContent = 0;
   notif.style.opacity = "0";
   cart.style.visibility = "visible";
   cartDetails.style.visibility = "hidden";
   cartEmpty.style.visibility = "visible";

   cartArr.pop();
});

document.querySelector(".close-backdrop").addEventListener("click", () => {
   const cart = document.querySelector(".cart");
   const cartDetails = document.querySelector(".cart__active");
   const backdrop = document.querySelector(".close-backdrop");

   cart.style.visibility = "hidden";
   cart.style.opacity = "0";
   cartDetails.style.visibility = "hidden";
   backdrop.style.visibility = "hidden";
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
