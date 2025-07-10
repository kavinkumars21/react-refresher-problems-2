import React, { useState } from 'react';

const DraggableSquare = () => {
    const [position, setPosition] = useState({ top: 100, left: 100 });
    const [dragging, setDragging] = useState(false);
    const [startMousePos, setStartMousePos] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        e.preventDefault();
        setDragging(true);
        setStartMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!dragging) return;

        const deltaX = e.clientX - startMousePos.x;
        const deltaY = e.clientY - startMousePos.y;

        setPosition((prev) => ({
            top: prev.top + deltaY,
            left: prev.left + deltaX,
        }));

        setStartMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div>
            <h1>Draggable Square</h1>
            <div
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                    position: 'relative',
                    top: position.top,
                    left: position.left,
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'blue',
                    cursor: 'grab',
                    userSelect: 'none',
                }}
            ></div>
        </div>
    );
};

export default DraggableSquare;
