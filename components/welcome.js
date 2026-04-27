import styles from "../styles/welcome.module.css";

const parallaxLayers = [
  {
    image: "/images/profile-3.png",
    ydepth: "-1.0",
    xdepth: "-0.75",
    name: "screen wlayer1",
  },
  {
    image: "/images/profile-2.png",
    ydepth: "-1.0",
    xdepth: "0.35",
    name: "screen wlayer2",
  },
  {
    image: "/images/profile-1.png",
    ydepth: "-1.0",
    xdepth: "0.85",
    name: "screen wlayer3",
  },
];

export const items = {
  name: "welcome-banner",
  background: "var(--background-color)",
  backgrounddepth: "-0.3",
  layers: parallaxLayers,
};

export default function Welcome() {
  return (
    <section id="welcome" style={{ height: "100vh" }}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Jordan Lei</h1>
        <h2 className={styles.headerSubtitle}>
          Neuroscience • Machine Learning • Art
        </h2>
      </div>
    </section>
  );
}