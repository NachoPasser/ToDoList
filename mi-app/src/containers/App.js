import React, {Component} from 'react';
import './App.css';
import NavBar from '../components/NavBar.js'
import List from '../components/List.js'
import {Switch, Route, Link} from 'react-router-dom';
import axios from 'axios'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      items : [],
    }
  
    this.addTask = this.addTask.bind(this); //lo   bindeo porque sino el this no funciona.
  }

  addTask(task){
    if(task && !this.state.items.some((t) => t === task)){
      this.setState({
        items: [...this.state.items, task]
      }) //en los componentes de clases no haces return tal, tenes que pasar un obj que tenga la prop a modificar
    }
  }

  componentDidMount(){
    const user = {
      username: "dsadsadasdasdasdsadasd",
      first_name: "juan",
      last_name: "perez",
      phone: "+54 2345 67534",
      password: "pass123",
    };  
    axios.post('https://pruebahenrybootcamp.herokuapp.com/register', user).then(() => console.log('Termine!'))
  }
  
  onClose = (i) => { //esta no es necesario bindearla porque al ser un arrow function se bindea de una
    let newItems = this.state.items.filter(item => item !== i)
    this.setState({items : newItems})
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
        <Route path='/about'>
          <h1 style={{color:'white'}}>Bienvenido a mi proyecto, mi nombre es Ignacio Passerini!</h1>
        </Route>
        <Route path='/'>
          <List 
          items={this.state.items}
          onClose={this.onClose}
          addTask={this.addTask} />
        </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
