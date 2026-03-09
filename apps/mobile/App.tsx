import React, {useMemo, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {BottomTabs, TabKey} from './src/components/BottomTabs';
import {journalEntries} from './src/data/mock';
import {HomeScreen} from './src/screens/HomeScreen';
import {JournalDetailScreen} from './src/screens/JournalDetailScreen';
import {JournalEditorScreen} from './src/screens/JournalEditorScreen';
import {OnboardingScreen} from './src/screens/OnboardingScreen';
import {SettingsScreen} from './src/screens/SettingsScreen';
import {TimelineScreen} from './src/screens/TimelineScreen';
import {colors} from './src/theme';

export default function App() {
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

  const selectedEntry = useMemo(
    () => journalEntries.find(entry => entry.id === selectedEntryId) ?? null,
    [selectedEntryId]
  );

  if (!hasOnboarded) {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
        <OnboardingScreen onContinue={() => setHasOnboarded(true)} />
      </>
    );
  }

  let content = null;

  if (selectedEntry) {
    content = (
      <JournalDetailScreen
        entry={selectedEntry}
        onBack={() => setSelectedEntryId(null)}
      />
    );
  } else if (activeTab === 'home') {
    content = (
      <HomeScreen
        onOpenDetail={setSelectedEntryId}
        onStartWrite={() => setActiveTab('write')}
      />
    );
  } else if (activeTab === 'write') {
    content = <JournalEditorScreen />;
  } else if (activeTab === 'timeline') {
    content = <TimelineScreen />;
  } else {
    content = <SettingsScreen />;
  }

  return (
    <View style={styles.app}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.content}>{content}</View>
      {!selectedEntry ? (
        <BottomTabs activeTab={activeTab} onChange={setActiveTab} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    flex: 1
  }
});
