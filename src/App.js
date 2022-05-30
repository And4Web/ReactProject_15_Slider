import "./App.css";
import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import data from "./data";

function App() {
  const [user, setUser] = useState(data);
  const [index, setIndex] = useState(0);
  console.log(user);

  return (
    <div className="App">
      <h1>Slider app</h1>
      <section style={{ position: "relative" }}>
        {user.map((person) => {
          const { id, name, title, quote, image } = person;
          return (
            <article
              key={id}
              style={{ position: "absolute", top: "10vh", left: "10vw" }}
            >
              <img
                src={image}
                alt={name}
                style={{
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <h4>{name}</h4>
              <p>{title}</p>
              <p>{quote}</p>
              <FaQuoteRight />
            </article>
          );
        })}
        <button>
          <FiChevronLeft />
        </button>
        <button>
          <FiChevronRight />
        </button>
      </section>
    </div>
  );
}

export default App;
