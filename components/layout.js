import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export const Navbar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navContent}>
          <div className={styles.logoBlock}>
            <Image
              src="/LogoBlock.png"
              alt="Epvi-Logo"
              width="95"
              height="32"
            />
          </div>
          <div className={styles.navLinks}>
            <Link href="">Our Product</Link>
            <Link href="">Our App</Link>
            <Link href="">FAQ</Link>
            <Link href="">Blogs</Link>
            <Link href="">About</Link>
          </div>
          <div className={styles.navActions}>
            <button id={styles.btn1}>Contact Us</button>
            <button id={styles.btn2}>Get Smi-Fi</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
