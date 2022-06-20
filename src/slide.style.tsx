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

const pageStyle = {
    float: 'right' as const,
    fontSize: '2.5em',
    margin: '1em'
}

export {
    headingStyle, bodySlideStyle, headingStyleFinal, listUnstyled, textCenter, pageStyle
}