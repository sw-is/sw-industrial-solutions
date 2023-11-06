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
        <h3 className={styles['a-header']}>{experienceInfo}</h3>
        <p className={styles['a-description']}>{experienceDescription}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
