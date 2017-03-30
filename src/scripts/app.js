import React from 'react';
import ReactDOM from 'react-dom';

const SomeComponent = React.createClass({
	render: function(){
		console.log('whoa!')

		let listStyle = {
			
		}

		return <div style={listStyle} className="listEl">



		</div>
	}
})

console.log('whyyyyy', React)
ReactDOM.render(<SomeComponent/>, document.querySelector('#app-container'))
