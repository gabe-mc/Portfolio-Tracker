import { useState } from "react";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav";
import { HomeView } from "./components/HomeView";
import { GoalsView } from "./components/GoalsView";
import { NewsView } from "./components/NewsView";
import { ProfileView } from "./components/ProfileView";

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'goals' && <GoalsView />}
        {activeTab === 'news' && <NewsView />}
        {activeTab === 'profile' && <ProfileView />}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
