import { GetUrlAsync } from "./async";

describe('Test in async.ts', ()=>{
    it('should getUrlimage from api', async ()=>{
        const urlImage:string = await GetUrlAsync();
        expect(urlImage).toEqual( expect.any(String) );
    });

    it('should catch error', async ()=>{
         global.fetch = jest.fn(() =>
            Promise.reject(new Error('Failed to fetch'))
        );
        try {
            await GetUrlAsync();
        } catch (error) {
            expect(error).toBe('Ha ocurrido un error');
        }
    });
});