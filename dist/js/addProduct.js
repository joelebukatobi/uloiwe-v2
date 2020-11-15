// Adds data to local storage
window.onload = () => {
  // Add A Product
  const name = document.getElementById('name');
  const author = document.getElementById('author');
  const price = document.getElementById('price');
  const rating = document.getElementById('rating');
  const category = document.getElementById('category');
  const description = document.getElementById('description');
  const bookCover = document.getElementById('book-cover');
  const addProduct = document.getElementById('addProduct');

  addProduct.addEventListener('click', () => {
    let dbProductsArray = [];
    let oldProductDB;
    let id = dbProductsArray.length - 1 + 1;
    let productDB = {
      name: name.value,
      author: author.value,
      price: price.value,
      rating: rating.value,
      category: category.value,
      description: description.value,
      bookCover: bookCover.value,
    };

    if (localStorage.getItem('dbProducts') === null) {
      localStorage.setItem('dbProducts', JSON.stringify(dbProductsArray));
    }
    oldProductDB = JSON.parse(localStorage.getItem('dbProducts'));
    console.log(oldProductDB);
    oldProductDB.push(productDB);

    localStorage.setItem('dbProducts', JSON.stringify(oldProductDB));
    window.location.reload();
  });
};
