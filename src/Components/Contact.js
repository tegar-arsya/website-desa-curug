import React, { useState } from 'react';
import '../assets/css/Contact.css';

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };
<input
  type="text"
  name="name"
  value={contact.name}
  onChange={handleInputChange}
/>
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here, e.g., sending data to a server
    console.log('Form data:', contact);
    // Reset form after submission
    setContact({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
// Call handleSubmit when the form is submitted
<form onSubmit={handleSubmit}>
  {/* form fields */}
  <button type="submit">Submit</button>
</form>
  return (
    <section id="contact" className="contact section-contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bx bx-current-location"></i>
                <h4>Location:</h4>
                <p>Jl. Wolter Monginsidi, Kp. Tanggulangin dalam II C, RT. 003/RW. 004, Kel. Banjardowo, Kec. Genuk, Kota Semarang. 
</p>
              </div>

              <div className="email">
                <i className="bx bx-mail-send"></i>
                <h4>Email:</h4>
                <p>rimpartner7@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bx bx-phone"></i>
                <h4>Call:</h4>
                <p>085869877083</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-stretch">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7693282549115!2d110.6384425!3d-7.0129602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70945d811e85e9%3A0xd7a4024b08b31923!2sCurug%2C%20Kec.%20Tegowanu%2C%20Kabupaten%20Grobogan%2C%20Jawa%20Tengah!5e0!3m2!1sen!2sid!4v1691749191726!5m2!1sen!2sid"
  style={{ border: 1, width: '100%', height: '300px' }}
  allowFullScreen
  title="Google Maps"
></iframe>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
