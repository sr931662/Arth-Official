// import React from 'react'
// import styles from "./NavBar.module.css"
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <div className={styles.Navbar_container}>
//         <div className={styles.nav_menu}>
//             <Link to="/explore" className={styles.nav_menu_item}>
//                 <span>Features</span>
//             </Link>
//             <Link to="/nft"className={styles.nav_menu_item}>
//                 <span>
//                     NFTs
//                 </span>
//             </Link>
//             <Link to="/plans" className={styles.nav_menu_item}>
//                     Plans
//             </Link>
//             <Link to="/about" className={styles.nav_menu_item}>
//                     About
//             </Link>
//             <Link to="/contact-us" className={styles.nav_menu_item}>
//                     contact us
//             </Link>
//         </div>

//         <Link to="/" className={styles.logo}>
//             <div>
//                 Arth
//             </div>
//         </Link>

//         <div className={styles.nav_menu_prof}>
//             <Link to="/for-writers" className={styles.prof_item}>
//                 For writers
//             </Link>
//             <Link to="/login"className={styles.prof_item}>
//                 log-in
//             </Link>
//             <Link to="/sign-up" className={styles.prof_item}>
//                 <div className={styles.sign_btn}>
//                     sign-up
//                 </div>
//             </Link>
//         </div>
//     </div>
//   )
// }

// export default NavBar

import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ scrollToFeatures }) => {
  return (
    <div className={styles.Navbar_container}>
      <div className={styles.nav_menu}>
        {/* Smooth Scroll to Features Section */}
        <div onClick={scrollToFeatures} className={styles.nav_menu_item}>
          <span>Features</span>
        </div>
        <Link to="/about" className={styles.nav_menu_item}>About</Link>
        <Link to="/contact-us" className={styles.nav_menu_item}>Contact Us</Link>
      </div>

      <Link to="/" className={styles.logo}>
        <div>Arth</div>
      </Link>

      <div className={styles.nav_menu_prof}>
        <Link to="/for-writers" className={styles.prof_item}>For writers</Link>
        <Link to="/login" className={styles.prof_item}>Log-in</Link>
        <Link to="/sign-up" className={styles.prof_item}>
          <div className={styles.sign_btn}>Sign-up</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
