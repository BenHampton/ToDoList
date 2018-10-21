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

    }

    updateTasks(){
        fetch('http://to-do/v1/to-do')
            .then(response => response.json)
            .then(data => {
                console.log(data);
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
