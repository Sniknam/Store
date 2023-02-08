async function getData() {
  const data = await fetch("https://dummyjson.com/products");
  console.log(data);
  const response = await data.json();
  console.log(response.products);

  const containerElm = document.getElementById("container");
  const cardData = document.getElementById("cardData");
  for (let i = 0; i < response.products.length; i++) {
    const selectedItemObj = response.products[i];
    const cardDataElm = document.createElement("div");
    cardDataElm.classList.add("card");

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
    let informationElm = document.createElement("p");
    const infoTextElm = document.createTextNode(selectedItemObj.description);
    informationElm.appendChild(infoTextElm);
    cardDataElm.appendChild(informationElm);

    containerElm.appendChild(cardDataElm);

    //add rating
    let starRaringElm = document.createElement("p");
    const starNumElm = document.createTextNode(selectedItemObj.rating);
    starRaringElm.appendChild(starNumElm);
    cardDataElm.appendChild(starRaringElm);

    const priceCountainer = document.createElement("div");
    priceCountainer.classList.add("price");

    //add  price and price with discount
    let priceElm = document.createElement("p");
    priceElm.classList.add("price-change");

    let priceChangeElm = document.createElement("p");
    priceChangeElm.classList.add("price");

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
  }
}

getData();
