function Footer() {
  return (
    <footer className="bg-daraBlack w-full fixed bottom-0 right-0 left-0">
      <div className="max-w-7xl lg:container mx-auto p-5 md:p-10">
        {/* <div className="flex justify-between items-center mb-10">
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
          <div>test4</div>
        </div> */}
        <div className="text-center text-md md:text-xl">
          © {new Date().getFullYear()} SodaraSou. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
