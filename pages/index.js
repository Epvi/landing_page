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
        <HelperTextSuperpower />
        <Benefits />
      </div>
    </>
  );
}

function Benefits() {
  return (
    <>
      <div className={styles.benefits_container}>
        {/* ---------------- 1 --------------------- */}
        <div className={styles.benefits_frame_content}>
          <div className={styles.benefits_content_btn}>
            <div className={styles.benefits_content}>
              <div className={styles.benefits_helperText_1}>AUTOMATION</div>
              <div className={styles.benefits_helperText_2}>
                <p>
                  Upgrade your <span>home.</span>
                </p>
              </div>
              <div className={styles.benefits_helperText_1_3}>
                Smi-Fi can connects with multiple appliances and convert them
                into smart appliances.
              </div>
            </div>
            <div className={styles.benefits_btn_box}>
              <button className={styles.benefits_btn}>
                See the Magic of Smi-Fi
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className={styles.benefits_img}>
            <Image
              src="/benefits_frame_1.png"
              alt="benefits_frame_1 image"
              width="720"
              height="691"
            />
          </div>
        </div>
        {/* 2 */}
        <div className={styles.benefits_frame_content}>
          <div className={styles.benefits_content_btn_diff}>
            <div className={styles.benefits_content_diff}>
              <div
                className={styles.benefits_helperText_1}
                style={{ marginBottom: "20px" }}
              >
                AUTOMATION
              </div>
              <div
                className={styles.benefits_helperText_2}
                style={{ marginBottom: "25px" }}
              >
                <p>
                  Upgrade your <span>lifestyle.</span>
                </p>
              </div>
              <div
                className={styles.benefits_helperText_1_3}
                style={{ marginBottom: "25px" }}
              >
                Use voice command or mobile phone to turn ON/OFF all your
                appliances from anywhere anytime. Schedule timer for appliances.
              </div>
              <div className={styles.benefits_alexa_img}>
                <Image
                  src="/Alexa_google.png"
                  alt="Alexa_google.png image"
                  width="214"
                  height="80"
                />
              </div>
            </div>
            <div
              className={styles.benefits_btn_box}
              style={{ marginTop: "0px" }}
            >
              <button className={styles.benefits_btn}>
                See the Magic of Smi-Fi
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className={styles.benefits_img}>
            <Image
              src="/benefits_frame_2.png"
              alt="benefits_frame_2 image"
              width="720"
              height="691"
            />
          </div>
        </div>
        {/* 3 */}
        <div className={styles.benefits_frame_content}>
          <div className={styles.benefits_content_btn}>
            <div className={styles.benefits_content}>
              <div className={styles.benefits_helperText_1}>AUTOMATION</div>
              <div className={styles.benefits_helperText_2}>
                <p>
                  Upgrade your <span>savings.</span>
                </p>
              </div>
              <div className={styles.benefits_helperText_1_3}>
                Get alerts on unattended appliances or unhealthy appliances and
                control it with your phone.
              </div>
            </div>
            <div className={styles.benefits_btn_box}>
              <button className={styles.benefits_btn}>
                See the Magic of Smi-Fi
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className={styles.benefits_img}>
            <Image
              src="/benefits_frame_3.png"
              alt="benefits_frame_3 image"
              width="720"
              height="691"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Helper Text "unlock superpower"
function HelperTextSuperpower() {
  return (
    <>
      <div className={styles.superpower_container}>
        <div className={styles.superpower_designImg_text}>
          <div className={styles.superpower_imgLeft}>
            <Image
              src="/design_left.png"
              alt="left_side_design"
              width="170"
              height="70"
            />
          </div>
          <div className={styles.superpower_text}>
            <div className={styles.superpower_strong}>
              Unlock the superpower of your home
            </div>
            <div className={styles.superpower_light}>
              With Smi-Fi, you embrace the smarter way to use electricity, all
              your appliance becomes connected and your home becomes energy
              conscious smart home
            </div>
          </div>
          <div className={styles.superpower_imgRight}>
            <Image
              src="/design_right.png"
              alt="right_side_design"
              width="170"
              height="70"
            />
          </div>
        </div>
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
