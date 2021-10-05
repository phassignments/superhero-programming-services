import React from "react";
import "./Home.css";

const Card = (props) => {
  //destructuring
  const { name, img } = props.student;

  return (
    <div className="col-sm-4">
      <div className="card shadow mb-3">
        <img src={img} className="card-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <b>{name}</b>
          </h5>

          <button className="btn btn-primary">Teacher Info</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
