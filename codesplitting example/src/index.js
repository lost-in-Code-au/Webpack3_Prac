import { Component } from 'react'//ES6 syntax of [import React from 'react'] for [React.Component]
import { render } from 'react-dom'//ES6 syntax of [import ReactDOM from 'react-dom'] for [ReactDOM.render]

class Display extends Component {
    render() {
        return(
            <div> Important Announcement </div>
        )
    }
}

render(<Display />, document.getElementById('react-container'))