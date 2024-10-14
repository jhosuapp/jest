import { renderHook } from '@testing-library/react'
import { useTodo } from './useTodo';
    
describe('UseTodo', ()=>{
        
    it('should describe test', ()=>{
        const { result } = renderHook(()=> useTodo());

        console.log(result);
        expect(result.current).toEqual({
            handleTodo: expect.any(Function),
            handleTodoDelete: expect.any(Function),
            handleTodoToggle: expect.any(Function),
            state: []
        });
    });
    
});