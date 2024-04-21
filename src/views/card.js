import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="cardImage" id="home">
      <div className="card-Content">
        <div className="content-body">
          <h4>
            <i>
              We are honored and
              <br />
              Pleased to invite you to <br />
              the Engagement Ceremony of
            </i>
          </h4>
          <h2 class="typing-animation">
            <i>
              <b>Akash</b>
            </i>
          </h2>
          <h2>&</h2>
          <h2 class="typing-animation">
            <i>
              <b>Bhagyashree</b>
            </i>
          </h2>
          <h4>
            <i>11AM onwards, 30th April 2024</i>
          </h4>

          <h4>
            Venue:
            <p
              onClick={() => {
                window.location.replace(
                  "https://www.google.com/maps/place/Vishwaradhya+Kalyan+Mantapa/@17.3642951,76.8131446,15.13z/data=!4m6!3m5!1s0x3bc8b9f1207bc3c1:0x65da8c36cb748f4e!8m2!3d17.3625537!4d76.810928!16s%2Fg%2F11f5q7bqn8?authuser=0&entry=ttu"
                );
              }}
              style={{ cursor: "pointer" }}
            >
              <u style={{ color: " #000" }}>
                <i>
                  Shri Vishwaradhya Temple <br />
                  near Aland check post,
                  <br />
                  Kalburgi.
                </i>
              </u>
            </p>
          </h4>

          <h4>
            Please join us on Engagement and make it more beautiful with your
            presence.
          </h4>
        </div>
      </div>
    </div>
  );
}
