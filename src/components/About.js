import React from "react";
 
const About = ({ image, about }) => {
    return( <div>
        <aside>
            <img alt='blog logo' src= {image ? image : 'https://via.placeholder.com/215'}
            />
            <p>{about}</p>
        </aside>
        </div>
    )

}

export default About;