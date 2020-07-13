import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/card';
import Footer from '../components/footer';
import '../static/css/pages.css';

const App = () => (
  <div>
    <div className="row">
      <div className="col contactCol">
        <Card source="../static/pics/gmail.png" text="algokano@gmail.com" />
        <Card source="../static/pics/github.png" text={<a href="https://github.com/sarvarr" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">GitHub</button></a>} />
        <Card source="../static/pics/linkedin.png" text={<a href="https://www.linkedin.com/in/sarvar-abdurahimov-1012161a7" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">LinkedIn</button></a>} />
        <Card
          source="../static/pics/resume.png"
          text={
            <React.Fragment>
              <a href="https://yadi.sk/i/5grebU19DCnSmg" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Resume</button></a>
              <a href="https://yadi.sk/i/5grebU19DCnSmg" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faDownload} /></button></a>
            </React.Fragment>
          }
        />
        <Card source="../static/pics/phone.png" text="+998 99 818-94-23" />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
