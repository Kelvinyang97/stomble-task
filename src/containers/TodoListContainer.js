import { connect } from 'react-redux'
import TodoList from '../components/todoListComponent'
import { removeTodo } from '../redux/actions'


const mapStateToProps = state => {
    return {
        itemList: state.itemList
    }
 }
  
const mapDispatchToProps = (dispatch) => {
    return {
        onItemRemove: (key) =>{
            window.console.log(key)
            dispatch(removeTodo(key))
        }
    }
}
const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)

export default TodoListContainer