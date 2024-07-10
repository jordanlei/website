import styles from '../styles/welcome.module.css';
import Parallax from './parallax';

export default function Welcome(){
    const items = {
        name : "welcome-banner",
        background: "linear-gradient(rgba(255, 255, 255, 1))",
        backgrounddepth: "-0.3",
        layers: [ 
        {image: "/images/profile-3.png", ydepth: "-1.0", xdepth: "-0.75", name: "screen wlayer1"},
        {image: "/images/profile-2.png", ydepth: "-1.0", xdepth: "0.35", name: "screen wlayer2"},
        {image: "/images/profile-1.png", ydepth: "-1.0", xdepth: "0.85", name: "screen wlayer3"},
        ]
    }

    return (
        <section id="welcome" style={{height: "100vh"}}>
            <Parallax items={items}>
            </Parallax>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>
                    Jordan Lei
                </h1>
                <h2 className={styles.headerSubtitle}>
                    Neuroscience | Machine Learning | Art
                </h2>
            </div>
        </section>
    );
}