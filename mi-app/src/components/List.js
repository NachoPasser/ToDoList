import React, {Component} from 'react'
import s from './List.module.css'
import ListItem from './ListItem';
import SearchBar from './SearchBar';
function hashCode(s) {
  for(var i = 0, h = 0; i < s.length; i++)
      h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return h;
}



class List extends Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     items : [], 
  //   }
  
  //   this.addTask = this.addTask.bind(this); //lo bindeo porque sino el this no funciona.
  // }

  // addTask(task){
  //   if(task && !this.state.items.some((t) => t === task)){
  //     this.setState({
  //       items: [...this.state.items, task]
  //     }) //en los componentes de clases no haces return tal, tenes que pasar un obj que tenga la prop a modificar
  //   }
  // }
  // onClose = (i) => { //esta no es necesario bindearla porque al ser un arrow function se bindea de una
  //   let newItems = this.state.items.filter(item => item !== i)
  //   this.setState({items : newItems})
  // }
  //PASE TODO A APP PORQUE SINO, AL CAMBIAR DE URL, SE ME BORRABAN LAS TAREAS, sucedia porque la List se redenrizaba desde cero. Perdiendo los datos
  render(){
    return (
      <div className={s.List}>
          <SearchBar addTask={this.props.addTask}/>
          <hr className={s.hr}/>
          <div>
          {this.props.items.map((i) =>
            <ListItem 
            text={i}
            onClose={this.props.onClose}
            key={hashCode(i)}
            />
          )} {/*Recorro los items del estado y a partir de ellos voy anadiendo list items*/}
          </div>
      </div>
    )
  }
}

export default List;
      
