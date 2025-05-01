const buttonStatus = document.querySelectorAll('.status');
const formElement = document.querySelector('.change-status');
const checkBoxAll = document.querySelector("[name = 'checkall']");
const checkBoxRecord = document.querySelectorAll("[name='id']");
let total = 0;

buttonStatus.forEach((item) => {
  let status;
  let id;
  let path;
  item.addEventListener('click', () => {
    item.innerHTML === 'Hoạt động' ? status = 'inactive' : status = 'active';
    id = item.getAttribute('id-status');
    path = ` ${formElement.getAttribute('data-path')}/change-status/${status}/${id}?_method=PATCH`;
    formElement.action = path;
    formElement.submit();
  })
})

checkBoxAll.addEventListener('click', () => {
  if (checkBoxAll.checked) {
    checkBoxRecord.forEach((item) => {
      item.checked = true;
    })
  } else {
    checkBoxRecord.forEach((item) => {
      item.checked = false;
    })
  }
})

checkBoxRecord.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.checked === true) {
      total--;
    } else {
      item.checked = true;
      total++;
      if (total === checkBoxRecord.length) {
        checkBoxAll.checked = true;
      }
    }
  })
})
