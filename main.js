const restaurants = [
  {
    image: "./img/img1.png",
    name: "Hungerfox",
    rating: 3.8,
    location: "Chinese, Momos, North Indian, Mughlai",
    cost: 200,
    deliveryTime: 40
  },
  {
    image: "./img/img2.png",
    name: "Rajinder Da Dhaba",
    rating: 4.4,
    location: "North Indian, Chinese, Mughlai",
    cost: 250,
    deliveryTime: 52
  },
  {
    image: "./img/img3.png",
    name: "Berco's - If You Love Chinese",
    rating: 4.4,
    location: "Chinese, Thai, Asian, Desserts",
    cost: 600,
    deliveryTime: 38
  },
  {
    image: "./img/img4.png",
    name: "Gulati",
    rating: 4.5,
    location: "North Indian, Mughlai, Biryani, Kebab, Desserts, Beverages",
    cost: 900,
    deliveryTime: 47
  },
  {
    image: "./img/img5.png",
    name: "Sanjha Chulha",
    rating: 4.3,
    location: "North Indian, Mughlai, Biryani, Chinese, Rolls, Kebab, Ice Cream, Shake",
    cost: 700,
    deliveryTime: 52
  },
  {
    image: "./img/img6.png",
    name: "Khan Chacha - Rolls, Kebabs And Biryani",
    rating: 4.4,
    location: "Rolls, Kebab, North Indian, Mughlai, Biryani",
    cost: 200,
    deliveryTime: 30
  },
  {
    image: "./img/img7.png",
    name: "Havemore",
    rating: 4.4,
    location: "North Indian, Mughlai, Biryani, Beverages",
    cost: 800,
    deliveryTime: 42
  },
  {
    image: "./img/img8.png",
    name: "Fat Lulu's Cafe & Bar",
    rating: 4.4,
    location: "Italian, Pasta, Continental, Beverages",
    cost: 600,
    deliveryTime: 35
  },
  {
    image: "./img/img9.png",
    name: "Baba's",
    rating: 4.5,
    location: "North Indian, Kebab, Chinese, Mughlai, Desserts, Beverages",
    cost: 300,
    deliveryTime: 46
  },
  {
    image: "./img/img10.png",
    name: "Champaran Meat The Original Taste Of Bihar",
    rating: 3.6,
    location: "Bihari, Beverages",
    cost: 150,
    deliveryTime: 50
  },
  {
    image: "./img/img11.png",
    name: "Oriental Mom",
    rating: 3.9,
    location: "Asian, Chinese, Sichuan",
    cost: 250,
    deliveryTime: 40
  },
  {
    image: "./img/img12.png",
    name: "Miglani Eating House",
    rating: 4.0,
    location: "North Indian, Chinese, Biryani",
    cost: 200,
    deliveryTime: 61
  }
];

const popularRestaurants = [...restaurants];

const filterCenterElement = document.createElement('div');
filterCenterElement.className = "filter_center hidden";
filterCenterElement.innerHTML = `
      <div class="filter_section">
        <div class="filter_head">
          <h1>Filters</h1>
          <p class="filter_cross">X</p>
        </div>
        <div class="sort">
          <div class="sort_left">
            <p>Sort by</p>
            <p class="sort_result">Popularity</p>
          </div>
          <div class="sort_right">
            <div class="sort_base">
              <input type="radio" name="category" id="popularity" checked value="Popularity">
              <label for="popularity">Popularity</label>
            </div>
            <div class="sort_base">
              <input type="radio" name="category" id="rating_high_to_low" value="Rating: High to Low">
              <label for="rating_high_to_low">Rating: High to Low</label>
            </div>
            <div class="sort_base">
              <input type="radio" name="category" id="delivery_time" value="Delivery Time">
              <label for="delivery_time">Delivery Time</label>
            </div>
            <div class="sort_base">
              <input type="radio" name="category" id="cost_high_to_low" value="Cost:High to Low">
              <label for="cost_high_to_low">Cost:High to Low</label>
            </div>
          </div>
        </div>
        <div class="filter_btns">
          <button class="apply">Apply</button>
        </div>
      </div>`;
document.body.appendChild(filterCenterElement);

const overlayElement = document.querySelector('.overlay');
// const filterCenterElement = document.querySelector('.filter_center');
const filterCross = document.querySelector('.filter_cross');
const filterElement = document.querySelector('.filter');
filterElement.addEventListener("click", () => {
  filterCenterElement.classList.remove("hidden");
  overlayElement.classList.add("overlay");
  overlayElement.classList.remove("hidden");
})

filterCenterElement.addEventListener("click", (event) => {
  if (event.target.className === "filter_cross") {
    filterCenterElement.classList.add("hidden");
    overlayElement.classList.remove("overlay");
    overlayElement.classList.add("hidden");
  }
});

const cardContainerElement = document.querySelector('.card_container');


function generateCards(restaurant) {
  restaurant.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.className = "card";
    cardElement.innerHTML = `
        <img src="${card.image}" alt="">
        <div class="card_name">
          <p>${card.name}</p>
          <p>${card.rating}</p>
        </div>
        <div class="card_address">
          <p>${card.location}</p>
          <p>&#8377;${card.cost}</p>
        </div>
        <div class="card_time">
          <p>${card.deliveryTime} min</p>
        </div>`;
    cardContainerElement.appendChild(cardElement);
  });
}

generateCards(restaurants);

const sortElement = document.querySelector('.sort');
const sortResultElement = document.querySelector('.sort_result');
sortElement.addEventListener("click", (event) => {
  
  if (event.target.tagName === "INPUT") {
    sortResultElement.innerHTML = event.target.value;
  }
});

const filterBtnsElement = document.querySelector('.filter_btns');
filterBtnsElement.addEventListener("click", (event) => {

  function hideFilter() {
    filterCenterElement.classList.add("hidden");
    overlayElement.classList.add("hidden");
    cardContainerElement.innerHTML = "";
    generateCards(restaurants);
  }

  if (event.target.className === "apply") {
    if (sortResultElement.innerHTML === "Popularity") {
      filterCenterElement.classList.add("hidden");
      overlayElement.classList.add("hidden");
      cardContainerElement.innerHTML = "";
      generateCards(popularRestaurants);
    } else if (sortResultElement.innerHTML === "Rating: High to Low") {
      restaurants.sort((a, b) => b.rating - a.rating);
      hideFilter();
    } else if (sortResultElement.innerHTML === "Delivery Time") {
      restaurants.sort((a, b) => a.deliveryTime - b.deliveryTime);
      hideFilter();
    } else if (sortResultElement.innerHTML === "Cost:High to Low") {
      restaurants.sort((a, b) => b.cost - a.cost);
      hideFilter();
    }
  }
});
