import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const API_BASE_URL = 'http://localhost:3000';

function App(): JSX.Element {
  const [health, setHealth] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/health`);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const json = (await res.json()) as { status?: string };
        setHealth(json.status ?? 'unknown');
      } catch (err: any) {
        setError(err?.message ?? 'Unknown error');
      }
    };

    fetchHealth();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>NorthPeak</Text>

      {!health && !error && (
        <>
          <ActivityIndicator />
          <Text>Checking backend health…</Text>
        </>
      )}

      {health && !error && (
        <Text style={styles.ok}>Backend status: {health}</Text>
      )}

      {error && (
        <Text style={styles.error}>Error talking to backend: {error}</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 16,
  },
  ok: {
    fontSize: 16,
  },
  error: {
    fontSize: 14,
    color: 'red',
  },
});

export default App;
