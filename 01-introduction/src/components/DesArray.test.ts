import { DesArray } from "./DesArray";


describe('Test in DesArray.ts', ()=>{
    test('Return a array with any string and any number', ()=>{

        const [ letters, numbers ] = DesArray();


        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );

    });
});