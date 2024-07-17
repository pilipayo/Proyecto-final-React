import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


const Footer = ({ company, year}) => {
  return (
    <footer>
      <div className="piedepagina">
        <h6>SEGUIME!</h6>

        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pilar-payo/">
          <FontAwesomeIcon icon={faLinkedin} className="fa-2x" style={{ color: '#503f2a' }} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/pilipayo">
          <FontAwesomeIcon icon={faGithubSquare} className="fa-2x" style={{ color: '#503f2a' }} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagramSquare} className="fa-2x" style={{ color: '#503f2a' }} />
        </a>
      
        <div className="props">
              <h5 className="text-uppercase">{company}</h5>
              <p>
                © {year}. All rights reserved.
              </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;