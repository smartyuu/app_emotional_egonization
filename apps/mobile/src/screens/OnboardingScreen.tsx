import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ScreenContainer} from '../components/ScreenContainer';
import {SectionCard} from '../components/SectionCard';
import {colors, radius, spacing} from '../theme';

type Props = {
  onContinue: () => void;
};

export function OnboardingScreen({onContinue}: Props) {
  return (
    <ScreenContainer>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>app_emotional_egonization</Text>
        <Text style={styles.title}>记录你的日子，也理解那些你说不出口的情绪。</Text>
        <Text style={styles.subtitle}>
          这不是一个催你打卡的工具，而是一处更安静、更温柔的私人空间。
        </Text>
      </View>

      <SectionCard title="第一次使用前，你会知道这些">
        <Text style={styles.body}>1. 你可以只写一句话，不需要完整表达。</Text>
        <Text style={styles.body}>2. 生理信号只用于帮助理解情绪，不做医疗诊断。</Text>
        <Text style={styles.body}>3. AI 回信的目标是陪伴和共鸣，而不是评判你。</Text>
      </SectionCard>

      <SectionCard title="今天想从哪里开始？" subtitle="这会帮助后续回信更贴近你的状态。">
        <View style={styles.preferenceWrap}>
          {['记录情绪', '缓解焦虑', '建立自我觉察', '睡前复盘'].map(item => (
            <View key={item} style={styles.preferenceChip}>
              <Text style={styles.preferenceText}>{item}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <Pressable onPress={onContinue} style={styles.button}>
        <Text style={styles.buttonText}>进入我的情绪空间</Text>
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: spacing.sm,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700'
  },
  title: {
    color: colors.text,
    fontSize: 30,
    lineHeight: 40,
    fontWeight: '700'
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 24
  },
  body: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 22
  },
  preferenceWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  preferenceChip: {
    backgroundColor: colors.surfaceMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill
  },
  preferenceText: {
    color: colors.text,
    fontSize: 13
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 15
  }
});
