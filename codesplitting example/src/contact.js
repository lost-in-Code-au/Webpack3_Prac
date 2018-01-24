import { Component } from 'react'//ES6 syntax of [import React from 'react'] for [React.Component]
import { render } from 'react-dom'//ES6 syntax of [import ReactDOM from 'react-dom'] for [ReactDOM.render]

class Contact extends Component {
    render() {
        return(
            <div> This is some info on how to contact the company. {mailto}ie lic@gmail.com</div>
        )
    }
}

render(<Contact />, document.getElementById('react-container'))