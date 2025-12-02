import { Sparkles, ExternalLink, Clock } from "lucide-react";

const newsArticles = [
  {
    title: "Apple Announces New AI Features for iPhone",
    source: "TechCrunch",
    logo: "https://logo.clearbit.com/techcrunch.com",
    time: "2 hours ago",
    url: "#",
    relevance: "High"
  },
  {
    title: "Tesla Reports Strong Q4 Deliveries",
    source: "Bloomberg",
    logo: "https://logo.clearbit.com/bloomberg.com",
    time: "4 hours ago",
    url: "#",
    relevance: "High"
  },
  {
    title: "Federal Reserve Signals Potential Rate Cuts",
    source: "Wall Street Journal",
    logo: "https://logo.clearbit.com/wsj.com",
    time: "5 hours ago",
    url: "#",
    relevance: "Medium"
  },
  {
    title: "Microsoft Cloud Revenue Exceeds Expectations",
    source: "Reuters",
    logo: "https://logo.clearbit.com/reuters.com",
    time: "7 hours ago",
    url: "#",
    relevance: "High"
  },
  {
    title: "Market Analysis: Tech Stocks Continue Rally",
    source: "CNBC",
    logo: "https://logo.clearbit.com/cnbc.com",
    time: "9 hours ago",
    url: "#",
    relevance: "Medium"
  },
  {
    title: "Amazon Expands AI Infrastructure Investment",
    source: "Financial Times",
    logo: "https://logo.clearbit.com/ft.com",
    time: "12 hours ago",
    url: "#",
    relevance: "High"
  }
];

export function NewsSection() {
  return (
    <div className="mb-6 sm:mb-12 pb-6">
      <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6">Market News & Insights</h2>

      {/* AI Digest */}
      <div className="bg-black text-white rounded-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          <h3 className="text-xl sm:text-2xl">AI Digest</h3>
        </div>
        
        <p className="text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed">
          Your portfolio companies are showing strong performance today. Tech sector momentum remains 
          positive with major announcements from Apple regarding AI integration. Tesla's delivery numbers 
          exceeded analyst expectations, contributing to gains in your holdings.
        </p>
        
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90">
          The Federal Reserve's dovish stance on interest rates is creating favorable conditions for 
          growth stocks. Microsoft and Amazon continue to invest heavily in AI infrastructure, aligning 
          with long-term trends in your portfolio composition. Overall market sentiment is bullish with 
          tech stocks leading the rally.
        </p>
      </div>

      {/* News Articles */}
      <div className="space-y-2.5 sm:space-y-3">
        {newsArticles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            className="block border border-gray-200 rounded-lg p-3.5 sm:p-5 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs px-2 py-0.5 sm:py-1 rounded whitespace-nowrap ${
                    article.relevance === 'High' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {article.relevance} Relevance
                  </span>
                  <div className="flex items-center gap-1.5">
                    <img 
                      src={article.logo} 
                      alt={article.source}
                      className="w-4 h-4 rounded"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="text-xs sm:text-sm text-gray-600 truncate">{article.source}</span>
                  </div>
                </div>
                
                <h4 className="text-sm sm:text-base lg:text-lg mb-2 group-hover:underline leading-snug">
                  {article.title}
                </h4>
                
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{article.time}</span>
                </div>
              </div>
              
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0 mt-1" />
            </div>
          </a>
        ))}
      </div>

      <button className="mt-4 sm:mt-6 w-full py-2.5 sm:py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
        Load More Articles
      </button>
    </div>
  );
}
