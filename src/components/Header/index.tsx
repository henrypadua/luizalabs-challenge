import Image from 'next/image'
import { Container } from '../Container'

export function Header() {
  return (
    <header className="py-7">
      <Container>
        <Image
          src="/assets/logo.svg"
          alt="Marvel Logo"
          className="mx-auto h-28 w-full max-w-80"
          width={280}
          height={200}
        />

        <h1 className="mt-5 text-center text-3xl font-bold tracking-wider text-gray-700">
          EXPLORE O UNIVERSO
        </h1>

        <h6 className="text-md mt-2 text-center text-gray-500">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrira em breve!
        </h6>
      </Container>
    </header>
  )
}
