import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ numOfStars = 5 }) {
  // click and hover index
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  }

  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  }

  const handleMouseLeave = () => {
    setHover(rating);
  }

  return <div className="star-rating">
    {
      [...Array(numOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        )
      })
    }
  </div>
}