window.onload = () => {
  let bookImage = document.getElementById('bookImage');
  let bookRow = document.getElementById('productRow');
  let ebookRow = document.getElementById('productEbookRow');
  let audioBookRow = document.getElementById('productAudiobookRow');
  let totalProduct = document.getElementById('noProducts');
  let totalEbooks = document.getElementById('noEbooks');
  let totalAudiobooks = document.getElementById('noAudiobook');

  const dbBooks = JSON.parse(localStorage.getItem('dbProducts'));

  if (dbBooks == null) {
    totalProduct.innerHTML = 0;
    totalEbooks.innerHTML = 0;
    totalAudiobooks.innerHTML = 0;
  } else {
    let numEbook = 0;
    let numAudiobook = 0;
    dbBooks.forEach((product) => {
      totalProduct.innerHTML = dbBooks.length;
    });
    dbBooks.forEach((product) => {
      if (product.category == 'eBooks') {
        numEbook++;
      }
      totalEbooks.innerHTML = numEbook;
    });
    dbBooks.forEach((product) => {
      if (product.category == 'Audiobook') {
        numAudiobook++;
      }
      totalAudiobooks.innerHTML = numAudiobook;
    });
  }

  if (localStorage.getItem('dbProducts') != null) {
    dbBooks.forEach((product) => {
      const name = product.name;
      const author = product.author;
      const rating = product.rating;
      const price = product.price;
      bookCover = product.bookCover;
      bookCover = [...bookCover];
      bookCover = bookCover.splice(12, 12);
      bookCover = bookCover.join('');
      let book = document.createElement('div');
      book.className = 'admin__row__card';
      book.innerHTML = `
        <img class="admin__row__card__image" id="bookImage" src="images/${bookCover}" alt="">
        <h5 class="heading-5" id="bookName">${name}</h5>
        <h5 class="heading-5" id="bookAuthor">${author}</h5>
        <div class="admin__row__card__icon" id="bookRating">
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
        </div>
        <h5 class="heading-5">$${price}</h5>
        <button class="btn admin__row__card__btn">
          Edit Product
        </button>`;
      bookRow.appendChild(book);
    });

    dbBooks.forEach((product) => {
      if (product.category == 'eBooks') {
        const name = product.name;
        const author = product.author;
        const rating = product.rating;
        const price = product.price;
        bookCover = product.bookCover;
        bookCover = [...bookCover];
        bookCover = bookCover.splice(12, 12);
        bookCover = bookCover.join('');
        let book = document.createElement('div');
        book.className = 'admin__row__card';
        book.innerHTML = `
        <img class="admin__row__card__image" id="bookImage" src="images/${bookCover}" alt="">
        <h5 class="heading-5" id="bookName">${name}</h5>
        <h5 class="heading-5" id="bookAuthor">${author}</h5>
        <div class="admin__row__card__icon" id="bookRating">
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
          <svg id="star">
            <use xlink:href="images/sprite.svg#star"/>
          </svg>
        </div>
        <h5 class="heading-5">$${price}</h5>
        <button class="btn admin__row__card__btn">
          Edit Product
        </button>`;
        ebookRow.appendChild(book);
      }
    });

    dbBooks.forEach((product) => {
      if (product.category == 'Audiobook') {
        const name = product.name;
        const author = product.author;
        const rating = product.rating;
        const price = product.price;
        bookCover = product.bookCover;
        bookCover = [...bookCover];
        bookCover = bookCover.splice(12, 12);
        bookCover = bookCover.join('');
        let book = document.createElement('div');
        book.className = 'admin__row__card';
        book.innerHTML = `
       <img class="admin__row__card__image" id="bookImage" src="images/${bookCover}" alt="">
       <h5 class="heading-5" id="bookName">${name}</h5>
       <h5 class="heading-5" id="bookAuthor">${author}</h5>
       <div class="admin__row__card__icon" id="bookRating">
         <svg id="star">
           <use xlink:href="images/sprite.svg#star"/>
         </svg>
         <svg id="star">
           <use xlink:href="images/sprite.svg#star"/>
         </svg>
         <svg id="star">
           <use xlink:href="images/sprite.svg#star"/>
         </svg>
         <svg id="star">
           <use xlink:href="images/sprite.svg#star"/>
         </svg>
         <svg id="star">
           <use xlink:href="images/sprite.svg#star"/>
         </svg>
       </div>
       <h5 class="heading-5">$${price}</h5>
       <button class="btn admin__row__card__btn">
         Edit Product
       </button>`;
        audioBookRow.appendChild(book);
      }
    });
  }
};
