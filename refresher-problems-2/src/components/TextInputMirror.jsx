import React, { useState } from 'react'

const TextInputMirror = () => {

    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <div>
            <h1>Text Input Mirror</h1>
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
                placeholder="text here..."
            />
            <p style={{ marginTop: '20px', fontSize: '18px' }}>
                {inputText}
            </p>
        </div>
    )
}

export default TextInputMirror
