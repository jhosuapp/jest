import { renderHook, act } from '@testing-library/react'
import { useForm } from './useForm';
    
describe('UseForm Hooks', ()=>{

    const initialValue = {
        username: '',
        email: '',
        password: ''
    }
        
    it('should render hook', ()=>{
        const { result } = renderHook(()=> useForm(initialValue));

        expect(result.current).toEqual({
            HandleOnChange: expect.any( Function ),     
            form: initialValue,
            HandleOnReset: expect.any( Function ) 
        });
    });

    it('should modify name', ()=>{
        const newValue = 'Jhosua'
        const { result } = renderHook(()=> useForm(initialValue));
        const { HandleOnChange } = result.current;

        act(()=>{
            const mockEvent = {
                target: {
                    name: 'username',
                    value: newValue
                }
            } as React.ChangeEvent<HTMLInputElement>;
    
            HandleOnChange(mockEvent);
        });

        expect(result.current.form.username).toBe(newValue);

    });

    it('should reset form', ()=>{
        const newValue = 'Jhosua'
        const { result } = renderHook(()=> useForm(initialValue));
        const { HandleOnChange, HandleOnReset } = result.current;
        
        act(()=>{
            const mockEvent = {
                target: {
                    name: 'username',
                    value: newValue
                }
            } as React.ChangeEvent<HTMLInputElement>;
    
            HandleOnChange(mockEvent);
            HandleOnReset();
        });

        expect(result.current.form.username).toBe(initialValue.username);

    });

    
});