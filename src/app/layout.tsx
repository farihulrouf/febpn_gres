// src/app/layout.tsx
"use client"; // Menandakan ini adalah Client Component

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import './globals.css';
import { usePathname } from 'next/navigation'; // Import hook untuk mendapatkan pathname

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname(); // Mengambil pathname saat ini

  return (
    <html lang="en">
      <body>
        {/* Hanya render Navbar dan Sidebar jika bukan di halaman login */}
        {pathname !== '/login' && (
          <>
            <Navbar />
            <Sidebar />
          </>
        )}
        <main className={pathname === '/login' ? 'flex justify-center items-center h-screen' : 'ml-64 p-4'}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
