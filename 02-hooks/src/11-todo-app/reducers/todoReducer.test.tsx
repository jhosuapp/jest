import { IActionTodoReducer } from "../models";
import { todoReducer } from "./todoReducer";

describe('TodoReducer', ()=>{

    const initialValue = [{
        id: '1',
        title: 'title',
        complete: false
    }];

    it('should return default TODO', ()=>{

        const action: IActionTodoReducer = {
            type: "any action" as any,
            payload: {  } as any
        };

        const reducer = todoReducer(initialValue, action);

        expect(reducer).toEqual([{
            id: "1",
            title: "title",
            complete: false
        }]);

    });
        
    it('should add TODO', ()=>{

        const addTodoAction: IActionTodoReducer = {
            type: "[TODO] Add todo",
            payload: {
                id: "2",
                title: "New Todo",
                complete: false
            }
        };

        const reducer = todoReducer(initialValue, addTodoAction);
        expect(reducer).toContain(addTodoAction.payload);
    });
    
    it('should remove TODO', ()=>{

        const deleteTodoAction: IActionTodoReducer = {
            type: "[TODO] Delete todo",
            payload: {
                id: "1",
                title: "title",
                complete: false
            }
        };

        const reducer = todoReducer(initialValue, deleteTodoAction);
        expect(reducer).toEqual([]);
    });

    it('should toggle TODO', ()=>{

        const toggleTodoAction: IActionTodoReducer = {
            type: "[TODO] Toggle todo",
            payload: {
                id: "1",
                title: "title",
                complete: false
            }
        };

        const reducer = todoReducer(initialValue, toggleTodoAction);
        expect(reducer).toEqual([{
            id: "1",
            title: "title",
            complete: true
        }]);
        
    });
    
});