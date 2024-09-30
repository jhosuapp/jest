import { usContext, UsContextType } from './DesObj';

describe('Test in Desobk.test', ()=>{

    const obj:UsContextType = {
        name: 'Jhosua',
        last_name: 'Penagos',
        email: 'jhosuapvll@gmail.com',
        id: 1,
        isEnable: true,
    }

    it('Return component', ()=>{
        //Act
        const action = usContext(obj);
        //Assert
        expect(action).toEqual(obj);
    });

    it("Types data", ()=>{
        const action = usContext(obj);

        expect( action.name ).toEqual( expect.any(String) );
        expect( action.email ).toEqual( expect.any(String) );
        expect( action.last_name ).toEqual( expect.any(String) );
        expect( action.id ).toEqual( expect.any(Number) );
        expect( action.isEnable ).toEqual( expect.any(Boolean) );
    });
});