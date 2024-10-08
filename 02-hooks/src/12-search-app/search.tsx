import { useState } from "react";

interface IProps {
    fun: (value: string) => void
}

const Search = ({ fun }:IProps):JSX.Element => {

    const [value, setValue] = useState<string>('');

    const onChange:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setValue(e.target.value);
    }

    const onSubmit:React.FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault();
        if(value.length <= 0) return;
        setValue('');
        fun(value);
    }

    return (
        <>
            <form action="" onSubmit={ onSubmit } aria-label="form">

                <input 
                    type="text" 
                    onChange={ onChange }
                    value={ value }                
                />

                <button type="submit">
                    Buscar
                </button>

            </form>
        </>
    )
}

export { Search }