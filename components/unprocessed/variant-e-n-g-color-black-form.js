import { useMemo } from "react";
import styles from "components/unprocessed/variant-e-n-g-color-black-form.module.css";

const VariantENGColorBlackForm = ({
  icon,
  iconWidth,
  iconHeight,
  buttonColor,
  rectangleDivWidth,
  rectangleDivHeight,
  buttonColor1,
}) => {
  const icon1Style = useMemo(() => {
    return {
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconWidth, iconHeight]);

  const buttonStyle = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [rectangleDivWidth, rectangleDivHeight]);

  const button1Style = useMemo(() => {
    return {
      color: buttonColor1,
    };
  }, [buttonColor1]);

  return (
    <div className={styles.variantengColorblackForm}>
      <img className={styles.icon} alt="" src={icon} style={icon1Style} />
      <div className={styles.buttonBase}>
        <div className={styles.button} style={buttonStyle}>
          ENG
        </div>
      </div>
      <div
        className={styles.variantengColorblackFormChild}
        style={rectangleDiv1Style}
      />
      <div className={styles.buttonBase1}>
        <div className={styles.button} style={button1Style}>
          DEU
        </div>
      </div>
    </div>
  );
};

export default VariantENGColorBlackForm;
