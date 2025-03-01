import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true); // New state for home section
  const location = useLocation();

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = (targetId) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
      setActiveNavItem(targetId);
      setIsNavOpen(false); // Close the menu after clicking a link
    }
  };

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    handleScroll(targetId);
  };

  const handleScrollEvent = () => {
    const aboutSection = document.querySelector("#about");
    const skillsSection = document.querySelector("#skills");
    const projectsSection = document.querySelector("#projects");
    const contactSection = document.querySelector("#contact");

    const aboutSectionTop = aboutSection ? aboutSection.offsetTop : 0;
    const skillsSectionTop = skillsSection ? skillsSection.offsetTop : 0;
    const projectsSectionTop = projectsSection ? projectsSection.offsetTop : 0;
    const contactSectionTop = contactSection ? contactSection.offsetTop : 0;

    const scrollPosition = window.scrollY + 100; // Adjust the offset as needed

    if (scrollPosition >= contactSectionTop) {
      setActiveNavItem('#contact');
      setIsScrolled(true);
      setIsHome(false);
    } else if (scrollPosition >= projectsSectionTop) {
      setActiveNavItem('#projects');
      setIsScrolled(true);
      setIsHome(false);
    } else if (scrollPosition >= skillsSectionTop) {
      setActiveNavItem('#skills');
      setIsScrolled(true);
      setIsHome(false);
    } else if (scrollPosition >= aboutSectionTop) {
      setActiveNavItem('#about');
      setIsScrolled(true);
      setIsHome(false);
    } else {
      setActiveNavItem('#home');
      setIsScrolled(false);
      setIsHome(true); // Set to true when at home section
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div>
      <nav className={`custom-navbar ${isScrolled ? (isHome ? "" : "affix") : ""}`} data-spy="affix" data-offset-top="20">
        <div className="container">
          <Link className="logo" to="#" onClick={(e) => handleNavClick(e, '#home')}>
            Fatima
          </Link>
          <ul className={`nav ${isNavOpen ? "show" : "hide"}`}>
            <li className="item">
              <Link
                className={`link ${activeNavItem === '#home' ? 'active' : ''}`}
                to={location.pathname}
                onClick={(e) => handleNavClick(e, '#home')}
              >
                Home
              </Link>
            </li>
            <li className="item">
              <Link
                className={`link ${activeNavItem === '#about' ? 'active' : ''}`}
                to={location.pathname}
                onClick={(e) => handleNavClick(e, '#about')}
              >
                About
              </Link>
            </li>
            <li className="item">
              <Link
                className={`link ${activeNavItem === '#skills' ? 'active' : ''}`}
                to={location.pathname}
                onClick={(e) => handleNavClick(e, '#skills')}
              >
                Skills
              </Link>
            </li>
            <li className="item">
              <Link
                className={`link ${activeNavItem === '#projects' ? 'active' : ''}`}
                to={location.pathname}
                onClick={(e) => handleNavClick(e, '#projects')}
              >
                Projects
              </Link>
            </li>
            <li className="item">
              <Link
                className={`link ${activeNavItem === '#contact' ? 'active' : ''}`}
                to={location.pathname}
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={handleToggle}
            id="nav-toggle"
            className={`hamburger hamburger--elastic ${isNavOpen ? "is-active" : ""}`}
          >
            <div className="hamburger-box ">
              <div className="hamburger-inner"></div>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

