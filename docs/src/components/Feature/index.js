import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

function Feature({title, description}) {
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature
