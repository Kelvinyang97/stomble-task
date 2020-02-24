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
    this.onNewItemChange = this.onNewItemChange.bind(this);
    this.onClickNewItem = this.onClickNewItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }
  onNewItemChange(event){
    console.log('before new item')
    window.console.log(this.state.itemList)
    this.setState({
      newItem: event.target.value
      }, ()=>{
        // window.console.log(this.state.itemList)
        window.console.log(this.state.newItem)
    })
  }

  onClickNewItem(event){
    console.log('button clicked')
    this.setState({
      itemList: [...this.state.itemList, this.state.newItem]
      }, ()=>{
        // window.console.log(this.state.itemList)
        window.console.log(this.state.itemList)
    })
  }

  onDeleteItem(toDel){
    console.log(toDel);
    var newItemList = this.state.itemList.filter(function(value, index, arr){
      return value !== toDel;
    })
    this.setState({
      itemList: newItemList
    })
  }

  render() {
    return (
      <div>
        <NewTodoContainer
        onNewItemChange={this.onNewItemChange}
        onClickNewItem={this.onClickNewItem}
        />
        <TodoListContainer
          itemList={this.state.itemList}
          onDeleteItem={this.onDeleteItem}
        />
      </div>
    );
  }
}

export default App;
