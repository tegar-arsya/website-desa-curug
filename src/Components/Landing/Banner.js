import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../assets/css/Banner.css';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "balaidesacurug.jpeg",
    "balaidesacurug.jpeg",
    // Tambahkan nama file gambar lainnya sesuai kebutuhan
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="carousel-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={require(`../../assets/img/${image}`)} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="content-container">
          <h1 data-aos="fade-up">Selamat Datang di Desa Curug</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">Kami siap menyambut Anda dengan hangat</h2>
        </div>
      </section>
    </div>
  );
}

export default Banner;