import styles from "components/AboutSection/industry-directions-container.module.css";

const IndustryDirectionsContainer = () => {
  return (
    <div className={styles.industryDirections}>
      <div className={styles.title}>
        <b className={styles.industryDirections1}>Industry directions</b>
        <b className={styles.ourCoreSystems}>Our core systems:</b>
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.industrial}>
          <img
            className={styles.cardIconFrame}
            alt=""
            src="/card-icon-frame.svg"
          />
          <b className={styles.title1}>Industrial</b>
        </div>
        <div className={styles.industrial}>
          <img
            className={styles.cardIconFrame}
            alt=""
            src="/card-icon-frame1.svg"
          />
          <b className={styles.title1}>Energy</b>
        </div>
        <div className={styles.industrial}>
          <img
            className={styles.cardIconFrame}
            alt=""
            src="/card-icon-frame2.svg"
          />
          <b className={styles.title1}>{`Oil & Gas`}</b>
        </div>
        <div className={styles.industrial}>
          <div className={styles.cardIconFrame}>
            <div className={styles.blackSquare}>
              <div className={styles.icon}>
                <img className={styles.icon1} alt="" src="/icon.svg" />
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.frameWrapper}>
                    <div className={styles.groupParent}>
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/group-1000000802.svg"
                      />
                      <img
                        className={styles.frameChild}
                        alt=""
                        src="/group-1000000803.svg"
                      />
                    </div>
                  </div>
                </div>
                <img className={styles.icon2} alt="" src="/icon5.svg" />
              </div>
            </div>
            <img className={styles.cardIcon} alt="" src="/card-icon.svg" />
          </div>
          <b className={styles.title1}>Pharmaceutical</b>
        </div>
      </div>
    </div>
  );
};

export default IndustryDirectionsContainer;
