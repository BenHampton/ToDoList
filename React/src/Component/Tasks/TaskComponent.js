import React, { Component } from 'react';
import '../../App.css';
import TaskView from "./TasksView";

class TaskComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {tasks: []};
    }


    componentDidMount(){
        fetch('https://todo-spring-boot-react-swagger.herokuapp.com/tasks')
            .then(response => response.json)
            .then(data => {
                console.log(data);
            })
    }

    updateTasks(){
        fetch('https://todo-spring-boot-react-swagger.herokuapp.com/tasks')
            .then(response => response.json)
            .then(data => {
                console.log(data);
                this.setState({tasks: data})
            })
    }

    render() {
        return (
            <div className="App">
                <TaskView task={this.state.tasks} updateTasks={this.updateTasks} />
            </div>
        );
    }
}

export default TaskComponent;
