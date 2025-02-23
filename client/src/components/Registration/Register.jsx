import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Register.module.css";

const Register = () => {
  const formRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      backgroundRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
    );

  }, []);

  return (
    <div className={styles.container}>
      <div ref={backgroundRef} className={styles.background}></div>
      <div ref={formRef} className={styles.formContainer}>
        <h2 className={styles.title}>Register Now</h2>
        <p className={styles.subtitle}>Immerse yourself in creative brilliance</p>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name" className={styles.input} required />
          <input type="email" placeholder="Email" className={styles.input} required />
          <input type="password" placeholder="Password" className={styles.input} required />
          <button type="submit" className={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
