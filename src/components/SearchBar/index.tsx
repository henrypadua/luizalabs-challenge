import Image from 'next/image'

type SearchBarProps = {
  onSearch: (searchTerm: string) => void
}

export function SearchBar({ onSearch }: Readonly<SearchBarProps>) {
  return (
    <div className="m-auto flex max-w-[880px] items-center rounded-full bg-[#FDECEC] bg-cover bg-center bg-no-repeat px-6 py-4">
      <span className="mr-10">
        <Image
          src="/assets/ic_busca.svg"
          alt="Buscar"
          title="Buscar"
          width={25}
          height={25}
        />
      </span>
      <input
        type="text"
        placeholder="Procure por heróis"
        onChange={(event) => onSearch(event.target.value)}
        className="w-full bg-transparent tracking-wide placeholder-rose-400 outline-none"
      />
    </div>
  )
}
