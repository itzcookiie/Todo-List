import React, { Component } from 'react'
import List from './List';

class Form extends Component {

    state = {
        text: '',
        list: []
    }

    addTextToState = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    addTextToList = (event) => {
        event.preventDefault()
        this.setState({
            list: [...this.state.list, this.state.text],
            text: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.state.text ? this.addTextToList : (event) => event.preventDefault()}>
                    <input onChange={this.addTextToState} type='text' value={this.state.text} name='text' placeholder='Enter text...'  />
                    <input  type='submit' value='AddToList' />
                </form>
                {this.state.list.map(item => 
                    < List item={item} key={this.state.list.indexOf(item) + 1} />  )} 
            </div>
        )
    }
}

export default Form