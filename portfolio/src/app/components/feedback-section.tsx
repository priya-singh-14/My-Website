"use client";
import { FeedbackSection } from "../utils/types";

interface FeedbackSectionProps {
  sectionDetails: FeedbackSection;
}

export default function FeedbackSection({
  sectionDetails,
}: FeedbackSectionProps) {
  const returnToTop = () => {
    const element = document.getElementById("header");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full h-full p-10 mb-20">
      <h4 className="text-h4 font-mono uppercase px-5 mr-20 text-blackPrimary">
        Feedback & Takeaways
      </h4>
      <div className="flex gap-4 px-4 pt-10">
        {sectionDetails.feedback.map((feedback, index) => (
          <div
            key={index}
            className="rounded-xl w-1/4 p-5 border border-greyPrimary border-opacity-25"
          >
            <h4 className="font-mono text-h4 text-blackPrimary uppercase mb-5">
              0{index + 1}.
            </h4>
            <p className="font-sans text-p2 text-greyPrimary text-contain">
              {feedback}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full text-right mt-20">
      <button onClick={returnToTop}>
        <p className="text-greyPrimary font-mono text-p2 pr-5 uppercase underline">Return to Top</p>
      </button></div>
    </div>
  );
}
