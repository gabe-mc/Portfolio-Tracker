import { User, Settings, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react";

export function ProfileView() {
  return (
    <div className="pb-20">
      {/* Profile Header */}
      <div className="bg-black text-white rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-black" />
          </div>
          <div>
            <h2 className="text-2xl mb-1">John Doe</h2>
            <p className="text-gray-300 text-sm">john.doe@email.com</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
          <div>
            <p className="text-gray-400 text-sm mb-1">Account Type</p>
            <p className="text-lg">Premium</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Member Since</p>
            <p className="text-lg">Jan 2024</p>
          </div>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="mb-6">
        <h3 className="text-lg mb-3">Portfolio Summary</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Total Value</p>
            <p className="text-xl">$47,392.18</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Total Gain</p>
            <p className="text-xl text-green-600">+6.39%</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Holdings</p>
            <p className="text-xl">12</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Cash</p>
            <p className="text-xl">$2,847.32</p>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="space-y-2 mb-6">
        <h3 className="text-lg mb-3">Settings</h3>
        
        <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-gray-600" />
            <span>Account Settings</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-gray-600" />
            <span>Notifications</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-gray-600" />
            <span>Help & Support</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Logout */}
      <button className="w-full flex items-center justify-center gap-2 p-4 border border-red-200 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  );
}
