import React, { useState } from 'react'

const SimpleCounter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Simple Counter</h1>
            <div style={{display: 'flex', gap: '30px'}}>
                <button onClick={() => setCount(() => count + 1)}>
                    Increase
                </button>
                <p>{count}</p>
                <button onClick={() => setCount(() => count - 1)} disabled = {count <= 0 ? true : false}>
                    Decrease
                </button>
            </div>
        </div>
    )
}

export default SimpleCounter
