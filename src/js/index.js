import '../styles.css';
import imageCardTpl from '../templates/image-card.hbs';
import ImageServiceApi from './apiService';
import { searchForm, gallery, loadMoreBtn } from './refs';

const imgServiceApi = new ImageServiceApi();

searchForm.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

async function onSubmit(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  const value = e.target.elements.query.value.trim();
  imgServiceApi.searchQuery = value;
  if (value === '') {
    alert('Please, enter your request!');
  } else {
    imgServiceApi.resetPage();
    const data = await imgServiceApi.fetchData();
    renderImages(data);
  }
}

function renderImages(data) {
  gallery.insertAdjacentHTML('beforeend', imageCardTpl(data));
}

async function onLoadMoreClick(e) {
  imgServiceApi.incrementPage();
  const data = await imgServiceApi.fetchData();
  renderImages(data);

  // const element = document.getElementById('.my-element-selector');
  gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
