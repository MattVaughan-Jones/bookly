import { render, screen } from '@testing-library/react'
import { SearchBar } from '../SearchBar';

describe('render', () => {
    it('should render the search bar', () => {

        render(<SearchBar/>)

        const element = screen.getByRole('textbox')

        expect(element).toBeInTheDocument();
    })
})