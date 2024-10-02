// src/components/ProviderForm.tsx
import React, { useState, useEffect } from 'react';
import { createProvider } from '../lib/api'; // Import fungsi createProvider

interface ProviderFormProps {
  onSubmit: (data: { npwp: string; nama: string; alamat: string; notel: string; deskripsi: string; token: string }) => void;
}

const ProviderForm: React.FC<ProviderFormProps> = ({ onSubmit }) => {
  const [npwp, setNpwp] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [notel, setNotel] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [token, setToken] = useState<string | null>(null); // State untuk token
  const [error, setError] = useState(''); // State untuk menyimpan error

  useEffect(() => {
    const storedToken = localStorage.getItem('token'); // Mengambil token dari localStorage
    console.log('Stored Token:', storedToken); // Menampilkan token di konsol
    if (storedToken) {
      setToken(storedToken); // Menyimpan token ke dalam state
    } else {
      console.error('Token tidak ditemukan di localStorage'); // Menampilkan pesan jika token tidak ditemukan
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (token) { // Pastikan token ada
      try {
        // Membuat objek data penyedia
        const providerData = { npwp, nama, alamat, notel, deskripsi, token }; // Sertakan token
        await createProvider(providerData, token); // Panggil fungsi createProvider
        onSubmit(providerData); // Mengirimkan data ke parent
        // Reset form setelah pengiriman
        setNpwp('');
        setNama('');
        setAlamat('');
        setNotel('');
        setDeskripsi('');
      } catch (err) {
        setError((err as Error).message); // Menangani kesalahan
      }
    } else {
      console.error('Token tidak ditemukan'); // Menginformasikan jika token tidak ada
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      {error && <p className="text-red-500">{error}</p>} {/* Menampilkan error jika ada */}
      <div>
        <label>NPWP:</label>
        <input
          type="text"
          value={npwp}
          onChange={(e) => setNpwp(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Nama:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Alamat:</label>
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Nomor Telepon:</label>
        <input
          type="text"
          value={notel}
          onChange={(e) => setNotel(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label>Deskripsi:</label>
        <textarea
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">
        Tambah Penyedia
      </button>
    </form>
  );
};

export default ProviderForm;
