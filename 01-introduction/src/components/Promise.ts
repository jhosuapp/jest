import { getHeroeById } from "./ImpExp";

const FilterHeroByIdAsync = (id:number) =>{
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            const c1 = getHeroeById(id);
            if(c1){
                resolve(c1);
            }else{
                reject(`No se pudo encontrar al hero con id ${id}`)
            }
        },1000);

    });
}

export { FilterHeroByIdAsync }