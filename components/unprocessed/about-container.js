import ExperienceCard from "components/unprocessed/experience-card";
import styles from "components/unprocessed/about-container.module.css";

const AboutContainer = () => {
  return (
    <div className={styles.about}>
      <div className={styles.title}>
        <b className={styles.whoWeAre}>Who we are</b>
        <b className={styles.aSccCertified}>A SCC certified company with</b>
      </div>
      <div className={styles.contentBlock}>
        <ExperienceCard
          iconText="/icon2.svg"
          experienceInfo={`<20 years`}
          experienceDescription="of experience"
        />
        <ExperienceCard
          iconText="/icon3.svg"
          experienceInfo="9 countries"
          experienceDescription="accross "
          propWidth="2.31rem"
          propHeight="2.31rem"
        />
        <ExperienceCard
          iconText="/icon4.svg"
          experienceInfo="6 languages"
          experienceDescription="services provided"
          propWidth="2.4rem"
          propHeight="2rem"
        />
      </div>
    </div>
  );
};

export default AboutContainer;
