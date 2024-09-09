import Link from "next/link";

export default function About(){
    return (
      <section id="about">
        <div className="banner">
          <h1>About</h1>
          <div className="frostedCard">
            <p>
              Hi, I'm Jordan! I'm a PhD Candidate in Wei Ji Ma Lab at New York
              University, where{" "}
              <b>I study planning and decision making in the brain.</b>
              <br />
              Here are some questions I'm thinking about: how do people respond
              to uncertainty when planning? Do people think differently than
              machines when playing chess? How does the brain think about the
              future?
              <br />
              I'm passionate about the intersection of <b>
                neuroscience
              </b> and <b>machine learning</b>. Aside from research, you'll find
              me drawing, playing guitar, or snuggling up with a good book.
            </p>
            <Link
              className="button"
              href="/files/Resume_JordanLei.pdf"
              target="_blank"
            >
              View My Resume
            </Link>
          </div>
        </div>
      </section>
    );
}