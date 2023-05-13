function Footer() {
  return (
    <div className="bg-daraBlack hidden flex flex-col lg:block absolute bottom-0 left-0 right-0">
      {/* <div className="max-w-7xl lg:container mx-auto md:p-8 flex flex-col md:flex-row justify-center items-center md:justify-between">
        <div>test1</div>
        <div>test2</div>
        <div>test3</div>
        <div>test4</div>
      </div>
      <div className="text-center">
        Hello
      </div> */}
      <div className="max-w-7xl lg:container mx-auto p-10">
        {/* <div className="flex justify-between items-center mb-10">
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
          <div>test4</div>
        </div> */}
        <div className="text-center text-xl">
          © {new Date().getFullYear()} SodaraSou. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
