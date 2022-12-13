import React, { useState } from "react";
import Header from "../../components/header/Header";

export default function Crew({ data }) {

  const [crew, setCrew] = useState('Douglas Hurley')

  const handleCrewSelected = (e) => {
    setCrew(e)
  }

  return (
    <>
    <div id="crew">
    <Header />
      {data.map((item) => {
        if (item.name === crew)
          return (
            <div class="container-crew">
              <span class="subheading-second title-intro-mobile">
                {" "}
                <b>01</b> Meet your crew
              </span>

              <div class="part-img-presentation">
                <img src={item.images.png} alt="" />

                <div class="second-part">
                  <div class="menu-circles-crew">
                    <button
                      onClick={() => handleCrewSelected('Douglas Hurley')}
                      className={crew === "Douglas Hurley" ?"circles active" : "circles"}
                    ></button>
                    <button
                      onClick={() => handleCrewSelected("Mark Shuttleworth")}
                      className={crew === "Mark Shuttleworth" ?"circles active" : "circles"}
                    ></button>
                    <button
                      onClick={() => handleCrewSelected("Victor Glover")}
                      className={crew === "Victor Glover" ?"circles active" : "circles"}
                    ></button>
                    <button
                      onClick={() => handleCrewSelected("Anousheh Ansari")}
                      className={crew === "Anousheh Ansari" ?"circles active" : "circles"}
                    ></button>
                  </div>

                  <div class="presentation">
                    <span class="subheading-second title-intro-desktop">
                      <b>01</b> Meet your crew
                    </span>
                    <div class="description">
                      <h5> {item.role} </h5>
                      <h3> {item.name} </h3>
                      <p> {item.bio} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
      })}
    </div>
    </>
  );
}
