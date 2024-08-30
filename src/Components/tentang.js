import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiCheckDoubleLine } from 'react-icons/ri';
import axios from 'axios';
import '../assets/css/About.css';

const TentangListItem = ({ children }) => (
  <li><RiCheckDoubleLine className='icon-blue'/> {children}</li>
);

function Tentang() {
  const [population, setPopulation] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });

    // Fetch population data
    const fetchPopulation = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/statistics/statistics');
        setPopulation(response.data.population);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchPopulation();
  }, []);

  const visiContent = [
    "Mewujudkan hukum seharusnya bersifat adil, mudah diakses, dan dapat dipercaya"
  ];
  const misiContent = [
    "Menjadi solusi pertama dan terakhir dalam memenuhi kebutuhan keadilan sosial bagi masyarakat bagi semua masyarakat baik dari latar belakang manapun"
  ];
  const profilDesa = {
    nama: "Desa Curug",
    lokasi: "Desa Curug, Kecamatan Tegowanu, Kabupaten Grobogan, Jawa Tengah, Indonesia.",
    kodepos: "58165",
    luas: "Luas wilayah: 2,12 km²",
  };

  return (
    <section id='tentang' className='section-title section-tentang'>
      <div className='container' data-aos="fade-up" style={{ marginTop: '100px' }}>
        <div className=''>
          <h2>Tentang Desa Curug</h2>
        </div>
        <div className='profil-desa'>
          <h2>Profil Desa</h2>
          <ul className='profil-list'>
            <li><strong>Nama Desa:</strong> {profilDesa.nama}</li>
            <li><strong>Lokasi:</strong> {profilDesa.lokasi}</li>
            <li><strong>Kode Pos:</strong> {profilDesa.kodepos}</li>
            <li>
              <strong>Penduduk:</strong> {population ? (
                `Total: ${population.total_population}, Laki-laki: ${population.male_population}, Perempuan: ${population.female_population}`
              ) : (
                'Memuat data...'
              )}
            </li>
            <li><strong>Luas:</strong> {profilDesa.luas}</li>
          </ul>
        </div>
        <div className='row content'>
          <div className='col-lg-6 pt-4 pt-lg-0'>
            <h2>Visi</h2>
            <ul className='no-bullet'>
              {visiContent.map((item, index) => (
                <TentangListItem key={index}>{item}</TentangListItem>
              ))}
            </ul>
          </div>
          <div className='col-lg-6 pt-4 pt-lg-0'>
            <h2>Misi</h2>
            <ul className='no-bullet'>
              {misiContent.map((item, index) => (
                <TentangListItem key={index}>{item}</TentangListItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;