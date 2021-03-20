// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import AddBox from '@material-ui/icons/AddBox';
import Delete from '@material-ui/icons/Delete';
import Close from '@material-ui/icons/Close';

class Workspace extends Component {
    constructor(props) {
        super(props);
    }

    handleAddNewToDoListItem = () => {
        console.log("Add new list item");
        this.props.addNewToDoListItemCallback();
    }
    
    handleDeleteButton = () => {
        console.log("Delete List");
        this.props.deleteListCallback();
    }
    
    handleCloseButton = () => {
        console.log("Close list");
        this.props.closeListCallback();
    }

    render() {
        return (
            <div id="workspace">
                <div id="todo-list-header-card" className="list-item-card">
                    <div id="task-col-header" className="item-col todo-button">Task</div>
                    <div id="date-col-header" className="item-col todo-button">Due Date</div>
                    <div id="status-col-header" className="item-col todo-button">Status</div>
                    <div className="item-col" display="flex" flexDirection="row" flexWrap="nowrap">
                        <AddBox 
                            id="add-item-button" 
                            className="list-item-control material-icons todo-button" 
                            onClick={this.handleAddNewToDoListItem}/>
                        <Delete 
                            id="delete-list-button" 
                            className="list-item-control material-icons todo-button" 
                            onClick={this.handleDeleteButton}/>
                        <Close 
                            id="close-list-button" 
                            className="list-item-control material-icons todo-button"
                            onClick={this.handleCloseButton} />
                    </div>
                </div>
                <div id="todo-list-items-div">
                    {
                        this.props.toDoListItems.map((toDoListItem) => (
                        <ToDoItem
                            key={toDoListItem.id}
                            toDoListItem={toDoListItem}     // PASS THE ITEM TO THE CHILDREN
                        />))
                    }
                </div>
                <br />
            </div>
        );
    }
}

export default Workspace;