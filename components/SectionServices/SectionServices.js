import { getContent } from "../../api/apolloClientContext";
import CardSolution from "../CardSolution/CardSolution";

import styles from "./section-services.module.scss";

const SectionServices = () => {
  const { servicesItems } = getContent();
  return (
    <section id="services" className={styles["section-container"]}>
      <div className={styles["o-content"]}>
        <div className={`${styles["m-title"]} ${styles["--align-center"]}`}>
          <h4 className={styles["a-sectionDescription"]}>
            {servicesItems.sectionDescription}
          </h4>
          <h2 className={styles["a-sectionHeader"]}>
            {servicesItems.sectionHeader}
          </h2>
        </div>
        <div className={styles["m-services-cards"]}>
          <CardSolution
            description={servicesItems.cardDescription1}
            header={servicesItems.cardHeader1}
          />
          <CardSolution
            description={servicesItems.cardDescription2}
            header={servicesItems.cardHeader2}
          />
          <CardSolution
            description={servicesItems.cardDescription3}
            header={servicesItems.cardHeader3}
          />
        </div>
        <p className={styles["a-ctaText"]}>
          {servicesItems.ctaText}
        </p>
      </div>
    </section>
  );
};

export default SectionServices;
