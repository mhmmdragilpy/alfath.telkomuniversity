import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RegulationViewer from './pages/RegulationViewer';
import ProfileHUD from './pages/ProfileHUD';
import Kalender from './pages/Kalender';
import ComingSoon from './pages/ComingSoon';

// Preload logos & photos
const logoModules = import.meta.glob('/src/assets/logo/*.{svg,png}', { import: 'default', eager: true });
export const getLogo = (name: string) => {
  const match = Object.keys(logoModules).find(k => k.includes(name));
  return match ? (logoModules[match] as string) : '';
};

const photoModules = import.meta.glob('/src/assets/profil/*.{webp,png,jpg}', { import: 'default', eager: true });
export const getProfilPhoto = (name: string) => {
  const match = Object.keys(photoModules).find(k => k.includes(name));
  return match ? (photoModules[match] as string) : '';
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regulasi" element={<RegulationViewer />} />
          <Route path="/regulasi/:id" element={<RegulationViewer />} />
          <Route path="/profil/:struktur" element={<ProfileHUD />} />
          <Route path="/kalender" element={<Kalender />} />
          <Route path="/event" element={<ComingSoon />} />
          <Route path="/galeri" element={<ComingSoon />} />
          <Route path="/sop/:id" element={<ComingSoon />} />
          <Route path="/pengaduan/:id" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
