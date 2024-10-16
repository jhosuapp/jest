import { render, screen, fireEvent } from '@testing-library/react'
import { TodoApp } from './TodoApp';
    
describe('TodoApp', ()=>{
        
    it('should render view', ()=>{
        const { container } = render(<TodoApp />);

        expect(container).toBeInTheDocument();
    });
    
});