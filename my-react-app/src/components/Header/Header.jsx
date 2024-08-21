import './Header.css';
import PropTypes from 'prop-types'; // Import PropTypes
import graduationPic from "/src/assets/graduationPic.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Header({ onToggle }) { // Accept the onToggle prop
  return (
    <div className="container bg-dark">
      <header id="main-header">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-5">
            <img src={graduationPic} style={{ height: "386px"}} alt="Graduation Pic" />
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="d-flex flex-column">
              <div className="p-5 bg-dark text-white">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h1 className="display-4">Yovanny Moscoso</h1>
                  <div className="d-none d-md-block">
                    <a href="https://www.linkedin.com/in/yovanny-moscoso/" target='blank' className="text-white">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                  <div className="d-none d-md-block">
                    <a href="https://github.com/YovannyMoscoso" target="blank" className="text-white">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                  <div className="d-none d-md-block">
                    <a href="https://x.com/MoscosoYov99556" target="blank" className="text-white">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-black">
                Experienced Full Stack Web Developer
              </div>

              <div>
                <div className="d-flex flex-row text-white align-items-stretch text-center">
                  <div className="port-item p-4 bg-primary" onClick={() => onToggle('Home')}>
                    <i className="fas fa-home fa-2x d-block"></i>
                    <span className="d-none d-sm-block">Home</span>
                  </div>
                  <div className="port-item p-4 bg-success" onClick={() => onToggle('Resume')}>
                    <i className="fas fa-graduation-cap fa-2x d-block"></i>
                    <span className="d-none d-sm-block">Resume</span>
                  </div>
                  <div className="port-item p-4 bg-warning" onClick={() => onToggle('Work')}>
                    <i className="fas fa-folder-open fa-2x d-block"></i>
                    <span className="d-none d-sm-block">Work</span>
                  </div>
                  <div className="port-item p-4 bg-danger" onClick={() => onToggle('Contact')}>
                    <i className="fas fa-envelope fa-2x d-block"></i>
                    <span className="d-none d-sm-block">Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

// Adding PropTypes validation
Header.propTypes = {
  onToggle: PropTypes.func.isRequired, // Ensures onToggle is a required function prop
};

export default Header;
