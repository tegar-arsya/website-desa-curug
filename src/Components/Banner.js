import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner_img from '../assets/img/RIMP.png';
import '../assets/css/Banner.css';


function BannerButton({ href, className, icon, text, iconColor, textColor }) {
  const buttonStyle = {
    color: textColor ? textColor : 'white',  // Default text color is white
  };

  return (
    <a href={href} className={className} style={buttonStyle}>
      {icon && <FontAwesomeIcon icon={faWhatsapp} className='icon-whatsapp' style={{ color: iconColor }} />}
      <span>{text}</span>
    </a>
  );
}

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Konsultasikan Permasalahan Anda Dengan Kami</h1>
              <h2>Dedikasi untuk Kepentingan Terbaik Anda</h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
              <BannerButton href="https://wa.me/6285869877083" className="btn-get-started scrollto" icon={<FontAwesomeIcon icon={faWhatsapp} className='icon-whatsapp'/>} text="Konsultasi Sekarang" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src={Banner_img} className="img-fluid animated" alt="Banner" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
