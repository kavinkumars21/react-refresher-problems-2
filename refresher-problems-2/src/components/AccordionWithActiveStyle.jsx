import React, { useState } from 'react'

const AccordionWithActiveStyle = () => {

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
            <h1>Accordion With Active Style</h1>
            <div style={{ display: 'flex', gap: '5px' }}>
                {
                    data.map((item, index) => (
                        <div key={index} style={{ width: '300px'}} onClick={() => handlePanel(index)}>
                            <p style={{
                                background: openPanel === index ? 'orange' : 'skyblue',
                                fontWeight: openPanel === index ? '1000' : '500',
                                fontSize: openPanel === index ? '20px': '15px',
                                height: '25px',
                                color: 'white',
                                marginBottom: '-16px',
                                textAlign: 'center'
                            }}>
                                {item.header}
                            </p>
                            <p style={{
                                overflow: 'hidden',
                                height: openPanel === index ? '220px' : '0px',
                                background: 'lightblue',
                                padding: openPanel === index ? '5px' : '0px',
                                transition: 'height 2s ease, padding 2s ease'
                            }}>
                                {item.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AccordionWithActiveStyle
