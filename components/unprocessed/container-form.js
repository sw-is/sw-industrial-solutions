import NotifificationStateDefault from "components/Draft/HeroFormNotification/notifification-state-default";
import styles from "components/unprocessed/container-form.module.css";

const ContainerForm = () => {
  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <b className={styles.orYouAlso}>or you also can</b>
        <b className={styles.sendUsYour}>
          Send us your question and we will get back to you as soon as possible!
        </b>
      </div>
      <NotifificationStateDefault
        iconEMail="/icon-email.svg"
        iconEMail1="/icon.svg"
        icon="/icon.svg"
        notifificationStateDefaulWidth="35rem"
        notifificationStateDefaulHeight="18.75rem"
        eMailFieldHeight="4rem"
        iconEMailWidth="1.25rem"
        iconEMailHeight="1.25rem"
        eMailFieldHeight1="7.5rem"
        iconEMailWidth1="1.25rem"
        iconEMailHeight1="1.25rem"
        iconWidth="1rem"
        iconHeight="1rem"
        showIconEMail={false}
      />
    </div>
  );
};

export default ContainerForm;
