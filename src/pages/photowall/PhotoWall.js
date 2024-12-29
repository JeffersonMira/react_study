import React, {Component} from 'react';
import Photo from "./Photo";
import PropTypes from  'prop-types'
import {Link} from "react-router-dom";

// Stateless function instead of using a class.
function PhotoWall(props) {
    return <div>
        <Link className="addIcon" to="AddPhoto"/>
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>
}

//This guy here defines what attributes are mandatory to be received when calling this guy.
//In case it is not called, it is going to throw an exception in the console log.
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
}

export default  PhotoWall