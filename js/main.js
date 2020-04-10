const shoppingCartButton = document.querySelector('#cart-button');
         modalWindow = document.querySelector('.modal');
         closeButton = document.querySelector('.close');

shoppingCartButton.addEventListener('click', function (event) {
     modalWindow.classList.add('modal-active')
});

closeButton.addEventListener('click', function (ev) {
     modalWindow.classList.remove('modal-active')
});