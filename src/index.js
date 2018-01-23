import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

class Image extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <div id="image"></div>
                <p>{this.props.caption}</p>
            </div>
        )
    }
}

ReactDOM.render(<Image title='Billy dah Cat' caption="The party cat" />, 
    document.getElementById('react-container'))
