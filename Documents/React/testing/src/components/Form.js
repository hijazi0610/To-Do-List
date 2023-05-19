import React from 'react';

const Form = ( {inputText, setInputText, toDos, setTodos}) => {
    //Functions
    const inputHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        //Prevent default action on button
        e.preventDefault();
        setTodos([
            ...toDos,
            {text: inputText, id: Math.random() * 100},
        ]);
        setInputText("")
    }

    return (
        <form>
            <input 
            onChange={inputHandler}
            value={inputText}/>
            <button onClick={submitHandler}>Add!</button>
        </form>
    );
}

export default Form;