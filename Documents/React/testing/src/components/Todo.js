import React from 'react';

const ToDo = ( {text} ) => {
    const deleteHandler = (e) => {
        const item = e.target;
        if (item.className === "to-do-item") {
            item.remove();
        }
    }

    return (
        <li onClick={deleteHandler} className="to-do-item">
            {text}
        </li>
    );
}

export default ToDo;