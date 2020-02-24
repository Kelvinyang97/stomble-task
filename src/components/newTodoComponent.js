import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AddNewTodo extends React.Component{
    render(){
        console.log(this.props)
        return (
            <form  noValidate autoComplete="off">
              <TextField
               id="standard-basic" 
               label="Add new item here"
               onChange={(event)=>{this.setState({input: event.target.value})}}
               />
               <Button 
                variant="contained" 
                color="secondary"
                onClick={()=>{this.props.onNewItemAdd(this.state.input)}}>
                Add
              </Button>
            </form>
          );
    }
}