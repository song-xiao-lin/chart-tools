import React from 'react';
import { Button } from 'antd-mobile'
import styles from './index.module.less';
// import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcome_Bg}>
        <span className={styles.welcome_text}>欢迎！</span>
      </div>
      <div className={styles.content}>
        <p>同时制造，即使设计</p>
        <div className={styles.btns}>
          <Button className={styles.btn}>登录</Button>
          <Button className={styles.btn}>注册</Button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
