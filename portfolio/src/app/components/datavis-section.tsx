import React from "react";
import { DataVisSection } from "../utils/types";

import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface DataVisSectionProps {
  sectionDetails: DataVisSection;
}

export default function DataVisSection({
  sectionDetails,
}: DataVisSectionProps) {
  function toChartData(values: Map<string, number>) {
    return Array.from(values.entries()).map(([name, value]) => ({
      name,
      value,
    }));
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-primary p-3 border border-greyLight shadow-sm">
          <p className="font-manrope text-[12px]">{data.name}</p>
          <p className="font-manrope text-[12px] text-blueAccent">
            {`${payload[0].value}% of respondents`}
          </p>
        </div>
      );
    }
    return null;
  };

  const COLORS = ["#433D3C", "#576981", "#D5D0DD", "#A7BBE6"];

  return (
    <div className="w-full px-5 md:px-[8.33%] py-10">
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-2">
        User Research
      </h4>
      <p className="font-manrope text-[14px] text-greyAccent mb-8 max-w-3xl leading-relaxed">
        {sectionDetails.subheading}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {sectionDetails.stats.map((item, index) => (
          <div key={index}>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={toChartData(item.values)}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >
                  {toChartData(item.values).map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip active={undefined} payload={undefined} />}></Tooltip>
              </PieChart>
            </ResponsiveContainer>
            <p className="font-manrope text-[13px] text-[#444] mt-2 leading-relaxed">
              {sectionDetails.captions[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
