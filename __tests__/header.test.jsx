import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../app/ui/navbar'

jest.mock('../app/context', () => ({
    useAppContext: () => ({
      likes: [],
    }),
}))

describe('Page', () => {
    it('renders', () => {
      const component = render(<Header />)
    })
  })

