import CardExperience from "../CardExperience/CardExperience";
import CardDirection from '../CardDirection/CardDirection';
import CardPrinciple from '../CardPrinciple/CardPrinciple';
import {getContent} from '../../api/apolloClientContext';

import styles from "./section-about.module.scss";

const SectionAbout = () => {
  const {aboutItems} = getContent();
  return (
    <>
    <section id="about" className={styles['section-container']}>
      <div className={styles['o-content']}>
        <div className={styles['m-title']}>
          <h4 className={styles['a-sectionDescription']}>
          {aboutItems.sectionDescription1}
          </h4>
          <h2 className={styles['a-sectionHeader']}>
          {aboutItems.sectionHeader1}
          </h2>
        </div>
        <div className={styles['m-experience-cards']}>
        <CardExperience
          icon="/about-1.svg"
          experienceInfo={aboutItems.experienceInfo1}
          experienceDescription={aboutItems.experienceDescription1}
        />
        <CardExperience
          icon="/about-2.svg"
          experienceInfo={aboutItems.experienceInfo2}
          experienceDescription={aboutItems.experienceDescription2}
        />
        <CardExperience
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
            <h4 className={styles['a-sectionDescription']}>
            {aboutItems.sectionDescription2}
            </h4>
            <h2 className={styles['a-sectionHeader']}>
            {aboutItems.sectionHeader2}
            </h2>
          </div>
          <div className={styles['m-direction-cards']}>
            <CardDirection
              icon="/direction-1.svg"
              direction={aboutItems.direction1}
            />
            <CardDirection
              icon="/direction-2.svg"
              direction={aboutItems.direction2}
            />
            <CardDirection
              icon="/direction-3.svg"
              direction={aboutItems.direction3}
            />
            <CardDirection
              icon="/direction-4.svg"
              direction={aboutItems.direction4}
            />
          </div>
        </div>
      </section>
      <section className={styles['section-container']}>
        <div className={styles['o-content']}>
          <div className={styles['m-title']}>
            <h4 className={styles['a-sectionDescription']}>
            {aboutItems.sectionDescription3}
            </h4>
            <h2 className={styles['a-sectionHeader']}>
            {aboutItems.sectionHeader3}
            </h2>
          </div>
          <div className={styles['m-principles-cards']}>
            <CardPrinciple
              principle={aboutItems.principle1}
              principleDescription={aboutItems.principleDescription1}
            />
            <CardPrinciple
              principle={aboutItems.principle2}
              principleDescription={aboutItems.principleDescription2}
            />
            <CardPrinciple
              principle={aboutItems.principle3}
              principleDescription={aboutItems.principleDescription3}
            />
            <CardPrinciple
              principle={aboutItems.principle4}
              principleDescription={aboutItems.principleDescription4}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionAbout;
