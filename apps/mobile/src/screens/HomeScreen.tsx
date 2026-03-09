import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {journalEntries} from '../data/mock';
import {EmotionStamp} from '../components/EmotionStamp';
import {SectionCard} from '../components/SectionCard';
import {ScreenContainer} from '../components/ScreenContainer';
import {colors, radius, spacing} from '../theme';

type Props = {
  onOpenDetail: (entryId: string) => void;
  onStartWrite: () => void;
};

export function HomeScreen({onOpenDetail, onStartWrite}: Props) {
  const latest = journalEntries[0];

  return (
    <ScreenContainer>
      <SectionCard>
        <Text style={styles.kicker}>今晚适合慢一点</Text>
        <Text style={styles.title}>你的情绪空间，今天依然是安静的。</Text>
        <Text style={styles.subtitle}>
          即使你现在还不想完整表达，也可以从一句话开始。
        </Text>
        <Pressable onPress={onStartWrite} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>写一篇新日记</Text>
        </Pressable>
      </SectionCard>

      <SectionCard title="今日状态" subtitle="结合最近一次记录和模拟生理数据生成。">
        <EmotionStamp emotion={latest.emotion} level={latest.emotionLevel} />
        <Text style={styles.bodyText}>{latest.emotionHint}</Text>
        <View style={styles.statusRow}>
          <View style={styles.statusPill}>
            <Text style={styles.statusPillText}>生理数据已同步</Text>
          </View>
          <View style={styles.statusPill}>
            <Text style={styles.statusPillText}>上次同步 20:48</Text>
          </View>
        </View>
      </SectionCard>

      <SectionCard title="最近的记录" subtitle="回看不是为了分析自己，而是为了更理解自己。">
        {journalEntries.map(entry => (
          <Pressable
            key={entry.id}
            onPress={() => onOpenDetail(entry.id)}
            style={styles.entryCard}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>{entry.title}</Text>
              <Text style={styles.entryDate}>{entry.dateLabel}</Text>
            </View>
            <Text style={styles.entryPreview}>{entry.preview}</Text>
            <View style={styles.entryFooter}>
              <EmotionStamp emotion={entry.emotion} level={entry.emotionLevel} />
            </View>
          </Pressable>
        ))}
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  kicker: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700'
  },
  title: {
    color: colors.text,
    fontSize: 26,
    lineHeight: 34,
    fontWeight: '700'
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 24
  },
  primaryButton: {
    marginTop: spacing.sm,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.lg,
    paddingVertical: spacing.md
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700'
  },
  bodyText: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 22
  },
  statusRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  statusPill: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  statusPillText: {
    color: colors.text,
    fontSize: 12
  },
  entryCard: {
    backgroundColor: '#FFFCF9',
    borderRadius: radius.md,
    padding: spacing.md,
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md
  },
  entryTitle: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    fontWeight: '700'
  },
  entryDate: {
    color: colors.textMuted,
    fontSize: 12
  },
  entryPreview: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 22
  },
  entryFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
