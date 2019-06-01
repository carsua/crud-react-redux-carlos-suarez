import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import AddProducto from "./AddProducto";
import HomeProductos from "./HomeProductos";
import NoRuta from "./NoRuta";
import EditProducto from "./EditProducto";

class Router extends Component {
    render() {

        return (
       <Container>     
        <BrowserRouter>
        <Switch>
            <Route
                exact path="/"
                component ={HomeProductos}/>
            />
            <Route
                path="/HomeProductos"
                component={HomeProductos} />
            />
            <Route
                path="/AddProducto"
                component={AddProducto} />
            />
            <Route 
            path="/EditProducto/:id"
            render={ props => {
                const { match } = props;
                let pid = !isNaN(parseInt(match.params.id))
                ? parseInt(match.params.id)
                : 0;
                return <EditProducto pid={pid} />;
              }} />

            <Route
                component={NoRuta} />
            />
            
        </Switch>
        </BrowserRouter>
        </Container>     
        );
    }
}
export default Router;