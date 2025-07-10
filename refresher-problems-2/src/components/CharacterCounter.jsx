import React, { useState } from 'react'

const CharacterCounter = () => {

    const [text, setText] = useState('');
    const [limitReached, setLimitReached] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
        const charCount = text.length;
        setLimitReached(charCount > 100);
    };

    return (
        <div>
            <h1>Character Counter</h1>
            <textarea
                value={text}
                onChange={handleChange}
                rows="5"
                cols="50"
                placeholder="Type something..."
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            />
            <div>
                Character Count: {text.length} / {100}
            </div>
            {limitReached && (
                <div style={{ color: 'red', fontWeight: 'bold', marginTop: '5px' }}>
                    Character limit exceeded!
                </div>
            )}
        </div>
    )
}

export default CharacterCounter
