import ExperienceCard from "../ExperienceCard/ExperienceCard";
import DirectionCard from '../DirectionCard/DirectionCard';
import PrincipleCard from '../PrincipleCard/PrincipleCard';
import styles from "./about-section.module.scss";
import {getContent} from '../../api/apolloClientContext';


const AboutSection = () => {
  const {aboutItems} = getContent();
  return (
    <>
    <div className={styles['section-container']}>
      <div className={styles['o-content']}>
        <div className={styles['m-title']}>
          <p className={styles['a-sectionDescription']}>{aboutItems.sectionDescription1}</p>
          <p className={styles['a-sectionHeader']}>{aboutItems.sectionHeader1}</p>
        </div>
        <div className={styles['m-experience-cards']}>
        <ExperienceCard
          icon="/icon2.svg"
          experienceInfo={aboutItems.experienceInfo1}
          experienceDescription={aboutItems.experienceDescription1}
        />
        <ExperienceCard
          icon="/icon3.svg"
          experienceInfo={aboutItems.experienceInfo2}
          experienceDescription={aboutItems.experienceDescription2}
        />
        <ExperienceCard
          icon="/icon4.svg"
          experienceInfo={aboutItems.experienceInfo3}
          experienceDescription={aboutItems.experienceDescription3}
        />
        </div>
      </div>
    </div>
      <div className={styles['section-container']}>
        <div className={styles['o-content']}>
          <div className={`${styles['m-title']} ${styles['--align-center']}`}>
            <p className={styles['a-sectionDescription']}>{aboutItems.sectionDescription2}</p>
            <p className={styles['a-sectionHeader']}>{aboutItems.sectionHeader2}</p>
          </div>
          <div className={styles['m-direction-cards']}>
            <DirectionCard
              icon="/direction-icon1.svg"
              direction={aboutItems.direction1}
            />
            <DirectionCard
              icon="/direction-icon2.svg"
              direction={aboutItems.direction2}
            />
            <DirectionCard
              icon="/direction-icon3.svg"
              direction={aboutItems.direction3}
            />
            <DirectionCard
              icon="/direction-icon4.svg"
              direction={aboutItems.direction4}
            />
          </div>
        </div>
      </div>
      <div className={styles['section-container']}>
        <div className={styles['o-content']}>
          <div className={styles['m-title']}>
            <p className={styles['a-sectionDescription']}>{aboutItems.sectionDescription3}</p>
            <p className={styles['a-sectionHeader']}>{aboutItems.sectionHeader3}</p>
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
      </div>
    </>
  );
};

export default AboutSection;
