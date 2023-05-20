import Image from "next/legacy/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/AppPage.module.css";
import FaQStyles from "../styles/FaQ.module.css";

import GetMeAccordion from "../src/GetMeAccordion";

const OurAppPage = () => {
  return (
    <>
      <AppHeadingSection />
      <LearnMoreSection />
      <AppViewSection />
      <GetStarted />
      <Saving />
      <FaQ />
    </>
  );
};

function FaQ() {
  return (
    <>
      <div className={FaQStyles.faq_container}>
        <div className={FaQStyles.faq_heading_box}>
          <div className={FaQStyles.faq_heading}>
            Frequently Asked Questions?
          </div>
        </div>
        {/* Ask More Qustions */}
        <div className={FaQStyles.faq_ask_accordion}>
          <div className={FaQStyles.faq_ask}>
            <div className={FaQStyles.faq_ask_helper_txt}>
              Have more questions?
            </div>
            <div className={FaQStyles.faq_ask_block}>
              <div className={FaQStyles.faq_ask_email}>
                <Link href="#">Email support</Link>
              </div>
              <div className={FaQStyles.faq_ask_help_center}>
                <Link href="#">
                  <div>Go to Help Center</div>
                  <div>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* accordion */}
          <div className={FaQStyles.faq_accordion}>
            <GetMeAccordion />
          </div>
        </div>
      </div>
    </>
  );
}

function Saving() {
  return (
    <>
      <>
        <div className={styles.appViewSectionContainer}>
          <div className={styles.appViewSection_backGround}>
            <Image
              src="/card_wave_bg.png"
              alt="background image"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
            {/* left */}
            <div className={styles.saving_headingContent}>
              <div className={styles.saving_headingBlue}>How It Works</div>
              <div className={styles.saving_headingstrong}>1-2-3 Savings!</div>
            </div>
            <div className={styles.savingContentWrapper}>
              <div className={styles.savingContent_left}>
                {/* 4 cards */}
                <div>
                  <div className={styles.savingContent_cards}>
                    <div className={styles.savingContent_cards_img}>
                      <Image
                        src="/noteIcon.png"
                        alt="Note Icon image"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className={styles.savingContent_cards_content}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </div>
                  </div>{" "}
                  <div className={styles.savingContent_cards}>
                    <div className={styles.savingContent_cards_img}>
                      <Image
                        src="/noteIcon.png"
                        alt="Note Icon image"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className={styles.savingContent_cards_content}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.savingContent_cards}>
                    <div className={styles.savingContent_cards_img}>
                      <Image
                        src="/noteIcon.png"
                        alt="Note Icon image"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className={styles.savingContent_cards_content}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </div>
                  </div>{" "}
                  <div className={styles.savingContent_cards}>
                    <div className={styles.savingContent_cards_img}>
                      <Image
                        src="/noteIcon.png"
                        alt="Note Icon image"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className={styles.savingContent_cards_content}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </div>
                  </div>
                </div>
              </div>
              {/* right image */}
              <div className={styles.savingContent_right}>
                <Image
                  src="/savingPhone.png"
                  alt="Phone image"
                  width="396"
                  height="414"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

function GetStarted() {
  return (
    <>
      <div className={styles.getStartedContainer}>
        <div className={styles.getStarted_Content}>
          <div className={styles.getStarted_Content_light}>
            Lorem ipsum dolor sit amet
          </div>
          <div className={styles.getStarted_Content_strong}>
            Lorem ipsum dolor sit amet, conse.
          </div>
        </div>
        <div className={styles.getStarted_designPlusBtn}>
          <div className={styles.getStarted_design}>
            <Image
              src="/design_dots.png"
              alt="side dots"
              height="70"
              width="170"
            />
          </div>
          <button className={styles.getStarted_Btn}>Get Started</button>
          <div className={styles.getStarted_design}>
            <Image
              src="/design_dots.png"
              alt="side dots"
              height="70"
              width="170"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function AppViewSection() {
  return (
    <>
      <div className={styles.appViewSectionContainer}>
        <div className={styles.appViewSection_Image1}>
          <Image
            src="/AppViewImage1.png"
            alt="phone image"
            height="540"
            width="359"
          />
        </div>
        <div className={styles.appViewSection_backGround}>
          <Image
            src="/card_wave_bg.png"
            alt="background image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
          {/* left */}
          <div className={styles.appHeadingSection_content}>
            <div className={styles.appHeadingSection_content_left}>
              <div className={styles.appHeadingSection_leftWrapper}>
                <div className={styles.appHeadingSection_left_strong}>
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className={styles.appHeadingSection_left_line}></div>
                <div className={styles.appHeadingSection_left_light}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                <button className={styles.appHeadingSection_left_btn}>
                  Get started
                </button>
              </div>
            </div>
            <div className={styles.appHeadingSection_content_right}>
              <div className={styles.appHeadingSection_content_rightLeft}>
                <div className={styles.appHeadingSection_content_right_cards}>
                  <div
                    className={styles.appHeadingSection_content_right_cards_Img}
                  >
                    <Image
                      src="/rewarding.svg.png"
                      alt="rewards image"
                      width="67"
                      height="67"
                    />
                  </div>
                  <div
                    className={
                      styles.appHeadingSection_content_right_cards_strong
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div
                    className={
                      styles.appHeadingSection_content_right_cards_light
                    }
                  >
                    Lorem ipsum dolor sit amet, con sectetur adi
                  </div>
                </div>
                <div className={styles.appHeadingSection_content_right_cards}>
                  <div
                    className={styles.appHeadingSection_content_right_cards_Img}
                  >
                    <Image
                      src="/rewarding.svg.png"
                      alt="rewards image"
                      width="67"
                      height="67"
                    />
                  </div>
                  <div
                    className={
                      styles.appHeadingSection_content_right_cards_strong
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div
                    className={
                      styles.appHeadingSection_content_right_cards_light
                    }
                  >
                    Lorem ipsum dolor sit amet, con sectetur adi
                  </div>
                </div>
              </div>
              <div className={styles.appHeadingSection_content_rightRight}>
                <div className={styles.appHeadingSection_content_right_cards}>
                  <div
                    className={styles.appHeadingSection_content_right_cards_Img}
                  >
                    <Image
                      src="/keeps.svg.png"
                      alt="keeps image"
                      width="67"
                      height="67"
                    />
                  </div>
                  <div
                    className={
                      styles.appHeadingSection_content_right_cards_strong
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div
                    className={
                      styles.appHeadingSection_content_right_cards_light
                    }
                  >
                    Lorem ipsum dolor sit amet, con sectetur adi
                  </div>
                </div>
                <div className={styles.appHeadingSection_content_right_cards}>
                  <div
                    className={styles.appHeadingSection_content_right_cards_Img}
                  >
                    <Image
                      src="/keeps.svg.png"
                      alt="keeps image"
                      width="67"
                      height="67"
                    />
                  </div>
                  <div
                    className={
                      styles.appHeadingSection_content_right_cards_strong
                    }
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </div>
                  <div
                    className={
                      styles.appHeadingSection_content_right_cards_light
                    }
                  >
                    Lorem ipsum dolor sit amet, con sectetur adi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LearnMoreSection() {
  return (
    <>
      <div className={styles.LearnMoreSectionContainer}>
        <div className={styles.LearnMoreSection_strong}>
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <div className={styles.LearnMoreSection_light}>
          Lorem ipsum dolor sit amet, consectetur adipiscing lit, sed do eiusmod
          tempor incididunt ut labore.
        </div>
        <button className={styles.LearnMoreSection_btn}>Learn More</button>
      </div>
    </>
  );
}

function AppHeadingSection() {
  return (
    <>
      <div className={styles.main}>
        {/* Heading section */}
        <div className={styles.appPageHeadingSection}>
          <div className={styles.appHeadingImage}>
            <Image
              src="/appPage1.png"
              alt="appPage image"
              width="773"
              height="652"
            />
          </div>
          <div className={styles.appHeadingContent}>
            <div className={styles.appHeadingContent_strong}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </div>
            <div className={styles.appHeadingContent_light}>
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.appHeadingContent_AppLink}>
              <Link href="https://play.google.com/store/apps/details?id=com.skipperuzumaki.epvi&hl=en_IN&gl=US&pli=1">
                <Image
                  src="/play_store.png"
                  alt="play store design"
                  width="135"
                  height="40"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/apple_store.png"
                  alt="apple store design"
                  width="125"
                  height="40"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurAppPage;
