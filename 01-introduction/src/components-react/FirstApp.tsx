
interface IFirstAppProps {
    title: string;
    subtitle: string;
    name: string;
}

const FirstApp = ({ title, subtitle, name }:IFirstAppProps ):JSX.Element => {
    return (
        <>
            <h1>{ title }</h1>
            <h2>{ subtitle }</h2>
            <p>{ name }</p>
        </>
    )
}



export { FirstApp }