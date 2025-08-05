import LandingCard from "./components/landingCard";
import LandingVideo from "./components/landingVideo";

export default function Home() {
  return (
    <div className="w-full">
      <div className="md:px-10 px-5 flex w-full">
        <h1 className="font-light text-left font-mono w-3/4 my-5 text-h4 md:text-h1 md:font-light text-black md:text-left">
          SOFTWARE ENGINEER AND PRODUCT DESIGNER CURRENTLY BASED IN BOSTON.
        </h1>
      </div>
      <div className="flex w-full h-full">
        <LandingCard
          cover={"landing-page-assets/pockit_cover.png"}
          width={1 / 3}
          height={1 / 3}
          aspect={"square"}
          hoverCaption={"DEVELOPMENT 01: POCKIT / JULY 2025"}
          path={""}
        ></LandingCard>
        <LandingCard
          cover={"landing-page-assets/receipt_mockup.png"}
          width={2 / 3}
          height={1 / 3}
          hoverCaption={"DESIGN 01: RE:CEIPT / MAY 2025"}
          path={""}
        ></LandingCard>
      </div>
      <div className="flex w-full h-full">
        <LandingVideo
          cover={"landing-page-assets/dark_texture.mp4"}
          width={1 / 3}
          height={1 / 3}
          aspect={"square"}
          path={""}
        ></LandingVideo>
        <LandingCard
          cover={"landing-page-assets/cairn_cover.png"}
          width={1 / 3}
          height={1 / 3}
          aspect={"square"}
          hoverCaption={"DEVELOPMENT & DESIGN 01: CAIRN / JANUARY 2025"}
          path={""}
        ></LandingCard>
        <LandingCard
          cover={"landing-page-assets/headshot.png"}
          width={1 / 3}
          height={1 / 3}
          aspect={"square"}
          hoverCaption={"HI I'M PRIYA :)"}
          path={""}
        ></LandingCard>
      </div>
      <div className="flex w-full h-full">
        <LandingVideo
          cover={"landing-page-assets/demo.mp4"}
          width={2 / 3}
          height={1 / 3}
          hoverCaption={"PLAYGROUND 01"}
          path={""}
        ></LandingVideo>
        <LandingCard
          cover={"landing-page-assets/graphic_cover.png"}
          width={1 / 3}
          height={1 / 3}
          aspect={"square"}
          hoverCaption={"PLAYGROUND 02"}
          path={""}
        ></LandingCard>
      </div>
    </div>
  );
}
