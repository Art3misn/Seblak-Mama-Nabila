/* =========================================
   SEBLAK PRASMANAN - CUSTOMER FULL SCRIPT
========================================= */

import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* =========================================
   TOPPING LENGKAP
========================================= */

const toppings = [

  {
    name:"Sawi Putih",
    price:1000,
    image:"Sawi Putih.jpeg"
  },

  {
    name:"Somay Kering",
    price:1000,
    image:"Somay Kering.jpeg"
  },

  {
    name:"Ceker",
    price:2000,
    image:"Ceker.jpg"
  },

  {
    name:"Bakso Aci",
    price:1000,
    image:"Bakso Aci.jpeg"
  },

  {
    name:"Dimsum Aci",
    price:1000,
    image:"Dimsum.jpeg"
  },

  {
    name:"Tahu Aci",
    price:1000,
    image:"Tahu Aci.jpeg"
  },

  {
    name:"Somay Basah",
    price:1000,
    image:"Somay Basah.jpeg"
  },

  {
    name:"Tulang",
    price:1000,
    image:"Tulang.jpeg"
  },

  {
    name:"Kerupuk Putih",
    price:1000,
    image:"Kerupuk Putih.jpeg"
  },

  {
    name:"Kerupuk Merah",
    price:1000,
    image:"Kerupuk Merah.jpeg"
  },

  {
    name:"Makaroni",
    price:1000,
    image:"Makaroni.jpeg"
  },

  {
    name:"Somay Kering Mini",
    price:1000,
    image:"Somay Kering Mini.jpeg"
  },

  {
    name:"Kerupuk Corak",
    price:1000,
    image:"Kerupuk Corak.jpeg"
  },

  {
    name:"Jamur Enoki",
    price:3000,
    image:"Jamur Enoki.jpeg"
  },

  {
    name:"Mie Kuning",
    price:500,
    image:"Mie Kuning.jpeg"
  },

  {
    name:"Lidah",
    price:1000,
    image:"Lidah.jpeg"
  },

  {
    name:"Bihun",
    price:1500,
    image:"Bihun.jpeg"
  },

  {
    name:"Tahu Kering/3pcs",
    price:2000,
    image:"Tahu Kering.jpeg"
  },

  {
    name:"Usus",
    price:1000,
    image:"Usus.jpeg"
  },

  {
    name:"Kembang Tahu",
    price:1000,
    image:"Kembang Tahu.jpeg"
  },

  {
    name:"Supa Lember",
    price:1000,
    image:"Supa Lember.jpeg"
  },

  {
    name:"Kwetiau",
    price:1000,
    image:"Kwetiau.jpeg"
  },

  {
    name:"Jamur Salju",
    price:3000,
    image:"Jamur Salju.jpeg"
  },

  {
    name:"Telur Ayam",
    price:3000,
    image:"Telur Ayam.jpeg"
  },

  {
    name:"Telur Puyuh",
    price:1000,
    image:"Telur Puyuh.jpeg"
  },

  {
    name:"Tahu Putih",
    price:1000,
    image:"Tahu Putih.jpeg"
  },

  {
    name:"Bakso Ikan",
    price:1000,
    image:"Bakso Ikan.jpeg"
  },

  {
    name:"Cilok",
    price:1000,
    image:"Cilok.jpeg"
  },

  {
    name:"Bakso Sedang",
    price:2000,
    image:"Bakso Sedang.jpeg"
  },

  {
    name:"Tahu Isi",
    price:2000,
    image:"Tahu Isi.jpeg"
  },

  {
    name:"Bakso Besar",
    price:3500,
    image:"Bakso Besar.jpeg"
  },

  {
    name:"Sawi Hijau",
    price:1000,
    image:"Sawi Hijau.jpeg"
  },

  {
    name:"Chikuwa",
    price:1000,
    image:"Chikuwa.jpeg"
  },

  {
    name:"Otak-otak",
    price:1000,
    image:"Otak-otak.jpeg"
  },

  {
    name:"Sosis Ayam",
    price:1000,
    image:"Sosis Ayam.jpeg"
  },

  {
    name:"Sosis Merah Mini Dilamo",
    price:3000,
    image:"Sosis Merah Mini Dilamo.jpeg"
  },

  {
    name:"Sosis Sapi Mini",
    price:2000,
    image:"Sosis Sapi Mini.png"
  },

  {
    name:"Sosis Besar",
    price:5000,
    image:"Sosis Besar.jpeg"
  },

  {
    name:"Crab Stik",
    price:2000,
    image:"Crab Stick.jpeg"
  },

  {
    name:"Tofu",
    price:2000,
    image:"Tofu.jpeg"
  },

  {
    name:"Fish Roll",
    price:2000,
    image:"Fish Roll.jpeg"
  },

  {
    name:"Odeng",
    price:2000,
    image:"Odeng.jpeg"
  },

  {
    name:"Dumpling Ayam",
    price:2000,
    image:"Dumpling Ayam.jpeg"
  },

  {
    name:"Dumpling Keju",
    price:2000,
    image:"Dumpling Keju.jpeg"
  },

  {
    name:"Dadali",
    price:500,
    image:"Dadali.jpeg"
  },

  {
    name:"Sayur Kol",
    price:1000,
    image:"Sayur Kol.jpeg"
  },

  {
    name:"Soun",
    price:1000,
    image:"Soun.jpeg"
  },

  {
    name:"Daun Jeruk Nipis",
    price:0,
    image:"Jeruk Nipis.png"
  }

];

/* =========================================
   MINUMAN LENGKAP
========================================= */

const drinks = [

  { name:"Tea Jus Apel", price:1000 },
  { name:"Tea Jus Madu", price:1000 },
  { name:"Tea Jus Lemon", price:1000 },
  { name:"Tea Jus Melati", price:1000 },
  { name:"Tea Jus Gula Batu", price:1000 },

  { name:"Jasjus Jambu", price:1000 },
  { name:"Jeruk Nipis", price:1000 },
  { name:"Jasjus Mangga", price:1000 },
  { name:"Jasjus Kelapa Muda", price:1000 },
  { name:"Jasjus Anggur", price:1000 },

  { name:"Jasjus Jeruk Peras", price:1000 },
  { name:"Jasjus Lemon", price:1000 },
  { name:"Nutrisari Florida Orange", price:4000 },
  { name:"Nutrisari Jeruk Peras", price:4000 },
  { name:"Pop Ice Cream Cheese", price:2000 },

  { name:"Pop Ice Chococheese", price:2000 },
  { name:"Pop Ice Mangga", price:2000 },
  { name:"Pop Ice Avocado", price:2000 },
  { name:"Pop Ice Strawberry", price:2000 },
  { name:"Pop Ice Grape", price:2000 },

  { name:"Pop Ice Vanilla Blue", price:2000 },
  { name:"Pop Ice Permen Karet", price:2000 },
  { name:"Pop Ice Durian", price:2000 },
  { name:"Pop Ice Yogurt Strawberry", price:2000 },
  { name:"Pop Ice Vanilla Latte", price:2000 },

  { name:"Pop Ice Chocolate", price:2000 },
  { name:"Pop Ice Taro", price:2000 },
  { name:"Pop Ice Cookies & Cream", price:2000 },
  { name:"Pop Ice Popcorn Caramel", price:2000 },
  { name:"Good day Mocacinno", price:3000 },

  { name:"Drink Bang-bang", price:5000 },
  { name:"Cappuccino Good day", price:5000 },
  { name:"Chocolatos Coklat", price:5000 },
  { name:"Chocolatos Matcha", price:5000 }

];
/* =========================================
   ELEMENT
========================================= */

const menuGrid =
document.getElementById("menuGrid");

const drinkGrid =
document.getElementById("drinkGrid");

const cartItems =
document.getElementById("cartItems");

const totalPrice =
document.getElementById("totalPrice");

const totalItem =
document.getElementById("totalItem");

const cartCount =
document.getElementById("cartCount");

const checkoutBtn =
document.getElementById("checkoutBtn");

const floatingToggle =
document.getElementById("floatingToggle");

const cartBox =
document.getElementById("cartBox");

const cartOverlay =
document.getElementById("cartOverlay");

const closeCart =
document.getElementById("closeCart");

/* =========================================
   GLOBAL
========================================= */

let cart = [];

let currentDistance = 0;

let userTooFar = false;

let storeClosed = false;

/* =========================================
   LOKASI TOKO
========================================= */

const STORE_LAT = -7.3275;
const STORE_LNG = 108.2207;

const MAX_DISTANCE = 15;

/* =========================================
   RENDER MENU
========================================= */

function renderMenu(){

  menuGrid.innerHTML = "";

  toppings.forEach((item, index) => {

    const qty =
    cart.filter(
      x => x.name === item.name
    ).length;

    const card =
    document.createElement("div");

    card.className = "card";

    card.innerHTML = `

      <img
        src="${item.image}"
        alt="${item.name}"
      >

      <div class="content">

        <h3>${item.name}</h3>

        <div class="price">
          Rp ${item.price.toLocaleString("id-ID")}
        </div>

        <div class="counter">

          ${
            item.stock === false

            ?

            `
              <button
                disabled
                style="
                  width:100%;
                  background:gray;
                  opacity:.5;
                "
              >
                Habis
              </button>
            `

            :

            `

              <button onclick="minusItem(${index})">
                -
              </button>

              <span class="count">
                ${qty}
              </span>

              <button onclick="plusItem(${index})">
                +
              </button>

            `
          }

        </div>

      </div>

    `;

    menuGrid.appendChild(card);

  });

}

/* =========================================
   RENDER DRINK
========================================= */

function renderDrinks(){

  drinkGrid.innerHTML = "";

  drinks.forEach((item, index) => {

    const qty =
    cart.filter(
      x => x.name === item.name
    ).length;

    const card =
    document.createElement("div");

    card.className = "card";

    card.innerHTML = `

      <div class="content">

        <h3>${item.name}</h3>

        <div class="price">
          Rp ${item.price.toLocaleString("id-ID")}
        </div>

        <div class="counter">

          <button onclick="minusDrink(${index})">
            -
          </button>

          <span class="count">
            ${qty}
          </span>

          <button onclick="plusDrink(${index})">
            +
          </button>

        </div>

      </div>

    `;

    drinkGrid.appendChild(card);

  });

}

/* =========================================
   BUTTON CART
========================================= */

window.plusItem = (index) => {

  if(toppings[index].stock === false)
  return;

  cart.push(toppings[index]);

  updateCart();

};

window.minusItem = (index) => {

  const findIndex =
  cart.findIndex(
    item =>
    item.name === toppings[index].name
  );

  if(findIndex !== -1){

    cart.splice(findIndex, 1);

  }

  updateCart();

};

window.plusDrink = (index) => {

  cart.push(drinks[index]);

  updateCart();

};

window.minusDrink = (index) => {

  const findIndex =
  cart.findIndex(
    item =>
    item.name === drinks[index].name
  );

  if(findIndex !== -1){

    cart.splice(findIndex, 1);

  }

  updateCart();

};

/* =========================================
   UPDATE CART
========================================= */

function updateCart(){

  cartItems.innerHTML = "";

  const grouped = {};

  let total = 0;

  cart.forEach(item => {

    if(!grouped[item.name]){

      grouped[item.name] = {
        qty:0,
        price:item.price
      };

    }

    grouped[item.name].qty++;

  });

  Object.keys(grouped).forEach(name => {

    const item = grouped[name];

    const subtotal =
    item.qty * item.price;

    total += subtotal;

    const div =
    document.createElement("div");

    div.className =
    "cart-item";

    div.innerHTML = `

      <div>
        <strong>${name}</strong>
        <p>${item.qty}x</p>
      </div>

      <strong>
        Rp ${subtotal.toLocaleString("id-ID")}
      </strong>

    `;

    cartItems.appendChild(div);

  });

  /* ONGKIR */

  const shipping =
  getShippingCost();

  if(!userTooFar){

    total += shipping;

  }

  /* SHIPPING */

  let shippingBox =
  document.getElementById("shippingPrice");

  if(!shippingBox){

    shippingBox =
    document.createElement("p");

    shippingBox.id =
    "shippingPrice";

    document
    .querySelector(".cart-total")
    ?.appendChild(shippingBox);

  }

  if(userTooFar){

    shippingBox.innerHTML =
    "❌ Diluar Jangkauan";

  }

  else{

    shippingBox.innerHTML =
    `🚚 Ongkir: Rp ${shipping.toLocaleString("id-ID")}`;

  }

  totalPrice.innerText =
  `Rp ${total.toLocaleString("id-ID")}`;

  totalItem.innerText =
  `${cart.length} item`;

  cartCount.innerText =
  cart.length;

  renderMenu();
  renderDrinks();

  setCheckoutState();

}

/* =========================================
   ONGKIR
========================================= */

function getShippingCost(){

  if(currentDistance <= 3){

    return 10000;

  }

  else if(currentDistance <= 6){

    return 11000;

  }

  else if(currentDistance <= 10){

    return 12000;

  }

  else if(currentDistance <= 15){

    return 13000;

  }

  return 0;

}

/* =========================================
   CHECKOUT STATE
========================================= */

function setCheckoutState(){

  if(storeClosed){

    checkoutBtn.disabled = true;

    checkoutBtn.innerHTML =
    "🔒 Warung Tutup";

    return;

  }

  if(userTooFar){

    checkoutBtn.disabled = true;

    checkoutBtn.innerHTML =
    "❌ Diluar Jangkauan";

    return;

  }

  checkoutBtn.disabled = false;

  checkoutBtn.innerHTML =
  "🛒 Checkout Sekarang";

}

/* =========================================
   HITUNG JARAK
========================================= */

function calculateDistance(
  lat1,
  lon1,
  lat2,
  lon2
){

  const R = 6371;

  const dLat =
  (lat2 - lat1) * Math.PI / 180;

  const dLon =
  (lon2 - lon1) * Math.PI / 180;

  const a =

    Math.sin(dLat / 2) *
    Math.sin(dLat / 2)

    +

    Math.cos(lat1 * Math.PI / 180) *

    Math.cos(lat2 * Math.PI / 180) *

    Math.sin(dLon / 2) *

    Math.sin(dLon / 2);

  const c =
  2 * Math.atan2(
    Math.sqrt(a),
    Math.sqrt(1 - a)
  );

  return R * c;

}

/* =========================================
   GET USER LOCATION
========================================= */

function getUserLocation(){

  if(!navigator.geolocation){

    alert("GPS tidak didukung");

    return;

  }

  navigator.geolocation.getCurrentPosition(

    (position) => {

      const userLat =
      position.coords.latitude;

      const userLng =
      position.coords.longitude;

      currentDistance =
      calculateDistance(
        STORE_LAT,
        STORE_LNG,
        userLat,
        userLng
      );

      console.log(
        "Jarak:",
        currentDistance
      );

      if(currentDistance > MAX_DISTANCE){

        userTooFar = true;

      }

      else{

        userTooFar = false;

      }

      const warning =
      document.getElementById(
        "distanceWarning"
      );

      if(warning){

        if(userTooFar){

          warning.style.display =
          "block";

          warning.innerHTML = `

            ❌ Diluar Jangkauan
            <br><br>

            Jarak kamu:
            ${currentDistance.toFixed(1)} KM

          `;

        }

        else{

          warning.style.display =
          "none";

        }

      }

      updateCart();

    },

    (error) => {

      console.log(error);

      alert(
        "Izinkan akses lokasi"
      );

    },

    {
      enableHighAccuracy:true
    }

  );

}

/* =========================================
   CHECKOUT
========================================= */

window.checkoutOrder = async () => {

  if(userTooFar){

    alert("Diluar jangkauan");

    return;

  }

  if(storeClosed){

    alert("Warung tutup");

    return;

  }

  const customerName =
  document.getElementById("customerName").value;

  const customerPhone =
  document.getElementById("customerPhone").value;

  const customerAddress =
  document.getElementById("customerAddress").value;

  if(!customerName ||
     !customerPhone ||
     !customerAddress){

    alert("Lengkapi data");

    return;

  }

  if(cart.length === 0){

    alert("Keranjang kosong");

    return;

  }

  const total =
  cart.reduce(
    (sum, item) =>
    sum + item.price,
    0
  );

  try{

    await addDoc(

      collection(db, "orders"),

      {

        customerName,
        customerPhone,
        customerAddress,

        items: cart,

        total,

        status: "Menunggu",

        createdAt: new Date()

      }

    );

    alert("Pesanan berhasil!");

    cart = [];

    updateCart();

  }

  catch(error){

    console.log(error);

    alert("Firebase Error");

  }

};

/* =========================================
   REALTIME STOCK
========================================= */

function syncStocksRealtime(){

  toppings.forEach((item) => {

    const stockRef =
    doc(db, "stocks", item.name);

    onSnapshot(

      stockRef,

      (snap) => {

        if(snap.exists()){

          item.stock =
          snap.data().available;

        }

        else{

          item.stock = true;

        }

        renderMenu();

      }

    );

  });

}

/* =========================================
   FLOATING CART
========================================= */

function openCartBox(){

  cartBox.classList.add("active");

  cartOverlay.classList.add("active");

}

function closeCartBox(){

  cartBox.classList.remove("active");

  cartOverlay.classList.remove("active");

}

floatingToggle.addEventListener(
  "click",
  openCartBox
);

closeCart.addEventListener(
  "click",
  closeCartBox
);

cartOverlay.addEventListener(
  "click",
  closeCartBox
);

/* =========================================
   START APP
========================================= */

window.addEventListener(

  "DOMContentLoaded",

  () => {

    renderMenu();

    renderDrinks();

    updateCart();

    syncStocksRealtime();

    getUserLocation();

  }

);