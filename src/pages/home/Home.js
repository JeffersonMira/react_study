import React, {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div>
                {/*anything received in the props has to be sent in the component definition*/}
                {/*not needed to create an @Input () like in angular*/}
                {this.props.title}

            </div>
        );
    }
}

export default Home;
