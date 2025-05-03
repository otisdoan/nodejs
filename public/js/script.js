const resultSearch = document.querySelector('.search');
const page = document.querySelectorAll('.page-item');
var url = new URL(window.location.href);
const inputImage = document.querySelector('.form-control-file');
const imagePreview = document.querySelector('.preview-image');
const cancel = document.querySelector('.cancel');

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
      imagePreview.style.display = 'block';
      cancel.style.opacity = 1;
    }
  })
}

cancel.addEventListener('click', () => {
  inputImage.value = '';
  imagePreview.style.display = 'none';
  cancel.style.opacity = 0;
})

