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
          <p className="lead">{"I am a motivated professional with a solid workplace foundation. My experience in large corporations has fostered my quick learning, leadership abilities, and strong time management skills, making me a valuable candidate for future opportunities. I am open to adapting to any new experiences."}</p>
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

                </div>
                <p className="p-2 mb-3 bg-dark text-white">Position: Area Manager Intern</p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: May 2023 - July 2023</h6>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default Resume;
  