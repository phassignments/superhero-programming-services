import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const Home = () => {
  //set state
  const [card, setCard] = useState([]);
  //set effect
  useEffect(() => {
    fetch("./teachers.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <div>
      <div className="container mt-2 mb-2">
        <div className="row">
          {card.map((student) => (
            <Card key={student.key} student={student}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
