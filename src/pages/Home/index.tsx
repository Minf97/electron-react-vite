import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Body from '@/components/Body';
import styles from './index.module.scss';

function Index() {
  console.log(window.ipcRenderer);

  return (
    <>
      <Header></Header>
      <div className="flex">
        <div className="flex-1">
          <Sidebar></Sidebar>
        </div>
        <div className="App_Body">
          <Body></Body>
        </div>
      </div>
    </>
  );
}

export default Index;
