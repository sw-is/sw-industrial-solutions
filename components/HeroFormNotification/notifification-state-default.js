import { useMemo } from "react";
import styles from "components/HeroFormNotification/notifification-state-default.module.css";

const NotifificationStateDefault = ({
  iconEMail,
  iconEMail1,
  icon,
  notifificationStateDefaulWidth,
  notifificationStateDefaulHeight,
  eMailFieldHeight,
  iconEMailWidth,
  iconEMailHeight,
  eMailFieldHeight1,
  iconEMailWidth1,
  iconEMailHeight1,
  iconWidth,
  iconHeight,
  showIconEMail,
}) => {
  const notifificationStateDefaultStyle = useMemo(() => {
    return {
      width: notifificationStateDefaulWidth,
      height: notifificationStateDefaulHeight,
    };
  }, [notifificationStateDefaulWidth, notifificationStateDefaulHeight]);

  const eMailFieldStyle = useMemo(() => {
    return {
      height: eMailFieldHeight,
    };
  }, [eMailFieldHeight]);

  const iconEMailStyle = useMemo(() => {
    return {
      width: iconEMailWidth,
      height: iconEMailHeight,
    };
  }, [iconEMailWidth, iconEMailHeight]);

  const eMailField1Style = useMemo(() => {
    return {
      height: eMailFieldHeight1,
    };
  }, [eMailFieldHeight1]);

  const iconEMail1Style = useMemo(() => {
    return {
      width: iconEMailWidth1,
      height: iconEMailHeight1,
    };
  }, [iconEMailWidth1, iconEMailHeight1]);

  const icon2Style = useMemo(() => {
    return {
      width: iconWidth,
      height: iconHeight,
    };
  }, [iconWidth, iconHeight]);

  return (
    <div
      className={styles.notifificationStatedefault}
      style={notifificationStateDefaultStyle}
    >
      <div className={styles.signupForm}>
        <div className={styles.eMailField} style={eMailFieldStyle}>
          <img
            className={styles.iconEMail}
            alt=""
            src={iconEMail}
            style={iconEMailStyle}
          />
          <div className={styles.typeYourEMail}>Type your e-mail</div>
        </div>
        <div className={styles.eMailField1} style={eMailField1Style}>
          <img
            className={styles.iconEMail1}
            alt=""
            src={iconEMail1}
            style={iconEMail1Style}
          />
          <div className={styles.typeYourEMail}>Ask here you question</div>
        </div>
      </div>
      <div className={styles.buttonBase}>
        <div className={styles.typeYourEMail}>Submit</div>
      </div>
      <div className={styles.notificationSuccesserror}>
        <img className={styles.icon} alt="" src={icon} style={icon2Style} />
        <div className={styles.typeYourEMail}>
          Success! We have received your email and will contact you shortly!
        </div>
      </div>
    </div>
  );
};

export default NotifificationStateDefault;
