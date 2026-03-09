import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing} from '../theme';

export type TabKey = 'home' | 'write' | 'timeline' | 'settings';

type Props = {
  activeTab: TabKey;
  onChange: (tab: TabKey) => void;
};

const tabs: Array<{key: TabKey; label: string}> = [
  {key: 'home', label: '首页'},
  {key: 'write', label: '写日记'},
  {key: 'timeline', label: '轨迹'},
  {key: 'settings', label: '设置'}
];

export function BottomTabs({activeTab, onChange}: Props) {
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const isActive = tab.key === activeTab;
        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            style={[styles.tab, isActive && styles.activeTab]}>
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: spacing.sm
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderRadius: radius.pill,
    paddingVertical: spacing.sm
  },
  activeTab: {
    backgroundColor: colors.surfaceMuted
  },
  label: {
    color: colors.textMuted,
    fontSize: 13
  },
  activeLabel: {
    color: colors.text,
    fontWeight: '700'
  }
});
