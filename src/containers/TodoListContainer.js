import { connect } from 'react-redux'
import TodoList from '../components/todoListComponent'
import { removeTodo } from '../redux/actions'

//if use redux-saga, then need to use an action creator instead of just this dispatch
///something like this will be used instead
// mapping dispatch functions to the props of LoginForm component
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//       ...
//     }, dispatch);
//   }
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