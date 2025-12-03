// App.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Dashboard from './src/screens/Dashboard';
import { BottomNav, TabKey } from './src/components/BottomNav';
import { Header } from './src/components/Header';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />;

      case 'profile':
        return (
          <PlaceholderScreen
            title="Profile"
            description="Profile screen coming soon."
          />
        );

      case 'goals':
        return (
          <PlaceholderScreen
            title="Goals"
            description="Goals screen coming soon."
          />
        );

      case 'news':
        return (
          <PlaceholderScreen
            title="News"
            description="News screen coming soon."
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <View style={styles.content}>{renderScreen()}</View>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

type PlaceholderProps = {
  title: string;
  description: string;
};

const PlaceholderScreen: React.FC<PlaceholderProps> = ({
  title,
  description,
}) => {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderTitle}>{title}</Text>
      <Text style={styles.placeholderDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000000',
  },
  placeholderDescription: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
  },
});

export default App;
