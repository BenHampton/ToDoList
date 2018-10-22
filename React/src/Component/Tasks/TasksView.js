import React from 'react';
import Task from "./Task";

const TaskView = props => {

    let tasks = props.task.map(item => {
        return(
            <Task task={item.id} task={item} />
        )
    });

    return(
        <div>
            <table style={{border: 'solid', marginLeft: '45%', marginTop: '5%'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>TASK</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                {tasks}
                </tbody>
            </table>
            <input type={'button'} value={'Update'} onClick={(e) => props.updateTasks()}/>
        </div>
    )



}
export default TaskView;


