import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Login.module.css";

const Login = () => {
  const formRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      backgroundRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className={styles.container}>
      <div ref={backgroundRef} className={styles.background}></div>
      <div ref={formRef} className={styles.formContainer}>
        <h2 className={styles.title}>Welcome Back</h2>
        <p className={styles.subtitle}>Continue your journey with us</p>
        <form className={styles.form}>
          <input type="email" placeholder="Email" className={styles.input} required />
          <input type="password" placeholder="Password" className={styles.input} required />
          <button type="submit" className={styles.button}>Login</button>
        </form>
        <p className={styles.registerLink}>Don't have an account? <a href="/sign-up">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;