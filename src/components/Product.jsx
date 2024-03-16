import "../styles/main.scss";

const Product = () => {
  return (
    <div className="content">
      <div className="text">
        <h1 className="title">World’s Biggest</h1>
        <h1>Antique Collection</h1>
        <p>
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distruts may instantly was household applauded
          incommode.
        </p>
        <div className="btn">
          <button className="discover-btn">Discover Now</button>
          <button className="video-btn">
            <img src="/images/Group 5.png" alt="group5" />
            <span>Watch Video</span>
          </button>
        </div>
      </div>

      <div className="image">
        <img src="/images/image 1.svg" alt="Antique Vase" />
      </div>
      <div className="icons">
        <img src="/images/Group 8.png" alt="group8" />
        <img src="/images/Group 9.png" alt="group9" />
        <img src="/images/Group 10.png" alt="group10" />
      </div>
    </div>
  );
};

export default Product;
