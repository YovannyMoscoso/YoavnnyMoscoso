import styles from './Contact.module.css';

function Contact() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

    return (
        <div id="contact">
            <div className="card card-body bg-danger text-white py-5 rounded-0">
                <h2>Contact</h2>
            </div>
            <div className="card card-body py-5 rounded-0">
                <h3>Get In Touch</h3>
                <p className='lead'>
                    {"Feel free to reach out if you're a recruiter or developer. I'm available to discuss opportunities and respond to any inquiries. Leave a message, and I'll get back to you as soon as possible."}
                </p>
                <form action={apiUrl} method="POST">
                  <input type="hidden" name="access_key" value={apiKey}/>
                    <div className="form-group">
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-danger text-white">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                            <input
                                name='name'
                                type="text"
                                className={`form-control ${styles.customInput} bg-secondary text-white`}
                                placeholder="Name"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-danger text-white">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            <input
                                name='email'
                                type="email"
                                className={`form-control ${styles.customInput} bg-secondary text-white`}
                                placeholder='Your Email'
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-danger text-white">
                                    <i className="fas fa-pencil-alt"></i>
                                </span>
                            </div>
                            <textarea
                                name="message"
                                className={`form-control ${styles.customInput} bg-secondary text-white`}
                                placeholder="Type a message..."
                            ></textarea>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-danger btn-block btn-lg"
                    />
                </form>
            </div>
        </div>
    );
}

export default Contact;
