window.onload = () => {
  // let bookImage = document.getElementById('bookImage');
  let ebookRow = document.getElementById('usereBooks');
  let audioBookRow = document.getElementById('userAudiobooks');
  const dbBooks = JSON.parse(localStorage.getItem('dbProducts'));

  if (localStorage.getItem('dbProducts') != null) {
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
        book.idName = book.innerHTML = `
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
        <button type="button" class="btn admin__row__card__btn" id="addToCart">
          Add To Cart
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
        book.idName = 'book';
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
        <button class="btn admin__row__card__btn" id="addToCart">
          Add To Cart
        </button>`;
        audioBookRow.appendChild(book);
      }
    });

    const addToCart = document.getElementById('addToCart');
    addToCart.addEventListener('click', () => {
      const book = document.getElementById('book');
      location.href = '/dist/product.html';
    });
  }
};
