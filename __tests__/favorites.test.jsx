import '@testing-library/jest-dom'
import { render, cleanup } from '@testing-library/react'
import Page from '../app/favorites/page'


jest.mock('../app/context', () => ({
    useAppContext: () => ({
      likes: [],
    }),
}))

describe('Page', () => {
    it('renders', () => {
      const component = render(<Page />)

      component.getByText('No favorite characters yet')
    })
  })

