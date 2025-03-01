import React, { Component, createRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; 

export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.sectionRef = createRef();
    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setState({ isVisible: true });
          }
        });
      },
      { threshold: 0.2 } // 20% of the section is visible to trigger
    );

    if (this.sectionRef.current) {
      observer.observe(this.sectionRef.current);
    }
  }

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <section 
          className="section-about  ms-lg-5" 
          id="about" 
          style={styles.section} 
          ref={this.sectionRef}
        >
          <div className=" container text-center">
            
            <p 
              className={`section-subtitle ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}
              style={{ animationDelay: '0.5s' }}
            >
              Who Am I?
            </p>

            <h2 
              className={`section-title mb-3 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
              style={{ color: '#695aa6', animationDelay: '1s' }}
            >
              About Me
            </h2>

            <div className="row align-items-center">
              
              {/* Text Section with Staggered Fade-In Animations */}
              <div className="col-md-8">
                <div className="about-caption text-left">
                  <ul className="about-list ">
                    {[
                      "Hi there! I'm a passionate web developer with a keen eye for design and a love for creating beautiful and functional websites.",
                      "My journey in web development started several years ago, and since then, I've been honing my skills and expanding my knowledge in various technologies.",
                      "I specialize in frontend development, where I enjoy bringing ideas to life and crafting engaging user experiences.",
                      "In addition to frontend development, I'm also experienced in backend development and database management. This full-stack expertise allows me to build end-to-end solutions that are both robust and scalable."
                    ].map((text, index) => (
                      <li 
                        key={index}
                        className={` text-dark font-weight-normal mb-4 ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}
                        style={{ animationDelay: `${1.2 + index * 0.3}s` }}
                      >
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Image Section with Zoom-In Effect */}
              <div className="col-md-4 ">
                <div className="about-img-holder">
                  <img
                    src="https://miro.medium.com/max/1400/1*qdAW1TjCN57h1lbuuzvchg.gif"
                    className={`about-img ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
                    alt="About Me"
                    style={{ animationDelay: '1.5s', borderRadius: '15px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// Inline styles
const styles = {
  section: {
    // padding: '80px 0',
    // background: 'linear-gradient(135deg, #f6f8fc, #e9e9f0)',
  },
};


