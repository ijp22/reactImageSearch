import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID H729nPdLqgfvAnEw_82-BbUeXqmCdXiS7jfefSJIFhc',
    },
});
