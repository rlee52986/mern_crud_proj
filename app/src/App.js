import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import { Button, Container, Navbar, NavbarBrand, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootswatch/dist/lux/bootstrap.min.css';
// import './App.css';
import styled from 'styled-components';
import { AddButton, DeleteButton } from './components/StyledButton';
import MusicianForm from './components/MusicianForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      firstName: '',
      lastName: '',
      instrument: ''
  };
    
  }

  callAPI() {
      fetch('http://localhost:9000/musician')
        .then(res => res.json())
        .then(musician => {
            this.setState({           
            firstName: musician.firstName,
            lastName: musician.lastName        
          })
        })
        .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      
        <React.Fragment>     
        <header className="App-header">
            <Container>
              <NavigationBar></NavigationBar>       
              <br/>                     
              <MusicianForm/>         
            </Container>          
        </header>
        </React.Fragment>      
      
    );
  };
};
    

export default App;