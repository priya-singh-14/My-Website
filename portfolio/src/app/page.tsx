export default function Home() {
  return (
    <div className="w-full">
      <div className="w-1/6 text-bluePrimary text-h5 mt-6 ml-10 font-helvetica"></div>{" "}
      <div className="pl-5 flex w-full md:justify-end md:pr-10">
        <h1 className="text-xl font-light text-left font-mono w-2/3 my-5 md:text-h1 md:font-light text-black md:text-right">
          SOFTWARE ENGINEER AND PRODUCT DESIGNER CURRENTLY BASED IN BOSTON.
        </h1>
      </div>
      <div className="flex w-full h-full">
        <img
          className="w-1/2 h-50 md:w-1/4 md:h-96 m-1 overflow-hidden md:object-cover ml-5 bg-black"
          src="headshot.png"
        ></img>
        <img
          className="w-1/2 h-50 md:w-1/4 md:h-96 m-1 overflow-hidden object-cover mr-5 md:mr-0"
          src="sketch.jpg"
        ></img>
        <video
          className="hidden md:block w-1/2 h-96 overflow-hidden m-1 object-cover mr-10"          src="/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="w-full md:hidden">
        <video
          className="w-full h-auto md:80 mb-2 overflow-hidden object-cover"
          src="/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="flex w-full h-full pb-10 md:pb-0">
        <img
          className="ml-5 m-1 w-1/2 h-50 md:w-3/4 md:h-80 md:m-2 overflow-hidden object-cover md:ml-5"
          src="notes.jpg"
        ></img>
        <img
          className="mr-5 m-1 w-1/2 h-50 md:w-1/4 md:h-80 md:m-2 overflow-hidden object-cover md:mr-5"
          src="comp.jpg"
        ></img>
      </div>
    </div>
  );
}
