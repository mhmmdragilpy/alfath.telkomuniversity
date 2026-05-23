<div align="center">
  <img src="public/favicon.svg" alt="LDK Al-Fath Logo" width="150" />
  <h1>LDK Al-Fath Telkom University</h1>
  <p><strong>Sistem Informasi & Ekosistem Digital Lembaga Dakwah Kampus</strong></p>

  <p>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18.x-61DAFB.svg?style=for-the-badge&logo=react" alt="React" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.x-3178C6.svg?style=for-the-badge&logo=typescript" alt="TypeScript" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-6.x-646CFF.svg?style=for-the-badge&logo=vite" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-4.x-38B2AC.svg?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /></a>
  </p>
</div>

<br />

## 📖 Tentang Proyek

Website resmi **Lembaga Dakwah Kampus (LDK) Al-Fath Telkom University** dirancang untuk menjadi pusat informasi, komunikasi, dan pengelolaan ekosistem dakwah yang komprehensif. Aplikasi ini mengintegrasikan seluruh elemen struktur organisasi, dari pimpinan pusat, biro, departemen, hingga fakultas (LDF), dalam satu platform interaktif yang modern, estetik, dan responsif.

Inisiatif digital ini bertujuan untuk menghadirkan dakwah yang inklusif, relevan, dan berdampak di era modern bagi seluruh civitas akademika Telkom University.

## ✨ Fitur Unggulan

- **Manajemen Profil Terpusat:** Sistem navigasi struktur hirarkis yang dinamis (Ketua Umum, Sekretaris Jenderal, Biro, Departemen, hingga Fakultas).
- **Portal SOP & Pengaduan Publik:** Integrasi akses langsung ke Standar Operasional Prosedur (SOP) organisasi serta layanan publik interaktif (*Al-Fath Mendengar*, *Saran & Masukan*).
- **Smart Hijri Calendar:** Sistem kalender adaptif yang secara otomatis mengonversi kalender Masehi ke Hijriah (Umm Al-Qura), lengkap dengan notifikasi puasa sunnah dan peringatan hari besar Islam.
- **Fluid & Responsive UI/UX:** Dibangun dengan pendekatan *mobile-first*, memanfaatkan *glassmorphism design*, animasi mikro (micro-interactions), dan optimasi aksesibilitas tinggi untuk memastikan pengalaman pengguna yang maksimal di segala perangkat.

## 💻 Tech Stack

Proyek ini dibangun menggunakan arsitektur *Front-End* modern untuk menjamin skalabilitas, kecepatan, dan pemeliharaan yang mudah:

- **Framework & Library:** React 18, React Router DOM v7
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Vanilla CSS (Custom Keyframes)
- **Build Tool:** Vite
- **Icons:** Lucide React

## 🚀 Panduan Instalasi (Development)

Untuk mengembangkan atau menjalankan aplikasi ini di mesin lokal, ikuti langkah-langkah berikut:

### Prasyarat
- **Node.js** (versi 18.x atau lebih baru)
- **npm** atau **yarn**

### Langkah Menjalankan Aplikasi
1. **Clone Repository**
   ```bash
   git clone https://github.com/mhmmdragilpy/alfath.telkomuniversity.git
   cd alfathtelkomuniversity
   ```

2. **Instal Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

4. Buka browser dan arahkan ke `http://localhost:5173`.

## 🌐 Panduan Deployment (Production)

Proyek ini teroptimasi penuh untuk lingkungan *production* dan siap di-*deploy* menggunakan platform CI/CD modern seperti **Vercel**.

1. Pastikan seluruh perubahan kode telah di-`push` ke *repository* GitHub.
2. *Login* ke *dashboard* [Vercel](https://vercel.com/) dan buat proyek baru (*Add New Project*).
3. Import *repository* GitHub ini.
4. Vercel akan secara otomatis mendeteksi *framework* **Vite**.
5. Biarkan *build command* (`npm run build`) dan *output directory* (`dist`) secara *default*.
6. Klik **Deploy**. 

> **Catatan:** File `vercel.json` telah disertakan di *root* direktori untuk memastikan *client-side routing* (React Router) berjalan sempurna dan terhindar dari *error 404* saat melakukan muat ulang (*refresh*) halaman.

---

<div align="center">
  <p><i>Dirancang untuk berdakwah, dibangun dengan teknologi.</i></p>
  <b>Developed with ❤️ by Mang Do-san.</b>
</div>
