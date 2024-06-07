import { useGetCharacters } from '@/services/useGetCharacters'
import { useEffect, useState } from 'react'
import { HeroCard } from '../HeroCard'
import { Pagination } from '../Pagination'
import { SearchBar } from '../SearchBar'
import { useDebounce } from '@uidotdev/usehooks'
import Image from 'next/image'
import { Toggle } from '../Toggle'
import { Character } from '@/interfaces/characters'

const LIMIT = 20

export function HeroList() {
  const [offset, setOffset] = useState(0)
  const [totalData, setTotalData] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [orderBy, setOrderBy] = useState('name')
  const [showFavorites, setShowFavorites] = useState(false)
  const [favorites, setFavorites] = useState<Character[]>([])

  const searchName = useDebounce(searchTerm, 500)

  const { data } = useGetCharacters({
    limit: LIMIT,
    offset,
    nameStartsWith: searchName,
    orderBy,
  })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    setOffset(0)
  }

  const handleOrderBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value)
  }

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites)
  }

  useEffect(() => {
    setTotalData(data?.total ?? 0)
  }, [data])

  useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      setFavorites(JSON.parse(favorites))
    }
  }, [])

  return (
    <section>
      <div className="my-10">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="mt-20 flex w-full flex-row flex-wrap items-center justify-between gap-9">
        <p className="text-gray-300">
          Encontrados {showFavorites ? favorites.length : totalData} heróis
        </p>

        <div className="flex flex-wrap items-center gap-9">
          <div className="flex items-center text-rose-400">
            <Image
              width={18}
              height={18}
              className="mr-2"
              src="/assets/ic_heroi.svg"
              alt="Ordenar por nome - A/Z"
              title="Ordenar por nome - A/Z"
            />

            <select
              name="order-by"
              className="cursor-pointer outline-none"
              defaultValue={orderBy}
              onChange={handleOrderBy}
            >
              <option value="name">Ordenar por nome - A/Z </option>
              <option value="-name">Ordenar por nome - Z/A</option>
            </select>
          </div>

          <Toggle onChange={handleShowFavorites} />
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {showFavorites ? (
          <>
            {favorites.length === 0 && (
              <p className="text-md text-gray-600">
                Nenhum favorito encontrado
              </p>
            )}

            {favorites?.map((hero) => (
              <HeroCard
                hero={hero}
                key={hero.id}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
          </>
        ) : (
          <>
            {data?.results.map((hero) => (
              <HeroCard
                hero={hero}
                key={hero.id}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))}
          </>
        )}
      </div>

      <div className="mt-20">
        {!showFavorites && (
          <Pagination
            numberOfPages={Math.ceil((totalData ?? 0) / (LIMIT ?? 1))}
            limit={LIMIT}
            setOffset={setOffset}
            visiblePages={5}
          />
        )}
      </div>
    </section>
  )
}
