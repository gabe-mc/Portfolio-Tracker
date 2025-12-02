import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { TrendingUp, Send, Sparkles } from "lucide-react";

// Generate projected earnings data
const generateProjectionData = () => {
  const data = [];
  const currentValue = 47392.18;
  const yoyReturn = 0.0639; // 6.39% current return
  const months = 24; // 2 years projection
  
  // Add current value
  data.push({
    month: 0,
    actual: currentValue,
    projected: currentValue,
    label: 'Now'
  });
  
  // Project future values
  for (let i = 1; i <= months; i++) {
    const projectedValue = currentValue * Math.pow(1 + yoyReturn, i / 12);
    data.push({
      month: i,
      projected: projectedValue,
      label: i === months ? '2 Years' : `${i}mo`
    });
  }
  
  return data;
};

const data = generateProjectionData();
const goalValue = 65000;

const chatHistory = [
  {
    role: 'assistant',
    message: "Hi! I'm your financial advisor. I can help you plan and achieve your investment goals. What would you like to know?"
  }
];

export function GoalsView() {
  const [messages, setMessages] = useState(chatHistory);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', message: input };
    setMessages([...messages, userMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your current 6.39% YoY return, you're on track to reach $60,228 in 2 years. To reach your $65,000 goal, you'd need an average return of 8.2% annually.",
        "That's a great question! Your portfolio is well-diversified with strong tech holdings. Consider gradually increasing your position in growth sectors.",
        "To reach your goal faster, you could increase your monthly contributions. An additional $200/month would significantly accelerate your timeline.",
        "Your risk tolerance seems moderate based on your portfolio. I'd recommend maintaining your current allocation with periodic rebalancing."
      ];
      
      const aiMessage = {
        role: 'assistant',
        message: responses[Math.floor(Math.random() * responses.length)]
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
    
    setInput('');
  };

  const projectedValue = data[data.length - 1].projected;
  const shortfall = goalValue - projectedValue;

  return (
    <div className="pb-20">
      {/* Goal Header */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl mb-2">Your Financial Goals</h2>
        <p className="text-gray-600 text-sm sm:text-base">Track your progress and get personalized advice</p>
      </div>

      {/* Projected Earnings Chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 mb-6">
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl mb-2">2-Year Projection</h3>
          <p className="text-sm text-gray-600">Based on your current 6.39% YoY return</p>
        </div>

        <div className="w-full h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="month" 
                stroke="#9ca3af"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickFormatter={(value) => value === 0 ? 'Now' : value === 24 ? '2Y' : ''}
              />
              <YAxis 
                stroke="#9ca3af"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                domain={[40000, 70000]}
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
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Projected']}
                labelFormatter={(value) => `Month ${value}`}
              />
              
              {/* Goal line */}
              <ReferenceLine 
                y={goalValue} 
                stroke="#000000" 
                strokeDasharray="5 5"
                strokeWidth={2}
                label={{ value: 'Goal: $65,000', position: 'right', fill: '#000000', fontSize: 12 }}
              />
              
              {/* Actual line (current point) */}
              <Line 
                type="monotone" 
                dataKey="actual" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
              />
              
              {/* Projected line */}
              <Line 
                type="monotone" 
                dataKey="projected" 
                stroke="#6b7280" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-600 mb-1">Projected (2Y)</p>
            <p className="text-lg sm:text-xl">${projectedValue.toFixed(2)}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-600 mb-1">Goal</p>
            <p className="text-lg sm:text-xl">${goalValue.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Goal Info */}
      <div className="bg-black text-white rounded-lg p-4 sm:p-6 mb-6">
        <h3 className="text-xl mb-3">Your Goal: House Down Payment</h3>
        <p className="text-sm sm:text-base mb-4 opacity-90">
          You're saving $65,000 for a house down payment by late 2027. Based on your current trajectory, 
          you're projected to reach ${projectedValue.toFixed(0)} in 2 years.
        </p>
        
        {shortfall > 0 ? (
          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">Action Needed</span>
            </div>
            <p className="text-sm opacity-90">
              To reach your goal, you need ${shortfall.toFixed(0)} more. Consider increasing your monthly 
              contributions by $150 or targeting an 8.2% annual return.
            </p>
          </div>
        ) : (
          <div className="bg-green-900/30 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-sm text-green-400">On Track</span>
            </div>
            <p className="text-sm opacity-90">
              Great news! You're on track to exceed your goal.
            </p>
          </div>
        )}
      </div>

      {/* Robo Advisor Chat */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <h3 className="text-lg">Financial Advisor</h3>
          </div>
          <p className="text-xs text-gray-600 mt-1">Ask me anything about your goals</p>
        </div>

        {/* Chat Messages */}
        <div className="h-64 sm:h-80 overflow-y-auto p-4 space-y-3 bg-white">
          {messages.map((msg, idx) => (
            <div 
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 p-3 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your investment strategy..."
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
