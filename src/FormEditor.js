import React, { Component } from 'react'

export default class FormEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {clicked: false, first: '', last: '', otherFirst: '', otherLast: ''}
    }

    edit = () => {this.setState({clicked: true})}

    save = () => {this.setState({clicked: false, first: this.state.otherFirst, last: this.state.otherLast})}

    cancel = () => {this.setState({clicked: false, otherFirst: this.state.first, otherLast: this.state.last})}

    updateFirst = (event) => {this.setState({otherFirst: event.target.value})}

    updateLast = (event) => {this.setState({otherLast: event.target.value})}

    displaySaveCancel = () => {
        return (
        <div>
            <input type='text' onChange={this.updateFirst} placeholder={this.state.first}></input>
            <input type ='text' onChange={this.updateLast} placeholder={this.state.last}></input>
            <button onClick = {this.save}>Save</button>
            <button onClick = {this.cancel}>Cancel</button>
        </div>
        )
    }
    
    displayEdit = () => {
        return (
        <div>
            <div>First Name: {this.state.first}</div>
            <div>Last Name: {this.state.last}</div>
            <button onClick = {this.edit}>Edit</button>
        </div>)
    }

    render() {
        return <div>{this.state.clicked ? this.displaySaveCancel() : this.displayEdit()}</div>
    }
}
