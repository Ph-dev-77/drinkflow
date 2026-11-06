import drinks from "./drinks";



export function validarJuiceOrder({productId}) {
    const product = drinks.find (
        drink => drink.id === productId
    );

    if (!product){
        return{
            valid: false,
            errors: ["Produto Nõ encontrato"] 
        };
    }
    return {
        valid: true,
        errors:[]
    }


}
