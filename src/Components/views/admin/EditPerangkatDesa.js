import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../../Sidebar';
import Swal from 'sweetalert2'; // Import SweetAlert2
import '../../../assets/css/UploadGallery.css';

const EditPerangkatDesa = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  // Load data saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://apicurug.tegararsyadani.my.id/api/perangkat/postsPerangkat/${id}`);
        const { title, description, imageUrl } = response.data;
        setTitle(title);
        setDescription(description);
        setImage(imageUrl); // Atur nilai gambar jika ada
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.put(`https://apicurug.tegararsyadani.my.id/api/perangkat/postsPerangkat/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // SweetAlert success notification
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Gallery item updated successfully!',
        showConfirmButton: false,
        timer: 1500,
      });

     setTimeout(() => {
        navigate('/daftar-perangkat-desa');
      }, 1500); // Delay navigation to allow SweetAlert to be visible
    } catch (error) {
      console.error('Error updating gallery item:', error);
    }
  };

  return (
    <div className="upload-gallery-container">
      <Sidebar />
      <div className="upload-gallery-content">
        <h1>Edit Perangkaat Desa</h1>
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

          <label htmlFor="image">Upload Image (Optional)</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditPerangkatDesa;
