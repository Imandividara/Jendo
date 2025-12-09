import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScreenWrapper } from '../../../common/components/layout';
import { COLORS } from '../../../config/theme.config';
import { doctorsStyles as styles } from '../components';

const DOCTOR_DATA = {
  id: 'doc-001',
  name: 'Dr. Sarah Mitchell',
  specialty: 'Cardiologist',
  experience: 15,
  imageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
  bio: 'Specialist in cardiovascular health with expertise in preventive cardiology and heart disease management. Committed to providing personalized care for optimal heart health.',
};

export const DoctorDetailScreen: React.FC = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <ScreenWrapper safeArea backgroundColor={COLORS.white}>
      <View style={styles.headerWithBorder}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor Details</Text>
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={() => router.push('/notifications')}
        >
          <Ionicons name="notifications" size={24} color={COLORS.primary} />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.doctorCardLarge}>
          <Image source={{ uri: DOCTOR_DATA.imageUrl }} style={styles.doctorImageLarge} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorNameLarge}>{DOCTOR_DATA.name}</Text>
            <Text style={styles.specialtyMd}>{DOCTOR_DATA.specialty}</Text>
            <Text style={styles.experience}>{DOCTOR_DATA.experience} years experience</Text>
          </View>
        </View>

        <View style={styles.bioCard}>
          <Text style={styles.bioText}>{DOCTOR_DATA.bio}</Text>
        </View>

        <Text style={styles.sectionTitle}>Consultation Options</Text>

        <TouchableOpacity 
          style={styles.optionCard}
          onPress={() => router.push(`/doctors/${id}/book?type=app`)}
        >
          <View style={[styles.optionIcon, { backgroundColor: '#F3E5F5' }]}>
            <MaterialCommunityIcons name="calendar-check" size={24} color={COLORS.primary} />
          </View>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Book Through App</Text>
            <Text style={styles.optionDescription}>Schedule directly inside Jendo</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={COLORS.textMuted} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionCard}
          onPress={() => {}}
        >
          <View style={[styles.optionIcon, { backgroundColor: '#F3E5F5' }]}>
            <MaterialCommunityIcons name="open-in-new" size={24} color={COLORS.primary} />
          </View>
          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>Book via Partner App</Text>
            <Text style={styles.optionDescription}>Redirect to our partner platform</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={COLORS.textMuted} />
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};
