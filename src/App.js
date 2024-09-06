import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import Nav from './Components/Nav';
import './App.css';
import Banner from './Components/Landing/Banner';
import Galeri from './Components/Galeri';
import StukturOrganisasi from './Components/StukturOrganisasi';
import RekapanData from './Components/RekapanData';
import StatistikDesa from './Components/StatistikDesa';
import Contact from './Components/Contact';
import Tentang from './Components/tentang';
import Footer from './Components/Footer';
import Login from './Components/views/admin/login';
import Dashboard from './Components/views/admin/Dashboard'; // Example additional page
import UploadGallery from './Components/views/admin/UploadGallery';
import DaftarGallery from './Components/views/admin/DaftarGallery';
import EditGallery from './Components/views/admin/EditGalery';
import UploadPerangkatDesa from './Components/views/admin/UploadPerangkatDesa';
import DaftarPerangkatDesa from './Components/views/admin/DaftarPerangkatDesa';
import EditPerangkatDesa from './Components/views/admin/EditPerangkatDesa';

const noHeaderFooterRoutes = [
  '/login', 
  '/Dashboard', 
  '/UploadGallery', 
  '/daftar-gallery',
  '/edit-gallery/:id',
  '/UploadPerangkatDesa',
  '/daftar-perangkat-desa',
  '/edit-perangkat-desa/:id'
];

function Layout({ children }) {
  const location = useLocation();
  const isNoHeaderFooter = noHeaderFooterRoutes.some(route =>
    new RegExp(`^${route.replace(/:\w+/g, '\\w+')}$`).test(location.pathname)
  );

  return (
    <div className="App">
      {!isNoHeaderFooter && <Nav />}
      {children}
      {!isNoHeaderFooter && <Contact />}
      {!isNoHeaderFooter && <Footer />}
    </div>
  );
}


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/statistik-desa" element={<StatistikDesa />} />
          <Route path="/rekapan-data" element={<RekapanData />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/stuktur-organisasi" element={<StukturOrganisasi />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/UploadGallery" element={<UploadGallery />} />
          <Route path="/daftar-gallery" element={<DaftarGallery />} />
          <Route path="/edit-gallery/:id" element={<EditGallery />} />
          <Route path="/UploadPerangkatDesa" element={<UploadPerangkatDesa />} />
          <Route path="/daftar-perangkat-desa" element={<DaftarPerangkatDesa />} />
          <Route path="/edit-perangkat-desa/:id" element={<EditPerangkatDesa />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
