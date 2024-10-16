import { render, screen, fireEvent } from '@testing-library/react'
import { TodoAdd } from './TodoAdd';
    
describe('TodoAdd Component', ()=>{

    const handleTodo = jest.fn();
        
    it('should render component', ()=>{
        const { container } = render(<TodoAdd handleTodo={ handleTodo } />);

        expect(container).toBeInTheDocument();
    });

    it('should handle form submit with error', ()=>{
        render(<TodoAdd handleTodo={ handleTodo } />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(screen.getByText('El campo no puede estar vacío')).toBeInTheDocument();
    });

    it('should handle form submit success', ()=>{
        render(<TodoAdd handleTodo={ handleTodo } />);

        const form = screen.getByRole('form');
        const input = screen.getByTestId('input');

        fireEvent.change(input, { target: { value: '123123' } });
        fireEvent.submit(form);

        expect(handleTodo).toHaveBeenCalled();
    });
    
});