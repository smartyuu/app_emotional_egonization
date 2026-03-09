import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScreenContainer} from '../components/ScreenContainer';
import {SectionCard} from '../components/SectionCard';
import {timelinePoints} from '../data/mock';
import {colors, radius, spacing} from '../theme';

export function TimelineScreen() {
  const maxValue = Math.max(...timelinePoints.map(point => point.value));

  return (
    <ScreenContainer>
      <SectionCard
        title="最近 7 天情绪轨迹"
        subtitle="它不是一张成绩单，而是一种帮助你回看自己的方式。">
        <View style={styles.chart}>
          {timelinePoints.map(point => (
            <View key={point.label} style={styles.chartColumn}>
              <View
                style={[
                  styles.bar,
                  {height: `${(point.value / maxValue) * 100}%`}
                ]}
              />
              <Text style={styles.chartLabel}>{point.label}</Text>
            </View>
          ))}
        </View>
      </SectionCard>

      <SectionCard title="本周总结">
        <Text style={styles.summary}>
          这周你的紧绷感主要集中在工作日傍晚，周末开始缓慢回落。相比周四，最近两天已经出现更多平静时段。
        </Text>
      </SectionCard>

      <SectionCard title="可能的高频触发主题">
        <View style={styles.triggerWrap}>
          {['工作压力', '睡眠不足', '关系中的消耗'].map(item => (
            <View key={item} style={styles.triggerPill}>
              <Text style={styles.triggerText}>{item}</Text>
            </View>
          ))}
        </View>
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 180,
    gap: spacing.sm
  },
  chartColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: spacing.sm
  },
  bar: {
    width: '100%',
    minHeight: 24,
    backgroundColor: colors.secondary,
    borderRadius: radius.md
  },
  chartLabel: {
    color: colors.textMuted,
    fontSize: 12
  },
  summary: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 24
  },
  triggerWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  triggerPill: {
    backgroundColor: colors.surfaceMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill
  },
  triggerText: {
    color: colors.text,
    fontSize: 13
  }
});
