import React, { useState } from 'react';
import Sidebar from '../../Sidebar';
import '../../../assets/css/UploadGallery.css';

const FormStrukturDesa = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika unggah gambar di sini
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Image:', image);
  };

  return (
    <div className="upload-gallery-container">
      <Sidebar />
      <div className="upload-gallery-content">
        <h1>formStrukturDesa</h1>
        <form onSubmit={handleSubmit} className="upload-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormStrukturDesa;
