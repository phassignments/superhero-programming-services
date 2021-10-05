import React from "react";

const Contact = () => {
  return (
    <div className="container mt-3 mb-3">
      <h1>How Can We Help You?</h1>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <div className="card shadow p-3 mt-4">
            <div className="card-body">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Your Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder=" Write Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="+8801712345678"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button className="btn btn-primary">SEND</button>
            </div>
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default Contact;
