import React from "react";
import css from "../styles/Header.module.css"

function Header() {
  return (
    <div className={css.container}>
      <div className={css.containerItem}>
        <div className={css.blockName}>
          <img src="./Engagement.png" alt="Engagement"/>
          <h4>GREATESTDAY</h4>
        </div>
        <div className={css.blockButtons}>
          <button className={css.ourWeddingButton}>Our wedding</button>
          <button className={css.signOutButton}>Sign out</button>
        </div>

      </div>
    </div>
  );
}

export default Header;