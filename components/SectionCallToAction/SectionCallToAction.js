import { Link } from "react-scroll";
import { getContent } from "../../api/apolloClientContext";

import styles from "./section-call-to-action.module.scss";

const SectionCallToAction = () => {
  const { globalItems } = getContent();

  return (
    <section className={styles["section-container"]}>
      <div className={styles["o-content"]}>
        <div className={`${styles["m-title"]} ${styles["--align-center"]}`}>
          <h4 className={styles["a-sectionDescription"]}>
            {globalItems.blueCallToActionDescription1}
          </h4>
          <h2 className={styles["a-sectionHeader"]}>
            {globalItems.blueCallToActionHeader1}
          </h2>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className={styles["a-contactUsButton"]}>
          {globalItems.btnContactUs}
        </button>
        </Link>
      </div>
    </section>

  );
};
export default SectionCallToAction;
