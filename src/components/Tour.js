import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, onRemove }) => {
  const [fullInfo, setFullInfo] = useState(false);
  return (
    <li className="tour">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <article className="text-box">
        <div className="info between-flex">
          <h2>{name}</h2>
          <p>$ {price}</p>
        </div>
        <p className="description">
          {fullInfo ? `${info} ` : `${info.substring(0, 150)}... `}
          <button
            type="button"
            className="toggle-p"
            onClick={() => setFullInfo(!fullInfo)}
          >
            {fullInfo ? "show less" : "read more"}
          </button>
        </p>
        <button type="button" className="btn" onClick={() => onRemove(id)}>
          not interested
        </button>
      </article>
    </li>
  );
};

export default Tour;
