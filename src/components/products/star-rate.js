import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (index) => {
    setRating(index);
  };
  const handleMenter = (index) => {
    // console.log(index);
    setHover(index);
  };
  const handleMleave = () => {
    setHover(rating);
  };
  return (
    <div className="s-r-container">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <FontAwesomeIcon
            icon={faStar}
            key={index}
            className={`star ${
              index <= (hover || rating) ? "active" : "inactive"
            }`}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMenter(index)}
            onMouseLeave={() => handleMleave()}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
