import { render, screen, fireEvent } from '@testing-library/react'
import { Message } from './Message';    

describe('Message component', ()=>{
        
    it('should render component', ()=>{
        const { container } = render(<Message />);

        expect(container).toBeTruthy();
    });
    
});