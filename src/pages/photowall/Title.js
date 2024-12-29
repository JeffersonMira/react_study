import React, {Component} from 'react';


/**
 * Classes are not recommended anymore. Use Functions instead : https://react.dev/reference/react/Component
 */
class Title extends Component{
    render (){
        return <h1>{this.props.title}</h1>
    }
}

export default  Title