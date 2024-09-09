import { Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  const items = [
    {
      image: "/images/experience/logo-nyu.jpeg",
      caption: (
        <>
          <h3>PhD Candidate (Researcher) - Ma Lab, New York University</h3>
          <h4>Aug 2021 - Present • New York, NY</h4>
            <ul>
              <li>
                My research focus is understanding the neural and cognitive
                mechanisms of complex planning in humans. I use{" "}
                <b>reinforcement learning and deep learning models</b> to
                understand how people and animals think ahead. For more
                information see Research.
              </li>
              <li>
                Awards: 2023 Training Program in Computational Neuroscience
                Grant, 2021 IVADO PhD Excellence Scholarship (declined), 2021
                Henry M. MacCracken Fellowship
              </li>
            </ul>
        </>
      ),
    },

    {
      image: "/images/experience/logo-penn.png",
      caption: (
        <>
          <h3>
            Researcher - Kording Lab & Gold Lab, University of Pennsylvania
          </h3>
          <h4>May 2020 - May 2021 • Philadelpha, PA</h4>
            <ul>
              <li>
                Created a deep learning model of visual attention. Incorporated
                convolutions, recurrence, encoder-decoder architectures, and
                custom loss functions to build a model that replicates key
                features of biological attention, including inhibition of return
                and magnitude shifts in tuning curves. Work submitted as
                master's thesis.
              </li>
              <li>
                Compared biologically plausible and artificial learning
                algorithms. Analyzed common failure modes of biologically
                plausible Hebbian learning agents and backpropagation, such as
                catastrophic forgetting.
              </li>
              <li>Awards: Lila R. Gleitman MINDCORE Summer Fellowship</li>
            </ul>
        </>
      ),
    },

    {
      image: "/images/experience/logo-unilever.png",
      caption: (
        <>
          <h3>Finance Intern - Sales & Operations Planning, Unilever</h3>
          <h4> May 2019 - Aug 2019 • Englewood Cliffs, NJ</h4>
            <ul>
              <li>
                Worked with Sales and Operations Planning to speed up the cash
                flow reporting process. Created a full-stack web application in Python to
                automate reporting of statement of cash flows for Sales and
                Operations Planning - reduced cash flow reporting time by over
                80% and made the process interoperable with Microsoft Excel.
              </li>
            </ul>
        </>
      ),
    },

    {
      image: "/images/experience/logo-tovala.png",
      caption: (
        <>
          <h3>Finance & Data Science Intern, Tovala</h3>
          <h4>May 2018 - Aug 2018 • Chicago, IL </h4>
            <ul>
              <li>
                Tovala is a startup in the smart devices and meal-delivery
                space. Estimated customer acquisition costs and analyzed the
                efficacy of their online advertising and created a predictive
                model of packaging costs.
              </li>
            </ul>
        </>
      ),
    },
  ];


  return (
    <section id="experience">
      <div className="banner">
        <h1>Experience</h1>
        <Link
          className="button"
          href="/files/Resume_JordanLei.pdf"
          target="_blank"
        >
          View My Resume
        </Link>
        <Row>
          {items.map((e) => (
            <Row
              className="frostedCard"
              style={{ marginLeft: "5px", zIndex: "-1" }}
            >
              <Col md={3}>
                <Image
                  src={e.image}
                  width={100}
                  height={100}
                  style={{
                    display: "block",
                    width: "100px",
                    height: "auto",
                    paddingBottom: "10px",
                  }}
                  alt=""
                />
              </Col>
              <Col md={9}>{e.caption}</Col>
            </Row>
          ))}
        </Row>
      </div>
    </section>
  );
}
