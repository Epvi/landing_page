import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <GetSmifi />
        <Features />
      </div>
    </>
  );
}

// features
function Features() {
  return (
    <>
      <div className={styles.features_container}>
        <div className={styles.features_frame1}>
          <div className={styles.features_frame1_img}>
            <Image
              src="/features_frame1.png"
              width="262"
              height="210"
              alt="feature image 1"
            />
          </div>
          <div className={styles.features_frame1_Text}>
            <span>Track real-time</span> <br />
            electricity usage.
          </div>
        </div>
        <div className={styles.features_frame2}>
          <div className={styles.features_frame2_img}>
            <Image
              src="/features_frame2.png"
              width="204"
              height="210"
              alt="feature image 2"
            />
          </div>
          <div className={styles.features_frame2_Text}>
            <span>Control your</span> <br />
            appliances remotely.
          </div>
        </div>
        <div className={styles.features_frame3}>
          <div className={styles.features_frame3_img}>
            <Image
              src="/features_frame3.png"
              width="230"
              height="210"
              alt="feature image 3"
            />
          </div>
          <div className={styles.features_frame3_Text}>
            <span>Secure from </span> <br />
            electric risks.
          </div>
        </div>
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
              <div className={styles.getSmifi_ratingText}>
                From 100+ reviews
              </div>
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
