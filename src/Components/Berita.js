import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBalanceScale, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Services.css';

const BeritaCard = ({ icon, title, description, link, delay, isImage }) => (
  <div className={`col-xl-3 col-md-6 d-flex align-items-stretch mt-4 ${delay ? `mt-xl-0` : ''}`} data-aos="zoom-in" data-aos-delay={delay}>
    <div className="icon-box">
      <div className="icon" style={{ color: '#002366', fontSize: '50px' }}>
        {isImage ? <img src={icon} alt={title} style={{ width: '200px', height: '200px' }} /> : <FontAwesomeIcon icon={icon} />}
      </div>
      <h4><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h4>
      <p>{description}</p>
    </div>
  </div>
);

function Berita() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const Berita = [
    {
      icon: "https://kabarone.com/wp-content/uploads/2021/02/IMG-20210219-WA0050.jpg",
      title: "DPC Ikadin Demak : Dugaan Penganiayaan Terhadap Sugiono Adalah Penghinaan Profesi",
      description: "Kabar terbaru mengenai dugaan penganiayaan dan penghinaan profesi.",
      link: "https://kabarone.com/2021/02/19/dpc-ikadin-demak-dugaan-penganiayaan-terhadap-sugiono-adalah-penghinaan-profesi/",
      delay: "100",
      isImage: true
    }
    // ... tambahkan berita lainnya di sini jika diperlukan
  ];

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Berita</h2>
        </div>
        <div className="row">
          {Berita.map((service, index) => (
            <BeritaCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Berita;
