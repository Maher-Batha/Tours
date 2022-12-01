import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, onRemove }) => {
  return (
    <section className="section">
      <h2 className="title">Our Tours</h2>
      <ul className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} onRemove={onRemove} />;
        })}
      </ul>
    </section>
  );
};

export default Tours;
