import React, {useMemo, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {PromptChips} from '../components/PromptChips';
import {ScreenContainer} from '../components/ScreenContainer';
import {SectionCard} from '../components/SectionCard';
import {journalPrompts} from '../data/mock';
import {colors, radius, spacing} from '../theme';

const tags = ['工作', '关系', '睡眠', '家庭', '学业', '身体状态'];

export function JournalEditorScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>(['工作']);

  const contentCount = useMemo(() => content.trim().length, [content]);

  function toggleTag(tag: string) {
    setSelectedTags(current =>
      current.includes(tag)
        ? current.filter(item => item !== tag)
        : [...current, tag]
    );
  }

  return (
    <ScreenContainer>
      <SectionCard title="写一篇日记" subtitle="你可以只写一句话，也可以把今天慢慢讲完。">
        <Text style={styles.label}>灵感提示</Text>
        <PromptChips
          prompts={journalPrompts}
          onPick={prompt => setContent(current => (current ? `${current}\n\n${prompt}` : prompt))}
        />
      </SectionCard>

      <SectionCard title="今天想记下什么">
        <TextInput
          placeholder="给今天起一个轻一点的标题"
          placeholderTextColor={colors.textMuted}
          value={title}
          onChangeText={setTitle}
          style={styles.titleInput}
        />
        <TextInput
          multiline
          textAlignVertical="top"
          placeholder="不需要写得完整，先从你最想说的那一句开始。"
          placeholderTextColor={colors.textMuted}
          value={content}
          onChangeText={setContent}
          style={styles.contentInput}
        />
        <View style={styles.metaRow}>
          <Text style={styles.metaText}>已输入 {contentCount} 字</Text>
          <Text style={styles.metaText}>草稿自动保存</Text>
        </View>
      </SectionCard>

      <SectionCard title="标签与数据来源" subtitle="没有设备也没关系，MVP 阶段可以先用模拟数据。">
        <View style={styles.tagWrap}>
          {tags.map(tag => {
            const selected = selectedTags.includes(tag);
            return (
              <Pressable
                key={tag}
                onPress={() => toggleTag(tag)}
                style={[styles.tag, selected && styles.tagSelected]}>
                <Text style={[styles.tagText, selected && styles.tagTextSelected]}>
                  {tag}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.sourceCard}>
          <Text style={styles.sourceTitle}>当前数据来源</Text>
          <Text style={styles.sourceBody}>模拟心率数据 · 最近同步 20:48</Text>
        </View>
      </SectionCard>

      <Pressable style={styles.submitButton}>
        <Text style={styles.submitButtonText}>保存并生成情绪回信</Text>
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 14
  },
  titleInput: {
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#FFFCF9',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    color: colors.text,
    fontSize: 16
  },
  contentInput: {
    minHeight: 220,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: '#FFFCF9',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    color: colors.text,
    fontSize: 15,
    lineHeight: 24
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  metaText: {
    color: colors.textMuted,
    fontSize: 12
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  tag: {
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  tagSelected: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary
  },
  tagText: {
    color: colors.text,
    fontSize: 13
  },
  tagTextSelected: {
    color: colors.white,
    fontWeight: '700'
  },
  sourceCard: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: spacing.xs
  },
  sourceTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700'
  },
  sourceBody: {
    color: colors.textMuted,
    fontSize: 13
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    alignItems: 'center'
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700'
  }
});
