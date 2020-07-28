const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

const forms = document.forms;
// console.log(forms);
// console.log(forms['add-book']);

// Array.from(forms).forEach(function(form){
//   console.log(form);
// });

const addForm = forms['add-book'];
addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content
  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  // add styles
  deleteBtn.classList.add('delete');
  bookName.classList.add('name');

  // Append to document
  // NOTE: Order of appending matters
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// Search functionality - filter books
