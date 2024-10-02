// src/app/provider/page.tsx
"use client"; // Menandakan ini adalah Client Component

import React, { useEffect, useState } from 'react';
import { createProvider, getProviders, deleteProvider } from '../../lib/api';
import ProviderForm from '../../components/ProviderForm';
import ProviderList from '../../components/ProviderList';

const PenyediaPage = () => {
  const [providers, setProviders] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false); // State untuk mengatur tampilan form
  const token = 'token_jwt_dari_login'; // Ganti dengan token yang didapat dari login

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const data = await getProviders(token);
        setProviders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProviders();
  }, [token]);

  const handleAddProvider = async (providerData: any) => {
    try {
      const newProvider = await createProvider(providerData, token);
      setProviders((prev) => [...prev, newProvider]); // Tambahkan penyedia baru ke daftar
      setShowForm(false); // Sembunyikan form setelah penyedia ditambahkan
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditProvider = (provider: any) => {
    // Anda bisa menambahkan logika edit di sini jika perlu
  };

  const handleDeleteProvider = async (id: string) => {
    try {
      await deleteProvider(id, token); // Panggil API untuk menghapus penyedia
      setProviders((prev) => prev.filter((provider) => provider._id !== id)); // Hapus penyedia dari daftar
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Manajemen Penyedia</h1>
      {!showForm ? (
        <div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4" 
            onClick={() => setShowForm(true)}>
            Tambah Penyedia
          </button>
          <ProviderList providers={providers} onEdit={handleEditProvider} onDelete={handleDeleteProvider} />
        </div>
      ) : (
        <div>
          <ProviderForm onSubmit={handleAddProvider} />
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded mt-4" 
            onClick={() => setShowForm(false)}>
            Kembali ke Daftar
          </button>
        </div>
      )}
    </div>
  );
};

export default PenyediaPage;
