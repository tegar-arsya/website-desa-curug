import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiCheckDoubleLine } from 'react-icons/ri';
import '../assets/css/About.css';

const tentangListItem = ({ children }) => (
  <li><RiCheckDoubleLine className='icon-blue'/> {children}</li>
);

function Tentang() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const visiContent = [
    "Mewujudkan hukum seharusnya bersifat adil, mudah diakses, dan dapat dipercaya"
  ];
  const misiContent = [
    "menjadi solusi pertama dan terakhir dalam memenuhi kebutuhan keadilan sosial bagi masyarakat bagi semua masyarakat baik dari latar belakang manapun"
  ];
  return (
    <section id='tentang'className='section-title section-tentang' >
      <div className='container' data-aos="fade-up">
        <div className='' >
          <h2>About Us</h2>
        </div>
        <div className='row content'>
          <div className='col-lg-6 pt-4 pt-lg-0'>
          <h2>Visi</h2>
            <ul className='no-bullet'>
              {visiContent.map((item, index) => (
                <tentangListItem key={index}>{item}</tentangListItem>
              ))}
            </ul>
          </div>
          <div className='col-lg-6 pt-4 pt-lg-0'>
          <h2>Misi</h2>
            <ul className='no-bullet'>
              {misiContent.map((item, index) => (
                <tentangListItem key={index}>{item}</tentangListItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;