import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import ourAppStyles from "../styles/OurApp.module.css";
import safetyStyles from "../styles/Safety.module.css";
import associatesStyles from "../styles/associates.module.css";
import smifiUserCardsStyles from "../styles/SmifiUsersCards.module.css";
import FaQStyles from "../styles/FaQ.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <GetSmifi />
        <Features />
        <HelperTextSuperpower />
        <Benefits />
        <AppCosmos />
        <ApplicationFeatures />
        <Safety />
        <SafetyFeatures />
        <AssociationCompanies />
        <VideoBox />
        <HappySmifiUsers />
        <FaQ />
      </div>
    </>
  );
}



function FaQ() {
  return (
    <>
      <div className={FaQStyles.faq_container}>
        <div className={FaQStyles.faq_heading_box}>
          <div className={FaQStyles.faq_heading}>
            Frequently Asked Questions?
          </div>
        </div>
      </div>
    </>
  );
}

function HappySmifiUsers() {
  return (
    <>
      <div className={smifiUserCardsStyles.smifi_users_container}>
        <div className={smifiUserCardsStyles.smifi_users_helper_txt}>
          <p>
            Join a thousands of <br />
            <span>Happy Smi-Fi users</span>
          </p>
        </div>
        <div className={smifiUserCardsStyles.smifi_users_cards_box}>
          {/* user 1 */}
          <div className={smifiUserCardsStyles.smifi_users_card}>
            <div
              className={smifiUserCardsStyles.smifi_users_card_rotated}
            ></div>
            <div className={smifiUserCardsStyles.smifi_users_card_normal}>
              <div
                className={smifiUserCardsStyles.smifi_users_card_user_review}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitati
              </div>
              <div
                className={smifiUserCardsStyles.smifi_users_card_user_details}
              >
                <Image
                  src="/user_card_profile_1.png"
                  alt="user_card_profile_1 image"
                  width="57"
                  height="57"
                />
                <div
                  className={
                    smifiUserCardsStyles.smifi_users_card_user_personal_info
                  }
                >
                  <p>
                    <span>Richik</span> <br />
                    CEO, HyreSnap
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* user 2 */}
          <div className={smifiUserCardsStyles.smifi_users_card}>
            <div
              className={smifiUserCardsStyles.smifi_users_card_rotated}
            ></div>
            <div className={smifiUserCardsStyles.smifi_users_card_normal}>
              <div
                className={smifiUserCardsStyles.smifi_users_card_user_review}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation
              </div>
              <div
                className={smifiUserCardsStyles.smifi_users_card_user_details}
              >
                <Image
                  src="/user_card_profile_2.png"
                  alt="user_card_profile_2 image"
                  width="57"
                  height="57"
                />
                <div
                  className={
                    smifiUserCardsStyles.smifi_users_card_user_personal_info
                  }
                >
                  <p>
                    <span>Rajesh</span> <br />
                    CEO, HyreSnap
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* user 3 */}
          <div className={smifiUserCardsStyles.smifi_users_card}>
            <div
              className={smifiUserCardsStyles.smifi_users_card_rotated}
            ></div>
            <div className={smifiUserCardsStyles.smifi_users_card_normal}>
              <div
                className={smifiUserCardsStyles.smifi_users_card_user_review}
              >
                Lorem ipsum dolor sit amet, coetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
              </div>
              <div
                className={smifiUserCardsStyles.smifi_users_card_user_details}
              >
                <Image
                  src="/user_card_profile_3.png"
                  alt="user_card_profile_3 image"
                  width="57"
                  height="57"
                />
                <div
                  className={
                    smifiUserCardsStyles.smifi_users_card_user_personal_info
                  }
                >
                  <p>
                    <span>Archit</span> <br />
                    CEO, HyreSnap
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// styles are in associatesStyles
const embedId = "KmfF32_Jvg0";
function VideoBox() {
  return (
    <>
      <div className={associatesStyles.videoBox_container}>
        <div className={associatesStyles.videoBox_txt}>
          <p>
            An Experience <br /> <span>People Love to Talk About</span>
          </p>
        </div>
        <div className={associatesStyles.videoBox_frame_link}>
          <div className={associatesStyles.videoBox_frame}>
            <iframe
              width="884"
              height="446"
              src={`https://www.youtube.com/embed/${embedId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function AssociationCompanies() {
  return (
    <>
      <div className={associatesStyles.associates_container}>
        <div className={associatesStyles.associates_content_image}>
          <div className={associatesStyles.associates_content}>
            We have worked with
          </div>
          <div className={associatesStyles.associates_img}>
            <Image
              src="/associate_counterPart.png"
              alt="associate_counterPart images"
              width="1162"
              height="117"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SafetyFeatures() {
  return (
    <>
      <div className={safetyStyles.safety_features_container}>
        {/* 1 */}
        <div className={safetyStyles.safety_features_box}>
          <div className={safetyStyles.safety_features_img}>
            <Image
              src="/safety-feature-recycling-1.png"
              alt="safety-feature-recycling-1 Image"
              width="65"
              height="65"
            />
          </div>
          <div className={safetyStyles.safety_features_backNumber}>1</div>
          <div className={safetyStyles.safety_features_txt_1}>
            Voltage fluctuations
          </div>
          <div className={safetyStyles.safety_features_txt_1_2}>
            EpVi Cosmos send the notifications when Smi-Fi analyzes any abnormal
            activity in your electrical appliances
          </div>
        </div>
        {/* 2 */}
        <div className={safetyStyles.safety_features_box}>
          <div className={safetyStyles.safety_features_img}>
            <Image
              src="/safety-feature-home-1.png"
              alt="safety-feature-recycling-2 Image"
              width="65"
              height="65"
            />
          </div>
          <div className={safetyStyles.safety_features_backNumber}>2</div>
          <div className={safetyStyles.safety_features_txt_1}>
            Short circuit
          </div>
          <div className={safetyStyles.safety_features_txt_1_2}>
            App guides you to fix Faulty appliances, current leakage issues and
            allows to Turn off appliances through phone
          </div>
        </div>
        {/* 3 */}
        <div className={safetyStyles.safety_features_box}>
          <div className={safetyStyles.safety_features_img}>
            <Image
              src="/safety-feature-electricity-1.png"
              alt="safety-feature-recycling-3 Image"
              width="65"
              height="65"
            />
          </div>
          <div className={safetyStyles.safety_features_backNumber}>3</div>
          <div className={safetyStyles.safety_features_txt_1}>
            Appliance issue
          </div>
          <div className={safetyStyles.safety_features_txt_3_2}>
            Smi-Fi keeps you updated and to avoid sudden breakdown of
            appliances. This expands the life of your appliances too.
          </div>
        </div>
      </div>
    </>
  );
}

function Safety() {
  return (
    <>
      <div className={safetyStyles.safety_container}>
        <div className={safetyStyles.safety_content_design}>
          {/* We've used wrapper to postion txt with safety first box */}
          <div className={safetyStyles.safety_wrapper}>
            <div className={safetyStyles.safety_first_box}>SAFETY FIRST</div>
            <div className={safetyStyles.safety_content_txt}>
              <div className={safetyStyles.safety_content_txt_1}>
                PROTECTION
              </div>
              <div className={safetyStyles.safety_content_txt_2}>
                Get a peace of mind.
              </div>
              <div className={safetyStyles.safety_content_txt_3}>
                Smi-Fi keeps you updated and to avoid sudden breakdown of
                appliances. This expands the life of your appliances too.
              </div>
            </div>
          </div>
          <div className={safetyStyles.safety_dot_side_design}>
            <Image
              src="/accounting_dots.svg.png"
              alt="side_dot_image"
              width="430"
              height="70"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function ApplicationFeatures() {
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
                <span id={ourAppStyles.appFeature_3_text_2_span_2}>
                  alerts!!
                </span>
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
          width="700"
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
