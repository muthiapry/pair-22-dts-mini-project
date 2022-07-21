import axios from 'axios';

// const API_KEY = process.env.REACT_APP_TMDB_KEY;
const API_KEY = '68683ee2503eaa161fc0c14530d2096d';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
