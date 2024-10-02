interface Provider {
  _id: string;
  npwp: string;
  nama: string;
  alamat: string;
  notel: string;
  deskripsi: string;
}

interface ProviderListProps {
  providers: Provider[];
  onEdit: (provider: Provider) => void;
  onDelete: (id: string) => void;
}

const ProviderList: React.FC<ProviderListProps> = ({ providers, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-100 border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 border text-left text-black">NPWP</th>
            <th className="py-2 border text-left text-black">Nama</th>
            <th className="py-2 border text-left text-black">Alamat</th>
            <th className="py-2 border text-left text-black">No. Telepon</th>
            <th className="py-2 border text-left text-black">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {providers.map(provider => (
            <tr key={provider._id} className="hover:bg-gray-300">
              <td className="border px-4 py-2 text-black">{provider.npwp}</td>
              <td className="border px-4 py-2 text-black">{provider.nama}</td>
              <td className="border px-4 py-2 text-black">{provider.alamat}</td>
              <td className="border px-4 py-2 text-black">{provider.notel}</td>
              <td className="border px-4 py-2">
                <button 
                  onClick={() => onEdit(provider)} 
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(provider._id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded">
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProviderList;
