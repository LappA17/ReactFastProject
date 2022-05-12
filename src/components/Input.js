import React, {useState} from 'react';

const Input = () => {
    const [value, setValue] = useState('Hi')

    function inputValue(event) {
        setValue(event => event.target.value)
    }

    return (
        <div>
            <h1>{value}</h1>
            <input type="text" 
                   value={value}
                   onChange={inputValue}/>
        </div>
    );
};

export default Input;