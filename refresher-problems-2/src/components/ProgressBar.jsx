import React, { useState } from 'react'

const ProgressBar = () => {

	const [percentage, setPercentage] = useState(0);

	return (
		<div>
			<h1>ProgressBar</h1>
			<input type='number'
				placeholder='Enter the percentage'
				value={percentage}
				onChange={(e) => setPercentage(e.target.value)}
			/>
			<div style={{ width: '500px', height: '20px', background: 'lightgray', borderRadius: '5px' }}>
				<div style={{ height: '20px', width: `${percentage}%`, background: 'brown', marginTop: '20px' }}>
				</div>
			</div>
			{
				percentage > 100 && <p>Max percentage is 100 !</p>
			}
		</div>
	)
}

export default ProgressBar
