import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmotionLevel, EmotionTag} from '../types';
import {colors, radius, spacing} from '../theme';

type Props = {
  emotion: EmotionTag;
  level: EmotionLevel;
};

const toneMap: Record<EmotionTag, string> = {
  平静: colors.success,
  隐性焦虑: colors.warning,
  低落: '#B5A6BF',
  压抑: '#A9928A',
  情绪过载: colors.danger,
  轻微亢奋: '#D8B16F'
};

export function EmotionStamp({emotion, level}: Props) {
  return (
    <View style={[styles.container, {backgroundColor: toneMap[emotion]}]}>
      <Text style={styles.emotion}>{emotion}</Text>
      <Text style={styles.level}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  emotion: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 14
  },
  level: {
    color: colors.white,
    fontSize: 12
  }
});
