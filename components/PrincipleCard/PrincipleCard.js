import { useMemo } from "react";
import styles from "./principle-card.module.scss";

const PrincipleCard = ({
  principle,
  principleDescription,
}) => {
  return (
    <div className={styles.card}>
        <div
          className={styles['a-icon']}
        />
      <div className={styles['m-cardText']}>
        <p className={styles['a-header']}>{principle}</p>
        <p className={styles['a-description']}>{principleDescription}</p>
      </div>
    </div>
  );
};

export default PrincipleCard;
