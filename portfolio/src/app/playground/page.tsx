import LandingCard from "../components/landingCard";
import LandingVideo from "../components/landingVideo";

export default function Home() {
  return (
    <div className="w-full pb-10">
      <h2 className="text-h3 mx-5 md:mx-10 font-mono font-light md:text-h2 pt-7 pb-5 text-blackPrimary">
        PLAY
      </h2>
      <hr className="mx-5 md:mx-10 pb-5"></hr>
      <div className="flex px-5 md:px-10 pb-2 gap-x-2">
        <LandingCard
          cover={"landing-page-assets/graphic_cover.png"}
          width={1 / 3}
          height={1 / 3}
          aspect={"square"}
          hoverCaption={"MIXED MEDIA PHOTOSHOP STUDY"}
          path={""}
        ></LandingCard>
        <LandingCard
          cover={"playground-assets/smiski.png"}
          width={2 / 3}
          height={1 / 3}
          hoverCaption={"BOSE X SMISKI CONCEPT CAMPAIGN"}
          path={""}
        ></LandingCard>
      </div>
      <div className="flex w-full h-full px-5 md:px-10 pb-2 gap-x-2">
        <LandingVideo
          cover={"playground-assets/2048.mp4"}
          width={2 / 3}
          height={1 / 3}
          aspect={"square"}
          hoverCaption={"COFFEE THEMED 2048"}
          path={""}
        ></LandingVideo>
        <LandingVideo
          cover={"playground-assets/cafe.mp4"}
          width={1 / 3}
          height={1 / 3}
          aspect={"square"}
          hoverCaption={"CAT CAFE PROTOTYPE"}
          path={""}
        ></LandingVideo>
      </div>
      <div className="flex w-full h-full px-5 md:px-10 pb-2 gap-x-2">
        <LandingCard
          cover={"playground-assets/type.png"}
          width={1 / 4}
          height={1 / 4}
          aspect={"square"}
          hoverCaption={"TYPOGRAPHY STUDY"}
          path={""}
        ></LandingCard>
        <LandingVideo
          cover={"playground-assets/ladder.mp4"}
          width={1 / 4}
          height={1 / 3}
          hoverCaption={"PIXEL LADDER GAME"}
          path={""}
        ></LandingVideo>
        <LandingVideo
          cover={"landing-page-assets/demo.mp4"}
          width={1 / 2}
          height={1 / 3}
          hoverCaption={"DESIGN CURATION PROTOTYPE"}
          path={""}
        ></LandingVideo>
      </div>
      <div className="flex px-5 md:px-10 pb-2 gap-x-2">
        <LandingCard
          cover={"playground-assets/art2.png"}
          width={1 / 3}
          height={1 / 3}
          aspect={"square"}
          hoverCaption={"ACRYLIC ON CANVAS"}
          path={""}
        ></LandingCard>
        <LandingCard
          cover={"playground-assets/art.png"}
          width={2 / 3}
          height={1 / 3}
          hoverCaption={"CHALK PASTEL ON PAPER"}
          path={""}
        ></LandingCard>
      </div>
    </div>
  );
}
