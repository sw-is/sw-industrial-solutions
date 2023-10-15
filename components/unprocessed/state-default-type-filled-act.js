import styles from "components/unprocessed/state-default-type-filled-act.module.css";

const StateDefaultTypeFilledAct = ({ button }) => {
  return (
    <div className={styles.statedefaultTypefilledAct}>
      <div className={styles.button}>{button}</div>
    </div>
  );
};

export default StateDefaultTypeFilledAct;
