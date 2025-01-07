import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "antd";

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <>
      <div className={styles["layout-container"]}>
        <div className={styles["text-section"]}>
          <p>Buy, Sell, Rent,</p>
          <p>Property Securely!</p>
        </div>
        <div className={styles["image-section"]}>
          <div className={styles["placeholder-box"]}>
            <div className={styles["title-box"]}>Login</div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
