import { SyntheticEvent, useState } from 'react'
import ColorThief from 'colorthief'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { SearchBar } from '@/components/SearchBar'

import { useFavorite } from '@/hooks/useFavorite'

import { useGetComics } from '@/services/useGetComics'
import { useGetDetailCharacter } from '@/services/useGetDetailCharacter'

import { Character } from '@/interfaces/characters'

import { InfoHero } from './components/InfoHero'

export default function HeroDetail() {
  const router = useRouter()
  const { favorites, handleSetFavorites } = useFavorite()
  const [backgroundColor, setBackgroundColor] = useState('' as string)

  const { id } = router.query as { id: string }
  const { data, isLoading } = useGetDetailCharacter({
    characterId: id,
  })
  const { data: comics } = useGetComics({ characterId: id })

  const hero = data?.results[0] as Character
  const comicsList = comics?.results

  const handleGetBackgroundColor = async (
    event: SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const colorThief = new ColorThief()
    const color = await colorThief.getColor(event.target, 25)

    setBackgroundColor(`rgba(${color.join(',')}, 0.4)`)
  }

  return (
    <div
      style={{
        backgroundColor,
      }}
      className={`flex min-h-screen flex-col justify-center overflow-x-hidden`}
    >
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <header className="py-5">
            <Container className="flex flex-wrap items-center">
              <Link href="/">
                <Image
                  src="/assets/logo_menor.svg"
                  alt="Marvel Logo"
                  className="mr-20 w-full max-w-56"
                  width={280}
                  height={200}
                  priority
                />
              </Link>

              <SearchBar
                className="mx-0 my-5 h-10 w-full max-w-[540px] bg-white"
                onSearch={() => {}}
              />
            </Container>
          </header>

          <main className="flex-grow">
            <section className="pb-14">
              <Container>
                <div className="relative z-10 my-20 w-full max-w-[275px]">
                  <div className="mb-10 flex items-center justify-between">
                    <h1 className="m-0 text-[40px] font-extrabold uppercase text-gray-700">
                      {hero.name}
                    </h1>

                    <button
                      className="cursor-pointer outline-none"
                      onClick={() => handleSetFavorites(hero)}
                    >
                      <Image
                        src={`/assets/favorito_${
                          favorites?.some((fav) => fav.id === hero.id)
                            ? '01'
                            : '02'
                        }.svg`}
                        alt="Favorito"
                        width={30}
                        height={30}
                        priority
                      />
                    </button>
                  </div>

                  <p className="text-justify text-lg leading-7 text-gray-600">
                    {hero.description}
                  </p>

                  <InfoHero hero={hero} />
                </div>

                <Image
                  id="hero-image"
                  src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`}
                  alt={hero.name ?? ''}
                  className="absolute left-1/2 top-[150px] z-20 max-w-[590px] -translate-x-1/4"
                  onLoad={handleGetBackgroundColor}
                  width={220}
                  height={464}
                  priority
                />

                <p className="absolute left-0 top-[150px] m-0 h-[460px] w-full cursor-default select-none overflow-hidden break-words text-center text-[350px] font-bold uppercase leading-[0.9] text-white opacity-30">
                  {hero.name}
                </p>
              </Container>
            </section>

            <section>
              <Container>
                <h2 className="mb-16 text-2xl font-bold text-gray-700">
                  Últimos lançamentos
                </h2>

                <div className="mt-5 grid grid-cols-6 gap-16">
                  {comicsList?.map((comic) => (
                    <div key={comic.id} className="flex flex-col">
                      <Image
                        src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
                        alt={comic.title}
                        className="transform cursor-default rounded-sm shadow-lg transition-transform duration-300 hover:scale-150"
                        width={168}
                        height={252}
                        priority
                      />
                      <p className="mt-5 font-medium text-gray-950">
                        {comic.title}
                      </p>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          </main>

          <Footer />
        </>
      )}
    </div>
  )
}
