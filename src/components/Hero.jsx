import myImage from "../images/SodaraSou.jpg";
import githubImage from "../images/github.svg";
import linkedInImage from "../images/linkedin.svg";
import telegramImage from "../images/telegram.svg";
import facebookImage from "../images/facebook.svg";
import twitterImage from "../images/twitter.svg";

function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col-reverse md:flex-row p-10 justify-center items-center space-y-14 md:space-y-0 md:space-x-5">
        <div className="space-y-10 md:space-y-14 text-center md:text-left mt-10 md:mt-0">
          <div>
            <h1 className="text-5xl md:text-8xl mb-5 font-bold">
              Hi there, I'm <span className="text-daraOrange">Sodara</span> Sou
            </h1>
            <h2 className="text-2xl md:text-4xl">
              I'm into <span>Web Development!</span>
            </h2>
          </div>
          <div className="space-x-2 md:space-x-5">
            <a
              href="https://github.com/SodaraSou"
              className="bg-daraOrange rounded-full px-1 py-3 md:px-2 md:py-5"
              target="_blank"
            >
              <img
                src={githubImage}
                alt="github"
                className="inline-block w-8 md:w-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sou-sodara-7683b4267/"
              className="bg-daraOrange rounded-full px-1 py-3 md:px-2 md:py-5"
              target="_blank"
            >
              <img
                src={linkedInImage}
                alt="linkedin"
                className="inline-block w-8 md:w-10"
              />
            </a>
            <a
              href="https://t.me/SodaraSou"
              className="bg-daraOrange rounded-full px-1 py-3 md:px-2 md:py-5"
              target="_blank"
            >
              <img
                src={telegramImage}
                alt="telegram"
                className="inline-block w-8 md:w-10"
              />
            </a>
            <a
              href="/"
              className="bg-daraOrange rounded-full px-1 py-3 md:px-2 md:py-5"
              target="_blank"
            >
              <img
                src={facebookImage}
                alt="facebook"
                className="inline-block w-8 md:w-10"
              />
            </a>
            <a
              href="/"
              className="bg-daraOrange rounded-full px-1 py-3 md:px-2 md:py-5"
              target="_blank"
            >
              <img
                src={twitterImage}
                alt="twitter"
                className="inline-block w-8 md:w-10"
              />
            </a>
          </div>
        </div>
        <div>
          <img src={myImage} alt="myImage" className="rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
