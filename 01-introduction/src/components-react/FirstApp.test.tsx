import { render } from "@testing-library/react";
import { FirstApp } from "./FirstApp";

describe('Testing in FirstApp.tsx', ()=>{

    const defaultProps = {
        title: "Titulo",
        subtitle: "Subtitulo",
        name: "Nombre"
    }

    it('Should render component', ()=>{
        const { container } = render(<FirstApp { ...defaultProps } />)
        expect(container).toMatchSnapshot();
    });
    
    it('Should render h1', ()=>{
        const { container, getByText } = render(<FirstApp { ...defaultProps } />)
        expect( getByText(defaultProps.title) ).toBeTruthy();
    
        const h1 = container.querySelector('h1');
    
        expect(h1?.innerHTML).toContain( defaultProps.title );
    });


    it('Should render h2', ()=>{
        const { getByTestId } = render(<FirstApp {...defaultProps} />)

        expect(getByTestId('test-subtitle').innerHTML).toContain(defaultProps.subtitle);
    });

});
