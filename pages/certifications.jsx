import CertificationCard from "../components/CertificationCard";
import styles from "../styles/ArticlesPage.module.css";

const CertificationsPage = () => {
  const certs = [
    {
      title: "IBM Data Science Professional Certificate",
      cover_image: "/ibm.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/96QUUHYU7MZ8",
    },
    {
      title: "Data Science Fundamentals with Python and SQL Specialization",
      cover_image: "/ibm.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/EL8SHPKUHXH2",
    },
    {
      title: "Data Visualization with Python",
      cover_image: "/ibm.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/YUUAV2Y7BZWH",
    },

    {
      title: "Machine Learning with Python (Honors)",
      cover_image: "/ibm.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/ZQAPWFQTB25B",
    },

    {
      title: "Data Analysis with Python",
      cover_image: "/ibm.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/ZQAPWFQTB25B",
    },

    {
      title: "Front-End Development Libraries",
      cover_image: "/fcc.png",
      url: "https://www.freecodecamp.org/certification/AyaanDanish/front-end-development-libraries",
    },
    {
      title: "Data Visualization Using D3.js",
      cover_image: "/fcc.png",
      url: "https://www.freecodecamp.org/certification/AyaanDanish/data-visualization",
    },
    {
      title: "Javascript Algorithms and Data Structures",
      cover_image: "/fcc.png",
      url: "https://www.freecodecamp.org/certification/AyaanDanish/javascript-algorithms-and-data-structures",
    },
    {
      title: "Relational Databases",
      cover_image: "/fcc.png",
      url: "https://www.freecodecamp.org/certification/AyaanDanish/relational-database-v8",
    },
    {
      title: "Scientific Computing with Python",
      cover_image: "/fcc.png",
      url: "https://www.freecodecamp.org/certification/AyaanDanish/scientific-computing-with-python-v7",
    },
  ];
  return (
    <>
      <h2 style={{ textAlign: "center", color: "var(--accent-color)" }}>
        Some Certifications I've Earned
      </h2>
      <div className={styles.container}>
        {certs.map((cert, idx) => (
          <CertificationCard key={idx} article={cert} />
        ))}
      </div>
    </>
  );
};

export default CertificationsPage;
