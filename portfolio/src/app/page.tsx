export default function Home() {
  return (
    <div className="w-full">
      <div className="w-1/6 text-blackPrimary text-h5 mt-6 ml-12 font-helvetica">
        <h2 className="w-4/5">COFFEE LOVER, PERFUME COLLECTOR, AND BLUE PEN ENTHUSIAST</h2>
      </div>
      <div className="flex w-full justify-end pr-10">
        <h1 className="font-mono w-2/3 mb-5 text-h1 font-light text-bluePrimary text-right">
          SOFTWARE ENGINEER AND PRODUCT DESIGNER CURRENTLY BASED IN BOSTON
        </h1>
      </div>
      <div className="flex w-full h-full">
        <img className="w-1/4 h-80 m-2 object-cover" src="notes.jpg"></img>
        <img className="w-1/4 h-80 m-2 object-cover" src="comp.jpg"></img>
        <div className="w-1/2 h-80 bg-black m-2">
          <video className="object-contain" src="demo.mov"></video>
          </div> 
      </div>
      <div className="flex w-full h-full">
        <img className="w-1/3 m-1 object-cover" src="headshot.png"></img>
        <img className="w-2/3 m-1 object-cover" src="sketch.jpg"></img>
      </div>
    </div>
  );
}

