import React from 'react';
import ReactDOM from 'react-dom';

console.log ("Windmill, windmill, through the sky!")

const SomeComponent = React.createClass({
	render: function(){
		console.log('Ahoy!')

		let listStyle = {

		}

		return <div style={listStyle} className="listEl">



		</div>
	}
})

console.log('I have the power!', React)
ReactDOM.render(<SomeComponent/>, document.querySelector('#app-container'))
