import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Resources</h2>
          <p>Download</p>
          <p>Help Center</p>
          <p>Guide Book</p>
          <p>App Directory</p>
        </div>
        <div className="footer-section">
          <h2>Seboria</h2>
          <p>Why Seboria</p>
          <p>Our Collection Process</p>
          <p>Customer Stories</p>
          <p>Instagram Post</p>
        </div>
        <div className="footer-section">
          <h2>Company</h2>
          <p>Antiques</p>
          <p>About Seboria</p>
          <p>Success</p>
          <p>Information</p>
        </div>
        <div className="footer-section">
          <h2>Get in Touch</h2>
          <p>Feel free to get in touch with us via email</p>
          <p>example@gmail.com</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#">
              <img src="/images/Group 43.png" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Antique Collection. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
