import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LocaleSwitch from "../LocaleSwitch/LocaleSwitch";
import { useSwipeable } from "react-swipeable";
import { getContent } from "../../api/apolloClientContext";
import resizeListener from "../../utils/resizeListener";

import styles from "./section-menu.module.scss";

const NavBlock = ({ mobileDevice }) => {
  const { globalItems } = getContent();
  return (
    <>
      { mobileDevice?
          <nav className={styles["m-navigationBlock"]}>
            <div className={styles["m-navigationBlock__container"]}>
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
              <button className={styles["a-contactUsButton"]}>
              {globalItems.btnContactUs}
              </button>
          </Link>
            </div>
        <LocaleSwitch mobileMenu={true} />
       </nav>
      :
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
          </nav>
      }
  </>
  );
};

const Logo = () =>  <div className={styles["m-logoContainer"]}><Link  to="top" spy={true} smooth={true}>
  <img className={styles["a-logo"]}
       alt=""
       src="/sw-logo-color.svg"
  />
</Link>
  </div>

function SectionMenu () {
  const [viewport, setViewport] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { globalItems } = getContent();

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const swipeActions = useSwipeable({
    onSwipeStart: () => toggleMobileMenu()
  });

  useEffect(() => {
    resizeListener(setViewport);
  }, []);
  const mobileDevice = viewport <= 859;

  return (
    mobileDevice ?
      <section className={styles["menu"]}>
        <div className={styles["o-content"]}>
           <Logo/>
          <button className={styles["a-button-menu"]} onClick={toggleMobileMenu}>
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
          <Logo/>
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

export default SectionMenu;
