import { render, screen, fireEvent } from '@testing-library/react'
import { TodoList, IpropsTodoList } from './TodoList';
    
describe('TodoList Component', ()=>{

    const defaultProps:IpropsTodoList = {
        state: [{
            id: '1',
            title: 'title',
            complete: false
        }],
        handleTodoDelete: jest.fn(),
        handleTodoToggle: jest.fn()
    };
        
    it('should render component', ()=>{
        const { container } = render(<TodoList {...defaultProps}/>);
        expect(container).toBeInTheDocument();
    });
    
});