import { useMemo } from "react";
import styles from "components/unprocessed/experience-card.module.css";

const ExperienceCard = ({
  iconText,
  experienceInfo,
  experienceDescription,
  propWidth,
  propHeight,
}) => {
  const icon8Style = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.block1}>
      <div className={styles.icon}>
        <img
          className={styles.icon1}
          alt=""
          src={iconText}
          style={icon8Style}
        />
      </div>
      <div className={styles.text}>
        <b className={styles.years}>{experienceInfo}</b>
        <div className={styles.ofExperience}>{experienceDescription}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
