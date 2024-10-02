"use client"; // Menandakan ini adalah Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Mengimpor dari next/navigation
import { loginUser } from '../lib/api'; // Sesuaikan path jika perlu

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter(); // Inisialisasi useRouter

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            const { token } = await loginUser(username, password); // Menggunakan username dan password
            localStorage.setItem('username', username); // Simpan username di localStorage
            localStorage.setItem('token', token); // Simpan token di localStorage
            setSuccessMessage('Login successful!');
            // Navigasi ke halaman dashboard setelah login
            window.location.href = '/'; // Sesuaikan dengan rute dashboard Anda
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
                <h2 className="mb-4 text-lg font-bold">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                <div className="mb-4">
                    <label htmlFor="username" className="block mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded px-3 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded px-3 py-2 w-full"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
