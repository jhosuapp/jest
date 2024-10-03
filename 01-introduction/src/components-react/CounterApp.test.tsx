import { render, screen, fireEvent } from "@testing-library/react";
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

    it('should validate event increment', ()=>{
        render(<CounterApp {...defaultProps} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText(defaultProps.initialNumber + 1)).toBeTruthy();
    });

    it('should validate event decrement', ()=>{
        render(<CounterApp {...defaultProps} />);
        fireEvent.click(screen.getByRole('button', {name: "btn-decrement"}));
        expect(screen.getByText(defaultProps.initialNumber - 1)).toBeTruthy();
    });

});