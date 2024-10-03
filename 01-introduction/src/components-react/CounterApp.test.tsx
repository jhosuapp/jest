import { render, screen } from "@testing-library/react";
import { CounterApp } from "./CounterApp";

describe('CounterApp component', ()=>{

    const defaultProps = {
        initialNumber: 100
    }

    it('should render component', ()=>{
        const { container } = render(<CounterApp {...defaultProps} />);

        expect(container).toBeTruthy();
    });

    it('should validate number', ()=>{
        render(<CounterApp {...defaultProps} />);
        const counterWrapperNumber = screen.getByText(defaultProps.initialNumber).innerHTML;
        expect(parseInt(counterWrapperNumber)).toBe(defaultProps.initialNumber);
    });

});