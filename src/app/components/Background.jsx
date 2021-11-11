import React from 'react'
import PropTypes from 'prop-types'

class Background extends React.Component {
    constructor(props) {
        super(props)

        this.backgroundRef = React.createRef()
    }

    addPrefix() {
        if (this.backgroundRef.current) {
            this.backgroundRef.current.style[
                '-webkit-backdrop-filter'
            ] = `blur(${this.props.blur}px)`
        }
    }

    componentDidMount() {
        this.addPrefix()
    }

    componentDidUpdate() {
        this.addPrefix()
    }

    render() {
        return (
            <div
                className='background'
                style={{
                    backgroundImage: `url(${this.props.image})`
                }}>
                <div
                    className='background-color'
                    style={{
                        backdropFilter: `blur(${this.props.blur}px)`
                    }}
                    ref={this.backgroundRef}
                />
            </div>
        )
    }
}

Background.propTypes = {
    image: PropTypes.string,
    blur: PropTypes.number,
    color: PropTypes.string
}

export default Background
