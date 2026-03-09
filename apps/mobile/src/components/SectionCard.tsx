import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing} from '../theme';

type Props = PropsWithChildren<{
  title?: string;
  subtitle?: string;
}>;

export function SectionCard({title, subtitle, children}: Props) {
  return (
    <View style={styles.card}>
      {(title || subtitle) && (
        <View style={styles.header}>
          {title ? <Text style={styles.title}>{title}</Text> : null}
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm
  },
  header: {
    gap: spacing.xs
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.textMuted
  }
});
