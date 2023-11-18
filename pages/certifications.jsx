import CertificationCard from "../components/ArticleCard";
import styles from "../styles/ArticlesPage.module.css";

const CertificationsPage = () => {
  const certs = [
    {
      title: "IBM Data Science Professional Certificate",
      cover_image: "/ibm.png",
    },
    {
      title: "Data Science Fundamentals with Python and SQL Specialization",
      cover_image: "/ibm.png",
    },
    {
      title: "Data Visualization with Python",
      cover_image: "/ibm.png",
    },

    {
      title: "Machine Learning with Python (Honors)",
      cover_image: "/ibm.png",
    },

    {
      title: "Data Analysis with Python",
      cover_image: "/ibm.png",
    },

    {
      title: "Front-End Development Libraries",
      cover_image: "/fcc.png",
    },
    {
      title: "Data Visualization Using D3.js",
      cover_image: "/fcc.png",
    },
    {
      title: "Javascript Algorithms and Data Structures",
      cover_image: "/fcc.png",
    },
    {
      title: "Relational Databases",
      cover_image: "/fcc.png",
    },
    {
      title: "Scientific Computing with Python",
      cover_image: "/fcc.png",
    },
  ];
  return (
    <>
      <h3 style={{ textAlign: "center", color: "var(--accent-color)" }}>
        Some Certifications I've Earned
      </h3>
      <div className={styles.container}>
        {certs.map((cert, idx) => (
          <CertificationCard key={idx} article={cert} />
        ))}
      </div>
    </>
  );
};

export default CertificationsPage;
