import { getUser, getUserNameDinamic } from "./Functions";

describe('Test in file Functions.ts', ()=>{
    test('Return a object', ()=>{

        const user = {
            userName: 'Jhosua',
            password: '123Abc'
        }

        const testUser = getUser();

        expect( user ).toEqual( testUser );
    });


    test('Return a object with dinamic name', ()=>{
        const name:string = 'Jhosua';

        const user = {
            userName: name,
            password: '123Abc',
        }

        const testUser = getUserNameDinamic( name );


        expect( user ).toEqual( testUser );

    });
});