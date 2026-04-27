import CardList from "./CardList";
import ExternalLink from "./ExternalLink";

const items = [
  {
    image: "/images/experience/logo-nyu.jpeg",
    alt: "New York University",
    caption: (
      <>
        <h4>Aug 2021 - Present • New York, NY</h4>
        <h3>PhD Candidate (Researcher) - Ma Lab, New York University</h3>
        <ul>
          <li>
            My research focus is understanding the neural and cognitive
            mechanisms of complex planning in humans. I use{" "}
            <b>reinforcement learning and deep learning models</b> to understand
            how people and animals think ahead. For more information see
            Research.
          </li>
          <li>
            Awards: 2023 Training Program in Computational Neuroscience Grant,
            2021 IVADO PhD Excellence Scholarship (declined), 2021 Henry M.
            MacCracken Fellowship
          </li>
        </ul>
      </>
    ),
  },
  {
    image: "/images/experience/point72.png",
    alt: "Point72",
    caption: (
      <>
        <h4>2025 • New York, NY</h4>
        <h3>Quantitative Research Intern - Point72 Asset Management</h3>
      </>
    ),
  },
  {
    image: "/images/experience/logo-penn.png",
    alt: "University of Pennsylvania",
    caption: (
      <>
        <h4>May 2020 - May 2021 • Philadelphia, PA</h4>
        <h3>Researcher - Kording Lab &amp; Gold Lab, University of Pennsylvania</h3>
        <ul>
          <li>
            Created a deep learning model of visual attention. Incorporated
            convolutions, recurrence, encoder-decoder architectures, and custom
            loss functions to build a model that replicates key features of
            biological attention, including inhibition of return and magnitude
            shifts in tuning curves. Work submitted as master's thesis.
          </li>
          <li>
            Compared biologically plausible and artificial learning algorithms.
            Analyzed common failure modes of biologically plausible Hebbian
            learning agents and backpropagation, such as catastrophic
            forgetting.
          </li>
          <li>Awards: Lila R. Gleitman MINDCORE Summer Fellowship</li>
        </ul>
      </>
    ),
  },
  {
    image: "/images/experience/logo-unilever.png",
    alt: "Unilever",
    caption: (
      <>
        <h4> May 2019 - Aug 2019 • Englewood Cliffs, NJ</h4>
        <h3>Finance Intern - Sales &amp; Operations Planning, Unilever</h3>
        <ul>
          <li>
            Worked with Sales and Operations Planning to speed up the cash flow
            reporting process. Created a full-stack web application in Python to
            automate reporting of statement of cash flows for Sales and
            Operations Planning - reduced cash flow reporting time by over 80%
            and made the process interoperable with Microsoft Excel.
          </li>
        </ul>
      </>
    ),
  },
  {
    image: "/images/experience/logo-tovala.png",
    alt: "Tovala",
    caption: (
      <>
        <h4>May 2018 - Aug 2018 • Chicago, IL</h4>
        <h3>Finance &amp; Data Science Intern - Tovala</h3>
        <ul>
          <li>
            Tovala is a startup in the smart devices and meal-delivery space.
            Estimated customer acquisition costs and analyzed the efficacy of
            their online advertising and created a predictive model of packaging
            costs.
          </li>
        </ul>
      </>
    ),
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="banner">
        <h1>Experience</h1>
        <ExternalLink href="/files/Resume_JordanLei.pdf" label="View Resume" />
        <CardList items={items} />
      </div>
    </section>
  );
}
