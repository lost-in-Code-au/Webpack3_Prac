import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

class Image extends React.Component {
    constructor(props) {
        super()
        this.state = {
            title: "Billy A.K.A The little man"
        }
    }
    
    render() {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div id="image"></div>
                <p>{this.props.caption}</p>
            </div>
        )
    }
}

ReactDOM.render(<Image caption="The party cat" />, 
    document.getElementById('react-container'))
