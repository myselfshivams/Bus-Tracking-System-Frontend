import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    address: ''
  });

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="frame" onClick={handleEnvelopeClick}>
      <div id="button_open_envelope">
        Email me
      </div>
      <div className={`message ${isEnvelopeOpen ? 'pull' : ''}`}>
        <form method="post" action="contact.php" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" Name* "
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" Email* "
            required
            pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder=" Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            id="messarea"
            placeholder=" Message* "
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="address"
            id="address"
            style={{ display: 'none' }}
            value={formData.address}
            onChange={handleChange}
          />
          <input type="submit" value="Send" id="send" />
        </form>
      </div>
      <div className="bottom"></div>
      <div className="left"></div>
      <div className="right"></div>
      <div className={`top ${isEnvelopeOpen ? 'open' : ''}`}></div>
    </div>
  );
};

export default ContactForm;
