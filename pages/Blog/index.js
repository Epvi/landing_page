import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { useInView } from "react-intersection-observer";

import blogHomeStyles from "../../styles/BlogCss/BlogHome.module.css";
import cardsStyles from "../../styles/BlogCss/Cards.module.css";
import freeTrialStyles from "../../styles/BlogCss/freeTrial.module.css";
import fadePopUp from "../../styles/Animation/Superpower.module.css";

import { blogData } from "../../src/BlogHomePageData";

export default function BlogPage() {
  return (
    <div>
      <BlogHeadingSection />
      <BlogCardsList />
      <TrialBlock />
      <NewsLetter />
    </div>
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

function BlogCardsList() {
  const totalBlogLength = blogData.length;
  const [renderedAllBlogs, setRenderedAllBlogs] = useState(false);
  const [displayLength, setDisplayLength] = useState(6);
  const [displayBlogs, setDisplayBlogs] = useState([]);

  const handleIncreaseCnt = () => {
    if (displayLength + 3 < totalBlogLength) {
      setDisplayLength(displayLength + 3);
    } else {
      setDisplayLength(totalBlogLength);
    }
  };

  const handleDecreaseCnt = () => {
    setDisplayLength(6);
    setRenderedAllBlogs(false);
  };

  useEffect(() => {
    setDisplayBlogs(blogData.slice(0, displayLength));
    if (displayLength >= totalBlogLength) {
      setRenderedAllBlogs(true);
    }
  }, [displayLength, renderedAllBlogs, totalBlogLength]);

  return (
    <>
      <div className={blogHomeStyles.blogs_container}>
        <div className={blogHomeStyles.blogs_Lists}>
          {displayBlogs.map((i) => {
            return <BlogCard item={i} key={i.id} />;
          })}
        </div>
      </div>
      <div className={blogHomeStyles.blogs_loadMore_btn_icon}>
        <div className={blogHomeStyles.blogs_loadMore_btn}>
          <div className={blogHomeStyles.blogs_loadMore_btn_btn}>
            {renderedAllBlogs ? (
              <Image
                src="/fa_arrow_up.png"
                alt="fa_arrow_up image"
                width="15"
                height="15"
              />
            ) : (
              <Image
                src="/fa_arrow_down.png"
                alt="fa_arrow_down image"
                width="15"
                height="15"
              />
            )}
          </div>
          <div className={blogHomeStyles.blogs_loadMore_txt}>
            <button
              // disabled={renderedAllBlogs}
              onClick={renderedAllBlogs ? handleDecreaseCnt : handleIncreaseCnt}
            >
              {renderedAllBlogs ? "Show less" : "Load more"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function BlogCard({ item }) {
  const { ref, inView, entry } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  });
  const { user, designation, title, body, date } = item;
  return (
    <>
      <div
        ref={ref}
        className={`${cardsStyles.card_container} 
       ${inView && fadePopUp.fade_in_bottom}`}
      >
        <div className={cardsStyles.cards_content_image}>
          <Image
            src="/BlogUser_blog.png"
            blurDataURL={"/BlogUser_blog.png"}
            alt="BlogUser_blog 1"
            width="336"
            height="240"
            placeholder="blur"
          />
        </div>
        <div className={cardsStyles.cards_content}>
          <div className={cardsStyles.cards_blogInfo}>
            <div className={cardsStyles.cards_blogInfo_designation}>
              {designation}
            </div>
            <div className={cardsStyles.cards_blogInfo_title}>
              <div className={cardsStyles.cards_blogInfo_title_bold}>
                {title}
              </div>
              <div className={cardsStyles.cards_blogInfo_title_icon}>
                <Link href="">
                  <Image
                    src="/right_up_icon.png"
                    alt="right_up_icon"
                    width="24"
                    height="24"
                  />
                </Link>
              </div>
            </div>
            <div className={cardsStyles.cards_blogInfo_description}>{body}</div>
          </div>
          <div className={cardsStyles.cards_userInfo}>
            <div className={cardsStyles.cards_userInfo_avatar}>
              <Image
                src="/blogUser1.png"
                alt="blogUser1 image"
                width="40"
                height="40"
              />
            </div>
            <div className={cardsStyles.cards_userInfo_name_date}>
              <div className={cardsStyles.cards_userInfo_name}>{user}</div>
              <div className={cardsStyles.cards_userInfos_date}>{date}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function BlogHeadingSection() {
  const [searchText, setSearchText] = useState("");

  const handleTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchText != "") {
      console.log(`Searching Results for ${searchText}`);
    } else {
      alert("Please enter something to search");
    }
  };

  return (
    <>
      <div className={blogHomeStyles.blog_heading_container}>
        <div className={blogHomeStyles.blog_heading_contentTxt_search}>
          <div className={blogHomeStyles.blog_heading_contentTxt}>
            <div className={blogHomeStyles.blog_heading_contentTxt_ourBlog}>
              Our blog
            </div>
            <div className={blogHomeStyles.blog_heading_contentTxt_headingText}>
              Resources and insights
            </div>
            <div className={blogHomeStyles.blog_heading_contentTxt_helperText}>
              The latest industry news, interviews, technologies, and resources.
            </div>
          </div>
          <div className={blogHomeStyles.blog_heading_search}>
            <div className={blogHomeStyles.blog_heading_search_icon}>
              <Image
                src="/faMagnifyingGlass.png"
                alt="faMagnifyingGlass image"
                width="30"
                height="30"
              />
            </div>
            <form name="search" target="#" method="GET" onSubmit={handleSearch}>
              <input
                type="text"
                id="search"
                placeholder="Search"
                onChange={handleTextChange}
              />
            </form>
          </div>
        </div>
      </div>
      <div className={blogHomeStyles.side_blog_images}>
        <div className={blogHomeStyles.side_blog_images_left}>
          <Image
            src="/left_band_design.png"
            alt="left_band_design image"
            width="446"
            height="230"
          />
        </div>
        <div className={blogHomeStyles.side_blog_images_right}>
          <Image
            src="/right_band_design.png"
            alt="right_band_design image"
            width="600"
            height="250"
          />
        </div>
      </div>
    </>
  );
}
