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
   TOPPING
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
    name:"Dimsum",
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
    name:"Tahu Kering 3pcs",
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
    name:"Crab Stick",
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
   DRINKS
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
   STATE
========================================= */

let cart = [];

let currentDistance = 0;

let userTooFar = false;

let locationReady = false;

let storeClosed = false;

let stockRealtime = {};

/* =========================================
   STORE LOCATION
========================================= */

const STORE_LAT = -7.292564;

const STORE_LNG = 108.208624;

const MAX_DISTANCE = 15;

/* =========================================
   REALTIME STORE STATUS
========================================= */

onSnapshot(

  doc(db,"settings","storeStatus"),

  (snap)=>{

    const data =
    snap.data();

    storeClosed =
    data?.closed || false;

    setCheckoutState();
    renderMenu();

  }

);

/* =========================================
   REALTIME STOCK
========================================= */

onSnapshot(

  collection(db,"stocks"),

  (snapshot)=>{

    stockRealtime = {};

    snapshot.forEach((docSnap)=>{

      stockRealtime[docSnap.id] =
      docSnap.data().available;

    });

    renderMenu();

  }

);

/* =========================================
   CART OPEN CLOSE
========================================= */

function openCart(){

  cartBox?.classList.add(
    "active"
  );

  cartOverlay?.classList.add(
    "active"
  );

}

function closeCartBox(){

  cartBox?.classList.remove(
    "active"
  );

  cartOverlay?.classList.remove(
    "active"
  );

}

window.addEventListener(

  "DOMContentLoaded",

  ()=>{

    floatingToggle?.addEventListener(
      "click",
      openCart
    );

    closeCart?.addEventListener(
      "click",
      closeCartBox
    );

    cartOverlay?.addEventListener(
      "click",
      closeCartBox
    );

  }

);

/* =========================================
   DISTANCE
========================================= */

function calculateDistance(
  lat1,
  lon1,
  lat2,
  lon2
){

  const R = 6371;

  const dLat =
  (lat2 - lat1) *
  Math.PI / 180;

  const dLon =
  (lon2 - lon1) *
  Math.PI / 180;

  const a =

    Math.sin(dLat/2) ** 2 +

    Math.cos(
      lat1 * Math.PI/180
    ) *

    Math.cos(
      lat2 * Math.PI/180
    ) *

    Math.sin(dLon/2) ** 2;

  const c =
  2 * Math.atan2(
    Math.sqrt(a),
    Math.sqrt(1-a)
  );

  return R * c;

}

/* =========================================
   LOCATION
========================================= */

function getUserLocation(){

  locationReady = false;

  userTooFar = true;

  if(!navigator.geolocation){

    locationReady = true;
    return;

  }

  navigator.geolocation.getCurrentPosition(

    (pos)=>{

      const lat =
      pos.coords.latitude;

      const lng =
      pos.coords.longitude;

      currentDistance =
      calculateDistance(
        STORE_LAT,
        STORE_LNG,
        lat,
        lng
      );

      currentDistance =
      Number(
        currentDistance.toFixed(1)
      );

      userTooFar =
      currentDistance >
      MAX_DISTANCE;

      locationReady = true;

      updateCart();

    },

    ()=>{

      locationReady = true;

      userTooFar = true;

      updateCart();

    },

    {

      enableHighAccuracy:true,
      timeout:10000

    }

  );

}

/* =========================================
   SHIPPING
========================================= */

function getShippingCost(){

  if(currentDistance <= 3)
  return 5000;

  if(currentDistance <= 6)
  return 8000;

  if(currentDistance <= 10)
  return 10000;

  if(currentDistance <= 15)
  return 15000;

  return 0;

}

/* =========================================
   RENDER MENU
========================================= */

function renderMenu(){

  if(!menuGrid) return;

  menuGrid.innerHTML = "";

  toppings.forEach((item,index)=>{

    const qty =
    cart.filter(
      x => x.name === item.name
    ).length;

    const available =
    stockRealtime[item.name] !== false;

    const card =
    document.createElement("div");

    card.className =
    "card";

    card.innerHTML = `

      <img src="${item.image}">

      <div class="content">

        <h3>
          ${item.name}
        </h3>

        <div class="
          stock-label
          ${
            available
            ? "ready"
            : "empty"
          }
        ">

          ${
            available
            ? "READY"
            : "HABIS"
          }

        </div>

        <div class="price">

          Rp ${item.price
          .toLocaleString("id-ID")}

        </div>

        <div class="counter">

          <button
            onclick="
            minusItem(${index})
            "
          >
            -
          </button>

          <span>
            ${qty}
          </span>

          <button

            onclick="
            plusItem(${index})
            "

            ${
              !available ||
              storeClosed
              ? "disabled"
              : ""
            }

          >
            +
          </button>

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

  if(!drinkGrid) return;

  drinkGrid.innerHTML = "";

  drinks.forEach((item,index)=>{

    const qty =
    cart.filter(
      x => x.name === item.name
    ).length;

    const card =
    document.createElement("div");

    card.className =
    "card";

    card.innerHTML = `

      <div class="content">

        <h3>
          ${item.name}
        </h3>

        <div class="price">

          Rp ${item.price
          .toLocaleString("id-ID")}

        </div>

        <div class="counter">

          <button
            onclick="
            minusDrink(${index})
            "
          >
            -
          </button>

          <span>
            ${qty}
          </span>

          <button
            onclick="
            plusDrink(${index})
            "
          >
            +
          </button>

        </div>

      </div>

    `;

    drinkGrid.appendChild(card);

  });

}

/* =========================================
   CART ACTION
========================================= */

window.plusItem = (i)=>{

  const item =
  toppings[i];

  const available =
  stockRealtime[item.name] !== false;

  if(!available) return;

  if(storeClosed) return;

  cart.push({
    ...item
  });

  updateCart();

};

window.minusItem = (i)=>{

  const idx =
  cart.findIndex(
    x => x.name === toppings[i].name
  );

  if(idx !== -1){

    cart.splice(idx,1);

  }

  updateCart();

};

window.plusDrink = (i)=>{

  cart.push({
    ...drinks[i]
  });

  updateCart();

};

window.minusDrink = (i)=>{

  const idx =
  cart.findIndex(
    x => x.name === drinks[i].name
  );

  if(idx !== -1){

    cart.splice(idx,1);

  }

  updateCart();

};

/* =========================================
   UPDATE CART
========================================= */

function updateCart(){

  if(!cartItems) return;

  cartItems.innerHTML = "";

  let total = 0;

  const grouped = {};

  cart.forEach((item)=>{

    if(!grouped[item.name]){

      grouped[item.name] = {

        qty:0,
        price:item.price

      };

    }

    grouped[item.name].qty++;

  });

  Object.keys(grouped).forEach((name)=>{

    const item =
    grouped[name];

    const subtotal =
    item.qty * item.price;

    total += subtotal;

    const div =
    document.createElement("div");

    div.className =
    "cart-item";

    div.innerHTML = `

      <strong>${name}</strong>

      <span>
        ${item.qty}x
      </span>

      <b>

        Rp ${subtotal
        .toLocaleString("id-ID")}

      </b>

    `;

    cartItems.appendChild(div);

  });

  const shipping =
  getShippingCost();

  if(!userTooFar){

    total += shipping;

  }

  totalPrice.innerText =

  `Rp ${total
  .toLocaleString("id-ID")}`;

  totalItem.innerText =
  `${cart.length} item`;

  cartCount.innerText =
  cart.length;

  renderMenu();
  renderDrinks();

  setCheckoutState();

}

/* =========================================
   CHECKOUT STATE
========================================= */

function setCheckoutState(){

  if(!checkoutBtn) return;

  if(storeClosed){

    checkoutBtn.disabled =
    true;

    checkoutBtn.innerHTML =
    "🔴 Warung Tutup";

    return;

  }

  if(!locationReady){

    checkoutBtn.disabled =
    true;

    checkoutBtn.innerHTML =
    "📍 Ambil lokasi...";

    return;

  }

  if(userTooFar){

    checkoutBtn.disabled =
    true;

    checkoutBtn.innerHTML =
    "❌ Diluar Jangkauan";

    return;

  }

  checkoutBtn.disabled =
  false;

  checkoutBtn.innerHTML =
  "🛒 Checkout Sekarang";

}

/* =========================================
   CHECKOUT
========================================= */

window.checkoutOrder =
async()=>{

  if(!locationReady){

    alert(
      "Tunggu lokasi dulu"
    );

    return;

  }

  if(userTooFar){

    alert(
      "Diluar jangkauan"
    );

    return;

  }

  if(storeClosed){

    alert(
      "Warung sedang tutup"
    );

    return;

  }

  const name =
  document.getElementById(
    "customerName"
  ).value;

  const phone =
  document.getElementById(
    "customerPhone"
  ).value;

  const address =
  document.getElementById(
    "customerAddress"
  ).value;

  if(
    !name ||
    !phone ||
    !address
  ){

    alert(
      "Lengkapi data"
    );

    return;

  }

  const shipping =
  getShippingCost();

  const total =

    cart.reduce(
      (a,b)=>a+b.price,
      0
    ) +

    shipping;

  await addDoc(

    collection(
      db,
      "orders"
    ),

    {

      customerName:name,
      customerPhone:phone,
      customerAddress:address,

      items:cart,

      shipping,

      distance:
      currentDistance,

      total,

      status:"Menunggu",

      createdAt:
      new Date()

    }

  );

  alert(
    "Pesanan berhasil!"
  );

  cart = [];

  updateCart();

};

/* =========================================
   START APP
========================================= */

window.addEventListener(

  "DOMContentLoaded",

  ()=>{

    renderMenu();

    renderDrinks();

    updateCart();

    getUserLocation();

  }

);
