import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import { FocusScreen } from './FocusScreen';
    
describe('FocusScreen', ()=>{
        
    it('should render component', ()=>{
        const { container } = render(<FocusScreen />);

        expect(container).toBeInTheDocument();
    });

    it('should focus input', ()=>{
        render(<FocusScreen />);  

        const button = screen.getByRole('button');
        expect(button).toBeTruthy();

        fireEvent.click(button);

        const input = screen.getByRole('textbox');

        expect(input).toHaveFocus();
    });
    
});