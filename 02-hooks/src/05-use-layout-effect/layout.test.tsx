import { render, screen, fireEvent } from '@testing-library/react';
import { Layout } from './Layout';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

jest.mock('../hooks/useCounter');
jest.mock('../hooks/useFetch');
    
describe('Layout', ()=>{

    const valuesCounter = {
        counter: 2,
        increment: jest.fn(),
        decrement: jest.fn()
    }

    const valuesFetch = {
        data: {
            id: 1,
            name: 'test',
            sprites: {
                front_default: '',
                front_shiny: '',
                back_default: '',
                back_shiny: ''
            }
        },
        isLoading: false
    }

    beforeAll(()=>{
        (useCounter as jest.Mock).mockReturnValue({...valuesCounter});
        (useFetch as jest.Mock).mockReturnValue({...valuesFetch});
    });
        
    it('should render component', ()=>{
        const { container } = render(<Layout />);
        expect(container).toBeInTheDocument();
    });

    it('should validate data', ()=>{
        render(<Layout />);
        expect(screen.getAllByRole('img').length).toBe(4);
    });

    it('should handle increment', ()=>{
        render(<Layout />);

        const buttonNext = screen.getByText('Siguiente');

        fireEvent.click(buttonNext);
        expect(valuesCounter.increment).toHaveBeenCalled();
    });

    it('should hanlde decrement', ()=>{
        render(<Layout />);

        const buttonPrev = screen.getByText('Anterior');

        fireEvent.click(buttonPrev);
        expect(valuesCounter.decrement).toHaveBeenCalled();
    });

    it('should render loader', ()=>{

        (useFetch as jest.Mock).mockReturnValue({...valuesFetch, isLoading: true});

        render(<Layout />);
        expect(screen.getByText('Cargando')).toBeInTheDocument();
    });
    
});