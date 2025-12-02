import { PortfolioChart } from "./PortfolioChart";
import { TechnicalIndicators } from "./TechnicalIndicators";

export function HomeView() {
  return (
    <div className="pb-20">
      {/* Portfolio Value */}
      <div className="mb-6 sm:mb-12">
        <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base">Total Portfolio Value</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-2">$47,392.18</h1>
        <div className="flex items-center gap-2 flex-wrap text-sm sm:text-base">
          <span className="text-green-600">+$2,847.32</span>
          <span className="text-green-600">(+6.39%)</span>
          <span className="text-gray-500">Today</span>
        </div>
      </div>

      {/* Portfolio Chart */}
      <PortfolioChart />

      {/* Technical Indicators */}
      <TechnicalIndicators />
    </div>
  );
}
