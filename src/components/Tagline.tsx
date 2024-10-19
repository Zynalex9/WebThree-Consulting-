const Tagline = () => {
    return (
      <section className="max-h-screen md:px-24 border-b mb-20">
        <div className="text h-[70vh] border-l border-r p-8">
          <div className="h-full flex flex-col items-center justify-center w-full ">
            <p className="w-1/2 text-4xl text-[#5F5F5F] text-wrap pb-10">
              Our mission is to help ensure the{" "}
              <span className="text-main-white">integrity</span> of the NFT space
              continues to thrive by providing clients with a{" "}
              <span className="text-main-white">full suite of services</span> to
              assist them with the launch of their projects.
            </p>
            <div className="headings flex w-full items-center justify-between py-2">
              <h2 className="text-xl font-thin">
                <span className="text-main-green">01.</span> SUPPORTIVE
              </h2>
              <h2 className="text-xl font-thin">
                <span className="text-main-green">02.</span> LAUNCH ASSISTANCE
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Tagline;
  