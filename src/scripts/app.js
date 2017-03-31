import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'

console.log ("Windmill, windmill, through the sky!")

const BigDealContainer = React.createClass({
	getInitialState: function(){
		return {
			doStuff: []
		}
	},

	_thingDo: function(newStuff){
		let allStuff = this.state.doStuff.map(function(stuff) {return stuff})
		allStuff.push(newStuff)
		this.setState({
			doStuff: allStuff
		})
	},

	_newItem: function(everythings, index){
		let component = this
		let allThings = everythings.map(function(list, index){
			return(

				<div className="item">
					<p><span>{list.item}</span></p>
					<button ref="do_me" className="itembutt" onClick><i className="fa fa-asterisk"></i></button>
				</div>
			)
		}).reverse()
		return allThings
	},

	_killThing: function(victim){
		let dirtyCommie = this.state.doStuff.filter(function(item, index){
			if (victim !== index){
				return true
			} else {
				return false
			}
		})
		this.setState({
			doStuff: dirtyCommie
		})
	},

	render: function(){
		return (
			<div className="calmthejsx">
				<InputThing refreshList={this._thingDo}/>
				<div className="items_list">
					{this._newItem(this.state.doStuff)}
				</div>
			</div>
		)
	}
})

const InputThing = React.createClass({
	_putNewThing: function(){
		let newThings = {
			item: this.refs.tellMe.value
		}
		this.props.refreshList(newThings)
		this.refs.tellMe.value= ''
	},

	render: function(){
		return (
			<div className="control">
				<input ref="tellMe" type="text" className="tellThings" placeholder="Tell me what you want."></input>
				<button className="punch_me" onClick={this._putNewThing}><i className="fa fa-crosshairs" aria-hidden="true"></i></button>
			</div>
		)
	}
})

let bigDealZone = document.querySelector('.bigdeal')
ReactDOM.render ( <BigDealContainer/>, bigDealZone)
