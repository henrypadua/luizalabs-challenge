import { Character } from '@/interfaces/characters'
import Image from 'next/image'

type HeroCardProps = {
  hero: Character
}

export function HeroCard({ hero }: Readonly<HeroCardProps>) {
  return (
    <div>
      <figure className="relative m-0 overflow-hidden">
        <Image
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={hero.name}
          className="h-64 w-full transform rounded-sm bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:rotate-6 hover:scale-110 hover:grayscale-[50%]"
          width={482}
          height={464}
          fetchPriority="high"
        />

        <div className="bg-marvel absolute bottom-0 left-0 h-1 w-full" />
      </figure>

      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">{hero.name}</h3>

        <button className="cursor-pointer outline-none">
          <Image
            src="/assets/favorito_02.svg"
            alt="Favorito"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  )
}
