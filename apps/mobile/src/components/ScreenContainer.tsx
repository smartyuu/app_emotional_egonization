import React, {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {colors, spacing} from '../theme';

type Props = PropsWithChildren<{
  scrollable?: boolean;
}>;

export function ScreenContainer({children, scrollable = true}: Props) {
  const content = <View style={styles.content}>{children}</View>;

  return (
    <SafeAreaView style={styles.safeArea}>
      {scrollable ? (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollContent: {
    paddingBottom: spacing.xl
  },
  content: {
    padding: spacing.md,
    gap: spacing.md
  }
});
