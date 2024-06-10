import { render, screen } from '@testing-library/react'

import { HeaderHome } from '@/components/HeaderHome'

describe('HeaderHome component', () => {
  it('renders the Marvel logo', () => {
    render(<HeaderHome />)
    const logo = screen.getByAltText('Marvel Logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<HeaderHome />)
    const heading = screen.getByRole('heading', { name: 'EXPLORE O UNIVERSO' })
    expect(heading).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<HeaderHome />)
    const subheading = screen.getByText(
      /Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrira em breve!/i,
    )
    expect(subheading).toBeInTheDocument()
  })
})
