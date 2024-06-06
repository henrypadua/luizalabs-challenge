import { CharacterResponse } from '@/interfaces/characters'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'

export function useGetLanguage() {
  return useQuery({
    queryKey: ['useGetLanguage'],
    queryFn: () =>
      api
        .get<CharacterResponse>(`/characters?limit=20`)
        .then((response) => response.data.data)
        .catch((error) => {
          throw new Error(error)
        }),
    retry: 1,
  })
}
