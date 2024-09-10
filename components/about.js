import Link from "next/link";
import Image from 'next/image';

export default function About(){
    return (
      <section id="about">
        <div className="banner">
          <h1>About</h1>
          <div className="frostedCard">
            <p>
              Hi, I'm Jordan! I'm a PhD Candidate in the Wei Ji Ma Lab at New York
              University, where
              <b> I study planning and decision making in the brain.</b>
              <br />
              Here are some questions I'm thinking about: how do people respond
              to uncertainty when planning? Do people think differently than
              machines when playing chess? How does the brain think about the
              future?
              <br />
              I'm passionate about the intersection of <b>
                neuroscience
              </b> and <b>deep learning</b>. Outside work, you'll catch me
              sketching in the city (probably at the Met), running in Manhattan, 
              or snuggling up with a good book.
            </p>
            <Link
              className="button"
              href="/files/Resume_JordanLei.pdf"
              target="_blank"
            >
              View Resume
              <Image
                className="externallinkimage"
                src="/images/external-link.svg"
                width={15}
                height={15}
              />
            </Link>
          </div>
        </div>
      </section>
    );
}