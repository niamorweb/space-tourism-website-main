import React, { useState } from "react";
import Header from "../../components/header/Header";

export default function Destination({ data }) {
  const [destination, setDestination] = useState("Moon");

  const handleDestinationSelected = (e) => {
    setDestination(e);
  };

  return (
    <>
      <div id="destination">
      <Header />
        <div className="content">
          {data.map((item) => {
            if (item.name === destination)
              return (
                <>
                  <span className="subheading-second pick-destination-title">
                    {" "}
                    <b>01</b> Pick your destination
                  </span>

                  <div className="img-and-all-text">
                    <img src={item.images.png} alt="" />

                    <div className="all-text">
                      <ul>
                        <li className={destination === "Moon" ? "active" : null}>
                          <a onClick={() => handleDestinationSelected("Moon")}>
                            <span className="subheading-second">Moon</span>
                          </a>
                        </li>
                        <li className={destination === "Mars" ? "active" : null}>
                          <a onClick={() => handleDestinationSelected("Mars")}>
                            <span className="subheading-second">Mars</span>
                          </a>
                        </li>
                        <li
                          className={destination === "Europa" ? "active" : null}
                        >
                          <a
                            onClick={() => handleDestinationSelected("Europa")}
                          >
                            <span className="subheading-second">Europa</span>
                          </a>
                        </li>
                        <li
                          className={destination === "Titan" ? "active" : null}
                        >
                          <a onClick={() => handleDestinationSelected("Titan")}>
                            <span className="subheading-second">Titan</span>
                          </a>
                        </li>
                      </ul>

                      <div className="container-title-description-travel-distance">
                        <div className="title-description">
                          <h2> {item.name} </h2>
                          <p> {item.description}</p>
                        </div>
                        <hr />
                        <div className="info-travel-distance">
                          <div className="info-travel">
                            <span className="subheading-second">
                              avg distance{" "}
                            </span>
                            <br />
                            <span className="subheading-first">
                              {item.distance}
                            </span>
                          </div>
                          <div className="info-distance">
                            <span className="subheading-second">
                              avg distance{" "}
                            </span>{" "}
                            <br />
                            <span className="subheading-first">
                              {item.travel}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
          })}
        </div>
      </div>
    </>
  );
}
