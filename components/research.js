import Link from "next/link";
import Image from 'next/image';


export default function Research(){
    return (
      <section id="research">
        <div className="banner">
          <h1>Research</h1>
          <div style={{ marginBottom: "20px" }}>
            <Link
              className="button"
              href="https://scholar.google.com/citations?user=GRnnNBYAAAAJ&hl=en"
              target="_blank"
            >
              Google Scholar
              <Image
                className="externallinkimage"
                src="/images/external-link.svg"
                width={15}
                height={15}
              />
            </Link>
          </div>

          <div className="frostedCard" style={{ marginBottom: "20px" }}>
            <h2>Can Monkeys Play Board Games?</h2>
            <p>
              Planning is hard. How does the brain do it? We collaborated with
              Lee Lab at Johns Hopkins University to understand how monkeys plan
              when playing a complex planning game, Four-in-a-Row, against a
              computer opponent. We are building a model that combines gameplay,
              eye movement, and neural electrophysiological data to understand
              the neural mechanisms of planning.
            </p>
            <Link
              className="button"
              href="/files/NeuralPoster.pdf"
              target="_blank"
            >
              View Poster
              <Image
                className="externallinkimage"
                src="/images/external-link.svg"
                width={15}
                height={15}
              />
            </Link>
          </div>
          <div className="frostedCard" style={{ marginBottom: "20px" }}>
            <h2>How Does Uncertainty Affect Planning Effort?</h2>
            <p>
              The future is often uncertain, which influences planning behavior.
              We designed an online task with three different types of
              uncertainty and modeled participant planning strategy. We found
              that people decreased their planning depth in response to
              increased uncertainty - intuitively, if the future is very
              uncertain, why bother planning deeply?
            </p>
            <Link
              className="button"
              href="https://osf.io/preprints/psyarxiv/bh56p_v1?view_only="
              target="_blank"
              style={{marginRight: "20px"}}
            >
              View Preprint
              <Image
                className="externallinkimage"
                src="/images/external-link.svg"
                width={15}
                height={15}
              />
            </Link>
            <Link
              className="button"
              href="/files/TreasureHuntPoster.pdf"
              target="_blank"
            >
              View Poster
              <Image
                className="externallinkimage"
                src="/images/external-link.svg"
                width={15}
                height={15}
              />
            </Link>
          </div>
          <div className="frostedCard" style={{ marginBottom: "20px" }}>
            <h2>How Do People Think Ahead in Chess?</h2>
            <p>
              For hundreds of years, chess has been associated with
              intelligence, strategy, and complex reasoning. Recent advances in
              artificial intelligence and the popularity of online chess make it
              an exciting time to study chess from a cognitive science
              perspective. In this project, we are building a cognitive model of
              how people think ahead in chess.
            </p>
          </div>
        </div>
      </section>
    );
}