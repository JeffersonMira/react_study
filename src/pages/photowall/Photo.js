import PropTypes from "prop-types";

const Photo = (props) => {

    const post = props.post;
    return <figure className="figure">
        <img src={post.imageLink} alt={post.description} className="photo"/>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button onClick={()=>{
                props.onRemovePhoto(post);
            }}>Remove</button>
        </div>
    </figure>
}

//This guy here defines what attributes are mandatory to be received when calling this guy.
//In case it is not called, it is going to throw an exception in the console log.
// TODO verify it is used yet. Per what I checked, seems like a lot of people deslike it.
Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
}

export default  Photo