// Mock data for use in portfolio tracker frontend

export type Holding = {
  id: string;
  ticker: string;
  name: string;
  value: number;
  gainTodayPct: number;
  oneweekGainPct: number;
  onemonthGainPct: number;
  threemonthGainPct: number;
  oneyearGainPct: number;
  totalGainPct: number;

};

export type PortfolioSummary = {
  totalValue: number;
  totalGainPct: number;
  holdings: Holding[];
};

export const mockPortfolio: PortfolioSummary = {
  totalValue: 25430.12,
  totalGainPct: 3.4,
  holdings: [
    {
      id: '1',
      ticker: 'AAPL',
      name: 'Apple Inc.',
      value: 8200.5,
      gainTodayPct: 1.2,
      oneweekGainPct: 2.5,
      onemonthGainPct: 5.0,
      threemonthGainPct: 8.3,
      oneyearGainPct: 15.4,
      totalGainPct: 25.6,
    },
    {
      id: '2',
      ticker: 'MSFT',
      name: 'Microsoft',
      value: 7300.15,
      gainTodayPct: -0.4,
      oneweekGainPct: 1.8,
      onemonthGainPct: 3.2,
      threemonthGainPct: 6.7,
      oneyearGainPct: 12.1,
      totalGainPct: 20.3,
    },
    {
      id: '3',
      ticker: 'VOO',
      name: 'S&P 500 ETF',
      value: 9929.47,
      gainTodayPct: 0.9,
      onemonthGainPct: 4.1,
      oneweekGainPct: 2.2,
      threemonthGainPct: 7.5,
      oneyearGainPct: 14.8,
      totalGainPct: 22.9,
    },
  ],
};
