import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {EmotionStamp} from '../components/EmotionStamp';
import {LetterCard} from '../components/LetterCard';
import {ScreenContainer} from '../components/ScreenContainer';
import {SectionCard} from '../components/SectionCard';
import {JournalEntry} from '../types';
import {colors, radius, spacing} from '../theme';

type Props = {
  entry: JournalEntry;
  onBack: () => void;
};

export function JournalDetailScreen({entry, onBack}: Props) {
  return (
    <ScreenContainer>
      <Pressable onPress={onBack} style={styles.backButton}>
        <Text style={styles.backText}>返回首页</Text>
      </Pressable>

      <SectionCard>
        <Text style={styles.date}>{entry.dateLabel}</Text>
        <Text style={styles.title}>{entry.title}</Text>
        <EmotionStamp emotion={entry.emotion} level={entry.emotionLevel} />
        <Text style={styles.body}>{entry.content}</Text>
      </SectionCard>

      <SectionCard title="情绪解读" subtitle="这是一次温和的参考，不代表完整的你。">
        <Text style={styles.body}>{entry.emotionHint}</Text>
        <View style={styles.signalBox}>
          <Text style={styles.signalTitle}>身体信号摘要</Text>
          <Text style={styles.signalBody}>{entry.bodySignalSummary}</Text>
        </View>
      </SectionCard>

      <LetterCard body={entry.reply} />

      <SectionCard title="这篇记录的标签">
        <View style={styles.tagWrap}>
          {entry.tags.map(tag => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  backButton: {
    alignSelf: 'flex-start'
  },
  backText: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 14
  },
  date: {
    color: colors.textMuted,
    fontSize: 13
  },
  title: {
    color: colors.text,
    fontSize: 26,
    lineHeight: 34,
    fontWeight: '700'
  },
  body: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 25
  },
  signalBox: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: spacing.xs
  },
  signalTitle: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 14
  },
  signalBody: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  tag: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  tagText: {
    color: colors.text,
    fontSize: 13
  }
});
