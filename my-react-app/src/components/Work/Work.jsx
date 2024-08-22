import './Work.module.css'; // Import your CSS module for additional styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included

const Work = () => {
  return (
    <section id="work" className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="accordion" id="projectsAccordion">
        
        {/* Database Architecture and Business Solutions */}
        <div className="accordion-item mb-4">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Database Architecture and Business Solutions
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#projectsAccordion"
          >
            <div className="accordion-body">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    This project includes a PowerPoint presentation detailing database architecture and business problems addressed with Oracle SQL.
                  </p>
                  <div className="embed-responsive embed-responsive-16by9">
                    <video controls className="embed-responsive-item" src="/path/to/your-database-video.mp4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Android Application */}
        <div className="accordion-item mb-4">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Android Application
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#projectsAccordion"
          >
            <div className="accordion-body">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    An Android application developed using Android Studio. Currently, it runs locally using an emulator.
                  </p>
                  <div className="embed-responsive embed-responsive-16by9">
                    <video controls className="embed-responsive-item" src="/path/to/your-android-video.mp4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* JavaFX Project */}
        <div className="accordion-item mb-4">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              JavaFX Project
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#projectsAccordion"
          >
            <div className="accordion-body">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">
                    A JavaFX project showcasing graphical user interface capabilities.
                  </p>
                  <div className="embed-responsive embed-responsive-16by9">
                    <video controls className="embed-responsive-item" src="/path/to/your-javafx-video.mp4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Work;
