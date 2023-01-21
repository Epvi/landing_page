import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import ourAppStyles from "../styles/OurApp.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <GetSmifi />
        <Features />
        <HelperTextSuperpower />
        <Benefits />
        <AppCosmos />
        <ApplicationFeature1 />
      </div>
    </>
  );
}

function ApplicationFeature1() {
  return (
    <>
      {/* 1st */}
      <div className={ourAppStyles.appFeature_1_container}>
        <div className={ourAppStyles.appFeature_1_content_btn}>
          <div className={ourAppStyles.appFeature_1_content}>
            <div className={ourAppStyles.appFeature_1_text_1}>
              ENERGY SAVING
            </div>
            <div className={ourAppStyles.appFeature_1_text_2}>
              <p>Stay on top of electricity usage.</p>
            </div>
            <div className={ourAppStyles.appFeature_1_text_3}>
              <p>
                Track <span>real-time electricity consumption </span> with live
                updates and detailed analytics for each day, week, and month.
                Know exactly how much energy your appliances and devices are
                using, and make smarter choices about your energy consumption.
              </p>
            </div>
          </div>
          <div className={ourAppStyles.appFeature_btn_box}>
            <button className={ourAppStyles.appFeature_btn}>
              See more
              <div className={ourAppStyles.appFeature_btn_circle}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
        <div className={ourAppStyles.appFeature_1_frame}>
          <Image
            src="/our_app_feature_1.png"
            alt="our_app_feature_1 Image"
            width="534"
            height="542"
          />
        </div>
      </div>
      {/*  2nd */}
      <div
        className={`${ourAppStyles.appFeature_1_container} ${ourAppStyles.appFeature_2_container}`}
      >
        <div className={ourAppStyles.appFeature_1_content_btn}>
          <div className={ourAppStyles.appFeature_1_content}>
            <div className={ourAppStyles.appFeature_1_text_1}>
              ENERGY SAVING
            </div>
            <div className={ourAppStyles.appFeature_1_text_2}>
              <p>
                Know when <br /> your appliance needs
                <span id={ourAppStyles.appFeature_2_text_2_span_1}> care.</span>
              </p>
            </div>
            <div className={ourAppStyles.appFeature_1_text_3}>
              <p>
                With Smi-Fi you know which appliances are working smoothly and
                gives you the power to proactively maintain the health of your
                appliances, saving you time and money in the long run.
              </p>
            </div>
          </div>
          <div className={ourAppStyles.appFeature_btn_box}>
            <button className={ourAppStyles.appFeature_btn}>
              See more
              <div className={ourAppStyles.appFeature_btn_circle}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
        <div className={ourAppStyles.appFeature_2_frame}>
          <Image
            src="/our_app_feature_2.png"
            alt="our_app_feature_2 Image"
            width="640"
            height="541"
          />
        </div>
      </div>
      {/* 3rd */}
      <div className={ourAppStyles.appFeature_1_container}>
        <div className={ourAppStyles.appFeature_1_content_btn}>
          <div className={ourAppStyles.appFeature_1_content}>
            <div className={ourAppStyles.appFeature_1_text_1}>
              ENERGY SAVING
            </div>
            <div className={ourAppStyles.appFeature_1_text_2}>
              <p>
                Take actions on{" "}
                <span id={ourAppStyles.appFeature_3_text_2_span_2}>alerts!!</span>
              </p>
            </div>
            <div className={ourAppStyles.appFeature_1_text_3}>
              <p>
                Smi-Fi finds the hidden unhealthy appliances, current leakage in
                wires. So, you can <span>get notifications</span> and book our
                expert electrician to get them fixed.
              </p>
            </div>
          </div>
          <div className={ourAppStyles.appFeature_btn_box}>
            <button className={ourAppStyles.appFeature_btn}>
              See more
              <div className={ourAppStyles.appFeature_btn_circle}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
        <div className={ourAppStyles.appFeature_1_frame}>
          <Image
            src="/our_app_feature_3.png"
            alt="our_app_feature_3 Image"
            width="534"
            height="542"
          />
        </div>
      </div>
    </>
  );
}

function AppCosmos() {
  return (
    <div className={ourAppStyles.appCosmos_container}>
      <div className={ourAppStyles.appCosmos_content}>
        <div className={ourAppStyles.appCosmos_content_strong}>
          <p>Let’s do it with EpVi Cosmos App</p>
        </div>
        <div className={ourAppStyles.appCosmos_content_light}>
          <p>All Smi-Fi amazing benefits can be accessed through this app.</p>
        </div>
      </div>
      <div className={ourAppStyles.appCosmos_ourApp_1}>
        <Image
          src="/ourApp_1.png"
          height="540"
          width="358"
          alt="Epvi app image"
        />
      </div>
    </div>
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
        <div className={styles.superpower_smifi_image}>
          <Image
            src="/Smi-Fi_box_front_1.png"
            alt="Smifi device Image"
            width="455"
            height="435"
          />
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
