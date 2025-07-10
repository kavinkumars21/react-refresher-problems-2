import React from 'react'

const ChildCounter = ({count,setCount}) => {
    return (
        <div>
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

export default ChildCounter
