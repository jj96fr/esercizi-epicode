function addToCart(book) {
    const cartItem = $(`
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${book.title} - ${book.price}
        <button class="btn btn-sm btn-danger remove-from-cart-btn">Rimuovi</button>
      </li>
    `);
  
    cartItem.find('.remove-from-cart-btn').click(function() {
      cartItem.remove();
      saveCart();
    });
  
    $('#cart').append(cartItem);
  }
  
  function saveCart() {
    const cart = $('#cart').html();
    localStorage.setItem('cart', cart);
  }
  
  function loadCart() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      $('#cart').html(cart);
      bindRemoveFromCartEvents();
    }
  }
  
  function bindRemoveFromCartEvents() {
    $('.remove-from-cart-btn').click(function() {
      $(this).closest('.list-group-item').remove();
      saveCart();
    });
  }
  
  $(document).ready(function() {
    loadCart();
  
    fetch('https://striveschool-api.herokuapp.com/books')
      .then(response => response.json())
      .then(data => {
        data.forEach(book => {
          $('#book-list').append(`
            <div class="col-lg-3 col-md-4 col-sm-6 my-3">
              <div class="card h-100">
                <img src="${book.img}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">Prezzo: €${book.price}</p>
                  <button class="btn btn-danger discard-btn">Scarta</button>
                  <button class="btn btn-primary buy-now-btn">Compra ora</button>
                </div>
              </div>
            </div>
          `);
        });
  
        // Funzione per rimuovere una card quando il pulsante "Scarta" viene premuto
        $('.discard-btn').click(function() {
          $(this).closest('.col-lg-3').remove();
        });
  
        // Funzione per aggiungere un libro al carrello quando il pulsante "Compra ora" viene premuto
        $('.buy-now-btn').click(function() {
          const book = {
            title: $(this).siblings('.card-title').text(),
            price: $(this).siblings('.card-text').text().slice(9)
          };
          addToCart(book);
          saveCart();
        });
  
        bindRemoveFromCartEvents();
      });
  });
  