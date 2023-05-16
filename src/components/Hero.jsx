import myImage from "../images/SodaraSou.jpg";
import githubImage from "../images/github.svg";
import linkedInImage from "../images/linkedin.svg";
import telegramImage from "../images/telegram.svg";
import facebookImage from "../images/facebook.svg";
import twitterImage from "../images/twitter.svg";

function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col-reverse md:flex-row p-10 justify-center items-center md:space-x-5">
        <div className="space-y-10 md:space-y-14 text-center md:text-left">
          <div>
            <h1 className="text-5xl md:text-8xl mb-5 font-bold">
              Hi there, I'm <span className="text-daraOrange">Sodara</span> Sou
            </h1>
            <h2 className="text-2xl md:text-4xl">I like Coding!</h2>
          </div>
          <div className="space-x-2 md:space-x-5 flex justify-center md:justify-start">
            <div className="bg-daraOrange rounded-full p-2 hover:-translate-y-1.5 duration-150">
              <a href="https://github.com/SodaraSou" target="_blank">
                <img src={githubImage} alt="github" className="w-11" />
              </a>
            </div>
            <div className="bg-daraOrange rounded-full p-2 hover:-translate-y-1.5 duration-150">
              <a
                href="https://www.linkedin.com/in/sou-sodara-7683b4267/"
                target="_blank"
              >
                <img src={linkedInImage} alt="linkedin" className="w-11" />
              </a>
            </div>
            <div className="bg-daraOrange rounded-full p-2 hover:-translate-y-1.5 duration-150">
              <a href="https://t.me/SodaraSou" target="_blank">
                <img src={telegramImage} alt="telegram" className="w-11" />
              </a>
            </div>
            <div className="bg-daraOrange rounded-full p-2 hover:-translate-y-1.5 duration-150">
              <a href="#" target="_blank">
                <img src={facebookImage} alt="facebook" className="w-11" />
              </a>
            </div>
            <div className="bg-daraOrange rounded-full p-2 hover:-translate-y-1.5 duration-150">
              <a href="#" target="_blank">
                <img src={twitterImage} alt="twitter" className="w-11" />
              </a>
            </div>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <img src={myImage} alt="myImage" className="rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
