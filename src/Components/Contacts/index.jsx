import React from 'react';
import Button from '../Button';
import './contact.css';

const Contact = () => {
  return (
    <div className="ui container pages contact-page">
      <h2>Reach Out!</h2>
      <p className="contact-text">
        I'm Open To freelance, internship and junior Developer Roles.
        <br /> Got something that sounds exciting, or just want to say hello?{' '}
        Get In Touch With Me.
      </p>
      <div className="contact-details">
        <div className="contact-icons">
          <ul>
            <li>
              {' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/tubo-layefa/"
                alt="linkedin"
              >
                <i className="linkedin icon big "></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=+2347017189978"
                alt="whatsapp"
              >
                <i className="whatsapp icon big"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Iam_layefa"
                alt="twitter"
              >
                <i className="twitter icon big"></i>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/T-laye"
                alt="github"
              >
                <i className="github icon big"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="link-div">
          <a href="mailto:tlayefaah@gmail.com">
            <Button text="Contact me " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
