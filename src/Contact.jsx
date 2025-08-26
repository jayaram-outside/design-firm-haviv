import { useState } from 'react';
export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  // Add this function
  function handleSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
      e.target,
      'YOUR_USER_ID' // replace with your EmailJS user ID
    ).then((result) => {
      alert('Message sent!');
      setShowForm(false);
    }, (error) => {
      alert('Failed to send message.');
    });
  }

  return (
    <section className="pageContent contact-page">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Contact</h1>
          <div className="contact-block">
            <strong>Work Inquiries</strong><br />
            <div className="contact-muted">info@cghnyc.com</div>
            <div>212.532.4595</div>
          </div>
          <div className="contact-block">
            <strong>Press Inquiries</strong>
            <div>Christopher Nutter</div>
            <div>917.770.0350</div>
            <div className="contact-muted">press@cghnyc.com</div>
          </div>
          <div className="contact-block">
            <strong>Chermayeff & Geismar & Haviv</strong>
            <div>27 West 24th Street, Suite 900</div>
            <div>New York, NY 10010</div>
          </div>
          <div className="contact-social">
            <span
              className="contact-form-link"
              style={{ color: "#2176d9", cursor: "pointer", textDecoration: "underline" }}
              onClick={() => setShowForm(true)}
            >
              Contact Form
            </span>
            <span style={{color: "#aaa"}}><a href='https://twitter.com'>Twitter</a></span><br />
            <span style={{ color: "#aaa" }}><a href='https://instagram.com'>Instagram</a></span><br />
            <span style={{ color: "#aaa" }}><a href='https://facebook.com'>Facebook</a></span>
          </div>
        </div>
        <div className="contact-art">
          <img
            src="https://hw2l96z9d4lmwrzcpyznvzxnw.js.wpenginepowered.com/img/contact-collage@2x.jpg"
            alt="Art"
          />
        </div>
      </div>

      {showForm && (
        <div className="contact-modal">
          <div className="contact-modal-content">
            <button className="contact-modal-close" onClick={() => setShowForm(false)}>
              &times;
            </button>
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Message:
                <textarea name="message" rows="5" required />
              </label>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
