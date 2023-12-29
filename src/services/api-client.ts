import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c4e5e95d970c484698000476a96e47df',
  },
});
