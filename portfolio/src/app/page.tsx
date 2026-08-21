import LandingCard from "./components/landingCard";

export default function Home() {
  return (
    <div className="w-full">
      <div className="px-5 w-full my-5 text-blackPrimary md:w-3/4">
        <p className="text-p2 md:text-p">
          <span className="font-semibold">priya@Mac ~ %</span> Priya Singh is a
          product designer and engineer with an obsessive commitment to detail.
          She is invested in end-to-end product design, and will never skip an
          opportunity to build from canvas to code.
        </p>
        <p className="text-p2 md:text-p mt-4">
          Currently, she&apos;s completing her undergraduate degree
          @Northeastern and building enterprise design systems @Klaviyo.
          <span className="inline-block w-[6px] h-3.5 bg-greyAccent ml-1" />
        </p>
      </div>
      <div className="flex md:grid md:grid-cols-12 gap-4 md:gap-x-5 w-full h-[465px] mt-8 px-5">
        <LandingCard
          cover={"landing-page-assets/klaviyo_cover.svg"}
          width={2 / 3}
          colSpan={8}
          title={"Klaviyo"}
          subtitle={"Ascent Design System"}
          path={"/project-details/1"}
          priority
        ></LandingCard>
        <LandingCard
          cover={"landing-page-assets/cairn_cover.png"}
          width={1 / 3}
          colSpan={4}
          title={"Verizon"}
          subtitle={"Mitigating customer churn with autonomous data aggregation."}
          path={"/project-details/2"}
        ></LandingCard>
      </div>
      <div className="flex md:grid md:grid-cols-12 gap-4 md:gap-x-5 w-full h-[465px] mt-8 px-5">
        <LandingCard
          cover={"landing-page-assets/cairn_cover.png"}
          width={1 / 3}
          colSpan={4}
          title={"Code4Community"}
          subtitle={"Making equitable software for the benefit of US Based nonprofits."}
          path={"/project-details/2"}
        ></LandingCard>
        <LandingCard
          cover={"landing-page-assets/cairn_cover.png"}
          width={1 / 3}
          colSpan={4}
          title={"Re:ceipt"}
          subtitle={"Teaching financial literacy as a sustainable practice among Gen Z"}
          path={"/project-details/2"}
        ></LandingCard>
        <LandingCard
          cover={"landing-page-assets/cairn_cover.png"}
          width={1 / 3}
          colSpan={4}
          title={"Cairn"}
          subtitle={""}
          path={"/project-details/2"}
        ></LandingCard>
      </div>
    </div>
  );
}
