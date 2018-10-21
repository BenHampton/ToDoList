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
            {tasks}
        </div>
    )



}
export default TaskView;

//            <input type={'button'} value={'Update'} onClick={(e) => props.updateTasks()}/>
