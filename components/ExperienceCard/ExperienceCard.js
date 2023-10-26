import { useMemo } from "react";
import styles from "./experience-card.module.scss";

const ExperienceCard = ({
  icon,
  experienceInfo,
  experienceDescription,
}) => {
  return (
    <div className={styles.card}>
        <img
          className={styles['a-icon']}
          alt=""
          src={icon}
        />
      <div className={styles['m-cardText']}>
        <p className={styles['a-header']}>{experienceInfo}</p>
        <p className={styles['a-description']}>{experienceDescription}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
