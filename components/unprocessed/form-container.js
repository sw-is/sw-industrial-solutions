import StateDefaultTypeNoneColo1 from "components/unprocessed/state-default-type-none-colo1";
import VariantENGColorBlackForm from "components/unprocessed/variant-e-n-g-color-black-form";
import StateDefaultTypeCTABase1 from "components/unprocessed/state-default-type-c-t-a-base1";
import styles from "components/unprocessed/form-container.module.css";

const FormContainer = () => {
  return (
    <div className={styles.contentBlock}>
      <div className={styles.swLogoParent}>
        <img className={styles.swLogoIcon} alt="" src="/sw-logo.svg" />
        <div className={styles.navigationBlockParent}>
          <div className={styles.navigationBlock}>
            <StateDefaultTypeNoneColo1 button="About" />
            <StateDefaultTypeNoneColo1 button="Services" />
            <StateDefaultTypeNoneColo1 button="Contact" />
          </div>
          <div className={styles.buttonLangSwitchParent}>
            <VariantENGColorBlackForm
              icon="/icon12.svg"
              iconWidth="1.5rem"
              iconHeight="1.5rem"
              buttonColor="#fff"
              rectangleDivWidth="0.06rem"
              rectangleDivHeight="1.25rem"
              buttonColor1="#9da3ac"
            />
            <StateDefaultTypeCTABase1 button="UP" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.navigationBlock}>
          <div className={styles.div}>+49 176 70630522</div>
          <div className={styles.div}>r.wight@swi-so.eu</div>
          <div className={styles.bonnerStr12}>
            Bonner Str. 12, 51379 Leverkusen, Deutschland.
          </div>
          <div className={styles.bonnerStr12}>Ust-ID: DE 343504122</div>
        </div>
        <div
          className={styles.description}
        >{`Copyright © 2023 S.W.Industrial Solutions. All rights reserved. `}</div>
      </div>
    </div>
  );
};

export default FormContainer;
