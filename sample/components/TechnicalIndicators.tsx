import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const indicators = [
  {
    name: "RSI (14)",
    value: "58.32",
    signal: "Neutral",
    description: "Relative Strength Index indicates neither overbought nor oversold conditions",
    trend: "neutral"
  },
  {
    name: "MACD",
    value: "+124.5",
    signal: "Bullish",
    description: "Moving Average Convergence Divergence shows positive momentum",
    trend: "up"
  },
  {
    name: "Moving Average (50)",
    value: "$45,892",
    signal: "Above",
    description: "Current portfolio value is above the 50-day moving average",
    trend: "up"
  },
  {
    name: "Bollinger Bands",
    value: "Mid-Upper",
    signal: "Positive",
    description: "Price is trading in the upper half of the Bollinger Bands",
    trend: "up"
  },
  {
    name: "Volume Trend",
    value: "+18%",
    signal: "Increasing",
    description: "Trading volume is 18% above average for this period",
    trend: "up"
  },
  {
    name: "Sharpe Ratio",
    value: "1.47",
    signal: "Good",
    description: "Risk-adjusted returns are favorable compared to volatility",
    trend: "neutral"
  }
];

export function TechnicalIndicators() {
  return (
    <div className="mb-6 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6">Technical Analysis</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {indicators.map((indicator) => (
          <div 
            key={indicator.name}
            className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 mb-1 text-sm sm:text-base truncate">{indicator.name}</h3>
                <p className="text-xl sm:text-2xl">{indicator.value}</p>
              </div>
              <div className={`p-1.5 sm:p-2 rounded-full flex-shrink-0 ml-2 ${
                indicator.trend === 'up' ? 'bg-green-100' :
                indicator.trend === 'down' ? 'bg-red-100' :
                'bg-gray-100'
              }`}>
                {indicator.trend === 'up' && <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />}
                {indicator.trend === 'down' && <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />}
                {indicator.trend === 'neutral' && <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
              </div>
            </div>
            
            <div className={`inline-block px-2.5 py-1 rounded-full text-xs sm:text-sm mb-2 sm:mb-3 ${
              indicator.trend === 'up' ? 'bg-green-100 text-green-800' :
              indicator.trend === 'down' ? 'bg-red-100 text-red-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {indicator.signal}
            </div>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{indicator.description}</p>
          </div>
        ))}
      </div>

      {/* Overall Analysis Summary */}
      <div className="mt-4 sm:mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl mb-2 sm:mb-3">Overall Signal</h3>
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          <span className="text-xl sm:text-2xl">Bullish</span>
        </div>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Technical indicators suggest positive momentum with 4 out of 6 indicators showing bullish signals. 
          The portfolio is trending above key moving averages with healthy volume. Consider this analysis 
          alongside fundamental research and your investment strategy.
        </p>
      </div>
    </div>
  );
}
