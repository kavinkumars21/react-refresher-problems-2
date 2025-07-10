import React, { useState } from 'react'

const ColorPicker = () => {

    const colorList = ["Red", "Yellow", "Blue", "Green"];

    const [color, setColor] = useState("Red");

    return (
        <div>
            <h1>Color Picker</h1>
            {
                colorList.map((item, index) => (
                    <button key={index} onClick={() => setColor(item)}>{item}</button>
                ))
            }
            <div style={{ background: color, height: '100px', width: '500px' }}>
            </div>
        </div>
    )
}

export default ColorPicker
