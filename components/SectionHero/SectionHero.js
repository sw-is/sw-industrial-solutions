import { Link } from "react-scroll";
import FormContact from "../FormContact/FormContact";
import { getContent } from "../../api/apolloClientContext";

import styles from "./section-hero.module.scss";
function SectionHero () {
  const { heroItems } = getContent();

  return (
    <>
      <div id="top" className={styles["gradient"]}></div>
      <section className={styles["o-content"]}>
        <div className={styles["o-content__container"]}>
          <div className={styles["m-title"]}>
            <h4 className={styles["a-companyName"]}>
              {heroItems.companyName}
            </h4>
            <h1 className={
              styles["a-sectionHeader"]
            }>
              <span>{heroItems.mainHeaderLine1}</span>
              <span>{heroItems.mainHeaderLine2}</span>
            </h1>
            <div className={styles["a-sectionDescription"]}>
              <p>{heroItems.descriptionLine1}</p>
              <p>{heroItems.descriptionLine2}</p>
            </div>
          </div>
          <FormContact />
          <Link  to="about" spy={true} smooth={true}>
          <div className={styles["a-scrollCue"]}>
            <button className={styles["a-scrollCue__text"]}>{heroItems.scrollDown}</button>
            <img className={styles["a-scrollCue__icon"]} src="/scroll-down.svg" alt="" />
          </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default SectionHero;
