import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from './search';
    
describe('search', ()=>{
    
    const value = 'test';


    it('should describe test', ()=>{
        const fun = jest.fn();
        const { container } = render(<Search fun={ fun } />);
        
        expect(container).toBeTruthy();
    });
    
    it('should setValue input', ()=>{
        const fun = jest.fn();
        render(<Search fun={ fun } />);
        const input:HTMLFormElement = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: value } });
        
        expect(input.value).toBe(value);
    });
    
    it('should submit form', ()=>{
        const fun = jest.fn();
        render(<Search fun={ fun } />);
        
        const form = screen.getByRole('form');
        const input:HTMLFormElement = screen.getByRole('textbox');
        
        fireEvent.input(input, { target: { value: value } });
        fireEvent.submit(form);


        expect(input.value).toBe('');
        expect(fun).toHaveBeenCalled();
        expect(fun).toHaveBeenCalledTimes(1);
        expect(fun).toHaveBeenCalledWith(value);
    });
    
    it('should submit form', ()=>{
        const fun = jest.fn();
        render(<Search fun={ fun } />);
        
        const form = screen.getByRole('form');
        
        fireEvent.submit(form);
        expect(form).toBeTruthy();
        expect(fun).toHaveBeenCalledTimes(0);
    });
    
});