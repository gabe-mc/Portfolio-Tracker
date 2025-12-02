import { User, Home, Target, Newspaper } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-1">
          <button
            onClick={() => onTabChange('profile')}
            className={`flex flex-col items-center justify-center py-3 transition-colors ${
              activeTab === 'profile' 
                ? 'text-black' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <User className={`w-6 h-6 mb-1 ${activeTab === 'profile' ? 'stroke-[2.5]' : ''}`} />
            <span className="text-xs">Profile</span>
          </button>
          
          <button
            onClick={() => onTabChange('home')}
            className={`flex flex-col items-center justify-center py-3 transition-colors ${
              activeTab === 'home' 
                ? 'text-black' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Home className={`w-6 h-6 mb-1 ${activeTab === 'home' ? 'fill-black stroke-[2.5]' : ''}`} />
            <span className="text-xs">Home</span>
          </button>
          
          <button
            onClick={() => onTabChange('goals')}
            className={`flex flex-col items-center justify-center py-3 transition-colors ${
              activeTab === 'goals' 
                ? 'text-black' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Target className={`w-6 h-6 mb-1 ${activeTab === 'goals' ? 'stroke-[2.5]' : ''}`} />
            <span className="text-xs">Goals</span>
          </button>
          
          <button
            onClick={() => onTabChange('news')}
            className={`flex flex-col items-center justify-center py-3 transition-colors ${
              activeTab === 'news' 
                ? 'text-black' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Newspaper className={`w-6 h-6 mb-1 ${activeTab === 'news' ? 'stroke-[2.5]' : ''}`} />
            <span className="text-xs">News</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
