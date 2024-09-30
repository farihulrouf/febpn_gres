// src/lib/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/contracts';

export const loginUser = async (username, password) => {
 
  try {
    console.log('Login attempt:', username, password); // Menampilkan username dan password yang diinput
    const response = await axios.post(`${API_URL}/login`, {
      username, // Kirimkan email
      password, // Kirimkan password
    });

    return response.data; // Mengembalikan data dari respons
  } catch (error) {
    // Tangani kesalahan
    if (error.response) {
      // Jika respons dari server ada
      throw new Error(error.response.data.message || 'Login failed!');
    } else {
      // Jika tidak ada respons dari server
      throw new Error('Network error: Unable to reach the server');
    }
  }
};
