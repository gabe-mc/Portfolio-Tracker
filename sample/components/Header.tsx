import { Menu, Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-4 sm:gap-8">
            <h1 className="text-lg sm:text-xl lg:text-2xl whitespace-nowrap">Wealthfolio</h1>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors text-sm lg:text-base">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">Invest</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">Trade</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base">Activity</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2">
            <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="md:hidden p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
