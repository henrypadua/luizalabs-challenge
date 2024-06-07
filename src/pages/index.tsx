import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroList } from '@/components/HeroList'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <Container>
          <HeroList />
        </Container>
      </main>

      <Footer />
    </div>
  )
}
