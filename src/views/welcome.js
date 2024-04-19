import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  function funNavigate() {
    navigate("/card");
  }
  return (
    <>
      <div className="HomePage" id="home">
        <div className="Content">
          <h1>Heartly Welcome</h1>

          <h2>Biradar Family</h2>
          <h2>Wedding Ceremony</h2>
          <br />
          <div>
            <a>
              <button className="bn53" onClick={funNavigate}>
                Welcome
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
