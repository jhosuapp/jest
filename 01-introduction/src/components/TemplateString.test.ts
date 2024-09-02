import { getName } from "./TemplateString";

describe('Test in TemplateString.ts', ()=>{
    test('getName return "My name is Jhosua"', ()=>{
        const name = 'Jhosua';
        const message = getName( name );

        expect( message ).toBe(`My name is ${ name }`);
    });
});