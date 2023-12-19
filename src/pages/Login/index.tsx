import React from 'react';
import Logo from '@/common/images/Icon-Electron.png';
import Abstraction from '@/common/images/Abstraction.png';
import LoginForm from './loginForm'
import styles from './index.module.scss';

export default function Index() {

  return (
    <div className={styles.container}>
      {/* 左侧 */}
      <div className={styles.left}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <div className={styles.title}>标题管理系统</div>
        <img className={styles.Abstraction} src={Abstraction} alt="" />
      </div>
      {/* 右侧 */}
      <div className={styles.right}>
        <LoginForm />
      </div>
    </div>
  );
}
