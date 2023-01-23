import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <GetSmifi />
      </div>
    </>
  );
}
// getSmifi
function GetSmifi() {
  return (
    <>
      <div className={styles.getSmifi_container}>
        <div className={styles.getSmifi_content}>
          <div className={styles.getSmifi_contentText}>
            <div className={styles.getSmifi_heading_overline}>
              <div className={styles.getSmifi_energyAssistant}>
                YOUR HOME ENERGY ASSISTANT
              </div>
              <div className={styles.getSmifi_smarterHomes}>
                <p>
                  Smi-Fi makes your Home <span>Smarter.</span>
                </p>
              </div>
            </div>
            <div className={styles.supportText}>
              Get the control of your entire home on your phone
            </div>
          </div>
          <div className={styles.getSmifi_action}>
            <button id={styles.getSmifi_btn}>
              Get Smi-Fi
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className={styles.getSmifi_rating}>
                <Image
                  width="120"
                  height="24"
                  src="/Rating.png"
                  alt="rating-img"
                />
              <div className={styles.getSmifi_ratingText}>From 100+ reviews</div>
            </div>
          </div>
        </div>
        <div className={styles.picture4_1}>
          <Image
            src="/Picture4 _1.png"
            width="550"
            height="506"
            alt="Smi-fi and App"
          />
        </div>
      </div>
    </>
  );
}
