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
        <div className="w-1/4 h-80 m-4 bg-bluePrimary"></div>
        <div className="w-1/4 h-80 m-4 bg-bluePrimary"></div>
        <div className="w-1/2 bg-black m-4"></div> 
      </div>
      <div className="w-0.9 h-60 bg-cardBlue m-4"></div>
    </div>
  );
}

