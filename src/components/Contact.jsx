import { phone, mail, telegram } from "../images";

function Contact() {
  return (
    <section id="contact" className="p-10 text-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-center md:text-left mb-10 font-bold">
          Contact
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="rounded-3xl shadow-xl flex flex-col justify-center items-center gap-4 p-20">
            <img src={mail} alt="mail" className="w-8" />
            <p>Email</p>
            <h2 className="text-lg font-bold">sodarasou168@gmail.com</h2>
          </div>
          <div className="rounded-3xl shadow-xl flex flex-col justify-center items-center gap-4 p-20">
            <img src={phone} alt="location" className="w-8" />
            <p>Phone Number</p>
            <h2 className="text-lg font-bold">012 354 987</h2>
          </div>
          <div className="rounded-3xl shadow-xl flex flex-col justify-center items-center gap-4 p-20">
            <img src={telegram} alt="location" className="w-8" />
            <p>Telegram</p>
            <a
              href="https://t.me/SodaraSou"
              target="_blank"
              className="text-lg font-bold hover:underline"
            >
              @SodaraSou
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
