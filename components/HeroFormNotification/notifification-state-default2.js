import { useMemo } from "react";
import styles from "./notifification-state-default2.module.css";

const NotifificationStateDefault2 = ({
  iconEMail,
  icon,
  notifificationStateDefaulHeight,
  signUpFormAlignSelf,
  signUpFormWidth,
  eMailFieldHeight,
  iconEMailWidth,
  iconEMailHeight,
  buttonColor,
  iconWidth,
  iconHeight,
  showIconEMail,
}) => {
  const notifificationStateDefault2Style = useMemo(() => {
    return {
      height: notifificationStateDefaulHeight,
    };
  }, [notifificationStateDefaulHeight]);

  const signUpFormStyle = useMemo(() => {
    return {
      alignSelf: signUpFormAlignSelf,
      width: signUpFormWidth,
    };
  }, [signUpFormAlignSelf, signUpFormWidth]);

  const eMailField2Style = useMemo(() => {
    return {
      height: eMailFieldHeight,
    };
  }, [eMailFieldHeight]);

  const iconEMail3Style = useMemo(() => {
    return {
      width: iconEMailWidth,
      height: iconEMailHeight,
    };
  }, [iconEMailWidth, iconEMailHeight]);

  const button2Style = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  const icon7Style = useMemo(() => {
    return {
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconWidth, iconHeight]);

  return (
    <div
      className={styles.notifificationStatedefault}
      style={notifificationStateDefault2Style}
    >
      <div className={styles.signupForm} style={signUpFormStyle}>
        <div className={styles.eMailField} style={eMailField2Style}>
          <img
            className={styles.iconEMail}
            alt=""
            src={iconEMail}
            style={iconEMail3Style}
          />
          <div className={styles.typeYourEMail}>Type your e-mail</div>
        </div>
        <div className={styles.buttonBase}>
          <div className={styles.typeYourEMail} style={button2Style}>
            Submit
          </div>
        </div>
      </div>
      <div className={styles.notificationSuccesserror}>
        <img className={styles.icon} alt="" src={icon} style={icon7Style} />
        <div className={styles.typeYourEMail}>
          Success! We have received your email and will contact you shortly!
        </div>
      </div>
    </div>
  );
};

export default NotifificationStateDefault2;
