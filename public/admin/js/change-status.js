const buttonStatus = document.querySelectorAll('.status');
const formElement = document.querySelector('.change-status');

buttonStatus.forEach((item) => {
  let status;
  let id;
  let path;
  item.addEventListener('click', () => {
    item.innerHTML === 'Hoạt động' ? status = 'active' : status = 'inactive';
    id = item.getAttribute('id-status');
    path = ` ${formElement.getAttribute('action')}/change-status/${'active'}/${id}`
    console.log(path);
  })
})