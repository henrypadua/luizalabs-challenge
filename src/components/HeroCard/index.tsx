import Image from 'next/image'
import { useRouter } from 'next/router'

import { useFavorite } from '@/hooks/useFavorite'

import { Character } from '@/interfaces/characters'

type HeroCardProps = {
  hero: Character
}

export function HeroCard({ hero }: Readonly<HeroCardProps>) {
  const { handleSetFavorites, favorites } = useFavorite()
  const router = useRouter()

  const handleHeroClick = () => {
    router.push(`/detalhe-heroi?id=${hero.id}`, `/detalhe-heroi`)
  }

  return (
    <div>
      <button type="button" onClick={handleHeroClick}>
        <figure className="relative m-0 cursor-pointer overflow-hidden">
          <Image
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
            className="h-64 w-full transform rounded-sm bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:-rotate-2 hover:scale-110 hover:grayscale-[50%]"
            width={482}
            height={464}
            priority
          />

          <div className="absolute bottom-0 left-0 h-1 w-full bg-marvel" />
        </figure>
      </button>

      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">{hero.name}</h3>

        <button
          className="cursor-pointer outline-none"
          onClick={() => handleSetFavorites(hero)}
        >
          <Image
            src={`/assets/favorito_${
              favorites?.some((fav) => fav.id === hero.id) ? '01' : '02'
            }.svg`}
            alt="Favorito"
            width={16}
            height={16}
            priority
          />
        </button>
      </div>
    </div>
  )
}
