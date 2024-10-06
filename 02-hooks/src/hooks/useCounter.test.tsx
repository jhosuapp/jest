import { renderHook } from '@testing-library/react'
import { useCounter } from './useCounter';
    
describe('UseCounter Hook', ()=>{
        
    it('should render default values', ()=>{
        const { result } = renderHook( () => useCounter(10) );
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any( Function ));
        expect(decrement).toEqual(expect.any( Function ));
        expect(reset).toEqual(expect.any( Function ));
    });
    
});