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
		let allStuff = this.state.doStuff.map(function(copy) {return copy})
		allStuff.push(newStuff)
		this.setState({
			doStuff: allStuff
		})
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
				<ItemBuilder thingsToDo={this.state.doStuff} killSwitch={this._killThing}/>
			</div>
		)
	}
})

const InputThing = React.createClass({
	_putNewThing: function(){
		evt.preventDefault()
		this.props.refreshList({item:this.refs.task.value})
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

const ItemBuilder = React.createClass({

	_makeThing: function(todoRA){
		let todoRa 
		let component = this
		let allThings = todoRA.map(function(list, index){
			return(
				<div className="item">
					<p><span>{list.item}</span></p>
					<button ref="do_me" className="itembutt" onClick={function(){component.props.killSwitch(index)}} ><i className="fa fa-asterisk"></i></button>
				</div>
			)
		}).reverse()
		return allThings
	},

	render: function(){
		return (
			<div classname="halp">
				{this._makeThing(this.props.doStuff)}
			</div>
		)
	}
})

let bigDealZone = document.querySelector('.bigdeal')
ReactDOM.render ( <BigDealContainer/>, bigDealZone)
