import axios from 'axios';

export const createPost = async (formData: any) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create data');
  }
};