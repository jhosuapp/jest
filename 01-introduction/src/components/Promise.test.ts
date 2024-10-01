import { FilterHeroByIdAsync } from './Promise';

describe('Test in Promise.ts', ()=>{

    const data = {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    }

    it('Should get hero', (done)=> {
        const id = 1;
        FilterHeroByIdAsync(id)
            .then((hero)=>{
                expect(hero).toEqual(data);
                done();
            });
    });

    it('Should catch error when hero not exists', (done)=> {
        const id = 1000;
        FilterHeroByIdAsync(id)
            .catch((error) => {
                expect(error).toBe(`No se pudo encontrar al hero con id ${id}`);
                done();
            });
    });

});