import { Row, Col } from "reactstrap";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education">
      <div className="banner">
        <h1>Education</h1>
        <Row>
          <Row className="frostedCard" style={{marginLeft: "5px", zIndex:"-1"}}>
            <Col md={2}>
              <Image
                src="/images/experience/logo-nyu.jpeg"
                width={100}
                height={100}
                style={{
                  display: "block",
                  width: "100px",
                  height: "auto",
                }}
                alt=""
              />
            </Col>
            <Col md={9}>
              <h3>
                  New York University <br />
                  PhD Candidate in Neuroscience
              </h3>
              <p> 
                In Progress <br/>
                Advisor: Wei Ji Ma
              </p>
            </Col>
          </Row>
          <Row className="frostedCard" style={{marginLeft: "5px", zIndex:"-1"}}>
            <Col md={2}>
              <Image
                src="/images/experience/logo-penn.png"
                width={100}
                height={100}
                style={{
                  display: "block",
                  width: "100px",
                  height: "auto",
                }}
                alt=""
              />
            </Col>
            <Col md={9}>
              <h3>
                  University of Pennsylvania <br />
                  MSE in Computer Science
              </h3>
              <p>
                Class of 2021, Summa Cum Laude <br/>
                Thesis:  Object-based Attention Through Internal Gating<br/>
                Advisor: Konrad Kording
              </p>
            </Col>
          </Row>
          <Row className="frostedCard" style={{marginLeft: "5px", zIndex:"-1"}}>
            <Col md={2}>
              <Image
                src="/images/experience/logo-penn.png"
                width={100}
                height={100}
                style={{
                  display: "block",
                  width: "100px",
                  height: "auto",
                }}
                alt=""
              />
            </Col>
            <Col md={9}>
              <h3>
                  University of Pennsylvania <br />
                  BS in Economics, Operations, Info, & Decisions <br />
                  BS in Engineering, Computer Science
              </h3>
              <p>
                Class of 2020, Summa Cum Laude <br/>
                Jerome Fisher Program of Management & Technology
              </p>
            </Col>
          </Row>
        </Row>
      </div>
    </section>
  );
}
