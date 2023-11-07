import styles from "./card-solution.module.scss";

const CardSolution = ({
  header,
  description,
}) => {
  return (
    <div className={styles.card}>
        <h3 className={styles['a-header']}>{header}</h3>
        <p className={styles['a-description']}>{description}</p>
    </div>
  );
};

export default CardSolution;
