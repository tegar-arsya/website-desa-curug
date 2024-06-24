import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Portfolio.css';

// Dynamically import images
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/img/portfolio', false, /\.(png|jpe?g|svg)$/));

function PortfolioItem({ image }) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-img">
        <img src={image} className="img-fluid" alt="Portfolio" />
      </div>
      <div className="portfolio-info">
        {/* Add additional information or buttons here if needed */}
      </div>
    </div>
  );
}

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);

  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const portfolioItems = images.map((image, index) => ({
    image,
    imageFull: image, // Assuming full image is same as thumbnail for this example
    // category: 'category-name', // Add categories if needed
  }));

  const filteredItems = activeFilter === '*'
    ? portfolioItems
    : portfolioItems.filter(item => item.category && item.category.includes(activeFilter));

  return (
    <div>
      <section id="portfolio" className="portfolio section-porto">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portofolio</h2>
            <p>Magnam dolores commodi suscipit...</p>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map((item, index) => (
              <PortfolioItem key={index} image={item.image} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
