import { useState } from 'react'; 
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Resume from './components/Resume/Resume.jsx';
import Work from './components/Work/Work.jsx';
import Contact from './components/Contact/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [activeSection, setActiveSection] = useState('Home'); // State to track which section is active

  // Function to handle toggling sections
  const handleToggle = (section) => {
    // If the clicked section is already active, collapse it by setting activeSection to an empty string
    if (activeSection === section) {
      setActiveSection('');
    } else {
      // Otherwise, set the clicked section as active
      setActiveSection(section);
    }
  };

  return (
    <div className="container bg-dark mb-1 ">
      <Header onToggle={handleToggle} />
      {activeSection === 'Home' && <Home />}
      {activeSection === 'Resume' && <Resume />}
      {activeSection === 'Work' && <Work />}
      {activeSection === 'Contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;