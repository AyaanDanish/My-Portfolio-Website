import styles from "../styles/ContactCode.module.css";

const AboutPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3 style={{ textAlign: "center", color: "var(--accent-color)" }}>
          A Little Bit About Me
        </h3>
        <br />
        <p style={{ textAlign: "center" }}>
          I'm a Senior Year CompSci student at FAST-NUCES, doing my best to make
          a name for myself.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Currently working as an Associate AI Consultant at TheCoded Inc.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          I'm inclined towards all things AI and Data Science, but I love to
          take on all manner of new and intruiging challenges to get my gears
          turning.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Apt at front-end development with a variety of tools, including React
          JS. Currently foraying into backend development too. I also freelance
          on Upwork, where I've become a Top Rated writer!
        </p>
      </div>

      <img
        src="pic.png"
        style={{ width: "30%", borderRadius: "50%", margin: "20px" }}
      />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
