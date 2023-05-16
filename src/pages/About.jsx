import myImage from "../images/SodaraSou.jpg";

function About() {
  return (
    <section id="about">
      <div className="p-10 text-center md:text-left">
        <h1 className="text-5xl font-bold md:text-left mb-10">About Me</h1>
        <div className="flex justify-center items-center flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
          <div>
            <p className="text-xl md:text-2xl">
              My name is Sodara Sou and I am a sophomore in the ITE department
              at the Royal University of Phnom Penh. I find programming to be a
              fascinating field and enjoy the challenge of creating software
              from scratch. I have a particular affinity for web development and
              enjoy building responsive and visually appealing websites. I find
              the process of designing and coding a website to be both creative
              and technically challenging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
