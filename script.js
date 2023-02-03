async function getData() {
  const data = await fetch("https://dummyjson.com/products");
  const response = await data.json();

  printData(response);
}

function printData(array) {}
getData();
