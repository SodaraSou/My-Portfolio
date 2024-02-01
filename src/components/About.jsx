import { programming } from "../images";
import Tech from "./Tech";

function About() {
  return (
    <section id="about" className="p-10 text-black">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
          <h1 className="text-4xl mb-10 md:mb-4 font-bold">About me</h1>
          <p className="text-gray-400 font-medium mb-10 md:mb-4">
            Hi my name is Sodara Sou. I am a Year 3 Information Technology
            Engineering student at The Royal University of Phnom Penh. I am a
            friendly and hardworking individual. I am eager to gain knowledge
            about technology, programming and contribute my skills and knowledge
            to meaningful projects that make a difference.
          </p>
          <Tech />
        </div>
        <div className="hidden md:flex items-center w-full md:w-1/2">
          <img src={programming} alt="programming" />
        </div>
      </div>
    </section>
  );
}

export default About;
