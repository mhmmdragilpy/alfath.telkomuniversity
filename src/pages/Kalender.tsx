import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Info, Moon, Star, AlertTriangle } from 'lucide-react';

const HIJRI_MONTHS = [
  '', 'Muharram', 'Safar', 'Rabiul Awal', 'Rabiul Akhir', 'Jumadil Awal', 'Jumadil Akhir',
  'Rajab', "Sya'ban", 'Ramadhan', 'Syawal', 'Zulkaidah', 'Zulhijjah'
];

const MASEHI_MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

// Algoritma untuk menghitung events berdasarkan tanggal
function getIslamicInfo(date: Date) {
  const formatter = new Intl.DateTimeFormat('en-US', { calendar: 'islamic-umalqura', day: 'numeric', month: 'numeric', year: 'numeric' });
  const parts = formatter.formatToParts(date);
  
  const hDay = parseInt(parts.find(p => p.type === 'day')?.value || '1');
  const hMonth = parseInt(parts.find(p => p.type === 'month')?.value || '1');
  const hYear = parseInt(parts.find(p => p.type === 'year')?.value || '1447');
  
  const mDayOfWeek = date.getDay(); // 0 = Minggu, 1 = Senin, ... 4 = Kamis
  
  let isPuasaSunnah = false;
  let isHaram = false;
  let isWajib = false;
  let isPeringatan = false;
  let events: string[] = [];
  let descriptions: string[] = [];
  
  // Wajib
  if (hMonth === 9) {
    isWajib = true;
    events.push("Puasa Ramadhan");
    if (hDay === 17) {
      events.push("Nuzulul Qur'an");
      descriptions.push("Malam diturunkannya ayat pertama Al-Qur'an (Surah Al-Alaq 1-5).");
    }
  }

  // Haram Puasa
  if (hMonth === 10 && hDay === 1) {
    isHaram = true;
    events.push("Idul Fitri");
    descriptions.push("Hari kemenangan setelah sebulan penuh berpuasa, diharamkan untuk berpuasa.");
  }
  if (hMonth === 12 && hDay === 10) {
    isHaram = true;
    events.push("Idul Adha");
    descriptions.push("Hari raya qurban, diharamkan berpuasa.");
  }
  if (hMonth === 12 && (hDay >= 11 && hDay <= 13)) {
    isHaram = true;
    events.push("Hari Tasyrik");
    descriptions.push("Hari raya umat Islam untuk makan dan minum, diharamkan berpuasa pada hari-hari ini.");
  }

  // Sunnah Fasting
  if (!isHaram && !isWajib) {
    let sunnah = [];
    if (mDayOfWeek === 1) sunnah.push("Senin");
    if (mDayOfWeek === 4) sunnah.push("Kamis");
    
    if (hMonth === 1 && hDay === 9) { sunnah.push("Tasu'a"); descriptions.push("Puasa Tasu'a (9 Muharram) dianjurkan untuk menyelisihi kaum Yahudi."); }
    if (hMonth === 1 && hDay === 10) { sunnah.push("Asyura"); descriptions.push("Puasa Asyura (10 Muharram) dapat menghapus dosa setahun yang lalu."); }
    if (hMonth === 8 && hDay === 15) { sunnah.push("Nisfu Sya'ban"); descriptions.push("Dianjurkan menghidupkan malam nisfu sya'ban dan dianjurkan berpuasa siangnya."); }
    if (hMonth === 12 && hDay === 9) { sunnah.push("Arafah"); descriptions.push("Puasa Arafah (9 Zulhijjah) menghapus dosa setahun lalu dan setahun yang akan datang."); }
    
    // Ayyamul Bidh (13, 14, 15) atau (14, 15, 16 untuk Dzulhijjah krn 13 Tasyrik)
    if (hDay >= 13 && hDay <= 15 && hMonth !== 12) {
      sunnah.push("Ayyamul Bidh");
      if(hDay === 13) descriptions.push("Puasa Ayyamul Bidh (Pertengahan bulan Hijriah) laksana puasa sepanjang masa.");
    } else if (hMonth === 12 && hDay >= 14 && hDay <= 16) {
      sunnah.push("Ayyamul Bidh");
    }
    
    if (sunnah.length > 0) {
      isPuasaSunnah = true;
      events.push(`Puasa ${sunnah.join(', ')}`);
    }
  }

  // Peringatan Islam
  if (hMonth === 1 && hDay === 1) {
    isPeringatan = true;
    events.push("Tahun Baru Islam");
    descriptions.push("Peringatan hijrahnya Nabi Muhammad SAW dari Mekkah ke Madinah.");
  }
  if (hMonth === 3 && hDay === 12) {
    isPeringatan = true;
    events.push("Maulid Nabi");
    descriptions.push("Peringatan hari kelahiran Nabi Muhammad SAW.");
  }
  if (hMonth === 7 && hDay === 27) {
    isPeringatan = true;
    events.push("Isra' Mi'raj");
    descriptions.push("Perjalanan suci Nabi Muhammad SAW dari Masjidil Haram ke Masjidil Aqsa hingga Sidratul Muntaha mendapat perintah shalat 5 waktu.");
  }
  
  // Tanggal Merah Nasional (Simulasi Sederhana/Statis untuk Masehi)
  const mDate = date.getDate();
  const mMonth = date.getMonth(); // 0-based
  let isNasional = false;
  if (mDate === 1 && mMonth === 0) { isNasional = true; events.push("Tahun Baru Masehi"); }
  if (mDate === 1 && mMonth === 4) { isNasional = true; events.push("Hari Buruh"); }
  if (mDate === 1 && mMonth === 5) { isNasional = true; events.push("Hari Lahir Pancasila"); }
  if (mDate === 17 && mMonth === 7) { isNasional = true; events.push("Hari Kemerdekaan RI"); }
  if (mDate === 25 && mMonth === 11) { isNasional = true; events.push("Hari Raya Natal"); }

  return { 
    hijri: { day: hDay, month: hMonth, year: hYear },
    isPuasaSunnah, isHaram, isWajib, isPeringatan, isNasional,
    events, descriptions 
  };
}

export default function Kalender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];
    
    // Fill empty slots before day 1
    const firstDay = date.getDay();
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }, [currentDate]);

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  // Kumpulkan event unik dalam satu bulan untuk Ensiklopedia
  const monthlyAgenda = useMemo(() => {
    const agenda = [];
    for (const d of daysInMonth) {
      if (!d) continue;
      const info = getIslamicInfo(d);
      if (info.events.length > 0 && (info.descriptions.length > 0 || info.isHaram || info.isPeringatan)) {
        agenda.push({ date: d, info });
      }
    }
    return agenda;
  }, [daysInMonth]);

  const weekDays = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  return (
    <div className="w-full bg-[#F6F3EB] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#7F2020] mb-4 flex items-center justify-center gap-3">
            <CalendarIcon className="w-10 h-10" /> Kalender Dakwah
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Jadwal penanggalan Masehi & Hijriah terintegrasi dengan pengingat Puasa Sunnah dan hari-hari besar Islam.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          
          {/* Main Calendar View */}
          <div className="xl:w-2/3 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7F2020] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Navigasi Bulan */}
            <div className="flex items-center justify-between mb-8 relative z-10">
              <button onClick={prevMonth} className="p-3 rounded-full hover:bg-gray-100 transition-colors text-gray-700">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  {MASEHI_MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                {/* Find middle of the month for Hijri string approx */}
                <p className="text-sm font-bold text-[#869B7E] tracking-widest uppercase mt-1">
                  {(() => {
                    const midDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 15);
                    const info = getIslamicInfo(midDate);
                    return `${HIJRI_MONTHS[info.hijri.month]} ${info.hijri.year} H`;
                  })()}
                </p>
              </div>
              <button onClick={nextMonth} className="p-3 rounded-full hover:bg-gray-100 transition-colors text-gray-700">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Kalender Grid */}
            <div className="grid grid-cols-7 gap-2 md:gap-4 relative z-10">
              {weekDays.map(day => (
                <div key={day} className="text-center font-bold text-gray-400 text-sm py-2">
                  {day}
                </div>
              ))}
              
              {daysInMonth.map((date, idx) => {
                if (!date) return <div key={idx} className="aspect-square rounded-2xl bg-gray-50/50"></div>;
                
                const info = getIslamicInfo(date);
                const isToday = new Date().toDateString() === date.toDateString();
                
                let bgClass = "bg-gray-50 hover:bg-gray-100";
                let textClass = "text-gray-800";
                let marker = null;

                if (info.isHaram) {
                  bgClass = "bg-red-50 border border-red-200";
                  textClass = "text-red-700";
                  marker = <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>;
                } else if (info.isWajib) {
                  bgClass = "bg-[#869B7E]/20 border border-[#869B7E]/40";
                  textClass = "text-[#15803D]";
                } else if (info.isPuasaSunnah) {
                  bgClass = "bg-green-50 border border-green-200";
                  textClass = "text-green-700";
                  marker = <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>;
                } else if (info.isPeringatan || info.isNasional) {
                  bgClass = "bg-blue-50 border border-blue-200";
                  textClass = "text-blue-700";
                  marker = <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>;
                }

                if (isToday) {
                  bgClass += " ring-2 ring-[#7F2020] shadow-md";
                }

                return (
                  <div key={idx} className={`aspect-square rounded-2xl p-2 md:p-3 relative transition-all group flex flex-col justify-between cursor-default ${bgClass}`}>
                    {marker}
                    <div>
                      <span className={`text-lg md:text-2xl font-black block leading-none ${textClass}`}>
                        {date.getDate()}
                      </span>
                      <span className={`text-[10px] md:text-xs font-bold block mt-1 ${info.isHaram ? 'text-red-500' : info.isPuasaSunnah ? 'text-green-600' : 'text-gray-400'}`}>
                        {info.hijri.day} {window.innerWidth > 768 && <span className="hidden md:inline">{HIJRI_MONTHS[info.hijri.month].substring(0,3)}</span>}
                      </span>
                    </div>
                    
                    {info.events.length > 0 && (
                      <div className="mt-auto hidden md:block">
                        <p className={`text-[9px] leading-tight font-bold truncate ${info.isHaram ? 'text-red-600' : info.isPuasaSunnah ? 'text-green-700' : 'text-blue-700'}`}>
                          {info.events[0]}
                        </p>
                      </div>
                    )}

                    {/* Tooltip Hover for mobile / detailed view */}
                    {info.events.length > 0 && (
                      <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-xs rounded-xl p-3 shadow-xl z-50 transition-all">
                        <ul className="space-y-1">
                          {info.events.map((e, i) => <li key={i} className="font-bold flex items-center gap-1.5"><Star className="w-3 h-3 text-yellow-400"/> {e}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-100 text-xs font-bold text-gray-500 justify-center">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div> Puasa Sunnah</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#869B7E]/50"></div> Puasa Wajib</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> Haram Puasa</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Peringatan / Libur</div>
            </div>
          </div>

          {/* Ensiklopedia Sidebar */}
          <div className="xl:w-1/3 flex flex-col gap-6">
            <div className="bg-[#7F2020] text-white p-8 rounded-[2.5rem] shadow-2xl h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <Info className="w-7 h-7 text-[#C9CAAC]" /> Ensiklopedia Waktu
              </h3>

              <div className="space-y-6 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
                {monthlyAgenda.length === 0 ? (
                  <p className="text-white/60 text-sm italic">Belum ada catatan keistimewaan pada bulan ini.</p>
                ) : (
                  monthlyAgenda.map((item, idx) => (
                    <div key={idx} className="bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-white flex flex-col items-center justify-center shrink-0 shadow-inner">
                          <span className="text-xs font-bold text-[#7F2020] uppercase">{MASEHI_MONTHS[item.date.getMonth()].substring(0,3)}</span>
                          <span className="text-lg font-black text-gray-900 leading-none">{item.date.getDate()}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#C9CAAC] leading-tight">{item.info.events.join(', ')}</h4>
                          <p className="text-xs text-white/70 mt-1">{item.info.hijri.day} {HIJRI_MONTHS[item.info.hijri.month]} {item.info.hijri.year} H</p>
                        </div>
                      </div>
                      
                      {item.info.descriptions.length > 0 && (
                        <div className="text-sm text-white/90 leading-relaxed space-y-2 mt-4 pt-4 border-t border-white/10">
                          {item.info.descriptions.map((desc, i) => (
                            <p key={i} className="flex items-start gap-2">
                              {item.info.isHaram ? <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> : <Moon className="w-4 h-4 text-[#C9CAAC] shrink-0 mt-0.5" />}
                              {desc}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
