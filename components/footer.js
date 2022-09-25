import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
          {/*<div className={styles.footer_links}>
            <span>375 DSA</span>
            <Link href="/about">About</Link>
          </div>*/}
          <div className={styles.footer_links}>
            <span>Social</span>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/shubhi-singh-b284a721b/">LinkedIn</a>
            <a rel="noreferrer" target="_blank" href="https://github.com/Shubhisingh921">Github</a>
          </div>
        </div>
        <div className={styles.footer_right}>
          <div className={styles.footer_logo}>
            {/* <CodeIcon style={{fontSize: "5rem"}}/> */}
          </div>
          <div className={styles.footer_content}>
            <h1>375 DSA Questions</h1>
            <p>© 2022 - Aman Gupta & Shubhi Singh</p>
          </div>
        </div>
      </div>
  )
}

export default Footer
