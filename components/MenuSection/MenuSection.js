import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LocaleSwitch from "../LocaleSwitch/LocaleSwitch";
import { useSwipeable } from "react-swipeable";
import { getContent } from "../../api/apolloClientContext";
import resizeListener from "../../utils/resizeListener";

import styles from "./menu-section.module.scss";

const NavBlock = ({ mobileDevice }) => {
  const { globalItems } = getContent();
  return (
    <nav className={styles["m-navigationBlock"]}>
      <Link to="about" spy={true} smooth={true}>
        <button className={styles["a-button"]}>
          {globalItems.menuAbout}
        </button>
      </Link>
      <Link to="services" spy={true} smooth={true}>
        <button className={styles["a-button"]}>
          {globalItems.menuServices}
        </button>
      </Link>
      <Link to="contact" spy={true} smooth={true}>
        <button className={styles["a-button"]}>
          {globalItems.menuContact}
        </button>
      </Link>
      {mobileDevice && <LocaleSwitch />}
    </nav>
  );
};

function MenuSection () {
  const [viewport, setViewport] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { globalItems } = getContent();

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const swipeActions = useSwipeable({
    onSwipeStart: () => toggleMobileMenu()
    //onSwiped: () => toggleMobileMenu(),
  });

  useEffect(() => {
    resizeListener(setViewport);
  }, []);
  const mobileDevice = viewport <= 859;

  return (
    mobileDevice ?
      <section className={styles["menu"]}>
        <div className={styles["o-content"]}>
          <div className={styles["m-logoContainer"]}>
            <img className={styles["a-logo"]}
                 alt=""
                 src="/sw-logo-color.svg"
            />
          </div>

          <button className={styles["a-button"]} onClick={toggleMobileMenu}>
            {!mobileMenu ? "Menu" : "Close"}
          </button>
        </div>

        {mobileMenu &&
          <div className={styles["o-mobileMenu"]} {...swipeActions}>
            <NavBlock mobileDevice={mobileDevice} />
          </div>}
      </section>
      :
      <section className={styles["menu"]}
      >
        <div className={styles["o-content"]}>
          <div className={styles["m-logoContainer"]}>
            <img className={styles["a-logo"]} alt="" src="/sw-logo-color.svg" />
          </div>
          <NavBlock mobileDevice={mobileDevice} />
          <div className={styles["m-leftBlock"]}>
            <LocaleSwitch />
            <Link to="contact" spy={true} smooth={true}>
              <button className={styles["a-contactUsButton"]}>
                {globalItems.btnContactUs}
              </button>
            </Link>
          </div>
        </div>
      </section>

  );
}

export default MenuSection;
