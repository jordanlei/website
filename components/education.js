import CardList from "./CardList";

const items = [
  {
    image: "/images/experience/logo-nyu.jpeg",
    caption: (
      <>
        <h4>New York University</h4>
        <h3>PhD in Neuroscience</h3>
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
        <h4>University of Pennsylvania</h4>
        <h3>MSE in Computer Science</h3>
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
        <h4>University of Pennsylvania</h4>
        <h3>
          BS in Economics &amp; BS in Engineering (Computer Science)
        </h3>
        <p>
          Class of 2020, Summa Cum Laude <br />
          Jerome Fisher Program of Management &amp; Technology <br />
          <b>Teaching</b> | CIS 519 Machine Learning
        </p>
      </>
    ),
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="banner">
        <h1>Education</h1>
        <CardList items={items} />
      </div>
    </section>
  );
}
