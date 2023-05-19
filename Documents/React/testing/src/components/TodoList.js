import React from 'react';
import ToDo from './Todo';

const TodoList = ( {toDos} ) => {
    return (
        <ul>
            {toDos.map((toDo) => (
            <ToDo 
                text={toDo.text}
                key={toDo.key}
            />
        ))}
        </ul>
    );
}

export default TodoList;