const resultSearch = document.querySelector('input');

if (resultSearch) {
  let url = new URL(window.location.href);
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