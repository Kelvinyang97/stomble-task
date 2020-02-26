import { connect } from 'react-redux'
import AddNewTodo from '../components/newTodoComponent'
import { addTodo } from '../redux/actions'

const mapStateToProps = state => {
    return {
    }
 }
  
//if use redux-saga, then need to use an action creator instead of just this dispatch
///something like this will be used instead
// mapping dispatch functions to the props of LoginForm component
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//       ...
//     }, dispatch);
//   }
const mapDispatchToProps = (dispatch) => {
    return {
        onNewItemAdd: (value) =>{
            dispatch(addTodo(value))
        }
    }
}
const newTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddNewTodo)

export default newTodoContainer