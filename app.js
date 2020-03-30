const add_button = document.querySelector('.add_button');
const input = document.querySelector('.input');
const list = document.querySelector('ul');

add_button.addEventListener('click', function () {
  let item = document.createElement('li');
  let link = document.createElement('a')
  let close = document.createElement('i');
  close.className = 'fas fa-times';
  link.setAttribute('href', '#');
  link.innerText = input.value;
  item.appendChild(link);
  list.appendChild(item);
  item.appendChild(close);
  input.value = '';
})