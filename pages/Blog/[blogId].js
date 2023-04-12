import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";
import Clipboard from "clipboard";

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
            <div className={detailStyles.headingSection_des}>Design</div>
            <div className={detailStyles.headingSection_head}>
              Lorem ipsum dolor sit.
            </div>
            <div className={detailStyles.headingSection_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                Olivia Rhye
              </div>
              <div className={detailStyles.headingSection_date}>8 Dec 2022</div>
            </div>
          </div>
          {/* heading Image */}
          <div className={detailStyles.headingSection_img}>
            <Image
              src="/blogDetails1.png"
              alt="blog image image"
              width="960px"
              height="480px"
            />
          </div>
          <div className={detailStyles.headingSection_imageText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
            purus. Non massa enim vitae duis mattis. Vel in ultricies vel
            fringilla.
          </div>
        </div>
        {/* Details*/}
        <div className={detailStyles.DetailsSection}>
          <div className={detailStyles.endHrLine}></div>
          <div className={detailStyles.DetailsSection_heading}>
            Introduction
          </div>
          <div className={detailStyles.DetailsSection_content}>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
            <br />
            <br />
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </div>
          <div className={detailStyles.DetailsSection_BlogImage}>
            <Image
              src="/blogImage2.png"
              alt="blog image"
              width="800px"
              height="800px"
            />
          </div>
          <div className={detailStyles.DetailsSection_BlogImage_support}>
            Image courtesy of Scott Webb via{" "}
            <Link href="https://www.pexels.com/photo/green-leafed-plant-213727/">
              Pexels
            </Link>
          </div>
          {/* Quote */}
          <div className={detailStyles.DetailsSection_Blog_quote}>
            “In a world older and more complete than ours they move finished and
            complete, gifted with extensions of the senses we have lost or never
            attained, living by voices we shall never hear.”
          </div>
          <div className={detailStyles.DetailsSection_Blog_quote_auther}>
            <div className={detailStyles.headingSection_avatar}>
              <Image
                src="/blogUser1.png"
                alt="user profile image"
                width="56px"
                height="56px"
              />
            </div>
            <div
              className={detailStyles.DetailsSection_Blog_quote_autherDetails}
            >
              <div className={detailStyles.headingSection_name}>
                Olivia Rhye
              </div>
              <div className={detailStyles.headingSection_date}>
                Product Designer
              </div>
            </div>
          </div>
          <div className={detailStyles.DetailsSection_content}>
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum
            turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
            fringilla.
            <br />
            <br />
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
            commodo consectetur convallis risus. Sed condimentum enim dignissim
            adipiscing faucibus consequat, urna. Viverra purus et erat auctor
            aliquam. Risus, volutpat vulputate posuere purus sit congue
            convallis aliquet. Arcu id augue ut feugiat donec porttitor neque.
            <br />
            <br />
            Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor
            lacus, eget nunc lectus in tellus, pharetra, porttitor. Ipsum sit
            mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non
            pellentesque congue eget consectetur turpis. Sapien, dictum molestie
            sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit
            eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh
            orci.
          </div>
          <div className={detailStyles.DetailsSection_heading}>
            Software and tools
          </div>
          <div className={detailStyles.DetailsSection_content}>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id.
            <br />
            <br />
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
            mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu
            quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
            risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie
            aliquet sodales id est ac volutpat.
          </div>
          <div className={detailStyles.DetailsSection_heading}>
            Other resources
          </div>
          <div className={detailStyles.DetailsSection_content}>
            Sagittis et eu at elementum, quis in. Proin praesent volutpat
            egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac.
            Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
            ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
            massa erat cursus vulputate gravida id. Sed quis auctor vulputate
            hac elementum gravida cursus dis.
            <br />
            <ol>
              <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
              <li>
                Eu turpis posuere semper feugiat volutpat elit, ultrices
                suspendisse. Auctor vel in vitae placerat.
              </li>
              <li>
                Suspendisse maecenas ac donec scelerisque diam sed est duis
                purus.
              </li>
            </ol>
          </div>
          <div className={detailStyles.DetailsSection_BlogImage}>
            <Image
              src="/blogImage3.png"
              alt="blog image"
              width="800px"
              height="480px"
            />
          </div>
          <div className={detailStyles.DetailsSection_BlogImage_support}>
            Image courtesy of Leon via{" "}
            <Link href="https://unsplash.com/photos/bzqU01v-G54">Unsplash</Link>
          </div>
          <div className={detailStyles.DetailsSection_content}>
            Lectus leo massa amet posuere. Malesuada mattis non convallis
            quisque. Libero sit et imperdiet bibendum quisque dictum vestibulum
            in non. Pretium ultricies tempor non est diam. Enim ut enim amet
            amet integer cursus. Sit ac commodo pretium sed etiam turpis
            suspendisse at.
            <br />
            <br />
            Tristique odio senectus nam posuere ornare leo metus, ultricies.
            Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
            Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque
            suscipit accumsan. Cursus viverra aenean magna risus elementum
            faucibus molestie pellentesque. Arcu ultricies sed mauris
            vestibulum.
          </div>
          <div className={detailStyles.DetailsSection_conclusion}>
            <div className={detailStyles.DetailsSection_conclusionHeading}>
              Conclusion
            </div>
            <div className={detailStyles.DetailsSection_content}>
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
              id scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
              blandit elit sagittis. Quisque tristique consequat quam sed. Nisl
              at scelerisque amet nulla purus habitasse.
              <br />
              <br />
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
              condimentum mi massa. In tincidunt pharetra consectetur sed duis
              facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
              dictum eget nibh tortor commodo cursus.
              <br />
              <br />
              Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
              aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
              id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur
              dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
              tortor.
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
