import React from 'react';
import {ITodo} from './Interfaces';




interface Props {
    task: ITodo;
    onDelete: () => void
}

export const TodoPrint = ({task, onDelete}: Props) => {
    return (
    <div>
        <table>
        <tbody>
            <tr>
                <td>{task.description}</td>
                <td>{task.date}</td>
                <td>{task.priority}</td>
                <td><input type="button" value="Delete" onClick={onDelete}/></td>
            </tr>
        </tbody>
        </table>

    </div>
)};
