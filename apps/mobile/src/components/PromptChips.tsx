import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, radius, spacing} from '../theme';

type Props = {
  prompts: string[];
  onPick: (prompt: string) => void;
};

export function PromptChips({prompts, onPick}: Props) {
  return (
    <View style={styles.wrap}>
      {prompts.map(prompt => (
        <Pressable
          key={prompt}
          onPress={() => onPick(prompt)}
          style={styles.chip}>
          <Text style={styles.text}>{prompt}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm
  },
  chip: {
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm
  },
  text: {
    color: colors.text,
    fontSize: 13
  }
});
