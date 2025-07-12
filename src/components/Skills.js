import React, { Component,createRef } from 'react';
import "../App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, faCss3Alt, faJs, faBootstrap, 
  faPhp, faNode, faNodeJs, faGitAlt, 
  faGithub, faReact, faDocker,faLaravel ,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import { 
  SiTailwindcss, SiNextdotjs, 
  SiTypescript, SiPrimereact, 
  SiMongodb, SiExpress, SiRedux ,SiSqlite
} from 'react-icons/si';

import 'bootstrap-icons/font/bootstrap-icons.css';

// Grouping skills into Frontend and Backend
const frontendSkills = [
  { name: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} />, level: 'Expert' },
  { name: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} />, level: 'Advanced' },
  { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} />, level: 'Advanced' },
  { name: 'Bootstrap', icon: <FontAwesomeIcon icon={faBootstrap} />, level: 'Advanced' },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} />, level: 'Advanced' },
  { name: 'Next.js', icon: <SiNextdotjs className="" style={{color: '#695aa6' }}/>, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, level: 'Advanced' },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, level: 'Advanced' },
  { name: 'PrimeReact', icon: <SiPrimereact className="text-indigo-500" />, level: 'Advanced' },
  { name: 'Redux', icon: <SiRedux className="text-purple-500" />, level: 'Advanced' }
 
];

const backendSkills = [
  { name: 'Node.js', icon: <FontAwesomeIcon icon={faNode} />, level: 'Advanced' },
  { name: 'Express', icon: <SiExpress className="text-gray-700" />, level: 'Advanced' },
  { name: 'PHP', icon: <FontAwesomeIcon icon={faPhp} />, level: 'Advanced' },
  { name: 'MySQL', icon: <FontAwesomeIcon icon={faDatabase} />, level: 'Advanced' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 'Advanced' },
  { name: 'Git', icon: <FontAwesomeIcon icon={faGitAlt} rotation={45} />, level: 'Advanced' },
  { name: 'Github', icon: <FontAwesomeIcon icon={faGithub} rotation={45} />, level: 'Advanced' },
  { name: 'Docker', icon: <FontAwesomeIcon icon={faDocker} rotation={45} />, level: 'Advanced' },
   { name: 'Laravel', icon: <FontAwesomeIcon icon={faLaravel} />, level: 'Expert' },
   { name: 'SQLite',icon: <SiSqlite className="text-purple-500" />, level: 'Advanced' }
 
];

export default class Skills extends Component {
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
      <section className="section" id="skills"
      ref={this.sectionRef}
      >
        <div className="container text-center">
          <p   className={`section-subtitle ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}
              style={{ animationDelay: '0.5s' }} >What I Know?</p>
          <h6 className={`section-title mb-3 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
              style={{ color: '#695aa6', animationDelay: '1s' }}>Skills</h6>
          <p className={`text-gray-300 ${isVisible ? 'animate__animated animate__fadeInUp' : ''} `}
          style={{ animationDelay: '0.5s' }}
          >
          Extensive expertise gained in many skills.
          </p>

          <div className="row">
            {/* Frontend Skills Column */}
            <div className="col-md-6 mb-4">
              <h4 className={`mb-4 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}` } 
              style={{ color: '#695aa6' ,animationDelay: '0.5s'}}>Frontend Skills</h4>
              <div className={`row ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}
              style={{ animationDelay: `1s` }}
              >
                {frontendSkills.map(({ name, icon }) => (
                  <div key={name} className="col-6 col-md-6 mb-4">
                    <div className="d-flex align-items-center justify-content-center skill-item">
                      <span className="skill-icon  font-monospace font-small">{icon}</span>
                      <div className=" text-center">
                        <h6 className="font-small mt-3 name">{name}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills Column */}
            <div className="col-md-6 mb-4">
              <h4 className={`mb-4 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}` } 
              style={{ color: '#695aa6' ,animationDelay: '0.5s'}} >Backend Skills</h4>
              <div className={`row ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}
              style={{ animationDelay: `1s` }} >
                {backendSkills.map(({ name, icon }) => (
                  <div key={name} className="col-6 col-md-6 mb-4">
                    <div className="d-flex align-items-center justify-content-center skill-item font-small">
                      <span className="skill-icon  font-small ">{icon}</span>
                      <div className=" text-center">
                        <h6 className="font-small mt-3 name">{name}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
