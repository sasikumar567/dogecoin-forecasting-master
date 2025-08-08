import React from "react";
import Logo from "../assets/dogecoin-logo.png";
import styles from "./Dogecoin.module.css";
const Header = ({ onNavigate }) => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <div
            className={`d-flex justify-content-between align-items-center  ${styles.headerWrapper}`}
          >
            <div className={`d-flex gap-5 align-items-center`}>
              <div>
                <img
                  style={{
                    backgroundColor: "black",
                    padding: "5px 8px",
                    borderRadius: "5px",
                  }}
                  width="191.72px"
                  src={Logo}
                  alt="Dogecoin Logo"
                />
              </div>
              <nav className=" d-none d-lg-flex gap-5">
                <a href="#" onClick={() => onNavigate("what")}>
                  What is Dogecoin
                </a>
                <a href="#" onClick={() => onNavigate("forecast")}>
                  Forecasting
                </a>
              </nav>
              
            </div>
            {/* <a className={styles.loginBtn} href="#">
              Login
            </a> */}
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
