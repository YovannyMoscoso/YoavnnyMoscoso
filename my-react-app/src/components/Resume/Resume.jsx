import { useEffect } from "react";
function equalizeCarouselItems() {
  const items = document.querySelectorAll(".carousel-item");
  let maxHeight = 0;

  // Find the maximum height
  items.forEach((item) => {
    const itemHeight = item.offsetHeight;
    if (itemHeight > maxHeight) {
      maxHeight = itemHeight;
    }
  });

  // Set all items to the maximum height
  items.forEach((item) => {
    item.style.height = `${maxHeight}px`;
  });
}

function Resume() {
    useEffect(() => {
      equalizeCarouselItems();
    }, []);
  
    return (
      <div id="resume">
        <div className="card card-body bg-success text-white py-5 rounded-0">
          <h2 className="mb-3">My Resume</h2>
          <p className="lead">{"Here’s a bit about my work experience: I have a solid foundation in full-stack development with a focus on Java and React. My experience working " +  
          "in large corporations has honed my ability to tackle complex problems and deliver results in fast-paced environments. " + 
            "I'm eager to apply my technical skills and practical experience to new challenges. "}</p>
        </div>
  
        <div className="card card-body py-5 rounded-0" >
          <h3 className="mb-3">Where Have I Worked?</h3>
          <div className="card-deck">
  
            <div className="card">
              <div className="card-body bg-secondary text-white">
                <h4 className="card-title text-center bg-dark p-2">Middlesex College</h4>
                <div id="slider1" className="carousel slide mb-5">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#slider1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#slider1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#slider1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#slider1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                  <div className="carousel-inner bg-secondary">
                    <div className="carousel-item active">
                      <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                        Conducted data analysis in the Business and Computer Science departments to assist in planning future courses based on student enrollment trends.
                      </p>
                    </div>
                    <div className="carousel-item">
                    <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                        Proactively addressed delays in crucial major courses by analyzing student records and implementing personalized advisories.
                      </p>
                    </div>
                    <div className="carousel-item">
                    <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                        Initiated efforts to enhance overall student enrollment by providing responsive guidance.
                      </p>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#slider1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#slider1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <p className="p-2 mb-3 bg-dark text-white">Position: Credential Support Specialist</p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: Feb 2023 - Present</h6>
              </div>
            </div>


            <div className="card">
              <div className="card-body bg-secondary text-white">
                <h4 className="card-title text-center bg-dark p-2">Amazon DSP</h4>
                <div id="slider2" className="carousel slide mb-5" >
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#slider2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#slider2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#slider2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner bg-secondary">
                    <div className="carousel-item active">
                    <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                      Led a project to address package misplacements in a fast-paced environment.
                      </p>
                    </div>
                    <div className="carousel-item">
                    <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                      Implemented a container check system, which improved placement accuracy and operational efficiency.
                      </p>
                    </div>
                    <div className="carousel-item">
                    <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                      Successfully reduced package misplacements by 50% and optimized overall workflow, demonstrating effective problem-solving skills.
                      </p>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#slider2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#slider2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <p className="p-2 mb-3 bg-dark text-white">Position: Area Manager Intern</p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: May 2023 - July 2023</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-body bg-secondary text-white">
                <h4 className="card-title text-center bg-dark p-2" >Bed Bath & Beyond</h4>
                <div id="slider3" className="carousel slide mb-5">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#slider3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#slider3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#slider3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner bg-secondary">
                    <div className="carousel-item active">
                    <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                        Conducted data analysis in the Business and Computer Science departments to assist in planning future courses based on student enrollment trends.
                      </p>
                    </div>
                    <div className="carousel-item">
                    <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                        Proactively addressed delays in crucial major courses by analyzing student records and implementing personalized advisories.
                      </p>
                    </div>
                    <div className="carousel-item">
                    <p className="mb-5 bg-secondary d-block text-white p-5 text-center">
                        Initiated efforts to enhance overall student enrollment by providing responsive guidance.
                      </p>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#slider3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#slider3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <p className="p-2 mb-3 bg-dark text-white">Position: Office Assistant</p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: 
                    Oct 2022 - March 2023</h6>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default Resume;
  