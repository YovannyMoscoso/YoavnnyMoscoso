import resume from "/MyResume2024.pdf";
/* 
    * This component will be in charge if the footer part of my portfolio
*/
function Footer(){
    return (
        <footer id="footer" className="p-5 bg-dark text-white">
            <div className="row">
                <div className="col-md-6">
                    <a href={resume} download className="btn btn-outline-light">
                        <i className="fas fa-cloud"></i> Download Resume
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer