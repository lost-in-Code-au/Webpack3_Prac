import { Component } from 'react'//ES6 syntax of [import React from 'react'] for [React.Component]
import { render } from 'react-dom'//ES6 syntax of [import ReactDOM from 'react-dom'] for [ReactDOM.render]

class About extends Component {
    render() {
        return(
            <div> This is some info on the company.</div>
        )
    }
}

render(<About />, document.getElementById('react-container'))