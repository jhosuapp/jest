import { render, screen, fireEvent } from '@testing-library/react'
import { MultipleCustomHooks } from './MultipleCustomHooks';
import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

jest.mock('../hooks/useFetch');
jest.mock('../hooks/useCounter');
    
describe('MultipleCustomHook', ()=>{
        
    it('should render component', ()=>{

        (useFetch as jest.Mock).mockReturnValue({
            isLoading: true,
            data: []
        });

        (useCounter as jest.Mock).mockReturnValue({
            counter: 1,
            increment: jest.fn(),
            decrement: jest.fn(),
        });
        
        const { container } = render(<MultipleCustomHooks />);
        
        expect(container).toBeInTheDocument();
        expect(screen.getByText('Cargando')).toBeInTheDocument();
    });
    
    it('should render component with data', ()=>{

        (useFetch as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                name: 'test',
                id: 'test',
                sprites: {
                    // front_default: 'test',
                    // front_shiny: 'test',
                    // back_default: 'test',
                    // back_shiny: 'test'
                }
            }
        });

        (useCounter as jest.Mock).mockReturnValue({
            counter: 1,
            increment: jest.fn(),
            decrement: jest.fn(),
        });

        render(<MultipleCustomHooks />);

        expect(screen.getAllByRole('img').length).toBe(4);
    });

    it('Should test increment', ()=>{
        const incrementMock = jest.fn();

        (useFetch as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                name: 'test',
                id: 'test',
                sprites: {  }
            }
        });

        (useCounter as jest.Mock).mockReturnValue({
            counter: 1,
            increment: incrementMock,
            decrement: jest.fn(),
        });

        render(<MultipleCustomHooks />);
        const buttonNext = screen.getByText('Siguiente');

        fireEvent.click(buttonNext);

        expect(incrementMock).toHaveBeenCalled();
    });

    it('Should test decrement', ()=>{
        const decrementMock = jest.fn();

        (useFetch as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                name: 'test',
                id: 'test',
                sprites: {  }
            }
        });

        (useCounter as jest.Mock).mockReturnValue({
            counter: 2,
            increment: jest.fn(),
            decrement: decrementMock,
        });

        render(<MultipleCustomHooks />);
        const buttonPrev = screen.getByText('Anterior');

        fireEvent.click(buttonPrev);

        expect(decrementMock).toHaveBeenCalled();
    });
    
});