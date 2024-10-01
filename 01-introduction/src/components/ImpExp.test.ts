import { getHeroeById, getHeroeByOwner } from "./ImpExp";

describe('Test in ImpExp.ts', ()=>{

    const data = {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    }

    it('should return a hero', ()=>{
        const id = 1;
        const act = getHeroeById(id);
        expect(act).toEqual(data);
    });

    it('should return undefined', ()=>{
        const id = 1000;
        const act = getHeroeById(id);
        expect( act ).toBeFalsy();
    });

    it('should return 3 heroes', ()=>{
        const owner = 'DC';
        const act = getHeroeByOwner(owner);

        expect(act.length).toEqual(3);
        expect(act).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    });

    it('should return 2 heroes', ()=>{
        const owner = 'Marvel';
        const act = getHeroeByOwner(owner);

        expect(act.length).toEqual(2);
        expect(act).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
    });

});