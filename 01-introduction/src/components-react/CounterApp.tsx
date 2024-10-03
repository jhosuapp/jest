import { useState } from "react";

interface IProps {
    initialNumber: number
}

const CounterApp = ({initialNumber}:IProps):JSX.Element => {

    const [counter, setCounter] = useState<number>(initialNumber);

    const handleAppCounter = ()=>{
        setCounter(counter + 1);
    }
    const handleAppCounterSecondary = ()=>{
        setCounter(counter - 1);
    }

    return (
        <>
            <button onClick={ handleAppCounter }>+1</button>
            <p>{counter}</p>
            <button onClick={ handleAppCounterSecondary }>-1</button>
        </>
    )
}

export { CounterApp }