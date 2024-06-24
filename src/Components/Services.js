import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBalanceScale, faUsers, faHome } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Services.css';

const ServiceCard = ({ icon, title, description, delay }) => (
  <div className={`col-xl-3 col-md-6 d-flex align-items-stretch mt-4 ${delay ? `mt-xl-0` : ''}`} data-aos="zoom-in" data-aos-delay={delay}>
    <div className="icon-box">
    <div className="icon" style={{ color: '#002366', fontSize: '50px' }}><FontAwesomeIcon icon={icon} /></div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const services = [
    {
      icon: faBalanceScale,
      title: "Perdata",
      description: "Perjanjian, Utang Piutang, Wanprestasi, dan lainnya.",
      delay: "100"
    },
    {
      icon: faGavel,
      title: "Pidana",
      description: "Pencemaran Nama Baik, Penipuan, Penganiayaan, dan lainnya.",
      delay: "200"
    },
    {
      icon: faUsers,
      title: "Keluarga",
      description: "Perkawinan, Perceraian, Hak Asuh Anak, Waris, dan lainnya.",
      delay: "300"
    },
    {
      icon: faHome,
      title: "Pertahanan dan Properti",
      description: "Hak atas Tanah, Tanah Ulayat, Sengketa Tanah, dan lainnya.",
      delay: "400"
    }
    // ... add more services here if needed
  ];

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Layanan</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
