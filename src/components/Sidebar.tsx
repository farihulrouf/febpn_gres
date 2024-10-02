import { useState } from 'react';

const Sidebar = () => {
  // State untuk melacak apakah submenu "Data Master" terbuka
  const [isDataMasterOpen, setIsDataMasterOpen] = useState(false);

  // Fungsi untuk toggle submenu "Data Master"
  const toggleDataMaster = () => {
    setIsDataMasterOpen(!isDataMasterOpen);
  };

  return (
    <div className="bg-gray-200 w-64 h-full p-4 fixed">
      <h2 className="font-bold mb-4">Menu</h2>
      <ul>
        <li>
          <a href="/" className="block text-gray-700 hover:bg-gray-300 p-2 rounded">
            Dashboard
          </a>
        </li>

        {/* Menu Data Master */}
        <li>
          <button 
            onClick={toggleDataMaster} 
            className="block text-gray-700 hover:bg-gray-300 p-2 rounded w-full text-left">
            Data Master {isDataMasterOpen ? '▲' : '▼'}
          </button>

          {/* Submenu untuk Data Master */}
          {isDataMasterOpen && (
            <ul className="ml-4 mt-2">
              <li>
                <a href="/provider" className="block text-gray-700 hover:bg-gray-300 p-2 rounded">
                  Data Penyedia
                </a>
              </li>
              <li>
                <a href="/satuan-kerja" className="block text-gray-700 hover:bg-gray-300 p-2 rounded">
                  Data Satuan Kerja
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a href="/monitoring" className="block text-gray-700 hover:bg-gray-300 p-2 rounded">
            Monitoring
          </a>
        </li>
        <li>
          <a href="/penyedia" className="block text-gray-700 hover:bg-gray-300 p-2 rounded">
            Penyedia
          </a>
        </li>
        <li>
          <a href="/laporan" className="block text-gray-700 hover:bg-gray-300 p-2 rounded">
            Laporan
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
