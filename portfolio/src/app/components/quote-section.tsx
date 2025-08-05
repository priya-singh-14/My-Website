"use client";
import { QuoteSection } from "../utils/types";

interface QuoteSectionProps {
  sectionDetails: QuoteSection;
}

export default function QuoteSection({ sectionDetails }: QuoteSectionProps) {
  return (
    <div className="w-full h-full p-20">
      <div className="px-10 grid grid-cols-2 gap-10">
        {sectionDetails.quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} index={index} />
        ))}
      </div>
    </div>
  );
}

function QuoteCard({ quote, index }: { quote: string; index: number }) {
  const parts = quote.split("/");
  const theme = parts[0];
  const quoteParts = parts[1]?.split("$") || [];
  const context = parts[1]?.split("$")[0] || [];
  const mainQuote = quoteParts[1] || "";
  const secondQuote = quoteParts[3] || "";

  return (
    <div className="bg-primary rounded-xl border border-greyPrimary border-opacity-25 overflow-hidden flex flex-col h-full">
      <div className="flex flex-col justify-between p-6 h-full">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-greyPrimary">
              0{index+1}. {theme}
            </h4>
          </div>

          {mainQuote && (
            <blockquote className="mb-4">
              <p className="text-blackPrimary text-opacity-70 text-lg text-sans font-medium italic">
                "{mainQuote}"
              </p>
            </blockquote>
          )}

          {secondQuote && (
            <blockquote className="mb-4">
              <p className="text-blackPrimary text-opacity-70 text-lg text-sans font-medium italic">
                "{secondQuote}"
              </p>
            </blockquote>
          )}
        </div>

        {context && (
          <p className="text-greyPrimary font-condensed text-sm border-t border-greyPrimary border-opacity-25 pt-3 mt-3">
            {context}
          </p>
        )}
      </div>
    </div>
  );
}
