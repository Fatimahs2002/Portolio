import React, { Component ,createRef } from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Projects extends Component {
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
      <section className="section" id="projects"
      ref={this.sectionRef}>
        <div className="container text-center">
          <p className={`section-subtitle ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}
              style={{ animationDelay: '0.5s' }}>What I Did?</p>
          <h2 className={`section-title mb-3 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
              style={{ color: '#695aa6', animationDelay: '1s' }}>Projects</h2>
          <p className={`text-gray-300 ${isVisible ? 'animate__animated animate__fadeInUp' : ''} `}
          style={{ animationDelay: '0.5s' }}>
          Worked, trained, completed projects at companies

          </p>
          <div className="row">
            {/* Project 1 */}
            <div className={`col-lg-6 col-md-6 mb-4 ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}
            style={{animationDelay: '0.5s'}}>
  <div className="project-card">
    <div className="project-card-caption">
      <h4>An Employee Mangment System</h4>
      <ul className="about-list text-left font-weight-normal">
        <li className="mb-4 text-dark">
          Developed a full-featured employee management system using React.js and 
SQLite.
        </li>
        <li className="mb-4 text-dark">
         Enabled HR to manage employees and track timesheets effectively.
        </li>
           <li className="mb-4 text-dark">
       Integrated a calendar view to display all timesheets with start and end dates, 
improving visibility and planning.
        </li>
      </ul>
      <div className="project-links">
        <a
          href="https://github.com/Fatimahs2002/-employee-management-system.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
          style={{ background: '#695aa6', border: 'none', boxShadow: 'none' }}
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</div>
            
            
            {/* Project 2 */}

            <div className={`col-lg-6 col-md-6 mb-4 ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}
            style={{animationDelay: '0.5s'}}>
  <div className="project-card">
    <div className="project-card-caption">
      <h4>A Maintenance Management System</h4>
      <ul className="about-list text-left font-weight-normal">
        <li className="mb-4 text-dark">
          Software for efficient maintenance task management, minimizing downtime, and enhancing resource lifespan.
        </li>
        <li className="mb-4 text-dark">
          Built using React,TypeScript.js, Next.js, Tailwind CSS, and PrimeReact.
        </li>
      </ul>
      <div className="project-links">
        <a
          href="https://github.com/Fatimahs2002/Maintenance-Brainkets.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
          style={{ background: '#695aa6', border: 'none', boxShadow: 'none' }}
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</div>
            
   {/* Project 3 */}
   
 <div  className={`col-lg-6 col-md-6 mb-4 ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}
            style={{animationDelay: '0.5s'}}>
  <div className="project-card">
    <div className="project-card-caption">
      <h4>Cleaning and Beauty Website</h4>
      
      <ul className="about-list text-left font-weight-normal">
        <li className="mb-4 text-dark">
          Built an E-commerce website for a cleaning and beauty supplies factory
        </li>
        <li className="mb-4 text-dark">
          A static website using the MERN stack technologies and Bootstrap
        </li>
        <li className="mb-4 text-dark">
          Deployed the back-end and front-end on Render
        </li>
      </ul>
      
      <div className="project-links row">
        
        {/* Frontend Link */}
        <div className="col text-center">
          <h6 className="mb-2">Frontend</h6>
          <a
            href="https://github.com/Fatimahs2002/Star2024"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ background: '#695aa6',border:'none',boxShadow:'none' }}
          >
            GitHub
          </a>
        </div>
        
        {/* Backend Link */}
        <div className="col text-center">
          <h6 className="mb-2">Backend</h6>
          <a
            href="https://github.com/Fatimahs2002/APIStar2024"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ background: '#695aa6',border:'none',boxShadow:'none' }}
          >
            GitHub
          </a>
        </div>
        
      </div>
    </div>
  </div>
</div>

            {/* Project 4 */}
           <div className={`col-lg-6 col-md-6 mb-4 ${isVisible ? 'animate__animated animate__fadeInRight' : ''}`}
            style={{animationDelay: '0.5s'}}>
              <div className="project-card">
                <div className="project-card-caption">
                  <h4>Restaurant Website</h4>
                  <ul className="about-list text-left font-weight-normal">
                    <li className="mb-4 text-dark">
                      Develop a restaurant website that allows users to manage menu items (CRUD operations)
                    </li>
                    <li className="mb-4 text-dark">
                      A static website using both front-end and back-end technologies, including HTML, CSS, JavaScript, Bootstrap, SQL, and PHP.
                    </li>
                  </ul>
                  <div className="project-links">
                    <a
                      href="https://github.com/Fatimahs2002/menu_violet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ background: '#695aa6',border:'none',boxShadow:'none' }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
{/* Project 5 */}


   <div className={`col-lg-6 col-md-6 mb-4 ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`}
            style={{animationDelay: '0.5s'}}
            >
              <div className="project-card">
                <div className="project-card-caption">
                  <h4>Pest Control</h4>
                  <ul className="about-list text-left font-weight-normal">
                    <li className="mb-4 text-dark">
                      Creating a website for a pest control company
                    </li>
                    <li className="mb-4 text-dark">
                      A static website interface using JavaScript, HTML, CSS, and Bootstrap.
                    </li>
                    <li className="mb-4 text-dark">
                      Deploy the project on GitHub
                    </li>
                  </ul>
                  <div className="project-links" >
                    <a
                      href="https://github.com/Fatimahs2002/Himaya2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm "
                      style={{ background: '#695aa6',border:'none',boxShadow:'none' }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    );
  }
}

