const buttonStatus = document.querySelectorAll('.status');
const formElement = document.querySelector('.change-status');

buttonStatus.forEach((item) => {
  let status;
  let id;
  let path;
  item.addEventListener('click', () => {
    item.innerHTML === 'Hoạt động' ? status = 'inactive' : status = 'active';
    id = item.getAttribute('id-status');
    path = ` ${formElement.getAttribute('data-path')}/change-status/${status}/${id}`;
    formElement.action = path;
    formElement.submit();
  })
})