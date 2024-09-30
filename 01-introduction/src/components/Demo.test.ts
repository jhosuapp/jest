
describe('Test in file <Demo.tsx />', ()=>{
    test('Compare two strings', ()=>{
        
        // 1. A Appear(Preparar)
        const message1 = 'Hello World';

        //2. A Act(Actuar)
        const message2 = message1.trim();

        //3. A Assert(Afirmar)
        expect( message2 ).toBe( message1 );

    });
});