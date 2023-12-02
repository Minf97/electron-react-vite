import React, { useState } from 'react';
import { Button } from 'antd';
import styles from './index.module.scss';

function AppBar() {
  const [isMaximize, setMaximize] = useState(false);

  const handleToggle = () => {
    if (isMaximize) {
      setMaximize(false);
    } else {
      setMaximize(true);
    }
    window.Main.Maximize();
  };

  return (
    <>
      <div className={`flex ${styles.draggable} bg-white w-full`}>
        <div className={`${styles.left} flex flex-auto`}></div>
        <div className={`${styles.right} flex w-24`}>
          <Button onClick={window.Main.Minimize} className="w-8 flex-center" type="text">
            &#8211;
          </Button>
          <Button onClick={handleToggle} className="w-8 flex-center" type="text">
            {isMaximize ? '\u2752' : '⃞'}
          </Button>
          <Button onClick={window.Main.Close} className="w-8 flex-center" danger type="text">
            &#10005;
          </Button>
        </div>
      </div>
    </>
  );
}

export default AppBar;
