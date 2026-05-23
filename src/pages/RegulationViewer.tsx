import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllRegulations, getRegulationById, type Regulation } from '../utils/parser';
import { Search, FileText, ChevronRight } from 'lucide-react';

export default function RegulationViewer() {
  const { id } = useParams<{ id: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const allRegs = getAllRegulations();

  if (!id) {
    // Dashboard View
    const filtered = allRegs.filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="glass rounded-3xl p-10 mb-12 text-center border-t-4 border-[var(--color-brand-green)]">
          <h1 className="text-4xl font-extrabold text-[var(--color-brand-green)] mb-4">Knowledge Base Regulasi</h1>
          <p className="text-lg text-gray-600 mb-8">Pusat digitalisasi instrumen regulasi dan standar operasional LDK Al-Fath</p>
          
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Cari dokumen regulasi..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-white/50 bg-white/70 backdrop-blur focus:outline-none focus:border-[var(--color-brand-red)] focus:bg-white transition-all text-lg shadow-inner"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(reg => (
            <Link key={reg.id} to={`/regulasi/${reg.id}`} className="glass p-6 rounded-2xl flex items-start gap-5 hover:-translate-y-1 hover:shadow-2xl transition-all group border-l-4 border-transparent hover:border-[var(--color-brand-red)]">
              <div className="bg-[var(--color-brand-olive)]/20 p-4 rounded-xl text-[var(--color-brand-green)] group-hover:bg-[var(--color-brand-red)] group-hover:text-white transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-[var(--color-brand-red)] transition-colors">{reg.title}</h3>
                <span className="text-sm font-semibold text-[var(--color-brand-green)] flex items-center gap-1">
                  Buka Dokumen <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              <p className="text-xl">Tidak ada dokumen yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Viewer View
  const reg = getRegulationById(id);
  if (!reg) return <div className="text-center py-20 text-2xl font-bold">Dokumen tidak ditemukan.</div>;

  return <RegulationDetail reg={reg} />;
}

function RegulationDetail({ reg }: { reg: Regulation }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<{id: string, text: string, level: number}[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!contentRef.current) return;
    const elements = Array.from(contentRef.current.querySelectorAll('h2, h3'));
    
    const hData = elements.map((el, i) => {
      const id = el.id || `heading-${i}`;
      el.id = id;
      return {
        id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3
      };
    });
    setHeadings(hData);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, { rootMargin: '0px 0px -80% 0px' });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [reg]);

  return (
    <div className="container mx-auto px-6 py-8 flex flex-col lg:flex-row gap-10 items-start">
      
      {/* Sidebar ToC */}
      <aside className="glass w-full lg:w-80 shrink-0 p-6 rounded-2xl sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto z-10">
        <Link to="/regulasi" className="text-sm font-semibold text-[var(--color-brand-green)] flex items-center gap-1 mb-6 hover:text-[var(--color-brand-red)] transition-colors">
          <ChevronRight className="w-4 h-4 rotate-180" /> Kembali
        </Link>
        <h4 className="font-extrabold text-gray-800 uppercase tracking-widest mb-4 border-b-2 border-black/5 pb-2">Daftar Isi</h4>
        <nav className="flex flex-col gap-2 text-sm font-medium">
          {headings.map(h => (
            <a 
              key={h.id} 
              href={`#${h.id}`}
              className={`block transition-colors ${h.level === 3 ? 'ml-4 text-xs font-normal text-gray-500' : 'text-gray-700'} ${activeId === h.id ? '!text-[var(--color-brand-red)] font-bold border-l-2 border-[var(--color-brand-red)] -ml-2 pl-2' : 'hover:text-[var(--color-brand-red)]'}`}
            >
              {h.text}
            </a>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="glass flex-1 p-8 md:p-12 rounded-3xl bg-white/80">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 pb-4 border-b-4 border-[var(--color-brand-olive)]">{reg.title}</h1>
        <div 
          ref={contentRef}
          className="prose max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: reg.content }} 
        />
      </main>

    </div>
  );
}
