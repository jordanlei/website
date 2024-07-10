export default function Projects(){
    return(
        <section id = "projects">
            <div className="banner">
                <h1>
                    Projects
                </h1>
                <div className="frostedCard" style={{marginBottom: "20px"}}>
                    <h2>Can Monkeys Play Board Games?</h2>
                    <p>
                        Planning is hard. How does the brain do it? We collaborated with Lee Lab at Johns Hopkins University to understand how monkeys plan when playing a complex planning game, Four-in-a-Row, against a computer opponent. We are building a model that combines gameplay, eye movement, and neural electrophysiological data to understand the neural mechanisms of planning.
                    </p>
                </div>
                <div className="frostedCard" style={{marginBottom: "20px"}}>
                    <h2>How Does Uncertainty Affect Planning Effort?</h2>
                    <p>
                        The future is often uncertain, which influences planning behavior. We designed an online task with three different types of uncertainty and modeled participant planning strategy. We found that people decreased their planning depth in response to increased uncertainty - intuitively, if the future is very uncertain, why bother planning deeply?
                    </p>
                </div>
                <div className="frostedCard" style={{marginBottom: "20px"}}>
                    <h2>How Do People Strategize in Chess?</h2>
                    <p>
                        For hundreds of years, chess has been associated with intelligence, strategy, and complex reasoning. Recent advances in artificial intelligence and the popularity of online chess make it an exciting time to study chess from a cognitive science perspective. In this project, we are building a cognitive model of how people think ahead in chess.
                    </p>
                </div>
            </div>
        </section>
    );
}