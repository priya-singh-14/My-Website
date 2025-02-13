export default function ProjectLayout() {
  return (
    <div className="w-full">
      <div className="w-full text-blackPrimary">
        <h4 className="flex text-h4 font-mono mt-16 ml-10">PROJECT</h4>
        <h4 className="flex text-h4 font-mono mt-6 ml-10">DESCRIPTION</h4>
        <div className="w-full flex">
          <h4 className="w-full text-h4 font-mono mt-6 ml-10">TECHSTACK</h4>
          <h4 className="mr-12 mt-6 text-h4 font-mono text-bluePrimary">
            LINK
          </h4>
        </div>
        <div className="z-0 flex h-full pb-10 mt-20 h-full bg-blueSecondaryLight text-left">
          <img src="bw.svg" className="ml-10 z-10 w-1/2 h-1/2"></img>
          <div className=" w-1/2 justify-end text-white">
            <h4 className="w-2/3 text-h4 font-mono top-0 pt-8 ml-10">
              PURPOSE + PLANNING
            </h4>
            <p className="w-2/3 text-p font-helvetica ml-10 mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              dolore ex odio voluptate suscipit sed veniam voluptatem officia ab
              iusto, quis eaque, autem deleniti ipsum corporis repudiandae
              magnam quia animi!
            </p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2">
            <h4 className="text-h4 font-mono mt-16 ml-10">
              PROCESS + LEARNING GOALS
            </h4>
            <p className="w-full text-p font-helvetica ml-10 mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              dolore ex odio voluptate suscipit sed veniam voluptatem officia ab
              iusto, quis eaque, autem deleniti ipsum corporis repudiandae
              magnam quia animi!
            </p>
          </div>
          <img
            src="bw.svg"
            className="aspect-square ml-28 z-10 w-1/3 h-1/4"
          ></img>
        </div>
        <div className="relative flex mt-32 h-80 bg-blueSecondaryLight">
          <div className="w-full relative m-auto">
          <img
              src="bw.svg"
              className="m-auto mr-80 aspect-square relative bottom-36 z-10 w-1/3"
            />
            <img
              src="lp.jpg"
              className="absolute left-80 bottom-24 aspect-square z-20 w-1/4 shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}