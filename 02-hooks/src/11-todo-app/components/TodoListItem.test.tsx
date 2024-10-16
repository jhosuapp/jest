import { render, screen, fireEvent } from '@testing-library/react'
import { TodoListItem, IpropsTodoListItem } from './TodoListItem';
    
describe('TodoListItem component', ()=>{

    const defaultProps:IpropsTodoListItem = {
        todo: {
            id: '1',
            title: 'title',
            complete: true
        },
        handleTodoDelete: jest.fn(),
        handleTodoToggle: jest.fn()
    };
        
    it('should render component', ()=>{
        const { container } = render(<TodoListItem {...defaultProps} />);
        expect(container).toBeInTheDocument();
    });

    it('should deleteTodo', ()=>{
        render(<TodoListItem {...defaultProps} />);

        const buttonDelete = screen.getByText('delete');

        fireEvent.click(buttonDelete);

        expect(defaultProps.handleTodoDelete).toHaveBeenCalled();
    });

    it('should deleteTodo', ()=>{
        render(<TodoListItem {...defaultProps} />);

        const toggleTodo = screen.getByText(defaultProps.todo.title);

        fireEvent.click(toggleTodo);

        expect(defaultProps.handleTodoToggle).toHaveBeenCalled();
    });
    
});