const url = (): string => {
  return import.meta.env.VITE_BASE_URL ?? 'http://http://127.0.0.1:3001'
}

export default {
  baseUrl: url(),
  reviews: '/reviews-category/animations',
  page: 'page=',
  sortBy: 'sortby=',
}
