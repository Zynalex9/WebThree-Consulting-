const Form = () => {
  return (
    <>
      <div className="md:px-24" >
        <div className="section-one h-[40vh] w-full border flex items-center justify-center">
          <h1 className="font-Thunder text-9xl pt-20">GET STARTED</h1>
        </div>
        <div className="form ">
          <div className="section w-full flex items-center justify-between border-[1px] py-16 px-8">
            <div className="heading w-1/3">
              <h1 className="text-xl">
                <span className="text-main-green">01.</span>
                Name
              </h1>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 py-7 px-10 bg-transparent border-0 focus:outline-none text-main-green"
            />
          </div>
          <div className="section w-full flex items-center justify-between border-[1px] py-16 px-8">
            <div className="heading w-1/3">
              <h1 className="text-xl">
                <span className="text-main-green">02.</span>
                Email
              </h1>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 py-7 px-10 bg-transparent border-0 focus:outline-none text-main-green"
            />
          </div>
          <div className="section w-full flex items-center justify-between border-[1px] py-16 px-8">
            <div className="heading w-1/3">
              <h1 className="text-xl">
                <span className="text-main-green">03.</span>
                Project Name
              </h1>
            </div>
            <input
              type="text"
              placeholder="Project Name"
              className="w-1/2 py-7 px-10 bg-transparent border-0 focus:outline-none text-main-green"
            />
          </div>
          <div className="section w-full flex items-center justify-between border-[1px] py-16 px-8">
            <div className="heading w-1/3">
              <h1 className="text-xl">
                <span className="text-main-green">04.</span>
                Message
              </h1>
            </div>
            <input
              type="text"
              placeholder="message"
              className="w-1/2 py-7 px-10 bg-transparent border-0 focus:outline-none text-main-green"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
