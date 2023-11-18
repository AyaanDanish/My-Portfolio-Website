import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "Email",
    link: "ayaandanish7@gmail.com",
    href: "mailto:ayaandanish7@gmail.com",
  },
  {
    social: "Github",
    link: "AyaanDanish",
    href: "https://github.com/AyaanDanish",
  },
  {
    social: "LinkedIn",
    link: "Ayaan Danish",
    href: "https://www.linkedin.com/in/ayaan-danish/",
  },
  {
    social: "Twitter",
    link: "NightLockX80",
    href: "https://www.twitter.com/NightlockX80",
  },
  {
    social: "Instagram",
    link: "Ayaan Danish",
    href: "https://www.instagram.com/ayaangroundzeroes/",
  },
  {
    social: "Facebook",
    link: "Ayaan Danish",
    href: "https://www.facebook.com/danish.boi",
  },
  {
    social: "Upwork",
    link: "Syed Ayaan D.",
    href: "https://www.upwork.com/freelancers/~018c13fb3ab89f5f5a",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
