import resume from "/SoftwareDeveloper.pdf";
import resume2 from "/data_analyst.pdf";
/* 
    * This component will be in charge if the footer part of my portfolio
*/
function Footer(){
    return (
        <footer id="footer" className="p-5 bg-dark text-white">
            <div className="row mb-1">
                <div className="col-md-6">
                    <a href={resume} download className="btn btn-outline-light">
                        <i className="fas fa-cloud"></i> Download Software Developer Resume
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <a href={resume2} download className="btn btn-outline-light">
                        <i className="fas fa-cloud"></i> Download Data Analyst Resume
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer