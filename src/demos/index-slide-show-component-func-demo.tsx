import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import SlideShow from "../components/slide-show-func";
import Slide from "../components/slide-component-func";
import {bodySlideStyle, listUnstyled} from "../slide.style";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let node = (
    <SlideShow>
        <Slide heading="Styling in React" page={{current: 1, total: 2}}>
            <ul style={{...bodySlideStyle, ...listUnstyled}}>
                <li>You can style using css classes</li>
                <li>You can style using inline styling</li>
            </ul>
        </Slide>
        <Slide heading="Props in React" page={{current: 2, total: 2}}>
            <p style={bodySlideStyle}>
                Props are like attributes for ReactNodes/Elements. It is used to customize the content in a component
            </p>
        </Slide>
        <Slide heading="State in React" page={{current: 2, total: 2}}>
            <p style={bodySlideStyle}>
                States are used to dynamically change the data in the component on some trigger.
            </p>
        </Slide>
    </SlideShow>
);
// root.render(
//     <React.StrictMode>
//         <Slide/>
//     </React.StrictMode>
// )
root.render(node);