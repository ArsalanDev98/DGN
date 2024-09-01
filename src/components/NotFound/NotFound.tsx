import React from 'react';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <section className={styles.notFoundSection}>
      <div className={styles.container}>
        <div className={styles.httpCode}>404</div>
        <div className={styles.httpCodeText}>Page not found</div>
      </div>
    </section>
  );
};

export default NotFound;
