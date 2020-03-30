const add_button = document.querySelector('.add_button');
const input = document.querySelector('.input');
const list = document.querySelector('ul');
const delete_button = document.querySelector('.delete_button');
const x_icon = document.querySelector('i.fas.fa-times');
const line_through = document.querySelectorAll('li i.fas.fa-times');




// line_through.forEach(function (item) {
//   item.style.backgroundColor = 'yellow';
//   item.parentElement.remove();
// })

// console.log(line_through);



// const newline_through = Array.from(line_through);

// console.log(line_through);
// line_through.forEach(function (item) {
//   item.addEventListener('click', function () {
//     console.log('test');
//   })
// })





// for (let i = 0; i < line_through.length; i++) {
//   line_through[i].nextElementSibling.addEventListener('click', function () {
//     line_through[i].classList.toggle('active');
//   })
// }

add_button.addEventListener('click', function () {
  if (input.value === '') {
    return false;
  }
  let item = document.createElement('li');
  let link = document.createElement('a')
  let x_icon = document.createElement('i');
  x_icon.className = 'fas fa-times';
  link.setAttribute('href', '#');
  link.innerHTML = input.value;
  item.appendChild(link);
  item.appendChild(x_icon);
  list.appendChild(item);
  input.value = ''
  console.log(item);
})




delete_button.addEventListener('click', function () {
  let li = document.querySelector('li');
  if (li === null) {
    return false;
  } else {
    li.remove();
  }
})
