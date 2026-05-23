import { Link } from 'react-router-dom';
import { getLogo } from '../App';
import { Heart, Mail, MapPin } from 'lucide-react';

const socials = [
  {
    href: 'https://www.instagram.com/alfathtelu/',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/company/al-fathuniversitastelkom/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const strukturLinks = [
  { to: '/profil/pusat', label: 'Pimpinan Pusat' },
  { to: '/profil/departemen-kaderisasi', label: 'Dept. Kaderisasi' },
  { to: '/profil/departemen-syiar', label: 'Dept. Syiar' },
  { to: '/profil/departemen-medkominfo', label: 'Dept. Medkominfo' },
];

const fakultasLinks = [
  { to: '/profil/fakultas-fif', label: 'Fakultas Informatika' },
  { to: '/profil/fakultas-fte', label: 'Fakultas Teknik Elektro' },
  { to: '/profil/fakultas-fri', label: 'Fakultas Rekayasa Industri' },
  { to: '/profil/fakultas-feb', label: 'Fakultas Ekonomi & Bisnis' },
  { to: '/profil/fakultas-fks', label: 'Fakultas Komunikasi & Sosial' },
  { to: '/profil/fakultas-fit', label: 'Fakultas Ilmu Terapan' },
  { to: '/profil/fakultas-fik', label: 'Fakultas Industri Kreatif' },
];

export default function Footer() {
  const logoBase = getLogo('Logo Al-Fath.svg');

  return (
    <footer className="mt-16 relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1.5 gradient-mixed w-full"></div>
      
      <div className="bg-[#EFECE5] border-t border-[#E5E2D8]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-1">
              {logoBase && <img src={logoBase} alt="Logo Al-Fath" className="h-14 w-auto mb-5 drop-shadow-sm" />}
              <h3 className="font-display text-2xl font-bold tracking-wide text-[#7F2020] mb-1">LDK AL-FATH</h3>
              <p className="text-sm text-gray-600 font-medium mb-3">Kabinet Raksa Samarasya</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lembaga Dakwah Kampus Telkom University Generasi ke-13. Murni, Mandiri, dan Independen.
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-gray-500">
                <MapPin className="w-3 h-3 text-[#7F2020]" />
                <span className="text-[11px] font-medium">Bandung, Jawa Barat</span>
              </div>
            </div>

            {/* Struktur */}
            <div>
              <h4 className="font-display text-xl font-bold text-[#7F2020] mb-6 flex items-center gap-3">
                <span className="w-6 h-1 gradient-hero rounded-full"></span> Struktur Pusat
              </h4>
              <ul className="space-y-3 font-ui">
                {strukturLinks.map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm font-medium text-gray-600 hover:text-[#7F2020] transition-all hover:translate-x-1 inline-block">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fakultas */}
            <div>
              <h4 className="font-display text-xl font-bold text-[#15803D] mb-6 flex items-center gap-3">
                <span className="w-6 h-1 gradient-green rounded-full"></span> Komisariat Fakultas
              </h4>
              <ul className="space-y-3 font-ui">
                {fakultasLinks.map(l => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm font-medium text-gray-600 hover:text-[#15803D] transition-all hover:translate-x-1 inline-block">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sosial Media */}
            <div>
              <h4 className="font-display text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="w-6 h-1 bg-gray-400 rounded-full"></span> Terhubung
              </h4>
              <div className="flex flex-col gap-3 font-ui">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#7F2020] transition-all hover:translate-x-1 group">
                    <span className="p-2 rounded-xl bg-gray-200 group-hover:bg-red-100 group-hover:text-[#7F2020] transition-colors">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
                <a href="mailto:ldkalfath@telkomuniversity.ac.id" className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#7F2020] transition-all hover:translate-x-1 group">
                  <span className="p-2 rounded-xl bg-gray-200 group-hover:bg-red-100 group-hover:text-[#7F2020] transition-colors"><Mail className="w-4 h-4" /></span>
                  Email Resmi
                </a>
              </div>

              <div className="mt-6 p-4 rounded-xl border border-gray-200 bg-white/40 shadow-sm">
                <p className="text-xs text-[#7F2020] font-bold italic leading-relaxed text-center">
                  "#Gagah Gempita, Rangkul Bersama"
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs font-semibold text-gray-500 flex items-center gap-1">
              &copy; {new Date().getFullYear()} LDK Al-Fath Telkom University. Built with <Heart className="w-3 h-3 text-[#7F2020] fill-[#7F2020]" />
            </p>
            <p className="text-xs font-semibold text-gray-500">Kabinet Raksa Samarasya — Gen 13</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
