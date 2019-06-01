import React, { Component } from 'react';
import {connect} from "react-redux";
import{mostrarProductos} from "../actions/productosAction";
import Producto from './Producto.jsx';
import { Segment } from 'semantic-ui-react';

class Productos extends Component {

    componentDidMount(){
        this.props.mostrarProductos();
    }

    render() {
        const {productos} = this.props;
        return (
            <div>
                <Segment raised ><h1>Listado de Productos</h1></Segment>
                <ul>{productos.map((producto,index)=>{
                    return (<Producto mostrar={()=>{this.props.mostrarProductos()}} key={index} producto={producto}></Producto>)
                })}
                </ul>
            </div>
        );
    }
}
const mapStateToProp =(state)=>{
    return{
        productos: state.productos.productos
    };
}

export default connect(mapStateToProp,{mostrarProductos})(Productos);