import { getContent } from "../../api/apolloClientContext";
import FormContact from "../FormContact/FormContact";

import styles from "./section-contact-form.module.scss";

const SectionContactForm = () => {
  const { globalItems } = getContent();

  return (
    <section className={styles["section-container"]}>
      <div className={styles["o-content"]}>
        <div className={styles["m-title"]}>
          <h4 className={styles["a-sectionDescription"]}>
            {globalItems.blueCallToActionDescription2}
          </h4>
          <h2 className={styles["a-sectionHeader"]}>
            {globalItems.blueCallToActionHeader2}
          </h2>
        </div>
        <FormContact withMessage={true} />
      </div>
    </section>
  );
};
export default SectionContactForm;

