import { useMemo } from "react";
import styles from "./direction-card.module.scss";

const DirectionCard = ({
  icon,
  direction,
}) => {
  return (
    <div className={styles.card}>
        <img
          className={styles['a-icon']}
          alt=""
          src={icon}
        />
      <div className={styles['m-cardText']}>
        <p className={styles['a-header']}>{direction}</p>
      </div>
    </div>
  );
};

export default DirectionCard;
