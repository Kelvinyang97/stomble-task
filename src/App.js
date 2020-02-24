import React from 'react';
import NewTodoContainer from './containers/newTodoContainer'
import TodoListContainer from './containers/TodoListContainer'

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
