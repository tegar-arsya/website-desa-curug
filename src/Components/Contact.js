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

  return (
    <section id="contact" className="contact section-contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.487192090354!2d110.47690972257068!3d-6.982425855543467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3HCsDM1JzEwLjgiUyAxMTDCsDQ1JzUzLjUiRQ!5e0!3m2!1sen!2sid!4v1661002232058!5m2!1sen!2sid"
              style={{ border: 0, width: '100%', height: '290px' }}
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
