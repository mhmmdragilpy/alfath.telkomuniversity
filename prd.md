# Product Requirement Document (PRD)
**Project Name:** Website Profil & Pusat Regulasi LDK Al-Fath Telkom University
**Kepengurusan:** Gen 13 (Kabinet Raksa Samarasya)
**Target Platform:** Astro Framework + Tailwind CSS
**Execution Method:** Direct Implementation via Agentic AI Antigravity

---

## 1. Project Overview & Context
LDK Al-Fath Telkom University Gen 13 membutuhkan pusat ekosistem digital terpadu untuk memperkuat personal branding organisasi, mengintegrasikan dakwah antara unit pusat dengan 7 Al-Fath Fakultas, serta mendigitalisasi seluruh instrumen regulasi internal. Proyek ini dibangun langsung menggunakan Agentic AI Antigravity berbasis aset file dan visual yang telah siap di repositori lokal.

### Visi Organisasi
"Menjadi rumah pembinaan mahasiswa muslim Telkom University yang relevan, inklusif, dan terintegrasi dalam membentuk generasi yang beriman, berkarakter, dan berdampak dalam kehidupan akademik dan sosial."

### Misi Organisasi
1. Mengembangkan sistem mentoring kontekstual dan berkelanjutan.
2. Membangun budaya profesional dan pengukuran dampak yang jelas.
3. Menghadirkan dakwah inklusif dan relevan.
4. Mengintegrasikan pusat dan fakultas.

### Tagline Resmi
`#Gagah Gempita, Rangkul Bersama`

---

## 2. Analisis Struktur Repositori & Aset (Inisiasi Project)

Agentic AI harus membaca, mengaitkan, dan mengabaikan nilai anggaran pada file teks dengan pemetaan aset berikut:

### A. Folder: `Aset Regulasi Al-Fath`
Menampung file regulasi legal-baku berstruktur pasal tanpa nominal keuangan:
* `regulasi-umum-organisasi.txt`: Memuat aturan fundamental (Mekanisme Disiplin/SP restoratif berlandaskan QS. Al-'Asr, Prosedur Tabayyun/Ruang Aman berlandaskan QS. Al-Hujurat: 6, Syarat Sah Resign berlandaskan HR. Abu Daud, Perilaku Sosial/Budaya JAMAL, Perlindungan Data Privasi, Hubungan Luar/Siyasah, Atribut Organisasi/Muruah, dan Tata Laksana Kepanitiaan MVP).
* `regulasi-inti-pusat.txt`: Kualifikasi Ketua Umum, Aturan Pra-Syuro (Topik, Timekeeper, Target Output), dan tata kelola komunitas.
* `regulasi-biro-kesekretariatan.txt`: Standardisasi persuratan, batas timeline, dan manajemen database venue/gedung Telkom University.
* `regulasi-biro-keuangan.txt`: Laporan Kas, Dualisme Proposal (Ditmawa H-14 vs Pusat H+7), dan SOP inventaris logistik sekre.
* `regulasi-departemen-kaderisasi.txt`: Pembakuan kurikulum mentoring/islah periodik berkala, dan sistem pengaduan Web SiapDakwah.
* `regulasi-departemen-syiar.txt`: Standardisasi pemateri kajian eksternal, format program "Al-Fath Mendengar", dan fungsi controlling fakultas.
* `regulasi-departemen-medkominfo.txt`: Kultur interaksi digital, delegasi visual Design Class, dan panduan video profil berbasis storytelling.

### B. Folder: `Aset Foto Profil`
Seluruh file berformat `.webp` di bawah ini wajib dirender secara presisi pada halaman profil terkait:
* **Pimpinan Pusat (Struktur Inti & Biro):**
  * `Ketua Umum.webp` & `Koordinasi Akhwat.webp` (Dual-Leadership Sejajar)
  * `Sekretaris Jendral.webp`
  * `Kepala Biro Kesekretariatan.webp` & `Sekretaris Biro Kesekretariatan.webp`
  * `Kepala Biro Keuangan.webp` & `Sekretaris Biro Keuangan.webp`
* **Departemen Pusat:**
  * `Kepala Dept Kaderisasi Pusat.webp` & `Sekretaris Dept Kaderisasi Pusat.webp`
  * `Kepala Dept Syiar.webp` & `Sekretaris Dept Syiar.webp`
  * `Kepala Dept Medkominfo.webp` & `Sekretaris Dept Medkominfo.webp`
* **Pimpinan Al-Fath Fakultas (Mas'ul & Koordinasi Akhwat):**
  * **FEB:** `Mas'Ul Fakultas Ekonomi dan Bisnis.webp` & `Koordinasi Akhwat Fakultas Ekonomi dan Bisnis.webp`
  * **FIT:** `Mas'Ul Fakultas Ilmu Terapan.webp` & `Koordinasi Akhwat Fakultas Ilmu Terapan.webp`
  * **FIF:** `Mas'Ul Fakultas Informatika.webp` & `Koordinasi Akhwat Fakultas Informatika.webp`
  * **FKS (FKB):** `Mas'Ul Fakultas Komunikasi dan Ilmu Sosial.webp` & `Koordinasi Akhwat Fakultas Komunikasi dan Ilmu Sosial.webp`
  * **FRI:** `Mas'Ul Fakultas Rekayasa Industri.webp` & `Koordinasi Akhwat Fakultas Rekayasa Industri.webp`
  * **FTE:** `Mas'Ul Fakultas Teknik Elektro.webp` & `Koordinasi Akhwat Fakultas Teknik Elektro.webp`

### C. Folder: `Aset Logo Al-Fath`
Aset berbasis vektor untuk optimalisasi tema visual antarmuka:
* `Logo Al-Fath.svg` & `Logo Al-Fath.ico` (Identitas global situs & favicon).
* `Logo Al-Fath Teks.svg` (Navigasi header navbar).
* **Logo Fakultas:** `Logo Al-Fath FEB.svg`, `Logo Al-Fath FIF.svg`, `Logo Al-Fath FIK.svg`, `Logo Al-Fath FIT.svg`, `Logo Al-Fath FKS.svg`, `Logo Al-Fath FRI.svg`, `Logo Al-Fath FTE.svg`.
* **Branding Kabinet:** `Logo Raksa Samarasya Horizontal Krem.svg`, `Logo Raksa Samarasya Horizontal Merah.svg`, `Logo Raksa Samarasya Vertikal Krem.svg`, `Logo Raksa Samarasya Vertikal Merah.svg`.
* `Open Graph Image.png`: Thumbnail visual pratinjau otomatis link tautan sosial media (WA/Instagram).

### D. Folder: `Aset Data dan Tekstual Al-Fath`
Menampung file data mentah deskripsi program kerja terstruktur (bebas anggaran) untuk diinjeksi ke komponen web:
* `proker-inti.txt`, `proker-biro-kesekretariatan.txt`, `proker-biro-keuangan.txt`, `proker-kaderisasi-pusat.txt`, `proker-syiar-pusat.txt`, `proker-medkominfo-pusat.txt`.
* **Proker Fakultas:** `proker-fakultas-feb.txt`, `proker-fakultas-fif.txt`, `proker-fakultas-fik.txt`, `proker-fakultas-fit.txt`, `proker-fakultas-fkb.txt`, `proker-fakultas-fri.txt`, `proker-fakultas-fte.txt`.

---

## 3. Arsitektur Informasi & Aturan Sistem Navigasi

### A. Beranda Umum (`/src/pages/index.astro`)
* **Hero Section (3-Panel Grid Layout Layout):**
  * **Panel Kiri:** Komponen Teks Visi Organisasi (Lengkap dengan fonetis arti kata).
  * **Panel Tengah:** Judul Utama: `LDK AL-FATH GEN 13` & `Kabinet Raksa Samarasya`.
  * **Panel Kanan:** Komponen Daftar Misi Organisasi (Poin 1-4).
  * **Bottom Banner Section:** Penempatan teks Tagline `#Gagah Gempita, Rangkul Bersama` dengan kontras tinggi.
* **Bagan Interaktif Makro:** Struktur visual organisasi yang menghubungkan unit pusat ke halaman rincian fakultas.

### B. Pusat Regulasi & SOP (`/src/pages/regulasi/*`)
* `/regulasi/index.astro`: Dashboard utama direktori SOP dilengkapi komponen *Live Search Filter* berbasis teks keyword.
* `/regulasi/[sop].astro`: Viewer teks legal terenkapsulasi HTML/Markdown. Wajib menyertakan komponen *Sidebar Table of Contents (ToC)* interaktif yang mendeteksi tag heading otomatis.

### C. Dinamis Profil Halaman (`/src/pages/profil/[struktur].astro`)
* **Ketentuan Desain:**
  * Komponen **Dual-Leadership Card** wajib merender Foto Mas'ul/Ketua (Ikhwan) berdampingan secara sejajar dengan Koordinasi Akhwat di setiap tingkat kepengurusan pusat dan fakultas.
  * Injeksi warna aksen spesifik berdasarkan file SVG fakultas (contoh: tema biru untuk FIF, merah untuk FIK) tanpa merusak keselarasan warna global Al-Fath (Emerald Green, Gold, Clean White).
  * Komponen *Proker Grid Card* otomatis menarik deskripsi, indikator keberhasilan, dan target dampak dari file data tekstual terkait.

---

## 4. Aturan Non-Fungsional (Ketetapan Teknis)
1. **Zero-JavaScript Hydration:** Maksimalkan fitur Static Site Generation (SSG) Astro agar memuat halaman HTML statis <2 detik di perangkat seluler.
2. **Kerahasiaan Data & Keamanan Form:** Form pengaduan KDRP tidak boleh menyimpan rekap data secara publik di database lokal, melainkan wajib diarahkan langsung menuju endpoint pintas internal/Contact Person resmi demi kepatuhan terhadap Ketetapan Privasi No. 7.
3. **Penyelarasan Logika Kode:** Logika aturan operasional pengerjaan proposal kegiatan (H-14) dan keuangan (H+7) pada komponen info kesekretariatan harus tersinkronisasi linier secara mutlak dengan isi dokumen Pusat Regulasi.