import React from 'react';
import NewTodoContainer from './containers/newTodoContainer'
import TodoListContainer from './containers/TodoListContainer'
//would import router here 
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//using the switch component of the authorized route, direct the req to authorized router
//component first
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      itemList: []
    };
  }

  render() {
    return (
      <div>
        <NewTodoContainer
        />
        <TodoListContainer
        />
      </div>
    );
  }
}

export default App;
