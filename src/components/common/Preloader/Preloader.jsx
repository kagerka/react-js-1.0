import React from 'react';
import preloader from './../../../assets/images/preloader.svg';
import styles from './Preloader.module.css';

let Preloader = (props) => {
  return (
    <div className={styles.overlay}>
      <img src={preloader} alt='' className={styles.preloader} />
    </div>
  );
};

export default Preloader;
