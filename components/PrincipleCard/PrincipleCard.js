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
        <h3 className={styles['a-header']}>{principle}</h3>
        <p className={styles['a-description']}>{principleDescription}</p>
      </div>
    </div>
  );
};

export default PrincipleCard;
