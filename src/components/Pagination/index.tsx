import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type PaginationProps = {
  numberOfPages: number
  limit: number
  visiblePages: number
  setOffset: Dispatch<SetStateAction<number>>
}

export function Pagination({
  numberOfPages,
  limit,
  visiblePages = 5,
  setOffset,
}: Readonly<PaginationProps>) {
  const [activePage, setActivePage] = useState(1)

  const pages = new Array(numberOfPages).fill(1).map((_, index) => index + 1)

  const handlePrevious = () => {
    const newPage = Math.max(1, activePage - 1)
    setActivePage(newPage)
    setOffset((newPage - 1) * limit)

    localStorage.setItem('activePage', newPage.toString())
  }

  const handleNext = () => {
    const newPage = Math.min(pages.length, activePage + 1)
    setActivePage(newPage)
    setOffset((newPage - 1) * limit)

    localStorage.setItem('activePage', newPage.toString())
  }

  const startPage = Math.max(1, activePage - Math.floor(visiblePages / 2))
  const endPage = Math.min(pages.length, startPage + visiblePages - 1)

  useEffect(() => {
    const activePageStorage = localStorage.getItem('activePage')

    if (activePageStorage) {
      setActivePage(Number(activePageStorage))
    }
  }, [])

  return (
    <div className="flex items-center justify-center space-x-2">
      {activePage !== 1 && pages.length > 0 && (
        <button
          className="px-4 py-2 text-marvel"
          onClick={handlePrevious}
          disabled={activePage === 1}
        >
          &lt;
        </button>
      )}

      {pages.slice(startPage - 1, endPage).map((page) => (
        <button
          key={page}
          className={`${
            activePage === page
              ? 'bg-marvel text-white'
              : 'text-gray-800 hover:bg-gray-100'
          } rounded-md px-4 py-2 font-semibold`}
          onClick={() => {
            setActivePage(page)
            setOffset((page - 1) * limit)

            localStorage.setItem('activePage', page.toString())
          }}
        >
          {page}
        </button>
      ))}

      {activePage !== pages.length && pages.length > 0 && (
        <button
          className="px-4 py-2 text-marvel"
          onClick={handleNext}
          disabled={activePage === pages.length}
        >
          &gt;
        </button>
      )}
    </div>
  )
}
