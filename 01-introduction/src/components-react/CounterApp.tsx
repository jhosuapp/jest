import { useState } from "react";

interface IProps {
    initialNumber: number
}

const CounterApp = ({initialNumber}:IProps):JSX.Element => {

    const [counter, setCounter] = useState<number>(initialNumber);

    const handleIncrement = ()=>{
        setCounter(counter + 1);
    }
    const handleDecrement = ()=>{
        setCounter(counter - 1);
    }

    return (
        <>
            <button onClick={ handleIncrement }>+1</button>
            <p>{counter}</p>
            <button aria-label="btn-decrement" onClick={ handleDecrement }>-1</button>
        </>
    )
}

export { CounterApp }