import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, Users, Megaphone, MonitorSmartphone, Home, Briefcase, Wallet, Calendar, Image, CalendarCheck, FileText, BookOpen } from 'lucide-react';
import logo from '../assets/logo/Logo Al-Fath.svg';

const level1 = [
  { id: 'pusat', label: 'Pimpinan Pusat', icon: Building2, desc: 'Ketua Umum & Koordinasi Akhwat' }
];

const level2 = [
  { id: 'biro-kesekretariatan', label: 'Biro Kesekretariatan', icon: Briefcase, desc: 'Administrasi & Dokumen' },
  { id: 'biro-keuangan', label: 'Biro Keuangan', icon: Wallet, desc: 'Keuangan & Anggaran' }
];

const level3 = [
  { id: 'sekretaris-jendral', label: 'Sekretaris Jendral', icon: Users, desc: 'Koordinator Lapangan' },
  { id: 'departemen-kaderisasi', label: 'Dept. Kaderisasi', icon: Users, desc: 'Pembinaan Anggota' },
  { id: 'departemen-syiar', label: 'Dept. Syiar', icon: Megaphone, desc: 'Dakwah Eksternal' },
  { id: 'departemen-medkominfo', label: 'Dept. Medkominfo', icon: MonitorSmartphone, desc: 'Media & Digital' }
];

const fakultas = [
  { id: 'fakultas-fif', label: 'FIF', full: 'Fakultas Informatika' },
  { id: 'fakultas-fte', label: 'FTE', full: 'Fakultas Teknik Elektro' },
  { id: 'fakultas-fri', label: 'FRI', full: 'Fakultas Rekayasa Industri' },
  { id: 'fakultas-feb', label: 'FEB', full: 'Fakultas Ekonomi & Bisnis' },
  { id: 'fakultas-fks', label: 'FKS', full: 'Fakultas Komunikasi & Sosial' },
  { id: 'fakultas-fit', label: 'FIT', full: 'Fakultas Ilmu Terapan' },
  { id: 'fakultas-fik', label: 'FIK', full: 'Fakultas Industri Kreatif' },
];

const socials = [
  {
    href: 'https://www.instagram.com/alfathtelu/',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/company/al-fathuniversitastelkom/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const sopFiles = [
  { id: 'administrasi', label: 'SOP Administrasi', path: '/sop/administrasi' },
  { id: 'keuangan', label: 'SOP Keuangan', path: '/sop/keuangan' },
  { id: 'kaderisasi', label: 'SOP Kaderisasi', path: '/sop/kaderisasi' },
  { id: 'syiar', label: 'SOP Syiar', path: '/sop/syiar' },
  { id: 'medkominfo', label: 'SOP Medkominfo', path: '/sop/medkominfo' },
];

const pengaduanFiles = [
  { id: 'alfath-mendengar', label: 'Al-Fath Mendengar', path: '/pengaduan/alfath-mendengar' },
  { id: 'saran-masukan', label: 'Saran dan Masukan', path: '/pengaduan/saran-masukan' },
  { id: 'laporan-terbuka', label: 'Laporan Terbuka', path: '/pengaduan/laporan-terbuka' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [strukturOpen, setStrukturOpen] = useState(false);
  const [sopOpen, setSopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sopDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setStrukturOpen(false);
    setSopOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStrukturOpen(false);
      }
      if (sopDropdownRef.current && !sopDropdownRef.current.contains(e.target as Node)) {
        setSopOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');
  const linkColor = (active: boolean) =>
    active ? 'text-[#7F2020]' : scrolled ? 'text-[#F6F3EB]/80 hover:text-[#F6F3EB]' : 'text-gray-700 hover:text-gray-900';

  return (
    <>
      <header className={`font-ui sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'glass-dark shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* LEFT: Logo & Text */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              {logo && (
                <img src={logo} alt="LDK Al-Fath" className="h-12 lg:h-14 w-auto group-hover:scale-105 transition-transform drop-shadow-md" />
              )}
              <div className="flex flex-col">
                <span className={`font-kufi font-black text-xl lg:text-2xl tracking-wide leading-none ${scrolled ? 'text-[#F6F3EB]' : 'text-gray-900'}`}>
                  AL-FATH
                </span>
                <span className={`font-bold text-[9px] lg:text-[10px] tracking-[0.2em] uppercase mt-0.5 ${scrolled ? 'text-[#C9CAAC]' : 'text-[#7F2020]'}`}>
                  Lembaga Dakwah Kampus
                </span>
              </div>
            </Link>

            {/* CENTER: Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-1 px-4">
              <Link to="/" className={`nav-link px-4 ${linkColor(isActive('/') && location.pathname === '/')}`}>
                <span className="flex items-center gap-1.5"><Home className="w-3.5 h-3.5" />Beranda</span>
              </Link>

              {/* Struktur Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setStrukturOpen(!strukturOpen)}
                  className={`nav-link px-4 flex items-center gap-1 ${linkColor(isActive('/profil'))}`}
                >
                  <Users className="w-3.5 h-3.5" />
                  Struktur
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${strukturOpen ? 'rotate-180' : ''}`} />
                </button>

                {strukturOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[560px] glass rounded-3xl shadow-2xl overflow-hidden border border-white/40 backdrop-blur-xl" style={{ animation: 'fade-in-up 0.2s ease-out' }}>
                    <div className="h-1 bg-gradient-to-r from-[#7F2020] via-[#869B7E] to-[#7F2020] w-full" style={{ backgroundSize: '200% auto', animation: 'gradient-shift 3s ease infinite' }}></div>
                    <div className="flex flex-col md:flex-row">
                      {/* Left Side: Pusat & Dept */}
                      <div className="md:w-1/2 p-5 border-r border-gray-100/50 bg-white/40">
                        <h4 className="font-display text-lg font-bold text-[#7F2020] mb-4">Pimpinan & Dept</h4>
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 ml-1">Strategis</p>
                            {[...level1, ...level2].map(s => (
                              <Link key={s.id} to={`/profil/${s.id}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all group">
                                <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-[#7F2020]/5 transition-colors shadow-sm">
                                  <s.icon className="w-4 h-4 text-gray-400 group-hover:text-[#7F2020]" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-gray-800 group-hover:text-[#7F2020] transition-colors">{s.label}</p>
                                  <p className="text-[10px] text-gray-500">{s.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="space-y-1">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 ml-1">Operasional</p>
                            {level3.map(s => (
                              <Link key={s.id} to={`/profil/${s.id}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all group">
                                <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-[#869B7E]/5 transition-colors shadow-sm">
                                  <s.icon className="w-4 h-4 text-gray-400 group-hover:text-[#869B7E]" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-gray-800 group-hover:text-[#869B7E] transition-colors">{s.label}</p>
                                  <p className="text-[10px] text-gray-500">{s.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Fakultas */}
                      <div className="md:w-1/2 p-5 bg-white/20">
                        <h4 className="font-display text-lg font-bold text-[#869B7E] mb-4">Fakultas</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {fakultas.map(f => (
                            <Link key={f.id} to={`/profil/${f.id}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all group border border-transparent hover:border-white/50">
                              <div className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center shadow-sm group-hover:bg-white transition-all shrink-0">
                                <span className="font-display font-bold text-[#869B7E] text-[10px]">{f.label}</span>
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-gray-800 group-hover:text-[#869B7E] transition-colors truncate">{f.full}</p>
                                <p className="text-[10px] text-gray-500 truncate">Lembaga Dakwah Fakultas</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* SOP & Pengaduan Dropdown */}
              <div className="relative" ref={sopDropdownRef}>
                <button
                  onClick={() => setSopOpen(!sopOpen)}
                  className={`nav-link px-4 flex items-center gap-1 ${linkColor(isActive('/sop') || isActive('/pengaduan'))}`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  SOP & Pengaduan
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${sopOpen ? 'rotate-180' : ''}`} />
                </button>

                {sopOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[480px] glass rounded-3xl shadow-2xl overflow-hidden border border-white/40 backdrop-blur-xl" style={{ animation: 'fade-in-up 0.2s ease-out' }}>
                    <div className="h-1 bg-gradient-to-r from-[#7F2020] via-[#869B7E] to-[#7F2020] w-full" style={{ backgroundSize: '200% auto', animation: 'gradient-shift 3s ease infinite' }}></div>
                    <div className="flex flex-col md:flex-row">
                      {/* Left Side: SOP */}
                      <div className="md:w-1/2 p-5 border-r border-gray-100/50 bg-white/40">
                        <h4 className="font-display text-lg font-bold text-[#7F2020] mb-4">SOP Organisasi</h4>
                        <div className="space-y-2">
                          {sopFiles.map(s => (
                            <Link key={s.id} to={s.path} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all group">
                              <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-[#7F2020]/5 transition-colors shadow-sm">
                                <FileText className="w-4 h-4 text-gray-400 group-hover:text-[#7F2020]" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-gray-800 group-hover:text-[#7F2020] transition-colors">{s.label}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Pengaduan */}
                      <div className="md:w-1/2 p-5 bg-white/20">
                        <h4 className="font-display text-lg font-bold text-[#869B7E] mb-4">Pengaduan</h4>
                        <div className="space-y-2">
                          {pengaduanFiles.map(r => (
                            <Link key={r.id} to={r.path} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/60 transition-all group">
                              <div className="p-2 rounded-lg bg-white/50 group-hover:bg-white transition-colors shadow-sm">
                                <Megaphone className="w-4 h-4 text-gray-400 group-hover:text-[#869B7E]" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-gray-800 group-hover:text-[#869B7E] transition-colors">{r.label}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/event" className={`nav-link px-4 ${linkColor(isActive('/event'))}`}>
                <span className="flex items-center gap-1.5"><CalendarCheck className="w-3.5 h-3.5" />Event</span>
              </Link>
              <Link to="/galeri" className={`nav-link px-4 ${linkColor(isActive('/galeri'))}`}>
                <span className="flex items-center gap-1.5"><Image className="w-3.5 h-3.5" />Galeri</span>
              </Link>
              <Link to="/kalender" className={`nav-link px-4 ${linkColor(isActive('/kalender'))}`}>
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Kalender</span>
              </Link>
            </nav>

            {/* RIGHT: Socials + Mobile */}
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-1">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className={`p-2 rounded-lg transition-all hover:scale-110 ${scrolled ? 'text-[#F6F3EB]/60 hover:text-[#F6F3EB] hover:bg-white/10' : 'text-gray-500 hover:text-[#7F2020] hover:bg-[#7F2020]/5'}`}>
                    {s.icon}
                  </a>
                ))}
              </div>
              <button onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? 'text-[#F6F3EB] hover:bg-white/10' : 'text-gray-700 hover:bg-black/5'}`}>
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto"
            style={{ animation: 'slide-in-right 0.3s ease-out', background: 'linear-gradient(180deg, #1A1A1A 0%, #2d1515 100%)' }}
            onClick={e => e.stopPropagation()}>
            <div className="h-1 gradient-mixed w-full"></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-extrabold text-xl text-[#C9CAAC]">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-[#F6F3EB]/60 hover:text-[#F6F3EB]"><X className="w-6 h-6" /></button>
              </div>
              <Link to="/" className="flex items-center gap-3 p-4 rounded-xl hover:bg-white/10 mb-1 text-[#F6F3EB] font-semibold">
                <Home className="w-5 h-5 text-[#C9CAAC]" /> Beranda
              </Link>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#7F2020] px-4 pt-6 pb-2 border-b border-white/10 mb-2">
                Pimpinan & Biro
              </p>
              {[...level1, ...level2].map(s => (
                <Link key={s.id} to={`/profil/${s.id}`} className="flex items-center gap-3 p-3 px-4 rounded-xl hover:bg-white/10 text-[#F6F3EB]/80 hover:text-[#F6F3EB]">
                  <s.icon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium">{s.label}</span>
                </Link>
              ))}

              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-500 px-4 pt-6 pb-2 border-b border-white/10 mb-2">
                Sekjen & Dept
              </p>
              {level3.map(s => (
                <Link key={s.id} to={`/profil/${s.id}`} className="flex items-center gap-3 p-3 px-4 rounded-xl hover:bg-white/10 text-[#F6F3EB]/80 hover:text-[#F6F3EB]">
                  <s.icon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium">{s.label}</span>
                </Link>
              ))}

              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-500 px-4 pt-6 pb-2 border-b border-white/10 mb-2">
                Fakultas
              </p>
              {fakultas.map(f => (
                <Link key={f.id} to={`/profil/${f.id}`} className="flex items-center gap-3 p-3 px-4 rounded-xl hover:bg-white/10 text-[#F6F3EB]/80 hover:text-[#F6F3EB]">
                  <span className="text-[10px] font-black text-[#C9CAAC] w-6">{f.label}</span>
                  <span className="text-sm font-medium">{f.full}</span>
                </Link>
              ))}
              
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-500 px-4 pt-6 pb-2 border-b border-white/10 mb-2">
                SOP & Pengaduan
              </p>
              {sopFiles.map(s => (
                <Link key={s.id} to={s.path} className="flex items-center gap-3 p-3 px-4 rounded-xl hover:bg-white/10 text-[#F6F3EB]/80 hover:text-[#F6F3EB]">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium">{s.label}</span>
                </Link>
              ))}
              {pengaduanFiles.map(r => (
                <Link key={r.id} to={r.path} className="flex items-center gap-3 p-3 px-4 rounded-xl hover:bg-white/10 text-[#F6F3EB]/80 hover:text-[#F6F3EB]">
                  <Megaphone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium">{r.label}</span>
                </Link>
              ))}

              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-500 px-4 pt-6 pb-2 border-b border-white/10 mb-2">
                Lainnya
              </p>
              <Link to="/event" className="flex items-center gap-3 p-3 px-4 rounded-xl hover:bg-white/10 text-[#F6F3EB]/80 hover:text-[#F6F3EB]">
                <CalendarCheck className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium">Event</span>
              </Link>
              <Link to="/galeri" className="flex items-center gap-3 p-3 px-4 rounded-xl hover:bg-white/10 text-[#F6F3EB]/80 hover:text-[#F6F3EB]">
                <Image className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium">Galeri</span>
              </Link>
              <Link to="/kalender" className="flex items-center gap-3 p-3 px-4 rounded-xl hover:bg-white/10 text-[#F6F3EB]/80 hover:text-[#F6F3EB]">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium">Kalender</span>
              </Link>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#C9CAAC] px-4 pb-3">Sosial Media</p>
                <div className="flex gap-2 px-4">
                  {socials.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F6F3EB]/70 hover:text-[#F6F3EB] hover:bg-white/10 transition-all text-sm font-medium">
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
