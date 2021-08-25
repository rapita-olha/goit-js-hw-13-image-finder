import imageCardTpl from '../templates/image-card.hbs';
import imageServiceApi from './apiService';
import { searchForm, gallery } from './refs';
const KEY = '22995461-dcfca2d4906f7ecb85a6d619d';

const imageSearchApi = new imageServiceApi(KEY);

searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (e.target.elements.query.value.trim() === '') {
    return;
  }
}

imageSearchApi.searchQuery = '     ';
imageSearchApi.fetchData();
