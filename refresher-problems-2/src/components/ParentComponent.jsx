import React, { useState } from 'react'
import ChildCounter from './ChildCounter';

const ParentComponent = () => {

	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Parent Component and Child Counter</h1>
			<ChildCounter count= {count} setCount = {setCount}/>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	)
}

export default ParentComponent
