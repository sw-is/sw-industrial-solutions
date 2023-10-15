import { useMemo } from "react";
import styles from "components/unprocessed/state-default-type-c-t-a-color.module.css";

const StateDefaultTypeCTAColor = ({ button, buttonColor }) => {
  const button3Style = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div className={styles.statedefaultTypectaColor}>
      <div className={styles.button} style={button3Style}>
        {button}
      </div>
    </div>
  );
};

export default StateDefaultTypeCTAColor;
