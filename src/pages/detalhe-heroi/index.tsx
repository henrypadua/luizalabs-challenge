import { useGetDetailCharacter } from '@/services/useGetDetailCharacter'
import { useRouter } from 'next/router'
import ColorThief from 'colorthief'
import { SearchBar } from '@/components/SearchBar'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'

export default function HeroDetail() {
  const router = useRouter()
  const { id } = router.query as { id: string }

  const [backgroundColor, setBackgroundColor] = useState('' as string)

  const { data, isLoading } = useGetDetailCharacter({
    characterId: id,
  })

  const handleGetBackgroundColor = async (
    event: SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const colorThief = new ColorThief()
    const color = await colorThief.getColor(event.target, 25)

    setBackgroundColor(`rgba(${color.join(',')}, 0.3)`)
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
                />
              </Link>

              <SearchBar
                className="mx-0 my-5 h-10 w-full max-w-[540px] bg-white"
                onSearch={() => {}}
              />
            </Container>
          </header>

          <main className="flex-grow">
            <section>
              <Container>
                <div className="relative z-20 mx-20 flex w-full max-w-[275px]">
                  <h1 className="text-4xl font-bold uppercase">
                    {data?.results[0].name}
                  </h1>
                  <p>{data?.results[0].description}</p>
                </div>

                <Image
                  id="hero-image"
                  src={`${data?.results[0].thumbnail.path}.${data?.results[0].thumbnail.extension}`}
                  alt={data?.results[0].name ?? ''}
                  className="absolute left-1/2 top-[150px] z-20 max-w-[590px] -translate-x-1/4"
                  onLoad={handleGetBackgroundColor}
                  width={482}
                  height={464}
                  priority
                />

                <p className="absolute left-0 top-[150px] m-0 h-[460px] w-full cursor-default select-none overflow-hidden break-words text-center text-[250px] font-bold uppercase leading-[0.9] text-white opacity-50">
                  {data?.results[0].name}
                </p>
              </Container>
            </section>
          </main>

          <Footer />
        </>
      )}
    </div>
  )
}
