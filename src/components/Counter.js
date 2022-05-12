import React, {useState} from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter => counter + 1)
    }

    function decrement() {
        setCounter(counter => counter - 1)
    }
    
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>INCREAMENT</button>
            <button onClick={decrement}>DECREMENT</button>
        </div>
    );
};

export default Counter;