import React, { Component } from 'react';
import '../../App.css';
import TaskView from "./TasksView";

class TaskComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
                tasks: [{
                    id: '1',
                    name: 'Ben',
                    date: 'today',
                    task: 'React'
                },
                    {
                        id: '2',
                        name: 'Jeff',
                        date: 'Tomorrow',
                        task: 'Spring Boot'
                    },
                    {
                        id: '3',
                        name: 'Aamir',
                        date: 'Yesterday',
                        task: 'Coding'
                    }]
        }
    }

    componentDidMount(){
        //make axios call to backend
    }

    updateTasks(){
        console.log('updated tasks')
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
