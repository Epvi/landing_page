import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";

import styles from "../styles/AboutUs.module.css";
import freeTrialStyles from "../styles/BlogCss/freeTrial.module.css";
import { TeamData } from "../src/TeamMemberData";

const AboutUs = () => {
  return (
    <>
      <AboutUsHeading />
      <VisionMission />
      <WhoWeAre />
      <ServiceBrand />
      <CommunityStats />
      <CompanyInstallations />
      <OurStory />
      <OurTeam />
      <NewsLetter />
      <div className={styles.endHrLine}></div>
    </>
  );
};

const OurTeam = () => {
  return (
    <>
      <div className={styles.ourTeam_container}>
        {/* left */}
        <div className={styles.ourTeam_leftWrapper}>
          <div className={styles.comunityStats_blueText}>Our team</div>
          <div className={styles.timeline_box_text_blod}>Leadership team</div>
          <div className={styles.timeline_box_text_light}>
            We’re a cross-disciplinary team that loves to create great
            experiences for our customers.
          </div>
          <div className={styles.ourTeam_btns}>
            <div className={styles.ourTeam_btn_white}>About us</div>
            <div className={styles.ourTeam_btn_blue}>Open positions</div>
          </div>
        </div>
        {/* Right */}
        <div className={styles.ourTeam_rightWrapper}>
          {TeamData.map((member, index) => {
            return (
              <div key={index} className={styles.ourTeam_card}>
                <div className={styles.ourTeam_card_img}>
                  <Image
                    src={member.image}
                    alt="team member image"
                    width="80"
                    height="80"
                  />
                </div>
                <div className={styles.ourTeam_card_name}>{member.name}</div>
                <div className={styles.ourTeam_card_designation}>
                  {member.des}
                </div>
                <div className={styles.ourTeam_card_text}>{member.text}</div>
                <div className={styles.ourTeam_card_links}>
                  <Link href={member.links.twitter}>
                    <Image
                      src="/twitter.png"
                      alt="Twitter logo"
                      width="20"
                      height="20"
                    />
                  </Link>
                  <Link href={member.links.linkedIn}>
                    <Image
                      src="/linkedIn.png"
                      alt="Twitter logo"
                      width="20"
                      height="20"
                    />
                  </Link>
                  <Link href={member.links.web}>
                    <Image
                      src="/socialIcon.png"
                      alt="web logo"
                      width="20"
                      height="20"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const handleNewLetterMail = async (e) => {
    e.preventDefault();
    if (email != "") {
      console.log(`Email: ${email}`);
    } else {
      alert("Please enter your email");
    }
  };
  return (
    <>
      <div className={freeTrialStyles.news_container}>
        <div className={freeTrialStyles.news_content_text}>
          <div className={freeTrialStyles.news_content_strong}>
            Join our newsletter
          </div>
          <div className={freeTrialStyles.news_content_light}>
            We’ll send you a nice letter once per week. No spam.
          </div>
        </div>
        <div className={freeTrialStyles.news_action}>
          <form
            name="newLetterMail"
            target="#"
            method="POST"
            onSubmit={handleNewLetterMail}
          >
            <input
              type="email"
              id="getEmail"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <button onSubmit={handleNewLetterMail}>Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
};

const OurStory = () => {
  return (
    <>
      <div className={styles.ourStory_container}>
        {/* Heading */}
        <div className={styles.ourStory_headWrapper}>
          <div className={styles.ourStory_aboutBtn}>About</div>
          <div className={styles.ourStory_Heading_strong}>Our Story</div>
          <div className={styles.ourStory_Heading_light}>
            Here is a look back at how we started from zero and now we have
            converted over 1000 homes in India in the last few years
          </div>
        </div>

        {/* ----Journey----- */}
        <div className={styles.timeline}>
          {/* 1 */}
          <div className={`${styles.timeline_circle_box1}`}>
            <Image
              src="/EllipseFortimeline.png"
              alt="EllipseFortimeline"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={`${styles.timeline_box} ${styles.onRight}`}>
            <div className={styles.timeline_box_year}>2017</div>
            <div className={styles.timeline_box_text_blod}>
              Beginning of the entrepreneurial journey.
            </div>
            <div className={styles.timeline_box_text_light}>
              Started EpVi’s lighting nusiness with manufacturing setup.
            </div>
          </div>
          {/* 2 */}
          <div
            className={`${styles.timeline_circle_box1} ${styles.timeline_circle_box2}`}
          >
            <Image
              src="/EllipseFortimeline.png"
              alt="EllipseFortimeline"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={`${styles.timeline_box} ${styles.onLeft}`}>
            <div className={styles.timeline_box_year}>2018</div>
            <div className={styles.timeline_box_text_blod}>
              New Launches and Growth
            </div>
            <div className={styles.timeline_box_text_light}>
              Launched World’s first AutoSwitcher Lighting product Sold 3000
              units of new launch Subscription to 5 franchises
            </div>
          </div>
          {/* 3 */}
          <div
            className={`${styles.timeline_circle_box1} ${styles.timeline_circle_box3}`}
          >
            <Image
              src="/EllipseFortimeline.png"
              alt="EllipseFortimeline"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={`${styles.timeline_box} ${styles.onRight}`}>
            <div className={styles.timeline_box_year}>2019</div>
            <div className={styles.timeline_box_text_blod}>
              Incorporation of EpVi New Technological Epoch Pvt Ltd
            </div>
            <div className={styles.timeline_box_text_light}>
              Served 15,000 customers Market research for 1000+ homes R&D
              completed for our IoT based product- Smi-Fi energy saver
            </div>
          </div>
          {/* 4 */}
          <div
            className={`${styles.timeline_circle_box1} ${styles.timeline_circle_box4}`}
          >
            <Image
              src="/EllipseFortimeline.png"
              alt="EllipseFortimeline"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={`${styles.timeline_box} ${styles.onLeft}`}>
            <div className={styles.timeline_box_year}>2020</div>
            <div className={styles.timeline_box_text_blod}>
              Smi-Fi Growth and Expansion
            </div>
            <div className={styles.timeline_box_text_light}>
              R&D done for 10+ Smi-Fi Automation products Listed and Targeted
              500+ potential buyers of Smi-Fi
            </div>
          </div>
          {/* 5 */}
          <div
            className={`${styles.timeline_circle_box1} ${styles.timeline_circle_box5}`}
          >
            <Image
              src="/EllipseFortimeline.png"
              alt="EllipseFortimeline"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={`${styles.timeline_box} ${styles.onRight}`}>
            <div className={styles.timeline_box_year}>2021</div>
            <div className={styles.timeline_box_text_blod}>
              App Launch and Device Installations
            </div>
            <div className={styles.timeline_box_text_light}>
              Launched App and received Global downloads First 50 device
              installations in Delhi and Gurgaon
            </div>
          </div>
          {/* 6 */}
          <div
            className={`${styles.timeline_circle_box1} ${styles.timeline_circle_box6}`}
          >
            <Image
              src="/EllipseFortimeline.png"
              alt="EllipseFortimeline"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={`${styles.timeline_box} ${styles.onLeft}`}>
            <div className={styles.timeline_box_year}>2022</div>
            <div className={styles.timeline_box_text_blod}>Smi-Fi homes</div>
            <div className={styles.timeline_box_text_light}>
              Acquired 500+ Smi-Fi homes Boosted Social reach and collected
              Feedback and testimonials Improved Smi-Fi reach and awareness
            </div>
          </div>
        </div>
        {/* Line through */}
        <div className={styles.timeline_divider}></div>
      </div>
    </>
  );
};

const CompanyInstallations = () => {
  return (
    <>
      <div className={styles.companyInstall_container}>
        <div className={styles.companyInstall_wrapper}>
          <div className={styles.companyInstall_text}>
            From Houses to the world’s largest Buildings
          </div>
          <div className={styles.companyInstall_imgs}>
            <Image
              src="/companies_Logos.png"
              alt="companies_Logos"
              width="1216"
              height="48"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const CommunityStats = () => {
  return (
    <>
      <div className={styles.comunityStats_container}>
        <div className={styles.comunityStats_wrapper}>
          <div className={styles.comunityStats_img}>
            <Image
              src="/who_are_we.png"
              alt="who-are-we image"
              width="560"
              height="560"
            />
          </div>
          <div className={styles.comunityStats_content}>
            <div className={styles.comunityStats_text}>
              <div className={styles.comunityStats_blueText}>
                Build better, Make faster
              </div>
              <div className={styles.comunityStats_strongText}>
                We’re only just getting started on our journey
              </div>
            </div>
            <div className={styles.comunityStats_stats}>
              {/* Inner first */}
              <div className={styles.comunityStats_stats_style}>
                <div>
                  <div className={styles.comunityStats_stats_style1}>500+</div>
                  <div className={styles.comunityStats_stats_style2}>
                    Smart homes
                  </div>
                </div>
                <div>
                  <div className={styles.comunityStats_stats_style1}>10k+</div>
                  <div className={styles.comunityStats_stats_style2}>
                    Followers
                  </div>
                </div>
              </div>
              {/* Inner second */}
              <div className={styles.comunityStats_stats_style}>
                <div>
                  <div className={styles.comunityStats_stats_style1}>1000+</div>
                  <div className={styles.comunityStats_stats_style2}>
                    Active installations
                  </div>
                </div>
                <div>
                  <div className={styles.comunityStats_stats_style1}>550+</div>
                  <div className={styles.comunityStats_stats_style2}>
                    5-star reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceBrand = () => {
  return (
    <>
      <div className={styles.serviceBrand_container}>
        <div className={styles.serviceBrand_box}>
          <div className={styles.serviceBrand_img}>
            <Image
              src="/productsBS.png"
              alt="product helper image"
              width="226"
              height="180"
            />
          </div>
          <div className={styles.serviceBrand_strong}>Products</div>
          <div className={styles.serviceBrand_light}>
            Smi-Fi is an energy-assistant IoT device designed to encourage
            responsible electricity use and energy conservation at various
            places domestic or commercial as well.
          </div>
        </div>
        <div className={styles.serviceBrand_box}>
          <div className={styles.serviceBrand_img}>
            <Image
              src="/serviceBS.png"
              alt="service helper image"
              width="290"
              height="180"
            />
          </div>
          <div className={styles.serviceBrand_strong}>Services</div>
          <div className={styles.serviceBrand_light}>
            One-stop home and business Electricity management solutions highly
            tailored solutions for your smart spaces with intelligent and expert
            consulting, custom planning, and professional installation and
            maintenance.
          </div>
        </div>
        <div className={styles.serviceBrand_box}>
          <div className={styles.serviceBrand_img}>
            <Image
              src="/serviceBS.png"
              alt="service helper image"
              width="236"
              height="180"
            />
          </div>
          <div className={styles.serviceBrand_strong}>Brand</div>
          <div className={styles.serviceBrand_light}>
            We are an energy management company helping household and office
            owners reduce their electricity bills and decrease inconvenience
            through smart technologies.
          </div>
        </div>
      </div>
    </>
  );
};

const WhoWeAre = () => {
  return (
    <>
      <div className={styles.whoWeAre_container}>
        <div className={styles.whoWeAre_wrapper}>
          <div className={styles.whoWeAre_content}>
            <div className={styles.whoWeAre_content_headingBlue}>
              Build better, Make faster
            </div>
            <div className={styles.whoWeAre_content_headingStrong}>
              Who are we?
            </div>
            <div className={styles.whoWeAre_content_text}>
              Started off in 2017, by some smart, curious and highly motivated
              minds to turn each home into an energy conscious Smart home.
              Targeting every market segment from residential properties to
              commercial ones, EpVi primarily focuses on improving the quality
              of life and comfort.
              <br />
              <br />
              Our innovations in the energy management industry speak for
              themselves. We offer client quality services, advanced
              infrastructure, and customised processes as part of our esteemed
              capabilities. Our R&D team consists of creative and experienced
              individuals.
            </div>
          </div>
          <div className={styles.whoWeAre_img_box}>
            <Image
              src="/who_are_we.png"
              alt="who-are-we image"
              width="560"
              height="560"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const VisionMission = () => {
  return (
    <>
      <div className={styles.visionMission_container}>
        <div className={styles.visionMission_container_img}>
          <div className={styles.visionMission_img_box}>
            <div className={styles.visionMission_img}>
              <Image
                src="/spark_img.png"
                alt="spark image"
                width="100"
                height="100"
              />
            </div>
          </div>
          <div className={styles.visionMission_img_box}>
            <div className={styles.visionMission_img}>
              <Image
                src="/rocket_img.png"
                alt="rocket image"
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>
        <div className={styles.visionMission_container_text}>
          <div className={styles.visionMission_box}>
            <div className={styles.visionMission_text}>
              <div className={styles.visionMission_text_strong}>Vision</div>
              <div className={styles.visionMission_text_light}>
                The purpose is to work for the goal of a greener earth and
                contribute by promoting the use of electricity in a smart and
                efficient way.
              </div>
            </div>
          </div>
          <div className={styles.visionMission_box}>
            <div className={styles.visionMission_text}>
              <div className={styles.visionMission_text_strong}>Mission</div>
              <div className={styles.visionMission_text_light}>
                The mission is to work towards energy-conscious smart buildings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutUsHeading = () => {
  return (
    <>
      <div className={styles.aboutUsHeading_container}>
        <div className={styles.aboutUsHeading_btn}>About us</div>
        <div className={styles.aboutUsHeading_supportText}>
          <div className={styles.aboutUsHeading_supportText_strong}>
            Electricity management solutions for Energy Conscious Smart
            Buildings 
          </div>
          <div className={styles.aboutUsHeading_supportText_light}>
            Proudly Made in India
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
