import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export interface ApiResponse {
  message: string;
  status: number;
  data: boolean;
}

export interface FeedbackRequest {
  feedback: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_BASE_URL,
    // timeout: 30000,
  }),
  endpoints: builder => ({
    getOnboarding: builder.query<ApiResponse, void>({
      query: () => ({
        url: '/onboarding',
        method: 'GET',
      }),
      extraOptions: {
        maxRetries: 1,
      },
    }),

    sendFeedback: builder.mutation<ApiResponse, FeedbackRequest>({
      query: body => ({
        url: '/feedback',
        method: 'POST',
        body,
      }),
      extraOptions: {
        maxRetries: 1,
      },
    }),
  }),
});

export const { useGetOnboardingQuery, useLazyGetOnboardingQuery, useSendFeedbackMutation } = api;
