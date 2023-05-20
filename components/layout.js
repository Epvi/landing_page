// import Image from "next/image";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export const Navbar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.logoBlock}>
          <Link href="/">
            <Image
              src="/LogoBlock.png"
              alt="Epvi-Logo"
              width="95"
              height="32"
            />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <Link href="/">Our Product</Link>
          <Link href="/our-app">Our App</Link>
          <Link href="/">FAQ</Link>
          <Link href="/Blog">Blogs</Link>
          <Link href="/about-us">About</Link>
        </div>
        <div className={styles.navActions}>
          <button id={styles.btn1}>Contact Us</button>
          <button id={styles.btn2}>Get Smi-Fi</button>
        </div>
      </div>
    </>
  );
};

export const Footer = () => {
  let copyRightDate = new Date();
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_hr_content}>
          <div className={styles.footer_hr}>
            <Image
              src="/hr_tag_design.png"
              alt="hr Tag design"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.footer_content}>
            <div className={styles.footer_content_left}>
              <div className={styles.footer_content_app_links}>
                <Link href="https://play.google.com/store/apps/details?id=com.skipperuzumaki.epvi&hl=en_IN&gl=US&pli=1">
                  <Image
                    src="/play_store.png"
                    alt="play store design"
                    width="125"
                    height="36"
                  />
                </Link>
                <Link href="">
                  <Image
                    src="/apple_store.png"
                    alt="apple store design"
                    width="125"
                    height="36"
                  />
                </Link>
              </div>
              <div className={styles.footer_content_helper_links}>
                <div className={styles.footer_content_helper_links_txt}>
                  <Link href="">Features</Link>
                </div>
                <div className={styles.footer_content_helper_links_txt}>
                  <Link href="">Help Center</Link>
                </div>
                <div className={styles.footer_content_helper_links_txt}>
                  <Link href="">Terms of Use</Link>
                </div>
                <div className={styles.footer_content_helper_links_txt}>
                  <Link href="/privacy">Privacy Policy</Link>
                </div>
                <div className={styles.footer_content_helper_links_txt}>
                  <Link href="">Report</Link>
                </div>
              </div>
            </div>
            <div className={styles.footer_content_right}>
              <div className={styles.footer_social_media}>
                <Link href="https://twitter.com/epvi_india?lang=en">
                  <Image
                    src="/twitter.png"
                    alt="Twitter Icon"
                    width="30"
                    height="31"
                  />
                </Link>
                <Link href="https://www.instagram.com/epviindia/?hl=en">
                  <div>
                    <Image
                      src="/instagram.png"
                      alt="Instagram Icon"
                      width="30"
                      height="31"
                    />
                  </div>
                </Link>
                <Link href="https://www.youtube.com/channel/UC2JQRYpJMaQZKv2yBNkZ2Yg?app=desktop">
                  <div>
                    <Image
                      src="/youtube.png"
                      alt="youtube Icon"
                      width="30"
                      height="31"
                    />
                  </div>
                </Link>
                <Link href="https://in.linkedin.com/company/epviindia">
                  <div>
                    <Image
                      src="/linkedIn.png"
                      alt="youtube Icon"
                      width="30"
                      height="31"
                    />
                  </div>
                </Link>
              </div>
              <div className={styles.footer_copyright}>
                ©{copyRightDate.getFullYear()} vHub. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
