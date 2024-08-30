import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';  // Import SweetAlert
import Sidebar from '../../Sidebar';
import '../../../assets/css/UploadGallery.css';

const UploadGallery = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      setError('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/gallery/postsGallery/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to upload');
      }

      // SweetAlert Success
      swal({
        title: 'Success!',
        text: 'Image uploaded successfully!',
        icon: 'success',
        button: 'OK',
      }).then(() => {
        // Redirect to daftar-gallery page after alert
        navigate('/daftar-gallery');
      });

      // Reset form fields
      setTitle('');
      setDescription('');
      setImage(null);
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-gallery-container">
      <Sidebar />
      <div className="upload-gallery-content">
        <h1>Upload Gallery</h1>
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

          <button type="submit" disabled={loading}>
            {loading ? 'Uploading...' : 'Submit'}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default UploadGallery;