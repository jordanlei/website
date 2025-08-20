import { Row, Col } from "reactstrap";
import Image from "next/image";

export default function Education() {
  const items = [
    {
      image: "/images/experience/logo-nyu.jpeg",
      caption: (
        <>
          <h3>New York University</h3>
          <h4>PhD Candidate in Neuroscience</h4>
          <p>
            In Progress <br />
            <b>Thesis</b> | Neural and Cognitive Mechanisms of Planning
            <br />
            <b>Advisor</b> | Wei Ji Ma
            <br />
            <b>Teaching</b> | NEURL-GA.2201 Mathematical Tools for Neuroscience
          </p>
        </>
      ),
    },

    {
      image: "/images/experience/logo-penn.png",
      caption: (
        <>
          <h3>University of Pennsylvania</h3>
          <h4>MSE in Computer Science</h4>
          <p>
            Class of 2021, Summa Cum Laude <br />
            <b>Thesis</b> | Object-based Attention Through Internal Gating
            <br />
            <b>Advisor</b> | Konrad Kording
            <br />
            <b>Teaching</b> | CIS 522 Deep Learning (Lead TA)
          </p>
        </>
      ),
    },
    {
      image: "/images/experience/logo-penn.png",
      caption: (
        <>
          <h3>University of Pennsylvania</h3>
          <h4>
            BS in Economics, Operations, Info, & Decisions <br />
            BS in Engineering, Computer Science
          </h4>
          <p>
            Class of 2020, Summa Cum Laude <br />
            Jerome Fisher Program of Management & Technology <br />
            <b>Teaching</b> | CIS 519 Machine Learning
          </p>
        </>
      ),
    },
  ];


  return (
    <section id="education">
      <div className="banner">
        <h1>Education</h1>
        <Row>
          {items.map((item, index) => (
            <Row
              key={index}
              className="frostedCard"
              style={{ marginLeft: "5px", zIndex: "-1" }}
            >
              <Col md={3}>
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  style={{
                    display: "block",
                    width: "100px",
                    height: "auto",
                    paddingBottom: "10px"
                  }}
                  alt=""
                />
              </Col>
              <Col md={9}>{item.caption}</Col>
            </Row>
          ))}
        </Row>
      </div>
    </section>
  );
}
