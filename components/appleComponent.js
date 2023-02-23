import { useEffect } from "react";

export default function AppleComponent({ frameCount, url }) {
  useEffect(() => {
    preloadImages(frameCount, url);
    const canvas = document.getElementById("canvas");
    const html = document.getElementById("html");
    const body = document.getElementById("body");
    const context = canvas.getContext("2d");

    canvas.width = 1158;
    canvas.height = 770;
    const img = new Image();
    img.src = currentFrame(1, url);

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const updateImage = (index) => {
      img.src = currentFrame(index, url);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", (event) => {
      const scrollTopElement = html.offsetTop;
      const scrollHeightElement = html.offsetHeight;

      const scrollTopWindow = window.document.documentElement.scrollTop;

      const animationStart = scrollTopWindow - scrollTopElement;

      if (animationStart >= 0) {
        const maxScrollTop = scrollHeightElement - window.innerHeight;
        const scrollFraction = animationStart / maxScrollTop;

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

const currentFrame = (index, url) => `${url}${index}.png`;
// const currentFrame = (index) =>   `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`


const preloadImages = (frameCount, url) => {
  for (let i = 1; i <= frameCount; i++) {
    console.log(i)
    const img = new Image();
    img.src = currentFrame(i, url);
  }
};
