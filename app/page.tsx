"use client";
import styles from "./page.module.css";
import Works from "@/compornents/works/works";
import CareerComponent from "@/compornents/career/career";
import Contact from "@/compornents/contact/contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "linear",
        }}
        className={styles.home_container}>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1.75,
            ease: "easeOut",
          }}
          className={styles.home_name}>
          Daiki
          <br></br>Nomura
        </motion.h1>
        <p className={styles.home_skills}>
          Developer,
          <br></br>Photographer
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.3,
            duration: 1.3,
            ease: "easeInOut",
          }}
          className={styles.home_scroll}>
          <p>See More</p>
          <div className={styles.home_scroll_line}></div>
        </motion.div>
      </motion.section>
      <section className={styles.contents_container} >
        <div className={[styles.contents_left, styles.works_background].join(' ')}>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "circOut",
            }}
            className={styles.contents_title}>Works</motion.h2>
        </div>
        <div className={styles.contents_right}>
          <Works />
        </div>
      </section>
      <section className={styles.contents_container} >
        <div className={[styles.contents_left, styles.career_background].join(' ')}>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "circOut",
            }}
            className={styles.contents_title}>Career</motion.h2>
        </div>
        <div className={styles.contents_right}>
          <CareerComponent />
        </div>
      </section>
      <section className={styles.contents_container} >
        <div className={[styles.contents_left, styles.contact_background].join(' ')}>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "circOut",
            }}
            className={styles.contents_title}>Contact</motion.h2>
        </div>
        <div className={styles.contents_right}>
          <Contact />
        </div>
      </section>
    </main>
  );
};