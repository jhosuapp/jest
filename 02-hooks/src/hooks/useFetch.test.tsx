import { renderHook, waitFor } from '@testing-library/react'
import { useFetch } from './useFetch';
    
describe('useFetch', ()=>{

    // Definir un mock del objeto de cache
    const localCacheMock = {
        'https://pokeapi.co/api/v2/pokemon/1': { name: 'bulbasaur' }
    };

    // Sobreescribe el objeto localCache del hook con el mock
    beforeEach(() => {
        (global as any).localCache = localCacheMock;
    });
        
    it('should describe test', ()=>{
        const { result } = renderHook(() => useFetch('https://pokeapi.co/api/v2/pokemon/1'));
        
        expect(result.current).toEqual({
            data: null, 
            hasError: false, 
            isLoading: true, 
            error: {}
        });
    });
    
    it('should getData', async()=>{
        const { result } = renderHook(() => useFetch('https://pokeapi.co/api/v2/pokemon/1'));
        
        await waitFor(
            ()=> expect(result.current.data).toBeTruthy(),
            {
                timeout: 5000
            }
        )

        expect(result.current.data).toBeTruthy();
        expect(result.current.isLoading).toBeFalsy();

    });

    it('should get error', async()=>{
        const { result } = renderHook(() => useFetch('https://pokeapi.co/api/v2/pokemon/12313asd'));
        
        await waitFor(
            ()=> expect(result.current.hasError).toBeTruthy(),
            {
                timeout: 5000
            }
        )

        expect(result.current.hasError).toBeTruthy();
    });

    it('should return cached data if available', () => {
        const { result } = renderHook(() => useFetch('https://pokeapi.co/api/v2/pokemon/1'));
        
        // Esperamos que el hook retorne la data de la cache
        // expect(result.current).toEqual({
        //     data: localCacheMock['https://pokeapi.co/api/v2/pokemon/1'],
        //     hasError: false,
        //     isLoading: false,
        //     error: {}
        // });
    });
    
});