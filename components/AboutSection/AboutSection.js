import ExperienceCard from "../ExperienceCard/ExperienceCard";
import styles from "./about-section.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.about}>
      <div className={styles['o-content']}>
        <div className={styles['m-title']}>
          <p className={styles['a-sectionDescription']}>Who we are</p>
          <p className={styles['a-sectionHeader']}>A SCC certified company with</p>
        </div>
        <div className={styles['m-cards']}>
        <ExperienceCard
          icon="/icon2.svg"
          experienceInfo={`<20 years`}
          experienceDescription="of experience"
        />
        <ExperienceCard
          icon="/icon3.svg"
          experienceInfo="9 countries"
          experienceDescription="accross "
          // propWidth="2.31rem"
          // propHeight="2.31rem"
        />
        <ExperienceCard
          icon="/icon4.svg"
          experienceInfo="6 languages"
          experienceDescription="services provided"
          // propWidth="2.4rem"
          // propHeight="2rem"
        />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
