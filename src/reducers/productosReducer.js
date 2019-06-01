import {MOSTRAR_PRODUCTOS,CREAR_PRODUCTOS,ELIMINAR_PRODUCTOS,ACTUALIZAR_PRODUCTOS} from "../actions/types.js";

const estadoinicial={
    productos:[]
}
export default function(state=estadoinicial,action){
    switch (action.type) {
        case MOSTRAR_PRODUCTOS:
            return {...state,productos:action.payload};
            break;
        case CREAR_PRODUCTOS:
            return {...state,productos:[...state.productos,action.payload]};
            break;
        case ELIMINAR_PRODUCTOS:
            console.log("Entro eliminar")
            return {...state,productos:state.productos.filter(p => p.id !== action.payload)};
            break;
        case ACTUALIZAR_PRODUCTOS:
            return {...state,productos:action.payload};
            break;
        default:
            return state;
            break;
    }
}