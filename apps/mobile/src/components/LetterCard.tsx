import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing} from '../theme';

type Props = {
  body: string;
};

export function LetterCard({body}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>今日回音</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFDFB',
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    gap: spacing.sm
  },
  label: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 13
  },
  body: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 24
  }
});
