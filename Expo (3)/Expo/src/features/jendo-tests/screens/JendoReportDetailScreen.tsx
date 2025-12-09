import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScreenWrapper } from '../../../common/components/layout';
import { Header, Card, RiskBadge } from '../../../common/components/ui';
import { COLORS } from '../../../config/theme.config';
import { jendoStyles as styles } from '../components';

const DUMMY_TEST = {
  id: 'test-001',
  testDate: '2024-11-15T09:00:00Z',
  riskLevel: 'low' as const,
  score: 85,
  heartRate: 72,
  bloodPressureSystolic: 120,
  bloodPressureDiastolic: 80,
  analysis: 'Your cardiovascular health is in excellent condition. Heart rhythm is normal and blood pressure is within healthy range. Continue maintaining your current lifestyle habits.',
  suggestions: [
    'Continue regular exercise routine',
    'Maintain balanced diet rich in fruits and vegetables',
    'Keep stress levels managed through relaxation techniques',
    'Schedule next test in 3 months',
  ],
};

export const JendoReportDetailScreen: React.FC = () => {
  const { id } = useLocalSearchParams();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <ScreenWrapper safeArea padded={false}>
      <Header title="Test Report" showBack />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.heroContent}>
            <Text style={styles.dateLabel}>{formatDate(DUMMY_TEST.testDate)}</Text>
            <View style={styles.scoreSectionDetail}>
              <Text style={styles.scoreValueLarge}>{DUMMY_TEST.score}</Text>
              <Text style={styles.scoreLabelLight}>Health Score</Text>
            </View>
            <RiskBadge level={DUMMY_TEST.riskLevel} size="lg" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vital Signs</Text>
          <View style={styles.vitalsGrid}>
            <Card style={styles.vitalCard}>
              <View style={styles.vitalContent}>
                <Ionicons name="heart" size={28} color={COLORS.heart} />
                <Text style={styles.vitalValue}>{DUMMY_TEST.heartRate}</Text>
                <Text style={styles.vitalLabel}>Heart Rate (bpm)</Text>
              </View>
            </Card>
            <Card style={styles.vitalCard}>
              <View style={styles.vitalContent}>
                <Ionicons name="pulse" size={28} color={COLORS.primary} />
                <Text style={styles.vitalValue}>
                  {DUMMY_TEST.bloodPressureSystolic}/{DUMMY_TEST.bloodPressureDiastolic}
                </Text>
                <Text style={styles.vitalLabel}>Blood Pressure</Text>
              </View>
            </Card>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Analysis</Text>
          <Card style={styles.analysisCard}>
            <Text style={styles.analysisText}>{DUMMY_TEST.analysis}</Text>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          {DUMMY_TEST.suggestions.map((suggestion, index) => (
            <View key={index} style={styles.suggestionItem}>
              <View style={styles.suggestionNumber}>
                <Text style={styles.suggestionNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.suggestionText}>{suggestion}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </ScreenWrapper>
  );
};
