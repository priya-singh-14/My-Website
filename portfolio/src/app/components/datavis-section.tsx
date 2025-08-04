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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-primary p-3 border shadow-lg">
          <p className="font-sans">{data.name}</p>
          <p className="text-blueAccent">
            {`${payload[0].value}% of respondents`}
          </p>
        </div>
      );
    }
    return null;
  };

  const COLORS = [
    "#433D3C",
    "#576981",
    "#D5D0DD",
    "#A7BBE6",
  ];

  return (
    <div className="w-full h-full p-10">
      <h4 className="text-h4 font-mono px-5 ">USER RESEARCH</h4>
      <p className="text-p text-sm p-5 text-greyPrimary font-mono text-light">
        {sectionDetails.subheading}
      </p>
      <div className="md:flex xs:flex-wrap">
        {sectionDetails.stats.map((item, index) => (
          <ResponsiveContainer key={index} width="100%" height={300}>
            <PieChart>
              <Pie
                data={toChartData(item.values)}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${value}%`}
              >
                {toChartData(item.values).map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />}></Tooltip>
            </PieChart>
            <p className="text-center text-p2 text-greyPrimary font-bold">
              {sectionDetails.captions[index]}
            </p>
          </ResponsiveContainer>
        ))}
      </div>
    </div>
  );
}
