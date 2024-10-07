import { render } from '@testing-library/react'
import { MultipleCustomHooks } from './MultipleCustomHooks';

describe('MultipleCustomHooks component', ()=>{
        
    it('should describe test', ()=>{
        const { container } = render(<MultipleCustomHooks />);
        expect(container).toBeTruthy();
    });
    
});