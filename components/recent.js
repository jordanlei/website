import {Row, Col} from 'reactstrap';
import Image from 'next/image'

export default function Recent(){
    const items = [
        { type: "header", content: "2022"},

        { type: "exp", 
          image: <Image src="/images/experience/logo-nyu.jpeg" width={100} height={100} style={{display: "block", padding: "5%", width: "100px", height:"auto"}} alt = ""/>,
          title: "TA, Mathematical Tools for Neuroscience @ NYU", 
          date: "Fall 2022",
          description: 
          `
          Designed curricula and taught linear algebra, coding, and mathematical concepts to graduate students.
          `
        },
  
        { type: "exp", 
          image: <Image src="/images/experience/logo-nyu.jpeg" width={100} height={100} style={{display: "block", padding: "5%", width: "100px", height:"auto"}} alt = ""/>,
          title: "PhD Rotations", 
          date: "2021 - 2022",
          description: 
          `
          Rotation Labs: Froemke Lab, Simoncelli Lab, Ma Lab
          `
        },
  
        { type: "header", content: "2021"},
        { type: "exp", 
          image: <Image src="/images/experience/logo-kordinglab.png" width={100} height={100} style={{display: "block", padding: "5%", width: "100px", height:"auto"}} alt = ""/>,
          title: "Master's Thesis, Kording Lab @ Penn", 
          date: "2021",
          description: 
          `
          Project: Biologically-inspired algorithms for visual object based attention using Deep Learning.\
          Used recurrence, encoder-decoder architectures, and targeted loss functions to model objectbased\
          attention for classification tasks.
          `
        },
  
        { type: "exp", 
          image: <Image src="/images/experience/logo-522.png" width={100} height={100} style={{display: "block", padding: "5%", width: "100px", height:"auto"}} alt = ""/>,
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

        { type: "exp", 
          image: <Image src="/images/experience/logo-mindcore.png" width={100} height={100} style={{display: "block", padding: "5%", width: "100px", height:"auto"}} alt = ""/>,
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
        { type: "exp", 
          image: <Image src="/images/experience/logo-522.png" width={100} height={100} style={{display: "block", padding: "5%", width: "100px", height:"auto"}} alt = ""/>,
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
        { type: "exp", 
          image: <Image src="/images/experience/logo-unilever.png" width={100} height={100} style={{display: "block", padding: "5%", width: "100px", height:"auto"}} alt = ""/>,
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
    ]
  
    var cards = items.map((i) => {
      if (i.type == "header"){
        return <Col md={12} style={{paddingTop: "15px", paddingLeft:"30px"}}><h2>{i.content}</h2></Col>
      } 
      else{
        return<Row className="frostedCard" style={{zIndex: "-1"} }>
        <Col md={2}>
                {i.image}
        </Col>
        <Col md={10}>
          <p>
            <b>{i.title}</b><br/>
            <i>{i.date}</i><br/>
            {i.description}
          </p>
        </Col>
        </Row>
      }
    })

    return(
        <section id = "recent">
            <div className="banner">
                <h1>
                    Experience
                </h1>
                <Row>
                {cards}
                </Row>
            </div>
        </section>
    );
}