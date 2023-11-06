import ExperienceCard from "../ExperienceCard/ExperienceCard";
import DirectionCard from '../DirectionCard/DirectionCard';
import PrincipleCard from '../PrincipleCard/PrincipleCard';
import styles from "./about-section.module.scss";
import {getContent} from '../../api/apolloClientContext';


const AboutSection = () => {
  const {aboutItems} = getContent();
  return (
    <>
    <section id="about" className={styles['section-container']}>
      <div className={styles['o-content']}>
        <div className={styles['m-title']}>
          <h4 className={styles['a-sectionDescription']}>{aboutItems.sectionDescription1}</h4>
          <h2 className={styles['a-sectionHeader']}>{aboutItems.sectionHeader1}</h2>
        </div>
        <div className={styles['m-experience-cards']}>
        <ExperienceCard
          icon="/about-1.svg"
          experienceInfo={aboutItems.experienceInfo1}
          experienceDescription={aboutItems.experienceDescription1}
        />
        <ExperienceCard
          icon="/about-2.svg"
          experienceInfo={aboutItems.experienceInfo2}
          experienceDescription={aboutItems.experienceDescription2}
        />
        <ExperienceCard
          icon="/about-3.svg"
          experienceInfo={aboutItems.experienceInfo3}
          experienceDescription={aboutItems.experienceDescription3}
        />
        </div>
      </div>
    </section>
      <section className={styles['section-container']}>
        <div className={styles['o-content']}>
          <div className={`${styles['m-title']} ${styles['--align-center']}`}>
            <h4 className={styles['a-sectionDescription']}>{aboutItems.sectionDescription2}</h4>
            <h2 className={styles['a-sectionHeader']}>{aboutItems.sectionHeader2}</h2>
          </div>
          <div className={styles['m-direction-cards']}>
            <DirectionCard
              icon="/direction-1.svg"
              direction={aboutItems.direction1}
            />
            <DirectionCard
              icon="/direction-2.svg"
              direction={aboutItems.direction2}
            />
            <DirectionCard
              icon="/direction-3.svg"
              direction={aboutItems.direction3}
            />
            <DirectionCard
              icon="/direction-4.svg"
              direction={aboutItems.direction4}
            />
          </div>
        </div>
      </section>
      <section className={styles['section-container']}>
        <div className={styles['o-content']}>
          <div className={styles['m-title']}>
            <h4 className={styles['a-sectionDescription']}>{aboutItems.sectionDescription3}</h4>
            <h2 className={styles['a-sectionHeader']}>{aboutItems.sectionHeader3}</h2>
          </div>
          <div className={styles['m-principles-cards']}>
            <PrincipleCard
              principle={aboutItems.principle1}
              principleDescription={aboutItems.principleDescription1}
            />
            <PrincipleCard
              principle={aboutItems.principle2}
              principleDescription={aboutItems.principleDescription2}
            />
            <PrincipleCard
              principle={aboutItems.principle3}
              principleDescription={aboutItems.principleDescription3}
            />
            <PrincipleCard
              principle={aboutItems.principle4}
              principleDescription={aboutItems.principleDescription4}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
