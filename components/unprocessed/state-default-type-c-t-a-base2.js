import { useMemo } from "react";
import styles from "components/unprocessed/state-default-type-c-t-a-base2.module.css";

const StateDefaultTypeCTABase2 = ({
  button,
  stateDefaultTypeCTABaseAlignSelf,
}) => {
  const stateDefaultTypeCTABaseStyle = useMemo(() => {
    return {
      alignSelf: stateDefaultTypeCTABaseAlignSelf,
    };
  }, [stateDefaultTypeCTABaseAlignSelf]);

  return (
    <div
      className={styles.statedefaultTypectaBase}
      style={stateDefaultTypeCTABaseStyle}
    >
      <div className={styles.button}>{button}</div>
    </div>
  );
};

export default StateDefaultTypeCTABase2;
