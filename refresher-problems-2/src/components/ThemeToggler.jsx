import React, { useState } from 'react'

const ThemeToggler = () => {

    const [darkTheme, setDarkTheme] = useState(false);
    
  return (
    <div
    style={{padding: '10px',background: darkTheme ? "black" : "white", color: darkTheme ? "white" : "black"}}
    >
        <h1>ThemeToggler</h1>
        <div>
            <button onClick={() => setDarkTheme(!darkTheme)}>
                {darkTheme ? "Disable dark mode" : "Enable dark mode"}
            </button>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eligendi adipisci non perferendis accusantium, praesentium nobis magni quam quis velit corporis delectus, totam quidem, ratione beatae itaque dolorum. Nemo, modi!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur dolorem in voluptatem beatae provident veniam ducimus a minus ratione accusamus maiores tempore accusantium, harum vero dolores, officiis quae qui!</p>
    </div>
  )
}

export default ThemeToggler
