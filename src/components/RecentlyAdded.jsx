import { useState } from "react";
import { recentlyAddedData } from "../data/fakeData";
import "../styles/RecentlyAdded.scss";

const RecentlyAdded = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recentlyAddedData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + recentlyAddedData.length) % recentlyAddedData.length
    );
  };

  return (
    <div className="recently-added">
      <h2>Recently Added</h2>
      <div className="carousel">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          &lt;
        </button>
        <div className="card-container">
          {[-1, 0, 1].map((indexOffset) => {
            const cardIndex =
              (currentIndex + indexOffset + recentlyAddedData.length) %
              recentlyAddedData.length;
            const card = recentlyAddedData[cardIndex];
            return (
              <div
                className={`card ${indexOffset === 0 ? "active" : ""}`}
                key={card.id}
              >
                <img src={card.imageUrl} alt={card.type} />
                <div className="details">
                  <p>Data {card.id}</p>
                  <p>Price: {card.price}</p>
                  <p>Year: {card.year}</p>
                  <p>Type: {card.type}</p>
                  <p>Bidding Closes in {card.biddingClosing} days</p>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="nav-btn next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default RecentlyAdded;
