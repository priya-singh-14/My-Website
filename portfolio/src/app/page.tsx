import LandingCard from "./components/landingCard";
import LandingVideo from "./components/landingVideo";
import Typewriter from "@/components/fancy/text/typewriter";

export default function Home() {
  return (
    <div className="w-full">
      <div className="px-5 w-full text-blackPrimary md:w-3/4">
        <p className="text-p2 md:text-p">
          <span className="font-medium">priya@Mac ~ %</span> Priya Singh is a
          product designer who thinks in code.
          <br />
          <Typewriter
            as="span"
            speed={25}
            loop={false}
            showCursor={false}
            parts={[
              {
                text: "Currently, she's completing her undergraduate degree ",
              },
              { text: "@Northeastern", href: "https://www.northeastern.edu/" },
              {
                text: " and building enterprise design systems ",
              },
              { text: "@Klaviyo", href: "https://www.klaviyo.com/" },
              { text: "." },
            ]}
          />
          <span className="inline-block w-[0.5rem] h-[1rem] bg-blackPrimary ml-1 align-center animate-blink" />
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-x-5 w-full md:h-[465px] mt-8 px-5">
        <LandingCard
          cover={"klaviyo-assets/ascent-reveal-loop.svg"}
          width={2 / 3}
          colSpan={8}
          title={"Klaviyo"}
          subtitle={"Ascent Design System"}
          path={"/project-details/3"}
          priority
          rawImg
        ></LandingCard>
        <LandingVideo
          cover={"/landing-page-assets/c4c.mp4"}
          width={1 / 3}
          colSpan={4}
          title={"Code4Community"}
          subtitle={"Building equitable software for US-based nonprofits"}
          path={"/project-details/5"}
        ></LandingVideo>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-x-5 w-full md:h-[465px] mt-4 pb-10 px-5">
        <LandingCard
          cover={"landing-page-assets/vz-cover.png"}
          width={1 / 3}
          colSpan={4}
          title={"Verizon"}
          subtitle={
            "Mitigating customer churn with autonomous data aggregation"
          }
          path={"/project-details/4"}
        ></LandingCard>
        <LandingCard
          cover={"landing-page-assets/receipt_cover2.png"}
          width={1 / 3}
          colSpan={4}
          title={"Re:ceipt"}
          subtitle={
            "Teaching financial literacy as a sustainable practice among Gen Z"
          }
          path={"/project-details/1"}
        ></LandingCard>
        <LandingCard
          cover={"landing-page-assets/cairn_cover.png"}
          width={1 / 3}
          colSpan={4}
          title={"Cairn"}
          subtitle={"Trip scheduling for constraint-based travel"}
          path={"/project-details/2"}
        ></LandingCard>
      </div>
    </div>
  );
}
