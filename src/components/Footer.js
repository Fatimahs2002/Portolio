import React, { useEffect, useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [activeNavItem, setActiveNavItem] = useState("#home");

  const handleScroll = () => {
    const sections = ["#home", "#about", "#skills", "#projects", "#contact"];
    let currentSection = "#home"; // Default section

    for (const section of sections) {
      const element = document.querySelector(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
          break;
        }
      }
    }

    setActiveNavItem(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust based on navbar height
        behavior: "smooth",
      });
      setActiveNavItem(targetId);
    }
  };

  return (
    <footer className="footer pt-4 pb-2" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row">
          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3 ps-lg-5" style={{ color: "#695aa6" }}>Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { id: "#home", label: "Home" },
                { id: "#about", label: "About" },
                { id: "#skills", label: "Skills" },
                { id: "#projects", label: "Projects" },
                { id: "#contact", label: "Contact" },
              ].map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={id}
                    onClick={(e) => handleNavClick(e, id)}
                    style={{
                      color: activeNavItem === id ? "#695aa6" : "black",
                      fontWeight: activeNavItem === id ? "bold" : "normal",
                      textDecoration: activeNavItem === id ? "underline" : "none",
                      transition: "color 0.3s ease",
                    }}
                    className="d-block py-1 ps-lg-5"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3 ps-lg-5" style={{ color: "#695aa6" }}>Contact Information</h5>
            <ul className="list-unstyled ps-lg-5" style={{ color: "#695aa6" }}>
              <li><p><b>Email:</b> fatimahassanhassan8@gmail.com</p></li>
              <li><p><b>Phone:</b> 
              +961 81 724 159
              </p>
              </li>
              <li><p><b>Location:</b> Tyre, Lebanon</p></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 mb-4 text-center">
            <h5 className="mb-3 ps-lg-5" style={{ color: "#695aa6" }}>Follow Me</h5>
            <div className="d-flex justify-content-center ps-lg-5">
              {[
                { href: "https://wa.me/81724159", icon: <FaWhatsapp size={30} /> },
                { href: "https://www.linkedin.com/in/fatima-hassan-a8592a273", icon: <FaLinkedin size={30} /> },
                { href: "https://github.com/Fatimahs2002", icon: <FaGithub size={30} /> },
              ].map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                  style={{ color: "#695aa6" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="mb-1">Developed by Fatima Hassan</p>
          <p className="mb-0">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
