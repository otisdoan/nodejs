const resultSearch = document.querySelector('.search');
const page = document.querySelectorAll('.page-item');
var url = new URL(window.location.href);
const inputImage = document.querySelector('.form-control-file');
const imagePreview = document.querySelector('.preview-image');
const cancel = document.querySelector('.cancel');
const editButton = document.querySelectorAll('.update');
const formEdit = document.querySelector('.form-edit');

if (resultSearch) {
  resultSearch.addEventListener('change', (e) => {
    e.preventDefault();
    if (e.target.value) {
      url.searchParams.set('searchs', e.target.value)
    } else {
      url.searchParams.delete('searchs');
    }
    window.location.href = url.href;
  })
}

page.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    url.searchParams.set('page', e.target.innerHTML)
    window.location.href = url.href;
  })
})

if (inputImage) {
  inputImage.addEventListener('change', (e) => {
    const [file] = e.target.files
    if (file) {
      imagePreview.src = URL.createObjectURL(file);
      cancel.style.opacity = 1;
    }
  })
}

cancel.addEventListener('click', () => {
  inputImage.value = '';
  imagePreview.src = ''
  cancel.style.opacity = 0;
})

editButton.forEach((item) => {
  let path;
  item.addEventListener('click', (e) => {
    e.preventDefault();
    path = `${formEdit.getAttribute('action')}/${window.location.pathname.split('/').pop()}?_method=PATCH`;
    formEdit.action = path;
    formEdit.submit();
  })
})

