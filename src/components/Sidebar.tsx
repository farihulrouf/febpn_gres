// src/components/Sidebar.tsx
const Sidebar = () => {
    return (
      <div className="bg-gray-200 w-64 h-full p-4 fixed">
        <h2 className="font-bold mb-4">Menu</h2>
        <ul>
          <li>
            <a href="/" className="block text-gray-700 hover:bg-gray-300 p-2 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/data-master" className="block text-gray-700 hover:bg-gray-300 p-2 rounded">
              Data Master
            </a>
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
  