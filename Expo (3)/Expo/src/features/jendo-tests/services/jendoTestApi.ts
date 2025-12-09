import { JendoTest, JendoTestSummary, RiskLevel } from '../../../types/models';
import { httpClient } from '../../../infrastructure/api';
import { ENDPOINTS } from '../../../config/api.config';

const DUMMY_JENDO_TESTS: JendoTest[] = [
  {
    id: 'test-001',
    userId: 'user-001',
    testDate: '2024-11-15T09:00:00Z',
    riskLevel: 'low',
    score: 85,
    heartRate: 72,
    bloodPressureSystolic: 120,
    bloodPressureDiastolic: 80,
    analysis: 'Your cardiovascular health is in excellent condition. Heart rhythm is normal and blood pressure is within healthy range.',
    suggestions: ['Continue regular exercise routine', 'Maintain balanced diet', 'Keep stress levels managed', 'Schedule next test in 3 months'],
    createdAt: '2024-11-15T09:00:00Z',
  },
  {
    id: 'test-002',
    userId: 'user-001',
    testDate: '2024-10-20T14:30:00Z',
    riskLevel: 'low',
    score: 78,
    heartRate: 75,
    bloodPressureSystolic: 125,
    bloodPressureDiastolic: 82,
    analysis: 'Good cardiovascular health with minor areas for improvement.',
    suggestions: ['Consider reducing sodium intake', 'Increase aerobic exercise', 'Monitor blood pressure regularly'],
    createdAt: '2024-10-20T14:30:00Z',
  },
  {
    id: 'test-003',
    userId: 'user-001',
    testDate: '2024-09-18T11:15:00Z',
    riskLevel: 'moderate',
    score: 72,
    heartRate: 82,
    bloodPressureSystolic: 135,
    bloodPressureDiastolic: 88,
    analysis: 'Moderate cardiovascular risk detected. Blood pressure is elevated.',
    suggestions: ['Reduce caffeine and alcohol', 'Implement stress management', 'Consider consulting with a cardiologist'],
    createdAt: '2024-09-18T11:15:00Z',
  },
  {
    id: 'test-004',
    userId: 'user-001',
    testDate: '2024-08-15T10:00:00Z',
    riskLevel: 'moderate',
    score: 68,
    heartRate: 85,
    bloodPressureSystolic: 140,
    bloodPressureDiastolic: 90,
    analysis: 'Elevated cardiovascular risk indicators.',
    suggestions: ['Schedule appointment with healthcare provider', 'Begin daily blood pressure monitoring'],
    createdAt: '2024-08-15T10:00:00Z',
  },
  {
    id: 'test-005',
    userId: 'user-001',
    testDate: '2024-07-10T15:45:00Z',
    riskLevel: 'low',
    score: 75,
    heartRate: 70,
    bloodPressureSystolic: 118,
    bloodPressureDiastolic: 78,
    analysis: 'Healthy cardiovascular profile. All indicators within normal ranges.',
    suggestions: ['Maintain current exercise routine', 'Continue healthy eating habits'],
    createdAt: '2024-07-10T15:45:00Z',
  },
];

export const jendoTestApi = {
  getAllTests: async (): Promise<JendoTestSummary[]> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.get<JendoTestSummary[]>(ENDPOINTS.JENDO_TESTS.LIST);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 800));
    return DUMMY_JENDO_TESTS.map(test => ({ id: test.id, testDate: test.testDate, riskLevel: test.riskLevel, score: test.score }));
  },

  getTestById: async (id: string): Promise<JendoTest | null> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.get<JendoTest>(ENDPOINTS.JENDO_TESTS.DETAIL(id));

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 500));
    return DUMMY_JENDO_TESTS.find(test => test.id === id) || null;
  },

  getTestsByRiskLevel: async (riskLevel: RiskLevel): Promise<JendoTestSummary[]> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.get<JendoTestSummary[]>(ENDPOINTS.JENDO_TESTS.BY_RISK_LEVEL(riskLevel));

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 600));
    return DUMMY_JENDO_TESTS
      .filter(test => test.riskLevel === riskLevel)
      .map(test => ({ id: test.id, testDate: test.testDate, riskLevel: test.riskLevel, score: test.score }));
  },

  getLatestTest: async (): Promise<JendoTest | null> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.get<JendoTest>(ENDPOINTS.JENDO_TESTS.LATEST);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 400));
    return DUMMY_JENDO_TESTS[0] || null;
  },

  createTest: async (data: Partial<JendoTest>): Promise<JendoTest> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<JendoTest>(ENDPOINTS.JENDO_TESTS.CREATE, data);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newTest: JendoTest = {
      id: `test-${Date.now()}`,
      userId: 'user-001',
      testDate: new Date().toISOString(),
      riskLevel: data.riskLevel || 'low',
      score: data.score || 75,
      heartRate: data.heartRate || 72,
      bloodPressureSystolic: data.bloodPressureSystolic || 120,
      bloodPressureDiastolic: data.bloodPressureDiastolic || 80,
      analysis: data.analysis || 'Test completed successfully.',
      suggestions: data.suggestions || ['Continue healthy habits'],
      createdAt: new Date().toISOString(),
    };
    return newTest;
  },

  searchTests: async (query: string): Promise<JendoTestSummary[]> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.get<JendoTestSummary[]>(`${ENDPOINTS.JENDO_TESTS.SEARCH}?q=${encodeURIComponent(query)}`);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 500));
    const lowercaseQuery = query.toLowerCase();
    return DUMMY_JENDO_TESTS
      .filter(test => test.testDate.includes(query) || test.riskLevel.includes(lowercaseQuery) || test.score.toString().includes(query))
      .map(test => ({ id: test.id, testDate: test.testDate, riskLevel: test.riskLevel, score: test.score }));
  },
};
