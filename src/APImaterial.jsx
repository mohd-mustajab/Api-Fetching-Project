import axios from 'axios';

const API_URL = 'https://gist.githubusercontent.com/mohd-mustajab/cd9abeb6a655fd14b7cfbd46405013fa/raw/f31126e4521d54f83bcb517929e8b0c4cf08cd13/gistfile1.txt';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};