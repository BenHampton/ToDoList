import React from 'react';

const Tasks = props => {
    return(
        <tr>
            <td>
                {props.task.id}
            </td>
            <td>
                {props.task.name}
            </td>
            <td>
                {props.task.task}
            </td>
            <td>
                {props.task.date}
            </td>

        </tr>
    )
}
export default Tasks;