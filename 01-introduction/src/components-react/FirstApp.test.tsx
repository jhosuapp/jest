import { render } from "@testing-library/react";
import { FirstApp } from "./FirstApp";

describe('Testing in FirstApp.tsx', ()=>{

    const defaultProps = {
        title: "",
        subtitle: "",
        name: ""
    }

    it('Should render component', ()=>{
        const { container } = render(<FirstApp { ...defaultProps } />)
    });
});