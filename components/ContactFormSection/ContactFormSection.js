import { getContent } from "../../api/apolloClientContext";
import ContactForm from "../ContactForm/ContactForm";

import styles from "./contact-form-section.module.scss";
const ContactFormSection = () => {
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
        <ContactForm withMessage={true} />
      </div>
    </section>
  );
};
export default ContactFormSection;

