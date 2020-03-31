const add_button = document.querySelector('.add_button');
const list = document.getElementById('list');
const delete_button = document.querySelector('.delete_button');
const x_icon = document.querySelectorAll('i.fas.fa-times');
const line_through = document.querySelector('a');
const checkbox = document.querySelectorAll('.checkbox');



// checkbox.forEach(function (item) {
//   const lis = document.querySelectorAll('li');
//   item.addEventListener('click', function () {
//     lis.classList.toggle('active');
//   })
// })

// Adds Li with child link and icon
add_button.addEventListener('click', function () {
  // Prevents Error of null
  let input = document.getElementById('input')
  if (input.value === '') {
    return false;
  }
  // Create Input Elements
  let list = document.querySelector('#list');
  let li = document.createElement('li');
  li.className = 'list-item';
  let link = document.createElement('a')
  link.className = 'link-item';
  link.setAttribute('href', '#');
  link.innerHTML = input.value;
  li.appendChild(link)
  list.appendChild(li)
  let x = document.createElement('i');
  x.className = 'fas fa-times';
  li.appendChild(x);
  input.value = '';
  console.log(li.children[0])
})

// Create Line Through Items
// line_through.forEach(function (item) {
//   item.classList.toggle('active');
// })

// line_through.addEventListener('click', function () {
//   line_through.classList.toggle('active');
// })


// Removes Li from List
list.addEventListener('click', function (e) {
  if (e.target.parentElement.classList.contains('list-item')) {
    e.target.parentElement.remove();
  }
})

// Deletes each Li from list
delete_button.addEventListener('click', function () {
  let li = document.querySelector('li');
  if (li === null) {
    return false;
  } else {
    li.remove();
  }
})
