import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {ScreenContainer} from '../components/ScreenContainer';
import {SectionCard} from '../components/SectionCard';
import {colors, spacing} from '../theme';

export function SettingsScreen() {
  return (
    <ScreenContainer>
      <SectionCard title="提醒与陪伴">
        <SettingRow
          title="睡前轻提醒"
          subtitle="今天如果你愿意，我还在这里。"
          value
        />
        <SettingRow
          title="周回顾提醒"
          subtitle="每周日晚上收到一份轻量总结。"
          value={false}
        />
      </SectionCard>

      <SectionCard title="隐私与安全">
        <SettingRow
          title="打开应用时需要验证"
          subtitle="支持 PIN / 指纹 / Face ID。"
          value
        />
        <SettingRow
          title="切到后台时模糊内容"
          subtitle="避免最近界面泄露隐私。"
          value
        />
      </SectionCard>

      <SectionCard title="生理数据">
        <Text style={styles.text}>当前来源：模拟心率数据</Text>
        <Text style={styles.subtext}>后续可接入 HealthKit、Google Fit 与 BLE 设备。</Text>
      </SectionCard>

      <SectionCard title="支持入口">
        <Text style={styles.text}>危机支持热线、专业机构链接与隐私说明将放在这里。</Text>
      </SectionCard>
    </ScreenContainer>
  );
}

type SettingRowProps = {
  title: string;
  subtitle: string;
  value: boolean;
};

function SettingRow({title, subtitle, value}: SettingRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.rowText}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subtext}>{subtitle}</Text>
      </View>
      <Switch value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md
  },
  rowText: {
    flex: 1,
    gap: spacing.xs
  },
  text: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22
  },
  subtext: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 20
  }
});
