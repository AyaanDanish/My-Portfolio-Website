import { useState } from "react";
import CertificationCard from "../components/CertificationCard";
import styles from "../styles/ArticlesPage.module.css";

const CertificationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredCerts = certs.filter((cert) =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            textAlign: "left",
            color: "var(--accent-color)",
            justifySelf: "flex-start",
          }}
        >
          Some Data Science and Web Dev Certifications I've Earned
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            justifySelf: "flex-end",
          }}
        >
          <label>Search: </label>
          <input
            type="text"
            style={{
              margin: "0 10px",
              borderRadius: "20px",
              border: "None",
              padding: "0 10px",
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.container}>
        {filteredCerts.map((cert, idx) => (
          <CertificationCard key={idx} article={cert} />
        ))}
      </div>
    </>
  );
};

export default CertificationsPage;
