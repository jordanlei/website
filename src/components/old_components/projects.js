import React, { Component } from 'react';
import { Row, Col, Card, CardGroup, CardColumns, Button} from 'reactstrap';
import "../css/experience.css";
import Fade from 'react-reveal';

class Projects extends Component {
  render() {
    return (
      <div className="experience-container">            
        <div className="center-row">
        <Fade bottom duration={5000}>
        <h3>
          View some of my projects
        </h3>
        </Fade>
        <CardGroup style={{paddingTop: 5+'%'}}>
        <CardColumns>
          <Card className= "project-card">
          <h4><b>PolicyMaker</b></h4>
            <p>
              <b>Software Engineering Course Project, 2019</b><br/>
              Worked on a team of 5 to develop an integrated 
              app for micro-financing for policymakers. Developed
              an Android App for patrons and a Web App (using React.js)
              for policymakers to track donation data, with backend
              integration using MongoDB.  
            </p>
            <p>
              <Button>Software Engineering</Button> <Button>Android</Button>
            </p>
          </Card>
          <Card className= "project-card">
          <h4><b>Correcting Autocorrect</b></h4>
            <p>
              <b>Deep Learning Course Project, 2019</b><br/>
              Used bidirectional LSTMs to develop a word
              processing algorithm that would detect words
              that were grammatically correct but contextually
              incorrect.
            </p>
            <p>
            <Button>Deep Learning</Button> <Button>NLP</Button>
            </p>
          </Card>         
          
          <Card className= "project-card">
          <h4><b>Agriculture News Analysis</b></h4>
            <p>
              <b>Wharton Global Research Consulting, 2018</b><br/>
              Worked on a team to help a client company analyze aggregated
              news data in the agriculture industry. Deliverables
              included an analytics dashboard generated in R.
            </p>
            <p>
              <Button>Data Analytics</Button>
            </p>
          </Card>

          <Card className= "project-card">
          <h4><b>PennOS</b></h4>
            <p>
              <b>Operating Systems Course Project, 2018</b><br/>
              Worked on a team of 3 to code a functional Linux-style shell
              and operating system in C, complete with file system 
              functionality. 
            </p>
            <p>
            <Button>Operating Systems</Button> <Button>C</Button>
            </p>
          </Card>

          <Card className= "project-card">
          <h4><b>Facial Expression Detection</b></h4>
            <p>
              <b>Applied Machine Learning Course Project, 2018</b><br/>
              Worked on a team of 3 to use Convolutional Neural Networks
              to detect emotions elicited by facial expression. 
            </p>
            <p>
            <Button>Deep Learning</Button> <Button>Computer Vision</Button>
            </p>
          </Card>

          <Card className= "project-card">
          <h4><b>Ad Revenue Forecasting</b></h4>
            <p>
              <b>Wharton Analytics Fellows, 2018</b><br/>
              Worked on a team to help our client, an advertising platform, 
              estimate revenue for prospective customers using various 
              Data Analytics tools and Machine Learning techniques, 
              including a simple feedforward Deep Neural Network.
            </p>
            <p>
            <Button>Data Analytics</Button>
            </p>
          </Card>
        </CardColumns>
        </CardGroup>
        </div>
      </div>
    );
  }
}

export default Projects;
