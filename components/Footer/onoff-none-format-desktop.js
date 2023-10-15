import { useMemo } from "react";
import styles from "components/Footer/onoff-none-format-desktop.module.css";

const OnoffNoneFormatDesktop = ({
  sWLogo,
  icon,
  onoffNoneFormatDesktopPosition,
  onoffNoneFormatDesktopTop,
  onoffNoneFormatDesktopLeft,
  blockWidth,
  sWLogoIconWidth,
  sWLogoIconHeight,
  iconWidth,
  iconHeight,
  rectangleDivWidth,
  rectangleDivHeight,
}) => {
  const onoffNoneFormatDesktopStyle = useMemo(() => {
    return {
      position: onoffNoneFormatDesktopPosition,
      top: onoffNoneFormatDesktopTop,
      left: onoffNoneFormatDesktopLeft,
    };
  }, [
    onoffNoneFormatDesktopPosition,
    onoffNoneFormatDesktopTop,
    onoffNoneFormatDesktopLeft,
  ]);

  const blockStyle = useMemo(() => {
    return {
      width: blockWidth,
    };
  }, [blockWidth]);

  const sWLogoIconStyle = useMemo(() => {
    return {
      width: sWLogoIconWidth,
      height: sWLogoIconHeight,
    };
  }, [sWLogoIconWidth, sWLogoIconHeight]);

  const iconStyle = useMemo(() => {
    return {
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconWidth, iconHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [rectangleDivWidth, rectangleDivHeight]);

  return (
    <div
      className={styles.onoffnoneFormatdesktop}
      style={onoffNoneFormatDesktopStyle}
    >
      <div className={styles.block} style={blockStyle}>
        <img
          className={styles.swLogoIcon}
          alt=""
          src={sWLogo}
          style={sWLogoIconStyle}
        />
        <div className={styles.navigationBlock}>
          <div className={styles.buttonBase}>
            <div className={styles.button}>About</div>
          </div>
          <div className={styles.buttonBase}>
            <div className={styles.button}>Services</div>
          </div>
          <div className={styles.buttonBase}>
            <div className={styles.button}>Contact</div>
          </div>
        </div>
        <div className={styles.ctaBlock}>
          <div className={styles.buttonLangSwitch}>
            <img className={styles.icon} alt="" src={icon} style={iconStyle} />
            <div className={styles.buttonBase}>
              <div className={styles.button}>ENG</div>
            </div>
            <div
              className={styles.buttonLangSwitchChild}
              style={rectangleDivStyle}
            />
            <div className={styles.buttonBase4}>
              <div className={styles.button}>DEU</div>
            </div>
          </div>
          <div className={styles.buttonBase5}>
            <div className={styles.button}>Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnoffNoneFormatDesktop;
