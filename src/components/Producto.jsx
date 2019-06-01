import React, { Component } from 'react';
import { Image, Item } from 'semantic-ui-react'
import {Link,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {eliminarProductos} from "../actions/productosAction";



class Producto extends Component {
    handleDelete = (e) => {
        e.preventDefault();
       
        this.props.eliminarProductos({
          id: e.target.value
        }).then(()=>{
            this.props.mostrar()
        });
      }
    render() {
        const {producto} = this.props;
        return (
            <Item>
            <Item.Image size='tiny' src='/images/wireframe/image.png' />
      
            <Item.Content>
              <Item.Header as='a'>{producto.nombre}</Item.Header>
              <Item.Meta></Item.Meta>
              <Item.Description>
              {producto.precio}
              </Item.Description>
              <Item.Extra>
              {producto.id}
              </Item.Extra> 
              <Item.Extra>
                <button className="ui button"><Link to={`/EditProducto/${producto.id}`}> Editar</Link>
                </button>
                <button value={producto.id} className="ui button" onClick={this.handleDelete}> Eliminar</button>
              </Item.Extra>
            </Item.Content>
          </Item>
            
        );
    }
}
const mapStateToProp =(state)=>{
    return{
        productos: state.productos.productos
    };
}

export default connect(mapStateToProp,{eliminarProductos})(withRouter(Producto));
