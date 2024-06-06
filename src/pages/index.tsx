import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { HeroCard } from '@/components/HeroCard'
import { SearchBar } from '@/components/SearchBar'
import { useGetLanguage } from '@/services/useGetCharacters'

export default function Home() {
  const { data } = useGetLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main>
        <Container>
          <div className="my-5">
            <SearchBar />
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.results.map((hero) => (
              <HeroCard hero={hero} key={hero.id} />
            ))}
          </div>
        </Container>
      </main>

      <footer className="bg-marvel mt-20 flex h-16 items-center justify-center">
        <p className="text-md text-white">© 2024 Marvel Search Heroes</p>
      </footer>
    </div>
  )
}
