import { CharacterDetailResponse } from '@/interfaces/characterDetail'
import { api } from '@/libs/axios'
import { useQuery } from '@tanstack/react-query'

type useGetDetailCharacterProps = {
  characterId: string
}

export function useGetDetailCharacter({
  characterId,
}: useGetDetailCharacterProps) {
  return useQuery({
    queryKey: ['useGetDetailCharacter', characterId],
    queryFn: () =>
      api
        .get<CharacterDetailResponse>(`/characters/${characterId}`)
        .then((response) => response.data.data)
        .catch((error) => {
          throw new Error(error)
        }),
    retry: 1,
  })
}
