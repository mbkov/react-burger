import React from 'react';

import styles from './main-container.module.css'

function MainContainer(props) {
  return (
    <main className={[styles.content].join(' ')}>
      {props.children}
    </main>
  );
}

export default MainContainer;
