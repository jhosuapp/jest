import { render, screen } from "@testing-library/react";
import { FirstApp } from "./FirstApp";

describe('Testing in FirstApp.tsx', ()=>{

    const defaultProps = {
        title: "Titulo",
        subtitle: "Subtitulo",
        name: "Nombre"
    }

    it('should render component', ()=>{
        const { container } = render(<FirstApp {...defaultProps} />)
        
        expect(container).toMatchSnapshot();
    });
    
    it('should get title "titulo"', ()=>{
        render(<FirstApp {...defaultProps} />)
        
        expect(screen.getByText(defaultProps.title)).toBeTruthy();
        // screen.debug();
    });

    it('should get title "titulo"', ()=>{
        render(<FirstApp {...defaultProps} />)
        
        expect( screen.getByRole('', { level: 1 }).innerHTML ).toContain(defaultProps.title);
    });

});
