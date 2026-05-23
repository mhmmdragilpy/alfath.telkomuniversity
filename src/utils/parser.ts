// Import raw text files using Vite's import.meta.glob
const regulasiFiles = import.meta.glob('/src/assets/regulasi/*.html', { query: '?raw', import: 'default', eager: true });
const prokerFiles = import.meta.glob('/src/assets/data/*.html', { query: '?raw', import: 'default', eager: true });

export interface Regulation {
  id: string;
  title: string;
  content: string; // HTML string
}

export interface Proker {
  name: string;
  waktu: string;
  deskripsi: string;
  indikator: string[];
  dampak: string;
}

export const getAllRegulations = (): Regulation[] => {
  const regulations: Regulation[] = [];
  
  for (const path in regulasiFiles) {
    const rawContent = regulasiFiles[path] as string;
    const filename = path.split('/').pop()?.replace('.html', '') || '';
    const name = filename.replace(/-/g, ' ');
    const title = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    regulations.push({
      id: filename,
      title: title,
      content: parseRegulationText(rawContent)
    });
  }
  return regulations;
};

export const getRegulationById = (id: string): Regulation | undefined => {
  return getAllRegulations().find(r => r.id === id);
};

function parseRegulationText(text: string): string {
  let parsedHtml = '';
  const lines = text.split('\n');
  let inList = false;

  for (let line of lines) {
    line = line.trim();
    if (!line || line.startsWith('=')) continue;
    
    if (!line || line.startsWith('=')) continue;


    if (line.startsWith('BAB')) {
      if (inList) { parsedHtml += '</ul>'; inList = false; }
      parsedHtml += `<h2 class="text-3xl font-bold text-[var(--color-brand-green)] mt-12 mb-6 pb-2 border-b-2 border-black/10">${line}</h2>`;
    } else if (line.startsWith('Pasal')) {
      if (inList) { parsedHtml += '</ul>'; inList = false; }
      parsedHtml += `<h3 class="text-xl font-bold text-[var(--color-brand-red)] mt-8 mb-4">${line}</h3>`;
    } else if (/^\d+\./.test(line)) {
      if (!inList) { parsedHtml += '<ul class="space-y-4 mb-6 pl-2">'; inList = true; }
      const textLine = line.replace(/^\d+\.\s*/, '');
      const numMatch = line.match(/^\d+/);
      const num = numMatch ? numMatch[0] : '';
      parsedHtml += `<li class="flex items-start gap-4"><span class="font-bold text-[var(--color-brand-red)] bg-white/50 w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm">${num}</span><span class="leading-relaxed text-gray-800 pt-1">${textLine}</span></li>`;
    } else {
      if (inList) { parsedHtml += '</ul>'; inList = false; }
      if (!line.includes('DOKUMEN REGULASI') && !line.includes('LDK AL-FATH')) {
        parsedHtml += `<p class="mb-4 leading-relaxed text-gray-800 text-lg">${line}</p>`;
      }
    }
  }
  if (inList) parsedHtml += '</ul>';

  return parsedHtml;
}

export const getProkersForStructure = (fileKeys: string[]): Proker[] => {
  let allProkers: Proker[] = [];
  
  for (const path in prokerFiles) {
    const filename = path.split('/').pop()?.replace('.html', '') || '';
    if (fileKeys.includes(filename)) {
      const rawContent = prokerFiles[path] as string;
      allProkers = allProkers.concat(parseProkerText(rawContent));
    }
  }
  return allProkers;
}

function parseProkerText(text: string): Proker[] {
  const prokers: Proker[] = [];
  const blocks = text.split(/\[PROKER\s+\d+\]/i).filter(b => b.trim() !== '');
  
  for (const block of blocks) {
    if (!block.includes('Nama Proker:')) continue;
    
    const lines = block.split('\n').map(l => l.trim());

    
    let p: Proker = {
      name: '',
      waktu: '',
      deskripsi: '',
      indikator: [],
      dampak: ''
    };
    
    let inIndikator = false;
    
    for (let line of lines) {
      if (!line) continue;
      
      // Highlight deadlines logic
      if (line.includes('H-14')) {
        line = line.replace('H-14', '<strong class="text-[var(--color-brand-red)] px-1 bg-red-100 rounded">H-14</strong>');
      }
      if (line.includes('H+7')) {
        line = line.replace('H+7', '<strong class="text-[var(--color-brand-green)] px-1 bg-green-100 rounded">H+7</strong>');
      }

      if (line.startsWith('Nama Proker:')) {
        p.name = line.replace('Nama Proker:', '').trim();
        inIndikator = false;
      } else if (line.startsWith('Waktu Pelaksanaan:')) {
        p.waktu = line.replace('Waktu Pelaksanaan:', '').trim();
        inIndikator = false;
      } else if (line.startsWith('Deskripsi & Tujuan:')) {
        p.deskripsi = line.replace('Deskripsi & Tujuan:', '').trim();
        inIndikator = false;
      } else if (line.startsWith('Indikator Keberhasilan:')) {
        inIndikator = true;
      } else if (line.startsWith('Dampak (Outcome):')) {
        p.dampak = line.replace('Dampak (Outcome):', '').trim();
        inIndikator = false;
      } else if (inIndikator && line.startsWith('-')) {
        p.indikator.push(line.replace(/^- /, '').trim());
      }
    }
    
    if (p.name) prokers.push(p);
  }
  
  return prokers;
}
