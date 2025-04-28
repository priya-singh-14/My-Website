export default function Home() {
  return (
    <div className="w-full">
      <div className="w-1/6 text-bluePrimary text-h5 mt-6 ml-10 font-helvetica"></div>{" "}
      <div className="flex w-full justify-end pr-10">
        <h1 className="font-mono w-2/3 my-5 text-h1 font-light text-black text-right">
          SOFTWARE ENGINEER AND PRODUCT DESIGNER CURRENTLY BASED IN BOSTON.
        </h1>
      </div>
      <div className="flex w-full h-full">
        <img
          className="w-1/4 h-96 m-1 overflow-hidden object-cover ml-10 bg-black"
          src="headshot.png"
        ></img>
        <img
          className="w-1/4 h-96 m-1 overflow-hidden object-cover"
          src="sketch.jpg"
        ></img>
        <video
          className="w-1/2 h-96 overflow-hidden m-1 object-cover mr-10"
          src="/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="flex w-full h-full">
        
        <img
          className="w-3/4 h-80 m-2 overflow-hidden object-cover ml-10"
          src="notes.jpg"
        ></img>
        <img
          className="w-1/4 h-80 m-2 overflow-hidden object-cover mr-10"
          src="comp.jpg"
        ></img>
      </div>
    </div>
  );
}
