import { connect } from 'react-redux'
import AddNewTodo from '../components/newTodoComponent'
import { addTodo } from '../redux/actions'

const mapStateToProps = state => {
    return {
    }
 }
  
const mapDispatchToProps = (dispatch) => {
    return {
        onNewItemAdd: (value) =>{
            console.log('whatis dispatched?')
            console.log(value)
            dispatch(addTodo(value))
        }
    }
}
const newTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddNewTodo)

export default newTodoContainer