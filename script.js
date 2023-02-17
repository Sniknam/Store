async function getCategories() {
  const categories = await fetch("https://dummyjson.com/products/categories");
  console.log(categories);
  const result = await categories.json();
  console.log(result);

  const sideContainer = document.getElementById("side-container");

  // title
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

async function getData() {
  const data = await fetch("https://dummyjson.com/products");

  const response = await data.json();

  const containerElm = document.getElementById("container");
  for (let i = 0; i < response.products.length; i++) {
    const selectedItemObj = response.products[i];
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

    // add title
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
    const ratingStar = document.createElement("span");
    ratingStar.classList.add("fa");
    ratingStar.classList.add("fa-star");
    ratingStar.classList.add("checked");

    ratingContainer.appendChild(ratingStar);
    let starRaringElm = document.createElement("p");
    const starNumElm = document.createTextNode(selectedItemObj.rating);
    starRaringElm.appendChild(starNumElm);
    ratingContainer.appendChild(starRaringElm);
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
