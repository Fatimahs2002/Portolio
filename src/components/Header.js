import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cvFile from "../assets/CV fatima hassan.pdf"; // Correctly import the CV file

export default class Header extends Component {
  render() {
    // Greeting based on time of day
    const currentHour = new Date().getHours();
    const greeting =
      currentHour < 12
        ? "Good Morning!"
        : currentHour < 18
        ? "Good Afternoon!"
        : "Good Evening!";

    // Current date in a friendly format
    const currentDate = new Date().toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

    // Random motivational quotes
    const quotes = [
      "Strive for progress, not perfection.",
      "Code, coffee, and creativity.",
      "Turning ideas into reality, one line at a time.",
      "Embrace the bugs—they lead to growth!",
      "Building a better web experience for all.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
      <div>
        <header id="home" className="header">
          <div className="overlay"></div>
          <div className="header-content ">
            <span className="header-title">
              <br></br>
              <div className="flex p-0">
              <span
                className="up animate__animated animate__fadeIn pt-sm-5"
                style={{ animationDelay: "0.5s" }}
              >
                {greeting}
              </span>
<br></br>
              <span
                className="down animate__animated animate__fadeIn pb-0"
                style={{ animationDelay: "1s" }}
              >
                I am Fatima Hassan
              </span>
              </div>
              <h4
                className="header-subtitle pt-2 animate__animated animate__fadeIn"
                style={{ animationDelay: "1.5s" }}
              >
                Full Stack Developer
              </h4>

              <p
                className="header-subtitle animate__animated animate__fadeIn"
                style={{ animationDelay: "2s" }}
              >
                I'm excited to share my work and experiences with you.
              </p>

              <div
                className="additional-info animate__animated animate__fadeInUp"
                style={{ animationDelay: "2.5s" }}
              >
                <p className="text-black mb-1">{currentDate}</p>
                <p className="text-black mb-3">"{randomQuote}"</p>

                <div className="mt-4 flex flex-col md:flex-row gap-4">
                  {/* Contact Me Button */}
                  <button
                    type="button"
                    className="btn-contact"
                    onClick={() => (window.location.href = "#contact")}
                  >
                    Contact Me
                  </button>

                  {/* Download CV Button */}
                  <button
                    type="button"
                    className="btn-send ms-3"
                    onClick={() => window.open(cvFile, "_blank")}
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </span>
          </div>
        </header>
      </div>
    );
  }
}
