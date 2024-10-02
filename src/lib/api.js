// src/lib/api.js
import axios from 'axios';

// URL dasar untuk API
const API_URL = 'http://localhost:3000/api/contracts';

// Fungsi untuk login pengguna
export const loginUser = async (username, password) => {
  try {
    console.log('Login attempt:', username, password); // Menampilkan username dan password yang diinput
    const response = await axios.post(`${API_URL}/login`, {
      username, // Kirimkan username
      password, // Kirimkan password
    });

    return response.data; // Mengembalikan data dari respons
  } catch (error) {
    // Tangani kesalahan
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed!');
    } else {
      throw new Error('Network error: Unable to reach the server');
    }
  }
};

// Fungsi untuk membuat penyedia baru
export const createProvider = async (providerData, token) => {
  try {
    const response = await axios.post(`${API_URL}/providers`, providerData, {
      headers: {
        Authorization: `Bearer ${token}`, // Menambahkan token di header untuk otorisasi
      },
    });

    return response.data; // Mengembalikan data dari respons
  } catch (error) {
    // Tangani kesalahan
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to create provider!');
    } else {
      throw new Error('Network error: Unable to reach the server');
    }
  }
};

// Fungsi untuk mendapatkan daftar penyedia
export const getProviders = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/providers`, {
      headers: {
        Authorization: `Bearer ${token}`, // Menambahkan token di header untuk otorisasi
      },
    });

    return response.data; // Mengembalikan data dari respons
  } catch (error) {
    // Tangani kesalahan
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch providers!');
    } else {
      throw new Error('Network error: Unable to reach the server');
    }
  }
};

// Fungsi untuk menghapus penyedia
export const deleteProvider = async (id, token) => {
  console.log("Token:", token);
  console.log("Deleting provider with ID:", id);
  try {
    const response = await axios.delete(`${API_URL}/providers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    console.log("Response status:", response.status);
    console.log("Response data:", response.data);
    
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response status:", error.response.status);
      console.error("Error response data:", error.response.data);
      throw new Error(error.response.data.message || 'Failed to delete provider!');
    } else {
      throw new Error('Network error: Unable to reach the server');
    }
  }
};
