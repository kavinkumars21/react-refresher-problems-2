import React, { useState } from 'react'

const Accordion = () => {

    const data = [
        {
            header: "Header 1",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, recusandae. Ullam neque deleniti temporibus, aliquid est consectetur vero voluptates, velit iure aliquam quia, quisquam perferendis officia? Libero itaque architecto dolorem."
        },
        {
            header: "Header 2",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, recusandae. Ullam neque deleniti temporibus, aliquid est consectetur vero voluptates, velit iure aliquam quia, quisquam perferendis officia? Libero itaque architecto dolorem."
        },
        {
            header: "Header 3",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, recusandae. Ullam neque deleniti temporibus, aliquid est consectetur vero voluptates, velit iure aliquam quia, quisquam perferendis officia? Libero itaque architecto dolorem."
        },
        {
            header: "Header 4",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, recusandae. Ullam neque deleniti temporibus, aliquid est consectetur vero voluptates, velit iure aliquam quia, quisquam perferendis officia? Libero itaque architecto dolorem."
        }
    ]

    const [openPanel, setOpenPanel] = useState(null);

    const handlePanel = (index) => {
        setOpenPanel(prevIndex => (prevIndex === index ? null : index));
    }

    return (
        <div>
            <h1>Accordion</h1>
            <div style={{ display: 'flex', gap: '5px' }}>
                {
                    data.map((item, index) => (
                        <div key={index} style={{ width: '300px' }} onClick={() => handlePanel(index)}>
                            <h3 style={{ background: 'blue', color: 'white' }}>{item.header}</h3>
                            <p style={{ display: openPanel === index ? 'block' : 'none' }}>{item.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Accordion
