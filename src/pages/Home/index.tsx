import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Body from '@/components/Body';
import styles from './index.module.scss';

function Index() {
  console.log(window.ipcRenderer);

  return (
    <>
      <div className={styles.container}>
        <Header></Header>
        <div className="flex">
          <div className={`flex-1 ${styles.sidebar}`}>
            <Sidebar></Sidebar>
          </div>
          <div className={styles.body}>
            <Body></Body>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
