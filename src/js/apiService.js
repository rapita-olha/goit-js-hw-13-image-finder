import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

const KEY = '23099958-a9e73d010620c28e46bfb8a54';
export default class imageServiceApi {
  constructor(key) {
    this.query = '';
    this.page = 1;
  }

  async fetchData() {
    const url = `&q=${this.query}&page=${this.page}&per_page=12&key=${KEY}`;
    const {
      data: { hits },
    } = await axios.get(url);
    return hits;
  }

  get searchQuery() {
    return this.query;
  }

  set searchQuery(newQuery) {
    this.query = newQuery;
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }
}
