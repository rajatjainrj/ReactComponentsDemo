import '../css/slide.css'
import React, {Component, ReactNode} from "react";
import {headingStyleFinal, pageStyle} from '../slide.style'

type Props = {
    heading: string,
    children: ReactNode,
    page?: {
        current: number,
        total: number
    }
}

class Slide extends Component<Props> {
    render() {
        const {heading, children, page} = this.props;
        let el = (
            <div className="slide">
                <div style={pageStyle}>{`${page?.current}/${page?.total}`}</div>
                <h1 style={headingStyleFinal}>{heading}</h1>
                <hr/>
                {children}
            </div>
        )
        return el;
    }
}

export default Slide;
