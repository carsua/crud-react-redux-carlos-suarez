import React, { Component } from "react";
import { Button, Form, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import{crearProductos} from "../actions/productosAction";
import MenuLink from "./MenuLink";
import withRouter from "react-router-dom";



class AddProducto extends Component {   
  
  state ={nombre:"",precio:""};
  
  handleSave = (e) => {
    e.preventDefault();
    this.props.crearProductos({
      nombre: this.state.nombre,
      precio: this.state.precio
    });
    
    this.props.history.push("/HomeProductos");
  }
    
  changeInput = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  render() {   
    return (
      <div>
  <MenuLink></MenuLink>
  <Segment raised><h1>Agregar Producto</h1></Segment>
  <Form>
    <Form.Field>
      <label>Nombre</label>
      <input name="nombre" placeholder='Nombre' onChange={this.changeInput} />
    </Form.Field>
    <Form.Field>
      <label>Precio</label>
      <input name="precio" placeholder='precio' onChange={this.changeInput} />
    </Form.Field>
    <Button onClick={this.handleSave}>Save</Button>
    <button className="ui button"><Link to={`/HomeProductos`}> Back</Link></button>
  </Form>
  </div>
  );}

}


export default connect(null,{crearProductos})(AddProducto);