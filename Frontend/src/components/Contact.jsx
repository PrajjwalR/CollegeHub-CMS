import '../CSS/Contact.css';

function Contact() {
  return (
    <div>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Reach out to us for any questions or
          support.
        </p>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Our Address</h3>
            <p>123 College Avenue, Knowledge City</p>
            <p>Uttar Pradesh, India, 285001</p>

            <h3>Email</h3>
            <p>support@collegehub.com</p>

            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <form className="contact-form">
            <h3>Send Us a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
