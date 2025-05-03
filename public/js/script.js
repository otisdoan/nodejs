const resultSearch = document.querySelector('.search');
const page = document.querySelectorAll('.page-item');
var url = new URL(window.location.href);

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