import styles from "components/unprocessed/state-default-type-c-t-a-base.module.css";

const StateDefaultTypeCTABase = ({ button }) => {
  return (
    <div className={styles.statedefaultTypectaBase}>
      <div className={styles.button}>{button}</div>
    </div>
  );
};

export default StateDefaultTypeCTABase;
