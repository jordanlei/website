import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import { StaticImage } from 'gatsby-plugin-image'
import pdf from '../files/resume.pdf'

class Experience extends Component {
  render(){

  const items = [
      { type: "header", content: "2022"},
    
      { type: "logo", image: <StaticImage src="../images/experience/logo-nyu.jpeg" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      { type: "exp", 
        title: "TA, Mathematical Tools for Neuroscience @ NYU", 
        date: "Fall 2022",
        description: 
        `
        Designed curricula and taught linear algebra, coding, and mathematical concepts to graduate students.
        `
      },

      { type: "logo", image: <StaticImage src="../images/experience/logo-nyu.jpeg" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      { type: "exp", 
        title: "PhD Rotations", 
        date: "2021 - 2022",
        description: 
        `
        Rotation Labs: Froemke Lab, Simoncelli Lab, Ma Lab
        `
      },

      { type: "header", content: "2021"},
    
      { type: "logo", image: <StaticImage src="../images/experience/logo-kordinglab.png" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      { type: "exp", 
        title: "Master's Thesis, Kording Lab @ Penn", 
        date: "2021",
        description: 
        `
        Project: Biologically-inspired algorithms for visual object based attention using Deep Learning.\
        Used recurrence, encoder-decoder architectures, and targeted loss functions to model objectbased\
        attention for classification tasks.
        `
      },

      { type: "logo", image: <StaticImage src="../images/experience/logo-522.png" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      { type: "exp", 
        title: "Lead TA, Penn Deep Learning Academy", 
        date: "Spring 2021",
        description: 
        `
        Led TA training and content creation efforts for the Penn 
        Deep Learning Academy (CIS 522), an open-source
        in Deep Learning taught by Konrad Kording and Lyle Ungar 
        in an inverted-classroom format. Organized enrollment, grading, and
        feedback infrastructure.
        Special topics: Deep Learning Ethics. 
        `
      },

      { type: "header", content: "2020"},

      { type: "logo", image: <StaticImage src="../images/experience/logo-mindcore.png" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      { type: "exp", 
        title: "MindCORE Summer Research Fellow, Gold Lab @ Penn", 
        date: "Summer 2020 - 2021",
        description: 
        `
        Project: Assess limitations of Reward Modulated Hebbian Learning relative to Deep
        Reinforcement Learning (DRL) in auditory discrimination tasks. Research funded 
        by Lila R. Gleitman MindCORE Summer Research Fellowship. 
        Preliminary results and figures submitted as part of a major grant proposal; presented at
        2020 Neuromatch Conference
        `
      },

      { type: "logo", image: <StaticImage src="../images/experience/logo-522.png" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      { type: "exp", 
        title: "TA, Deep Learning @ Penn", 
        date: "Spring 2020",
        description: 
        `
        Prepared course material, developed and graded homework assignments,
        held recitations and
        weekly office hours, led project meetings.
        Special topics: Neural Network Debugging (HW), GANs (recitation, slides), 
        NLP/Transformers (slides)
        `
      },

      { type: "header", content: "2019"},

      { type: "logo", image: <StaticImage src="../images/experience/logo-unilever.png" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      { type: "exp", 
        title: "Finance Intern, Unilever", 
        date: "May-August 2019",
        description: 
        `
        Developed RateDash, a functional dashboard for 
        automated rate validation
        for the monthly rolling forecast as part of 
        Sales and Operations Planning. Reduced rate validation 
        end-to-end time by 90 percent.
        `
      },

      { type: "logo", image: <StaticImage src="../images/experience/logo-penn.png" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      { type: "exp", 
        title: "TA, Machine Learning @ Penn", 
        date: "Spring 2019, Fall 2019",
        description: 
        `
        Prepared course material, including slides 
        and in-class activities, graded exams and homework.
        Special topics: Decision Trees, Perceptrons, Bayesian 
        Inference, AI and Data ethics
        `
      },

      // { type: "header", content: "2018"},

      // { type: "logo", image: <StaticImage src="../images/experience/logo-tovala.png" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      // { type: "exp", 
      //   title: "Finance Intern, Tovala", 
      //   date: "May-August 2018",
      //   description: 
      //   `
      //   Performed financial analysis 
      //   for end-of-month accounting for Tovala, a
      //   food-tech startup that specializes in meal delivery
      //   and smart ovens. Automated 
      //   marketing attribution. Predicted packaging 
      //   costs using historical weather data.
      //   `
      // },

      // { type: "header", content: "2017"},

      // { type: "logo", image: <StaticImage src="../images/experience/logo-penn.png" style={{display: "block", padding: "5%", width: "100px"}} alt = ""/>},
      // { type: "exp", 
      //   title: "PURM Research Fellow, Balasubramanian Lab @ Penn", 
      //   date: "May-August 2017",
      //   description: 
      //   `
      //   Project: Modeled visual pathway of the brain 
      //   using Deep Neural Networks trained on simulated 
      //   retinal spikes. Research funded by
      //   Penn Undergraduate Research Mentorship Fellowship.
      //   `
      // },
  ]

  var cards = items.map((i) => {
    if (i.type == "header"){
      return <Col md={12} style={{paddingTop: "5%"}}><h2>{i.content}</h2></Col>
    } 
    else if (i.type == "logo"){
      return <Col md={2}>
              {i.image}
            </Col>
    }
    else{
      return<Col md={10}>
        <p>
          <b>{i.title}</b><br/>
          <i>{i.date}</i><br/>
          {i.description}
        </p>
        </Col>
    }

  })

  return (
    <section id = "experience">
      <div className="dark section" style={{paddingBottom: 2+"%"}}>            
      <Fade><h1>EXPERIENCE</h1></Fade>
      <h4 style={{zIndex: "1", position:"relative"}}>
          <span className="stdbutton">
            <a href= {pdf} target="_blank">
            VIEW RESUME/CV
            <StaticImage src="../images/next.png" style={{marginLeft: "12px", marginTop: "-1px", height: "30px", width: "30px"}} alt = ""/>
            {/* <img src={require("../images/next.png")} height="40" width="40" style={{marginLeft: "12px", marginTop: "-3px"}}/> */}
            </a>
          </span>
      </h4>
      <Row>
        {cards}
      </Row>
    </div>
    </section>
  )
  }
}

export default Experience