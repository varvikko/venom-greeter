import React from 'react'
import PropTypes from 'prop-types'

class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.menuRef = React.createRef()
    }

    addPrefix() {
        if (this.menuRef.current) {
            this.menuRef.current.style[
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
                className={`menu ${this.props.open ? 'is-open' : ''}`}
                ref={this.menuRef}
                style={{ backdropFilter: `blur(${this.props.blur}px)` }}></div>
        )
    }
}

Menu.propTypes = {
    open: PropTypes.bool,
    blur: PropTypes.number,
    backgroundColor: PropTypes.string,
    shadow: PropTypes.bool
}

export default Menu
