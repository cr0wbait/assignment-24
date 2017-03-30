import React from 'react';
import ReactDOM from 'react-dom';

console.log ("Windmill, windmill, through the sky!")

const BigDealContainer = React.createClass({
	render: function(){
		console.log('Ahoy!')

		let dealStyle = {

		}

		return <div style={dealStyle} className="theBigDeal">
			<div style={} className="input">
				<input style={} placeholder="Gimme a task." className="inputbar"></input><button className="orders">DO IT NOW</button>
			</div>
			<div className="task_items">

			</div>
		</div>
	}
})

console.log('I have the power!', React)
ReactDOM.render(<SomeComponent/>, document.querySelector('#app-container'))
