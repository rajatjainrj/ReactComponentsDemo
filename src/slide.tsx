import './css/slide.css';
import React, {Fragment} from "react";

const headingStyle = {
    fontSize: '4em'
}

const bodySlideStyle = {
    fontSize: '2.5em'
}

const textCenter = {
    textAlign: 'center' as const
}

const headingStyleFinal = {
    ...headingStyle,
    ...textCenter
}

const listUnstyled = {
    listStyleType: 'none',
    padding: 0,
    margin: 0
}



const el = (
    <div className="slide">
        <h1 style={headingStyleFinal}>Styling in React</h1>
        <hr/>
        <ul style={{...bodySlideStyle, ...listUnstyled}}>
            <li>You can style using css classes</li>
            <li>You can style using inline styling</li>
        </ul>
    </div>
);

export default el;