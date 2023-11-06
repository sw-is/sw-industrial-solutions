import ContactInfoCard from "../ContactInfoCard/ContactInfoCard";
import styles from "./contact-section.module.scss";
import { getContent } from "../../api/apolloClientContext";

const ContactSection = () => {
  const { globalItems, contactsItems } = getContent();
  return (
    <section id="contact" className={styles["section-container"]}>
      <div className={styles["o-content"]}>
        <div className={styles["m-title"]}>
          <h4 className={styles["a-sectionDescription"]}>
            {contactsItems.sectionDescription}
          </h4>
          <h2 className={styles["a-sectionHeader"]}>
            {contactsItems.sectionHeader}
          </h2>
        </div>
        <div className={styles["m-contact-info-cards"]}>
          <ContactInfoCard
            name={contactsItems.name1}
            position={contactsItems.position1}
            phone={contactsItems.phone1}
            email={contactsItems.email1}
            cardHeader1={contactsItems.cardHeader11}
            cardContent1={contactsItems.cardContent11}
            cardHeader2={contactsItems.cardHeader12}
            cardContent2={contactsItems.cardContent12}
            additionalInfo={contactsItems.additionalInfo1}
          />
          <ContactInfoCard
            name={contactsItems.name2}
            position={contactsItems.position2}
            phone={contactsItems.phone2}
            email={contactsItems.email2}
            cardHeader1={contactsItems.cardHeader21}
            cardContent1={contactsItems.cardContent21}
            cardHeader2={contactsItems.cardHeader22}
            cardContent2={contactsItems.cardContent22}
            additionalInfo={contactsItems.additionalInfo2}
          />
        </div>
        <div className={styles["m-companyInfo"]}>
          <p className={styles["a-address"]}>
            {globalItems.mainAddress}
          </p>
          <p className={styles["a-licence"]}>
            {globalItems.ustId}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
