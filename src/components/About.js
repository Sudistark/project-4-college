import React from 'react';
import Rainbow from './hoc/Rainbow'

const About = (props) =>{
    //console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about.html')
    // }, 3000)
    return(
        <div className="container">
            <h4 className="center">About Us</h4>
            <p>lorem Excepteur laborum et velit reprehenderit minim exercitation nostrud velit laborum ea amet laborum qui laboris.</p>
        </div>
    )
}

export default Rainbow(About);