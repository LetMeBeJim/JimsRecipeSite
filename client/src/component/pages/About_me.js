import React from 'react';
import './About_me.css'
import '../../App.css'


function About_me() {
    const txt_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu diam ut ex lacinia imperdiet. Cras venenatis ultrices erat, eu efficitur ante pulvinar quis. Vestibulum leo leo, faucibus sed consequat at, facilisis at dolor. Nunc sit amet nunc at ex sodales rutrum et sed tortor. Praesent elementum rutrum semper. Curabitur sed dui eget leo sollicitudin fringilla. Duis dignissim, risus eu condimentum laoreet, urna quam mattis arcu, eget accumsan enim metus et elit.\n Integer consequat, metus ac mattis accumsan, turpis nunc pellentesque orci, et accumsan ligula enim et arcu. Phasellus tempus interdum dictum. Sed quis magna consectetur lacus pellentesque ultrices. Ut cursus ornare nulla. Vivamus luctus diam et nulla facilisis, eleifend aliquam purus egestas. Aenean aliquam lorem vitae tincidunt volutpat. Mauris ac magna eget lacus scelerisque suscipit. Maecenas consequat pharetra ligula, at dapibus leo posuere et. Quisque nec felis imperdiet, pharetra ante a, imperdiet lorem. Curabitur convallis ac urna vitae iaculis. Aliquam dictum rhoncus bibendum.";
    return (
        <>
        <div className="container">
            <div className="about-container">
                <div className="txt-1">
                    <h2>Who am I?</h2>
                    <p>{txt_1}</p>
                </div>
                <div className="txt-2">
                    <h2>Why recipes?</h2>
                    <p>{txt_1}</p>
                </div>
                <div className="txt-3">
                    <h2>Some other things I am also working on...</h2>
                    <p>{txt_1}</p>
                </div>
                <div className="txt-4">
                    <h2>What else I know about</h2>
                    <p>{txt_1}</p>
                </div>
            </div>
        </div>
        </>
    )

}


export default About_me