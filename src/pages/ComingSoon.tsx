import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, Construction } from 'lucide-react';

export default function ComingSoon() {
  const location = useLocation();
  
  // Format the path into a readable title
  const pathParts = location.pathname.split('/').filter(Boolean);
  const titleText = pathParts.length > 0 
    ? pathParts[pathParts.length - 1].replace(/-/g, ' ') 
    : 'Fitur Baru';

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F6F3EB] px-4 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7F2020] opacity-[0.03] rounded-full blur-3xl"></div>
      
      <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 text-center border border-gray-100 relative z-10">
        <div className="w-24 h-24 bg-[#7F2020]/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <Construction className="w-12 h-12 text-[#7F2020]" />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shadow-sm animate-bounce">
            <Compass className="w-5 h-5 text-yellow-600" />
          </div>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 capitalize">
          {titleText}
        </h1>
        <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-black tracking-widest uppercase mb-6">
          Dalam Tahap Pengembangan
        </div>
        
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
          Mohon bersabar, halaman ini sedang dalam tahap perancangan dan akan segera hadir dengan fitur yang luar biasa untuk Anda!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#7F2020] text-white font-bold hover:bg-[#5a1717] transition-all shadow-lg hover:shadow-xl">
            <Home className="w-4 h-4" /> Kembali ke Beranda
          </Link>
          <button onClick={() => window.history.back()} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-gray-200 text-gray-700 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all">
            Halaman Sebelumnya
          </button>
        </div>
      </div>
    </div>
  );
}
