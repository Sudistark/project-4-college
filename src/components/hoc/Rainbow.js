import React from 'react';

const Rainbow = (WrappedComponent) => {
    
    const colors = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'pink']
    const randomColor = colors[Math.floor(Math.random() * 7)]
    //Taking  a random color from the array
    const className = randomColor + '-text';
    //Classname will equal to the eg: red-text
    return(props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )

    }
}

export default Rainbow