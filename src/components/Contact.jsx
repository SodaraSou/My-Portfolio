import { linkedin, github, phone, mail, location } from "../images";

function Contact() {
  return (
    <section id="contact" className="p-10 py-20 md:p-20 text-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl mb-10 text-center">Contact</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
          {/* <div className="p-20 shadow-xl rounded-xl flex flex-col items-center w-full md:w-auto">
            <img src={phone} alt="phone" className="w-10 md:w-11 mb-3" />
            <h1 className="mb-5">Phone</h1>
            <p>012-354-987</p>
          </div> */}
          <div className="p-20 shadow-xl rounded-xl flex flex-col items-center w-full md:w-1/2">
            <img src={mail} alt="mail" className="w-10 md:w-11 mb-3" />
            <h1 className="mb-5">Email</h1>
            <p>sodarasou168@gmail.com</p>
          </div>
          <div className="p-20 shadow-xl rounded-xl flex flex-col items-center w-full md:w-1/2">
            <img
              src={location}
              alt="location"
              className="w-[44px] h-[44px] mb-3"
            />
            <h1 className="mb-5">Location</h1>
            <p>Phnom Penh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
