import '../styles.css';
import imageCardTpl from '../templates/image-card.hbs';
import imageSearchApi from '../templates/image-card.hbs';
import imageServiceApi from './apiService';
import { searchForm, gallery, loadMoreBtn } from './refs';
const KEY = '23099958-a9e73d010620c28e46bfb8a54';
const BASE_URL = 'https://pixabay.com/api/?';

searchForm.addEventListener('submit', onSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreClick);

async function onSubmit(e) {
  e.preventDefault();
  const value = e.target.elements.query.value.trim();
  if (value === '') {
    return;
  }

  imageSearchApi.resetPage();

  imageSearchApi.searchQuery = value;
  const data = await imageSearchApi.fetchData();
  renderImages(data);
  imageSearchApi.incrementPage();
}

function renderImages(data) {
  gallery.insertAdjacentHTML('beforeend', imageCardTpl(data));
}

async function onLoadMoreClick(e) {
  imageSearchApi.incrementPage();
  const data = await imageSearchApi.fetchData();
  renderImages(data);

  // const element = document.getElementById('.my-element-selector');
  gallery.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
