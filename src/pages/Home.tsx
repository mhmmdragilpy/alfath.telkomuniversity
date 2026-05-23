import { Link } from 'react-router-dom';
import { getLogo, getProfilPhoto } from '../App';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  // Ditukar: Beranda menggunakan Logo Teks, Navigasi menggunakan Logo Al-Fath (Emblem)
  const logoBeranda = getLogo('Logo Al-Fath Teks');
  const logoRS = getLogo('Logo Raksa Samarasya Vertikal Merah'); // Menggunakan merah untuk berbaur dengan tema

  const pimpinanPusat = {
    id: 'pusat',
    title: 'Pimpinan Pusat',
    desc: 'Nakhoda utama pergerakan LDK Al-Fath, merumuskan arah gerak strategis dan menjaga ritme dakwah seluruh ekosistem.',
    members: [
      { photo: getProfilPhoto('Ketua Umum') },
      { photo: getProfilPhoto('Koordinasi Akhwat.webp') }
    ]
  };

  const biroIndependen = [
    { 
      id: 'biro-kesekretariatan', 
      title: 'Biro Kesekretariatan',
      desc: 'Pusat kendali administrasi, memastikan legalitas, kearsipan, dan operasional organisasi berjalan taktis.',
      members: [
        { photo: getProfilPhoto('Kepala Biro Kesekretariatan') },
        { photo: getProfilPhoto('Sekretaris Biro Kesekretariatan') }
      ]
    },
    { 
      id: 'biro-keuangan', 
      title: 'Biro Keuangan',
      desc: 'Penggerak napas finansial. Mengatur tata kelola anggaran yang transparan dan akuntabel secara independen.',
      members: [
        { photo: getProfilPhoto('Kepala Biro Keuangan') },
        { photo: getProfilPhoto('Sekretaris Biro Keuangan') }
      ]
    }
  ];

  const sekjen = {
    id: 'sekretaris-jendral',
    title: 'Sekretaris Jendral',
    desc: 'Koordinator lapangan tingkat tinggi. Menyelaraskan seluruh pergerakan departemen dan menaungi komando fakultas.',
    members: [
      { photo: getProfilPhoto('Sekretaris Jendral') }
    ]
  };

  const departemen = [
    { 
      id: 'departemen-kaderisasi', 
      title: 'Departemen Kaderisasi',
      desc: 'Dapur pencetak kader. Merancang sistem mentoring dan pembinaan anggota berkelanjutan.',
      members: [
        { photo: getProfilPhoto('Kepala Dept Kaderisasi Pusat') },
        { photo: getProfilPhoto('Sekretaris Dept Kaderisasi Pusat') }
      ]
    },
    { 
      id: 'departemen-syiar', 
      title: 'Departemen Syiar',
      desc: 'Wajah dakwah eksternal. Menebarkan nilai keislaman melalui event akbar dan kajian inklusif.',
      members: [
        { photo: getProfilPhoto('Kepala Dept Syiar') },
        { photo: getProfilPhoto('Sekretaris Dept Syiar') }
      ]
    },
    { 
      id: 'departemen-medkominfo', 
      title: 'Dept. Medkominfo',
      desc: 'Ujung tombak visual dan informasi. Mengemas dakwah dalam karya digital dan media sosial.',
      members: [
        { photo: getProfilPhoto('Kepala Dept Medkominfo') },
        { photo: getProfilPhoto('Sekretaris Dept Medkominfo') }
      ]
    }
  ];

  const fakultas = [
    { id: 'fakultas-fif', title: 'Fakultas Informatika', accent: '#EAB308', members: [{ photo: getProfilPhoto("Mas'Ul Fakultas Informatika") }, { photo: getProfilPhoto('Koordinasi Akhwat Fakultas Informatika') }] },
    { id: 'fakultas-fte', title: 'Fakultas Teknik Elektro', accent: '#2563EB', members: [{ photo: getProfilPhoto("Mas'Ul Fakultas Teknik Elektro") }, { photo: getProfilPhoto('Koordinasi Akhwat Fakultas Teknik Elektro') }] },
    { id: 'fakultas-fri', title: 'Fakultas Rekayasa Industri', accent: '#166534', members: [{ photo: getProfilPhoto("Mas'Ul Fakultas Rekayasa Industri") }, { photo: getProfilPhoto('Koordinasi Akhwat Fakultas Rekayasa Industri') }] },
    { id: 'fakultas-feb', title: 'Fakultas Ekonomi dan Bisnis', accent: '#0D9488', members: [{ photo: getProfilPhoto("Mas'Ul Fakultas Ekonomi dan Bisnis") }, { photo: getProfilPhoto('Koordinasi Akhwat Fakultas Ekonomi dan Bisnis') }] },
    { id: 'fakultas-fks', title: 'Fakultas Komunikasi dan Sosial', accent: '#9333EA', members: [{ photo: getProfilPhoto("Mas'Ul Fakultas Komunikasi dan Ilmu Sosial") }, { photo: getProfilPhoto('Koordinasi Akhwat Fakultas Komunikasi dan Ilmu Sosial') }] },
    { id: 'fakultas-fit', title: 'Fakultas Ilmu Terapan', accent: '#84CC16', members: [{ photo: getProfilPhoto("Mas'Ul Fakultas Ilmu Terapan") }, { photo: getProfilPhoto('Koordinasi Akhwat Fakultas Ilmu Terapan') }] },
    { id: 'fakultas-fik', title: 'Fakultas Industri Kreatif', accent: '#F97316', members: [{ photo: getProfilPhoto("Mas'Ul Fakultas Industri Kreatif") }, { photo: getProfilPhoto('Koordinasi Akhwat Fakultas Industri Kreatif') }] },
  ];

  return (
    <div className="w-full">
      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative overflow-hidden pt-2">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="flex flex-col items-center justify-center min-h-[50vh] max-w-4xl mx-auto text-center">
            
            {/* Top: LOGOS */}
            <div className="flex items-center justify-center gap-6 md:gap-10 relative z-10 mb-10">
              <div className="flex flex-col items-center" style={{animation: 'float 5s ease-in-out infinite'}}>
                <div className="w-32 h-32 md:w-48 md:h-48 p-2 flex items-center justify-center drop-shadow-2xl">
                  {logoBeranda && <img src={logoBeranda} alt="Logo LDK Al-Fath Teks" className="w-full h-full object-contain" />}
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 opacity-40">
                <div className="w-[2px] h-10 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
                <span className="text-xs text-gray-400 font-bold">×</span>
                <div className="w-[2px] h-10 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
              </div>

              <div className="flex flex-col items-center" style={{animation: 'float-slow 6s ease-in-out infinite'}}>
                <div className="w-32 h-32 md:w-48 md:h-48 p-2 flex items-center justify-center drop-shadow-2xl">
                  {logoRS && <img src={logoRS} alt="Logo Kabinet Raksa Samarasya" className="w-full h-full object-contain" />}
                </div>
              </div>
            </div>

            {/* Bottom: Title & Info */}
            <div className="relative z-10 flex flex-col items-center">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-4">
                LDK <span className="text-[#7F2020]">AL-FATH</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 tracking-wide mb-6">
                Telkom University
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed mb-8 mx-auto">
                Ekosistem digital Lembaga Dakwah Kampus — inklusif, profesional, dan berdampak untuk seluruh civitas akademika.
              </p>

              <div className="flex flex-wrap gap-3 justify-center">
                <a href="#struktur-organisasi" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7F2020] text-white font-bold text-sm hover:bg-[#5a1717] transition-all shadow-lg">
                  Jelajahi Ekosistem Kami <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <div className="w-full bg-[#7F2020] text-white overflow-hidden py-5 shadow-inner">
        <div className="whitespace-nowrap flex w-max" style={{ animation: 'marquee 25s linear infinite' }}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span className="text-lg md:text-xl font-display font-black tracking-[0.2em] uppercase text-white/90">
                #Gegap Gempita Rangkul Bersama
              </span>
              <Sparkles className="w-5 h-5 text-[#C9CAAC]" />
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════ VISI & MISI ═══════════════ */}
      <section className="bg-[#7F2020] text-[#F6F3EB] py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#15803D] opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            
            {/* VISI */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-1 bg-[#C9CAAC] rounded-full"></span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EFECE5] tracking-wide">VISI</h2>
              </div>
              <p className="font-ui text-2xl md:text-3xl leading-relaxed font-light text-[#EFECE5]">
                <span className="text-[#C9CAAC] font-bold">"</span> Menjadi rumah pembinaan mahasiswa muslim Telkom University yang relevan, inklusif, dan terintegrasi dalam membentuk generasi yang beriman, berkarakter, dan berdampak dalam kehidupan akademik dan sosial. <span className="text-[#C9CAAC] font-bold">"</span>
              </p>
            </div>

            {/* MISI */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-1 bg-[#15803D] rounded-full"></span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#EFECE5] tracking-wide">MISI</h2>
              </div>
              <ul className="space-y-6">
                {[
                  "Mengembangkan sistem mentoring kontekstual dan berkelanjutan.",
                  "Membangun budaya profesional dan pengukuran dampak yang jelas.",
                  "Menghadirkan dakwah inklusif dan relevan.",
                  "Mengintegrasikan pusat dan fakultas."
                ].map((misi, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-[#15803D] group-hover:border-[#15803D] transition-colors shadow-sm mt-1">
                      <span className="font-display font-bold text-[#C9CAAC] group-hover:text-white transition-colors">{i + 1}</span>
                    </div>
                    <p className="font-ui text-lg md:text-xl text-[#EFECE5] leading-relaxed pt-2 font-medium">{misi}</p>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* ═══════════════ PIMPINAN PUSAT ═══════════════ */}
      <section id="struktur-organisasi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
        <div className="mb-16 border-b border-gray-200 pb-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{pimpinanPusat.title}</h2>
          <p className="text-gray-600 max-w-2xl text-lg">{pimpinanPusat.desc}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="w-full flex flex-col sm:flex-row gap-12 justify-center">
            {pimpinanPusat.members.map((m, idx) => (
              <div key={idx} className="flex-1 max-w-[320px] mx-auto group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-2xl relative border border-gray-100">
                  {m.photo ? (
                    <img src={m.photo} alt="Pimpinan Pusat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">No Photo</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to={`/profil/${pimpinanPusat.id}`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#7F2020] text-white font-bold hover:bg-[#5a1717] transition-all shadow-lg hover:shadow-xl">
            Jelajahi Profil Pusat <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ═══════════════ BIRO INDEPENDEN ═══════════════ */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-32">
            {biroIndependen.map((biro, index) => (
              <div key={biro.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="md:w-1/3 text-center md:text-left">
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{biro.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{biro.desc}</p>
                  <Link to={`/profil/${biro.id}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all">
                    Lihat Profil {biro.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="md:w-2/3 flex flex-col sm:flex-row gap-8 w-full justify-center">
                  {biro.members.map((m, idx) => (
                    <div key={idx} className="flex-1 max-w-[280px] mx-auto group">
                      <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-xl relative border border-gray-100">
                        {m.photo ? (
                          <img src={m.photo} alt={biro.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">No Photo</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SEKRETARIS JENDRAL & DEPARTEMEN ═══════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Sekjen Row */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-32 bg-white p-10 md:p-16 rounded-[3rem] border border-gray-200 shadow-2xl">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-5xl font-extrabold text-gray-900 mb-6">{sekjen.title}</h3>
            <p className="text-gray-600 mb-10 leading-relaxed text-xl">{sekjen.desc}</p>
            <Link to={`/profil/${sekjen.id}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-black transition-all shadow-xl">
              Lihat Detail Sekjen <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-[360px] group">
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-2xl relative border-4 border-white">
                {sekjen.members[0].photo ? (
                  <img src={sekjen.members[0].photo} alt={sekjen.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Photo</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Departemen Rows */}
        <div className="space-y-32">
          {departemen.map((dept, index) => (
            <div key={dept.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="md:w-1/3 text-center md:text-left">
                <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{dept.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{dept.desc}</p>
                <Link to={`/profil/${dept.id}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-800 text-gray-800 font-bold hover:bg-gray-800 hover:text-white transition-all">
                  Jelajahi Profil <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="md:w-2/3 flex flex-col sm:flex-row gap-8 w-full justify-center">
                {dept.members.map((m, idx) => (
                  <div key={idx} className="flex-1 max-w-[280px] mx-auto group">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-xl relative border border-gray-100">
                      {m.photo ? (
                        <img src={m.photo} alt={dept.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">No Photo</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ LEMBAGA DAKWAH FAKULTAS ═══════════════ */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mb-16">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">Fakultas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
              Garda terdepan dakwah kultural di 7 fakultas, menjangkau seluruh elemen mahasiswa Telkom University.
            </p>
          </div>

          <div className="space-y-32">
            {fakultas.map((fak, index) => (
              <div key={fak.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100`}>
                <div className="md:w-1/3 text-center md:text-left">
                  <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight drop-shadow-sm" style={{ color: fak.accent }}>{fak.title}</h3>
                  <Link to={`/profil/${fak.id}`} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all">
                    Lihat Detail Fakultas <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="md:w-2/3 flex flex-col sm:flex-row gap-6 lg:gap-10 w-full justify-center">
                  {fak.members.map((m, idx) => (
                    <div key={idx} className="flex-1 max-w-[300px] mx-auto group">
                      <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gray-50 shadow-lg relative border border-gray-100">
                        {m.photo ? (
                          <img src={m.photo} alt={fak.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">No Photo</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
