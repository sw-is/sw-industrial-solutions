import { useMemo } from "react";
import styles from "components/unprocessed/onoff-close-name-lazslo.module.css";

const OnoffCloseNameLazslo = ({
  laszloSarkozi,
  technicalManager,
  icon,
  prop,
  icon1,
  lsarkoziswiSoeu,
  icon2,
  iconWidth,
  iconHeight,
  iconWidth1,
  iconHeight1,
  arrowWidth,
  arrowHeight,
  iconWidth2,
  iconHeight2,
}) => {
  const icon3Style = useMemo(() => {
    return {
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconWidth, iconHeight]);

  const icon4Style = useMemo(() => {
    return {
      width: iconWidth1,
      height: iconHeight1,
    };
  }, [iconWidth1, iconHeight1]);

  const arrowStyle = useMemo(() => {
    return {
      width: arrowWidth,
      height: arrowHeight,
    };
  }, [arrowWidth, arrowHeight]);

  const icon5Style = useMemo(() => {
    return {
      width: iconWidth2,
      height: iconHeight2,
    };
  }, [iconWidth2, iconHeight2]);

  return (
    <div className={styles.onoffcloseNamelazslo}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.laszloSarkoziParent}>
            <b className={styles.laszloSarkozi}>{laszloSarkozi}</b>
            <div className={styles.technicalManager}>{technicalManager}</div>
          </div>
          <div className={styles.phoneEmail}>
            <div className={styles.phone}>
              <img
                className={styles.icon}
                alt=""
                src={icon}
                style={icon3Style}
              />
              <div className={styles.div}>{prop}</div>
            </div>
            <div className={styles.phone}>
              <img
                className={styles.icon}
                alt=""
                src={icon1}
                style={icon4Style}
              />
              <div className={styles.div}>{lsarkoziswiSoeu}</div>
            </div>
          </div>
        </div>
        <div className={styles.buttonBase}>
          <div className={styles.div}>Show CV</div>
          <div className={styles.arrow} style={arrowStyle}>
            <img
              className={styles.icon2}
              alt=""
              src={icon2}
              style={icon5Style}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnoffCloseNameLazslo;
