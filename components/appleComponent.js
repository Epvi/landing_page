import { useEffect } from "react";

const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const frameCount = 148;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};
export default function AppleComponent() {
  useEffect(() => {
    preloadImages();
    const canvas = document.getElementById("canvas");
    const html = document.getElementById("html");
    const body = document.getElementById("body");
    const context = canvas.getContext("2d");

    canvas.width = 1158;
    canvas.height = 770;
    const img = new Image();
    img.src = currentFrame(1);

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTopElement = html.offsetTop;
      const scrollHeightElement = html.offsetHeight;

      const scrollTopWindow = window.document.documentElement.scrollTop;
      const scrollHeightWindow = window.document.documentElement.scrollHeight;

      const animationStart = scrollTopWindow - scrollTopElement;

      console.log(scrollTopWindow - scrollTopElement);
      //   if (scrollTopWindow >= scrollTopElement) {
      if (animationStart >= 0) {
        // const maxScrollTop = scrollHeightWindow - window.innerHeight;
        const maxScrollTop = scrollHeightWindow - window.innerHeight;
        // const scrollFraction = scrollTopWindow / maxScrollTop;
        const scrollFraction = animationStart / maxScrollTop;

        console.log(html.offsetTop, html.offsetHeight);
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );

        window.requestAnimationFrame(() => updateImage(frameIndex + 1));
      }
    });
  }, []);

  return (
    <div id="html">
      <div id="body">
        <canvas id="canvas"></canvas>
      </div>
    </div>
  );
}
