export interface UsContextType {
    name: string;
    last_name: string;
    id: number;
    email: string;
    isEnable: boolean;
}

const usContext = ({ name, last_name, id, email, isEnable }:UsContextType):UsContextType =>{
    return {
        name: name,
        last_name: last_name,
        id: id,
        email: email,
        isEnable: isEnable
    }
}

export { usContext }