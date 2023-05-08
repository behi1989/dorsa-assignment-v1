import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Routes from '@/services/serviceRoutes'
import {IResponseProps} from '@/types'
import {ISortBy} from '@/types/request'

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({baseUrl: Routes.baseUrl}),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    getReviews: builder.query<IResponseProps, void>({
      query: () => ({
        url: `${Routes.reviews}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      providesTags: ['Reviews'],
    }),

    sortBy: builder.mutation<IResponseProps, ISortBy>({
      query: (sortBy: ISortBy) => ({
        url: `${Routes.reviews}?${Routes.sortBy}${sortBy}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Reviews'],
    }),

    getByPage: builder.mutation<IResponseProps, number>({
      query: (page: number) => ({
        url: `${Routes.reviews}?${Routes.page}${page}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Reviews'],
    }),
  }),
})

export const {useGetReviewsQuery, useSortByMutation, useGetByPageMutation} = reviewsApi
