import { useMemo } from "react";
import styles from "components/Draft/HeroFormNotification/notifification-state-default1.module.css";

const NotifificationStateDefault1 = ({
  iconEMail,
  typeYourEMail,
  showIconEMail,
  notifificationStateDefaulFlex,
  notifificationStateDefaulAlignSelf,
  notifificationStateDefaulFlexShrink,
  notifificationStateDefaulHeight,
  notifificationStateDefaulAlignItems,
  iconEMailWidth,
  iconEMailHeight,
}) => {
  const notifificationStateDefault1Style = useMemo(() => {
    return {
      flex: notifificationStateDefaulFlex,
      alignSelf: notifificationStateDefaulAlignSelf,
      flexShrink: notifificationStateDefaulFlexShrink,
      height: notifificationStateDefaulHeight,
      alignItems: notifificationStateDefaulAlignItems,
    };
  }, [
    notifificationStateDefaulFlex,
    notifificationStateDefaulAlignSelf,
    notifificationStateDefaulFlexShrink,
    notifificationStateDefaulHeight,
    notifificationStateDefaulAlignItems,
  ]);

  const iconEMail2Style = useMemo(() => {
    return {
      width: iconEMailWidth,
      height: iconEMailHeight,
    };
  }, [iconEMailWidth, iconEMailHeight]);

  return (
    <div
      className={styles.notifificationStatedefault}
      style={notifificationStateDefault1Style}
    >
      {showIconEMail && (
        <img
          className={styles.iconEMail}
          alt=""
          src={iconEMail}
          style={iconEMail2Style}
        />
      )}
      <div className={styles.typeYourEMail}>{typeYourEMail}</div>
    </div>
  );
};

export default NotifificationStateDefault1;
