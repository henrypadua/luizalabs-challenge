import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { FavoriteProvider } from '@/hooks/useFavorite'

import { queryClient } from '@/libs/react-query'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteProvider>
        <Component {...pageProps} />
      </FavoriteProvider>
    </QueryClientProvider>
  )
}
