import React, { useState } from "react";
import Header from "../../components/header/Header";

export default function Technology( { data } ) {
  const [technology, setTechnology] = useState("Launch vehicle");

  const handleTechnologySelected = (e) => {
    setTechnology(e);
  };

  return (
    <>
      <div id="technology">
      <Header />
        {data.map((item) => {
          if (item.name === technology)
            return (
              <div className="content">
                <span className="subheading-second title-intro-mobile">
                  <b>01</b> space launch 101
                </span>
                <section className="container">
                  <img
                    className="mobile-tablet img-mobile-tablet"
                    src={item.images.landscape}
                    alt=""
                  />
                  <img
                    className="desktop"
                    src={item.images.portrait}
                    alt=""
                  />

                  <div className="div-second-part">
                    <div className="menu-circles-technology">
                      <button
                        onClick={() => handleTechnologySelected("Launch vehicle")}
                         className={technology ==="Launch vehicle" ?"circles active" :"circles" }
                      >
                        1
                      </button>
                      <button
                        onClick={() => handleTechnologySelected("Spaceport")}
                         className={technology ==="Spaceport" ?"circles active" :"circles" }
                      >
                        2
                      </button>
                      <button
                        onClick={() => handleTechnologySelected("Space capsule")}
                         className={technology ==="Space capsule" ?"circles active" :"circles" }
                      >
                        3
                      </button>
                    </div>

                    <div className="div-txt">
                      <h5>the terminology</h5>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </section>
              </div>
            );
        })}
      </div>
    </>
  );
}
