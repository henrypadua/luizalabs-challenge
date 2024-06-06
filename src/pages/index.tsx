import { useGetLanguage } from '@/services/useGetCharacters'

export default function Home() {
  const { data } = useGetLanguage()

  return (
    <section>
      <h1 className="text-center font-medium text-purple-500">Hello, world!</h1>

      <div>
        {data?.results.map((hero) => (
          <div key={hero.id}>
            <h2>{hero.name}</h2>
            <p>{hero.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
