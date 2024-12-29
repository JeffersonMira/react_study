import React, {Component} from 'react';


/**
 * Classes are not recommended anymore. Use Functions instead : https://react.dev/reference/react/Component
 */
class AddPhoto extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value

        const post ={
            id: 0,
            description : description,
            imageLink : imageLink
        }

        if(description && imageLink){
            this.props.onAddPhoto(post)
        }
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button> Post </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto