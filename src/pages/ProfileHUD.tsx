import { useParams } from 'react-router-dom';
import { getProkersForStructure } from '../utils/parser';
import { CheckCircle2, Target, CalendarDays } from 'lucide-react';
import logoFEB from '../assets/logo/Logo Al-Fath FEB.svg';
import logoFIF from '../assets/logo/Logo Al-Fath FIF.svg';
import logoFIK from '../assets/logo/Logo Al-Fath FIK.svg';
import logoFIT from '../assets/logo/Logo Al-Fath FIT.svg';
import logoFKS from '../assets/logo/Logo Al-Fath FKS.svg';
import logoFRI from '../assets/logo/Logo Al-Fath FRI.svg';
import logoFTE from '../assets/logo/Logo Al-Fath FTE.svg';

// Import images
const images = import.meta.glob('/src/assets/profil/*.webp', { import: 'default', eager: true });
const getImg = (filename: string) => {
  const match = Object.keys(images).find(k => k.includes(filename));
  return match ? (images[match] as string) : '';
};

const structureMap: Record<string, any> = {
  'pusat': {
    title: 'Pimpinan Pusat',
    accent: 'var(--color-brand-red)',
    ikhwan: { title: 'Ketua Umum', img: getImg('Ketua Umum.webp') },
    akhwat: { title: 'Koordinasi Akhwat', img: getImg('Koordinasi Akhwat.webp') },
    prokerFiles: ['proker-inti']
  },
  'sekretaris-jendral': {
    title: 'Sekretaris Jendral',
    accent: '#1F2937', // Dark Gray
    ikhwan: { title: 'Sekretaris Jendral', img: getImg('Sekretaris Jendral.webp') },
    prokerFiles: ['proker-sekjen']
  },
  'biro-kesekretariatan': {
    title: 'Biro Kesekretariatan',
    accent: '#1F2937', // Dark Gray
    ikhwan: { title: 'Kepala Biro', img: getImg('Kepala Biro Kesekretariatan.webp') },
    akhwat: { title: 'Sekretaris Biro', img: getImg('Sekretaris Biro Kesekretariatan.webp') },
    prokerFiles: ['proker-biro-kesekretariatan']
  },
  'biro-keuangan': {
    title: 'Biro Keuangan',
    accent: '#1F2937', // Dark Gray
    ikhwan: { title: 'Kepala Biro', img: getImg('Kepala Biro Keuangan.webp') },
    akhwat: { title: 'Sekretaris Biro', img: getImg('Sekretaris Biro Keuangan.webp') },
    prokerFiles: ['proker-biro-keuangan']
  },
  'departemen-kaderisasi': {
    title: 'Departemen Kaderisasi Pusat',
    accent: '#1F2937', // Dark Gray
    ikhwan: { title: 'Kepala Dept. Kaderisasi', img: getImg('Kepala Dept Kaderisasi Pusat.webp') },
    akhwat: { title: 'Sekretaris Dept. Kaderisasi', img: getImg('Sekretaris Dept Kaderisasi Pusat.webp') },
    prokerFiles: ['proker-kaderisasi-pusat']
  },
  'departemen-syiar': {
    title: 'Departemen Syiar Pusat',
    accent: '#1F2937', // Dark Gray
    ikhwan: { title: 'Kepala Dept. Syiar', img: getImg('Kepala Dept Syiar.webp') },
    akhwat: { title: 'Sekretaris Dept. Syiar', img: getImg('Sekretaris Dept Syiar.webp') },
    prokerFiles: ['proker-syiar-pusat']
  },
  'departemen-medkominfo': {
    title: 'Departemen Medkominfo Pusat',
    accent: '#1F2937', // Dark Gray
    ikhwan: { title: 'Kepala Dept. Medkominfo', img: getImg('Kepala Dept Medkominfo.webp') },
    akhwat: { title: 'Sekretaris Dept. Medkominfo', img: getImg('Sekretaris Dept Medkominfo.webp') },
    prokerFiles: ['proker-medkominfo-pusat']
  },
  'fakultas-feb': {
    title: 'Fakultas Ekonomi dan Bisnis',
    accent: '#0D9488', // Toska / Cyan
    logo: logoFEB,
    ikhwan: { title: "Mas'ul FEB", img: getImg("Mas'Ul Fakultas Ekonomi dan Bisnis.webp") },
    akhwat: { title: "Korwat FEB", img: getImg("Koordinasi Akhwat Fakultas Ekonomi dan Bisnis.webp") },
    prokerFiles: ['proker-fakultas-feb']
  },
  'fakultas-fit': {
    title: 'Fakultas Ilmu Terapan',
    accent: '#84CC16', // Hijau Muda
    logo: logoFIT,
    ikhwan: { title: "Mas'ul FIT", img: getImg("Mas'Ul Fakultas Ilmu Terapan.webp") },
    akhwat: { title: "Korwat FIT", img: getImg("Koordinasi Akhwat Fakultas Ilmu Terapan.webp") },
    prokerFiles: ['proker-fakultas-fit']
  },
  'fakultas-fif': {
    title: 'Fakultas Informatika',
    accent: '#EAB308', // Kuning
    logo: logoFIF,
    ikhwan: { title: "Mas'ul FIF", img: getImg("Mas'Ul Fakultas Informatika.webp") },
    akhwat: { title: "Korwat FIF", img: getImg("Koordinasi Akhwat Fakultas Informatika.webp") },
    prokerFiles: ['proker-fakultas-fif']
  },
  'fakultas-fik': {
    title: 'Fakultas Industri Kreatif',
    accent: '#F97316', // Jingga / Orange
    logo: logoFIK,
    ikhwan: { title: "Mas'ul FIK", img: getImg("Mas'Ul Fakultas Industri Kreatif.webp") },
    akhwat: { title: "Korwat FIK", img: getImg("Koordinasi Akhwat Fakultas Industri Kreatif.webp") },
    prokerFiles: ['proker-fakultas-fik']
  },
  'fakultas-fks': {
    title: 'Fakultas Komunikasi dan Ilmu Sosial',
    accent: '#9333EA', // Ungu
    logo: logoFKS,
    ikhwan: { title: "Mas'ul FKS", img: getImg("Mas'Ul Fakultas Komunikasi dan Ilmu Sosial.webp") },
    akhwat: { title: "Koordinator Akhwat FKS", img: getImg("Koordinasi Akhwat Fakultas Komunikasi dan Ilmu Sosial.webp") },
    prokerFiles: ['proker-fakultas-fkb']
  },
  'fakultas-fri': {
    title: 'Fakultas Rekayasa Industri',
    accent: '#166534', // Hijau Tua
    logo: logoFRI,
    ikhwan: { title: "Mas'ul FRI", img: getImg("Mas'Ul Fakultas Rekayasa Industri.webp") },
    akhwat: { title: "Koordinator Akhwat FRI", img: getImg("Koordinasi Akhwat Fakultas Rekayasa Industri.webp") },
    prokerFiles: ['proker-fakultas-fri']
  },
  'fakultas-fte': {
    title: 'Fakultas Teknik Elektro',
    accent: '#2563EB', // Biru
    logo: logoFTE,
    ikhwan: { title: "Mas'ul FTE", img: getImg("Mas'Ul Fakultas Teknik Elektro.webp") },
    akhwat: { title: "Koordinator Akhwat FTE", img: getImg("Koordinasi Akhwat Fakultas Teknik Elektro.webp") },
    prokerFiles: ['proker-fakultas-fte']
  }
};

export default function ProfileHUD() {
  const { struktur } = useParams<{ struktur: string }>();
  const data = struktur ? structureMap[struktur] : null;

  if (!data) return <div className="text-center py-20 text-2xl font-bold">Struktur tidak ditemukan.</div>;

  const prokers = getProkersForStructure(data.prokerFiles);

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Header Panel */}
      <div className="w-full relative glass-dark py-16 text-center border-b-8 flex flex-col items-center justify-center" style={{ borderColor: data.accent }}>
        {data.logo && (
          <img src={data.logo} alt={`Logo ${data.title}`} className="h-28 md:h-36 w-auto mb-6 drop-shadow-xl" />
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg mb-2">{data.title}</h1>
        <p className="text-xl text-[var(--color-brand-olive)] font-medium">LDK Al-Fath Telkom University</p>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        
        {/* Dual-Leadership Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10" style={{ color: data.accent }}>
            DUAL-LEADERSHIP
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Ikhwan */}
            <div className="glass rounded-3xl overflow-hidden w-full max-w-sm transform transition hover:scale-105 shadow-2xl border-2" style={{ borderColor: data.accent }}>
              <div className="aspect-[3/4] bg-white relative">
                {data.ikhwan.img ? (
                  <img src={data.ikhwan.img} alt={data.ikhwan.title} className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300">No Image</div>
                )}
              </div>
              <div className="p-4 text-center text-white font-bold text-lg" style={{ backgroundColor: data.accent }}>
                {data.ikhwan.title}
              </div>
            </div>
            
            {/* Divider Icon */}
            {data.akhwat && (
              <div className="hidden md:flex flex-col items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.accent }}></div>
                <div className="w-1 h-12" style={{ backgroundColor: data.accent }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.accent }}></div>
              </div>
            )}

            {/* Akhwat */}
            {data.akhwat && (
              <div className="glass rounded-3xl overflow-hidden w-full max-w-sm transform transition hover:scale-105 shadow-2xl border-2" style={{ borderColor: data.accent }}>
                <div className="aspect-[3/4] bg-white relative">
                  {data.akhwat.img ? (
                    <img src={data.akhwat.img} alt={data.akhwat.title} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">No Image</div>
                  )}
                </div>
                <div className="p-4 text-center text-white font-bold text-lg" style={{ backgroundColor: data.accent }}>
                  {data.akhwat.title}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Interactive Editorial Flow for Proker */}
        <div className="mt-20">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-wide text-center">
              Program Kerja
            </h2>
            <div className="w-24 h-1 rounded-full" style={{ backgroundColor: data.accent }}></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-24">
            {prokers.map((proker, i) => (
              <div key={i} className="relative group">
                {/* Number Indicator */}
                <div className="absolute right-full top-0 mr-6 text-6xl md:text-7xl font-display font-bold text-gray-200 opacity-50 select-none transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-2 hidden md:block" style={{ color: data.accent }}>
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                
                <div className="pl-0 md:pl-10 md:border-l-4 border-gray-200 transition-colors duration-500" style={{ borderLeftColor: 'transparent', transition: 'border-color 0.5s' }} onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = data.accent)} onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = '#E5E7EB')}>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-0 transition-colors" style={{ color: data.accent }}>
                      {proker.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-gray-500">
                      <CalendarDays className="w-4 h-4" />
                      {proker.waktu}
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed font-light" dangerouslySetInnerHTML={{__html: proker.deskripsi}}></p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="font-display text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5" style={{ color: data.accent }} /> Indikator Keberhasilan
                      </h4>
                      <ul className="space-y-3">
                        {proker.indikator.map((ind, j) => (
                          <li key={j} className="flex items-start gap-3 text-gray-600">
                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium" dangerouslySetInnerHTML={{__html: ind}}></span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/60 p-6 rounded-2xl border border-white shadow-sm backdrop-blur-sm relative overflow-hidden group-hover:shadow-md transition-shadow">
                      <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: data.accent }}></div>
                      <h4 className="font-display text-xl font-bold mb-3" style={{ color: data.accent }}>Dampak Strategis</h4>
                      <p className="text-gray-800 font-semibold leading-relaxed" dangerouslySetInnerHTML={{__html: proker.dampak}}></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {prokers.length === 0 && (
              <div className="text-center py-20 text-gray-500 text-xl font-light">Belum ada data program kerja.</div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

