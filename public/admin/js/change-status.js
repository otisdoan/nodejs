const buttonStatus = document.querySelectorAll('.status');
const formElement = document.querySelector('.change-status');
const checkBoxAll = document.querySelector("[name = 'checkall']");
const checkBoxRecord = document.querySelectorAll("[name='id']");
const formChangeMulti = document.querySelector("[name='form-change-multi']");
const inputFormChangeMulti = document.querySelector("[name='ids']");
const buttonChangeMulti = document.querySelector("[name='button-change-multi']");
const buttonDelete = document.querySelectorAll('.btn.btn-danger.delete');
const formDelete = document.querySelector('.delete-product');
const sort = document.querySelector("[name='sort']");
const sortClear = document.querySelector('[sort-clear]');


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
    const countChecked = document.querySelectorAll("input[name='id']:checked").length;
    if (countChecked === checkBoxRecord.length) {
      checkBoxAll.checked = true;
    } else {
      checkBoxAll.checked = false;
    }
  })
})

buttonChangeMulti.addEventListener('click', (e) => {
  e.preventDefault();
  const checkedProducts = document.querySelectorAll("input[name='id']:checked");
  let ids = [];
  if (checkedProducts.length > 0) {
    checkedProducts.forEach((item) => {
      ids.push(item.value);
    })
  }
  inputFormChangeMulti.value = ids.join(', ');
  formChangeMulti.submit();
})

buttonDelete.forEach((item) => {
  item.addEventListener('click', () => {
    let path = `${formDelete.getAttribute('data-path')}/delete/${item.getAttribute('data-id')}?_method=DELETE`;
    formDelete.action = path;
    formDelete.submit();
  })
})

sort.addEventListener('change', (e) => {
  const [key, value] = e.target.value.split('-');
  let path = new URL(window.location.href);
  path.searchParams.set('sortKey', key);
  path.searchParams.set('sortValue', value);
  window.location.href = path.href;
})

sortClear.addEventListener('click', () => {
  let path = new URL(window.location.href);
  path.searchParams.delete('sortKey');
  path.searchParams.delete('sortValue');
  window.location.href = path.href;
})