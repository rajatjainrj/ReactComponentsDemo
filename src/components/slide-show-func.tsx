import React, {cloneElement, ReactElement, useState} from "react";

type Props = {
    children: ReactElement[]
}

const SlideShow = (props: Props) => {
    const {children} = props;

    const [activeSlide, setActiveSlide] = useState<number>(0);

    let previous = () => {
        console.log("Previous Clicked");
        setActiveSlide(activeSlide => Math.max(activeSlide - 1, 0));
    }

    let next = () => {
        console.log("Next Clicked");
        setActiveSlide(activeSlide => Math.min(activeSlide + 1, children.length - 1));
    }

    return (<>
        <div style={{float: 'right'}}>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
        {
            cloneElement(children[activeSlide], {
                page: {
                    current: activeSlide + 1,
                    total: children.length
                }
            })
        }
    </>);
}

export default SlideShow;