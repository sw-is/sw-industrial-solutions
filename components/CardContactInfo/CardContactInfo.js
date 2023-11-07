import { useState } from 'react';
import Markdown from 'react-markdown';

import styles from "./card-contact-info.module.scss";

const CardContactInfo = ({
  name,
  position,
  phone,
  email,
  cardHeader1,
  cardContent1,
  cardHeader2,
  cardContent2,
  additionalInfo,
}) => {

  const [showCV, setShowCV] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles['o-visibleCard']}>

      <div className={styles['m-person']}>
        <h3 className={styles['a-name']}>{name}</h3>
        <p className={styles['a-position']}>{position}</p>
      </div>
      <div className={styles['m-contacts']}>
        <div className={styles['a-phoneInfo']}>
          <img
            className={styles['a-phoneInfo__icon']}
            alt=""
            src="/phone.svg"
          />
        <p className={styles['a-phoneInfo__number']}>{phone}</p>
        </div>
        <div className={styles['a-emailInfo']}>
          <img
            className={styles['a-emailInfo__icon']}
            alt=""
            src="/email.svg"
          />
          <p className={styles['a-emailInfo__email']}>{email}
          </p>
        </div>
      </div>
      <button className={styles['a-CVButton']}
              onClick={()=> setShowCV(!showCV)}>
        {!showCV ? 'Show CV' : 'Hide CV'}
      <img
        className={`${styles['a-CVButton__Icon']}
         ${!showCV ? styles['a-CVButton__Icon--unfold'] 
          : styles['a-CVButton__Icon--fold']}`}
        alt=""
        src="/showCV.svg"/>
      </button>
      </div>
      {showCV &&
        <article className={styles['m-CV']}>
          <div className={styles['a-block']}>
            <h4 className={styles['a-block__header']}>{cardHeader1}</h4>
            <div className={styles['a-block__content']}>
              <Markdown>{cardContent1}</Markdown>
            </div>
          </div>
          <div className={styles['a-block']}>
            <h4 className={styles['a-block__header']}>{cardHeader2}
            </h4>
            <div className={styles['a-block__content']}>
              <Markdown>{cardContent2}</Markdown>
            </div>
          </div>
          <div className={styles['a-block']}>
          <p className={styles['a-additionalInfo']}>
            {additionalInfo}
          </p>
          </div>
        </article>
      }
    </div>
  );
};

export default CardContactInfo;
