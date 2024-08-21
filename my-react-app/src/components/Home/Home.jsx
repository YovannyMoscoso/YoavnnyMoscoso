function Home() {
    return (
        <div id="home">
            <div className="card card-body bg-primary text-white py-5 rounded-0">
                <h2>{"Welcome To Yovanny's Showcase"}</h2>
                <p className="lead"></p>
            </div>
            <div className="card card-body py-5 rounded-0">
                <h3>My Skills</h3>
                <p>{"Through my university projects, I've gained valuable expertise in industry-leading frameworks and technologies. These experiences have sharpened my skills in the following key areas:"}</p>
                <hr />
                <h4>Java</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{ width: "95%" }}></div>
                </div>
                <h4>Python</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{ width: "95%" }}></div>
                </div>
                <h4>SQL</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{ width: "95%" }}></div>
                </div>
                <h4>JavaScript</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{ width: "80%" }}></div>
                </div>
                <h4>HTML</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{ width: "70%" }}></div>
                </div>
                <h4>React</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
                </div>
                <h4>CSS</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{ width: "50%" }}></div>
                </div>
                <h4>Bootstrap</h4>
                <div className="progress mb-3">
                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
