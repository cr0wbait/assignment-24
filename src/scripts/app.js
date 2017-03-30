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

	_newThing: function(newStuff){
		let allStuff = this.state.doStuff.map(function(stuff) {return stuff})
		allStuff.push(newStuff)
		this.setState({
			doStuff: allStuff
		})
	},

	_oldThing: function(didStuff){
		let doneStuff = this.state.doStuff.filter(function(listThing){
			if (didStuff !== listThing.item){
				return true
			} else {
				return false
			}
		})
			this.setState({
				doStuff: doneStuff
			})
	},

	_makeABigDeal: function(everythings, index){
		let component = this
		let allThings = everythings.map(function(list, index){
		let tellThings = document.querySelector('.tellThings')
			return(
				<div className="item">
					<p>what am i</p>
					<button><i className="fa fa-asterisk"></i></button>
				</div>
			)
		})
		return allThings
	},

	render: function(){
		return (
			<div className="bigdeal">
				<h1>Do Me.</h1>
					<InputThing refreshList={this._newThing}/>
					<div className="items">
						{this._makeABigDeal(this.state.doStuff)}
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

const UnThing = React.createClass({
	_throwStuffAway: function(){
		this.props.removeItem(this.props.everythings.item)
	},

	render: function (){
		return (
			<div className="bigList">
				<span><input ref="trashbin" type="checkbox" className="form-inline"></input> {this.props.everythings.item} </span>
				<button className = "mash_me" onClick={this._oldThing}></button>
			</div>
		)
	}
})

let bigDealZone = document.querySelector('#app-container')
ReactDOM.render ( <BigDealContainer/>, bigDealZone)
