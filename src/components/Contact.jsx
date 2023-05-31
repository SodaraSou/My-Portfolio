import { linkedin, github, phone, mail, location } from "../images";

function Contact() {
  return (
    <section id="contact" className="p-10 py-20 md:p-20 text-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl mb-10 text-center">Contact</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-[256px] p-20 shadow-xl rounded-xl flex flex-col justify-center items-center">
            <img src={phone} alt="phone" className="w-11 mb-3" />
            <h1 className="mb-5">Phone</h1>
            <p>012 354 987</p>
          </div>
          <div className="w-[256px] p-20 shadow-xl rounded-xl flex flex-col justify-center items-center">
            <img src={mail} alt="mail" className="w-11 mb-3" />
            <h1 className="mb-5">Email</h1>
            <p>sodarasou168@gmail.com</p>
          </div>
          <div className="w-[256px] p-20 shadow-xl rounded-xl flex flex-col justify-center items-center">
            <img
              src={location}
              alt="location"
              className="w-[44px] h-[44px] mb-3"
            />
            <h1 className="mb-5">Location</h1>
            <p>Cambodia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
