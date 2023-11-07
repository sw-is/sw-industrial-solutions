import styles from "./card-direction.module.scss";

const CardDirection = ({
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
        <h3 className={styles['a-header']}>{direction}</h3>
      </div>
    </div>
  );
};

export default CardDirection;
