import "../styles/Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Recieve latest news, updates, and many other things every week.</p>
        <form className="subscribe-form" action="#" method="POST">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">
            <img src="/images/send-2.png" alt="Send" />
            <span>Subscribe</span>
          </button>
        </form>
      </div>
      <div className="newsletter-image">
        <img src="/images/image3.png" alt="Newsletter" />
      </div>
    </div>
  );
};

export default Newsletter;
