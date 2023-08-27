import { programming } from "../images";

function About() {
  return (
    <section id="about" className="p-10 py-20 xl:p-60 text-black">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="text-center md:text-left mb-5 md:mr-20  md:w-[512px]">
            <h1 className="text-3xl mb-5 font-bold">About me</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              optio, eius ipsa dicta alias ipsam labore, commodi explicabo,
              voluptas maiores ullam autem similique! Aliquid dolores ex quis
              similique, nulla animi corrupti amet porro architecto, ipsa totam
              est id. Praesentium, porro est. Excepturi, nobis? Illo inventore,
              ex dolore nemo quisquam nesciunt.
            </p>
          </div>
          <div className="flex items-center">
            <img src={programming} alt="programming" className="md:w-[512px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
