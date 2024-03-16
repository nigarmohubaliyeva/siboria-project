import "../styles/BuyersFeedback.scss";

const BuyersFeedback = () => {
  return (
    <div className="feedback-container">
      <div className="image-section">
        <img src="/images/image 12.png" alt="Placeholder Image" />
      </div>
      <div className="content-section">
        <div className="feedback-text">
          <h2>Buyers Feedback</h2>
        </div>
        <div className="feedback-cards">
          <div className="feedback-card">
            <img
              src="/images/avatar.png"
              alt="User Avatar"
              className="avatar"
            />
            <div className="buyer-info">
              <h3>Selena Hakim</h3>
              <p>UI Developer</p>
            </div>
            <div className="rating">
              <span role="img" aria-label="star">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </div>
            <p className="comment">
              &quot;Excellent products and great customer service!&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersFeedback;
