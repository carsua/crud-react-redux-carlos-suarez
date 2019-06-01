import {MOSTRAR_PRODUCTOS, ELIMINAR_PRODUCTOS, ACTUALIZAR_PRODUCTOS} from "./types.js";
import {CREAR_PRODUCTOS} from "./types.js";
import axios from "axios";

//json json online
const urlOnline = "https://my-json-server.typicode.com/carsua/productosTest/productos/";
// json local json server
//const urlLocal = "http://localhost:5000/productos/";

const urlApi = urlOnline;

export const mostrarProductos = () => async dispatch  => {
    const respuesta = await axios.get(urlApi);
    console.log(respuesta);
    dispatch({
        type: MOSTRAR_PRODUCTOS,
        payload: respuesta.data
    });
};

export const crearProductos = (producto) => async dispatch  => {
    const respuesta = await axios.post(urlApi,producto);
    console.log(respuesta);
    dispatch({
        type: CREAR_PRODUCTOS,
        payload: respuesta.data
    });
};

export const eliminarProductos = (id) => async dispatch  => {
    console.log(id.id);
    const respuesta = await axios.delete(urlApi+id.id);
    console.log(respuesta.data);
    dispatch({
        type: ELIMINAR_PRODUCTOS,
        payload: id.id
    });
};

export const actualizarProductos = (product) => async dispatch  => {
    console.log(product);
    let datos;
    const respuesta = await axios.put(urlApi+product.id, product).then(
        datos = await axios.get(urlApi)
    );
    console.log(datos);
    dispatch({
        type: ACTUALIZAR_PRODUCTOS,
        payload: datos.data
    });
};

/*export const mostrarProductos = () => {
    return {type:MOSTRAR_PRODUCTOS};
};

export const crearProductos = producto => {
    return {type:CREAR_PRODUCTOS,payload:producto};
};
*/



