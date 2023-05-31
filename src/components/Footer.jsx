function Footer() {
  return (
    <footer className="bg-daraBlack w-full">
      <div className="max-w-7xl mx-auto p-[20px] md:p-[30px] text-md md:text-xl text-center">
        © Copyright {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
