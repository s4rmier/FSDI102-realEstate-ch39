// House details data set
let housesArr = [
  {},
  {
    img: "announcement3.jpg",
    name: "Palazzo",
    price: "$6,500,000",
    loc: "Los Angeles, CA",
    area: "4,233",
    built: "2002",
    beds: "8",
    baths: "6",
    desc: "Indulge in the ultimate coastal retreat with this exquisite modern mansion, offering panoramic ocean views and opulent amenities. <br /><br />Experience timeless elegance and unparalleled luxury living in this prestigious property, a true masterpiece of coastal opulence.",
  },
  {
    img: "announcement1.jpg",
    name: "Ladera",
    price: "$3,200,000",
    loc: "Solana Beach, CA",
    area: "3,110",
    built: "2006",
    beds: "6",
    baths: "4",
    desc: "Nestled amidst lush landscapes, this exquisite residence epitomizes opulence. <br /><br /> With its grand architecture, expansive living spaces, and state-of-the-art amenities, it offers the epitome of sophisticated living.",
  },
  {
    img: "announcement2.jpg",
    name: "Montecito",
    price: "$2,000,000",
    loc: "Lakeside, CA",
    area: "3,550",
    built: "2011",
    beds: "4",
    baths: "4",
    desc: "Perched high above the city skyline, this extraordinary penthouse showcases breathtaking panoramic views. <br /><br />Its sprawling floor plan, designer finishes, and private rooftop terrace redefine urban luxury living.",
  },
  {
    img: "announcement4.jpg",
    name: "Ventana",
    price: "$2,800,000",
    loc: "Santee, CA",
    area: "2,800",
    built: "2017",
    beds: "5",
    baths: "3",
    desc: "This exclusive residence exudes elegance and sophistication. With its gourmet kitchen, spa-like bathrooms, premium finishes, private pool, and meticulously landscaped grounds, it offers a refined living experience in a tranquil oasis.",
  },
];

// modal elements
let buttons = document.querySelectorAll(".button");
let modalWindow = document.querySelector(".modal-window");
let detailClose = document.getElementById("details-modal-close");

// Reusable function to toggle hide and unhide a modal
let toggleModalWindow = (target) => {
  target.classList.toggle("hide");
};

// Close button sending command to close modalWindow DOM element
detailClose.addEventListener("click", () => toggleModalWindow(modalWindow));

// Assigning event listener to an array of buttons
buttons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    handleButtonClick(event, index);
  });
});

// Detail modal elements
let homeImg = document.getElementById("home-img");
let homeName = document.getElementById("home-name");
let homePrice = document.getElementById("home-price");
let homeLoc = document.getElementById("home-loc");
let homeArea = document.getElementById("home-area");
let homeBuilt = document.getElementById("home-built");
let homeBeds = document.getElementById("home-beds");
let homeBaths = document.getElementById("home-baths");
let homeDesc = document.getElementById("home-desc");

let openModal = (index) => {
  // toggles modalWindow to show
  modalWindow.classList.toggle("hide");
  // modify DOM elements depending on the index number
  homeImg.src = `img/${housesArr[index].img}`;
  homePrice.innerText = housesArr[index].price;
  homeName.innerText = housesArr[index].name;
  homeLoc.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${housesArr[index].loc}`;
  homeArea.innerHTML = `<i class="fa-solid fa-ruler-combined"></i>${housesArr[index].area} ft<sup>2</sup>`;
  homeBuilt.innerHTML = `<i class="fa-solid fa-building-user"></i>Built ${housesArr[index].built}`;
  homeBeds.innerHTML = `<i class="fa-solid fa-bed"></i>${housesArr[index].beds} Beds`;
  homeBaths.innerHTML = `<i class="fa-solid fa-bath"></i>${housesArr[index].baths} Baths`;
  homeDesc.innerHTML = housesArr[index].desc;
};

// Execute a function depending on which button is clicked
let handleButtonClick = (event, index) => {
  const clickedButton = event.target;
  let buttonText = clickedButton.textContent;
  if (buttonText == "Submit") {
    alert("Thank you for subscribing!");
  } else if (buttonText == "Details") {
    openModal(index);
  }
};
