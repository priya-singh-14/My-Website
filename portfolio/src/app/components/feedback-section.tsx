"use client";
import { FeedbackSection } from "../utils/types";

interface FeedbackSectionProps {
  sectionDetails: FeedbackSection;
}

export default function FeedbackSection({
  sectionDetails,
}: FeedbackSectionProps) {
  return (
    <div className="w-full h-full p-10">
      <h4 className="text-h4 font-mono uppercase px-5 mr-20 text-blackPrimary">
        Feedback & Next Steps
      </h4>
      <div className="flex flex-wrap mt-10 mx-5 gap-5 justify-center">
        {sectionDetails.feedback.map((feedback, index) => (
          <div key={index} className="rounded-xl w-1/4 p-5 border border-greyPrimary border-opacity-25">
            <h4 className="font-mono text-h4 text-blackPrimary uppercase mb-5">
              0{index+1}.
            </h4>
            <p className="font-sans text-p2 text-blackPrimary uppercase mb-5">{feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
