import axios from 'axios';

const openPosts = axios.create({
  baseURL: 'http://my-json-server.typicode.com/tpatel29/DatabaseFile/posts',
});

const getPosts = async () => {
  try {
    const response = await openPosts.get("");
    console.log(response.data);
    return response.data;

  } catch (error) {
    console.error('Error making API Request', error);
    throw error;
  }
};

export default { getPosts }
