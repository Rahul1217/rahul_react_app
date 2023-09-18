

function ProfileCard({title,handle,image,description})
{
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pad logo"></img>
                </figure>
                
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4"> Titel is {title}</p>
                    <p className="title is-6"> handle is {handle}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
    </div>
    );
}

export default ProfileCard;