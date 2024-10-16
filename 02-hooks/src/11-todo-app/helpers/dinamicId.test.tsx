import { dinamicId } from "./DinamicId";

describe('dinamicId', ()=>{
        
    it('should get id', ()=>{
        const id = dinamicId();

        expect(id).toEqual( expect.any( String ) );
    });
    
});