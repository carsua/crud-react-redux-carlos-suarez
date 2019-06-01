import React, { Component } from "react";
import { Button, Form } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actualizarProductos} from "../actions/productosAction";
import {withRouter} from "react-router-dom";



class EditProducto extends Component {   
  
  state ={id:"",nombre:"",precio:""};

  componentDidMount(){
   const producto = this.props.productos.filter(p=>p.id == this.props.pid );    
   this.setState(producto[0]);
   console.log(producto[0]);
  }

  handleSave = (e) => {
        e.preventDefault();
        this.props.actualizarProductos({
          id: this.state.id,
          nombre: this.state.nombre,
          precio: this.state.precio
        })

        this.props.history.push("/HomeProductos");
        
      }
    
    changeInput = (event) => {
      this.setState({[event.target.name]:event.target.value});
    }
 
    render() {
      
      return (
      <Form>
        <Form.Field>
          <label>Nombre</label>
          <input name="nombre" placeholder='Nombre' value={this.state.nombre} onChange={this.changeInput} />
        </Form.Field>
        <Form.Field>
          <label>Precio</label>
          <input name="precio" placeholder='precio' value={this.state.precio} onChange={this.changeInput} />
        </Form.Field>
        <Button onClick={this.handleSave}>Save</Button>
        <button className="ui button"><Link to={`/HomeProductos`}> Back</Link></button>
      </Form>
);}
}
const mapStateToProp =(state)=>{
  return{
      productos: state.productos.productos
  };
}
export default connect(mapStateToProp,{actualizarProductos})(withRouter(EditProducto));

