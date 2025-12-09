import { User, UserProfile, LoginCredentials, SignupData, OTPVerification, PasswordResetRequest } from '../../../types/models';
import { httpClient } from '../../../infrastructure/api';
import { ENDPOINTS } from '../../../config/api.config';

const DUMMY_USER: UserProfile = {
  id: 'user-001',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+94 77 123 4567',
  gender: 'male',
  dateOfBirth: '1985-06-15',
  address: '123 Health Street, Colombo 05',
  nationality: 'Sri Lankan',
  profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
  createdAt: '2024-01-15T10:30:00Z',
  updatedAt: '2024-11-20T14:45:00Z',
  healthParameters: {
    height: 175,
    weight: 72,
    bmi: 23.5,
    bloodType: 'O+',
    allergies: ['Penicillin'],
    chronicConditions: [],
  },
  riskLevel: 'low',
  lastTestDate: '2024-11-15T09:00:00Z',
};

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<{ user: UserProfile; token: string }> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<{ user: UserProfile; token: string }>(ENDPOINTS.AUTH.LOGIN, credentials);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
      return { user: DUMMY_USER, token: 'dummy-jwt-token-12345' };
    }
    throw new Error('Invalid email or password');
  },

  signup: async (data: SignupData): Promise<{ user: User; message: string }> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<{ user: User; message: string }>(ENDPOINTS.AUTH.REGISTER, data);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newUser: User = {
      id: `user-${Date.now()}`,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { user: newUser, message: 'Account created successfully. Please verify your email.' };
  },

  verifyOTP: async (data: OTPVerification): Promise<{ success: boolean; message: string }> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<{ success: boolean; message: string }>(ENDPOINTS.AUTH.VERIFY_OTP, data);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (data.otp === '123456') {
      return { success: true, message: 'Email verified successfully' };
    }
    throw new Error('Invalid OTP code');
  },

  requestPasswordReset: async (data: PasswordResetRequest): Promise<{ success: boolean; message: string }> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<{ success: boolean; message: string }>(ENDPOINTS.AUTH.FORGOT_PASSWORD, data);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: 'Password reset link sent to your email' };
  },

  resetPassword: async (token: string, newPassword: string): Promise<{ success: boolean; message: string }> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<{ success: boolean; message: string }>(ENDPOINTS.AUTH.RESET_PASSWORD, { token, newPassword });

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: 'Password reset successfully' };
  },

  getCurrentUser: async (): Promise<UserProfile> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.get<UserProfile>(ENDPOINTS.AUTH.CURRENT_USER);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 500));
    return DUMMY_USER;
  },

  updateProfile: async (data: Partial<UserProfile>): Promise<UserProfile> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.put<UserProfile>(ENDPOINTS.USER.UPDATE_PROFILE, data);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { ...DUMMY_USER, ...data, updatedAt: new Date().toISOString() };
  },

  logout: async (): Promise<void> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<void>(ENDPOINTS.AUTH.LOGOUT);

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 300));
  },

  loginWithGoogle: async (): Promise<{ user: UserProfile; token: string }> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<{ user: UserProfile; token: string }>(ENDPOINTS.AUTH.GOOGLE_LOGIN, { provider: 'google' });

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { user: DUMMY_USER, token: 'dummy-google-jwt-token-12345' };
  },

  refreshToken: async (refreshToken: string): Promise<{ token: string; refreshToken: string }> => {
    // REAL API - Uncomment when backend is ready
    // return httpClient.post<{ token: string; refreshToken: string }>(ENDPOINTS.AUTH.REFRESH_TOKEN, { refreshToken });

    // DUMMY DATA - Comment out when connecting to backend
    await new Promise(resolve => setTimeout(resolve, 500));
    return { token: 'new-jwt-token', refreshToken: 'new-refresh-token' };
  },
};
