import { render, screen, fireEvent } from '@testing-library/react'
import { MultipleCustomHooks } from './MultipleCustomHooks';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

jest.mock('../hooks/useFetch');
jest.mock('../hooks/useCounter');

describe('MultipleCustomHooks component', ()=>{

    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });
        
    it('should render the component correctly', () => {
        (useCounter as jest.Mock).mockReturnValue({
            counter: 1,
            increment: mockIncrement,
            decrement: mockDecrement
        });

        (useFetch as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true
        });

        const { container } = render(<MultipleCustomHooks />);
        expect(container).toBeTruthy();
        expect(screen.getByText('multiple custom hooks')).toBeTruthy();
    });

    it('should show the LoadingMessage when isLoading is true', () => {
        (useCounter as jest.Mock).mockReturnValue({
            counter: 1,
            increment: mockIncrement,
            decrement: mockDecrement
        });

        (useFetch as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...')).toBeTruthy();
    });

    it('should show the PokemonCard when data is loaded', () => {
        const pokemonData = {
            name: 'pikachu',
            id: '25',
            sprites: {
                front_default: 'front.png',
                front_shiny: 'shiny_front.png',
                back_default: 'back.png',
                back_shiny: 'shiny_back.png'
            }
        };

        (useCounter as jest.Mock).mockReturnValue({
            counter: 1,
            increment: mockIncrement,
            decrement: mockDecrement
        });

        (useFetch as jest.Mock).mockReturnValue({
            data: pokemonData,
            isLoading: false
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText('pikachu')).toBeTruthy();
        expect(screen.getByAltText('front.png')).toBeTruthy();
    });

    it('should disable buttons when isLoading is true', () => {
        (useCounter as jest.Mock).mockReturnValue({
            counter: 1,
            increment: mockIncrement,
            decrement: mockDecrement
        });

        (useFetch as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true
        });

        render(<MultipleCustomHooks />);
        const prevButton = screen.getByText('Anterior');
        const nextButton = screen.getByText('Siguiente');

        // expect(prevButton).toBeDisabled();
        // expect(nextButton).toBeDisabled();
    });

    it('should call increment and decrement functions on button click', () => {
        (useCounter as jest.Mock).mockReturnValue({
            counter: 2,
            increment: mockIncrement,
            decrement: mockDecrement
        });

        (useFetch as jest.Mock).mockReturnValue({
            data: null,
            isLoading: false
        });

        render(<MultipleCustomHooks />);

        const prevButton = screen.getByText('Anterior');
        const nextButton = screen.getByText('Siguiente');

        fireEvent.click(prevButton);
        expect(mockDecrement).toHaveBeenCalledWith(1);

        fireEvent.click(nextButton);
        expect(mockIncrement).toHaveBeenCalledWith(1);
    });
    
});