import OnoffCloseNameLazslo from "components/unprocessed/onoff-close-name-lazslo";
import styles from "components/unprocessed/contact-card.module.css";

const ContactCard = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        <b className={styles.getInTouch}>get in touch with us!</b>
        <b className={styles.ourAgentsAreContainer}>
          <p
            className={styles.ourAgentsAre}
          >{`Our agents are always ready `}</p>
          <p className={styles.ourAgentsAre}>to solve your issue</p>
        </b>
      </div>
      <div className={styles.agentBlockV2Parent}>
        <OnoffCloseNameLazslo
          laszloSarkozi="Robert Grant Wight"
          technicalManager="Commercial Manager"
          icon="/icon6.svg"
          prop="+49 176 70630522"
          icon1="/icon7.svg"
          lsarkoziswiSoeu="r.wight@swi-so.eu"
          icon2="/icon8.svg"
          iconWidth="2.25rem"
          iconHeight="2.25rem"
          iconWidth1="2.25rem"
          iconHeight1="2.25rem"
          arrowWidth="1.13rem"
          arrowHeight="1.13rem"
          iconWidth2="0.47rem"
          iconHeight2="0.28rem"
        />
        <OnoffCloseNameLazslo
          laszloSarkozi="Laszlo Sarkozi"
          technicalManager="Technical Manager"
          icon="/icon9.svg"
          prop="+49 178 7260026"
          icon1="/icon10.svg"
          lsarkoziswiSoeu="l.sarkozi@swi-so.eu"
          icon2="/icon11.svg"
          iconWidth="2.25rem"
          iconHeight="2.25rem"
          iconWidth1="2.25rem"
          iconHeight1="2.25rem"
          arrowWidth="1.13rem"
          arrowHeight="1.13rem"
          iconWidth2="0.47rem"
          iconHeight2="0.28rem"
        />
      </div>
      <div className={styles.adress}>
        <div className={styles.bonnerStr12}>
          Bonner Str. 12, 51379 Leverkusen, Deutschland
        </div>
        <div className={styles.bonnerStr12}>Ust-ID: DE 343504122</div>
      </div>
    </div>
  );
};

export default ContactCard;
