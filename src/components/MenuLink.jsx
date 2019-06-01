import React, { Component } from 'react';
import { Menu, Container, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import {Link} from "react-router-dom";
class MenuLink extends Component {
  state = { activeItem: 'users' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }
    render() {
      const { activeItem } = this.state
        return (
            <div>
             <Menu icon='labeled' vertical>
        <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick}>
         <Link to={"/HomeProductos"} className="btn btn-success">
          <Icon name='users' />
            Productos
          </Link>
         
        </Menu.Item>
      </Menu>   
            </div>
        );
    }
}

export default MenuLink;