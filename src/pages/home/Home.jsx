import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <>
    <div id="home">
    <Header />
        <section className="home-section-main">
          <div className="home-div-txt">
            <h5> So, you want to travel to</h5>
            <h1>Space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <NavLink to="/space-tourism-website-main/destination">
          <button className="btn-home">
            <h4> Explore</h4>
            </button>
          </NavLink>
        </section>
    </div>
    </>
  );
}
