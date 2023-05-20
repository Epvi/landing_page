import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";

import detailStyles from "../../styles/BlogCss/BlogDetails.module.css";
import freeTrialStyles from "../../styles/BlogCss/freeTrial.module.css";

import { blogData } from "../../src/BlogHomePageData";

const BlogDetailsPage = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const [item, setItem] = useState(blogData[blogId - 1]); // use this id to find the details for that blog
  return (
    <>
      <BlogDetails />
      <TrialBlock />
      <NewsLetter />
    </>
  );
};

function BlogDetails() {
  function handleCopyLink() {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert("Copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy to clipboard:", error);
        });
    } else {
      const input = document.createElement("input");
      input.setAttribute("value", url);
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      alert("Copied to clipboard!");
    }
  }

  return (
    <>
      <div className={detailStyles.main}>
        {/* Heading */}
        <div className={detailStyles.headingSection}>
          <div className={detailStyles.headingSection_content}>
            <div className={detailStyles.headingSection_des}>
              Appliance’s Health
            </div>
            <div className={detailStyles.headingSection_head}>
              How to Keep Your Appliances in Good Health with Smi-Fi
            </div>
            <div className={detailStyles.headingSection_text}>
              The Hidden Costs of Neglecting Appliance Health and How Smi-Fi Can
              Help
            </div>
          </div>
          {/* profile */}
          <div className={detailStyles.headingSection_profile}>
            <div className={detailStyles.headingSection_avatar}>
              <Image
                src="/blogUser1.png"
                alt="user profile image"
                width="56px"
                height="56px"
              />
            </div>
            <div>
              <div className={detailStyles.headingSection_name}>
                <Link href="https://www.linkedin.com/in/jharna-saha/">
                  Jharna Saha
                </Link>
              </div>
              <div className={detailStyles.headingSection_date}>
                25th April 2022
              </div>
            </div>
          </div>
          {/* heading Image */}
          <div className={detailStyles.headingSection_img}>
            <Image
              src="/blogImages/Blog 1.png"
              alt="blog image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* Details*/}
        <div className={detailStyles.DetailsSection}>
          <div className={detailStyles.endHrLine}></div>
          <div className={detailStyles.DetailsSection_content}>
            Electrical appliances are the backbone of housework today. They
            reduce human effort and make our lives easier, bringing comfort and
            saving time. People often spend hours researching and investing in
            the right appliance for their homes, whether it&apos;s a hair dryer,
            oven, AC, washing machine, or any other appliance that adds
            convenience to their daily routine.
            <br />
            <br />
            These appliances have become one of the most cherished inventions of
            modern society, with many being quite expensive. However, to keep
            them running efficiently, regular maintenance is required.
            Neglecting appliance health can lead to many hidden costs, such as
            higher electricity bills, frequent breakdowns, and safety hazards.
          </div>
          {/* Quote */}
          <div className={detailStyles.DetailsSection_Blog_quote}>
            “Home is where the heart is.” - Frank Lloyd Wright, American
            architect and designer
          </div>
          <div className={detailStyles.DetailsSection_content}>
            Keeping home fit all the time gives peace of mind. However, with a
            busy schedule, taking care of appliances shouldn&apos;t become an
            additional task for individuals. Fortunately, there are smarter ways
            of doing appliance care that can make maintenance hassle-free. In
            this article, we will explore how to take better care of your
            appliance&apos;s health and{" "}
            <Link href="">how Smi-Fi can help you </Link> monitor and optimize
            energy usage, identify issues, and reduce costs.
          </div>
          <div className={detailStyles.DetailsSection_heading}>
            The Hidden Costs of Neglecting Appliance Health
          </div>
          <div className={detailStyles.DetailsSection_content}>
            Appliance maintenance goes beyond the cost of repairs or replacement
            parts. When appliances are not functioning efficiently, they consume
            more energy, leading to higher electricity bills. Moreover, poorly
            maintained appliances can break down frequently, resulting in costly
            repairs or replacements. In addition, electrical appliances can pose
            a safety risk if the wiring system is faulty or outdated. Hidden
            damages, such as wiring issues or fluctuation, can go unnoticed and
            contribute to energy wastage, leading to higher electricity bills.
          </div>

          <div className={detailStyles.DetailsSection_heading}>
            Taking Better Care of Your Appliance&apos;s Health.
          </div>
          <div
            className={detailStyles.DetailsSection_content}
            style={{ marginBottom: "10px" }}
          >
            To keep your appliances running smoothly, follow these tips:
          </div>
          <div className={detailStyles.DetailsSection_bulletContainer}>
            <div className={detailStyles.DetailsSection_bulletHeading}>
              1. Regular Cleaning:
            </div>
            <div className={detailStyles.DetailsSection_bulletContent}>
              Dust, dirt, and debris can build up on appliances over time,
              making them less efficient. Clean your appliances regularly with a
              soft cloth and mild detergent to keep them functioning at their
              best.
            </div>
            <div className={detailStyles.DetailsSection_bulletHeading}>
              2. Check the Wiring:
            </div>
            <div className={detailStyles.DetailsSection_bulletContent}>
              Have a trusted electrician check the wiring in your home regularly
              to ensure it is up to code and safe. Faulty wiring can cause
              appliances to malfunction and increase the risk of electrical
              fires.
            </div>
            <div className={detailStyles.DetailsSection_bulletHeading}>
              3. Use Smi-Fi:
            </div>
            <div className={detailStyles.DetailsSection_bulletContent}>
              Smi-Fi is a smart device that helps you monitor the energy usage
              of your appliances, and identify issues with wiring or
              performance. Smi-Fi also helps them sustain longer and happier.
              Smi-Fi guarantees tracking the health status of appliances that
              make your home secure and smart at the same time.
            </div>
          </div>

          {/*  ------------------------------------------------------------------------------------------------- */}

          <div className={detailStyles.DetailsSection_BlogImage2}>
            <Image
              src="/blogImages/Smi-Fi Appliance Health Tracker.png"
              alt="blog image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={detailStyles.DetailsSection_heading}>
            How Smi-Fi takes care of appliances?
          </div>
          <div className={detailStyles.DetailsSection_content}>
            Smi-Fi is an IoT device which acts as a doctor to take care of
            appliances. It monitors energy usage in real-time, identifies
            patterns for each appliance, and detects any abnormal usage. Users
            can view alerts on their{" "}
            <Link href="http://localhost:3000/our-app">EpVi Cosmos App</Link>
            , which indicates which appliances are healthy and which ones
            require attention.
            <br />
            <br />
            With Smi-Fi, users can allow access to control their appliances,
            allowing for optimized usage.
            <br />
            <br />
            This also creates a positive impact on the environment. By taking
            better care of our appliances, we can reduce our carbon footprint
            and help protect the planet.
          </div>
          <div className={detailStyles.DetailsSection_conclusion}>
            <div className={detailStyles.DetailsSection_conclusionHeading}>
              Conclusion
            </div>
            <div className={detailStyles.DetailsSection_content}>
              Taking care of our appliances is not just about keeping them in
              good working order; it is also about managing the hidden costs
              associated with maintenance. By following these tips and using
              Smi-Fi, we can stay on top of these expenses, minimize our
              environmental impact, and ensure that our homes remain safe and
              comfortable for years to come. Keep your appliances running
              efficiently with these easy tips and Smi-Fi!
              <br />
              <br />
              <Link href="">Want to know more about Smi-Fi?</Link>
              <br />
              Investing in a smart home device like Smi-Fi can not only save you
              time and money but also increase the lifespan of your appliances.
              Consider exploring the world of smart home technology to simplify
              your life and keep your home running smoothly.{" "}
              <Link href="">Buy Smi-Fi</Link>
            </div>
          </div>
          <div className={detailStyles.endHrLine}></div>
          <div className={detailStyles.endBoxForLink}>
            <div className={detailStyles.endBoxForLink_right}>
              <div className={detailStyles.endBoxForLink_right1}>
                <Link href="">Product</Link>
              </div>
              <div className={detailStyles.endBoxForLink_right2}>
                <Link href="">Tools</Link>
              </div>
              <div className={detailStyles.endBoxForLink_right3}>
                <Link href="">SaaS</Link>
              </div>
            </div>
            <div className={detailStyles.endBoxForLink_left}>
              <div
                id="copy-link-button"
                onClick={handleCopyLink}
                className={detailStyles.endBoxForLink_left_copyLink}
              >
                <div className={detailStyles.endBoxForLink_left_copyLinkText}>
                  Copy link
                </div>
                <div className={detailStyles.endBoxForLink_left_copyLinkImg}>
                  <Image
                    src="/copyLinkIcon.png"
                    alt="copyLinkIcon image"
                    width="16"
                    height="16"
                  />
                </div>
              </div>
              <div className={detailStyles.endBoxForLink_left_twitter}>
                <Link href="https://twitter.com/EpVi_India?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <Image
                    src="/twitterFilled.png"
                    alt="twitterFilled image"
                    width="40"
                    height="40"
                  />
                </Link>
              </div>
              <div className={detailStyles.endBoxForLink_left_facebook}>
                <Link href="https://www.facebook.com/EpViIndia/">
                  <Image
                    src="/facebookFilled.png"
                    alt="facebookFilled image"
                    width="40"
                    height="40"
                  />
                </Link>
              </div>
              <div className={detailStyles.endBoxForLink_left_linkedIn}>
                <Link href="https://in.linkedin.com/company/epviindia">
                  <Image
                    src="/linkedInFilled.png"
                    alt="linkedInFilled image"
                    width="40"
                    height="40"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TrialBlock() {
  return (
    <>
      <div className={freeTrialStyles.trial_container}>
        <div className={freeTrialStyles.trial_innerBox}>
          <div className={freeTrialStyles.trial_content_button}>
            <div className={freeTrialStyles.trial_content}>
              <div className={freeTrialStyles.trial_content_strong}>
                Start your Free trial
              </div>
              <div className={freeTrialStyles.trial_content_light}>
                Join over 4,000+ Users already growing with Epvi.
              </div>
            </div>
            <div className={freeTrialStyles.trial_action_btns}>
              <div className={freeTrialStyles.trial_action_btn1}>
                <button>Learn more</button>
              </div>
              <div className={freeTrialStyles.trial_action_btn2}>
                <button>Get started</button>
              </div>
            </div>
          </div>
          <div className={freeTrialStyles.trial_smifi_img_half}>
            <Image
              src="/Smifi_Picture_half.png"
              alt="Smifi_Picture_half image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function NewsLetter() {
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
}

export default BlogDetailsPage;
