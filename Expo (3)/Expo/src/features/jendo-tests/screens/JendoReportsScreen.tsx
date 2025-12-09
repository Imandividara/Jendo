import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ScreenWrapper } from '../../../common/components/layout';
import { EmptyState } from '../../../common/components/ui';
import { COLORS } from '../../../config/theme.config';
import { JendoTestSummary, RiskLevel } from '../../../types/models';
import { jendoStyles as styles } from '../components';

const DUMMY_TESTS: JendoTestSummary[] = [
  { id: 'test-001', testDate: '2024-11-28T09:00:00Z', riskLevel: 'low', score: 85 },
  { id: 'test-002', testDate: '2024-11-15T14:30:00Z', riskLevel: 'low', score: 78 },
  { id: 'test-003', testDate: '2024-10-20T11:15:00Z', riskLevel: 'moderate', score: 72 },
  { id: 'test-004', testDate: '2024-09-18T10:00:00Z', riskLevel: 'moderate', score: 68 },
  { id: 'test-005', testDate: '2024-08-15T15:45:00Z', riskLevel: 'low', score: 82 },
];

const getRiskColor = (level: RiskLevel) => {
  switch (level) {
    case 'low': return COLORS.riskLow;
    case 'moderate': return COLORS.riskModerate;
    case 'high': return COLORS.riskHigh;
    default: return COLORS.textSecondary;
  }
};

const getRiskBgColor = (level: RiskLevel) => {
  switch (level) {
    case 'low': return COLORS.riskLowBg;
    case 'moderate': return COLORS.riskModerateBg;
    case 'high': return COLORS.riskHighBg;
    default: return COLORS.surfaceSecondary;
  }
};

const getRiskLabel = (level: RiskLevel) => {
  switch (level) {
    case 'low': return 'Low Risk';
    case 'moderate': return 'Moderate Risk';
    case 'high': return 'High Risk';
    default: return 'Unknown';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const JendoReportsScreen: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTests = DUMMY_TESTS.filter(test => {
    if (searchQuery) {
      const dateStr = new Date(test.testDate).toLocaleDateString();
      return dateStr.toLowerCase().includes(searchQuery.toLowerCase()) || 
             test.score.toString().includes(searchQuery);
    }
    return true;
  });

  const renderTestItem = ({ item }: { item: JendoTestSummary }) => (
    <TouchableOpacity
      onPress={() => router.push(`/jendo-reports/${item.id}`)}
      activeOpacity={0.7}
      style={styles.testCard}
    >
      <View style={styles.testHeader}>
        <Text style={styles.testDate}>{formatDate(item.testDate)}</Text>
        <View style={[styles.riskBadge, { backgroundColor: getRiskBgColor(item.riskLevel) }]}>
          <Text style={[styles.riskText, { color: getRiskColor(item.riskLevel) }]}>
            {getRiskLabel(item.riskLevel)}
          </Text>
        </View>
      </View>
      <View style={styles.testContent}>
        <View style={styles.scoreSection}>
          <Text style={styles.scoreLabel}>Jendo Score</Text>
          <Text style={[styles.scoreValue, { color: getRiskColor(item.riskLevel) }]}>{item.score}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenWrapper safeArea backgroundColor={COLORS.white}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
        <Text style={styles.headerTitle}>Jendo</Text>
        <TouchableOpacity style={styles.notificationButton} onPress={() => router.push('/notifications')}>
          <Ionicons name="notifications" size={24} color={COLORS.primary} />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color={COLORS.textSecondary} />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search reports..."
            placeholderTextColor={COLORS.placeholder}
          />
        </View>
      </View>

      <FlatList
        data={filteredTests}
        renderItem={renderTestItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyState
            icon="document-text-outline"
            title="No Reports Found"
            description="No test reports match your search criteria."
          />
        }
      />
    </ScreenWrapper>
  );
};
