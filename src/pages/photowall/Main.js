import React, {Component} from 'react';
import Title from "./Title";
import './stylesheet.css'
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Route, Routes} from "react-router-dom";

class Main extends Component {

    constructor() {
        super();

        this.state = {
            posts: []
        };

        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat(postSubmitted)
        }))
    }

    //This method is called instantly after the component is injected into the DOM
    //it can be used to initialize any data that is required to fill the screen
    componentDidMount() {
        const data = simulateFetchFromDB();
        this.setState({
            posts: data,
            screen: 'photos' //photos or AddPhotos
        })
    }

    render() {

        return <div>

            {/*The routing for this guys is already defined on App.js, as /Main*/}
            <Title title={'Photowall'}/>
            <Routes>
                <Route path="/" element={<PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>} />
                <Route path="AddPhoto" element={
                    <AddPhoto onAddPhoto={(addedPost)=>{
                        this.addPhoto(addedPost)
                        //history.push("/")
                        // TODO navigate back to /photowall.. it is simple to be done with hooks but it is a nightmare with classes apparently
                    }}/>
                 } />
            </Routes>

        </div>
    }
}

function simulateFetchFromDB() {
    return [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
            "3919321_1443393332_n.jpg"
    }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }]
}


export default Main;