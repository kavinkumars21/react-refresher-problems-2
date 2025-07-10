import React, { useState } from 'react'

const BoxResizer = () => {

    const [boxSize, setBoxSize] = useState({ width: 40, height: 40 });

    const handleIncrease = () => {
        setBoxSize({
            width: boxSize.width + 20,
            height: boxSize.height + 20
        })
    }

    const handleDecrease = () => {
        if (boxSize.width <= 40) {
            return
        }
        setBoxSize({
            width: boxSize.width - 20,
            height: boxSize.height - 20
        })
    }

    return (
        <div>
            <h1>BoxResizer</h1>
            <div
                style={{
                    background: 'orange',
                    width: `${boxSize.width}px`,
                    height: `${boxSize.height}px`,
                }}
            >
            </div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease} disabled={boxSize.width <= 40 ? true : false}>Decrease</button>
            {
                boxSize.height <= 40 && <p>Minimum height and width of 40x40 reached!</p>
            }
        </div>
    )
}

export default BoxResizer
