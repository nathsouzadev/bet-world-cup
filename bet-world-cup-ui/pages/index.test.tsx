import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
    it('should render home page', () => {
        render(<Home/>)
        expect(screen.getByText('Header')).toBeInTheDocument()
    })
})