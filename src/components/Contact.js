import React, { Component, createRef } from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";
export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.sectionRef = createRef();
        this.state = {
            isVisible: false,
            name: '',
            email: '',
            subject: '',
            message: '',
            // recaptchaToken: ''
        };
    }
    handleRecaptchaChange = (token) => {
        this.setState({ recaptchaToken: token });
    };
    
    componentDidMount() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        this.setState({ isVisible: true });
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (this.sectionRef.current) {
            observer.observe(this.sectionRef.current);
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = this.state;
    
        try {
            const res = await axios.post(
                "http://localhost:3200/send-email",
                {
                     name:name, email:email, subject:subject, message:message 
                }
            );
            // alert("Email sent successfully!");
            toast.success("Email sent successfully!");
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error(error);
            // alert("Failed to send email.");
            toast.error("Failed to send email.");
        }
    };

    render() {
        const { isVisible, name, email, subject, message } = this.state;
        return (
            <div>
                <section className="section container" id="contact" ref={this.sectionRef}>
                    <div className="container text-center">
                        <p className={`section-subtitle ${isVisible ? 'animate__animated animate__fadeInDown' : ''}`}
                            style={{ animationDelay: '0.5s' }}>How can you contact me?</p>
                        <h6 className={`section-title mb-3 ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                            style={{ color: '#695aa6', animationDelay: '1s' }}>Contact Us</h6>
                        <p className={`text-gray-300 ${isVisible ? 'animate__animated animate__fadeInUp' : ''} `}
                            style={{ animationDelay: '0.5s' }}>
                            If you have any questions or need further information, please do not hesitate to reach out to us
                        </p>

                        <form onSubmit={this.handleSubmit}
                            className={`${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
                            style={{
                                animationDelay: '0.5s',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <div className="half left cf" style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="w-100"
                                    value={name}
                                    onChange={this.handleInputChange}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="mt-3 w-100"
                                    value={email}
                                    onChange={this.handleInputChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="mt-3 w-100"
                                    value={subject}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>

                            <div className="half right cf mt-sm-3 mt-md-0 mt-lg-0" style={{ width: '100%' }}>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    className="w-100"
                                    value={message}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </div>
                            {/* <ReCAPTCHA
    sitekey="6LcFJRArAAAAAFcvL9tMdV-EdoJOrNhRI4KK5ZAm"
    onChange={this.handleRecaptchaChange}
   
 
/> */}

                            <input
                                type="submit"
                                value="Send Message"
                                className="w-lg-25 w-50 mt-4 btn "
                                style={{ alignSelf: 'center', background: '#695aa6', color: 'white', height: '50px' }}
                            />
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}
