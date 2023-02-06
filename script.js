async function getData() {
  const data = await fetch("https://dummyjson.com/products");
  console.log(data);
  const response = await data.json();
  console.log(response.products);

  const cardData = document.getElementById("cardData");
  for (let i = 0; i < response.products.length; i++) {
    const selectedItemObj = response.products[i];
    const cardDataElm = document.createElement("div");
    cardDataElm.classList.add("card");

    const myImage = new Image(200, 100);
    myImage.classList.add("img-card");
    myImage.src = "thumbnail.jpg";
    cardDataElm.appendChild(myImage);

    let titleElm = document.createElement("h3");
    const titleTextElm = document.createTextNode(selectedItemObj.title);
    titleElm.appendChild(titleTextElm);
    cardDataElm.appendChild(titleElm);

    let informationElm = document.createElement("p");
    const infoTextElm = document.createTextNode(selectedItemObj.description);
    informationElm.appendChild(infoTextElm);
    cardDataElm.appendChild(informationElm);

    container.appendChild(cardDataElm);
  }
}

function printData(array) {
  for (let i = 0; i < array.length; i++) {}
}
getData();
const data = document.getElementById("cardData");
