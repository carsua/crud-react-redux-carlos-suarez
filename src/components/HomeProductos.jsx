import React, { Component } from "react";
import { Button,Item, Container,Segment,Grid, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Productos from "./Productos";
import MenuLink from "./MenuLink";


class HomeProductos extends Component {
  
  render() {

    return (
        <div>
        <MenuLink></MenuLink>
        <Container>
          <Button><Link to="/AddProducto"> Agregar</Link></Button>
        </Container>
        <Grid>
        <Grid.Column stretched width={16}>
        <Segment>
          <Item.Group>
           <Productos></Productos>
          </Item.Group>
        </Segment>
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default HomeProductos;