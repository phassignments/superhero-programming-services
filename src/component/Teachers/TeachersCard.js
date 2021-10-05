import React from "react";

const TeachersCard = (props) => {
  //destructuring
  const { name, language, phone, img } = props.teacher;
  return (
    <div className="col-sm-4">
      <div className="card shadow mb-3 student-card">
        <img src={img} className="card-img mt-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <b>{name}</b>
          </h5>
          <h6>
            <b>Language: {language}</b>
          </h6>
          <h6>
            <b>Phone: {phone}</b>
          </h6>
          <button className="btn btn-primary">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default TeachersCard;
