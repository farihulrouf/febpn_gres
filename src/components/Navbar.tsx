import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null); // State untuk menyimpan username
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Referensi untuk dropdown

  useEffect(() => {
    // Ambil username dari local storage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Logika untuk logout, seperti menghapus token dan username dari localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username'); // Menghapus username juga saat logout
    // Arahkan ke halaman login setelah logout
    window.location.href = '/login';
  };

  // Effect untuk menangani klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold">My Next App</div>
        {username ? ( // Jika username ada, tampilkan dropdown
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
              {username} ▼
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Setting
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Jika tidak ada username, tampilkan link ke login
          <Link
            href="/login"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
