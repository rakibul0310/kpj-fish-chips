import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

const Footer = ({ children }) => (
  <footer className={styles.footer}>
    {children}
    <Link
      href={`https://www.lumosbytes.com.au`}
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <div className={styles.footer_copyright}>
        <p className="opensans">Developed by</p>
        <span className={styles.footer_logo}>@ LumosBytes</span>
      </div>
    </Link>
  </footer>
);

export default Footer;
