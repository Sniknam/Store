const inputValue = document.getElementById("search");
inputValue.addEventListener("input", updateValue);

function updateValue(e) {
  const containerElm = document.getElementById("container");

  const searchStr = e.target.value; // same as const searchStr = inputValue.value
  const newFilterProduct = filterInput(productData, searchStr);
  console.log(newFilterProduct);
  // clear container
  containerElm.innerHTML = "";
  // print filter data in HTML
  printData(newFilterProduct);
}
function filterInput(arr, str) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // captital sensitive
    const productName = arr[i].title.toUpperCase();
    const searchPhrase = str.toUpperCase();
    // search only two charater
    if (productName.includes(searchPhrase)) {
      result.push(arr[i]);
    } else if (!str) {
      result.push(arr[i]);
    }
  }
  return result;
}

async function getCategories() {
  const categories = await fetch("https://dummyjson.com/products/categories");
  const result = await categories.json();

  const sideContainer = document.getElementById("side-container");

  //side title
  const titleElm = document.createElement("h2");
  const titleTextElm = document.createTextNode("categories");

  titleElm.appendChild(titleTextElm);
  sideContainer.appendChild(titleElm);

  // create ul, add style
  const categoriesUlElm = document.createElement("ul");
  categoriesUlElm.classList.add("list");

  // loop to get data
  for (let i = 0; i < result.length; i++) {
    const categoryStr = result[i];

    // create li , add text and style
    const categoriesElm = document.createElement("li");
    categoriesElm.classList.add("no-bullets");
    const categoriesTexElm = document.createTextNode(categoryStr);

    // create input , set attribut
    const checkBoxInputElm = document.createElement("input");
    checkBoxInputElm.setAttribute("type", "checkbox");

    // appendChild input,li,ul to container
    categoriesElm.appendChild(checkBoxInputElm);
    categoriesElm.appendChild(categoriesTexElm);
    categoriesUlElm.appendChild(categoriesElm);
    sideContainer.appendChild(categoriesUlElm);
  }
}
getCategories();

let productData = [];
async function getData() {
  const data = await fetch("https://dummyjson.com/products");
  const response = await data.json();
  productData = response.products;

  printData(response.products);
}

function printData(productsArr) {
  const containerElm = document.getElementById("container");
  for (let i = 0; i < productsArr.length; i++) {
    const selectedItemObj = productsArr[i];
    const cardDataElm = document.createElement("div");
    cardDataElm.classList.add("card");

    // sale sign
    const saleSignElm = document.createElement("span");
    const saleTextElm = document.createTextNode("sale");
    saleSignElm.appendChild(saleTextElm);
    saleSignElm.classList.add("sale");
    cardDataElm.appendChild(saleSignElm);

    // add image
    const myImage = new Image(200, 100);
    myImage.classList.add("img-card");
    myImage.src = "thumbnail.jpg";
    cardDataElm.appendChild(myImage);

    // add card title
    let titleElm = document.createElement("h3");
    const titleTextElm = document.createTextNode(selectedItemObj.title);
    titleElm.appendChild(titleTextElm);
    cardDataElm.appendChild(titleElm);

    // add description
    const infoContainer = document.createElement("div");
    const informationElm = document.createElement("p");
    const sliced = selectedItemObj.description.slice(0, 30) + "...";

    const infoTextElm = document.createTextNode(sliced);
    informationElm.appendChild(infoTextElm);
    infoContainer.appendChild(informationElm);
    cardDataElm.appendChild(infoContainer);

    //add rating
    const ratingContainer = document.createElement("div");

    // const starChecked = document.createElement("span");
    // starChecked.classList.add("fa");
    // starChecked.classList.add("fa-star");
    // starChecked.classList.add("checked");

    // const starChecked1 = document.createElement("span");
    // starChecked1.classList.add("fa");
    // starChecked1.classList.add("fa-star");
    // starChecked1.classList.add("checked");

    // const starChecked2 = document.createElement("span");
    // starChecked2.classList.add("fa");
    // starChecked2.classList.add("fa-star");
    // starChecked2.classList.add("checked");

    // const starChecked3 = document.createElement("span");
    // starChecked3.classList.add("fa");
    // starChecked3.classList.add("fa-star");
    // starChecked3.classList.add("checked");

    // ratingContainer.appendChild(starChecked);
    // ratingContainer.appendChild(starChecked1);
    // ratingContainer.appendChild(starChecked2);
    // ratingContainer.appendChild(starChecked3);

    // const starUnchecked = document.createElement("span");
    // starUnchecked.classList.add("fa");
    // starUnchecked.classList.add("fa-star");
    // // ratingContainer.appendChild(starUnchecked);

    // const starHalf = document.createElement("span");

    // starHalf.classList.add("fa");
    // starHalf.classList.add("fa-star-half");
    // ratingContainer.appendChild(starHalf);

    // 4.5
    // 2.8
    // 3.2
    // 2
    let fullCount = Math.floor(selectedItemObj.rating);

    let halfCount = 1;
    let emptyCount = 1;

    for (let i = 0; i < fullCount; i++) {
      console.log(i, fullCount);
      if (i <= fullCount) {
        const starChecked = document.createElement("span");
        starChecked.classList.add("fa");
        starChecked.classList.add("fa-star");
        starChecked.classList.add("checked");
        ratingContainer.appendChild(starChecked);
      }
    }

    for (let i = 0; i < halfCount; i++) {
      if (i < fullCount) {
        const starHalf = document.createElement("span");
        starHalf.classList.add("fa");
        starHalf.classList.add("fa-star-half");
        ratingContainer.appendChild(starHalf);
      }
    }

    for (let i = 0; i < emptyCount; i++) {
      if (i === emptyCount && i < fullCount) {
        const starUnchecked = document.createElement("span");
        starUnchecked.classList.add("fa");
        starUnchecked.classList.add("fa-star");
        ratingContainer.appendChild(starUnchecked);
      }
    }

    // let halfCount , let fullCount , let emptyCount
    // for(let i=0; i< fullCount; i++){}
    // Soroush Bk11:41 AM
    // for(let i=0; i< halfCount; i++){}

    // function starRating(score) {
    //   let roundRating = Math.floor(selectedItemObj.rating);
    //   console.log(typeof roundRating, roundRating);

    //   for (let i = 1; i <= 5; i++) {
    //     if (i === score) {
    //       starChecked++;
    //       ratingContainer.appendChild(starChecked);
    //     } else if (i > score) {
    //       starUnchecked++ + starHalf;
    //     } else {
    //       starUnchecked;
    //     }
    //   }
    // }

    // starRating(ratingContainer);

    let starRatingText = document.createElement("p");
    const starNumElm = document.createTextNode(selectedItemObj.rating);
    starRatingText.appendChild(starNumElm);
    ratingContainer.appendChild(starRatingText);
    cardDataElm.appendChild(ratingContainer);

    const priceCountainer = document.createElement("div");
    priceCountainer.classList.add("price");

    //add  price and price with discount
    let priceElm = document.createElement("p");
    priceElm.classList.add("price-change");

    let priceChangeElm = document.createElement("p");
    priceChangeElm.classList.add("currenr-price");

    let discount = selectedItemObj.discountPercentage;
    let price = selectedItemObj.price;
    //add discount
    const discountCalc = parseInt(price - (price * discount) / 100);
    const discountCalcElm = document.createTextNode(discountCalc);
    priceChangeElm.appendChild(discountCalcElm);
    priceCountainer.appendChild(priceChangeElm);
    //add price
    const priceNumElm = document.createTextNode(price);

    priceElm.appendChild(priceNumElm);
    priceCountainer.appendChild(priceElm);
    cardDataElm.appendChild(priceCountainer);

    const addBtn = document.createElement("button");
    const addTextBtn = document.createTextNode("+Add");
    addBtn.classList.add("add-btn");
    addBtn.appendChild(addTextBtn);
    priceCountainer.appendChild(addBtn);

    containerElm.appendChild(cardDataElm);
  }
}

getData();
