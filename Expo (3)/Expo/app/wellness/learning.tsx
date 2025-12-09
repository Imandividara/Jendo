import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ScreenWrapper } from '../../src/common/components/layout';
import { Header, Card } from '../../src/common/components/ui';
import { COLORS, TYPOGRAPHY, SPACING } from '../../src/config/theme.config';

export default function LearningRoute() {
  return (
    <ScreenWrapper safeArea>
      <Header title="Learning Materials" showBack />
      <ScrollView contentContainerStyle={styles.content}>
        <Card style={styles.card}>
          <Text style={styles.title}>Coming Soon</Text>
          <Text style={styles.description}>
            Video tutorials and articles about heart health will be available here.
          </Text>
        </Card>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    padding: SPACING.lg,
    alignItems: 'center',
  },
  title: {
    fontSize: TYPOGRAPHY.fontSize.xxl,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
  },
  description: {
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});
