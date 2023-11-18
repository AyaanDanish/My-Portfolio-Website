import Image from "next/image";
import styles from "../styles/ArticleCard.module.css";

const CertificationCard = ({ article: certs }) => {
  return (
    <a
      href={certs.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <Image
        src={certs.cover_image}
        alt={certs.title}
        width={300}
        height={150}
      />
      <div className={styles.content}>
        <h3 className={styles.title} style={{ textAlign: "center" }}>
          {certs.title}
        </h3>
      </div>

  
    </a>
  );
};

export default CertificationCard;
