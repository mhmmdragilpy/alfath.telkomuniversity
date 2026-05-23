# UI Setup Guidelines untuk Website Al-Fath (Berdasarkan Biro Keuangan)

Dokumen ini berisi hasil analisis setup UI dari proyek **Biro Keuangan Al-Fath**. Panduan ini ditujukan sebagai acuan utama dalam membangun website Al-Fath secara umum agar memiliki konsistensi desain (UI/UX) dan arsitektur teknologi.

## 1. Tech Stack & Libraries
Proyek ini menggunakan ekosistem modern berbasis React:
- **Framework & Build Tool:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (menggunakan konfigurasi `@theme` di CSS)
- **Routing:** React Router DOM v7
- **Animasi:** Framer Motion (untuk transisi halaman dan interaksi UI)
- **Ikon:** Lucide React

## 2. Palet Warna (Color Palette)
Warna utama didefinisikan menggunakan CSS variables di `index.css` dan langsung terintegrasi dengan Tailwind CSS.

- **Brand Red:** `#7F2020` - Digunakan untuk aksen kuat, header/navbar, atau tombol utama.
- **Brand Green:** `#869B7E` - Warna sekunder, memberikan kesan natural dan kalem.
- **Brand Olive:** `#C9CAAC` - Digunakan untuk elemen dekoratif (seperti pattern latar belakang) atau garis batas (border).
- **Brand Cream:** `#F6F3EB` - Digunakan sebagai warna latar belakang (background) utama website.

## 3. Tipografi & Base Styling
- **Font Family Utama:** `'Outfit', sans-serif`
- **Latar Belakang Global:** Menggunakan warna **Brand Cream** dengan tambahan pola titik-titik (*polka dot pattern*) menggunakan `radial-gradient` berwarna **Brand Olive** untuk memberikan tekstur pada halaman.

**Snippet CSS Global (`index.css`):**
```css
body {
  margin: 0;
  font-family: var(--font-sans);
  background-color: var(--color-brand-cream);
  background-image: radial-gradient(var(--color-brand-olive) 0.5px, transparent 0.5px);
  background-size: 24px 24px;
  background-position: 0 0, 12px 12px;
}
```

## 4. Efek Desain & Utilities (Glassmorphism)
Desain banyak memanfaatkan efek tembus pandang (*glassmorphism*) untuk komponen mengambang seperti Navbar atau Card. Terdapat dua kelas utilitas CSS utama:
- `.glass`: Background putih semi-transparan dengan efek blur (12px), pinggiran putih tipis.
- `.glass-dark`: Background *Brand Red* semi-transparan dengan efek blur (16px), ideal untuk Navbar atau Header.

## 5. Struktur Layout Umum
Layout dasar aplikasi disusun dengan pendekatan *flexbox column* untuk memastikan footer selalu melekat di bawah layar (`min-h-screen`).

**Struktur Dasar Komponen (`App.jsx`):**
```jsx
<div className="flex flex-col min-h-screen bg-brand-cream text-gray-900 font-sans">
  <Navbar />
  <main className="flex-grow flex flex-col">
    {/* Konten Halaman */}
    <AnimatedRoutes />
  </main>
  <Footer />
</div>
```

## 6. Animasi & Transisi (Framer Motion)
Website menggunakan transisi antar halaman yang mulus.
- Membungkus deklarasi route dengan `<AnimatePresence mode="wait">`.
- Menyediakan kelas animasi kustom di CSS: `fade-in-up` dan `fade-in`.
- Menggunakan wrapper/pembungkus komponen (`AnimatedPage.jsx`) di dalam setiap halaman untuk menyeragamkan efek masuk (masuk dari bawah/fade in up) saat navigasi antar halaman.

## 7. Rekomendasi Setup Proyek Al-Fath Baru
Jika Anda akan memulai subsistem web Al-Fath yang baru, gunakan urutan setup berikut:
1. Inisialisasi proyek: `npm create vite@latest nama-proyek -- --template react`
2. Install dependencies utama: 
   ```bash
   npm install react-router-dom framer-motion lucide-react
   npm install -D tailwindcss @tailwindcss/vite
   ```
3. Salin konfigurasi CSS dasar (variabel warna, tipografi, dan utility class `.glass`) dari `index.css` milik Biro Keuangan agar *look and feel* tetap konsisten secara keseluruhan.
