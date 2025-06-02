const SERVER = import.meta.env.VITE_SERVER_URL || 'http://localhost:7000';
import axios from 'axios';

const API = axios.create({
  baseURL: SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const sendEmail = async (name, email, message) => {
  try {
    const response = await API.post('/api/sendEmail', {
      name,
      email,
      message,
    });
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error.response ? error.response.data : new Error('Network error');
  }
}