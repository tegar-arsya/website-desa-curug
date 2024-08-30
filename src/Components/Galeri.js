import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Portfolio.css';

function GaleriItem({ image, title, onClick }) {
  return (
    <div className="portfolio-item col-lg-4 col-md-6" data-aos="fade-up">
      <div className="portfolio-card" onClick={onClick}>
        <div className="portfolio-img">
          <img src={image} alt={title} />
        </div>
        <div className="portfolio-info">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

function Galeri() {
  const [posts, setPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('*');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/gallery/postsGallery');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleImageClick = (image, title, description) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const GaleriItems = posts.map((post) => ({
    image: `http://localhost:5000${post.imageUrl}`,
    title: post.title,
    description: post.description,
  }));

  const filteredItems = activeFilter === '*'
    ? GaleriItems
    : GaleriItems.filter(item => item.category && item.category.includes(activeFilter));

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Galeri</h2>
        </div>

        <div className="row">
          {filteredItems.map((item, index) => (
            <GaleriItem
              key={index}
              image={item.image}
              title={item.title}
              onClick={() => handleImageClick(item.image, item.title, item.description)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="full-screen-view active">
          <div className="modal-content">
            <div className="full-screen-image">
              <img src={selectedImage} alt={selectedTitle} />
            </div>
            <div className="full-screen-description">
              <h2>{selectedTitle}</h2>
              <p>{selectedDescription}</p>
            </div>
          </div>
          <button className="close-full-screen" onClick={closeModal}>Close</button>
        </div>
      )}
    </section>
  );
}

export default Galeri;