import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter';
    
describe('UseCounter Hook', ()=>{

    const initialValue = 10;
        
    it('should render default values', ()=>{
        const { result } = renderHook( () => useCounter(initialValue) );
        const { counter, increment, decrement, reset } = result.current;

        expect(counter).toBe(initialValue);
        expect(increment).toEqual(expect.any( Function ));
        expect(decrement).toEqual(expect.any( Function ));
        expect(reset).toEqual(expect.any( Function ));
    });

    it('should increment intial value', ()=>{
        const incrementAct = 2;
        const { result } = renderHook( () => useCounter(initialValue) );
        const { increment } = result.current;

        act(()=>{
            increment(incrementAct);
        });

        expect(result.current.counter).toBe(initialValue + incrementAct);
    });

    it('should decrement intial value', ()=>{
        const decrementAct = 2;
        const { result } = renderHook( () => useCounter(initialValue) );
        const { decrement } = result.current;

        act(()=>{
            decrement(decrementAct);
        });

        expect(result.current.counter).toBe(initialValue - decrementAct);
    });

    it('should reset counter', ()=>{
        const { result } = renderHook( () => useCounter(initialValue) );
        const { reset, increment } = result.current;

        act(()=>{
            increment(2);
            reset();
        });

        expect(result.current.counter).toBe(initialValue);
    });

    
});