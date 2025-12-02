import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const timeframes = ["1D", "1W", "1M", "3M", "1Y", "ALL"];

const generateData = (timeframe: string) => {
  const dataPoints: { date: string; value: number }[] = [];
  let points = 30;
  
  if (timeframe === "1D") points = 24;
  if (timeframe === "1W") points = 7;
  if (timeframe === "1M") points = 30;
  if (timeframe === "3M") points = 90;
  if (timeframe === "1Y") points = 365;
  if (timeframe === "ALL") points = 730;
  
  let baseValue = 44000;
  for (let i = 0; i < points; i++) {
    baseValue += (Math.random() - 0.45) * 200;
    dataPoints.push({
      date: `Day ${i}`,
      value: baseValue
    });
  }
  
  return dataPoints;
};

export function PortfolioChart() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M");
  const data = generateData(selectedTimeframe);

  return (
    <div className="mb-6 sm:mb-12">
      <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 lg:p-6">
        {/* Timeframe Selector */}
        <div className="flex justify-end gap-1 sm:gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setSelectedTimeframe(tf)}
              className={`px-2.5 py-1.5 sm:px-4 sm:py-2 rounded transition-colors text-sm sm:text-base whitespace-nowrap flex-shrink-0 ${
                selectedTimeframe === tf
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="h-64 sm:h-80 lg:h-96 -mx-3 sm:mx-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                stroke="#9ca3af"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                hide
              />
              <YAxis 
                stroke="#9ca3af"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                domain={['dataMin - 1000', 'dataMax + 1000']}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                width={60}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px'
                }}
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Value']}
                labelStyle={{ color: '#6b7280' }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#000000" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
